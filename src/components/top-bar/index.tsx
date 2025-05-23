"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useSettingStore from "@/store/settings";
import CustomLink from "../custom-link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPaintBrush } from "react-icons/fa";
import { useDictionary } from "@/dictionaries/dictionary-provider";
import LocaleSwitcher from "../locale-switcher";
import { i18n, Locale } from "@/i18n-config";
import Link from "next/link";

export default function TopBar({ lang }: { lang: string }) {
  const pathName = usePathname();
  const { setIsThemeOpen, isThemeOpen } = useSettingStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dictionary = useDictionary();
  const navItems = [
    { label: dictionary.navbar.home, href: "/" },
    { label: dictionary.navbar.projects, href: "/projects" },
    { label: dictionary.navbar.posts, href: "/posts" },
    { label: dictionary.navbar.about, href: "/about" },
  ];

  function checkPathname(data: string) {
    const segments = pathName.split("/");
    const possibleLocale = segments[1];

    let cleanedPath = pathName;
    if (i18n.locales.includes(possibleLocale as Locale)) {
      cleanedPath = `/${segments.slice(2).join("/")}`; // Remove locale prefix
    }

    return cleanedPath === data;
  }

  return (
    <header className="relative z-50 font-epilogue">
      <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between py-8 text-text-color sm:py-[50px]">
        <CustomLink
          lang={lang}
          href={"/"}
          className="tracking flex items-center gap-3 text-lg font-bold"
        >
          <Image
            src="/images/nadhif-logo.webp"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full"
            loading="lazy"
          />
          <p className="pt-[2px]">Nadhif Rafifaiz</p>
        </CustomLink>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 sm:hidden">
          <div className="flex gap-1">
            <LocaleSwitcher />
            <button
              aria-label="Theme"
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-color-offset hover:bg-primary-color"
            >
              <FaPaintBrush className="h-4 w-4 text-text-color" />
            </button>
          </div>
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
                className="hover:text-text-color-offset"
              >
                {item.label}
              </CustomLink>
              {checkPathname(item.href) && (
                <div className="h-1 w-full bg-primary-color" />
              )}
            </div>
          ))}
          <div className="flex gap-2">
            <LocaleSwitcher />
            <button
              aria-label="Theme"
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-color-offset hover:bg-primary-color"
            >
              <FaPaintBrush className="h-4 w-4 text-text-color" />
            </button>
          </div>
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
            className="fixed inset-0 flex bg-bg-color"
          >
            <div className="fixed inset-0 flex items-center justify-center bg-bg-color sm:hidden">
              <div className="flex h-full w-full flex-col space-y-12 p-6">
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
                <nav className="flex flex-col space-y-8 font-epilogue text-4xl font-semibold text-text-color">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-fit hover:text-text-color-offset"
                    >
                      <CustomLink
                        lang={lang}
                        href={item.href}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </CustomLink>
                      {checkPathname(item.href) ? (
                        <div className="h-1 w-full bg-primary-color" />
                      ) : (
                        <div className="h-1 w-full" />
                      )}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
