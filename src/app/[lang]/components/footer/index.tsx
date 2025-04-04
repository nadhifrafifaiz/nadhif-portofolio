"use client";
import { useDictionary } from "@/dictionaries/dictionary-provider";
import PageSpeedChecker from "./page-speed";
import Link from "next/link";

export default function Footer() {
  const dictionary = useDictionary();
  return (
    <div className="bg-bg-offset py-8 font-epilogue">
      <div className="mx-auto flex w-[90%] max-w-[1200px] items-start justify-between text-text">
        <div className="flex w-full flex-col gap-y-6 md:flex-row md:gap-x-8 lg:gap-y-8">
          {/* Section 1 */}
          <div className="flex flex-1 flex-col">
            <div>
              <p className="font-bold">Nadhif Rafifaiz</p>
              <p>Jakarta, Indonesia</p>
            </div>
            <div className="flex flex-col">
              <Link
                href={"mailto:nadhifrafifaiz@gmail.com"}
                className="hover:text-text-offset underline"
              >
                nadhifrafifaiz@gmail.com
              </Link>
              <Link
                href={"https://wa.me/6281212436604"}
                target="_blank"
                className="hover:text-text-offset font-open-sans underline"
              >
                +62 81212436604
              </Link>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-1 flex-col">
            <p className="font-bold">{dictionary.footer.social}</p>
            <div className="flex gap-2">
              <Link href={"/"} className="hover:text-text-offset underline">
                LinkedIn
              </Link>
              <Link href={"/"} className="hover:text-text-offset underline">
                Medium
              </Link>
              <Link href={"/"} className="hover:text-text-offset underline">
                Github
              </Link>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-1 flex-col">
            <p className="font-bold">{dictionary.footer.work}</p>
            <div className="flex gap-2">
              <Link href={"/"} className="hover:text-text-offset underline">
                Sprout
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - PageSpeedChecker */}
        <div className="ml-8 hidden flex-shrink-0 lg:block">
          <PageSpeedChecker />
        </div>
      </div>
    </div>
  );
}
