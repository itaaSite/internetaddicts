import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "АИЗ. Анонимные Интернет-Зависимые | Спикерская Марата",
  "desc": "Марат рассказывает, как программа анонимных интернет-зависимых помогла ему преодолеть зависимость и восстановить баланс в жизни.",
  "idYB": "https://www.youtube.com/watch?v=wxcbg6BdnEw",
  "pubDate": "2022-05-06"
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

const url = "src/content/speakers/spikerskaya-marat.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/spikerskaya-marat.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/spikerskaya-marat.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
