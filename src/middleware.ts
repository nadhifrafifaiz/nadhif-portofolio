import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
  try {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      negotiatorHeaders[key] = value;
    });

    const locales: string[] = [...i18n.locales];
    const languages = new Negotiator({
      headers: negotiatorHeaders,
    }).languages();
    const locale = matchLocale(languages, locales, i18n.defaultLocale);

    return locale || i18n.defaultLocale;
  } catch (error) {
    console.error("Locale detection failed:", error);
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Safeguard against undefined or empty locale
    if (!locale || locale === i18n.defaultLocale) {
      return NextResponse.next();
    }

    const url = new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url,
    );

    if (locale === i18n.defaultLocale) {
      return NextResponse.rewrite(url);
    }

    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Always return a response
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|sitemap.xml|robots.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.ico).*)",
  ],
};
