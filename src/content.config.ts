import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/projects/", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    repoUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
