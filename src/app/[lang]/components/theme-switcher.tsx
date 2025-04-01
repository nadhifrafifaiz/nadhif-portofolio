"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  "light",
  "dark",
  "theme-blue",
  "theme-green",
  "theme-red",
  "theme-brown",
];
const fonts = ["sans", "mono"]; // Adding "mono" for Roboto Mono font

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [font, setFont] = useState("sans");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    const savedFont = localStorage.getItem("font");
    if (savedFont) setFont(savedFont);
  }, [setTheme]);

  useEffect(() => {
    if (mounted) {
      // Store the theme and font in localStorage for persistence
      localStorage.setItem("theme", theme!);
      localStorage.setItem("font", font);

      // Apply the theme class dynamically
      document.documentElement.classList.remove(...themes);
      document.documentElement.classList.add(theme!);

      // Apply the font dynamically using font class
      document.body.classList.remove("font-sans", "font-mono");
      if (font === "sans") {
        document.body.classList.add("font-sans");
      } else {
        document.body.classList.add("font-mono");
      }
    }
  }, [mounted, theme, font]);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Theme:</span>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="rounded-md border p-2"
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Font:</span>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="rounded-md border p-2"
        >
          {fonts.map((f) => (
            <option key={f} value={f}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
