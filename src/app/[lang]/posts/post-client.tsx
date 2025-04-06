"use client";

import { MediumPost } from "@/api/medium/medium.interface";
import { useDictionary } from "@/dictionaries/dictionary-provider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PostClient({ posts }: { posts: MediumPost[] }) {
  const dictionary = useDictionary();

  return (
    <div>
      <p className="pb-8 font-playfair text-4xl font-semibold text-text-color lg:pb-20 lg:text-center lg:text-title">
        {dictionary.navbar.posts}
      </p>
      <div className="m-auto flex flex-col gap-8 lg:w-[50%] lg:gap-8">
        {posts.map((post, index) => {
          return (
            <motion.div
              key={post.link}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }} // this ensures it triggers when 20% visible
            >
              <motion.div
                className="flex flex-col gap-3"
                initial={{ y: 0 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                <Link href={post.link} target="_blank">
                  <h2 className="font-playfair text-2xl font-semibold text-primary-color hover:text-primary-color-offset lg:text-4xl">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-secondary-color">{post.pubDate}</p>
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => {
                    return (
                      <span
                        key={category}
                        className="h-fit flex-shrink-0 rounded-lg bg-bg-color-offset px-2 py-1 text-xs capitalize text-text-color"
                      >
                        {category.split("-").join(" ")}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
