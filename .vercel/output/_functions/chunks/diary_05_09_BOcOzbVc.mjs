import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "От ожиданий к свободе",
  "when": "09"
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
      children: "Сегодня я вспомнила о знакомой с детства фразе: «Поступай с другими так, как хочешь, чтобы поступали с тобой». Я всегда воспринимала это утверждение как своеобразную гарантию того, что если я буду хорошо вести себя с другими, то и со мной люди будут хорошо обращаться. Но ведь тут ничего не сказано про то, как будут поступать другие! А я чувствовала обиду и возмущение, если на мое доброе отношение окружающие не отвечали тем же."
    }), "\n", createVNode(_components.p, {
      children: "Через какое-то время это привело меня к мысли, что если люди не отвечают мне тем же самым, то и мне не стоит прилагать усилия. Я начала думать, что этот принцип не работает, что мир слишком жесток и несправедлив. И такое отношение только усиливало моё недовольство и чувство изоляции."
    }), "\n", createVNode(_components.p, {
      children: "В процессе прохождения программы я пришла к новому пониманию этой мудрости. Я осознала, что эта фраза не о том, чтобы создать условия контракта для обмена добротой, и нет тут никакой сделки, а мой выбор как поступать должен быть основан не на ожиданиях взаимности, а на моих собственных убеждениях о том, как стоит жить."
    }), "\n", createVNode(_components.p, {
      children: "Я стала понимать, что истинная доброта бескорыстна. Не следует ждать ничего в ответ, важно лишь отдавать и делать это искренне, не требуя подтверждения или вознаграждения. Это освобождает меня от тяжести ожиданий и позволяет по-настоящему ценить моменты искренности и доброты, как свои, так и чужие."
    }), "\n", createVNode(_components.p, {
      children: "Возвращение к этому простому, но глубокому принципу приносит мне большое умиротворение и спокойствие. Я понимаю, что не могу контролировать действия других, но могу быть верной своим принципам и поступать так, Бог хотел бы, чтобы я поступала."
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

const url = "src/content/diary/diary_05_09.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_09.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_09.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
