import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_hwvkIaL7.mjs';
import { manifest } from './manifest_lRj4iAc_.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/authors/_author_.astro.mjs');
const _page4 = () => import('./pages/bookmarks.astro.mjs');
const _page5 = () => import('./pages/contacts.astro.mjs');
const _page6 = () => import('./pages/diary.astro.mjs');
const _page7 = () => import('./pages/groups.astro.mjs');
const _page8 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page9 = () => import('./pages/posts/rss.xml.astro.mjs');
const _page10 = () => import('./pages/posts/_slug_.astro.mjs');
const _page11 = () => import('./pages/posts.astro.mjs');
const _page12 = () => import('./pages/stories/_slug_.astro.mjs');
const _page13 = () => import('./pages/stories.astro.mjs');
const _page14 = () => import('./pages/tags/_tag_.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page2],
    ["src/pages/authors/[author].astro", _page3],
    ["src/pages/bookmarks.astro", _page4],
    ["src/pages/contacts.astro", _page5],
    ["src/pages/diary.astro", _page6],
    ["src/pages/groups/index.astro", _page7],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page8],
    ["src/pages/posts/rss.xml.ts", _page9],
    ["src/pages/posts/[slug].astro", _page10],
    ["src/pages/posts/index.astro", _page11],
    ["src/pages/stories/[slug].astro", _page12],
    ["src/pages/stories/index.astro", _page13],
    ["src/pages/tags/[tag].astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "055ef4db-07bb-4a6b-b8e4-dfb209663de7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
