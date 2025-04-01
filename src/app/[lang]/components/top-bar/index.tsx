"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import TreasureHunt from "../treasure-hunt/treasure-hunt-logo";
import useSettingStore from "@/store/settings";
import CustomLink from "../custom-link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPaintBrush } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Posts", href: "/posts" },
  { label: "About", href: "/about" },
];

export default function TopBar({ lang }: { lang: string }) {
  const pathName = usePathname();
  const { setIsThemeOpen, isThemeOpen } = useSettingStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 font-epilogue">
      <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between py-8 text-text sm:py-[50px]">
        <div className="flex items-center gap-4 text-lg font-bold tracking-wider">
          <Image
            height={200}
            width={200}
            src="/images/nadhif-logo.webp"
            alt="logo"
            className="h-10 w-10 rounded-full"
          />
          <p className="pt-[2px]">Nadhif Rafifaiz</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 sm:hidden">
          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
          >
            <FaPaintBrush className="h-4 w-4 text-text" />
          </button>
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
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
        </div>

        {/* Desktop Links */}
        <nav className="hidden items-center space-x-8 tracking-wider sm:flex">
          {navItems.map((item) => (
            <div key={item.label}>
              <CustomLink
                lang={lang}
                href={item.href}
                className="hover:text-gray-300"
              >
                {item.label}
              </CustomLink>
              {pathName === item.href && (
                <div className="h-1 w-full bg-primary" />
              )}
            </div>
          ))}

          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
          >
            <FaPaintBrush className="h-4 w-4 text-text" />
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
            className="fixed inset-0 flex bg-background"
          >
            <div className="fixed inset-0 flex items-center justify-center bg-background sm:hidden">
              <div className="flex h-full w-full flex-col space-y-12 p-6 text-white">
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
                <nav className="flex flex-col space-y-8 font-epilogue text-4xl font-semibold text-text">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-fit hover:text-gray-300"
                    >
                      <CustomLink
                        lang={lang}
                        href={item.href}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </CustomLink>
                      {pathName === item.href ? (
                        <div className="h-1 w-full bg-primary" />
                      ) : (
                        <div className="h-1 w-full" />
                      )}
                    </motion.a>
                  ))}

                  {/* <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsThemeOpen(!isThemeOpen);
                    }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    className="text-start hover:text-gray-300"
                  >
                    <FaPaintBrush />
                  </motion.button> */}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
