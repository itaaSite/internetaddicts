import { collection, fields } from "@keystatic/core"

export const news = collection({
	label: "Новости",
	slugField: "title",
	path: "src/content/news/*",
	format: { contentField: "content" },
	schema: {
		title: fields.slug({ name: { label: "Заголовок" } }),
		description: fields.text({
			label: "Описание",
			description: "от 20 до 150 символов",
			validation: { length: { min: 40, max: 320 } },
		}),
		pubDate: fields.date({
			label: "Время",
			description: "Время публикации",
		}),
	},
})
