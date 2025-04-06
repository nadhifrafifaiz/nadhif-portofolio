import { MediumPost } from "@/api/medium/medium.interface";
import { ProjectCategory } from "@/constant/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDictionary } from "@/dictionaries/dictionary-provider";

export default function Projects({ project }: { project: ProjectCategory }) {
  const dictionary = useDictionary();
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      {project.projects.map((p, index) => {
        return (
          <motion.div
            initial={{ y: 0 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            key={index}
          >
            <article
              className={`group rounded-xl transition-all ${p.link && "hover:scale-[1.02]"}`}
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Link href={p.link} target="_blank">
                  {p.imageUrl && (
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjQ0IiBmaWxsPSIjZGRkZGRkIi8+PC9zdmc+"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}
                </Link>
              </div>
              <Link href={p.link} target="_blank">
                <h2 className="text-md font-bold text-primary-color group-hover:text-primary-color-offset group-hover:underline">
                  {p.title}
                </h2>
              </Link>

              <Link href={p.link} target="_blank">
                <p className="mt-1 text-start text-sm text-text-color">
                  {
                    dictionary.projects.description[
                      p.description as keyof typeof dictionary.projects.description
                    ]
                  }
                </p>
              </Link>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.categories.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-bg-color-offset px-3 py-1 text-xs font-medium text-text-color"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
}
