export function slugify(input) {
	if (!input) return ""

	// Словарь для замены русских букв на латиницу
	const ruToEn = {
		а: "a",
		б: "b",
		в: "v",
		г: "g",
		д: "d",
		е: "e",
		ё: "yo",
		ж: "zh",
		з: "z",
		и: "i",
		й: "y",
		к: "k",
		л: "l",
		м: "m",
		н: "n",
		о: "o",
		п: "p",
		р: "r",
		с: "s",
		т: "t",
		у: "u",
		ф: "f",
		х: "kh",
		ц: "ts",
		ч: "ch",
		ш: "sh",
		щ: "shch",
		ы: "y",
		э: "e",
		ю: "yu",
		я: "ya",
		ъ: "",
		ь: "",
	}

	// Заменяем русские буквы на латиницу
	let slug = input
		.toLowerCase()
		.trim()
		.replace(/[а-яё]/gi, match => ruToEn[match] || "")

	// Удаляем акценты и специальные символы
	slug = slug.normalize("NFD").replace(/\p{M}/gu, "")

	// Заменяем недопустимые символы пробелами
	slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim()

	// Заменяем несколько пробелов или дефисов на один дефис
	slug = slug.replace(/[\s-]+/g, "-")

	return slug
}

export function slugifyReverse(input) {
	if (!input) return ""

	// Сначала длинные комбинации
	const enToRu = {
		shch: "щ",
		yo: "ё",
		zh: "ж",
		ch: "ч",
		sh: "ш",
		yu: "ю",
		ya: "я",
		kh: "х",
		ts: "ц",
		a: "а",
		b: "б",
		v: "в",
		g: "г",
		d: "д",
		e: "е",
		z: "з",
		i: "и",
		j: "й",
		k: "к",
		l: "л",
		m: "м",
		n: "н",
		o: "о",
		p: "п",
		r: "р",
		s: "с",
		t: "т",
		u: "у",
		f: "ф",
		y: "ы",
	}

	const words = input.split("-")

	const translatedWords = words.map(word => {
		let translated = ""
		let i = 0
		while (i < word.length) {
			let found = false

			// проверяем от 3 букв к 1
			for (let len = 3; len > 0; len--) {
				const part = word.slice(i, i + len)
				if (enToRu[part]) {
					translated += enToRu[part]
					i += len
					found = true
					break
				}
			}

			if (!found) {
				translated += word[i]
				i++
			}
		}
		return translated
	})

	return translatedWords.join(" ")
}

