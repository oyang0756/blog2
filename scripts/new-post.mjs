// scripts/new-post.mjs
// 用法: node scripts/new-post.mjs "文章标题"
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'blog');

const title = process.argv[2];
if (!title) {
  console.error('用法: node scripts/new-post.mjs "文章标题"');
  process.exit(1);
}

const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, '0');
const dd = String(now.getDate()).padStart(2, '0');
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '')
  .slice(0, 60) || 'untitled';

const filename = `${yyyy}-${mm}-${dd}-${slug}.md`;
const filepath = path.join(CONTENT_DIR, filename);

if (fs.existsSync(filepath)) {
  console.error(`文件已存在: ${filepath}`);
  process.exit(1);
}

const frontmatter = `---
title: '${title.replace(/'/g, "''")}'
description: ''
date: ${yyyy}-${mm}-${dd}
tags: []
categories: []
draft: true
---

# ${title}

从这里开始写……
`;

fs.mkdirSync(CONTENT_DIR, { recursive: true });
fs.writeFileSync(filepath, frontmatter, 'utf-8');
console.log(`已创建: src/content/blog/${filename}`);