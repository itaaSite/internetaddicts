import { a as assetsConfig, c as createGetHeadings, b as createContentComponent, $ as $$Renderer } from './runtime-assets-config_CWDyIPaO.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":true,\"attributes\":{\"content\":\"Проводятся встречи о традициях по вопроснику.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"hardbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,2],\"inline\":true,\"attributes\":{\"content\":\"Формат: чтение вопроса, ответ на него, высказывания опыта, обратной связи.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":2}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":true,\"attributes\":{\"href\":\"https://t.me/+yeiyGWYaEDU1YzBi\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":true,\"attributes\":{\"content\":\"https://t.me/+yeiyGWYaEDU1YzBi\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"link\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
