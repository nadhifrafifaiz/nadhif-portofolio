import { Metadata } from "next";
import AboutClient from "./about-client";
import { METADATA_ABOUT } from "@/constant/metadata";

export const metadata: Metadata = METADATA_ABOUT;

export default async function About() {
  return (
    <div className="mx-auto w-[90%] max-w-[1200px] py-8 lg:py-20 xl:w-[100%]">
      <AboutClient />
    </div>
  );
}
