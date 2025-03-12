import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, s as spreadAttributes, f as renderSlot } from './astro/server_CMwCRdqq.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_p3p0cAkR.mjs';
import { g as getCollection } from './_astro_content_BPCwNIDd.mjs';
/* empty css                         */
import 'clsx';

const $$Astro$2 = createAstro("https://internetaddicts.ru/");
const $$Article = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Article;
  const {
    data: { description, title, tags, img },
    slug,
    favorite
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/posts/${slug}`, "href")} class="hover-top"${addAttribute(title, "aria-label")}> <article${addAttribute(`bg-white items-center sm:flex rounded-2xl ring-1 ring-zinc-200`, "class")}> <div class="relative"> ${favorite ? renderTemplate`<div class="absolute top-0 left-0  bg-black/80 backdrop-blur-xl rounded-xl px-3 py-1.5 text-white font-medium">
📌 Избранное
</div>` : ""} ${img ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "title": title, "aria-label": title, "class": "rounded-xl object-cover bg-center sm:max-w-[220px] h-[220px]", "alt": `\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u0442\u0430: ${title}`, "format": "webp", "quality": 10 })}` : renderTemplate`<div class="rounded-xl bg-zinc-900 max-w-[220px] h-[220px]"></div>`} </div> <div class="flex gap-3 p-5 flex-col"> <h3 class="text-xl line-clamp-3 font-semibold text-balance">${title}</h3> <p class="line-clamp-3 italic text-pretty text-sm text-zinc-500">${description}</p> <div class="flex flex-wrap gap-2"> ${tags && tags.map((tag) => renderTemplate`<span class="text-sm font-bold text-zinc-800">💡${tag}</span>`)} </div> </div> <!-- {
			pubDate && (
				<time datetime={pubDate} class="font-medium">
					{new Date(pubDate).toLocaleDateString("ru-RU", {
						year: "numeric",
						month: "numeric",
						day: "numeric",
					})}
				</time>
			)
		} --> </article> </a>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/blocks/Article.astro", void 0);

const getAllPosts = async (content) => {
  const posts = (await getCollection(content)).filter(({ data }) => data.draft !== true ).sort((a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate));
  return posts;
};

const getTaxonomy = async (collection, name) => {
  const singlePages = await getAllPosts(collection);
  let taxonomies = [];
  singlePages.forEach((page) => {
    const tagArray = page.data[name];
    if (Array.isArray(tagArray)) {
      tagArray.forEach((tag) => {
        taxonomies.push(tag);
      });
    }
  });
  const uniqueTaxonomies = [...new Set(taxonomies)];
  return uniqueTaxonomies;
};

function slugify(input) {
  if (!input) return "";
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
    ь: ""
  };
  let slug = input.toLowerCase().trim().replace(/[а-яё]/gi, (match) => ruToEn[match] || "");
  slug = slug.normalize("NFD").replace(/\p{M}/gu, "");
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
}
function slugifyReverse(input) {
  if (!input) return "";
  const enToRu = {
    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "е",
    yo: "ё",
    zh: "ж",
    z: "з",
    i: "и",
    y: "й",
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
    kh: "х",
    ts: "ц",
    ch: "ч",
    sh: "ш",
    shch: "щ",
    y: "ы",
    e: "э",
    yu: "ю",
    ya: "я",
    "": ""
    // для символа, который мы не можем преобразовать
  };
  const words = input.split("-");
  const translatedWords = words.map((word) => {
    let translated = "";
    let i = 0;
    while (i < word.length) {
      if (i + 1 < word.length && enToRu[word.slice(i, i + 2)]) {
        translated += enToRu[word.slice(i, i + 2)];
        i += 2;
      } else if (enToRu[word[i]]) {
        translated += enToRu[word[i]];
        i += 1;
      } else {
        translated += word[i];
        i += 1;
      }
    }
    return translated;
  });
  return translatedWords.join(" ");
}

const $$Astro$1 = createAstro("https://internetaddicts.ru/");
const $$TagLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-ydim2slv> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/TagLink.astro", void 0);

const $$Astro = createAstro("https://internetaddicts.ru/");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const posts = await getAllPosts("posts");
  const countPostsByTag = (posts2, tagField = "tags") => {
    const tagCounts2 = {};
    posts2.forEach((post) => {
      const tags2 = post.data[tagField] || [];
      tags2.forEach((tag) => {
        tagCounts2[tag] = (tagCounts2[tag] || 0) + 1;
      });
    });
    return tagCounts2;
  };
  const tags = await getTaxonomy("posts", "tags");
  const tagCounts = countPostsByTag(posts);
  Astro2.url;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-3"> <!-- <a
		href="/posts"
		class:list={\`\${pathname === "/posts" ? "bg-green-200 text-green-700 rounded-lg px-3 py-2 ring-1 ring-green-400" : "bg-white rounded-lg px-3 py-2 text-zinc-600 border"}\`}
		>Все посты <b class="text-sm">({posts.length})</b></a
	> --> ${renderComponent($$result, "TagLink", $$TagLink, { "href": "/posts" }, { "default": ($$result2) => renderTemplate`Все посты <b class="text-sm">(${posts.length})</b>` })} ${tags && tags.map((tag) => renderTemplate`${renderComponent($$result, "TagLink", $$TagLink, { "href": `/tags/${slugify(tag)}` }, { "default": ($$result2) => renderTemplate`${tag}<b class="text-sm"> (${tagCounts[tag] || 0})</b> ` })}`)} </div>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Tags.astro", void 0);

export { $$Tags as $, $$Article as a, slugifyReverse as b, getTaxonomy as c, getAllPosts as g, slugify as s };
