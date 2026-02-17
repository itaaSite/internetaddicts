import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "АИЗ (ITAA) | Спикерская Евгений Н. г.Чебоксары | Как я избавился от интернет-зависимости",
  "desc": "Евгений делится своим личным опытом избавления от интернет-зависимости. Узнайте о ключевых шагах и практиках, которые помогли ему справиться с зависимостью.",
  "idYB": "https://www.youtube.com/watch?v=caGyCyxZA34",
  "pubDate": "2022-04-12"
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

const url = "src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
