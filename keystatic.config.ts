import { posts } from "@/fileds/posts"
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
		// story,
		// groups,
		// speakers,
		// news,
	},
})
