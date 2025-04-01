import { i18n } from "@/i18n-config";
import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
  lang: string;
  [key: string]: any;
};

export default function CustomLink({
  href,
  children,
  lang,
  ...props
}: CustomLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return (
    <Link href={path} {...props}>
      {children}
    </Link>
  );
}
