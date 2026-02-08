<script>
	import { onMount } from "svelte"
	import { readBookmarks } from "@/lib/bookmarks"

	export let mobile = false

	let count = 0

	const sync = () => {
		count = readBookmarks().length
	}

	onMount(() => {
		sync()
		window.addEventListener("storage", sync)
		window.addEventListener("aiz:bookmarks-changed", sync)
		return () => {
			window.removeEventListener("storage", sync)
			window.removeEventListener("aiz:bookmarks-changed", sync)
		}
	})
</script>

<a
	href="/bookmarks"
	class={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
		mobile
			? "w-full justify-between bg-stone-50 text-stone-800 ring-1 ring-stone-200 hover:bg-stone-100"
			: "bg-stone-50 text-stone-800 ring-1 ring-stone-300 hover:bg-stone-100"
	}`}
	aria-label="Закладки"
>
	<span>Закладки</span>
	<span class="rounded-full bg-stone-700 px-2 py-0.5 text-xs text-white">{count}</span>
</a>
