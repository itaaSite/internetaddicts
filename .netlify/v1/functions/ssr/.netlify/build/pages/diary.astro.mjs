import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BAgBan8v.mjs';
import 'kleur/colors';
import { g as getCollection, a as getEntry } from '../chunks/_astro_content_Dlvo6q7l.mjs';
import { $ as $$Layout } from '../chunks/Layout_fLcqfOOa.mjs';
export { renderers } from '../renderers.mjs';

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
  const diaryDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    diaryDay
  );
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A", "desc": "\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u0438\u043A \u0410\u0418\u0417" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-5"> <aside class="mx-auto max-w-[780px] mb-10"> <a${addAttribute(minusLink, "href")}${addAttribute({ fontSize: "2rem", fontWeight: "bold" }, "style")} class="text-lg md:ml-10 ml-5 bg-white font-medium rounded-lg py-2 px-3">&#8592; </a> <a${addAttribute(plusLink, "href")}${addAttribute({ fontSize: "2rem", fontWeight: "bold" }, "style")} class="text-lg md:ml-10 ml-5 bg-white font-medium rounded-lg py-2 px-3">&#8594; </a> </aside> <main class="prose-aiz"> <h1>Ежедневник АИЗ</h1> <h3>${formattedDate}</h3> <h4>${currentDiary.data.title}</h4> ${renderComponent($$result2, "Content", Content, {})} </main> </main> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/pages/diary.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/internet-aiz/src/pages/diary.astro";
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
