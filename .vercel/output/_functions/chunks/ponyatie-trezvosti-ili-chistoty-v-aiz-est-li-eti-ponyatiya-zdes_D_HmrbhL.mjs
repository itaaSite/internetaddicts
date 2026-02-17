import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Понятие «Трезвости» или «Чистоты» в АИЗ: существуют ли эти понятия здесь?",
  "description": "Наше выздоровление заключается в развитии способности использовать интернет эффективно",
  "pubDate": "2023-12-18",
  "img": "../../assets/images/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes/img.jpg",
  "tags": ["Информация"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "понятие-трезвости-или-чистоты-в-аиз-отсутствует-и-вот-почему",
    "text": "Понятие «Трезвости» или «Чистоты» в АИЗ отсутствует, и вот почему:"
  }];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "понятие-трезвости-или-чистоты-в-аиз-отсутствует-и-вот-почему",
      children: "Понятие «Трезвости» или «Чистоты» в АИЗ отсутствует, и вот почему:"
    }), "\n", createVNode(_components.p, {
      children: "Мы, участники Анонимных Интернет Зависимых (АИЗ), не отказываемся полностью от использования интернета и технологий, как это делают, например, алкоголики или наркоманы в своих сообществах. Наша цель в выздоровлении — научиться использовать интернет эффективно, избегая его разрушительного воздействия как на нас, так и на наших близких."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Мы были интернет-зависимыми и не могли управлять своей жизнью."
      }), "\n", createVNode(_components.li, {
        children: "Никакая человеческая сила не смогла бы избавить нас от интернет-зависимости."
      }), "\n", createVNode(_components.li, {
        children: "Только Бог может избавить нас, если мы будем искать Его."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "“Полумеры ничем не помогли нам. Мы подошли к поворотному моменту. Все отринув, мы просили Его о попечении и защите.”"
      })
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

const url = "src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
