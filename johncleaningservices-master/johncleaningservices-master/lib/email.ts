import nodemailer from "nodemailer";

export type ContactNotificationPayload = {
  name: string;
  contact: string;
  service: string;
  message: string;
  submittedAt: string;
};

const TRUE_VALUES = new Set(["true", "1", "yes", "y", "on"]);

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value.trim();
}

function readBooleanEnv(name: string, defaultValue = false): boolean {
  const value = process.env[name];
  if (!value) {
    return defaultValue;
  }
  return TRUE_VALUES.has(value.trim().toLowerCase());
}

let cachedTransporter: nodemailer.Transporter | undefined;

function getTransporter(): nodemailer.Transporter {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const portValue = requireEnv("EMAIL_PORT");
  const port = Number.parseInt(portValue, 10);
  if (Number.isNaN(port)) {
    throw new Error(`EMAIL_PORT must be a number. Received "${portValue}".`);
  }

  cachedTransporter = nodemailer.createTransport({
    host: requireEnv("EMAIL_HOST"),
    port,
    secure: readBooleanEnv("EMAIL_SECURE"),
    auth: {
      user: requireEnv("EMAIL_USER"),
      pass: requireEnv("EMAIL_PASSWORD"),
    },
  });

  return cachedTransporter;
}

function buildHtmlBody(details: ContactNotificationPayload) {
  return `
    <p>You have a new cleaning service enquiry.</p>
    <ul>
      <li><strong>Name:</strong> ${details.name}</li>
      <li><strong>Contact:</strong> ${details.contact}</li>
      <li><strong>Service:</strong> ${details.service}</li>
      <li><strong>Submitted:</strong> ${details.submittedAt}</li>
    </ul>
    <p><strong>Message</strong></p>
    <p>${details.message.replace(/\n/g, "<br />")}</p>
  `;
}

export async function sendContactNotification(details: ContactNotificationPayload) {
  const transporter = getTransporter();
  const from = requireEnv("EMAIL_FROM");
  const to = process.env.EMAIL_TO?.trim() || requireEnv("EMAIL_USER");
  const subject = `New cleaning enquiry – ${details.service}`;
  const replyTo = details.contact.includes("@") ? details.contact : undefined;

  const text = [
    "New cleaning service enquiry",
    `Name: ${details.name}`,
    `Contact: ${details.contact}`,
    `Service: ${details.service}`,
    `Submitted: ${details.submittedAt}`,
    "",
    details.message,
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    text,
    html: buildHtmlBody(details),
  });
}
