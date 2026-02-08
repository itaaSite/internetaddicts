import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Срыв может быть частью процесса выздоровления",
  "when": "14"
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
    children: "Он кажется поражением, откатом назад, но важно увидеть в нём возможность для роста и осознания. Даже если человек долгое время находится в трезвости, срывы могут случаться. Особенно это касается интернет-зависимости, где срывы могут проявляться в виде небольших подскальзываний.\nКогда я сталкиваюсь с этим, я вспоминаю, как чувствовала себя в трезвости. В периоды ясности ум свободен от навязчивого желания вернуться в виртуальный мир. Срыв же напоминает мне о том, какой это тяжкий груз, сколько времени и энергии уходит на бесцельные действия. Он показывает контраст, позволяет почувствовать разницу между состоянием зависимости и состоянием свободы.\nКаждый срыв — это возможность посмотреть внутрь себя и задать важные вопросы: “Почему это произошло? Что я упустил? Каких чувств избегал?”. Ведь часто срыв — это лишь симптом, сигнал о том, что мы что-то не проработали в себе. Возможно, это усталость, стресс, чувство одиночества или страха, с которым мы не справились и обратились к привычному, но разрушительному способу отвлечься.\nИменно в эти моменты программа и шаги становятся особенно важны. Осознание того, что путь к выздоровлению нелинеен, учит меня смирению и принятию себя со всеми моими несовершенствами. Срыв открывает возможность глубже оценить ту свободу, которую даёт трезвость. Он позволяет мне понять, насколько ценно моё спокойствие, мои мысли, мои настоящие интересы, свободные от тумана зависимости.\nКаждый раз, когда я возвращаюсь к программе, я делаю это более осознанно, с глубоким пониманием того, что трезвость — это не просто отказ от привычки, а выбор жизни в её полноте и ясности."
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
const url = "src/content/diary/diary_05_14.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_14.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_14.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
