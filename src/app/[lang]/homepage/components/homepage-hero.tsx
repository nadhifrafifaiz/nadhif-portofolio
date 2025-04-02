"use client";
import Link from "next/link";
import HighlightText from "../../components/highlight-text";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { useDictionary } from "@/dictionaries/dictionary-provider";

export default function HomepageHero() {
  const dictionary = useDictionary();
  return (
    <div className="mx-auto flex h-fit w-[90%] max-w-[1200px] flex-col justify-center py-[2rem] text-primary lg:min-h-[500px]">
      <p className="mb-4 font-epilogue text-xl font-bold uppercase tracking-widest text-primary md:text-xl">
        {dictionary.home.greeting}
      </p>
      <p className="mb-2 font-playfair text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
        {dictionary.home.title}
      </p>

      <span className="mt-4 flex flex-col font-epilogue text-lg tracking-wide sm:text-lg md:text-2xl">
        <p className="text-text md:max-w-[70%]">
          {`${dictionary.home.subtitle[1]}`}
          <HighlightText className="before:bg-primary after:bg-secondary">
            <Link
              href="https://medium.com/@tech.nadhifrafifaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text"
            >
              {`${dictionary.home.subtitle[2]}`}
            </Link>
          </HighlightText>
          {`${dictionary.home.subtitle[3]}`}
          <HighlightText className="before:bg-primary after:bg-secondary">
            <Link
              href="https://www.linkedin.com/in/nadhif-rafifaiz-07581b179/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text"
            >
              {`${dictionary.home.subtitle[4]}`}
            </Link>
          </HighlightText>
          .
        </p>
      </span>
    </div>
  );
}
