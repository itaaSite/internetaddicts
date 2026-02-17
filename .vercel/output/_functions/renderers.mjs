import { generateHydrationScript, renderToStringAsync, renderToString, ssr, createComponent, Suspense, NoHydration } from 'solid-js/web';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { n as renderJSX, f as createVNode, o as AstroJSX, p as AstroUserError } from './chunks/astro/server_BrIEQ3l_.mjs';
import 'piccolore';
import 'clsx';

const contexts$1 = /* @__PURE__ */ new WeakMap();
function getContext$1(result) {
  if (contexts$1.has(result)) {
    return contexts$1.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "s" + this.c.toString();
    }
  };
  contexts$1.set(result, ctx);
  return ctx;
}
function incrementId$1(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}

const slotName$2 = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check$2(Component, props, children) {
  if (typeof Component !== "function") return false;
  if (Component.name === "QwikComponent") return false;
  if (Component.toString().includes("$$payload")) return false;
  let html;
  try {
    const result = await renderToStaticMarkup$2.call(this, Component, props, children, {
      // The purpose of check() is just to validate that this is a Solid component and not
      // React, etc. We should render in sync mode which should skip Suspense boundaries
      // or loading resources like external API calls.
      renderStrategy: "sync"
    });
    html = result.html;
  } catch {
  }
  return typeof html === "string";
}
async function renderToStaticMarkup$2(Component, props, { default: children, ...slotted }, metadata) {
  const ctx = getContext$1(this.result);
  const renderId = metadata?.hydrate ? incrementId$1(ctx) : "";
  const needsHydrate = metadata?.astroStaticSlot ? !!metadata.hydrate : true;
  const tagName = needsHydrate ? "astro-slot" : "astro-static-slot";
  const renderStrategy = metadata?.renderStrategy ?? "async";
  const renderFn = () => {
    const slots = {};
    for (const [key, value] of Object.entries(slotted)) {
      const name = slotName$2(key);
      slots[name] = ssr(`<${tagName} name="${name}">${value}</${tagName}>`);
    }
    const newProps = {
      ...props,
      ...slots,
      // In Solid SSR mode, `ssr` creates the expected structure for `children`.
      children: children != null ? ssr(`<${tagName}>${children}</${tagName}>`) : children
    };
    if (renderStrategy === "sync") {
      return createComponent(Component, newProps);
    } else {
      if (needsHydrate) {
        return createComponent(Suspense, {
          get children() {
            return createComponent(Component, newProps);
          }
        });
      } else {
        return createComponent(NoHydration, {
          get children() {
            return createComponent(Suspense, {
              get children() {
                return createComponent(Component, newProps);
              }
            });
          }
        });
      }
    }
  };
  const componentHtml = renderStrategy === "async" ? await renderToStringAsync(renderFn, {
    renderId,
    // New setting since Solid 1.8.4 that fixes an errant hydration event appearing in
    // server only components. Not available in TypeScript types yet.
    // https://github.com/solidjs/solid/issues/1931
    // https://github.com/ryansolid/dom-expressions/commit/e09e255ac725fd59195aa0f3918065d4bd974e6b
    ...{ noScripts: !needsHydrate }
  }) : renderToString(renderFn, { renderId });
  return {
    attrs: {
      "data-solid-render-id": renderId
    },
    html: componentHtml
  };
}
const renderer$2 = {
  name: "@astrojs/solid",
  check: check$2,
  renderToStaticMarkup: renderToStaticMarkup$2,
  supportsAstroStaticSlot: true,
  renderHydrationScript: () => generateHydrationScript()
};
var server_default$2 = renderer$2;

const contexts = /* @__PURE__ */ new WeakMap();
const ID_PREFIX = "r";
function getContext(rendererContextResult) {
  if (contexts.has(rendererContextResult)) {
    return contexts.get(rendererContextResult);
  }
  const ctx = {
    currentIndex: 0,
    get id() {
      return ID_PREFIX + this.currentIndex.toString();
    }
  };
  contexts.set(rendererContextResult, ctx);
  return ctx;
}
function incrementId(rendererContextResult) {
  const ctx = getContext(rendererContextResult);
  const id = ctx.id;
  ctx.currentIndex++;
  return id;
}

const StaticHtml = ({
  value,
  name,
  hydrate = true
}) => {
  if (!value) return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return createElement(tagName, {
    name,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: value }
  });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const slotName$1 = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for("react.element");
