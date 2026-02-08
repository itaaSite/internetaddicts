import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Вы никогда не поверите в программу  до конца, пока это не случится с вами.",
  "when": "20"
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
      children: "Сколько бы я ни слышал высказываний других участников на группах, сколько бы ни слушал их выступлений на спикерских, я никогда не мог поверить им до конца. Я искренне хотел им поверить, но что-то внутри не давало сделать это полностью. Только потом я понял, что так это не работает. Настоящая уверенность в программе начала приходить тогда, когда всё, о чем говорили другие, начало происходить со мной. И чем больше этого происходило в моей жизни, тем больше становилась эта уверенность. Как оказалось, только так это и работает. Это единственный способ поверить в программу — проверить её на себе. Отсюда следует вывод — нужно много действий. Одно понимание недорого стоит. Какой простой принцип, но доходил он до меня довольно долго."
    }), "\n", createVNode(_components.p, {
      children: "Пока я просто слушал других, мало что происходило. Это помогло получить трезвость в начале, но через некоторое время в программе это перестало работать. Когда я слушал других, я получал мотивацию к действиям, но если я ничего не делал после (а такое случалось довольно часто), то ничего не менялось. Наоборот, через некоторое время становилось только хуже.\nВысшая сила, как я вижу теперь, всегда делала свою часть работы. Она посылала мне людей, возможности, наставников в программе. Но с моей частью работы очень часто возникали проблемы.\nТеперь я знаю это и не трачу время, ожидая изменений; теперь я делаю их сам, работая по шагам и применяя принципы программы в своей жизни.\nВсё по честному — что посеешь, то и пожнёшь, и это здорово."
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

const url = "src/content/diary/diary_04_20.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_20.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_20.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
