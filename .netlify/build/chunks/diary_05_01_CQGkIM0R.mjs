import { a as assetsConfig, c as createGetHeadings, b as createContentComponent, $ as $$Renderer } from './runtime-assets-config_CWDyIPaO.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\"В начале работы по шагам я чувствовал, что мне нужно научиться многому. Потом я работал по шагам, посещал встречи, что-то делал для сообщества. В какой-то момент я заметил, что другие люди в моей жизни отмечают, что я веду себя по-другому. Эти люди замечают, что что-то изменилось во мне. Однако мне самому бывает трудно заметить, что что-то изменилось в образе моего мышления. Мне трудно уловить этот момент, когда моё поведение продиктовано принципами программы, они встраиваются в меня как-то бесшовно. Мне порой кажется, что они всегда были частью меня. Эти мысли приводят меня к идее, что программа помогает мне открывать себя для самого себя. Есть глубокое ощущение, что программа помогает мне стать собой. Учит меня не тому, каким мне быть, а как быть собой.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };
