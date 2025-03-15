import { createClient } from "@/utils/supabase/server";
import HomepageHero from "./homepage/components/homepage-hero";
import TopBar from "./components/top-bar";
import { Metadata } from "next";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

export const metadata: Metadata = {
  title: "Nadhif Rafifaiz K",
  description: "My Portfolios",
};

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <>
      {dictionary["server-component"].welcome}
      <TopBar />
      <HomepageHero />
    </>
  );
}
