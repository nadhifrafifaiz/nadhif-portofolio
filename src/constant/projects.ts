export type Projects = {
  title: string;
  description: string;
  link: string;
  categories: string[];
  imageUrl: string;
  date: string;
};

export type ProjectCategory = {
  name: string;
  slug: string;
  description: string;
  projects: Projects[];
};

export const PROJECTS: ProjectCategory[] = [
  {
    name: "landing-page",
    slug: "web",
    description: "Projects that I built using web technologies",
    projects: [
      {
        title: "Toco Seller",
        imageUrl: "/images/projects/landing-seller.webp",
        date: "Tue Apr 01 2025",
        link: "https://try.toco.id/seller",
        categories: ["react", "tailwind-css", "nextjs", "css", "typescript"],
        description: "landing-seller",
      },
      {
        title: "Toco Community",
        imageUrl: "/images/projects/landing-community.webp",
        date: "Tue Apr 01 2025",
        link: "https://try.toco.id/community",
        categories: ["react", "tailwind-css", "nextjs", "css", "typescript"],
        description: "landing-community",
      },
      {
        title: "Toco Premium",
        imageUrl: "/images/projects/landing-premium.webp",
        date: "Tue Apr 01 2025",
        link: "https://try.toco.id/store",
        categories: ["react", "tailwind-css", "nextjs", "css", "typescript"],
        description: "landing-premium",
      },
      {
        title: "Tocoffee",
        imageUrl: "/images/projects/landing-tocoffee.webp",
        date: "Tue Apr 01 2025",
        link: "https://try.toco.id/tocoffee",
        categories: ["react", "tailwind-css", "nextjs", "css", "typescript"],
        description: "landing-tocoffee",
      },
    ],
  },
  {
    name: "commerce",
    slug: "web",
    description: "Projects that I built using web technologies",
    projects: [
      {
        title: "Toco.id",
        imageUrl: "/images/projects/toco.webp",
        date: "Tue Apr 01 2025",
        link: "https://toco.id",
        categories: [
          "react",
          "tailwind-css",
          "nextjs",
          "typescript",
          "supabase",
          "elasticsearch",
          "postgresql",
        ],
        description: "toco",
      },
      {
        title: "Toco Seller Dashboard",
        imageUrl: "/images/projects/seller.webp",
        date: "Tue Apr 01 2025",
        link: "https://seller.toco.id",
        categories: [
          "react",
          "tailwind-css",
          "nextjs",
          "typescript",
          "supabase",
          "postgresql",
        ],
        description: "seller",
      },
    ],
  },
  {
    name: "hms",
    slug: "web",
    description: "Projects that I built using web technologies",
    projects: [
      {
        title: "My Healthcare Collective",
        imageUrl: "/images/projects/myhc.webp",
        date: "Tue Apr 01 2025",
        link: "https://uat.myhcmarketing.com/",
        categories: [
          "vue",
          "tailwind-css",
          "nuxtjs",
          "typescript",
          "pinia",
          "graphql",
        ],
        description: "myhc",
      },
      {
        title: "Dontia Alliance",
        imageUrl: "/images/projects/dontia.webp",
        date: "Tue Apr 01 2025",
        link: "https://dontiaalliance.com/",
        categories: [
          "vue",
          "tailwind-css",
          "nuxtjs",
          "typescript",
          "pinia",
          "graphql",
        ],
        description: "dontia",
      },
    ],
  },
];
