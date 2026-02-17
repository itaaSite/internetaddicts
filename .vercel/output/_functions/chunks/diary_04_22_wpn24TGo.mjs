import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Поддержка через честность и понимание",
  "when": "22"
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
      children: "Из своего опыта я заметил, когда я делюсь своим опытом выздоровления и моими изменениями в жизни без ожиданий, что человек обязательно должен присоединиться к сообществу, и без попытки указать другому человеку, как неправильно он живет свою жизнь, это то, что вызывает у человека желание меняться и готовность попробовать программу для себя."
    }), "\n", createVNode(_components.p, {
      children: "Если я вижу в другом человеке сходство с собой в плане употребления, я стараюсь делиться тем, как я употреблял, в каком состоянии я пришел в сообщество, какое эмоциональное состояние было у меня и что произошло со всем этим благодаря применению принципов программы."
    }), "\n", createVNode(_components.p, {
      children: "Я стараюсь быть честным с другими, экологичным, но честным. Если меня раздражает поведение человека, я стараюсь понять, что именно. Если я понимаю свои чувства, например, мне становится неинтересно, скучно, и разговор перестает наполнять меня, если человек переходит на описание контента, который он употребляет. Например, человек рассказывает мне содержание каких-то роликов или книг, и мне это не интересно. Я либо спрашиваю его, зачем он мне это рассказывает, либо делюсь с ним своим отношением к этому. Например, говорю, мне не интересно слушать содержание книг или видео, и предлагаю сменить тему, спросив его, как он живет, что интересного у него происходит, или предлагаю прекратить разговор, если нет других тем для обсуждения. Если выяснится, что человеку нужна моя помощь, и он готов обратиться за ней, я с удовольствием помогу всем, чем могу."
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

const url = "src/content/diary/diary_04_22.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_22.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_22.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
