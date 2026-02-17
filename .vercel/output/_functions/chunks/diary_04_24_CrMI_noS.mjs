import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Цикл зависимости",
  "when": "24"
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
      children: "Моё злоупотребление интернетом было на фоне того, что мне было тяжело жить свою жизнь. Я проводил много времени на видеоконтенте на разных сайтах и платформах."
    }), "\n", createVNode(_components.p, {
      children: "Это работало для меня как анестезия: когда я смотрел видеоконтент, мне становилось приятно, и возникало ощущение облегчения. Я узнавал что-то новое, получал эмоциональный отклик и отвлекался от своих реальных чувств. От тех чувств, которые мне по каким-то причинам было либо невыносимо тяжело проживать, либо страшно с ними соприкасаться, либо у меня был запрет на то, чтобы испытывать такие чувства."
    }), "\n", createVNode(_components.p, {
      children: "Получается, что в моменте, когда я начинал смотреть видео, мне действительно становилось легче. Это можно легко объяснить на примере употребления алкоголя."
    }), "\n", createVNode(_components.p, {
      children: "Например, у меня проблемы на работе или трудности в отношениях с семьёй. Я встречаюсь с друзьями, чтобы пропустить по паре стаканчиков. Когда я выпиваю, мне в моменте действительно становится легче, приходят приятные эмоции, и проблемы перестают беспокоить. То есть, выпивая алкоголь, я получаю временное облегчение. Но когда я трезвею, я возвращаюсь к реальной жизни, в которой все трудности и неприятные эмоции никуда не делись. Более того, к ним добавляются новые: я потратил деньги и время, моё самочувствие ухудшилось, и, возможно, я сделал что-то, о чём жалею, или моя семья стала ещё более недовольна. Таким образом, ком проблем только вырос, и те ощущения, которые подталкивали меня к тому, чтобы выпить, стали ещё сильнее."
    }), "\n", createVNode(_components.p, {
      children: "При этом я помню, что в моменте мне действительно стало легче, и это подталкивает меня выпить ещё раз. Так формируется цикл, в котором развивается зависимость. С интернетом происходит то же самое."
    }), "\n", createVNode(_components.p, {
      children: "Когда я пытаюсь усилием воли не употреблять, все те эмоции и психологические состояния, от которых я убегал в интернет, никуда не исчезают. Они продолжают создавать фон, от которого я устаю, и в какой-то момент он нарастает до такой степени, что я снова начинаю употреблять."
    }), "\n", createVNode(_components.p, {
      children: "Так было до того, как я начал идти по шагам и использовать инструменты программы для работы с моими эмоциональными состояниями, страхами и беспокойством. Программа помогает мне развязывать такие психологические узлы и обретать спокойствие. Когда приходит внутренний покой, потребность в интернете исчезает."
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

const url = "src/content/diary/diary_04_24.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_24.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_04_24.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
