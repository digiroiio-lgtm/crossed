import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";
import { getSessionFromRequest } from "@/lib/supabase/auth";

export async function GET(request: NextRequest) {
  const user = await getSessionFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const supabase = createSupabaseAdmin();
    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Admin waitlist fetch error:", error.message);
      return NextResponse.json({ error: "Failed to fetch entries." }, { status: 500 });
    }

    return NextResponse.json({ entries: data });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
