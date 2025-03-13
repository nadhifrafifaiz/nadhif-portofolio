"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const themes: Record<Theme, { class: string; font: string }> = {
  light: { class: "theme-light", font: "font-inter" },
  dark: { class: "theme-dark", font: "font-roboto" },
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "light";
    }
    return "light";
  });

  useEffect(() => {
    // Set theme class on document
    document.documentElement.className = themes[theme].class;

    // Remove any class starting with 'font-' and add the new font class
    document.body.className =
      document.body.className
        .split(" ")
        .filter((className) => !className.startsWith("font-"))
        .join(" ") + ` ${themes[theme].font}`;

    // Store the theme preference in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex gap-4 p-4">
      <button
        onClick={() => setTheme("light")}
        className="bg-primary rounded p-2 text-white"
      >
        Light Theme
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="bg-secondary rounded p-2 text-white"
      >
        Dark Theme
      </button>
    </div>
  );
}
