export const AUTHOR_IDS = ["АИЗ", "SamGold"] as const

export type AuthorId = (typeof AUTHOR_IDS)[number]

type AuthorMeta = {
	name: AuthorId
	avatar?: string
}

const AUTHORS: Record<AuthorId, AuthorMeta> = {
	АИЗ: {
		name: "АИЗ",
		avatar: "/authors/aiz.svg",
	},
	SamGold: {
		name: "SamGold",
		avatar: "/authors/samgold.svg",
	},
}

export const getAuthorMeta = (author?: string): AuthorMeta => {
	if (author === "SamGold") return AUTHORS.SamGold
	return AUTHORS["АИЗ"]
}
