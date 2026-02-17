import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Эффект \"свихнувшегося\" ума",
  "when": "29"
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
    children: "Потребляя контент, через некоторое время мы замечаем, что нас перестаёт удовлетворять прежний поток информации, и мы начинаем хотеть всё больше и больше. Вместе с просмотром сериала мы начинаем читать газету или искать в телефоне новости, начинаем смотреть по два фильма одновременно или делаем ещё что-нибудь в этом роде. Нам требуется всё больше и больше информации, чтобы отвлечься от реальности и не замечать своей настоящей жизни. Малые дозы нас уже не берут. Этот эффект свойственен любой зависимости - постепенное увеличение дозы. Предела этому не будет, если мы пойдём по этому пути, мы будем увеличивать поток информации до тех пор, пока не сойдём с ума. Наш выход - осознать свою зависимость, честно признаться в ней перед самим собой и начать избавляться от неё с помощью программы 12 шагов."
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
const url = "src/content/diary/diary_04_29.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_29.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_29.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
