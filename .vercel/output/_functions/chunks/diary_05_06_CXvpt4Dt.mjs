import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Жизнь без контроля: принятие людей и себя",
  "when": "06"
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
      children: "В программе я впервые начала осознавать, как раньше пыталась контролировать жизнь окружающих, навязывая им свои представления о том, как следует жить. Я думала, что мои действия исходят из желания делать добро, но теперь вижу, что часто это было неуемное желание контролировать и чувствовать себя нужной."
    }), "\n", createVNode(_components.p, {
      children: "Каждый раз, когда я пытаюсь “спасти” кого-то, я на самом деле стараюсь избежать взгляда внутрь себя, на свои проблемы и страхи. А еще мне казалось, что, если я буду заботиться о других, они в ответ позаботятся обо мне. Но работа по шагам научила меня, что истинное выздоровление начинается с принятия ответственности за свою жизнь."
    }), "\n", createVNode(_components.p, {
      children: "Мне еще иногда трудно отпускать желание вмешиваться, но я заметила, что чем меньше я пытаюсь контролировать окружающих, тем лучше становятся мои отношения с людьми, и больше энергии и времени на то, чтобы жить свою жизнь."
    }), "\n", createVNode(_components.p, {
      children: "Я обнаружила, что теперь способна предлагать поддержку другим, не пытаясь диктовать, как им жить. Я учусь сохранять границы и уважать свободу выбора другого человека. Отказ от попыток контролировать других дал мне неожиданное ощущение свободы."
    }), "\n", createVNode(_components.p, {
      children: "Только сегодня: Я буду принимать жизнь такой, какая она есть, и людей такими, какие они есть, без попыток изменить их под свои представления."
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

const url = "src/content/diary/diary_05_06.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_06.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_06.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
