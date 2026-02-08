import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Душевная боль в начале выздоровления",
  "when": "12"
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
      children: "Впервые начав воздерживаться от интернета в АИЗ, я вдруг ощутил огромную дыру внутри. Всё вокруг стало казаться серым. Я почувствовал, что не умею общаться с людьми вживую, что мучаюсь от неуверенности в себе и не понимаю, чем заниматься без интернета. Все проблемы — одиночества, финансовой нестабильности, страха будущего — стали давить. И давить так сильно, что я не мог найти себе покоя, причём раньше я этого не ощущал. “Что же случилось?” — задавал я вопрос самому себе. “Ведь без интернета мне должно быть лучше, а стало только хуже”."
    }), "\n", createVNode(_components.p, {
      children: "Выздоравливая в АИЗ, я узнал, что интернет не был моей проблемой. Оказывается, он был моим решением. Я спасался этой “таблеткой” от неуверенности в себе, живя в иллюзорном интернетном мире, убегал от реального общения, влезая в перепалки с незнакомцами в соцсетях. Оказалось, что всё время употребления я находился в изоляции и обманывал сам себя. Но теперь я окружён группой поддержки, регулярно общаюсь с наставником, учусь применять духовные принципы в жизни и знаю, что не одинок в своих проблемах. Со временем я вижу, как боль, сразившая меня в начале, заменяется радостными моментами моей трезвости."
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

const url = "src/content/diary/diary_05_12.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_12.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_12.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
