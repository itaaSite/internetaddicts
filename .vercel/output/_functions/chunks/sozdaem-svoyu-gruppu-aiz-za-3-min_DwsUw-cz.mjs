import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Создаем свою группу АИЗ за 3 мин!",
  "description": "Все просто. АИЗ группа - это развитие.",
  "pubDate": "2025-01-09T00:00:00.000Z",
  "tags": ["Руководство"],
  "img": "../../assets/images/posts/sozdaem-svoyu-gruppu-aiz-za-3-min/img.png",
  "favorite": false
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "нюансы",
    "text": "Нюансы"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Не будем заморачиваться и читать полное ", createVNode(_components.a, {
        href: "https://internetaddicts.ru/posts/kak-sozdat-gruppu-aiz/",
        children: "“Создать свою группу АИЗ очень легко! Руководство по созданию.”"
      }), " ", createVNode(_components.strong, {
        children: "Просто перейдем к сути!"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Вам нужно:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "В чате группы, текущего чата еще одну групп (Пример: В чате “Свобода для всех” открыть еще одну группу “Свобода для свех” только по другому времени, возоможно формату)"
      }), "\n", createVNode(_components.li, {
        children: "Вас должно быть не менее 2-3 человек *(2-3 это права называться группой АИЗ)**"
      }), "\n", createVNode(_components.li, {
        children: "Написать преамбулу (изменить преамбулу текущую у группы)."
      }), "\n", createVNode(_components.li, {
        children: "Составить время проведения группы."
      }), "\n", createVNode(_components.li, {
        children: "Найти служащего на роль ведущего."
      }), "\n", createVNode(_components.li, {
        children: "Придумать формат собрания."
      }), "\n", createVNode(_components.li, {
        children: "Сделать объявления."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "нюансы",
      children: "Нюансы"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Вы можете сделать группу только для женщин/мужчин. "
      }), "\n", createVNode(_components.li, {
        children: "Это не ультиматум, а рекомендация."
      }), "\n", createVNode(_components.li, {
        children: ["Вы создаете атмосферу ", createVNode(_components.strong, {
          children: "индефикации"
        }), " между полами."]
      }), "\n", createVNode(_components.li, {
        children: "Вы все ровны, да, но наши аспекты жизни разные. Выбор всегда есть. "
      }), "\n", createVNode(_components.li, {
        children: ["Группы могут быть ", createVNode(_components.strong, {
          children: "общие"
        }), ", ", createVNode(_components.strong, {
          children: "закрытые"
        }), ", ", createVNode(_components.strong, {
          children: "открытые"
        }), " и так далее."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "*3 Традиция АИЗ развернутая форма:"
      }), " "]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Нам следует принимать всех, страдающих от ИЗ. Поэтому мы не можем отказывать никому из тех, кто желает выздоравливать. Членство в АИЗ никогда не должно связываться с денежными соображениями или с умением приспосабливаться. Любые ", createVNode(_components.strong, {
          children: "2-3"
        }), " интернет-зависимых, собравшиеся вместе с целью поддержания трезвости, могут называть себя группой АИЗ при условии, что как группа они не входят в какую-либо другую организацию."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Вопросы по традициях можете задать ", createVNode(_components.a, {
        href: "https://t.me/legion_free",
        children: "мне"
      }), " либо ", createVNode(_components.a, {
        href: "https://t.me/+9Hq05g8DUQ42Yzli",
        children: "в группе."
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Все. Удачи вам в ", createVNode(_components.strong, {
          children: "начинаниях"
        }), " вашей группы 👋🙏"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/sozdaem-svoyu-gruppu-aiz-za-3-min.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/sozdaem-svoyu-gruppu-aiz-za-3-min.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/sozdaem-svoyu-gruppu-aiz-za-3-min.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
