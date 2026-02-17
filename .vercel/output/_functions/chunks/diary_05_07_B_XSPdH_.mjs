import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Жизнь как служение",
  "when": "07"
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
      children: "На третьем шаге программы я поняла, что любое занятие  в жизни можно воспринимать как служение. Раньше я могла раздражаться от рутинных обязанностей, но теперь я начинаю видеть в них глубокий смысл и ценность."
    }), "\n", createVNode(_components.p, {
      children: "Когда я убираюсь в доме, я не просто перемещаю вещи или вытираю пыль. Я создаю чистое и уютное пространство для себя и своей семьи, что делает наш общий дом более приятным и комфортным местом для жизни. Это моё служение своим близким, способ показать заботу и любовь без слов."
    }), "\n", createVNode(_components.p, {
      children: "На работе я прикладываю свои усилия не только для того, чтобы получить зарплату, но и для того, чтобы внести свой вклад в общество, помочь коллегам, клиентам создать качественный и удобный сервис."
    }), "\n", createVNode(_components.p, {
      children: "Занимаясь приготовлением еды, я не просто соблюдаю технологический процесс, но и вкладываю в каждое блюдо частицу себя, заботу о здоровье и самочувствии тех, кто это будет есть. Кулинария превращается из обязанности в служение моей семье."
    }), "\n", createVNode(_components.p, {
      children: "Такое новое восприятие делает мою жизнь более осмысленной. Каждое действие становится важным, потому что я делаю что-то с намерением служить, а не просто выполнить задачу. Это позволяет мне чувствовать себя нужной и полезной, укрепляя мою связь с миром и людьми вокруг."
    }), "\n", createVNode(_components.p, {
      children: "Только сегодня: Я буду воспринимать свои обязанности как служения и находить радость в повседневных делах."
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

const url = "src/content/diary/diary_05_07.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_07.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_07.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
