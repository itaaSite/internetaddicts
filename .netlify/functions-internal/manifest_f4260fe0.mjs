import "cookie";
import "kleur/colors";
import "string-width";
import "./chunks/astro_321cb245.mjs";
import "clsx";
import "mime";
import { compile } from "path-to-regexp";
import "html-escaper";

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose"));
    else if (proc.argv.includes("--silent"));
    else;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments
    .map(segment => {
      return (
        "/" +
        segment
          .map(part => {
            if (part.spread) {
              return `:${part.content.slice(3)}(.*)?`;
            } else if (part.dynamic) {
              return `:${part.content}`;
            } else {
              return part.content
                .normalize()
                .replace(/\?/g, "%3F")
                .replace(/#/g, "%23")
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
          })
          .join("")
      );
    })
    .join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash,
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes,
  };
}

const manifest = deserializeManifest({
  adapterName: "@astrojs/netlify/functions",
  routes: [
    {
      file: "index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/",
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: true,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "stories/index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/stories",
        type: "page",
        pattern: "^\\/stories\\/?$",
        segments: [[{ content: "stories", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/stories.astro",
        pathname: "/stories",
        prerender: true,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "groups/index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/groups",
        type: "page",
        pattern: "^\\/groups\\/?$",
        segments: [[{ content: "groups", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/groups.astro",
        pathname: "/groups",
        prerender: true,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "posts/index.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/posts",
        type: "page",
        pattern: "^\\/posts\\/?$",
        segments: [[{ content: "posts", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/posts.astro",
        pathname: "/posts",
        prerender: true,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "404.html",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/404",
        type: "page",
        pattern: "^\\/404\\/?$",
        segments: [[{ content: "404", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/404.astro",
        pathname: "/404",
        prerender: true,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [
        {
          stage: "head-inline",
          children:
            '!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{"lib":"/~partytown/","debug":false});c[f]=(c[f]||[]).concat(["dataLayer.push"])})(window,\'partytown\',\'forward\');/* Partytown 0.7.6 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.6":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);',
        },
      ],
      styles: [],
      routeData: {
        type: "endpoint",
        route: "/api/keystatic/[...params]",
        pattern: "^\\/api\\/keystatic(?:\\/(.*?))?$",
        segments: [
          [{ content: "api", dynamic: false, spread: false }],
          [{ content: "keystatic", dynamic: false, spread: false }],
          [{ content: "...params", dynamic: true, spread: true }],
        ],
        params: ["...params"],
        component: "node_modules/@keystatic/astro/internal/keystatic-api.js",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [
        {
          stage: "head-inline",
          children:
            '!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{"lib":"/~partytown/","debug":false});c[f]=(c[f]||[]).concat(["dataLayer.push"])})(window,\'partytown\',\'forward\');/* Partytown 0.7.6 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.6":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);',
        },
      ],
      styles: [],
      routeData: {
        type: "page",
        route: "/keystatic/[...params]",
        pattern: "^\\/keystatic(?:\\/(.*?))?\\/?$",
        segments: [
          [{ content: "keystatic", dynamic: false, spread: false }],
          [{ content: "...params", dynamic: true, spread: true }],
        ],
        params: ["...params"],
        component:
          "node_modules/@keystatic/astro/internal/keystatic-astro-page.astro",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [
        {
          stage: "head-inline",
          children:
            '!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{"lib":"/~partytown/","debug":false});c[f]=(c[f]||[]).concat(["dataLayer.push"])})(window,\'partytown\',\'forward\');/* Partytown 0.7.6 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.6":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);',
        },
      ],
      styles: [],
      routeData: {
        type: "endpoint",
        route: "/_image",
        pattern: "^\\/_image$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component: "node_modules/astro/dist/assets/endpoint/generic.js",
        pathname: "/_image",
        prerender: false,
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  base: "/",
  compressHTML: true,
  componentMetadata: [
    ["\u0000astro:content", { propagation: "in-tree", containsHead: false }],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/components/Footer.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/layout/Layout.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/layout/Post.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/aiz-i-12shagov.md",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/aiz-i-12shagov.md?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.md",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.md?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/instrumenty-dlya-polnocennoj-zhizni.md",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/instrumenty-dlya-polnocennoj-zhizni.md?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov.md",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov.md?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/odin-iz-metodov-prohozhdeniya-shagov-AIZ.md",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/odin-iz-metodov-prohozhdeniya-shagov-AIZ.md?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/pages/posts/[slug].astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/posts/[slug]@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "\u0000@astrojs-ssr-virtual-entry",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/pages/stories/[slug].astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/stories/[slug]@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/pages/404.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/404@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/pages/groups.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/groups@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/pages/index.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/index@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/pages/posts.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/posts@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/pages/stories.astro",
      { propagation: "in-tree", containsHead: true },
    ],
    [
      "\u0000@astro-page:src/pages/stories@_@astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/node_modules/@astrojs/markdoc/components/Renderer.astro",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/node_modules/@astrojs/markdoc/components/index.ts",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/1.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/1.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/2.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/2.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/3.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/3.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/4.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/4.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/5.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/5.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/6.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/6.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/7.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/7.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/8.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/8.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12step-netlify-app.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12step-netlify-app.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12steps-group-aiz.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12steps-group-aiz.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/online-cowork.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/online-cowork.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/proekt-dlya-12-shagov.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/proekt-dlya-12-shagov.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/daniil.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/daniil.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/demyan.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/demyan.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/kamil.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/kamil.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/vasilij.mdoc",
      { propagation: "in-tree", containsHead: false },
    ],
    [
      "/Users/samgold/Desktop/Проекты/itaa/src/content/story/vasilij.mdoc?astroPropagatedAssets",
      { propagation: "in-tree", containsHead: false },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000empty-middleware": "_empty-middleware.mjs",
    "/node_modules/@keystatic/astro/internal/keystatic-api.js":
      "chunks/pages/keystatic-api_2116ae0c.mjs",
    "/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro":
      "chunks/pages/keystatic-astro-page_83cb14d8.mjs",
    "\u0000@astrojs-manifest": "manifest_f4260fe0.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/node_modules/@astrojs/react/vnode-children.js":
      "chunks/vnode-children_3769332a.mjs",
    "\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":
      "chunks/keystatic-api_cd3929ff.mjs",
    "\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":
      "chunks/keystatic-astro-page_db90bd42.mjs",
    "\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":
      "chunks/generic_ce025bc3.mjs",
    "\u0000@astro-page:src/pages/index@_@astro": "chunks/index_1a898e69.mjs",
    "\u0000@astro-page:src/pages/stories/[slug]@_@astro":
      "chunks/_slug__77cbe561.mjs",
    "\u0000@astro-page:src/pages/stories@_@astro":
      "chunks/stories_55b90ece.mjs",
    "\u0000@astro-page:src/pages/groups@_@astro": "chunks/groups_c4ce3bcf.mjs",
    "\u0000@astro-page:src/pages/posts/[slug]@_@astro":
      "chunks/_slug__1f7888a3.mjs",
    "\u0000@astro-page:src/pages/posts@_@astro": "chunks/posts_aec2d8d8.mjs",
    "\u0000@astro-page:src/pages/404@_@astro": "chunks/404_8cfbeaa9.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/1.mdoc?astroContentCollectionEntry=true":
      "chunks/1_a8edad78.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/2.mdoc?astroContentCollectionEntry=true":
      "chunks/2_fb94405a.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/3.mdoc?astroContentCollectionEntry=true":
      "chunks/3_316c9a25.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/4.mdoc?astroContentCollectionEntry=true":
      "chunks/4_a93329ba.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/5.mdoc?astroContentCollectionEntry=true":
      "chunks/5_225241fd.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/6.mdoc?astroContentCollectionEntry=true":
      "chunks/6_fd80c698.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/7.mdoc?astroContentCollectionEntry=true":
      "chunks/7_e60ed0b8.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/8.mdoc?astroContentCollectionEntry=true":
      "chunks/8_57cf0705.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/aiz-i-12shagov.md?astroContentCollectionEntry=true":
      "chunks/aiz-i-12shagov_cd40834f.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.md?astroContentCollectionEntry=true":
      "chunks/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj_d31c0ede.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/instrumenty-dlya-polnocennoj-zhizni.md?astroContentCollectionEntry=true":
      "chunks/instrumenty-dlya-polnocennoj-zhizni_43548037.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov.md?astroContentCollectionEntry=true":
      "chunks/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov_5951661c.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/odin-iz-metodov-prohozhdeniya-shagov-AIZ.md?astroContentCollectionEntry=true":
      "chunks/odin-iz-metodov-prohozhdeniya-shagov-AIZ_69a18de7.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12step-netlify-app.mdoc?astroContentCollectionEntry=true":
      "chunks/12step-netlify-app_c2bba2d8.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12steps-group-aiz.mdoc?astroContentCollectionEntry=true":
      "chunks/12steps-group-aiz_9ab7e347.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/online-cowork.mdoc?astroContentCollectionEntry=true":
      "chunks/online-cowork_f0fa7fee.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/proekt-dlya-12-shagov.mdoc?astroContentCollectionEntry=true":
      "chunks/proekt-dlya-12-shagov_e9be9a1c.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/daniil.mdoc?astroContentCollectionEntry=true":
      "chunks/daniil_9e910129.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/demyan.mdoc?astroContentCollectionEntry=true":
      "chunks/demyan_595c67fd.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/kamil.mdoc?astroContentCollectionEntry=true":
      "chunks/kamil_27a2fb0a.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/vasilij.mdoc?astroContentCollectionEntry=true":
      "chunks/vasilij_43258a26.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/1.mdoc?astroPropagatedAssets":
      "chunks/1_939fb8bb.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/2.mdoc?astroPropagatedAssets":
      "chunks/2_5b5c908c.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/3.mdoc?astroPropagatedAssets":
      "chunks/3_563e92a8.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/4.mdoc?astroPropagatedAssets":
      "chunks/4_1ecb7e7d.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/5.mdoc?astroPropagatedAssets":
      "chunks/5_871a18fe.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/6.mdoc?astroPropagatedAssets":
      "chunks/6_1060b213.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/7.mdoc?astroPropagatedAssets":
      "chunks/7_1246d241.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/8.mdoc?astroPropagatedAssets":
      "chunks/8_fc378836.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/aiz-i-12shagov.md?astroPropagatedAssets":
      "chunks/aiz-i-12shagov_5b6b30e7.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.md?astroPropagatedAssets":
      "chunks/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj_3fd9b94a.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/instrumenty-dlya-polnocennoj-zhizni.md?astroPropagatedAssets":
      "chunks/instrumenty-dlya-polnocennoj-zhizni_957b8b5c.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov.md?astroPropagatedAssets":
      "chunks/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov_5866935b.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/odin-iz-metodov-prohozhdeniya-shagov-AIZ.md?astroPropagatedAssets":
      "chunks/odin-iz-metodov-prohozhdeniya-shagov-AIZ_eedbb9dd.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12step-netlify-app.mdoc?astroPropagatedAssets":
      "chunks/12step-netlify-app_480779ad.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12steps-group-aiz.mdoc?astroPropagatedAssets":
      "chunks/12steps-group-aiz_cac4db11.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/online-cowork.mdoc?astroPropagatedAssets":
      "chunks/online-cowork_f270913f.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/proekt-dlya-12-shagov.mdoc?astroPropagatedAssets":
      "chunks/proekt-dlya-12-shagov_93e5e1fc.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/daniil.mdoc?astroPropagatedAssets":
      "chunks/daniil_a22c76e3.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/demyan.mdoc?astroPropagatedAssets":
      "chunks/demyan_3c469d23.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/kamil.mdoc?astroPropagatedAssets":
      "chunks/kamil_14b208a8.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/vasilij.mdoc?astroPropagatedAssets":
      "chunks/vasilij_25978b03.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/1.mdoc":
      "chunks/1_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/2.mdoc":
      "chunks/2_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/3.mdoc":
      "chunks/3_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/4.mdoc":
      "chunks/4_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/5.mdoc":
      "chunks/5_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/6.mdoc":
      "chunks/6_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/7.mdoc":
      "chunks/7_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/groups/8.mdoc":
      "chunks/8_91430590.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/aiz-i-12shagov.md":
      "chunks/aiz-i-12shagov_3c3ca563.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.md":
      "chunks/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj_326401b0.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/instrumenty-dlya-polnocennoj-zhizni.md":
      "chunks/instrumenty-dlya-polnocennoj-zhizni_f8ba3db5.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov.md":
      "chunks/kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov_6bd923a4.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/notes/odin-iz-metodov-prohozhdeniya-shagov-AIZ.md":
      "chunks/odin-iz-metodov-prohozhdeniya-shagov-AIZ_df49858a.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12step-netlify-app.mdoc":
      "chunks/12step-netlify-app_7a98e1ee.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/12steps-group-aiz.mdoc":
      "chunks/12steps-group-aiz_6a3a20aa.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/online-cowork.mdoc":
      "chunks/online-cowork_0c3b9a2a.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/posts/proekt-dlya-12-shagov.mdoc":
      "chunks/proekt-dlya-12-shagov_82fbf7b1.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/daniil.mdoc":
      "chunks/daniil_09e86455.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/demyan.mdoc":
      "chunks/demyan_034ce5e5.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/kamil.mdoc":
      "chunks/kamil_50d42b48.mjs",
    "/Users/samgold/Desktop/Проекты/itaa/src/content/story/vasilij.mdoc":
      "chunks/vasilij_ddf88967.mjs",
    "@astrojs/react/client.js": "_astro/client.433b9e19.js",
    "/Users/samgold/Desktop/Проекты/itaa/node_modules/@keystatic/astro/internal/keystatic-page":
      "_astro/keystatic-page.09058714.js",
    "astro:scripts/before-hydration.js": "",
  },
  assets: [
    "/_astro/base.0c43657b.css",
    "/favicon.svg",
    "/manifest.webmanifest",
    "/robots.txt",
    "/svg.svg",
    "/tableau.json",
    "/_astro/client.433b9e19.js",
    "/_astro/index.e4caf7e0.js",
    "/_astro/keystatic-page.09058714.js",
    "/favicons/icon-16.png",
    "/favicons/icon-167.png",
    "/favicons/icon-180.png",
    "/favicons/icon-192.png",
    "/favicons/icon-32.png",
    "/favicons/icon-48.png",
    "/favicons/icon-512.png",
    "/favicons/icon.svg",
    "/favicons/tableau.png",
    "/rss/styles.xsl",
    "/static/4step-1.png",
    "/static/4step-1.webp",
    "/static/table-4step.png",
    "/static/table-4step.webp",
    "/static/Формат А4 - границы 1.5 шаг.png",
    "/index.html",
    "/stories/index.html",
    "/groups/index.html",
    "/posts/index.html",
    "/404.html",
    "/~partytown/partytown-atomics.js",
    "/~partytown/partytown-media.js",
    "/~partytown/partytown-sw.js",
    "/~partytown/partytown.js",
  ],
});

export { manifest };
