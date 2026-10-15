/**
 * 站点级配置：改这里最省事。
 * 这些值会被 astro.config.mjs 和页面共用。
 */
export const SITE = {
  /** 站点地址，RSS 与 canonical 链接依赖它 */
  url: 'https://nobodykows1216.github.io',
  /** 仓库子路径。用自定义域名时改成 '/' */
  base: '/My-blog',
  title: '我的博客',
  description: '一个普通人的写字的地方。',
  author: '你的名字',
  nav: [
    { href: '/', label: '首页' },
    { href: '/about/', label: '关于' },
    { href: '/rss.xml', label: 'RSS' },
  ],
};
