(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{215:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(2),i=r(6),a=(r(0),r(242)),o=r(246),l={title:"(PRO) Isometric 1"},c={unversionedId:"examples/isometric-1",id:"examples/isometric-1",isDocsHomePage:!1,title:"(PRO) Isometric 1",description:"In this tutorial, we will use this tileset by @KenneyNL to create very basic isometric levels. Be sure to check their work out if you like the tileset.",source:"@site/docs\\examples\\isometric-1.md",permalink:"/Edgar-Unity/docs/next/examples/isometric-1",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/examples/isometric-1.md",version:"next",sidebar:"docs",previous:{title:"(PRO) Platformer 1",permalink:"/Edgar-Unity/docs/next/examples/platformer-1"},next:{title:"(PRO) Enter the Gungeon",permalink:"/Edgar-Unity/docs/next/examples/enter-the-gungeon"}},s=[{value:"Scope",id:"scope",children:[]},{value:"Tilemap layers",id:"tilemap-layers",children:[]},{value:"Room templates",id:"room-templates",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}],p={rightToc:s};function m(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial, we will use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.kenney.nl/assets/isometric-prototype-tiles"}),"this tileset")," by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/KenneyNL"}),"@KenneyNL")," to create very basic isometric levels. Be sure to check their work out if you like the tileset. "),Object(a.b)(o.c,{src:"img/v2/examples/isometric1/result1.png",caption:"Example result",mdxType:"Image"}),Object(a.b)("h2",{id:"scope"},"Scope"),Object(a.b)("p",null,"This example is only a very simple showcase of generating isometric levels."),Object(a.b)("p",null,"It ",Object(a.b)("strong",{parentName:"p"},"includes"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Basic isometric room templates"),Object(a.b)("li",{parentName:"ul"},"Custom tilemap layers structure"),Object(a.b)("li",{parentName:"ul"},"Custom room template initializer")),Object(a.b)("p",null,"It ",Object(a.b)("strong",{parentName:"p"},"does not include"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Any characters to move around with"),Object(a.b)("li",{parentName:"ul"},"Colliders")),Object(a.b)("h2",{id:"tilemap-layers"},"Tilemap layers"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"Grid")," is set to ",Object(a.b)("em",{parentName:"p"},"Isometric")," and we use the following structure of tilemaps:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Level 0 - Floor"),Object(a.b)("li",{parentName:"ul"},"Level 0 - Walls"),Object(a.b)("li",{parentName:"ul"},"Level 0.5 - Floor"),Object(a.b)("li",{parentName:"ul"},"Level 0.5 - Walls"),Object(a.b)("li",{parentName:"ul"},"Level 1 - Floor"),Object(a.b)("li",{parentName:"ul"},"Level 1 - Walls"),Object(a.b)("li",{parentName:"ul"},"Colliders")),Object(a.b)("p",null,"For each elevation level we have 2 tilemap layers - one for floor tile and one for wall (and decoration) tiles. Between the levels 0 and 1 there is a half-level because stairs in the tileset are halfway between 0 and 1. And there is also one additional layer for colliders which is not used in this example but can be utilized to place collider tiles."),Object(a.b)("p",null,"Room template prefabs can be created via ",Object(a.b)("em",{parentName:"p"},"Create -> Edgarr -> Examples -> Isometric 1 -> Room template"),"."),Object(a.b)("h2",{id:"room-templates"},"Room templates"),Object(a.b)("p",null,"Below you can see some of the basic room templates:"),Object(a.b)(o.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(o.b,{src:"img/v2/examples/isometric1/room1.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(a.b)(o.b,{src:"img/v2/examples/isometric1/room2.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(a.b)(o.b,{src:"img/v2/examples/isometric1/room3.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(a.b)(o.b,{src:"img/v2/examples/isometric1/room5.png",caption:"Basic room",mdxType:"GalleryImage"})),Object(a.b)("h2",{id:"corridors"},"Corridors"),Object(a.b)("p",null,"Below you can see some of the corridors: (there are also longer versions)"),Object(a.b)(o.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(o.b,{src:"img/v2/examples/isometric1/corridor1short.png",caption:"Short corridor",mdxType:"GalleryImage"}),Object(a.b)(o.b,{src:"img/v2/examples/isometric1/corridor2short.png",caption:"Short corridor",mdxType:"GalleryImage"})),Object(a.b)("h2",{id:"level-graph"},"Level graph"),Object(a.b)(o.c,{src:"img/v2/examples/isometric1/level_graph.png",caption:"Level graph",mdxType:"Image"}),Object(a.b)("h2",{id:"results"},"Results"),Object(a.b)(o.c,{src:"img/v2/examples/isometric1/result2.png",caption:"Example result",mdxType:"Image"}),Object(a.b)(o.c,{src:"img/v2/examples/isometric1/result3.png",caption:"Example result",mdxType:"Image"}))}m.isMDXComponent=!0},242:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||a;return r?i.a.createElement(d,l(l({ref:t},s),{},{components:r})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},243:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r(245),i=r(244);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(n)return t+r;const o=!r.startsWith(t)?t+r.replace(/^\//,""):r;return a?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},244:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},245:function(e,t,r){"use strict";var n=r(0),i=r(20);t.a=function(){const e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},246:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return m}));var n=r(2),i=r(0),a=r.n(i),o=r(243);const l=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>a.a.createElement(l,{cols:e.cols},a.a.createElement("a",{href:Object(o.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(o.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(p,null,e.caption)),p=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...i}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(n.a)({src:Object(o.a)(e.src)},i)),void 0!==e.caption&&a.a.createElement(p,null,e.caption))}}}]);