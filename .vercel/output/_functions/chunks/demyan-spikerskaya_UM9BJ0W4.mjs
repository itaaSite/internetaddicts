import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "АИЗ. Анонимные Интернет-Зависимые: Демьян. Спикерская",
  "desc": "Демьян делится своим опытом выхода из интернет-зависимости через программу анонимных интернет-зависимых. Узнайте его методы и секреты.",
  "idYB": "https://www.youtube.com/watch?v=Hzg-7ePzBEY&t=2s",
  "pubDate": "2023-12-27"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/speakers/demyan-spikerskaya.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/demyan-spikerskaya.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/demyan-spikerskaya.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
