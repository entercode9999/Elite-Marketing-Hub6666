const CONTACT_EMAIL = "contact@outlierdigital.ca";

declare const process: {
  env: Record<string, string | undefined>;
};

declare const console: {
  error: (...args: unknown[]) => void;
  log: (...args: unknown[]) => void;
};

declare function fetch(
  input: string,
  init?: {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
  },
): Promise<{
  ok: boolean;
  text: () => Promise<string>;
}>;

type VercelRequest = {
  method?: string;
  body?: Record<string, unknown>;
  headers?: Record<string, string | string[] | undefined>;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getRecipients() {
  const raw = process.env.TO_EMAIL || CONTACT_EMAIL;
  return raw
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).json({});
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ message: "Missing RESEND_API_KEY" });
  }

  const body = req.body ?? {};
  const formName = cleanValue(body.formName) || "Website form";
  const firstName = cleanValue(body.firstName);
  const lastName = cleanValue(body.lastName);
  const email = cleanValue(body.email);
  const phone = cleanValue(body.phone);
  const company = cleanValue(body.company);
  const website = cleanValue(body.website);
  const service = cleanValue(body.service);
  const budget = cleanValue(body.budget);
  const message = cleanValue(body.message);
  const page = cleanValue(body.page);

  if (!email || (!firstName && formName !== "Newsletter signup")) {
    return res.status(400).json({ message: "Please complete the required fields." });
  }

  const fields = [
    ["Form", formName],
    ["Name", `${firstName} ${lastName}`.trim()],
    ["Email", email],
    ["Phone", phone],
    ["Company / Website", company || website],
    ["Service / Focus", service],
    ["Budget", budget],
    ["Message", message],
    ["Page", page],
  ].filter(([, value]) => value);

  const html = `
    <h2>New ${escapeHtml(formName)} submission</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold;border:1px solid #ddd;">${escapeHtml(label)}</td><td style="border:1px solid #ddd;">${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const to = getRecipients();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FROM_EMAIL || `Outlier Digital <${CONTACT_EMAIL}>`,
      to,
      reply_to: email,
      subject: `New ${formName} submission${firstName ? ` from ${firstName}` : ""}`,
      html,
      text,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    console.error("Resend send failed:", responseText);
    return res.status(502).json({ message: "Unable to send message right now." });
  }

  console.log("Resend send accepted:", responseText);
  return res.status(200).json({ ok: true });
}
