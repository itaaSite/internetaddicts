import { a as assetsConfig, c as createGetHeadings, b as createContentComponent, $ as $$Renderer } from './runtime-assets-config_CWDyIPaO.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[0,1],\"inline\":true,\"attributes\":{\"content\":\"Многие спрашивают: «Как предоставить Богу управлять моей жизнью?» Вы желаете это сделать, но не имеете в себе нравственной силы, порабощены сомнениями и находитесь во власти злых привычек. Ваши обещания и решения рушатся, как карточный домик. Вы не можете управлять своими мыслями, побуждениями, увлечениями. Невыполнимые обещания и обязательства заставляют вас усомниться в собственной искренности. Вам кажется, что Бог не может вас принять, но не стоит отчаиваться. Нужно понять, что такое настоящая сила воли. В природе человека это управляющая сила, которая проявляет себя при принятии решений. Все зависит от правильного действия воли. Бог дал человеку способность делать выбор. И этой способностью надо пользоваться. Вы не можете изменить свое сердце, не можете своими силами посвятить Богу самые глубокие чувства, но вы можете сделать выбор служить Ему. Вы в силах отдать Ему свою волю, а Бог для исполнения Своего благого намерения даст вам и желание, и силу действовать.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":0},\"end\":{\"line\":1}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
