import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Зависимость и избегание",
  "when": "30"
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
      children: "Начинать заниматься совсем не нужными “нужными” делами — это ещё один способ ухода из реальной жизни зависимых от интернета. Найти себе ещё одни кроссовки и потратить на это полдня, смотреть обзоры на разные вещи часами, даже выбирать хлеб в магазине по полчаса — всё, лишь бы не решать свои жизненные задачи, не жить свою жизнь. При этом оправдывать себя, что занимаюсь нужным делом."
    }), "\n", createVNode(_components.p, {
      children: "Этот способ ухода от реальности, как и многие другие, ведёт к созданию иллюзии занятости, при которой человек постоянно что-то делает, но ничего по сути не меняется в его жизни. За этим стоит страх столкнуться с реальными проблемами, неудовлетворённостью своим положением, страх принять важные решения или изменить что-то в своей жизни."
    }), "\n", createVNode(_components.p, {
      children: "Важным шагом к преодолению этой зависимости является осознание, что отвлечение на “нужные” дела является лишь временным облегчением, не решающим коренных проблем. Необходимо научиться принимать свои страхи, эмоции, реакции и работать над ними. Программа 12 шагов предлагает инструменты, которые помогают не только преодолеть зависимость, но и начать жить полноценной жизнью, решая свои проблемы и реализуя себя в различных сферах. Главное — помнить, что каждый шаг к реальной жизни, хоть и может показаться сложным, ведёт к освобождению от цепей зависимости и открытию новых горизонтов для счастья и умиротворения."
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

const url = "src/content/diary/diary_04_30.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_30.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_30.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
