import { getAllPosts } from "./getPosts"
// Функция для получения всех таксономий
const getTaxonomy = async (collection, name) => {
	const singlePages = await getAllPosts(collection)
	let taxonomies = []

	// Сбор всех таксономий из постов
	singlePages.forEach(page => {
		const tagArray = page.data[name] // Получаем массив категорий из каждого поста
		if (Array.isArray(tagArray)) {
			// Проверяем, является ли это массивом
			tagArray.forEach(tag => {
				// Добавляем слаг в массив
				taxonomies.push(tag) // Используем slugify для нормализации
			})
		}
	})

	// Удаляем дубликаты с помощью Set
	const uniqueTaxonomies = [...new Set(taxonomies)]
	return uniqueTaxonomies
}

export default getTaxonomy
