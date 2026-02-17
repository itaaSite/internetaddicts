import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Даниил",
  "description": "Моя история начинается с момента, когда я маленьким мальчиком смотрел по телевизору мультфильмы и детские передачи, я очень любил проводить свое свободное время у экрана.",
  "old": "в АИЗ с декабря 2021 года. (Запись создана Окт. 10, 2023)"
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
      children: "Привет!"
    }), "\n", createVNode(_components.p, {
      children: "Меня зовут Даниил, и я в АИЗ с декабря 2021 года."
    }), "\n", createVNode(_components.p, {
      children: "Моя история начинается с того момента, когда я маленьким мальчиком смотрел по телевизору мультфильмы и детские передачи. Я очень любил проводить свое свободное время у экрана. Потом появилась игровая приставка, и я стал все меньше выходить гулять на улицу. Помимо приставки, в школьное время после уроков я приходил домой и постоянно проводил время у телевизора. Потом появился компьютер, и я тратил почти все свои карманные деньги на карточки для подключения к интернету."
    }), "\n", createVNode(_components.p, {
      children: "Во времена моей учебы в институте (когда скорость интернета выросла и он стал более доступен) я переехал от родителей, и у меня стало больше свободного времени, чтобы проводить у компьютера. К тому времени, когда я устроился на работу, появились смартфоны, и я, недолго думая, купил смартфон и почти не вылезал из приложений даже на работе. Помимо интернета, я также играл в компьютерные игры. Теперь, находясь в сообществе, я понимаю, что так пытался справиться со своими чувствами и с жизнью в целом."
    }), "\n", createVNode(_components.p, {
      children: "Шло время, и ничего не менялось. Периодами я сидел в интернете ночами, а спал днем. Через некоторое время я увидел, что время моей жизни утекает как сквозь пальцы. Я чувствовал себя выжатым, как лимон, после многочасовых марафонов в интернете. Я не хотел ни работать, ни общаться с людьми, ни жить. Я понял, что у меня большие проблемы, но сам не мог прекратить компульсивное использование интернета и гаджетов."
    }), "\n", createVNode(_components.p, {
      children: "В сообществе 12 шагов я узнал о АИЗ, нашел сайт и подключился к онлайн-собранию. Мне очень откликнулось то, что говорили участники, и я стал работать по программе. Сейчас я благодарен Высшей Силе за то, что больше не сижу в интернете ночами, мне больше не нужно бежать от реальности, как только я испытываю неприятные чувства. Я понял, что мне не нужно бороться со своей зависимостью, наоборот, нужно прекратить попытки самому остановить свое нездоровое поведение и просто работать по программе, пользуясь инструментами выздоровления."
    }), "\n", createVNode(_components.p, {
      children: "Я рад, что в программе, рад, что есть возможность выздоравливать и менять свою жизнь к лучшему!"
    }), "\n", createVNode(_components.p, {
      children: "До встречи на группах!"
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

const url = "src/content/story/daniil.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/story/daniil.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/story/daniil.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
