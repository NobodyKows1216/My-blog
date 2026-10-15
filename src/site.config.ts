/**
 * 站点级配置：改这里最省事。
 */
export const SITE = {
  /** 站点地址，RSS 与 canonical 链接依赖它 */
  url: 'https://nobodykows1216.github.io',
  /** 仓库子路径。换成自定义域名时改成 '/' */
  base: '/My-blog',
  title: '我的博客',
  description: '一个普通人的写字的地方。',
  author: '你的名字',
  /**
   * 导航项。path 用相对形式（不带开头的斜杠），
   * 页面里拼上 import.meta.env.BASE_URL 才能适配子路径。
   */
  nav: [
    { path: 'about/', label: '关于' },
    { path: 'rss.xml', label: 'RSS' },
  ],
};
