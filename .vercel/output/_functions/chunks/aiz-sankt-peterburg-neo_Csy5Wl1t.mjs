import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "АИЗ Санкт-Петербург \"Нео\" ",
  "logo": "../../assets/images/groups_logos/aiz-sankt-peterburg-neo/logo.webp",
  "when": "Воскресенье",
  "dateTime": "15:00",
  "type": "Живая",
  "link": "https://t.me/+5tNNag7MVGoxNzBi"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["📍", createVNode(_components.strong, {
        children: "Санкт-Петербург"
      }), ", Колпинская ул. 27-29 (м. Чкаловская), Малый зал"]
    }), "\n", createVNode(_components.p, {
      children: "✅ Воскресенье 15:00"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "АИЗ Санкт-Петербург"
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

const url = "src/content/groups/aiz-sankt-peterburg-neo.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/groups/aiz-sankt-peterburg-neo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/groups/aiz-sankt-peterburg-neo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
