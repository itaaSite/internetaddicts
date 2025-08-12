import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

export const GET: APIRoute = async () => {
	const groups = await getCollection("groups")
	return new Response(JSON.stringify(groups), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	})
}
