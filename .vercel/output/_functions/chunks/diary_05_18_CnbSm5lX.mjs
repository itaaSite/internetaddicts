import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Семейный отдых",
  "when": "18"
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
      children: "Существует различие между отдыхом и увеселением. Отдых, в полном смысле этого слова, укрепляет и созидает. Отвлекая нас от наших обычных забот и дел, он приносит покой телу и душе и таким образом делает нас способными приступать с новой силой к серьёзному жизненному труду."
    }), "\n", createVNode(_components.p, {
      children: "Увеселение, напротив, — это поиск удовольствий, который зачастую приводит к излишествам; оно поглощает силы, которые требуются для исполнения полезной работы, и таким образом становится препятствием для достижения истинного успеха в жизни."
    }), "\n", createVNode(_components.p, {
      children: "Давайте никогда не будем забывать о том, что Бог является источником радости. Ему не доставляют удовольствия страдания людей, но Он любит видеть их счастливыми. В их зоне досягаемости находится множество источников счастья, и они с безошибочной точностью могут сказать, что эти удовольствия законны и справедливы. Они могут наслаждаться такими развлечениями, которые не развращают ум и не портят душу, которые не разочаруют и не окажут печального влияния, приводящего к потере самоуважения или к осознанию собственной никчёмности. Если они пригласят с собой Высшую Силу и будут поддерживать молитвенный дух, то будут находиться в полной безопасности."
    }), "\n", createVNode(_components.p, {
      children: "Всякое развлечение, в котором вы участвуете, с верой испрашивая на него Божьего благословения, не будет опасным. Но всякое увеселение, которое делает вас неспособными к тайной молитве, является действительно опасным."
    }), "\n", createVNode(_components.p, {
      children: "Мы принадлежим к тому классу людей, которые верят, что мы живём в этом мире не только для того, чтобы развлекаться и угождать себе. Мы находимся здесь для того, чтобы приносить пользу другим и быть благословением для общества. И если мы допустим, чтобы нашими умами овладели низкие мысли, которые владеют многими, ищущими лишь тщетного и безрассудного, то как мы сможем быть полезными нашим ближним? Как мы можем быть благословением для общества, в котором живём? Мы не должны наивно потворствовать всякому развлечению, которое может сделать нас неспособными с большей верностью исполнять свои повседневные обязанности."
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

const url = "src/content/diary/diary_05_18.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_18.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_18.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
