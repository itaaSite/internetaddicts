import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Забота и поддержка в каждом шаге программы",
  "when": "27"
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
      children: "Чем мне нравится работа в программе, так это тем, что это очень мягкая программа. Каждый в ней выздоравливает со своей скоростью, работает по шагам ровно настолько, насколько ему позволяет его текущее понимание и ресурсы."
    }), "\n", createVNode(_components.p, {
      children: "Для меня программа ценна тем, что она не давит на меня, не осуждает меня за мои ошибки, за мои срывы. Наоборот, это куда я прихожу, когда мне нужна помощь. Когда мне нужна забота любящего родителя, который просто укроет теплым одеялом, нальет кружку чая и выслушает все, что мне важно высказать. И может даже скажет, что я своей дележкой кому-то помог. Это место, где меня вдохновляют успехи других и дарят надежду, что есть решение моей проблемы, и я тоже смогу справиться. То место, где мне напомнят, что нужно продержаться только сегодня, только один день."
    }), "\n", createVNode(_components.p, {
      children: "Застыдить себя я и сам могу, я это хорошо умею делать, как думаю, и многие в сообществе."
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

const url = "src/content/diary/diary_04_27.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_27.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_27.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
