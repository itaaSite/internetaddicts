import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Иллюзия удовольствия",
  "when": "04"
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
      children: "Когда я испытываю сильную тягу употребить прямо сейчас интернет, медиа или телефон, то мной движет желание расслабиться, отдохнуть получить удовольствие и хорошие положительные эмоции. И если я принимаю решение употреблять, то я получаю это. Но фокус в том, что эти ощущения предельно короткие и очень скоро они сменяются на еще большую усталость, тяжесть в теле и в сердце, необходимость делать дела, которые так не хочется делать, а времени на них теперь осталось еще меньше… И огромное разочарование в себе — как же так, ведь я не хочу употреблять, почему я опять это делаю?!"
    }), "\n", createVNode(_components.p, {
      children: "Напротив, если я принимаю решение не поддаваться тяге и сделать что-то полезное, здоровое, правильное, то, несмотря на то, что начинать это дело приходится через сопротивление, хорошее ощущение от здорового действия гораздо более устойчивое и долгоиграющее. Здоровое действие — помолиться, позвонить наставнику, сделать задание по шагу, пообщаться с другом, убраться в доме, приготовить еду, помочь детям или семье, созвониться с попутчиком по программе — это как сложные углеводы — дает энергию надолго, не отяжеляет, помогает жить. В конечном итоге, я чувствую себя хорошо и это дает мне силы и дальше действовать по духовным принципам."
    }), "\n", createVNode(_components.p, {
      children: "Употребление интернета для моего зависимого сознания — это быстрые углеводы, которые обманывают взрывом энергии, но за ним следует падение в пустоту."
    }), "\n", createVNode(_components.p, {
      children: "Только сегодня: Я буду молиться о том, чтобы не следовать за тягой употребления, которая дает мне иллюзию удовольствия и отбирает настоящую жизнь."
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

const url = "src/content/diary/diary_05_04.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_04.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_04.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
