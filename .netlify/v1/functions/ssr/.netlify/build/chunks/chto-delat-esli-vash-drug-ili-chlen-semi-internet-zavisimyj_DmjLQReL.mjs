import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_CMwCRdqq.mjs';
import { $ as $$Image } from './_astro_assets_p3p0cAkR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Что делать, если ваш друг или член семьи интернет-зависимый?",
  "description": "Мы рады, что вы нашли эту страницу и слышите новость о том, что есть надежда для интернет-пользователей и пользователей технологий. ",
  "pubDate": "2023-10-17",
  "img": "../../assets/images/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj/img.png",
  "tags": ["Информация"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "вы-не-вызвали-эту-зависимость",
    "text": "Вы не вызвали эту зависимость"
  }, {
    "depth": 2,
    "slug": "вы-не-можете-контролировать-эту-зависимость",
    "text": "Вы не можете контролировать эту зависимость"
  }, {
    "depth": 2,
    "slug": "вы-не-можете-вылечить-эту-зависимость",
    "text": "Вы не можете вылечить эту зависимость"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Мы рады, что вы нашли эту страницу. Важно знать: есть надежда для тех, кто сталкивается с зависимостью от интернета и технологий."
    }), "\n", createVNode(_components.p, {
      children: "Если вы близки к интернет-зависимому человеку, вы наверняка уже ощутили трудности и боль, которые сопровождают это состояние. Оно затрагивает не только зависимого, но и тех, кто находится рядом с ним. Зависимость — это серьёзная проблема, наносящая вред всем, кого касается."
    }), "\n", createVNode(_components.p, {
      children: "Первое, что следует понимать: никто не виноват в чьей-либо зависимости от интернета и технологий. Как говорится в сообществе Ал-Анон: «Я не вызвал это, я не могу контролировать это, и я не могу вылечить это»."
    }), "\n", createVNode(_components.h2, {
      id: "вы-не-вызвали-эту-зависимость",
      children: "Вы не вызвали эту зависимость"
    }), "\n", createVNode(_components.p, {
      children: "Многие люди склонны винить себя в проблемах своих близких, особенно когда сталкиваются с зависимостью, поскольку зависимые часто перекладывают вину на других. Возможно, вы проводили время онлайн с этим человеком, купили ему компьютер или смартфон, или поощряли его использование технологий, полагая, что это всего лишь безобидное развлечение. Может быть, вы думаете, что какие-то семейные конфликты подтолкнули вашего близкого к уходу в виртуальный мир. Но важно помнить: никто не несёт ответственности за поведение другого человека или его психологические расстройства."
    }), "\n", createVNode(_components.h2, {
      id: "вы-не-можете-контролировать-эту-зависимость",
      children: "Вы не можете контролировать эту зависимость"
    }), "\n", createVNode(_components.p, {
      children: "Возможно, вы уже пытались поговорить с зависимым человеком, убеждали его, ставили ультиматумы. Вы пытались помочь ему осознать, какой вред он причиняет себе и окружающим. И всё это, возможно, не дало никакого результата. Это может вызывать у вас замешательство: почему человек не понимает очевидного? Почему он не заботится о себе? Это — проявление самой болезни зависимости."
    }), "\n", createVNode(_components.h2, {
      id: "вы-не-можете-вылечить-эту-зависимость",
      children: "Вы не можете вылечить эту зависимость"
    }), "\n", createVNode(_components.p, {
      children: "Нам всем хочется верить, что мы можем помочь своим близким. Мы думаем, что если соберём достаточно информации, найдём правильные слова или действия, или даже изменим своё поведение, мы сможем решить проблему. Но правда такова: не существует быстрого решения для зависимости. Для её преодоления требуется длительное и сложное лечение."
    }), "\n", createVNode(_components.p, {
      children: "И есть только один человек, который может начать этот процесс — сам зависимый от интернета и технологий."
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

const url = "src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов проекты/internet-aiz/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
