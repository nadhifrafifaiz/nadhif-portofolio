import { createClient } from "@/utils/supabase/server";
import HomepageHero from "./homepage/components/homepage-hero";
import TopBar from "./components/top-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nadhif Rafifaiz K",
  description: "My Portfolios",
};

export default async function Home() {
  return (
    <>
      <TopBar />
      <HomepageHero />
    </>
  );
}
