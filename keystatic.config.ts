import { about } from "@/fileds/about"
import { groups } from "@/fileds/groups"
import { news } from "@/fileds/news"
import { posts } from "@/fileds/posts"
import { story } from "@/fileds/story"
import { config } from "@keystatic/core"

const isProd = import.meta.env.PROD

export default config({
	storage: isProd
		? {
				kind: "cloud",
		  }
		: {
				kind: "local",
		  },
	cloud: {
		project: "aiz-site/internetaddicts",
	},
	collections: {
		posts,
		groups,
		news,
		story,
		about,
		// speakers,
	},
})
