import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import verifyAuth from "./lib/verifyAuth";

export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;

  const verifiedToken =
    authToken &&
    (await verifyAuth(authToken).catch((error) => console.error(error)));

  if (request.url.includes("/login") && verifiedToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/bookmarks", "/calendar", "/login"],
};
