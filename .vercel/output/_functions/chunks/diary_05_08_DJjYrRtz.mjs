import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "От борьбы с реальностью к внутреннему покою",
  "when": "08"
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
      children: "С каждым днем, проведенным в размышлениях и самоанализе, я все больше осознаю, что мои раздражение и недовольство миром исходят из моих внутренних требований. Я ждала от мира, что он будет соответствовать моим представлениям, и не принимала его таким, какой он есть. Эта борьба с реальностью только усиливала мое недовольство, потому что не может все изменится под мои желания."
    }), "\n", createVNode(_components.p, {
      children: "В программа моя внутренняя призма восприятия, через которую я смотрю на жизнь, начинает меняться. Я учусь видеть не справедливость или несправедливость событий, а просто принимать их как данность, которая не требует моего немедленного вмешательства или оценки. Это не о том, чтобы смириться с неприемлемым или перестать стремиться к лучшему, но о том, чтобы не дать своим предубеждениям мешать видеть мир во всем его многообразии."
    }), "\n", createVNode(_components.p, {
      children: "Изменение внутренних установок – это не быстрый процесс. Это требует от меня постоянной работы над собой, много терпения и готовности столкнуться с собственными глубоко укоренившимися взглядами и убеждениями. Я учусь задавать себе вопросы: “Почему это меня так беспокоит? Что на самом деле стоит за моим недовольством?”"
    }), "\n", createVNode(_components.p, {
      children: "Этот путь помогает мне осознать, что мир вокруг – это нечто большее, чем просто сцена для моих личных проекций и шаблонов. Он полон разнообразия, несоответствий и противоречий, которые являются не беспорядком, а естественным порядком вещей."
    }), "\n", createVNode(_components.p, {
      children: "Только сегодня: Я буду принимать мир таким, какой он есть, я обрету внутреннее спокойствие и научусь находить гармонию вне зависимости от внешних обстоятельств."
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

const url = "src/content/diary/diary_05_08.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_08.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_08.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
