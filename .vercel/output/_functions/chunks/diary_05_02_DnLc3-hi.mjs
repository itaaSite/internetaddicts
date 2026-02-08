import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BrIEQ3l_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Доверие вместо скепсиса",
  "when": "02"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Проведя большую часть своей жизни в наблюдении за иллюзорными событиями и персонажами на экране гаджетов в соцсетях и на ТВ, я перестала доверять людям. В каждом контакте я вижу подвох, корысть, обман.", createVNode(_components.br, {}), "\nТот хочет впарить мне продукт по саморазвитию, а сам наживается на моих деньгах. Эта создаёт картинку красивой семьи, а сама терпит нелюбимого и жестокого мужа. Это реалити-шоу манипулирует участниками, чтобы поднять рейтинг и продать рекламу подороже.", createVNode(_components.br, {}), "\nПродакт-плейсмент в фильмах и выклянчивание подписок и донатов за видеоконтент."]
    }), "\n", createVNode(_components.p, {
      children: "Моя вселенная была создана из обмана и корысти, направленных будто непосредственно на меня; я являлась главным объектом и жертвой этих манипуляций."
    }), "\n", createVNode(_components.p, {
      children: ["Придя в программу выздоровления от интернет-зависимости, я стала больше обращать внимание на моё взаимодействие с другими людьми.", createVNode(_components.br, {}), "\nКассир в магазине не хочет взять с меня больше, чем нужно. Врач в поликлинике не хочет убить меня или, по крайней мере, впарить ненужное лекарство. Водители на дороге не пытаются усложнить именно моё вождение. И хотя обратное иногда случается, всё же по большей части каждый из людей думает о себе, также как и я, и не пытается конкретно мне сделать плохо. Я перестала в каждом встречном видеть врага или потенциального обидчика, когда мой фокус сместился с иллюзий на реальный мир, с поиска корысти в других на моё взаимодействие с миром здесь и сейчас."]
    }), "\n", createVNode(_components.p, {
      children: ["Когда я стала разделять ответственность: другие люди отвечают за свои действия, я — за свои, и каждый «подметает свою сторону улицы», моё недоверие и раздражение стали утихать.", createVNode(_components.br, {}), "\nНо самое главное, я перестала испытывать скепсис — ядовитое чувство сомнения — в отношении моих близких и самой себя. Честность и бескорыстность Высшей Силы и группы по отношению ко мне стали для меня доказательством, что по этим принципам жить можно. И это гораздо приятнее и проще. Мне не нужно больше тратить силы на поиск «второго слоя правды», на распознание «реальных мотивов» и того, как всё обстоит «на самом деле». Теперь я ответственна только за себя и в моих силах быть честной, не обманывать и не искать корысти.", createVNode(_components.br, {}), "\nТолько сегодня: Я буду доверять миру и той реальности, которую люди мне предъявляют. Я не буду искать второе дно в событиях и встречах сегодняшнего дня, и постараюсь сама быть честной с собой и другими."]
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

const url = "src/content/diary/diary_05_02.mdx";
const file = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_02.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/samgold/Desktop/Проекты/12 шагов - сайты/internet-aiz/src/content/diary/diary_05_02.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
