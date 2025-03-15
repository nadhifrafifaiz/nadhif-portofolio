import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "./components/theme-switcher";
import { i18n, Locale } from "../../../i18n-config";
import { ThemeProvider } from "next-themes";
import TopBar from "./components/top-bar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

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
          <ThemeSwitcher />
          <TopBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
