import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";
import { getSessionFromRequest } from "@/lib/supabase/auth";
import type { WaitlistEntry } from "@/types/database";

function toCSV(entries: WaitlistEntry[]): string {
  const headers = ["id", "name", "email", "city", "use_case", "source", "utm_source", "utm_medium", "utm_campaign", "created_at"];
  const rows = entries.map((e) =>
    headers.map((h) => {
      const val = e[h as keyof WaitlistEntry] ?? "";
      // Escape quotes and wrap in quotes if contains comma or newline
      const str = String(val);
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    }).join(",")
  );
  return [headers.join(","), ...rows].join("\n");
}

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
      console.error("Admin export error:", error.message);
      return NextResponse.json({ error: "Failed to export entries." }, { status: 500 });
    }

    const csv = toCSV((data ?? []) as WaitlistEntry[]);
    const filename = `crossed-waitlist-${new Date().toISOString().slice(0, 10)}.csv`;

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
