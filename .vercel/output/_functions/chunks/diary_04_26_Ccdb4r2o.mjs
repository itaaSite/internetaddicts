import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Искренность в общении",
  "when": "26"
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
      children: "У меня в отношениях работают две вещи: искренне слушать и искренне делиться. Вот как на собраниях в программе: если слушаю, то не перебиваю, жду, когда выскажет всё, что хочет, а когда говорю, стараюсь говорить всё, как есть для меня. Раньше пытался угодничать, например, чувствую, что устал, а ребёнку-подростку от меня внимание нужно. Раньше я продолжал разговор, и в итоге недовольство проявлялось в отношениях, и ребёнок чувствовал, хоть я своё недовольство и сдерживал. Сейчас я говорю, что мне сейчас нужно побыть одному, и мы можем перенести разговор. На удивление, ребёнок очень хорошо реагирует на это и благодарит за честность, а раньше я думал, что это может обидеть."
    }), "\n", createVNode(_components.p, {
      children: "После того как я начал работать со своей зависимостью по программе, я стал делиться тем, что для меня круто работает. Отношения стали улучшаться, и мне говорили, что трудно поверить в то, что можно разговаривать со мной, а я ни разу не смотрю в телефон за всё то время, когда мы общаемся."
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

const url = "src/content/diary/diary_04_26.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_26.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_26.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
