"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { i18n, Locale } from "@/i18n-config";
import { EnglishFlag, IndonesianFlag } from "./flags";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const params = useParams();
  const activeLang = params.lang as Locale;

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  return (
    <div className="flex h-full items-center justify-center gap-4">
      <Link
        aria-label="Locale"
        href={redirectedPathName(
          i18n.locales.filter((l) => l !== activeLang)[0],
        )}
        className="bg-bg-color-offset hover:bg-primary-color flex h-10 w-10 items-center justify-center rounded-full"
      >
        {activeLang === "id" ? (
          <EnglishFlag className="h-5 w-5" />
        ) : activeLang === "en" ? (
          <IndonesianFlag className="h-5 w-5" />
        ) : null}
      </Link>
    </div>
  );
}
