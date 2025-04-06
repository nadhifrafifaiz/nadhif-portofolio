import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import ProjectClient from "./project-client";

export const metadata: Metadata = {
  title: "Nadhif Rafifaiz K",
  description: "My Portfolios",
};

export default async function About(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
    <div className="mx-auto w-[90%] max-w-[1200px] py-8 lg:py-20 xl:w-[100%]">
      <ProjectClient />
    </div>
  );
}
