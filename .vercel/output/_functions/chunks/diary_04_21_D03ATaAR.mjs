import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Найди любовь в себе",
  "when": "21"
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
      children: "Любите себя сами, пожалуйста, никто за вас это не сделает. Если я найду любовь в себе, то и найду у другого."
    }), "\n", createVNode(_components.p, {
      children: "Когда-то, бесконечно залипая в просмотрах видео, где мне рекомендовали и давали советы о том, как любить себя, я думала, что если я научусь любить себя, то мои проблемы автоматически решатся. Вселенная полюбит меня. “Любовь к себе” стала уловкой моего эгоизма, спасительной фразой для того, чтобы продолжить погружение в интернет. Я оправдывала себя тем, что я просто хочу научиться любить себя, поэтому бесконечно смотрю видео. В программе я открыла в себе любовь. Я поняла, насколько безумны были мои поиски найти любовь не в себе, а в других людях. Простые действия программы (с 1 по 12 шаг) помогают мне находить любовь в себе и видеть, замечать любовь в других людях каждый день."
    }), "\n", createVNode(_components.p, {
      children: "“Вера без действий - мертва”"
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

const url = "src/content/diary/diary_04_21.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_21.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_21.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
