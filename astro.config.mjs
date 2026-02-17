import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

export default defineConfig({
	site: "https://internetaddicts.ru/",
	prefetch: {
		defaultStrategy: "viewport",
	},
	integrations: [
		solid(),
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
	vite: {
		plugins: [tailwindcss()],
		build: {
			rollupOptions: {
				onwarn(warning, warn) {
					// Ignore noisy warnings from Keystatic's React client directives.
					if (
						warning.code === "MODULE_LEVEL_DIRECTIVE" &&
						typeof warning.id === "string" &&
						warning.id.includes("@keystar/ui")
					) {
						return;
					}
					warn(warning);
				},
			},
		},
	},
	adapter: vercel(),
});
