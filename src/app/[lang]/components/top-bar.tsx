"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import TreasureHunt from "./treasure-hunt/treasure-hunt-logo";
import useSettingStore from "@/store/settings";

export default function TopBar() {
  const { setIsThemeOpen, isThemeOpen } = useSettingStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="relative z-50">
      <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between py-4 text-text sm:py-[50px]">
        <div className="text-lg font-bold">Nadhif Rafifaiz</div>
        {/* <TreasureHunt /> */}
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none sm:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              // d={
              //   isMenuOpen
              //     ? "M6 18L18 6M6 6l12 12" // X icon
              //     : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              // }
              d={
                "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
        {/* Desktop Links */}
        <nav className="hidden space-x-8 sm:flex">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#posts" className="hover:text-gray-300">
            Posts
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="hover:text-gray-300"
          >
            Theme
          </button>
        </nav>
      </div>
      {/* Fullscreen Overlay for Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Start off-screen
            animate={{ x: 0 }} // Slide in
            exit={{
              x: "-100%",
              transition: { type: "spring", stiffness: 100, damping: 20 },
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 flex bg-black bg-opacity-75"
          >
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 sm:hidden">
              <div className="flex h-full w-full flex-col space-y-4 bg-gray-800 p-6 text-white">
                <button
                  onClick={toggleMenu}
                  className="self-end text-gray-400 hover:text-white focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <nav className="flex flex-col space-y-4">
                  <a href="#home" className="hover:text-gray-300">
                    Home
                  </a>
                  <a href="#projects" className="hover:text-gray-300">
                    Projects
                  </a>
                  <a href="#posts" className="hover:text-gray-300">
                    Posts
                  </a>
                  <a href="#about" className="hover:text-gray-300">
                    About
                  </a>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsThemeOpen(!isThemeOpen);
                    }}
                    className="text-start hover:text-gray-300"
                  >
                    Theme
                  </button>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
