import { NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabase/server";

// Magic-link lands here with ?code=... — exchange it for a session, then go to /admin.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/admin";

  if (code) {
    const supabase = await supabaseServer();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }
  return NextResponse.redirect(`${origin}/admin/login?error=auth`);
}
