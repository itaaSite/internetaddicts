import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Отсекайте всё лишнее",
  "when": "03"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Современный мир охотится за нашим вниманием. Соцсети, интернет-пространство, всё вокруг сейчас ориентировано на привлечение нашего внимания, тем самым они управляют нами. Чтобы этого не происходило, отсекайте всё лишнее. Действуйте как садовник, который ухаживает за фруктовыми деревьями. Если он не будет отсекать лишние ненужные ветви, то вся сила деревьев уйдёт в них, и деревья не принесут плода. Опытные садовники безжалостно отсекают всё лишнее и получают замечательные результаты в итоге. Так и мы должны безжалостно отсекать всё ненужное и неважное, что отвлекает нас."
    }), "\n", createVNode(_components.p, {
      children: "Особенно актуальны для нас в этом плане наш смартфон, компьютер, и любые источники информации."
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

const url = "src/content/diary/diary_05_03.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_03.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_03.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
