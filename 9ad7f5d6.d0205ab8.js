(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{239:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),i=(r(0),r(369)),l=r(372),o={title:"(PRO) Isometric 1"},c={unversionedId:"examples/isometric-1",id:"version-2.0.0-alpha.8/examples/isometric-1",isDocsHomePage:!1,title:"(PRO) Isometric 1",description:"In this tutorial, we will use this tileset by @KenneyNL to create very basic isometric levels. Be sure to check their work out if you like the tileset.",source:"@site/versioned_docs\\version-2.0.0-alpha.8\\examples\\isometric-1.md",slug:"/examples/isometric-1",permalink:"/Edgar-Unity/docs/2.0.0-alpha.8/examples/isometric-1",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.8/examples/isometric-1.md",version:"2.0.0-alpha.8",sidebar:"version-2.0.0-alpha.8/docs",previous:{title:"(PRO) Platformer 1",permalink:"/Edgar-Unity/docs/2.0.0-alpha.8/examples/platformer-1"},next:{title:"(PRO) Enter the Gungeon",permalink:"/Edgar-Unity/docs/2.0.0-alpha.8/examples/enter-the-gungeon"}},s=[{value:"Scope",id:"scope",children:[]},{value:"Tilemap layers",id:"tilemap-layers",children:[]},{value:"Room templates",id:"room-templates",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}],p={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this tutorial, we will use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.kenney.nl/assets/isometric-prototype-tiles"}),"this tileset")," by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/KenneyNL"}),"@KenneyNL")," to create very basic isometric levels. Be sure to check their work out if you like the tileset. "),Object(i.b)(l.c,{src:"img/v2/examples/isometric1/result1.png",caption:"Example result",mdxType:"Image"}),Object(i.b)("h2",{id:"scope"},"Scope"),Object(i.b)("p",null,"This example is only a very simple showcase of generating isometric levels."),Object(i.b)("p",null,"It ",Object(i.b)("strong",{parentName:"p"},"includes"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Basic isometric room templates"),Object(i.b)("li",{parentName:"ul"},"Custom tilemap layers structure"),Object(i.b)("li",{parentName:"ul"},"Custom room template initializer")),Object(i.b)("p",null,"It ",Object(i.b)("strong",{parentName:"p"},"does not include"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Any characters to move around with"),Object(i.b)("li",{parentName:"ul"},"Colliders")),Object(i.b)("h2",{id:"tilemap-layers"},"Tilemap layers"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"Grid")," is set to ",Object(i.b)("em",{parentName:"p"},"Isometric")," and we use the following structure of tilemaps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Level 0 - Floor"),Object(i.b)("li",{parentName:"ul"},"Level 0 - Walls"),Object(i.b)("li",{parentName:"ul"},"Level 0.5 - Floor"),Object(i.b)("li",{parentName:"ul"},"Level 0.5 - Walls"),Object(i.b)("li",{parentName:"ul"},"Level 1 - Floor"),Object(i.b)("li",{parentName:"ul"},"Level 1 - Walls"),Object(i.b)("li",{parentName:"ul"},"Colliders")),Object(i.b)("p",null,"For each elevation level we have 2 tilemap layers - one for floor tile and one for wall (and decoration) tiles. Between the levels 0 and 1 there is a half-level because stairs in the tileset are halfway between 0 and 1. And there is also one additional layer for colliders which is not used in this example but can be utilized to place collider tiles."),Object(i.b)("p",null,"Room template prefabs can be created via ",Object(i.b)("em",{parentName:"p"},"Create -> Edgar -> Examples -> Isometric 1 -> Room template"),"."),Object(i.b)("h2",{id:"room-templates"},"Room templates"),Object(i.b)("p",null,"Below you can see some of the basic room templates:"),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/v2/examples/isometric1/room1.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/v2/examples/isometric1/room2.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/v2/examples/isometric1/room3.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/v2/examples/isometric1/room5.png",caption:"Basic room",mdxType:"GalleryImage"})),Object(i.b)("h2",{id:"corridors"},"Corridors"),Object(i.b)("p",null,"Below you can see some of the corridors: (there are also longer versions)"),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/v2/examples/isometric1/corridor1short.png",caption:"Short corridor",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/v2/examples/isometric1/corridor2short.png",caption:"Short corridor",mdxType:"GalleryImage"})),Object(i.b)("h2",{id:"level-graph"},"Level graph"),Object(i.b)(l.c,{src:"img/v2/examples/isometric1/level_graph.png",caption:"Level graph",mdxType:"Image"}),Object(i.b)("h2",{id:"results"},"Results"),Object(i.b)(l.c,{src:"img/v2/examples/isometric1/result2.png",caption:"Example result",mdxType:"Image"}),Object(i.b)(l.c,{src:"img/v2/examples/isometric1/result3.png",caption:"Example result",mdxType:"Image"}))}m.isMDXComponent=!0},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},370:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l}));var n=r(22),a=r(371);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const l=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+l:l}(t,e,r,n)}}function l(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},371:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},372:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return m}));var n=r(3),a=r(0),i=r.n(a),l=r(370);const o=e=>i.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>i.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},i.a.Children.map(e.children,(t=>i.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),s=e=>i.a.createElement(o,{cols:e.cols},i.a.createElement("a",{href:Object(l.a)(e.src),target:"_blank"},i.a.createElement("img",{src:Object(l.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&i.a.createElement(p,null,e.caption)),p=e=>i.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...a}=e;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",Object(n.a)({src:Object(l.a)(e.src)},a)),void 0!==e.caption&&i.a.createElement(p,null,e.caption))}}}]);