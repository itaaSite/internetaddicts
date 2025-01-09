import { collection, fields } from "@keystatic/core"

export const groups = collection({
	label: "Группы",
	slugField: "title",
	path: "src/content/groups/*",
	entryLayout: "content",
	columns: ["title", "when", "dateTime", "type"],
	format: { contentField: "body" },
	schema: {
		title: fields.slug({ name: { label: "Название группы" } }),
		body: fields.mdx({
			label: "Описание группы",
		}),
		logo: fields.image({
			label: "Логотип",
			directory: "src/assets/images/groups_logos",
			publicPath: "../../assets/images/groups_logos/",
		}),
		when: fields.text({
			label: "Время",
			defaultValue: "Пятница",
			description:
				"Когда? Понедельник, Вторник, Среда, Четверг, Пятница, Суббота или Воскресенье",
		}),
		dateTime: fields.text({
			label: "Время",
			description: "Время проведения собрания по МСК +3",
		}),
		type: fields.text({
			label: "Тип группы",
			description: '"Онлайн" либо "Живая"',
			defaultValue: "Онлайн",
		}),
		link: fields.url({
			label: "Ссылка (URL) на нее, либо карта (если живая группа)",
		}),
	},
})
