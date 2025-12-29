import { getCollection } from "astro:content"

export const SITE_URL = "https://internetaddicts.ru" // без /
export const BANNER = "/image/banner_image.png"
export const BASE_FILES = "https://t.me/all_12steps"

export const TELEGRAM = "https://t.me/aiz_itta"
export const VK = "https://vk.com/aiz_itta"
export const TIKTOK = "https://t.me/aiz_itta"
export const YOUTUBE = "https://www.youtube.com/channel/UC6X1MOn_So7iD2JEHkN-YHQ"

export const COPYRIGHT = "Анонимные Интернет-Зависимые"
export const RKO = "https://t.me/+WMn0QssSLHsyYzcy"

const collections = ["posts", "story", "groups", "speakers", "news"]
const counts = await Promise.all(
	collections.map(async collection => {
		const data = await getCollection(collection)
		return data.length
	}),
)
const countsObject = {
	posts: counts[0],
	story: counts[1],
	groups: counts[2],
	news: counts[4],
}
const { posts, story, groups, news } = countsObject

export const navigation = [
	// 	label: "",
	// 	href: "#",
	// target: "",
	// icon: "",
	// style: "",
	{
		href: "/",
		label: "Главная",
		target: "",
		icon: "mdi:home-roof",
		style: "",
	},
	{
		href: "/groups",
		label: "Группы",
		target: "",
		icon: "mdi:account-group",
		style: "",
		// count: groups,
	},
	{
		href: "/posts",
		label: "Архив",
		target: "",
		icon: "mdi:archive-search",
		style: "",
		// count: posts,
	},
	{
		href: "/stories",
		label: "Л. Истории",
		target: "",
		icon: "mdi:account-details",
		style: "",
		// count: story,
	},
	{
		href: "/news",
		label: "Новости",
		target: "",
		icon: "mdi:access-point",
		style: "",
		// count: news,
	},
	{
		href: "/diary",
		label: "Ежедневник",
		target: "",
		icon: "mdi:account-card",
		style: "",
	},
	{
		href: "/contacts",
		label: "Контакты",
		target: "",
		icon: "mdi:account-multiple-check",
		style: "",
	},
	{
		href: "https://www.youtube.com/@aiz_itaa",
		target: "_blank",
		label: "Спикерские",
		icon: "mdi:account-music",
		style: "",
	},
]
