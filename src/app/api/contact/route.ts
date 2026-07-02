import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Record<string, unknown>;

    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please provide a message of at least 10 characters." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from("contacts").insert({
      name: name || null,
      email,
      message,
    });

    if (error) {
      console.error("Contact insert error:", error.message);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 500 }
      );
    }

    // Send notification email if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (resendApiKey && adminEmail) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Crossed <noreply@crossedapp.co>",
          to: adminEmail,
          subject: `New contact from ${name ?? email}`,
          text: `Name: ${name ?? "—"}\nEmail: ${email}\n\nMessage:\n${message}`,
        });
      } catch (emailErr) {
        // Email notification failure should not fail the request
        console.error("Email notification error:", emailErr);
      }
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
