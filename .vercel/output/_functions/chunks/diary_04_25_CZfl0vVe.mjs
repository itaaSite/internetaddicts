import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Путь к свободе через доверие Высшей Силе",
  "when": "25"
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
      children: "Моё понимание зависимости на данный момент такое: если мне в обычной жизни невыносимо, то я нахожу способы облегчить своё состояние каким-нибудь способом. Каждый находит свой способ, что для него работает: кто-то еду, кто-то алкоголь или наркотики, кто-то секс, кто-то создаёт конфликты с людьми, кто-то работу, кто-то ранит или бьёт себя и т. д.; в принципе, употреблять можно много чего, ещё и комбинировать. Но сути это не меняет — я употребляю, потому что мне без употребления невыносимо."
    }), "\n", createVNode(_components.p, {
      children: "Мне кажется, мысль начать с себя очень хорошая."
    }), "\n", createVNode(_components.p, {
      children: "Если у меня в какой-то сфере моей жизни творится какая-то дичь, по моему мнению, первым делом я смотрю на то, какие программные инструменты я могу применить в этой сфере, а вообще, в этой сфере я применяю программный подход? Доверяю ли я Высшей Силе, пускаю ли Бога туда, или я пытаюсь всё наладить сам и всё контролировать? В отношениях с другими людьми программа предлагает смотреть на свою сторону улицы, не пытаться догадываться, о чём думает человек, а спрашивать прямо. Я не могу выздоравливать за другого человека, но выздоравливая сам, я могу стать примером, за которым хочется идти."
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

const url = "src/content/diary/diary_04_25.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_25.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_25.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
