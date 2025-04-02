"use client";

import { motion } from "framer-motion";
import useSettingStore from "@/store/settings";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useDictionary } from "@/dictionaries/dictionary-provider";
import { IoMdClose } from "react-icons/io";

export default function ThemeOptions() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const { isThemeOpen, setIsThemeOpen } = useSettingStore();
  const dictionary = useDictionary();

  const THEMES = [
    {
      label: dictionary.theme.options.light,
      value: "light",
      colors: {
        bg: "#ffffff",
        "bg-offset": "#f5f5f5",
        text: "#222222",
        "text-offset": "#5c5c5c",
        border: "#dcdcdc",
        primary: "#d97706",
        "primary-offset": "#b45309",
        secondary: "#a0a0a0",
      },
    },
    {
      label: dictionary.theme.options.dark,
      value: "theme-dark",
      colors: {
        bg: "#0d0d0d",
        "bg-offset": "#1a1a1a",
        text: "#eaeaea",
        "text-offset": "#b0b0b0",
        border: "#333333",
        primary: "#e63946",
        "primary-offset": "#b71c1c",
        secondary: "#5a5a5a",
      },
    },
    {
      label: dictionary.theme.options["sunrise-glow"],
      value: "theme-sunrise-glow",
      colors: {
        bg: "#fff7e6",
        "bg-offset": "#ffedd5",
        text: "#5a3e2b",
        "text-offset": "#a3705f",
        border: "#ffcc80",
        primary: "#ff8c42",
        "primary-offset": "#ff6b35",
        secondary: "#ffba08",
      },
    },
    {
      label: dictionary.theme.options["matcha-zen"],
      value: "theme-matcha-zen",
      colors: {
        bg: "#f7f7f2",
        "bg-offset": "#e0e0d1",
        text: "#3d3b2f",
        "text-offset": "#70705c",
        border: "#c5c5a5",
        primary: "#a4c639",
        "primary-offset": "#8daa25",
        secondary: "#ffd700",
      },
    },
    {
      label: dictionary.theme.options["cyber-neon"],
      value: "theme-cyber-neon",
      colors: {
        bg: "#10002b",
        "bg-offset": "#240046",
        text: "#ffcad4",
        "text-offset": "#ff90e8",
        border: "#5a189a",
        primary: "#ff61a6",
        "primary-offset": "#ff006e",
        secondary: "#00f5d4",
      },
    },
    {
      label: dictionary.theme.options["cafe-mocha"],
      value: "theme-cafe-mocha",
      colors: {
        bg: "#3e2723",
        "bg-offset": "#5d4037",
        text: "#efebe9",
        "text-offset": "#bcaaa4",
        border: "#8d6e63",
        primary: "#d7a86e",
        "primary-offset": "#a9825d",
        secondary: "#ffcc80",
      },
    },
    {
      label: dictionary.theme.options["ember-shadows"],
      value: "theme-ember-shadows",
      colors: {
        bg: "#0b090a",
        "bg-offset": "#161a1d",
        text: "#ffead3",
        "text-offset": "#e85d04",
        border: "#9d0208",
        primary: "#ff5400",
        "primary-offset": "#c1121f",
        secondary: "#ffba08",
      },
    },
    {
      label: dictionary.theme.options.grayscale,
      value: "theme-grayscale",
      colors: {
        bg: "#121212",
        "bg-offset": "#1e1e1e",
        text: "#d6d6d6",
        "text-offset": "#a8a8a8",
        border: "#6c6c6c",
        primary: "#888888",
        "primary-offset": "#5a5a5a",
        secondary: "#b0b0b0",
      },
    },
  ];

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, [setTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      ref={themeRef}
      initial={{ height: 0, opacity: 0 }}
      animate={
        isThemeOpen
          ? { height: window.innerWidth < 768 ? "156px" : "156px", opacity: 1 }
          : { height: 0, opacity: 0 }
      }
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="bg-bg-offset h-full overflow-hidden pl-4">
        <div className="flex h-8 items-center justify-between pt-4">
          <div className="w-full">
            <p className="bg-bg-offset text-center font-bold uppercase tracking-wider text-text">
              {dictionary.theme.select}
            </p>
          </div>
          <div className="mr-4">
            <IoMdClose
              onClick={() => setIsThemeOpen(false)}
              className="hover:text-text-offset h-6 w-6 text-text hover:cursor-pointer"
            />
          </div>
        </div>
        <div
          className="-mr-8 flex h-[132px] items-center gap-4 overflow-x-auto px-8 md:gap-4"
          style={{
            transform: "translateX(-2rem)", // Move the content left by 2rem (or adjust as needed)
          }}
        >
          {THEMES.map((theme) => (
            <div
              key={theme.value}
              className="flex h-20 w-36 flex-shrink-0 flex-col items-center justify-center gap-2 rounded-lg border hover:cursor-pointer focus:outline-none"
              style={{
                borderColor: theme.colors.border,
                backgroundColor: theme.colors.bg,
                color: theme.colors.text,
              }}
              onClick={() => setTheme(theme.value)}
            >
              <p className="text-sm font-semibold">{theme.label}</p>
              <div className="flex -space-x-1">
                <div
                  className="h-6 w-6 rounded-full border-[1.5px]"
                  style={{
                    borderColor: "white",
                    backgroundColor: theme.colors.primary,
                  }}
                ></div>
                <div
                  className="h-6 w-6 rounded-full border-[1.5px]"
                  style={{
                    borderColor: "white",
                    backgroundColor: theme.colors.secondary,
                  }}
                ></div>
                <div
                  className="h-6 w-6 rounded-full border-[1.5px]"
                  style={{
                    borderColor: "white",
                    backgroundColor: theme.colors["primary-offset"],
                  }}
                ></div>
                <div
                  className="h-6 w-6 rounded-full border-[1.5px]"
                  style={{
                    borderColor: "white",
                    backgroundColor: theme.colors.text,
                  }}
                ></div>
                <div
                  className="h-6 w-6 rounded-full border-[1.5px]"
                  style={{
                    borderColor: "white",
                    backgroundColor: theme.colors["text-offset"],
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
