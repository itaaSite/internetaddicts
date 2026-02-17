import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Внутренние мотивы прощения",
  "when": "10"
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
      children: "В процессе прохождения шагов я столкнулась с фразой, которая заставила меня задуматься: “все духовно больные, а ты выздоравливаешь и должен их простить”. На первый взгляд, это звучит как призыв к смирению и прощению, но почему-то вызывает во мне сопротивление. Мне показалось, что в этих словах скрыта нотка гордыни, как будто подразумевается, что кто-то лучше или находится выше других."
    }), "\n", createVNode(_components.p, {
      children: "Мне кажется, что здесь играет роль мое собственное восприятие, я могу додумывать некий смысл, которого изначально в этих словах не было. С другой стороны, возможно, это особенность языка, когда несколько посылов фразы, с которыми не споришь, могут все вместе привнести какой-то новый смысл."
    }), "\n", createVNode(_components.p, {
      children: "В программе я пришла к выводу, что искреннее прощение не может возникнуть из чувства гордости или превосходства. Если я буду чувствовать себя лучше или возвышеннее тех, кого собираюсь прощать, то моё прощение будет неискренним. Там, наоборот, возникнут обидчивость и спесивость, что только усилит внутренний конфликт и не принесёт мне умиротворения."
    }), "\n", createVNode(_components.p, {
      children: "Понимание того, что я ничем не лучше и не хуже других людей, инвентаризации из 4-го шага, в рамках которых я смогла осознать свои дефекты характера, дают мне возможность учиться принимать людей такими, какие они есть."
    }), "\n", createVNode(_components.p, {
      children: "Только сегодня: Я буду размышлять о своих внутренних мотивах и буду более честной с самой собой."
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

const url = "src/content/diary/diary_05_10.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_10.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_10.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
