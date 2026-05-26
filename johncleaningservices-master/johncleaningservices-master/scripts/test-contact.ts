import "dotenv/config";

import { sendContactNotification } from "../lib/email";

function getArgValue(flag: string): string | undefined {
  const index = process.argv.findIndex((arg) => arg === flag);
  if (index === -1) {
    return undefined;
  }
  return process.argv[index + 1];
}

async function main() {
  const payload = {
    name: getArgValue("--name") ?? "Cascade Test",
    contact: getArgValue("--contact") ?? "globalhair154@gmail.com",
    service: getArgValue("--service") ?? "Deep Clean",
    message: getArgValue("--message") ?? "Automated test submission from scripts/test-contact.ts",
    submittedAt: new Date().toISOString(),
  };

  await sendContactNotification(payload);
  const destination = process.env.EMAIL_TO?.trim() || process.env.EMAIL_USER;
  console.log(`Notification dispatched to ${destination ?? "configured recipient"}.`);
}

main().catch((error) => {
  console.error("Failed to send contact notification", error);
  process.exit(1);
});
