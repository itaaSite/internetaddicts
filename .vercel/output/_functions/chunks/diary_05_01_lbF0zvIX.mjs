import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Открытие себя через шаги программы",
  "when": "01"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "В начале работы по шагам я чувствовал, что мне нужно научиться многому. Потом я работал по шагам, посещал встречи, что-то делал для сообщества. В какой-то момент я заметил, что другие люди в моей жизни отмечают, что я веду себя по-другому. Эти люди замечают, что что-то изменилось во мне. Однако мне самому бывает трудно заметить, что что-то изменилось в образе моего мышления. Мне трудно уловить этот момент, когда моё поведение продиктовано принципами программы, они встраиваются в меня как-то бесшовно. Мне порой кажется, что они всегда были частью меня. Эти мысли приводят меня к идее, что программа помогает мне открывать себя для самого себя. Есть глубокое ощущение, что программа помогает мне стать собой. Учит меня не тому, каким мне быть, а как быть собой."
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
const url = "src/content/diary/diary_05_01.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_01.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_01.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
