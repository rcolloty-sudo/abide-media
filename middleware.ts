import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "hello@abidemediagroup.com.au")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

function isHttpUrl(u?: string): u is string {
  if (!u) return false;
  try {
    const p = new URL(u);
    return p.protocol === "http:" || p.protocol === "https:";
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  const toLogin = () => NextResponse.redirect(new URL("/admin/login", request.url));

  // Not configured or misconfigured (bad URL / missing key): never crash.
  // Block the protected area, allow the login page through.
  if (!isHttpUrl(url) || !key) {
    if (path.startsWith("/admin") && path !== "/admin/login") return toLogin();
    return NextResponse.next();
  }

  try {
    let response = NextResponse.next({ request });

    const supabase = createServerClient(url, key, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();
    const isAdmin = !!user && ADMIN_EMAILS.includes((user.email || "").toLowerCase());

    const carry = (to: string) => {
      const r = NextResponse.redirect(new URL(to, request.url));
      response.cookies.getAll().forEach((c) => r.cookies.set(c.name, c.value, c));
      return r;
    };

    if (path.startsWith("/admin") && path !== "/admin/login" && !isAdmin) return carry("/admin/login");
    if (path === "/admin/login" && isAdmin) return carry("/admin");
    return response;
  } catch (err) {
    console.error("admin middleware error:", err);
    if (path.startsWith("/admin") && path !== "/admin/login") return toLogin();
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
