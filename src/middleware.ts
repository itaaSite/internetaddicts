import type { MiddlewareHandler } from "astro"

const TWO_DAYS = 60 * 60 * 24 * 2 // 172800
const STALE = 60 * 60 * 24 * 7 // 7 дней на фоне

export const onRequest: MiddlewareHandler = async (context, next) => {
	const response = await next()

	// Не трогаем dev
	if (import.meta.env.DEV) {
		return response
	}

	const url = new URL(context.request.url)
	const pathname = url.pathname

	// Не кешируем API
	if (pathname.startsWith("/api/")) {
		response.headers.set("Cache-Control", "no-store")
		return response
	}

	// Статика: картинки, шрифты, аудио
	if (pathname.match(/\.(png|jpg|jpeg|webp|svg|gif|ico|mp3|woff2?)$/)) {
		response.headers.set("Cache-Control", `public, max-age=${TWO_DAYS}, immutable`)
		return response
	}

	// HTML / страницы
	response.headers.set(
		"Cache-Control",
		[
			"public",
			`max-age=0`,
			`s-maxage=${TWO_DAYS}`,
			`stale-while-revalidate=${STALE}`,
		].join(", "),
	)

	return response
}
