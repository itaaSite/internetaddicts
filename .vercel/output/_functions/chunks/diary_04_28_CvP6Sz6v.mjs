import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Сила поддержки на пути выздоровления",
  "when": "28"
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
      children: "В процессе прохождения программы я сталкивалась с ситуациями, когда казалось, что сама я не способна совершить нужные действия. Тогда я обращалась за помощью к Высшей Силе, представляя Её в том образе, который был близок и понятен тем, кто шёл этим путём до меня. Я искала поддержку у доброго и любящего Бога, который, как я верила, мог помочь мне выполнить эти, казалось бы, сложные действия. Этот шаг был для меня проявлением веры в то, что я не одна, и что есть Сила, готовая поддержать в трудный момент."
    }), "\n", createVNode(_components.p, {
      children: "Когда мне было особенно тяжело, я звонила своим попутчикам, просила их оставаться со мной на связи, пока я делаю задания по программе, которые казались мне непреодолимыми. Эти звонки были не просто запросами о поддержке; они становились мостиками, соединяющими меня с миром, где каждый понимает и поддерживает друг друга. В эти моменты я чувствовала, что не одинока, и что вместе мы сильнее."
    }), "\n", createVNode(_components.p, {
      children: "Иногда я делилась своими планами на ближайшее будущее с попутчиками, искала их поддержку в предстоящих действиях. Это было важно для меня, потому что их ободрение и вера в мои силы помогали мне двигаться вперёд. После того как я выполняла запланированное, я часто перезванивала им, чтобы поделиться, как всё прошло. Эти разговоры наполняли меня чувством достижения и вдохновляли на дальнейшие шаги. Мои попутчики не только поддерживали меня, но и радовались моим маленьким и большим победам вместе со мной."
    }), "\n", createVNode(_components.p, {
      children: "Этот опыт показал мне, как важно быть открытой к помощи не только от Бога, но и от людей, идущих по пути выздоровления вместе со мной. Он учил меня не только просить поддержку, но и быть готовой поддержать других. Это взаимодействие и поддержка стали для меня свидетельством того, что любовь, вера и доверие могут творить чудеса и помогать участникам каждый день."
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

const url = "src/content/diary/diary_04_28.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_28.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_28.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
