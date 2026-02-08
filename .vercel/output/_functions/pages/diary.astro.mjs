import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BrIEQ3l_.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Icon } from '../chunks/Layout_C-YWq7XV.mjs';
import { g as getCollection, a as getEntry } from '../chunks/_astro_content_C-f0wt7G.mjs';
export { r as renderers } from '../chunks/_@astro-renderers__tu-bQuR.mjs';

const $$Astro = createAstro("https://internetaddicts.ru/");
const prerender = false;
const $$Diary = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Diary;
  const plusParam = Number(Astro2.url.searchParams.get("plus") || "0");
  const minusParam = Number(Astro2.url.searchParams.get("minus") || "0");
  const currentParam = plusParam - minusParam;
  let plusLink;
  if (minusParam === 0) {
    plusLink = "?plus=" + (currentParam + 1);
  } else {
    plusLink = "?minus=" + (minusParam - 1);
  }
  let minusLink;
  if (plusParam > 0) {
    minusLink = "?plus=" + (plusParam - 1);
  } else {
    minusLink = "?minus=" + (minusParam + 1);
  }
  const diary = await getCollection("diary");
  const currentDate = /* @__PURE__ */ new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const sortedDiary = diary.sort((a, b) => {
    const dateA = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      Number(a.data.when)
    );
    const dateB = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      Number(b.data.when)
    );
    return dateB.getTime() - dateA.getTime();
  }).reverse();
  const todayIndex = sortedDiary.findIndex((a) => {
    const diaryDay2 = Number(a.data.when);
    return diaryDay2 === currentDay && currentMonth === currentDate.getMonth();
  });
  let currentDiary;
  const realIndex = todayIndex + currentParam;
  if (realIndex < 0 || realIndex >= sortedDiary.length) {
    currentDiary = sortedDiary.at(0);
  } else {
    currentDiary = sortedDiary.at(realIndex);
  }
  const diaryDay = Number(currentDiary.data.when);
  const diaryDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), diaryDay);
  const dateOptions = {
    day: "numeric",
    month: "long"
  };
  const formattedDate = diaryDate.toLocaleDateString("ru-RU", dateOptions);
  const entry = await getEntry("diary", currentDiary.slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-pagefind-ignore": true, "title": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A", "desc": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A \u0410\u0418\u0417" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-5"> <aside class="mx-auto flex-wrap max-w-[780px] mb-10 items-center flex justify-between gap-3"> <a${addAttribute(minusLink, "href")} class="text-3xl font-medium rounded-lg py-2 px-3">&#8592;</a> <a target="_blank"${addAttribute(`https://t.me/share/url?url=${new URL(Astro2.url.pathname, Astro2.site)}&text=\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A \u0410\u0418\u0417: ${currentDiary.data.title} | ${formattedDate}`, "href")} class="text-sky-700 flex items-center gap-1 ring-1 ring-sky-400/50 bg-blue-100 rounded-lg px-4 py-1.5 hover:text-sky-700"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:telegram" })} <span>Поделиться в группе</span> </a> <a${addAttribute(plusLink, "href")} class="text-3xl font-medium rounded-lg py-2 px-3">&#8594;</a> </aside> <main class="prose-aiz mx-auto max-w-3xl"> <h1>Ежедневник АИЗ</h1> <h3>${formattedDate}</h3> <h4>${currentDiary.data.title}</h4> ${renderComponent($$result2, "Content", Content, {})} </main> </main> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 - \u0441\u0430\u0438\u0306\u0442\u044B/internet-aiz/src/pages/diary.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/pages/diary.astro";
const $$url = "/diary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Diary,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
