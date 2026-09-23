# imxuhan.github.io

徐晗的博客，使用 Astro 构建并部署到 GitHub Pages。

写文章：在 `src/content/blog/en/` 或 `src/content/blog/zh/` 下新建一个 `.md` 文件，文件名就是 URL 里的 slug，开头写：

```markdown
---
title: 文章标题
date: 2026-09-23
---
```

本地预览与构建：

```bash
npm install
npm run dev
npm run build
```

部署：把 `dist/` 的内容推到 `gh-pages` 分支。
