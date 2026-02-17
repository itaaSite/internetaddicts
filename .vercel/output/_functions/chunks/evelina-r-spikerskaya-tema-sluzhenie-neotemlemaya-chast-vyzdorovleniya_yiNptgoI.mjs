import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Эвелина Р. Спикерская. Тема: Служение - неотъемлемая часть выздоровления",
  "desc": "Эвелина делится тем, как служение стало важной частью её выздоровления. Узнайте, почему служение поддерживает трезвость.",
  "idYB": "https://www.youtube.com/watch?v=FSeTKUERYIY&t=2615s",
  "pubDate": "2024-01-26"
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

const url = "src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
