import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CMwCRdqq.mjs';
import { $ as $$Image } from './_astro_assets_p3p0cAkR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Ты можешь быть полезным!",
  "description": "Команда сайта и общая наша цель и весть.",
  "pubDate": "2025-01-09T00:00:00.000Z",
  "tags": ["Для групп"],
  "img": "../../assets/images/posts/ty-mozhesh-byt-poleznym/img.png",
  "favorite": true
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Меня зовут K.M. Мое послание вам заключается в том, что вы можете быть полезны своими навыками в написании постов, статей, руководств и прочего. Сайтом занимаются: K.M., Maria, A., Sergei, Мира, Олег. Вы можете помочь нам в нашей общей идей нести весть тем, кто еще страдает от ИЗ. ", createVNode(_components.br, {}), "\n", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Я предлагаю вам:"
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Написать свою личную историю."
      }), "\n", createVNode(_components.li, {
        children: "Написать ваш опыт, ваши действия."
      }), "\n", createVNode(_components.li, {
        children: "Написать новые взгляды на жизнь до и после 12 шагов и применения принципов."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["И прочее! Все, что душе угодно. Мы стремимся попасть в массы, что бы как можно больше людей узнала о нас и о нашем сообществе АИЗ. Будем рады вам. Все подробности и вопросы можете написать ", createVNode(_components.a, {
        href: "https://t.me/legion_free",
        children: "мне"
      }), "."]
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

const url = "src/content/posts/ty-mozhesh-byt-poleznym.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/ty-mozhesh-byt-poleznym.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/ty-mozhesh-byt-poleznym.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
