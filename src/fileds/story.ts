import { collection, fields } from "@keystatic/core"

export const story = collection({
	label: "Л. истории",
	slugField: "title",
	path: "src/content/story/*",
	format: { contentField: "content" },
	schema: {
		title: fields.slug({ name: { label: "Заголовок" } }),
		description: fields.text({
			label: "Описание",
			description: "от 20 до 150 символов",
			validation: { length: { min: 40, max: 320 } },
		}),
		content: fields.document({
			label: "Контент",
			formatting: true,
			dividers: true,
			links: true,
			images: {
				directory: "src/assets/images/stories",
				publicPath: "../../assets/images/stories/",
			},
		}),
	},
})
