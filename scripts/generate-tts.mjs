import fs from "fs"
import path from "path"
import googleTTS from "google-tts-api"

const POSTS_DIR = "src/content/posts"
const OUTPUT_DIR = "public/audio"

fs.mkdirSync(OUTPUT_DIR, { recursive: true })

const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".mdx"))

for (const file of files) {
	const filePath = path.join(POSTS_DIR, file)
	const slug = path.basename(file, ".mdx")
	const outMp3 = path.join(OUTPUT_DIR, `${slug}.mp3`)

	if (fs.existsSync(outMp3)) {
		console.log(`⏩ Пропускаю ${slug} (уже существует)`)
		continue
	}

	const text = fs
		.readFileSync(filePath, "utf8")
		.replace(/---[\s\S]*?---/g, "")
		.replace(/[#>*_`]/g, "")
		.replace(/\n{2,}/g, ". ")
		.trim()

	if (!text) {
		console.log(`⚠️ Пропуск ${slug}: пустой текст`)
		continue
	}

	if (text.length > 1000) {
		console.log(`⚠️ Пропуск ${slug}: слишком длинный (${text.length} символов)`)
		continue
	}

	const lang = /[а-яА-Я]/.test(text) ? "ru" : "en"
	console.log(`🎙️  Генерирую озвучку для: ${slug} [${lang}] (${text.length} символов)`)

	try {
		// Разбиваем текст на части по ~180 символов, чтобы избежать ошибки 200 char limit
		const chunks = text.match(/.{1,180}(\s|$)/g) || []
		const buffers = []

		for (let i = 0; i < chunks.length; i++) {
			const chunk = chunks[i].trim()
			if (!chunk) continue

			const url = googleTTS.getAudioUrl(chunk, {
				lang,
				slow: false,
				host: "https://translate.google.com",
			})

			const res = await fetch(url)
			const buffer = Buffer.from(await res.arrayBuffer())
			buffers.push(buffer)
			console.log(`  🔹 Часть ${i + 1}/${chunks.length} готова`)
		}

		const finalBuffer = Buffer.concat(buffers)
		fs.writeFileSync(outMp3, finalBuffer)
		console.log(
			`✅ ${slug}.mp3 готов (${(finalBuffer.length / 1024 / 1024).toFixed(2)} MB)`,
		)
	} catch (err) {
		console.error(`❌ Ошибка при генерации ${slug}:`, err.message)
	}
}

console.log("🚀 Озвучка завершена")
