import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  var _config$clientId, _config$clientSecret, _config$secret;
  const handler = makeGenericAPIRouteHandler({
    ..._config,
    clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : tryOrUndefined(() => {
      return undefined                                          ;
    }),
    clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : tryOrUndefined(() => {
      return undefined                                              ;
    }),
    secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : tryOrUndefined(() => {
      return undefined                                ;
    })
  }, {
    slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
  });
  return async function keystaticAPIRoute(context) {
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: (
    // isProd ?
    // {
    // 	kind: "github",
    // 	repo: "itaaSite/internetaddicts",
    // 	branchPrefix: "main/",
    // },
    { kind: "local" }
  ),
  collections: {
    posts: collection({
      label: "Посты",
      slugField: "title",
      path: "src/content/posts/*",
      entryLayout: "content",
      format: {
        contentField: "content"
      },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        description: fields.text({
          label: "Описание",
          description: "от 20 до 150 символов",
          validation: { length: { min: 20, max: 150 } }
        }),
        pubDate: fields.date({
          label: "Время",
          description: "Время публикации"
        }),
        img: fields.image({
          label: "Фото поста",
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/"
        }),
        content: fields.document({
          label: "Контент",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/posts",
            publicPath: "../../assets/images/posts/"
          }
        })
      }
    }),
    story: collection({
      label: "Л. истории",
      slugField: "title",
      path: "src/content/story/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        description: fields.text({
          label: "Описание",
          description: "от 20 до 150 символов",
          validation: { length: { min: 40, max: 320 } }
        }),
        content: fields.document({
          label: "Контент",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/stories",
            publicPath: "../../assets/images/stories/"
          }
        })
      }
    }),
    speakers: collection({
      label: "Спикерские",
      slugField: "title",
      path: "src/content/speakers/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        desc: fields.text({
          label: "Описание",
          description: "от 20 до 150 символов"
        }),
        idYB: fields.text({
          label: "id видео или полная ссылка на видео с youtube"
        }),
        pubDate: fields.date({
          label: "Время",
          description: "Время публикации"
        }),
        content: fields.document({
          label: "Контент",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/stories",
            publicPath: "../../assets/images/stories/"
          }
        })
      }
    }),
    groups: collection({
      label: "Группы",
      slugField: "title",
      path: "src/content/groups/*",
      entryLayout: "content",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({ name: { label: "Название группы" } }),
        body: fields.document({
          label: "Описание группы",
          formatting: true,
          dividers: true,
          links: true
        }),
        when: fields.text({
          label: "Время",
          defaultValue: "Пятница",
          description: "Когда? Понедельник, Вторник, Среда, Четверг, Пятница, Суббота или Воскресенье"
        }),
        dateTime: fields.text({
          label: "Время",
          description: "Время проведения собрания по МСК +3"
        }),
        type: fields.text({
          label: "Тип группы",
          description: '"Онлайн" либо "Живая"',
          defaultValue: "Онлайн"
        }),
        link: fields.url({
          label: "Ссылка (URL) на нее, либо карта (если живая группа)"
        })
      }
    }),
    /* pages: collection({
      label: "Страницы",
      slugField: "title",
      path: "src/content/pages/*",
      entryLayout: "content",
      format: {
        contentField: "content",
      },
      schema: {
        title: fields.slug({ name: { label: "Заголовок страницы" } }),
        desc: fields.text({
          label: "Описание страницы",
          description: "до 145 символов",
          validation: { length: { min: 20, max: 150 } },
        }),
        ogImage: fields.image({
          label: "ogImage (изображение страницы 1200x630)",
          directory: "src/assets/images/pages",
          publicPath: "../../assets/images/pages/",
        }),
        content: fields.document({
          label: "Контент страницы",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/pages",
            publicPath: "../../assets/images/pages/",
          },
        }),
      },
    }), */
    news: collection({
      label: "Новости",
      slugField: "title",
      path: "src/content/news/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        description: fields.text({
          label: "Описание",
          description: "от 20 до 150 символов",
          validation: { length: { min: 40, max: 320 } }
        }),
        pubDate: fields.date({
          label: "Время",
          description: "Время публикации"
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
