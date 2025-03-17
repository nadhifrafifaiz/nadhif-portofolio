import "./globals.css";
import ThemeSwitcher from "./components/theme-switcher";
import { i18n, Locale } from "@/i18n-config";

import { ThemeProvider } from "next-themes";
import TopBar from "./components/top-bar";
import LocaleSwitcher from "./components/locale-switcher";
import ThemeOptions from "./components/theme/theme-options";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
  return (
    <html lang={params.lang}>
      <body className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark", "theme-blue", "theme-green", "theme-red"]}
          storageKey="theme"
        >
          <ThemeOptions />
          <div className="flex items-center justify-between">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
          <TopBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
