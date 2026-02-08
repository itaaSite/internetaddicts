import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Не наблюдать, а жить",
  "when": "19"
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
      children: "Несмотря на то, что в интернете я видела множество людей, я всё равно чувствовала себя очень одинокой. Наблюдение за блогерами и знакомыми через соцсети, бесконечный просмотр сериалов, фильмов и интервью не давало мне полноценного контакта и общения. Я была, по сути, наблюдателем, а не участником. Я, как нищая и бездомная, могла лишь смотреть сквозь окно в комнату богатого дома и завидовать яркой и наполненной жизни других людей, чувствуя, что этот мир не для меня, что мне никогда его не достичь.\nПридя в сообщество АИЗ, я наконец обрела настоящее живое общение с теми, кто понимает меня. В разговорах с членами сообщества, попутчиками и впереди идущими я почувствовала, что мои чувства не уникальны, что с похожими состояниями сталкиваются многие. Шаги по программе и конкретные действия возвращают меня в мою жизнь, наполняют силой для того, чтобы жить, а не наблюдать за жизнью. Общение в живом контакте дарит мне все цвета мира и интерес к другим людям. Теперь я не наблюдаю за тем, как жизнь проходит мимо меня, а проживаю её."
    }), "\n", createVNode(_components.p, {
      children: "Только сегодня: Я буду жить своей жизнью и буду концентрироваться на общении с живыми людьми, а не персонажами видео-контента и соцсетей."
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

const url = "src/content/diary/diary_04_19.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_19.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_19.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
