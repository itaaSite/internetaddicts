import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CMwCRdqq.mjs';
import { $ as $$Image } from './_astro_assets_p3p0cAkR.mjs';
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
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(_components.p, {
    children: [createVNode(_components.strong, {
      children: "📍Москва"
    }), ", Селиверстов переулок, 10 стр. 2 в помещении группы АА Центр (малая комната) "]
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
const file = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/groups/aiz_group_6_18_live.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/groups/aiz_group_6_18_live.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
