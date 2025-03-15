import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "./components/theme-switcher";
import { i18n, Locale } from "../../../i18n-config";

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
      <body className={`${inter.variable} ${roboto_mono.variable} font-roboto`}>
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
