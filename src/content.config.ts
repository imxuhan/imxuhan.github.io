import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// 文章放在 src/content/blog/en/*.md 与 src/content/blog/zh/*.md，
// 文件名就是 URL 里的 slug。
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
