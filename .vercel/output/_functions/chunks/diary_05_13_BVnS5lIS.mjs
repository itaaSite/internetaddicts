import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Новые опоры на духовные принципы",
  "when": "13"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: "Выздоровление требует пересмотра всех убеждений, которые у нас были до этого момента. Ведь всё, что я знала о себе, о жизни, о людях и о мире, привело меня к зависимости. Мои прежние убеждения и способы восприятия жизни привели к тому, что я не хотела просыпаться по утрам, не чувствовала в себе сил, жила как будто во сне. Я поняла, что все эти внутренние опоры, на которых я привыкла жить, на самом деле вели меня в тупик и усугубляли мою проблему. Чтобы начать процесс выздоровления, мне нужно было подвергнуть сомнению абсолютно всё.\nМне пришлось задуматься, помогали ли мне мои прежние принципы и убеждения, к чему они меня привели, и начать осваивать новые — духовные принципы программы, чтобы выстроить свою жизнь на основе этих новых убеждений. Это был непростой процесс. Лично для меня он оказался болезненным. Я чувствовала, как будто выбила у себя все внутренние опоры, которые поддерживали моё существование, пусть даже шаткое. Я приходила на группы, говорила об этом, делилась с малой группой и со спонсором, честно признавалась, что чувствую себя так, как будто всё, на что я опиралась, рухнуло. Но со временем я начала понимать, что духовные принципы действительно работают. Постепенно я стала замечать, что, живя по-новому, мне становится легче и приятнее. Я ощутила, как уходят старые страхи и сомнения, и на их месте появляются новые смыслы и радости.\nПроцесс выздоровления — это не мгновенное изменение, а постепенная трансформация. И хотя поначалу это может казаться разрушением всех привычных ориентиров, со временем приходит понимание, что новые духовные принципы дают гораздо более прочные опоры для жизни."
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
const url = "src/content/diary/diary_05_13.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_13.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_13.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
