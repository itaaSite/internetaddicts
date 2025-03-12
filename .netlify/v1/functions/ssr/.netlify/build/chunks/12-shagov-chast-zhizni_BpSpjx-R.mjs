import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CMwCRdqq.mjs';
import { $ as $$Image } from './_astro_assets_p3p0cAkR.mjs';
import 'clsx';

const frontmatter = {
  "title": "12 шагов — часть жизни",
  "description": "Изложенные принципы являются руководством на пути прогресса.",
  "pubDate": "2023-12-17",
  "img": "../../assets/images/posts/12-shagov-chast-zhizni/img.jpg",
  "tags": ["12 шагов"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Многие из нас восклицали: “Что за режим! Я не смогу следовать ему до конца.”"
    }), "\n", createVNode(_components.p, {
      children: "Не отчаивайтесь."
    }), "\n", createVNode(_components.p, {
      children: "Никто из нас не смог совершенно безупречно придерживаться этих принципов."
    }), "\n", createVNode(_components.p, {
      children: "Мы не святые."
    }), "\n", createVNode(_components.p, {
      children: "Главное в том, что мы стремимся духовно развиваться. Изложенные принципы являются руководством на пути прогресса."
    }), "\n", createVNode(_components.p, {
      children: "Мы притязаем лишь на духовный рост, а не на духовное совершенство."
    }), "\n", createVNode(_components.p, {
      children: "«Каждый день, где-нибудь на земле начинается чьё-то выздоровление, когда один интернет-зависимый ведёт разговор с другим интернет-зависимым, делясь опытом.»"
    }), "\n", createVNode(_components.p, {
      children: "Если кто-либо, где-либо будет просить о помощи, АИЗ всегда будет рядом, и я отвечаю за это!.."
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

const url = "src/content/posts/12-shagov-chast-zhizni.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/12-shagov-chast-zhizni.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/12-shagov-chast-zhizni.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
