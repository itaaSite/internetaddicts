import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CMwCRdqq.mjs';
import { $ as $$Image } from './_astro_assets_p3p0cAkR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Сайт АИЗ начинает сбор личных историй",
  "description": "Собираем личные истории",
  "pubDate": "2025-01-04"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Друзья!"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Сайт АИЗ начинает сбор личных историй выздоровления по программе 12 шагов. Если вы хотите поделиться своим опытом, расскажите:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "О вашем пути выздоровления."
      }), "\n", createVNode(_components.li, {
        children: "О трудностях, которые вы преодолевали при прохождении шагов."
      }), "\n", createVNode(_components.li, {
        children: "Как вы применяете принципы шагов в жизни."
      }), "\n", createVNode(_components.li, {
        children: "Как вы работаете по шагам и что помогает вам оставаться трезвыми."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Формат:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Имя"
      }), "\n", createVNode(_components.li, {
        children: "Сколько в АИЗ"
      }), "\n", createVNode(_components.li, {
        children: "Сама история, от 3 до 12 предложений."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Ваши истории могут стать источником вдохновения и поддержки для других участников сообщества."
    }), "\n", createVNode(_components.p, {
      children: "Если вы готовы поделиться своим опытом, присылайте свои истории в личные сообщения в\n@legion_free"
    }), "\n", createVNode(_components.p, {
      children: "Спасибо, что делитесь своей силой, надеждой и опытом! 🙏"
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

const url = "src/content/news/stories.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/news/stories.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/news/stories.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
