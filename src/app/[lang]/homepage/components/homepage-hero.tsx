"use client";
import Link from "next/link";
import { useDictionary } from "@/dictionaries/dictionary-provider";
import HighlightText from "../../../../components/highlight-text";
import { LINKS } from "@/constant/linkts";

export default function HomepageHero() {
  const dictionary = useDictionary();

  return (
    <div className="mx-auto flex h-fit min-h-[350px] w-[90%] max-w-[1200px] flex-col justify-center py-[2rem] lg:min-h-[500px] xl:w-[100%]">
      <h1 className="mb-4 font-epilogue text-xl font-bold uppercase tracking-wider text-primary-color md:text-xl">
        {dictionary.home.greeting}
      </h1>
      <p className="mb-2 font-playfair text-4xl font-bold leading-tight text-text-color sm:text-5xl md:text-6xl lg:text-7xl">
        {dictionary.home.title}
      </p>

      <span className="mt-4 flex flex-col font-epilogue text-lg tracking-wide sm:text-lg md:text-2xl">
        <p className="leading-relaxed text-text-color md:max-w-[70%]">
          {`${dictionary.home.subtitle[1]}`}
          <HighlightText className="before:bg-primary-color after:bg-secondary-color">
            <Link
              href={LINKS.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-color"
            >
              {`${dictionary.home.subtitle[2]}`}
            </Link>
          </HighlightText>
          {`${dictionary.home.subtitle[3]}`}
          <HighlightText className="before:bg-primary-color after:bg-secondary-color">
            <Link
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-color"
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
