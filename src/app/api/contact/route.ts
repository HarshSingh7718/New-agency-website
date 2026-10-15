import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactMessage = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyUrl: string;
  projectDetails: string;
};

type EmailContent = {
  subject: string;
  html: string;
  text: string;
};

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailContent(message: ContactMessage): EmailContent {
  const fullName = `${message.firstName} ${message.lastName}`.trim();
  const safeDetails = escapeHtml(message.projectDetails).replaceAll("\n", "<br />");

  return {
    subject: `New website enquiry from ${fullName}`.slice(0, 180),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1A0B2E">
        <h2>New RapidGroDigital enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(message.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(message.phone || "Not provided")}</p>
        <p><strong>Company URL:</strong> ${escapeHtml(message.companyUrl || "Not provided")}</p>
        <hr />
        <p><strong>Project details</strong></p>
        <p>${safeDetails}</p>
      </div>
    `,
    text: [
      "New RapidGroDigital enquiry",
      `Name: ${fullName}`,
      `Email: ${message.email}`,
      `Phone: ${message.phone || "Not provided"}`,
      `Company URL: ${message.companyUrl || "Not provided"}`,
      "",
      "Project details:",
      message.projectDetails,
    ].join("\n"),
  };
}

async function sendWithZoho(
  message: ContactMessage,
  content: EmailContent,
): Promise<void> {
  const zohoUser = process.env.ZOHO_USER?.trim();
  const zohoAppPassword = process.env.ZOHO_APP_PASSWORD
    ?.replaceAll(" ", "")
    .trim();
  const zohoHost = process.env.ZOHO_HOST?.trim() || "smtppro.zoho.com";
  const zohoPort = Number(process.env.ZOHO_PORT) || 465;
  const to = process.env.CONTACT_TO_EMAIL?.trim() || zohoUser;

  if (!zohoUser || !zohoAppPassword || !to) {
    throw new Error("ZOHO_CONFIGURATION_INCOMPLETE");
  }

  const transporter = nodemailer.createTransport({
    host: zohoHost,
    port: zohoPort,
    secure: zohoPort === 465,
    auth: {
      user: zohoUser,
      pass: zohoAppPassword,
    },
  });

  const fullName = `${message.firstName} ${message.lastName}`.trim();

  // Send inquiry to owner with Reply-To set to the client's email so the owner
  // can directly click "Reply" in their email client to talk with the client.
  await transporter.sendMail({
    from: `RapidGroDigital Website <${zohoUser}>`,
    to,
    replyTo: fullName ? `"${fullName}" <${message.email}>` : message.email,
    subject: content.subject,
    html: content.html,
    text: content.text,
  });
}

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  const limiter = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);

  if (!limiter.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a few minutes." },
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

  // Honeypot. Real users never see or fill this field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  let firstName = clean(body.firstName, 80);
  let lastName = clean(body.lastName, 80);
  const fullName = clean(body.fullName, 160);

  if ((!firstName || !lastName) && fullName) {
    const parts = fullName.split(/\s+/);
    firstName = parts[0] || "";
    lastName = parts.slice(1).join(" ") || "Client";
  }

  const message: ContactMessage = {
    firstName,
    lastName: lastName || "Client",
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 40),
    companyUrl: clean(body.companyUrl || body.companyName, 500),
    projectDetails:
      clean(body.projectDetails, 5000) ||
      "Quick consultation inquiry submitted from website popup modal.",
  };

  if (
    !message.firstName ||
    !message.email ||
    !message.projectDetails
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(message.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const content = buildEmailContent(message);

  try {
    // Deliver website enquiries via Zoho Mail directly to the owner inbox
    await sendWithZoho(message, content);
  } catch (error) {
    console.error("Contact delivery error:", error);

    const code = error instanceof Error ? error.message : "UNKNOWN";

    if (code === "ZOHO_CONFIGURATION_INCOMPLETE") {
      return NextResponse.json(
        { error: "Contact delivery is not configured yet." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "We could not send your message right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
