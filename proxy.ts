import { auth } from "@/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  apiPublicRoutes,
} from "./routes";
import { NextResponse } from "next/server";

export default async function middleware(req: any) {
  const { nextUrl } = req;
  const { pathname } = nextUrl;

  // Get session using auth instance
  const session = await auth();
  const isLoggedIn = !!session?.user;

  // Categorize routes
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isApiPublicRoute = apiPublicRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  // Allow API auth and public API routes
  if (isApiAuthRoute || isApiPublicRoute) return NextResponse.next();

  // Handle auth routes (e.g., /login, /signup)
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }
    return NextResponse.next();
  }

  // Protect non-public routes: redirect unauthenticated users to login
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL(authRoutes[0], req.url));
  }

  // Admin-only routes: render Unauthorized page for non-admins
  const adminOnlyPaths = ["/dashboard", "/admin"];
  if (
    adminOnlyPaths.includes(pathname) &&
    (!session?.user || !["SUPERADMIN", "ADMIN"].includes(session.user.role))
  ) {
    return NextResponse.rewrite(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)", // Exclude static files
  ],
};
