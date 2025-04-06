import { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { getMediumPosts } from "@/api/medium";
import { MediumPost } from "@/api/medium/medium.interface";
import PostClient from "./post-client";
import { getMetadata } from "@/constant/metadata";

export const metadata: Metadata = getMetadata({
  type: "posts",
  path: "/posts",
});

export default async function Posts(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const posts = (await getMediumPosts()) as MediumPost[];
  return (
    <>
      <div className="mx-auto w-[90%] max-w-[1200px] py-8 lg:py-20 xl:w-[100%]">
        <PostClient posts={posts} />
      </div>
    </>
  );
}
