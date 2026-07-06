# Blog

个人博客,基于 [Astro](https://astro.build) 构建。

## 快速开始

```bash
npm install
npm run dev      # http://localhost:4321
```

## 写文章

```bash
npm run new "文章标题"
```

会在 `src/content/blog/` 下生成带日期的草稿,改完 `draft: false` 即可发布。

完整规范见 [`.hermes.md`](./.hermes.md)。

## 构建 & 部署

```bash
npm run build    # 输出到 dist/
```

部署目标待定(Vercel / GitHub Pages / 自建)。

## 技术栈

- **Astro 5** —— 静态站点生成
- **MDX** —— Markdown + 组件
- **Tailwind CSS 4** —— 样式
- **TypeScript Strict** —— 类型安全
- **@astrojs/rss + sitemap** —— RSS / 站点地图