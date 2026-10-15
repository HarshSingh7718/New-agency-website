/**
 * Resend Transactional Email Service
 * 
 * Reserved for one-way (ek-tarfa) system & notification emails:
 * - Welcome emails
 * - OTP verifications
 * - Invoice / Proposal PDFs
 * - Account alerts & receipts
 */

export type TransactionalEmailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
};

export async function sendTransactionalNotification({
  to,
  subject,
  html,
  text,
}: TransactionalEmailOptions): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !from) {
    throw new Error("RESEND_CONFIGURATION_INCOMPLETE");
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text: text || "",
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error(
      "Resend transactional delivery failed:",
      resendResponse.status,
      errorBody.slice(0, 500),
    );
    throw new Error("RESEND_DELIVERY_FAILED");
  }
}
