import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Разжигание огня",
  "when": "16"
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
      children: "Вода в доме, где я вырос, нагревалась от огня, который горел в топке на нашей кухне. Каждый день, летом или зимой, мы поддерживали огонь дровами или углём, обеспечивая горячей водой нашу семью. Если мы не разжигали огонь, горячей воды не было. Нам приходилось постоянно следить за тем, чтобы всегда под рукой была бумага, хворост и уголь. Разжечь огонь и поддерживать его, чтобы в доме была горячая вода, — это было частью нашей повседневной жизни. Так происходило каждый день. Без поддержания огня вода была бы холодной."
    }), "\n", createVNode(_components.p, {
      children: "Так и в отношениях с Богом. Огонь веры нужно разжигать каждый день. Если этого не делать, то пройдёт совсем немного времени, и горячая вера остынет."
    }), "\n", createVNode(_components.p, {
      children: "У одного христианского писателя есть такие слова: «Посвящайте себя Богу каждое утро. Пусть это будет вашим первым делом. Молитесь так: „Возьми меня, Господи, я всецело принадлежу Тебе. Я кладу все свои планы к Твоим ногам. Используй меня сегодня в Твоём служении. Пребудь со мной, чтобы все мои труды в Тебе совершались“. Это необходимо делать каждый день»."
    }), "\n", createVNode(_components.p, {
      children: "Каждый день мы получаем преимущество приглашать Бога в нашу жизнь. Наша молитва должна быть молитвой, полной смирения: «Возьми меня, я всецело принадлежу Тебе. Я кладу все свои планы к Твоим ногам. Используй меня сегодня так, как считаешь нужным. Живи во мне, и пусть мои действия направляет Твой Дух». Это и есть жизнь веры — полное подчинение Богу, подчинение нашей воли Его воле, чтобы она исполнялась в нашей повседневной жизни. Человек, поступающий так, будет обладать верой, которая никогда не остынет."
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

const url = "src/content/diary/diary_05_16.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_16.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_16.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
