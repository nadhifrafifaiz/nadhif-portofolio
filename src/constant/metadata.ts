import { Metadata } from "next";
import { Person, WithContext } from "schema-dts";
import { LINKS } from "./linkts";
import robots from "@/app/robots";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://nadhif.xyz";

type PageType = "home" | "about" | "projects" | "posts";

interface MetadataOptions {
  type: PageType;
  path?: string; // optional path like "/about" or "/projects/project-1"
}

export function getMetadata({ type, path = "" }: MetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;

  const base = {
    title: "Nadhif Rafifaiz K — Frontend Engineer & Web Enthusiast",
    description:
      "Portfolio website of Nadhif Rafifaiz, a frontend engineer passionate about building accessible, high-performance web apps with React, Next.js, and Tailwind CSS.",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Nadhif Rafifaiz K — Frontend Engineer & Web Enthusiast",
      description:
        "Explore the portfolio of Nadhif Rafifaiz, featuring side projects, blog posts, and clean UI/UX case studies.",
      url,
      siteName: "Nadhif Rafifaiz Portfolio",
      images: [
        {
          url: `${BASE_URL}/og-image.webp`,
          width: 1200,
          height: 630,
          alt: "Nadhif Rafifaiz Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nadhif Rafifaiz K — Frontend Engineer & Web Enthusiast",
      description:
        "Portfolio website of Nadhif Rafifaiz, showcasing frontend projects, design systems, and writing.",
      images: [`${BASE_URL}/og-image.webp`],
      creator: "@nadhif_rafifaiz",
    },
    robots: {
      index: true,
      follow: true,
    },
  };

  const typeMap: Record<PageType, Partial<Metadata>> = {
    home: {
      keywords: [
        "Nadhif Rafifaiz",
        "Frontend Developer",
        "Next.js",
        "Tailwind",
        "Indonesia Developer",
        "React Portfolio",
        "Web Developer",
        "Tech Blog",
        "Frontend Engineer",
        "UI Developer",
      ],
    },
    about: {
      title: "About | Nadhif Rafifaiz K — Frontend Engineer",
      description:
        "Get to know Nadhif Rafifaiz — a frontend engineer passionate about clean code, UI/UX, and leadership in tech.",
    },
    projects: {
      title: "Projects | Nadhif Rafifaiz K",
      description:
        "A curated collection of frontend and fullstack projects by Nadhif Rafifaiz. Built with React, Next.js, and Tailwind CSS.",
    },
    posts: {
      title: "Blog Posts | Nadhif Rafifaiz K",
      description:
        "Tech tips, frontend tutorials, and development stories by Nadhif Rafifaiz. Writing about React, Next.js, Tailwind, and beyond.",
    },
  };

  return {
    ...base,
    ...typeMap[type],
  };
}

export const jsonLdPerson: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nadhif Rafifaiz",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.webp`,
  sameAs: [LINKS.linkedin, LINKS.github, LINKS.medium],
  jobTitle: "Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Personal Projects",
  },
  description:
    "Frontend Engineer from Indonesia who loves building clean, accessible, and fast user experiences with React, Next.js, and Tailwind CSS.",
};
