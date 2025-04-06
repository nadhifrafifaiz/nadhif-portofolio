import { Metadata } from "next";
import AboutClient from "./about-client";
import { getMetadata } from "@/constant/metadata";

export const metadata: Metadata = getMetadata({
  type: "about",
  path: "/about",
});

export default async function About() {
  return (
    <div className="mx-auto w-[90%] max-w-[1200px] py-8 lg:py-20 xl:w-[100%]">
      <AboutClient />
    </div>
  );
}
