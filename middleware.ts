import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "hello@abidemediagroup.com.au")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Supabase not configured yet: block the protected admin area, allow /admin/login.
  if (!url || !key) {
    if (path.startsWith("/admin") && path !== "/admin/login") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.next();
  }

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

  // Gate protected admin pages.
  if (path.startsWith("/admin") && path !== "/admin/login" && !isAdmin) {
    return carry("/admin/login");
  }
  // Already signed in → skip login.
  if (path === "/admin/login" && isAdmin) {
    return carry("/admin");
  }

  return response;
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
