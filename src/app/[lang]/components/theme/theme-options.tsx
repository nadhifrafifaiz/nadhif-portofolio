"use client";

import { motion } from "framer-motion";
import useSettingStore from "@/store/settings";
import { useEffect, useRef } from "react";

export default function ThemeOptions() {
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

  return (
    <motion.div
      ref={themeRef}
      initial={{ height: 0, opacity: 0 }}
      animate={
        isThemeOpen ? { height: "5rem", opacity: 1 } : { height: 0, opacity: 0 }
      }
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="overflow-hidden bg-accent"
    >
      <div className="flex h-20 items-center justify-center">ThemeOptions</div>
    </motion.div>
  );
}
