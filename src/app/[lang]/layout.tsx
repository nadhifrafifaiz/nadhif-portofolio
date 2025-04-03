import "./globals.css";
import { i18n, Locale } from "@/i18n-config";

import { ThemeProvider } from "next-themes";
import TopBar from "./components/top-bar";
import LocaleSwitcher from "./components/locale-switcher";
// import ThemeOptions from "./components/theme/theme-options";
import { epilogue, open_sans, playfair_display } from "../fonts";
import { getDictionary } from "@/get-dictionary";
import DictionaryProvider from "@/dictionaries/dictionary-provider";
import dynamic from "next/dynamic";
import { THEMES_SELECTIONS } from "@/utils/themes";
import Footer from "./components/footer";

const ThemeOptions = dynamic(() => import("./components/theme/theme-options"), {
  ssr: false,
});
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
      <body className="bg-bg min-w-[400px]">
        <DictionaryProvider dictionary={dictionary}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            themes={THEMES_SELECTIONS}
            storageKey="theme"
          >
            <ThemeOptions />
            <TopBar lang={params.lang} />
            <div className="mx-auto">{children}</div>
            <Footer />
          </ThemeProvider>
        </DictionaryProvider>
      </body>
    </html>
  );
}
