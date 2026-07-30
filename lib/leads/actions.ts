"use server";

import { parseLead, quote, readField, usd, type Lead, type LeadFieldErrors } from "./index";

/**
 * The one server-side thing on this site: /get-started posts here and the lead
 * goes out through Resend.
 *
 * Resend is called over its REST API rather than through the `resend` package —
 * it is a single POST, `fetch` is native, and the repo's dependency list is
 * short on purpose. Swapping in the SDK later is a same-shape change.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Where leads land. */
const TO = process.env.LEAD_TO_EMAIL ?? "Sales@xevantis.com";

/**
 * Sender. The domain has to be verified in Resend or the API rejects the send,
 * which is why it is configurable — a preview deploy may not own xevantis.com.
 */
const FROM = process.env.LEAD_FROM_EMAIL ?? "Xevantis Website <leads@xevantis.com>";

/** Resend is a third party on the request path; do not hold the action open for it. */
const SEND_TIMEOUT_MS = 10_000;

const FALLBACK = `We couldn't get that through. Email ${TO} and we'll pick it up from there.`;

export type LeadState =
  | { status: "idle" }
  | { status: "invalid"; errors: LeadFieldErrors }
  | { status: "failed"; message: string }
  | { status: "sent"; firstName: string };

export async function submitLead(
  _previous: LeadState,
  form: FormData,
): Promise<LeadState> {
  // Honeypot: a field no human ever sees and a naive bot always fills.
  // Answering with success is deliberate — a failure only teaches it to retry.
  // ponytail: this is the whole spam defense. If it starts leaking through,
  // the upgrade is a per-IP token bucket in front of the send, not a captcha.
  if (readField(form, "company_website")) {
    return { status: "sent", firstName: "" };
  }

  const parsed = parseLead(form);
  if (!parsed.ok) return { status: "invalid", errors: parsed.errors };

  const { lead } = parsed;
  const estimate = quote(lead.engagement);
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Loud, and never a silent success: an undelivered lead that looked
    // delivered is worse than an error the visitor can act on.
    console.error("[leads] RESEND_API_KEY is not set — dropped lead from", lead.email);
    return { status: "failed", message: FALLBACK };
  }

  const subject =
    `New lead — ${lead.company} · ${estimate.seats}× ${estimate.hoursPerWeek}h/wk · ${usd(estimate.monthly)}/mo`
      // Collapsed because a header carrying a newline is a header injection.
      .replace(/\s+/g, " ");

  let response: Response;
  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        // The whole point: sales hits reply and lands in the buyer's inbox.
        reply_to: lead.email,
        subject,
        html: leadHtml(lead, estimate),
        text: leadText(lead, estimate),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
    });
  } catch (error) {
    console.error("[leads] Resend request failed", error);
    return { status: "failed", message: FALLBACK };
  }

  if (!response.ok) {
    console.error("[leads] Resend rejected the send", response.status, await response.text());
    return { status: "failed", message: FALLBACK };
  }

  return { status: "sent", firstName: lead.name.split(" ")[0] ?? "" };
}

/* ==========================================================================
   MESSAGE BODY
   ========================================================================== */

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Every value below is visitor-supplied and lands in HTML. */
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ESCAPES[char]);

const rows = (lead: Lead, estimate: ReturnType<typeof quote>): [string, string][] => [
  ["Name", lead.name],
  ["Email", lead.email],
  ["Company", lead.company],
  ["Phone", lead.phone || "—"],
  ["Interested in", lead.service || "Not specified"],
  ["Start window", lead.timeline],
  ["Team size", `${estimate.seats} ${estimate.seats === 1 ? "person" : "people"}`],
  ["Schedule", `${estimate.hoursPerWeek} hrs/week each · ${estimate.hoursPerMonth} hrs/month total`],
  ["Rate asked for", `${usd(estimate.hourlyRate)}/hour`],
  ["Estimate shown", `${usd(estimate.monthly)}/month`],
];

function leadHtml(lead: Lead, estimate: ReturnType<typeof quote>) {
  const cells = rows(lead, estimate)
    .map(
      ([label, value]) => `<tr>
        <td style="padding:6px 16px 6px 0;color:#55515f;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
        <td style="padding:6px 0;color:#0e0d12;font-weight:600">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");

  const notes = lead.details
    ? `<h2 style="margin:28px 0 8px;font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#7b7786">In their words</h2>
       <p style="margin:0;white-space:pre-wrap;color:#26242e">${escapeHtml(lead.details)}</p>`
    : "";

  return `<div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:15px;line-height:1.6;color:#0e0d12">
    <h1 style="margin:0 0 4px;font-size:20px">${escapeHtml(lead.company)}</h1>
    <p style="margin:0 0 24px;color:#55515f">Get started form · ${escapeHtml(lead.name)} &lt;${escapeHtml(lead.email)}&gt;</p>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">${cells}</table>
    ${notes}
    <p style="margin:28px 0 0;font-size:13px;color:#7b7786">Reply to this email to answer ${escapeHtml(lead.name)} directly.</p>
  </div>`;
}

function leadText(lead: Lead, estimate: ReturnType<typeof quote>) {
  const lines = rows(lead, estimate).map(([label, value]) => `${label}: ${value}`);
  if (lead.details) lines.push("", "In their words:", lead.details);
  return lines.join("\n");
}
