import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  contact?: string;
  service?: string;
  message?: string;
};

const AIRTABLE_API_URL = "https://api.airtable.com/v0";

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  return value?.trim() ? value : undefined;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch (error) {
    console.error("Invalid JSON payload", error);
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const { name, contact, service, message } = payload;

  if (!name || !contact || !service || !message) {
    return NextResponse.json({
      error: "Missing required fields: name, contact, service, and message are all required.",
    }, { status: 400 });
  }

  const personalAccessToken = getEnv("AIRTABLE_PERSONAL_ACCESS_TOKEN");
  const baseId = getEnv("AIRTABLE_BASE_ID");
  const tableName = getEnv("AIRTABLE_TABLE_NAME") ?? "Requests";

  if (!personalAccessToken || !baseId) {
    console.error("Missing Airtable credentials. Check AIRTABLE_PERSONAL_ACCESS_TOKEN and AIRTABLE_BASE_ID.");
    return NextResponse.json({
      error: "Server misconfiguration. Please try again later.",
    }, { status: 500 });
  }

  const createdAt = new Date().toISOString();

  try {
    const tablePath = encodeURIComponent(tableName);
    const airtableResponse = await fetch(`${AIRTABLE_API_URL}/${baseId}/${tablePath}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${personalAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Contact: contact,
          Service: service,
          Message: message,
          "Submitted At": createdAt,
        },
      }),
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error("Airtable API error", errorText);
      return NextResponse.json({
        error: "Failed to submit enquiry. Please try again soon.",
      }, { status: airtableResponse.status });
    }

    await sendContactNotification({
      name,
      contact,
      service,
      message,
      submittedAt: createdAt,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error submitting to Airtable or sending email", error);
    return NextResponse.json({
      error: "Unexpected server error. Please try again later.",
    }, { status: 500 });
  }
}
