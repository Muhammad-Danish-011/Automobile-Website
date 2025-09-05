import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth");

  // Agar user dashboard pe jaye aur login na ho to redirect
  if (req.nextUrl.pathname.startsWith("/dashboard") && !auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Agar user login page pe jaye aur already login ho
  if (req.nextUrl.pathname.startsWith("/login") && auth) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"], // kin routes pe middleware chale
};
