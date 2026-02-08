import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "От критического мышления к практическому опыту",
  "when": "23"
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
      children: "Сильное критическое мышление — это тоже своего рода защитный механизм."
    }), "\n", createVNode(_components.p, {
      children: "Этот механизм говорит мне: нужно сначала понять, а если я не понимаю, то тогда это не имеет смысла применять. Нужно сначала разобраться, как всё устроено, а уж потом что-то делать."
    }), "\n", createVNode(_components.p, {
      children: "Такие размышления построены на логике и поэтому кажутся разумными."
    }), "\n", createVNode(_components.p, {
      children: "Однако в реальной жизни есть множество примеров, когда я пользуюсь чем-то, совершенно не понимая, как это работает. Например, микроволновка: я могу ею пользоваться, не понимая ничего в физике электромагнитных волн. Электричество в целом относится к этой же категории. А если взять этот телефон, на котором я пишу это сообщение, то у меня есть устойчивое ощущение, что нет на Земле человека, который понимает, как устроен этот телефон настолько детально, чтобы мог описать, как его можно сделать — начиная от детальной архитектуры процессора и заканчивая производственным процессом пластиковых деталей, из которых он состоит."
    }), "\n", createVNode(_components.p, {
      children: "Если задуматься, несложно обнаружить множество примеров в жизни, когда я начинаю что-то применять до того, как пойму, как это работает. Ребёнок учится ходить, вообще ничего не понимая о том, какую сложную с точки зрения баланса и координации задачу он пытается решить. А во взрослом состоянии мне не нужно понимать, как я хожу, чтобы ходить; я просто знаю, как это работает для меня."
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

const url = "src/content/diary/diary_04_23.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_23.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_23.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
