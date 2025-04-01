import { Playfair_Display, Epilogue, Open_Sans } from "next/font/google";

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-epilogue",
});
export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});
