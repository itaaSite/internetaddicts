import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "От хаоса к осознанности",
  "when": "15"
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
    children: "Я долгое время не могла сосредоточиться ни на одной конкретной задаче или теме. Мои мысли, как будто, “бегали” в разные стороны, не давая мне удержать фокус ни на чём. Я могла начать работать над чем-то важным, но через пару минут ум переключался на что-то другое — новая идея, сообщение в телефоне или очередной сайт. Это состояние постоянного переключения было утомительным и мешало мне выполнять задания, которые требовали концентрации.\nЭто чувство беспокойства внутри, которое проявлялось в неспособности удержать внимание, не давало мне покоя. Жизнь становилась набором дел и фрагментов мыслей, разбросанных в хаотичном порядке. Я была физически занята, но эмоционально чувствовала себя пустой.\nРабота по шагам дала мне возможность преодолеть этот хаос в голове. Программа помогла мне научиться распознавать свои триггеры, моменты, когда я автоматически ухожу в отвлекающие мысли или действия. Шаги научили меня осознанности — способности быть здесь и сейчас, замечать, когда мой ум пытается “убежать”, и возвращать его обратно к тому, что действительно важно.\nРабота по шагам дала мне инструменты для того, чтобы научиться полноценно жить без бегства в интернет. Шаги не просто помогают справляться с интернет-зависимостью — они позволяют выработать новый путь к качественному и осознанному проживанию каждого дня."
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
const url = "src/content/diary/diary_05_15.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_15.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_15.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
