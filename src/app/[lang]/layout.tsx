import "./globals.css";
import { i18n, Locale } from "@/i18n-config";

import { ThemeProvider } from "next-themes";
import TopBar from "../../components/top-bar";
import { epilogue, open_sans, playfair_display } from "../fonts";
import { getDictionary } from "@/get-dictionary";
import DictionaryProvider from "@/dictionaries/dictionary-provider";
import dynamic from "next/dynamic";
import { THEMES_SELECTIONS } from "@/utils/themes";
import Footer from "../../components/footer";
import { jsonLdPerson } from "@/constant/metadata";

const ThemeOptions = dynamic(
  () => import("../../components/theme/theme-options"),
  {
    ssr: false,
  },
);
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html
      lang={params.lang}
      className={`${epilogue.variable} ${open_sans.variable} ${playfair_display.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
      </head>
      <body className="h-screen min-w-[400px] bg-bg-color font-epilogue">
        <DictionaryProvider dictionary={dictionary}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            themes={THEMES_SELECTIONS}
            storageKey="theme"
          >
            <ThemeOptions />
            <div className="flex min-h-screen flex-col">
              <TopBar lang={params.lang} />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </DictionaryProvider>
      </body>
    </html>
  );
}
