import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CMwCRdqq.mjs';
import { $ as $$Image } from './_astro_assets_p3p0cAkR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Служение - это выражение нашей благодарности Содружеству",
  "description": "Служение на группе помогает нам укреплять фундамент нашего выздоровления!",
  "pubDate": "2024-01-27",
  "img": "../../assets/images/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu/img.jpg",
  "tags": ["Информация", "Для групп"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "«Каждый может быть полезным»."
      })
    }), "\n", createVNode(_components.p, {
      children: "Служение на группе помогает нам укрепить фундамент нашего выздоровления. Ведь мы, возможно, впервые в жизни, делаем что-то для других людей бескорыстно, не ожидая ничего взамен."
    }), "\n", createVNode(_components.p, {
      children: "Служение на группе также является дополнительным мотивом для регулярного посещения собраний. А наш опыт показывает, что те, кто продолжают регулярно посещать собрания, остаются счастливыми и полезными."
    }), "\n", createVNode(_components.p, {
      children: "Служение — это выражение нашей благодарности Содружеству."
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

const url = "src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
