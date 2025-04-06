import { Metadata } from "next";
import { Locale } from "@/i18n-config";
import HomepageHero from "./homepage/components/homepage-hero";
import HomepagePosts from "./homepage/components/homepage-posts";
import { Suspense } from "react";
import { METADATA } from "@/constant/metadata";

export const metadata: Metadata = METADATA;

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div className="pb-8 lg:pb-20">
      <HomepageHero />

      <Suspense
        fallback={
          <div className="mx-auto flex h-fit w-[90%] max-w-[1200px] flex-col justify-center py-[2rem] lg:min-h-[500px] xl:w-[100%]"></div>
        }
      >
        <HomepagePosts lang={lang} />
      </Suspense>
    </div>
  );
}
