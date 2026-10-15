---
title: 第一篇文章
description: 这个博客为什么存在，以及我打算写什么。
pubDate: 2026-10-14
tags: ["随笔"]
---

这是第一篇文章。`description` 会出现在首页列表和 RSS 里，所以别留空。

## 怎么写下一篇

在 `src/content/blog/` 里新建一个 `.md` 文件，文件名会成为网址：

```
src/content/blog/my-post.md   →   /blog/my-post/
```

顶部那段 `---` 之间的内容叫 frontmatter，四个字段够用了：

```yaml
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-10-14
tags: ["标签"]
---
```

## 常用写法

**加粗**、*斜体*、[链接](https://astro.build)、`行内代码`。

- 无序列表
- 第二项

1. 有序列表
2. 第二项

> 引用一段话。

```js
// 代码块会自动高亮
const hello = (name) => `你好，${name}`;
```

草稿：在 frontmatter 里加 `draft: true`，这篇文章只在本机 `npm run dev` 时可见，不会被发布出去。
