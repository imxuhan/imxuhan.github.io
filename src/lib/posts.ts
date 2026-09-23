import { getCollection } from "astro:content";

export type Locale = "en" | "zh";

export async function getPosts(locale: Locale) {
  const posts = await getCollection("blog", ({ id, data }) => id.startsWith(`${locale}/`) && !data.draft);
  return posts
    .map((post) => ({ ...post, slug: post.id.slice(locale.length + 1) }))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, locale: Locale) {
  if (locale === "zh") return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
