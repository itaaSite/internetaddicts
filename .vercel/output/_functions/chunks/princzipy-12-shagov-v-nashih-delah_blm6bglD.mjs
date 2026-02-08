import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Принципы 12 шагов в наших делах",
  "description": "Все принципы 12 шагов",
  "pubDate": "2024-01-27",
  "img": "../../assets/images/posts/princzipy-12-shagov-v-nashih-delah/img.jpg",
  "tags": ["Информация", "12 шагов"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(_components.p, {
    children: [createVNode(_components.strong, {
      children: "1 шаг"
    }), " — честность, непредубежденность, готовность, смирение, принятие", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "2 шаг"
    }), " — непредубежденность, готовность, вера, доверие, смирение", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "3 шаг"
    }), " — капитуляция, готовность, верность принятому решению, надежда, вера, доверие", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "4 шаг"
    }), " — мужество, доверие, вера, честность, готовность", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "5 шаг"
    }), " — доверие, мужество, честность, верность обязательствам", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "6 шаг"
    }), " — обязательность, готовность, вера, доверие, принятие себя", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "7 шаг"
    }), " — капитуляция, доверие, вера, терпение, смирение", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "8 шаг"
    }), " — честность, мужество, готовность, сострадание", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "9 шаг"
    }), " — смирение, любовь к людям, прощение", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "10 шаг"
    }), " — самодисциплина, честность, прямота и чистосердечие", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "11 шаг"
    }), " — обязательства, смирение, мужество, вера", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
      children: "12 шаг"
    }), " — безусловная любовь, бескорыстие, непоколебимость"]
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
const url = "src/content/posts/princzipy-12-shagov-v-nashih-delah.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
