import { posts } from "@/fileds/posts"
import { config } from "@keystatic/core"

const isProd = import.meta.env.PROD

export default config({
	storage:
		// isProd
		// ? {
		//     kind: "github",
		//     repo: "itaaSite/internetaddicts",
		//     branchPrefix: "main/",
		//   }
		// :
		{
			kind: "local",
		},
	collections: {
		posts,
		// story,
		// groups,
		// speakers,
		// news,
	},
})
