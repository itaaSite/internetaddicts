import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CMwCRdqq.mjs';
import 'kleur/colors';
import { $ as $$Tags, a as $$Article } from '../chunks/Tags_BqEAc-1g.mjs';
import { $ as $$Layout } from '../chunks/Layout_B7JnRtOr.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_BPCwNIDd.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://internetaddicts.ru/");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search;
  const { id, className, query, uiOptions = {} } = Astro2.props;
  const bundlePath = `${"/"}pagefind/`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([className, "pagefind-init"], "class:list")} data-pagefind-ui${addAttribute(bundlePath, "data-bundle-path")}${addAttribute(query, "data-query")}${addAttribute(JSON.stringify(uiOptions), "data-ui-options")}></div> `;
}, "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/node_modules/astro-pagefind/src/components/Search.astro", void 0);

const $$Astro = createAstro("https://internetaddicts.ru/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("posts");
  const q = Astro2.url.searchParams.get("q") ?? void 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0410\u0440\u0445\u0438\u0432", "desc": "\u0410\u0440\u0445\u0438\u0432 \u0410\u0418\u0417. \u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F, \u043C\u0435\u0442\u043E\u0434\u044B \u0448\u0430\u0433\u043E\u0432, \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u0440\u043E\u0447\u0435\u0435." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Tags", $$Tags, {})} ${renderComponent($$result2, "Search", $$Search, { "query": q })} ${maybeRenderHead()}<div class="md:grid-cols-2 gap-5 grid grid-cols-1"> ${posts && posts.filter((post) => post.data.favorite === true).slice(0, 2).map((post) => renderTemplate`${renderComponent($$result2, "Article", $$Article, { "favorite": true, "slug": post.slug, "data": post.data })}`)} </div> <div class="grid md:grid-cols-2 grid-cols-1 gap-5"> <!-- filter(post => post.data.favorite !== true) --> ${posts && posts.filter((post) => post.data.favorite !== true).sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  ).map((post) => renderTemplate`${renderComponent($$result2, "Article", $$Article, { "slug": post.slug, "data": post.data })}`)} </div> ` })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/12 \u0448\u0430\u0433\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/pages/posts/index.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/pages/posts/index.astro";
const $$url = "/posts.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
