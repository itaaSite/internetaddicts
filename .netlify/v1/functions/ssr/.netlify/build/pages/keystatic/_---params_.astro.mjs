import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_BAgBan8v.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "/Users/samgold/Desktop/Проекты/internet-aiz/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
