import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Аист АИЗ Москва",
  "logo": "../../assets/images/groups_logos/aiz_group_6_18_live/logo.jpg",
  "when": "Суббота",
  "dateTime": "17:30",
  "type": "Живая",
  "link": "https://t.me/+jQk3yWbjyF03MzUy"
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
  return createVNode(_components.p, {
    children: [createVNode(_components.strong, {
      children: "📍Москва"
    }), ", Покровка, 31 стр 1"]
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
const url = "src/content/groups/aiz_group_6_18_live.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/groups/aiz_group_6_18_live.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/groups/aiz_group_6_18_live.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
