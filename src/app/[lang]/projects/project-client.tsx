"use client";

import { MediumPost } from "@/api/medium/medium.interface";
import Projects from "./components/project-card";
import { PROJECTS } from "@/constant/projects";
import { motion } from "framer-motion";
import { useDictionary } from "@/dictionaries/dictionary-provider";

export default function ProjectClient() {
  const dictionary = useDictionary();
  return (
    <div>
      <p className="pb-8 font-playfair text-4xl font-semibold text-text-color lg:pb-20 lg:text-center lg:text-title">
        {dictionary.navbar.projects}
      </p>
      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }} // this ensures it triggers when 20% visible
            >
              <div>
                <p className="mb-4 w-fit border-b-4 border-secondary-color font-epilogue text-xl font-semibold text-text-color">
                  {
                    dictionary.projects.category[
                      project.name as keyof typeof dictionary.projects.category
                    ]
                  }
                </p>
                <Projects project={project} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
