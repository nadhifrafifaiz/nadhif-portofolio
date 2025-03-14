import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "./components/theme-switcher";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark", "theme-blue", "theme-green", "theme-red"]}
          storageKey="theme"
        >
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
