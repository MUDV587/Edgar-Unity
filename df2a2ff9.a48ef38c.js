(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(1),i=a(6),o=(a(0),a(216)),r={id:"pipeline-payload",title:"Pipeline payload"},l={id:"version-1.0.3/generator-pipeline/pipeline-payload",title:"Pipeline payload",description:"Pipeline payload is an object that flows through the pipeline. Each pipeline task can modify the payload and all the following tasks in the payload will have access to that modified object.\r",source:"@site/versioned_docs\\version-1.0.3\\generator-pipeline\\pipeline-payload.md",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/generator-pipeline/pipeline-payload",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-1.0.3/generator-pipeline/pipeline-payload.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Generator pipeline",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/generator-pipeline/introduction"},next:{title:"Pipeline tasks",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/generator-pipeline/pipeline-tasks"}},s=[{value:"Basic idea",id:"basic-idea",children:[{value:"Why interfaces?",id:"why-interfaces",children:[]}]},{value:"Extending payloads",id:"extending-payloads",children:[]},{value:"Payload initialization",id:"payload-initialization",children:[]}],p={rightToc:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pipeline payload is an object that flows through the pipeline. Each pipeline task can modify the payload and all the following tasks in the payload will have access to that modified object."),Object(o.b)("h2",{id:"basic-idea"},"Basic idea"),Object(o.b)("p",null,"The basic idea is that we use interfaces to define which data we need to have on the payload. Below you can see the basic payload interface that provides access to the tilemaps of the generated dungeon together with the GameObject that holds them."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"/// <summary>\n/// Basic generator pipeline payload.\n/// </summary>\npublic interface IGeneratorPayload\n{\n    /// <summary>\n    /// Gameobject that holds dungeon tilemaps and possibly other game objects.\n    /// </summary>\n    GameObject GameObject { get; set; }\n\n    /// <summary>\n    /// Tilemaps of the generated dungeon.\n    /// </summary>\n    List<Tilemap> Tilemaps { get; set; }\n}\n")),Object(o.b)("p",null," We can use this interface to directly populate the tilemaps with our dungeon tiles in one task, and then for example add monsters in another task. However, some dungeon generators may provide additional information about the dungeon. For example, the generator used in this plugin generates dungeons consisting of rooms, so we may be interested in where are individual rooms placed. For this purpose, there is the ",Object(o.b)("inlineCode",{parentName:"p"},"IGraphBasedGeneratorPayload")," interface."),Object(o.b)("p",null," Following interfaces are provided in the plugin (you can see them defined ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/master/Assets/ProceduralLevelGenerator/Scripts/GeneratorPipeline/Payloads/Interfaces"}),"here"),"):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IGeneratorPayload")," - provides tilemaps of the dungeon and the GameObject that holds them"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IGraphBasedGeneratorPayload")," - provides access to the input and the output of the dungeon generator algorithm"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"INamedTilemapsPayload")," - provides named tilemaps if you do not want to access them by their indices"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IRandomGeneratorPayload")," - provides access to an instace of the ",Object(o.b)("inlineCode",{parentName:"li"},"Random")," class")),Object(o.b)("h3",{id:"why-interfaces"},"Why interfaces?"),Object(o.b)("p",null,"Why do we need interfaces? Why not just work with a class that has all the data that we need? Well, ",Object(o.b)("strong",{parentName:"p"},"in theory"),", interfaces should give us more flexibility. We can decide to use a slightly different generator and replace only a small part of the payload and use our old pipeline tasks that were not affected by the change."),Object(o.b)("p",null,"Another reason is that with interfaces, I can provide some basic pipeline tasks without forcing you to use an existing payload class. You simply make sure that your payload implements all the needed interfaces and the tasks should ",Object(o.b)("em",{parentName:"p"},"just work"),"."),Object(o.b)("h2",{id:"extending-payloads"},"Extending payloads"),Object(o.b)("p",null,"If you want to extend the payload, you have basically two options. The first option is to inherit from the ",Object(o.b)("inlineCode",{parentName:"p"},"PipelinePayload")," class and add any functionality that you need. This approach is good if you want to just add new functionality and want to keep original functionality intact. The second option is to create your own payload class from scratch without inheriting. "),Object(o.b)("h2",{id:"payload-initialization"},"Payload initialization"),Object(o.b)("p",null,"Before we give the payload to the first task in the pipeline, we need to create its instance. For this purpose, you need to provide an implementation of the abstract ",Object(o.b)("inlineCode",{parentName:"p"},"AbstractPayloadInitializer")," class and assign that instance to the ",Object(o.b)("em",{parentName:"p"},"PayloadInitializer")," field of the dungeon generator pipeline."),Object(o.b)("p",null," This class has only a single method - ",Object(o.b)("inlineCode",{parentName:"p"},"public abstract object InitializePayload();")," - which should return a new instace of the payload. There is a default initializer provided (",Object(o.b)("inlineCode",{parentName:"p"},"PayloadInitializer")," class) that prepares tilemaps and creates an instace of the random number generator."))}c.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,b=d["".concat(r,".").concat(h)]||d[h]||u[h]||o;return a?i.a.createElement(b,l({ref:t},p,{components:a})):i.a.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);