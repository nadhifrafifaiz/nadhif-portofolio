"use client";

import { LINKS } from "@/constant/linkts";
import { useDictionary } from "@/dictionaries/dictionary-provider";
import Link from "next/link";

export default function AboutClient() {
  const dictionary = useDictionary();
  return (
    <main className="mx-auto max-w-3xl pb-8 text-text-color lg:pb-20">
      <h1 className="pb-8 font-playfair text-4xl font-semibold text-text-color lg:pb-20 lg:text-center lg:text-title">
        {dictionary.about.greeting}
      </h1>

      <p className="mb-4 text-lg leading-relaxed">
        {dictionary.about.intro[1]}{" "}
        <span className="font-semibold"> {dictionary.about.intro[2]}</span>{" "}
        {dictionary.about.intro[3]}
      </p>

      <p className="mb-4 text-base leading-relaxed">
        {dictionary.about.intro["sub-1"]}
      </p>

      <p className="mb-4 text-base leading-relaxed">
        {dictionary.about.intro["sub-2"][1]}
        <Link
          href={LINKS.medium}
          target="_blank"
          className="text-primary-color hover:underline"
        >
          {dictionary.about.intro["sub-2"][2]}
        </Link>{" "}
        {dictionary.about.intro["sub-2"][3]}
        <Link
          href={LINKS.linkedin}
          target="_blank"
          className="text-primary-color hover:underline"
        >
          {dictionary.about.intro["sub-2"][4]}
        </Link>
        {dictionary.about.intro["sub-2"][5]}
      </p>

      <div className="mt-8">
        <h2 className="mb-2 text-xl font-semibold">
          {dictionary.about.favorite.title}
        </h2>
        <p className="text-base">{dictionary.about.favorite.content[1]}</p>
        <p className="text-text-color-muted mt-1 text-sm">
          {dictionary.about.favorite.content[2]}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-xl font-semibold">
          {dictionary.about["up-to"].title}
        </h2>
        <p className="text-base leading-relaxed">
          {dictionary.about["up-to"].content[1]}
        </p>
        <p className="mt-2 text-base leading-relaxed">
          {dictionary.about["up-to"].content[2]}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="mb-2 text-xl font-semibold">
          {dictionary.about["outside-code"].title}
        </h2>
        <p className="text-base">
          {dictionary.about["outside-code"].content[1]}
        </p>
      </div>

      <div className="mt-10 border-t pt-6">
        <p className="text-base">{dictionary.about["lets-connect"].title}</p>
        <div className="mt-4 flex gap-4">
          <Link
            href={LINKS.linkedin}
            target="_blank"
            className="text-primary-color hover:underline"
          >
            {dictionary.about["lets-connect"].content[1]}
          </Link>
          <Link
            href={LINKS.medium}
            target="_blank"
            className="text-primary-color hover:underline"
          >
            {dictionary.about["lets-connect"].content[2]}
          </Link>
        </div>
      </div>
    </main>
  );
}
