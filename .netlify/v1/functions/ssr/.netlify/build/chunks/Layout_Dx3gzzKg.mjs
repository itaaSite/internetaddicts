import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, a as renderComponent, f as renderHead } from './astro/server_BAgBan8v.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { g as getCollection } from './_astro_content_BqSkOHYe.mjs';

const $$Astro$2 = createAstro("https://internetaddicts.ru/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer style="display: flex; justify-content: space-between; align-items: center; padding: 20px; color: #111;"> <!-- Левая часть футера (например, текст или ссылки) --> <div> <p></p> </div> <!-- Левая часть футера (например, текст или ссылки) 
	<div class="flex flex-wrap gap-2 md:gap-3">
		<a
			  href="https://t.me/aiz_itta"
			class="text-green-700 self-end bg-green-50 ring-1 ring-green-400 rounded-full px-2.5 py-2 w-full md:w-auto md:text-left text-center"
			  >Чат сообщества АИЗ</a
		  >
	</div>
    <a
			href="https://t.me/all_12steps"
			class="text-sky-700 self-end bg-sky-50 ring-1 ring-sky-400 rounded-full px-2.5 py-2 w-full md:w-auto md:text-left text-center"
			>Материалы по 12 шагам</a
		>
	</nav>
	  <a href="https://vk.com/aiz_community" aria-label="VK">
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		  <path d="M9.489.004l.729-.003h3.564l.73.003.914.01.433.007.418.011.403.014.388.016.374.021.36.025.345.03.333.033c1.74.196 2.933.616 3.833 1.516.9.9 1.32 2.092 1.516 3.833l.034.333.029.346.025.36.02.373.025.588.012.41.013.644.009.915.004.98-.001 3.313-.003.73-.01.914-.007.433-.011.418-.014.403-.016.388-.021.374-.025.36-.03.345-.033.333c-.196 1.74-.616 2.933-1.516 3.833-.9.9-2.092 1.32-3.833 1.516l-.333.034-.346.029-.36.025-.373.02-.588.025-.41.012-.644.013-.915.009-.98.004-3.313-.001-.73-.003-.914-.01-.433-.007-.418-.011-.403-.014-.388-.016-.374-.021-.36-.025-.345-.03-.333-.033c-1.74-.196-2.933-.616-3.833-1.516-.9-.9-1.32-2.092-1.516-3.833l-.034-.333-.029-.346-.025-.36-.02-.373-.025-.588-.012-.41-.013-.644-.009-.915-.004-.98.001-3.313.003-.73.01-.914.007-.433.011-.418.014-.403.016-.388.021-.374.025-.36.03-.345.033-.333c.196-1.74.616-2.933 1.516-3.833.9-.9 2.092-1.32 3.833-1.516l.333-.034.346-.029.36-.025.373-.02.588-.025.41-.012.644-.013.915-.009ZM6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z"/>
		</svg>
	  </a>
	  <a href="https://www.youtube.com/@aiz_itaa" aria-label="YouTube">
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
		</svg>
	  </a>
	--> <!-- Правая часть футера с иконками --> <div style="display: flex; gap: 10px;"> <!-- Inlined SVG with color change on hover --> <a href="https://t.me/aiz_itta" aria-label="Telegram"> <svg width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path> </svg> </a> <a href="https://t.me/all_12steps" aria-label="Materials"> <svg width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"></path> </svg> </a> </div> </footer>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Footer.astro", void 0);

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="manifest" href="/manifest.webmanifest"><link rel="yandex-tableau-widget" href="/tableau.json"><link rel="icon" type="image/svg+xml" href="/favicons/icon.svg"><link rel="apple-touch-icon" type="image/png" sizes="167x167" href="/favicons/icon-167.png"><link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/favicons/icon-180.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicons/icon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/icon-16.png"><link rel="icon" type="image/png" sizes="48x48" href="/favicons/icon-48.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicons/icon-192.png">`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Head/Links.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Metrika = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<!-- Yandex.Metrika counter --><script type="text/javascript">\n  (function (m, e, t, r, i, k, a) {\n    m[i] =\n      m[i] ||\n      function () {\n        (m[i].a = m[i].a || []).push(arguments);\n      };\n    m[i].l = 1 * new Date();\n    for (var j = 0; j < document.scripts.length; j++) {\n      if (document.scripts[j].src === r) {\n        return;\n      }\n    }\n    (k = e.createElement(t)),\n      (a = e.getElementsByTagName(t)[0]),\n      (k.async = 1),\n      (k.src = r),\n      a.parentNode.insertBefore(k, a);\n  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n  ym(88691431, "init", {\n    clickmap: true,\n    trackLinks: true,\n    accurateTrackBounce: true,\n    webvisor: true,\n  });\n<\/script> ', '<noscript><div><img src="https://mc.yandex.ru/watch/88691431" style="position:absolute; left:-9999px;" alt=""></div></noscript><!-- /Yandex.Metrika counter -->'])), maybeRenderHead());
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Head/Metrika.astro", void 0);

