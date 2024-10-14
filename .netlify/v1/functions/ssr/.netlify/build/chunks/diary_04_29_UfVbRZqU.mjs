import { a as assetsConfig, c as createGetHeadings, b as createContentComponent, $ as $$Renderer } from './runtime-assets-config_CWDyIPaO.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\"Потребляя контент, через некоторое время мы замечаем, что нас перестаёт удовлетворять прежний поток информации, и мы начинаем хотеть всё больше и больше. Вместе с просмотром сериала мы начинаем читать газету или искать в телефоне новости, начинаем смотреть по два фильма одновременно или делаем ещё что-нибудь в этом роде. Нам требуется всё больше и больше информации, чтобы отвлечься от реальности и не замечать своей настоящей жизни. Малые дозы нас уже не берут. Этот эффект свойственен любой зависимости - постепенное увеличение дозы. Предела этому не будет, если мы пойдём по этому пути, мы будем увеличивать поток информации до тех пор, пока не сойдём с ума. Наш выход - осознать свою зависимость, честно признаться в ней перед самим собой и начать избавляться от неё с помощью программы 12 шагов.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
