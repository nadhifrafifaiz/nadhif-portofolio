"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MediumPost } from "@/api/medium/medium.interface";

export default function PostCard({ post }: { post: MediumPost }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{
        y: -10,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      key={post.link}
    >
      <article className="mx-auto flex max-w-md flex-col gap-2 overflow-hidden rounded-lg shadow-bg-color-offset transition">
        {post.imageUrl && (
          <div className="relative aspect-[16/9] w-full">
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjQ0IiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </Link>
          </div>
        )}

        {/* Content */}
        <div className="">
          <Link
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="flex flex-col gap-2"
          >
            <h2 className="text-md line-clamp-2 font-semibold text-primary-color">
              {post.title}
            </h2>
            <p className="text-sm text-secondary-color">{post.pubDate}</p>
            <div className="flex h-14 flex-wrap gap-2">
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
          </Link>
        </div>
      </article>
    </motion.div>
  );
}
