import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			pubDate: z.union([z.string(), z.date()]),
			img: image().optional(),
			tags: z.array(z.string()).optional(),
			favorite: z.boolean().default(false).optional(),
		}),
})
const groupsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			when: z.string(),
			dateTime: z.string().optional(),
			body: z.string().optional(),
			logo: image().optional(),
			type: z.string().default("Онлайн"),
			link: z.string().default("https://t.me/aiz_itta"),
		}),
})

const diaryCollection = defineCollection({
	schema: z.object({
		title: z.string().optional(),
		when: z.string(),
	}),
})

const speakers = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.string(),
		desc: z.string().optional(),
		idYB: z.string(),
	}),
})

const storyCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		old: z.string().optional(),
	}),
})

export const collections = {
	groups: groupsCollection,
	posts: postsCollection,
	story: storyCollection,
	speakers: speakers,
	diary: diaryCollection,
}
