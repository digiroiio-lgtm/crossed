import { createClient } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";

/**
 * Verify that the request includes a valid Supabase session access token.
 * Returns the user if authenticated, or null otherwise.
 */
export async function getSessionFromRequest(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) return null;

  const authHeader = request.headers.get("Authorization");
  const accessToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!accessToken) return null;

  const supabase = createClient(url, anonKey, {
    auth: { persistSession: false },
  });

  const { data } = await supabase.auth.getUser(accessToken);
  return data.user ?? null;
}