const $$Verification = createComponent(($$result, $$props, $$slots) => {
  const verification_yandex = "4b2209308b18d6d7";
  const verification_google = "yG8qqyFB5KKCPLRVIaTwLRb44KoITy1i1bbCqL95iyo";
  return renderTemplate`<meta name="yandex-verification"${addAttribute(verification_yandex, "content")}><meta name="google-site-verification"${addAttribute(verification_google, "content")}>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Head/Verification.astro", void 0);

const $$Astro$1 = createAstro("https://internetaddicts.ru/");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-mbqdmgin> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Link.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/"> <svg aria-label="АИЗ" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_b_1251_5-274529)"> <rect width="55" height="55" rx="27.5" fill="url(#paint0_linear_1251_5-159361)"></rect> </g> <path d="M16.0892 35L15.3102 32.019H10.74L9.96101 35H5.47395L10.3661 20.012H15.8918L20.784 35H16.0892ZM12.9835 23.4708L11.5398 28.9134H14.5104L13.0666 23.4708H12.9835ZM31.0626 35V26.6595H30.9795L25.4746 35H21.2784V20.012H25.6823V28.3525H25.7654L31.2704 20.012H35.4666V35H31.0626ZM40.7181 28.9549V25.7351H42.6604C43.8445 25.7351 44.5924 25.1846 44.5924 24.2809C44.5924 23.3669 43.8445 22.8164 42.6085 22.8164C41.3621 22.8164 40.5208 23.5331 40.5208 24.5821H36.5427C36.5634 21.5388 38.9628 19.5965 42.702 19.5965C46.3166 19.5965 48.6847 21.2272 48.6847 23.7097C48.6847 25.4442 47.5318 26.7841 45.818 27.0853V27.1684C47.8746 27.3658 49.2041 28.7784 49.2041 30.7622C49.2041 33.5355 46.5347 35.4155 42.5877 35.4155C38.8901 35.4155 36.4076 33.442 36.2726 30.3883H40.4688C40.4896 31.3958 41.3309 32.0086 42.6812 32.0086C43.8861 32.0086 44.6858 31.3543 44.6858 30.3883C44.6858 29.4847 43.9172 28.9549 42.6397 28.9549H40.7181Z" fill="white"></path> <defs> <filter id="filter0_b_1251_5-274529" x="-0.306818" y="-0.306818" width="55.6136" height="55.6136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.153409"></feGaussianBlur> <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1251_5"></feComposite> <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1251_5" result="shape"></feBlend> </filter> <linearGradient id="paint0_linear_1251_5-159361" x1="27.5" y1="0" x2="27.5" y2="55" gradientUnits="userSpaceOnUse"> <stop stop-color="#94FFCB"></stop> <stop offset="1" stop-color="#48D79B"></stop> </linearGradient> </defs> </svg> </a>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Logo.astro", void 0);

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).length;
  const story = (await getCollection("story")).length;
  const groups = (await getCollection("groups")).length;
  const speakers = (await getCollection("speakers")).length;
  const news = (await getCollection("news")).length;
  return renderTemplate`${maybeRenderHead()}<header class="py-5 bg-white"> <div class="container max-w-6xl px-5 mx-auto gap-5 flex justify-between items-start md:items-center flex-col sm:flex-row"> ${renderComponent($$result, "Logo", $$Logo, {})} <nav class="flex gap-2 flex-wrap items-center"> ${renderComponent($$result, "Link", $$Link, { "href": "/", "style": { fontWeight: "bold" } }, { "default": ($$result2) => renderTemplate`Главная` })} ${renderComponent($$result, "Link", $$Link, { "href": "/groups", "style": { fontWeight: "bold" } }, { "default": ($$result2) => renderTemplate`Собрания (${groups})` })} ${renderComponent($$result, "Link", $$Link, { "href": "/diary", "style": { fontWeight: "bold" } }, { "default": ($$result2) => renderTemplate`Ежедневник` })} ${renderComponent($$result, "Link", $$Link, { "href": "/posts", "style": { fontWeight: "bold" } }, { "default": ($$result2) => renderTemplate`Статьи (${posts})` })} ${renderComponent($$result, "Link", $$Link, { "href": "/stories", "style": { fontWeight: "bold" } }, { "default": ($$result2) => renderTemplate`Истории (${story})` })} ${renderComponent($$result, "Link", $$Link, { "href": "/speakers", "style": { fontWeight: "bold" } }, { "default": ($$result2) => renderTemplate`Спикерские (${speakers})` })} ${renderComponent($$result, "Link", $$Link, { "href": "/news", "style": { fontWeight: "bold" } }, { "default": ($$result2) => renderTemplate`Новости (${news})` })} </nav> </div> </header>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/components/Header.astro", void 0);

const BANNER = "/image/banner_image.png";

const $$Astro = createAstro("https://internetaddicts.ru/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, desc, typeSite, pubDate, elemsTrue } = Astro2.props;
  const typeSiteFinal = typeSite ?? "website";
  return renderTemplate`<html lang="ru"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#EAEEFA"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="robots" content="index, follow"><link rel="canonical"${addAttribute(Astro2.url, "href")}>${renderComponent($$result, "Links", $$Links, {})}${renderComponent($$result, "Verification", $$Verification, {})}<meta name="title"${addAttribute("\u0410\u0418\u0417 | " + title, "content")}><meta name="description"${addAttribute(desc, "content")}><meta property="og:type"${addAttribute(typeSiteFinal, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:site_name" content="АИЗ - Анонимные Интернет-Зависимые"><meta property="og:title"${addAttribute("\u0410\u0418\u0417 | " + title, "content")}><meta property="og:description"${addAttribute(desc, "content")}><meta property="og:image"${addAttribute(BANNER, "content")}>${pubDate && renderTemplate`<meta property="article:modified_time"${addAttribute(pubDate, "content")}>`}<title>${"\u0410\u0418\u0417 | " + title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="scroll-smooth bg-zinc-50 min-w-[320px] overflow-x-hidden"> ${renderComponent($$result, "Header", $$Header, {})} <div class="py-12 flex flex-col gap-12 container max-w-6xl px-5 mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Metrika", $$Metrika, {})} </body></html>`;
}, "/Users/samgold/Desktop/\u041F\u0440\u043E\u0435\u043A\u0442\u044B/internet-aiz/src/layout/Layout.astro", void 0);

export { $$Layout as $ };
