import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Как перестать залипать в интернете?",
  "description": "Вопросы по 10-11 шагу, которые могут помочь от залипания в интернете",
  "pubDate": "2023-12-18",
  "img": "../../assets/images/posts/kak-perestat-zalipat-v-internete/img.png",
  "tags": ["Инструменты", "12 шагов"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Задайте себе следующие вопросы:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Делаю ли я 12 шагов на ежедневной основе?"
      }), "\n", createVNode(_components.li, {
        children: "Веду ли я людей по шагам?"
      }), "\n", createVNode(_components.li, {
        children: "Несу ли я служения на группе?"
      }), "\n", createVNode(_components.li, {
        children: "Чем я могу быть полезен сообществу АИЗ?"
      }), "\n", createVNode(_components.li, {
        children: "Кому я могу помочь сегодня?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Эффект вас удивит: вы перестанете залипать в интернете."
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

const url = "src/content/posts/kak-perestat-zalipat-v-internete.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/kak-perestat-zalipat-v-internete.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/kak-perestat-zalipat-v-internete.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
