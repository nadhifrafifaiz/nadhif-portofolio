import { Metadata } from "next";
import { LINKS } from "./linkts";
import { Person, WithContext } from "schema-dts";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const METADATA: Metadata = {
  title: "Nadhif Rafifaiz K — Frontend Engineer & Web Enthusiast",
  description:
    "Portfolio website of Nadhif Rafifaiz, a frontend engineer passionate about building accessible, high-performance web apps with React, Next.js, and Tailwind CSS.",
  keywords: [
    "Nadhif Rafifaiz",
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Vue Developer",
    "Nuxt Developer",
    "Web Developer Indonesia",
    "Programmer Indonesia",
    "Frontend Developer Portfolio",
    "React Portfolio Website",
    "Next.js Portfolio",
    "Tailwind CSS Developer",
    "Modern Web Developer",
    "Junior Frontend Developer",
    "Senior Frontend Developer",
    "Creative Frontend Developer",
    "Clean UI Portfolio",
    "Developer Portfolio Inspiration",
    "Portofolio Programmer Indonesia",
    "Website Developer Indonesia",
    "Next.js Personal Website",
    "Open Source Frontend Projects",
    "React UI Design",
    "Tailwind CSS Examples",
    "UI/UX Developer",
    "Fullstack JavaScript Developer",
    "Responsive Web Developer",
    "Web Design Portfolio",
    "Typescript Developer Portfolio",
    "HTML CSS JavaScript Developer",
    "Micro-interaction Web Developer",
    "Software Engineer Portfolio",
    "Next.js SEO",
    "Tech Blog Indonesia",
    "Medium Programmer Indonesia",
    "LinkedIn Developer Indonesia",
    "Framer Motion Portfolio",
    "Frontend Dev Tips",
    "Frontend Problem Solving",
    "Best React Portfolio",
    "Developer Side Projects",
    "Projects with Tailwind CSS",
    "Web Animations with Framer",
    "How to Build with Next.js",
    "Website Portfolio Template",
    "Web Developer for Hire",
    "Frontend Dev from Indonesia",
    "React Engineer Personal Website",
    "Frontend Mentor Indonesia",
    "Portofolio Web Modern",
  ],

  openGraph: {
    title: "Nadhif Rafifaiz K — Frontend Engineer & Web Enthusiast",
    description:
      "Explore the portfolio of Nadhif Rafifaiz, featuring side projects, blog posts, and clean UI/UX case studies.",
    url: `${URL}`,
    siteName: "Nadhif Rafifaiz Portfolio",
    images: [
      {
        url: `${URL}/og-image.webp`,
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
    images: [`${URL}/og-image.webp`],
    creator: "@nadhif_rafifaiz",
  },
};

export const METADATA_ABOUT: Metadata = {
  title: "About | Nadhif Rafifaiz K — Frontend Engineer",
  description:
    "Get to know Nadhif Rafifaiz — a frontend engineer passionate about clean code, UI/UX, and leadership in tech.",
};

export const METADATA_PROJECTS: Metadata = {
  title: "Projects | Nadhif Rafifaiz K",
  description:
    "A curated collection of frontend and fullstack projects by Nadhif Rafifaiz. Built with React, Next.js, and Tailwind CSS.",
};

export const METADATA_POSTS: Metadata = {
  title: "Blog Posts | Nadhif Rafifaiz K",
  description:
    "Tech tips, frontend tutorials, and development stories by Nadhif Rafifaiz. Writing about React, Next.js, Tailwind, and beyond.",
};

export const jsonLdPerson: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nadhif Rafifaiz",
  url: `${URL}`,
  image: `${URL}/og-image.webp`,
  sameAs: [LINKS.linkedin, LINKS.github, LINKS.medium],
  jobTitle: "Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Personal Projects",
  },
  description:
    "Frontend Engineer from Indonesia who loves building clean, accessible, and fast user experiences with React, Next.js, and Tailwind CSS.",
};
