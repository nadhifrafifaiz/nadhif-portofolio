import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "./components/theme-switcher";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable} font-roboto`}>
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
