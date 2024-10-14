import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DEbwftI_.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/404.astro.mjs');
const _page4 = () => import('./pages/diary.astro.mjs');
const _page5 = () => import('./pages/groups.astro.mjs');
const _page6 = () => import('./pages/news/rss.xml.astro.mjs');
const _page7 = () => import('./pages/news/_slug_.astro.mjs');
const _page8 = () => import('./pages/news.astro.mjs');
const _page9 = () => import('./pages/posts/rss.xml.astro.mjs');
const _page10 = () => import('./pages/posts/_slug_.astro.mjs');
const _page11 = () => import('./pages/posts.astro.mjs');
const _page12 = () => import('./pages/speakers/rss.xml.astro.mjs');
const _page13 = () => import('./pages/speakers/_slug_.astro.mjs');
const _page14 = () => import('./pages/speakers.astro.mjs');
const _page15 = () => import('./pages/stories/rss.xml.astro.mjs');
const _page16 = () => import('./pages/stories/_slug_.astro.mjs');
const _page17 = () => import('./pages/stories.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/diary.astro", _page4],
    ["src/pages/groups.astro", _page5],
    ["src/pages/news/rss.xml.ts", _page6],
    ["src/pages/news/[slug].astro", _page7],
    ["src/pages/news/index.astro", _page8],
    ["src/pages/posts/rss.xml.ts", _page9],
    ["src/pages/posts/[slug].astro", _page10],
    ["src/pages/posts/index.astro", _page11],
    ["src/pages/speakers/rss.xml.ts", _page12],
    ["src/pages/speakers/[slug].astro", _page13],
    ["src/pages/speakers/index.astro", _page14],
    ["src/pages/stories/rss.xml.ts", _page15],
    ["src/pages/stories/[slug].astro", _page16],
    ["src/pages/stories/index.astro", _page17],
    ["src/pages/index.astro", _page18]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "33e0f793-e5d0-4e64-912b-853fc2c310c2"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
