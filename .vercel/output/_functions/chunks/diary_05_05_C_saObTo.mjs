import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Бог даёт силу для изменения жизни",
  "when": "05"
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
    children: "Многие спрашивают: «Как предоставить Богу управлять моей жизнью?» Вы желаете это сделать, но не имеете в себе нравственной силы, порабощены сомнениями и находитесь во власти злых привычек. Ваши обещания и решения рушатся, как карточный домик. Вы не можете управлять своими мыслями, побуждениями, увлечениями. Невыполнимые обещания и обязательства заставляют вас усомниться в собственной искренности. Вам кажется, что Бог не может вас принять, но не стоит отчаиваться. Нужно понять, что такое настоящая сила воли. В природе человека это управляющая сила, которая проявляет себя при принятии решений. Все зависит от правильного действия воли. Бог дал человеку способность делать выбор. И этой способностью надо пользоваться. Вы не можете изменить свое сердце, не можете своими силами посвятить Богу самые глубокие чувства, но вы можете сделать выбор служить Ему. Вы в силах отдать Ему свою волю, а Бог для исполнения Своего благого намерения даст вам и желание, и силу действовать."
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
const url = "src/content/diary/diary_05_05.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_05.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_05.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
