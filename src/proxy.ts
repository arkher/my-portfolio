import { NextResponse, type NextRequest } from "next/server";
import { localeCookie, localeFromPath, pickLocale } from "@/lib/i18n";

/**
 * Send visitors without a locale in the URL to their language:
 * a saved choice first, then the browser's Accept-Language, then English.
 */
export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  if (localeFromPath(pathname)) return NextResponse.next();

  const locale = pickLocale({
    saved: request.cookies.get(localeCookie)?.value,
    acceptLanguage: request.headers.get("accept-language"),
  });

  const url = request.nextUrl.clone();
  // One-page site: legacy paths (/about, /projects, /articles) land on the localized home.
  url.pathname = `/${locale}`;
  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
};

export const config = {
  // Skip Next internals and any file with an extension (PDFs, images, favicon).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
