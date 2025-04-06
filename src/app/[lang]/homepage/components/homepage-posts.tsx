import { getMediumPosts } from "@/api/medium";
import { MediumPost } from "@/api/medium/medium.interface";
import CustomLink from "@/components/custom-link";
import PostCard from "@/components/posts/post-card";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export default async function HomepagePosts({ lang }: { lang: Locale }) {
  const posts = (await getMediumPosts()) as MediumPost[];
  const dictionary = await getDictionary(lang);

  if (posts.length > 0) {
    return (
      <div className="mx-auto flex h-fit w-[90%] max-w-[1200px] flex-col justify-center py-[2rem] lg:min-h-[500px] xl:w-[100%]">
        <CustomLink href={"/posts"} lang={lang}>
          <p className="text-subtitle mb-8 font-playfair font-semibold text-text-color">
            {dictionary.home["latest-post"]}
          </p>
        </CustomLink>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            if (index <= 2) {
              return <PostCard post={post} key={post.title} />;
            }
          })}
        </div>
      </div>
    );
  }
}
