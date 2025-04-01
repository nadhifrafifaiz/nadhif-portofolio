import "./globals.css";
import { i18n, Locale } from "@/i18n-config";

import { ThemeProvider } from "next-themes";
import TopBar from "./components/top-bar";
import LocaleSwitcher from "./components/locale-switcher";
import ThemeOptions from "./components/theme/theme-options";
import { epilogue, open_sans, playfair_display } from "../fonts";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
  return (
    <html
      lang={params.lang}
      className={`${epilogue.variable} ${open_sans.variable} ${playfair_display.variable}`}
    >
      <body className="min-w-[400px] bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={[
            "light",
            "dark",
            "theme-blue",
            "theme-green",
            "theme-red",
            "theme-brown",
          ]}
          storageKey="theme"
        >
          <ThemeOptions />
          <TopBar lang={params.lang} />
          <div className="mx-auto">
            {children}

            <div className="flex items-center justify-between">
              <LocaleSwitcher />
              {/* <ThemeSwitcher /> */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
