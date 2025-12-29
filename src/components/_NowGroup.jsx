import { useEffect, useState } from "react"

const dayOrder = {
	Понедельник: 1,
	Вторник: 2,
	Среда: 3,
	Четверг: 4,
	Пятница: 5,
	Суббота: 6,
	Воскресенье: 7,
}

function sortGroupsByDay(groups) {
	const today = new Date().toISOString().split("T")[0]

	return [...groups]
		.sort((a, b) => {
			const t1 = `${today} ${a.data.dateTime}`
			const t2 = `${today} ${b.data.dateTime}`
			return new Date(t1) - new Date(t2)
		})
		.sort((a, b) => dayOrder[a.data.when] - dayOrder[b.data.when])
}

const GroupArticle = ({ data }) => (
	<a href={data.link} target="_blank">
		<div className="rounded-2xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
			<div className="rounded-2xl p-1 shadow-md shadow-black/5">
				<div className="rounded-xl shadow-lg ring-1 ring-black/5 grid grid-cols-1 gap-3 lg:shadow-2xl bg-white p-2">
					<div className="flex items-center gap-2">
						{data.logo && (
							<img
								src={data.logo.src}
								alt={data.title}
								loading="lazy"
								decoding="async"
								width="60"
								className="w-10 h-10 rounded-full object-cover"
							/>
						)}
						<span className="font-medium text-zinc-600">{data.title}</span>•
						{data.dateTime && <span className="text-blue-500">{data.dateTime}</span>}•
						{data.type === "Онлайн" ? (
							<span className="text-green-600 font-medium">{data.type}</span>
						) : (
							<span className="text-blue-600 font-medium">{data.type}</span>
						)}
					</div>
				</div>
			</div>
		</div>
	</a>
)

export default function NowGroup() {
	const [groups, setGroups] = useState([])

	useEffect(() => {
		fetch("/api/groups.json")
			.then(res => res.json())
			.then(data => setGroups(data))
	}, [])

	const daysRu = [
		"Воскресенье",
		"Понедельник",
		"Вторник",
		"Среда",
		"Четверг",
		"Пятница",
		"Суббота",
	]
	const today = daysRu[new Date().getDay()]

	const todayOfflineGroups = sortGroupsByDay(
		groups.filter(f => f.data.type === "Живая" && f.data.when === today),
	)
	const todayOnlineGroups = sortGroupsByDay(
		groups.filter(f => f.data.type === "Онлайн" && f.data.when === today),
	)

	return (
		<section className="py-12">
			<h3 className="text-xl text-gray-700 flex gap-2 items-center mb-6">
				<span>
					Сегодняшние группы: <b>{today}</b>
				</span>
				•
				{todayOnlineGroups ? (
					<span className="text-xl text-gray-700 font-medium">
						<span className="text-blue-600 font-medium">Оффлайн</span>-группы
					</span>
				) : (
					<span className="text-xl text-gray-700 font-medium">
						<span className="text-green-600 font-medium">Онлайн</span>-группы
					</span>
				)}
			</h3>

			{todayOfflineGroups.length > 0 && (
				<>
					<div className="flex gap-3 flex-wrap">
						{todayOfflineGroups.map(group => (
							<GroupArticle key={group.id} data={group.data} />
						))}
					</div>
				</>
			)}

			{todayOnlineGroups.length > 0 && (
				<>
					<div className="flex gap-3 flex-wrap">
						{todayOnlineGroups.map(group => (
							<GroupArticle key={group.id} data={group.data} />
						))}
					</div>
				</>
			)}
		</section>
	)
}
