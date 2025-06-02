import markdoc from "@astrojs/markdoc"
import mdx from "@astrojs/mdx"
import netlify from "@astrojs/netlify/functions"
import partytown from "@astrojs/partytown"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import keystatic from "@keystatic/astro"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
	site: "https://internetaddicts.ru/",

	prefetch: {
		defaultStrategy: "viewport",
	},
	integrations: [
		react(),
		markdoc(),
		keystatic(),
		mdx(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		sitemap(),
		icon(),
	],
	output: "static",
	adapter: netlify(),
	vite: {
		plugins: [tailwindcss()],
	},
})
