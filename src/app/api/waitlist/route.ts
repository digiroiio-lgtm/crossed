import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

function isValidEmail(email: string): boolean {
  if (email.includes(" ") || email.includes("\t")) return false;
  const at = email.indexOf("@");
  if (at < 1) return false;
  const domain = email.slice(at + 1);
  const dot = domain.lastIndexOf(".");
  return dot > 0 && dot < domain.length - 1 && !domain.includes("@");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as Record<string, unknown>;

    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const city = typeof body.city === "string" ? body.city.trim() : undefined;
    const use_case = typeof body.use_case === "string" ? body.use_case.trim() : undefined;
    const source = typeof body.source === "string" ? body.source.trim() : undefined;
    const utm_source = typeof body.utm_source === "string" ? body.utm_source.trim() : undefined;
    const utm_medium = typeof body.utm_medium === "string" ? body.utm_medium.trim() : undefined;
    const utm_campaign = typeof body.utm_campaign === "string" ? body.utm_campaign.trim() : undefined;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdmin();

    const { error } = await supabase.from("waitlist").insert({
      name: name || null,
      email,
      city: city || null,
      use_case: use_case || null,
      source: source || null,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
    });

    if (error) {
      if (error.code === "23505") {
        // Unique constraint violation — duplicate email
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }
      console.error("Waitlist insert error:", error.message);
      return NextResponse.json(
        { error: "Failed to join the waitlist. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
