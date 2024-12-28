import { defineCollection, z } from "astro:content";

const groupsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      when: z.string(),
      dateTime: z.string().default("20:00"),
      body: z.string().optional(),
      logo: image().optional(),
      type: z.string().default("Онлайн"),
      link: z.string().default("https://t.me/aiz_itta"),
    }),
});

const diaryCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    when: z.string(),
  }),
});

const speakers = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    desc: z.string().optional(),
    idYB: z.string(),
  }),
});

/* const pagesCollections = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    ogImage: z.string().optional(),
  }),
}); */

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string(),
      pubDate: z.string(),
      img: image(),
    }),
});

const storyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
  }),
});

export const collections = {
  groups: groupsCollection,
  posts: postsCollection,
  story: storyCollection,
  // pages: pagesCollections,
  speakers: speakers,
  diary: diaryCollection,
  news: newsCollection,
};