const reactTransitionalTypeof = Symbol.for("react.transitional.element");
async function check$1(Component, props, children) {
  if (typeof Component === "object") {
    return Component["$$typeof"].toString().slice("Symbol(".length).startsWith("react");
  }
  if (typeof Component !== "function") return false;
  if (Component.name === "QwikComponent") return false;
  if (typeof Component === "function" && Component["$$typeof"] === Symbol.for("react.forward_ref"))
    return false;
  if (Component.prototype != null && typeof Component.prototype.render === "function") {
    return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
  }
  let isReactComponent = false;
  function Tester(...args) {
    try {
      const vnode = Component(...args);
      if (vnode && (vnode["$$typeof"] === reactTypeof || vnode["$$typeof"] === reactTransitionalTypeof)) {
        isReactComponent = true;
      }
    } catch {
    }
    return React.createElement("div");
  }
  await renderToStaticMarkup$1.call(this, Tester, props, children);
  return isReactComponent;
}
async function getNodeWritable() {
  let nodeStreamBuiltinModuleName = "node:stream";
  let { Writable } = await import(
    /* @vite-ignore */
    nodeStreamBuiltinModuleName
  );
  return Writable;
}
function needsHydration(metadata) {
  return metadata?.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }, metadata) {
  let prefix;
  if (this && this.result) {
    prefix = incrementId(this.result);
  }
  const attrs = { prefix };
  delete props["class"];
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName$1(key);
    slots[name] = React.createElement(static_html_default, {
      hydrate: needsHydration(metadata),
      value,
      name
    });
  }
  const newProps = {
    ...props,
    ...slots
  };
  const newChildren = children ?? props.children;
  if (newChildren != null) {
    newProps.children = React.createElement(static_html_default, {
      hydrate: needsHydration(metadata),
      value: newChildren
    });
  }
  const formState = this ? await getFormState(this) : void 0;
  if (formState) {
    attrs["data-action-result"] = JSON.stringify(formState[0]);
    attrs["data-action-key"] = formState[1];
    attrs["data-action-name"] = formState[2];
  }
  const vnode = React.createElement(Component, newProps);
  const renderOptions = {
    identifierPrefix: prefix,
    formState
  };
  let html;
  if ("renderToReadableStream" in ReactDOM) {
    html = await renderToReadableStreamAsync(vnode, renderOptions);
  } else {
    html = await renderToPipeableStreamAsync(vnode, renderOptions);
  }
  return { html, attrs };
}
async function getFormState({
  result
}) {
  const { request, actionResult } = result;
  if (!actionResult) return void 0;
  if (!isFormRequest(request.headers.get("content-type"))) return void 0;
  const { searchParams } = new URL(request.url);
  const formData = await request.clone().formData();
  const actionKey = formData.get("$ACTION_KEY")?.toString();
  const actionName = searchParams.get("_action");
  if (!actionKey || !actionName) return void 0;
  return [actionResult, actionKey, actionName];
}
async function renderToPipeableStreamAsync(vnode, options) {
  const Writable = await getNodeWritable();
  let html = "";
  return new Promise((resolve, reject) => {
    let error = void 0;
    let stream = ReactDOM.renderToPipeableStream(vnode, {
      ...options,
      onError(err) {
        error = err;
        reject(error);
      },
      onAllReady() {
        stream.pipe(
          new Writable({
            write(chunk, _encoding, callback) {
              html += chunk.toString("utf-8");
              callback();
            },
            destroy() {
              resolve(html);
            }
          })
        );
      }
    });
  });
}
async function readResult(stream) {
  const reader = stream.getReader();
  let result = "";
  const decoder = new TextDecoder("utf-8");
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      if (value) {
        result += decoder.decode(value);
      } else {
        decoder.decode(new Uint8Array());
      }
      return result;
    }
    result += decoder.decode(value, { stream: true });
  }
}
async function renderToReadableStreamAsync(vnode, options) {
  return await readResult(await ReactDOM.renderToReadableStream(vnode, options));
}
const formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function isFormRequest(contentType) {
  const type = contentType?.split(";")[0].toLowerCase();
  return formContentTypes.some((t) => type === t);
}
const renderer$1 = {
  name: "@astrojs/react",
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1,
  supportsAstroStaticSlot: true
};
var server_default$1 = renderer$1;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function") return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  try {
    const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
    return { html };
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
    throw e;
  }
}
function throwEnhancedErrorIfMdxComponent(error, Component) {
  if (Component[Symbol.for("mdx-component")]) {
    if (AstroUserError.is(error)) return;
    error.title = error.name;
    error.hint = `This issue often occurs when your MDX component encounters runtime errors.`;
    throw error;
  }
}
const renderer = {
  name: "astro:jsx",
  check,
  renderToStaticMarkup
};
var server_default = renderer;

const renderers = [Object.assign({"name":"@astrojs/solid-js","clientEntrypoint":"@astrojs/solid-js/client.js","serverEntrypoint":"@astrojs/solid-js/server.js"}, { ssr: server_default$2 }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js"}, { ssr: server_default$1 }),Object.assign({"name":"astro:jsx","serverEntrypoint":"file:///Users/samgold/Desktop/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/12%20%D1%88%D0%B0%D0%B3%D0%BE%D0%B2%20-%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D1%8B/internet-aiz/node_modules/@astrojs/mdx/dist/server.js"}, { ssr: server_default }),];

export { renderers };
