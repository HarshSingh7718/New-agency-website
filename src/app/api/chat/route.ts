import { NextResponse } from "next/server";
import {
  agencySystemPrompt,
  fallbackAgencyAnswer,
} from "@/lib/agency-knowledge";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GroqStructuredResponse = {
  answer: string;
  suggestedReplies: string[];
};

const STRICT_SCHEMA_MODELS = new Set([
  "openai/gpt-oss-20b",
  "openai/gpt-oss-120b",
  "qwen/qwen3.8-27b",
]);

function clean(value: unknown, max = 1200): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function sanitizeHistory(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];

  return value
    .slice(-8)
    .map((item) => {
      if (!item || typeof item !== "object") return null;

      const content = clean((item as { content?: unknown }).content);
      const role =
        (item as { role?: unknown }).role === "assistant" ? "assistant" : "user";

      return content ? ({ role, content } as ChatMessage) : null;
    })
    .filter((item): item is ChatMessage => Boolean(item));
}

function normalizeSuggestedReplies(
  value: unknown,
  fallback: string[],
): string[] {
  const generated = Array.isArray(value)
    ? value
        .map((item) => clean(item, 90))
        .filter(Boolean)
    : [];

  const unique: string[] = [];

  for (const reply of [...generated, ...fallback]) {
    if (!unique.some((existing) => existing.toLowerCase() === reply.toLowerCase())) {
      unique.push(reply);
    }

    if (unique.length === 3) break;
  }

  return unique;
}

function responseFormat(model: string) {
  if (!STRICT_SCHEMA_MODELS.has(model)) {
    return { type: "json_object" as const };
  }

  return {
    type: "json_schema" as const,
    json_schema: {
      name: "rapidgro_chat_response",
      strict: true,
      schema: {
        type: "object",
        properties: {
          answer: { type: "string" },
          suggestedReplies: {
            type: "array",
            items: { type: "string" },
          },
        },
        required: ["answer", "suggestedReplies"],
        additionalProperties: false,
      },
    },
  };
}

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  const limiter = rateLimit(`chat:${ip}`, 25, 10 * 60 * 1000);

  if (!limiter.allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(limiter.retryAfterMs / 1000)),
        },
      },
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const message = clean(body.message);
  const history = sanitizeHistory(body.history);

  if (!message) {
    return NextResponse.json(
      { error: "Please enter a question." },
      { status: 400 },
    );
  }

  const fallback = fallbackAgencyAnswer(message);
  const groqKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

  if (!groqKey) {
    return NextResponse.json({
      answer: fallback.answer,
      suggestedReplies: fallback.suggestedReplies,
      mode: "knowledge",
    });
  }

  try {
    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${groqKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature: 0.35,
          max_completion_tokens: 650,
          reasoning_effort: model.startsWith("openai/gpt-oss-") ? "low" : undefined,
          response_format: responseFormat(model),
          messages: [
            { role: "system", content: agencySystemPrompt },
            ...history,
            { role: "user", content: message },
          ],
        }),
        signal: AbortSignal.timeout(15000),
      },
    );

    if (!groqResponse.ok) {
      const providerMessage = await groqResponse.text();
      console.error(
        "Groq request failed:",
        groqResponse.status,
        providerMessage.slice(0, 500),
      );
      throw new Error(`Groq returned ${groqResponse.status}`);
    }

    const data = (await groqResponse.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const rawContent = data.choices?.[0]?.message?.content?.trim();

    if (!rawContent) {
      throw new Error("Groq returned an empty answer.");
    }

    let structured: GroqStructuredResponse;

    try {
      structured = JSON.parse(rawContent) as GroqStructuredResponse;
    } catch {
      throw new Error("Groq returned invalid structured output.");
    }

    const answer = clean(structured.answer, 3000);

    if (!answer) {
      throw new Error("Groq returned an empty structured answer.");
    }

    return NextResponse.json({
      answer,
      suggestedReplies: normalizeSuggestedReplies(
        structured.suggestedReplies,
        fallback.suggestedReplies,
      ),
      mode: "groq",
    });
  } catch (error) {
    console.error("Groq chatbot error:", error);

    return NextResponse.json({
      answer: fallback.answer,
      suggestedReplies: fallback.suggestedReplies,
      mode: "knowledge",
    });
  }
}
