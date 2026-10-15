import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';

export async function GET(context) {
  // BASE_URL 末尾没有斜杠，统一补上再拼接
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : import.meta.env.BASE_URL + '/';

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    // 频道自身的地址要指向子路径下的 feed，否则频道 <link> 会指向域名根
    site: new URL(base, context.site).href,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      // 带上子路径，否则 RSS 里的链接会指向站点根目录
      link: `${base}blog/${post.id}/`,
    })),
    customData: '<language>zh-cn</language>',
  });
}
