import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Северное сияние",
  "when": "31"
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
      children: "Я был обеспокоен, даже встревожен. Мы с другом находились на парковке, когда заметили, что в горах над нами начался сильный пожар. Оранжево-красное свечение вдалеке постепенно становилось всё больше и больше. Но, присмотревшись, мы поняли, что горы вовсе не горят. Перед нами было северное сияние."
    }), "\n", createVNode(_components.p, {
      children: "Полярные сияния образуются при столкновении электрически заряженных частиц Солнца с газообразными частицами в земной атмосфере."
    }), "\n", createVNode(_components.p, {
      children: "Я предложил жене поехать за город, чтобы получше рассмотреть это удивительное явление. Мы не были разочарованы. Въехав в долину, мы вышли из машины и с благоговением наблюдали, как всполохи красного и зелёного света прокладывают себе путь через долину и проносятся мимо нас, направляясь в другое место. Мы впервые увидели северное сияние и никогда не забудем тот вечер."
    }), "\n", createVNode(_components.p, {
      children: "Говорят, что природа — это “книга” Бога. Хотя северное сияние имеет вполне обоснованное научное объяснение, его происхождение выходит за рамки науки. Северное сияние говорит нам о том, что Бог — это Бог красоты, феноменального творчества и что Он любит удивлять нас свидетельствами Своей силы и величия. Несмотря на то что существующее зло омрачило творение и мы потеряли возможность видеть Самого Творца, повсюду в окружающем нас мире можно найти свидетельства существования любящего Бога, Который любит удивлять Своих детей. Пусть чудеса творения укажут нам на чудесного Творца."
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

const url = "src/content/diary/diary_05_31.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_31.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_31.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
