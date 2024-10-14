import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("news");
  return rss({
    title: "АИЗ",
    description: "АИЗ RSS лента",
    site: context.site,
    items: blog.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/news/${post.slug}/`,
    })),
    stylesheet: "/rss/styles.xsl",
  });
}
