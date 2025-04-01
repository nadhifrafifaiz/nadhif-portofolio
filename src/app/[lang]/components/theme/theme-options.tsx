"use client";

import { motion } from "framer-motion";
import useSettingStore from "@/store/settings";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const THEMES = [
  {
    label: "Light",
    value: "light",
    colors: {
      primary: "#3b82f6", // Blue
      secondary: "#1e40af",
      accent: "#e0f2fe",
      background: "#ffffff",
      text: "#1e293b",
    },
    fonts: {
      sans: "'Inter', sans-serif",
      serif: "'Merriweather', serif",
    },
  },
  {
    label: "Dark",
    value: "dark",
    colors: {
      primary: "#1e293b", // Dark Mode
      secondary: "#334155",
      accent: "#64748b",
      background: "#0f172a",
      text: "#f1f5f9",
    },
    fonts: {
      sans: "'Arial', sans-serif",
      serif: "'Georgia', serif",
    },
  },
  {
    label: "Theme Blue",
    value: "theme-blue",
    colors: {
      primary: "#3b82f6",
      secondary: "#1e40af",
      accent: "#e0f2fe",
      background: "#eff6ff",
      text: "#1e293b",
    },
    fonts: {
      sans: "'Inter', sans-serif",
      serif: "'Merriweather', serif",
    },
  },
  {
    label: "Theme Green",
    value: "theme-green",
    colors: {
      primary: "#22c55e",
      secondary: "#166534",
      accent: "#bbf7d0",
      background: "#f0fdf4",
      text: "#14532d",
    },
    fonts: {
      sans: "'Roboto', sans-serif",
      serif: "'Georgia', serif",
    },
  },
  {
    label: "Theme Red",
    value: "theme-red",
    colors: {
      primary: "#ef4444",
      secondary: "#7f1d1d",
      accent: "#fecaca",
      background: "#fef2f2",
      text: "#7f1d1d",
    },
    fonts: {
      sans: "'Arial', sans-serif",
      serif: "'Times New Roman', serif",
    },
  },
  {
    label: "Theme Brown",
    value: "theme-brown",
    colors: {
      primary: "#ef4444",
      secondary: "#7f1d1d",
      accent: "#A27B5C",
      background: "#2C3639",
      text: "#DCD7C9",
    },
    fonts: {
      sans: "'Arial', sans-serif",
      serif: "'Times New Roman', serif",
    },
  },
];

export default function ThemeOptions() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const { isThemeOpen, setIsThemeOpen } = useSettingStore();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        themeRef.current &&
        !themeRef.current.contains(event.target as Node)
      ) {
        setIsThemeOpen(false);
      }
    }

    if (isThemeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isThemeOpen, setIsThemeOpen]);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, [setTheme]);

  return (
    <motion.div
      ref={themeRef}
      initial={{ height: 0, opacity: 0 }}
      animate={
        isThemeOpen
          ? { height: window.innerWidth < 768 ? "132px" : "132px", opacity: 1 }
          : { height: 0, opacity: 0 }
      }
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="overflow-hidden bg-secondary pl-4"
    >
      <div
        className="-mr-8 flex h-full items-center gap-4 overflow-x-auto px-8 md:gap-10"
        style={{
          transform: "translateX(-2rem)", // Move the content left by 2rem (or adjust as needed)
        }}
      >
        {THEMES.map((theme) => (
          <button
            key={theme.value}
            className="h-20 w-32 flex-shrink-0 rounded focus:outline-none"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.text,
            }}
            onClick={() => setTheme(theme.value)}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
