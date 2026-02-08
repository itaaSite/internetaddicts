import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Готовность отказаться от своих дефектов",
  "when": "11"
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
      children: "Мне всегда казалось, что хотеть отказаться от своих дефектов — это вполне естественно. Ведь это дефекты моего характера, то есть то, что делает меня и мою жизнь хуже, а также ухудшает жизнь моих близких и всего окружающего мира. Естественно, я хочу избавиться от своих недостатков. Это звучит как базовое желание любого здравомыслящего человека."
    }), "\n", createVNode(_components.p, {
      children: "Формулировка “обрести готовность быть избавленным” сначала была мне не совсем понятна. Что это за готовность, которую нужно обрести? Программа помогла мне избавиться от моей зависимости, не полностью, конечно, скорее, я теперь могу жить так, чтобы не залипать в телефоне. Но многие мои дефекты характера по-прежнему со мной. Например, прокрастинация — этот дефект моего характера очень мешает мне в жизни. Но я не почувствовал, что был избавлен от этого дефекта."
    }), "\n", createVNode(_components.p, {
      children: "Я старался быть более организованным, но, как и раньше, откладывал все дела на потом. Затем я стал больше наблюдать за этим дефектом. Я заметил, что в момент, когда я откладываю, мной владеют разные эмоции: страх, что мне нужно сделать что-то большое и, возможно, скучное, обида на человека, который попросил меня сделать то, что я откладываю. Эти чувства ускользали от моего внимания, это короткий момент, в котором я принимаю решение что-то отложить, но в нем есть целая палитра для проявления различных моих пороков. Например, гордыня — я могу считать, что я знаю лучше, чем человек, который попросил меня; обида — человек обратился ко мне недостаточно уважительно или не совсем аккуратно подобрал слова (не так, как я хотел бы); раздражение — я согласился выполнить просьбу, потому что угодничал или испытывал стыд, например, за то, что раньше не сделал что-то, что обещал. Все эти мимолетные эмоции оставались для меня незаметными."
    }), "\n", createVNode(_components.p, {
      children: "Осознавая эти эмоции и избавляясь от них при помощи инструментов программы, я обретаю готовность быть избавленным от прокрастинации. И прошу сил и мужества, чтобы поступать по-новому."
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

const url = "src/content/diary/diary_05_11.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_11.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_11.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
