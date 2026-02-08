import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "12 Традиций для ИЗ по иллюстрациям примерами и опытом.",
  "desc": "Чтение и обсуждение традиций 12-шагового сообщества",
  "idYB": "https://www.youtube.com/watch?v=bQM97Bk01Dc",
  "pubDate": "2024-02-18"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: ["Таймкоды:\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=0s",
      children: "00:00"
    }), " - начало\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=15s",
      children: "00:15"
    }), " - 1 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=435s",
      children: "07:15"
    }), " - 2 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=1065s",
      children: "17:45"
    }), " - 3 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=1820s",
      children: "30:20"
    }), " - 4 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=2815s",
      children: "46:55"
    }), " - 5 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=4370s",
      children: "1:12:50"
    }), " - 6 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=5051s",
      children: "1:24:11"
    }), " - 7 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=6617s",
      children: "1:50:17"
    }), " - 8 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=9116s",
      children: "2:31:56"
    }), " - 9 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=10773s",
      children: "2:59:33"
    }), " - 10 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=11190s",
      children: "3:06:30"
    }), " - 11 традиция\n", createVNode(_components.a, {
      href: "https://www.youtube.com/watch?v=bQM97Bk01Dc&t=11914s",
      children: "3:18:34"
    }), " - 12 традиция"]
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
const url = "src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
