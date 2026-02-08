import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { collection, fields, config as config$1 } from '@keystatic/core';
export { r as renderers } from '../../../chunks/_@astro-renderers__tu-bQuR.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
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

const about = collection({
  label: "Главная страница",
  slugField: "title",
  path: "src/data/page/*",
  entryLayout: "content",
  columns: ["title"],
  format: {
    contentField: "content"
  },
  schema: {
    title: fields.slug({ name: { label: "НИЧЕГО НЕ ПИСАТЬ" } }),
    description: fields.text({
      label: "НИЧЕГО НЕ ПИСАТЬ"
    }),
    content: fields.mdx({
      label: "Контент"
    })
  }
});

const groups = collection({
  label: "Группы",
  slugField: "title",
  path: "src/content/groups/*",
  entryLayout: "content",
  columns: ["title", "when", "dateTime", "type"],
  format: { contentField: "body" },
  schema: {
    title: fields.slug({ name: { label: "Название группы" } }),
    body: fields.mdx({
      label: "Описание группы"
    }),
    logo: fields.image({
      label: "Логотип",
      directory: "src/assets/images/groups_logos",
      publicPath: "../../assets/images/groups_logos/"
    }),
    when: fields.select({
      label: "Когда проводиться группа?",
      description: "Когда? Понедельник, Вторник, Среда, Четверг, Пятница, Суббота или Воскресенье",
      options: [
        { label: "Понедельник", value: "Понедельник" },
        { label: "Вторник", value: "Вторник" },
        { label: "Среда", value: "Среда" },
        { label: "Четверг", value: "Четверг" },
        { label: "Пятница", value: "Пятница" },
        { label: "Суббота", value: "Суббота" },
        { label: "Воскресенье", value: "Воскресенье" }
      ],
      defaultValue: "Понедельник"
    }),
    dateTime: fields.text({
      label: "Время",
      description: "Время проведения собрания по МСК +3"
    }),
    type: fields.select({
      label: "Тип группы",
      description: '"Онлайн" либо "Живая"',
      options: [
        { label: "Онлайн", value: "Онлайн" },
        { label: "Живая", value: "Живая" }
      ],
      defaultValue: "Онлайн"
    }),
    link: fields.url({
      label: "Ссылка (URL) на нее, либо карта (если живая группа)",
      description: "https://t.me/aiz_meetings"
    })
  }
});

const posts = collection({
  label: "Посты",
  slugField: "title",
  path: "src/content/posts/*",
  entryLayout: "content",
  columns: ["title", "pubDate", "favorite"],
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
      description: "Время публикации",
      defaultValue: {
        kind: "today"
      }
    }),
    tags: fields.multiselect({
      label: "Теги к посту",
      description: "Выберите теги",
      options: [
        { label: "Информация", value: "Информация" },
        { label: "Для групп", value: "Для групп" },
        { label: "Инструменты", value: "Инструменты" },
        { label: "Идеи", value: "Идеи" },
        { label: "Руководство", value: "Руководство" },
        { label: "Тест", value: "Тест" },
        { label: "12 шагов", value: "12 шагов" },
        { label: "12 традиций", value: "12 традиций" }
      ]
    }),
    img: fields.image({
      label: "Изображение поста",
      directory: "src/assets/images/posts",
      publicPath: "../../assets/images/posts/"
    }),
    favorite: fields.checkbox({
      label: "Избранный пост",
      description: "Избранный пост в начале"
    }),
    content: fields.mdx({
      label: "Контент"
    })
  }
});

const story = collection({
  label: "Л. истории",
  slugField: "title",
  path: "src/content/story/*",
  format: { contentField: "content" },
  entryLayout: "content",
  columns: ["title", "old"],
  schema: {
    title: fields.slug({ name: { label: "Заголовок" } }),
    description: fields.text({
      label: "Описание",
      description: "от 20 до 150 символов",
      validation: { length: { min: 40, max: 320 } }
    }),
    old: fields.text({ label: "Сколько в АИЗ?", defaultValue: "В АИЗ более 1-2 лет." }),
    content: fields.mdx({
      label: "Контент"
    })
  }
});

const config = config$1({
  storage: {
    kind: "cloud"
  } ,
  cloud: {
    project: "aiz-site/internetaddicts"
  },
  collections: {
    posts,
    groups,
    story,
    about
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
