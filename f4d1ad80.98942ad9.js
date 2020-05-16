(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(216)),l={title:"(PRO) Platformer generator"},i={id:"generators/platformer-generator",title:"(PRO) Platformer generator",description:"## Minimal setup\r",source:"@site/docs\\generators\\platformer-generator.md",permalink:"/ProceduralLevelGenerator-Unity/docs/next/generators/platformer-generator",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/docs/generators/platformer-generator.md",version:"next",sidebar:"docs",previous:{title:"Dungeon generator",permalink:"/ProceduralLevelGenerator-Unity/docs/next/generators/dungeon-generator"},next:{title:"(PRO) Custom input",permalink:"/ProceduralLevelGenerator-Unity/docs/next/generators/custom-input"}},c=[{value:"Minimal setup",id:"minimal-setup",children:[]},{value:"Configuration and usage",id:"configuration-and-usage",children:[]},{value:"Default tilemaps structure",id:"default-tilemaps-structure",children:[]},{value:"Limitations",id:"limitations",children:[{value:"Acyclic level graphs",id:"acyclic-level-graphs",children:[]},{value:"Solvability of generated levels",id:"solvability-of-generated-levels",children:[]}]}],s={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"minimal-setup"},"Minimal setup"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the ",Object(o.b)("strong",{parentName:"li"},"Platformer Generator Component")," to any Game Object in the Scene."),Object(o.b)("li",{parentName:"ul"},"Assign your level graph to the ",Object(o.b)("strong",{parentName:"li"},"Level Graph")," field."),Object(o.b)("li",{parentName:"ul"},"Hit the ",Object(o.b)("strong",{parentName:"li"},"Generate platformer")," button or enable ",Object(o.b)("strong",{parentName:"li"},"Generate on start")," and enter play mode")),Object(o.b)("h2",{id:"configuration-and-usage"},"Configuration and usage"),Object(o.b)("p",null,"The configuration is currently the same as for the Dungeon Generator. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../generators/dungeon-generator#configuration"}),"this")," page. The only difference is that if we want to use the generator from code, we use the ",Object(o.b)("inlineCode",{parentName:"p"},"PlatformerGenerator")," class."),Object(o.b)("h2",{id:"default-tilemaps-structure"},"Default tilemaps structure"),Object(o.b)("p",null,"Platformer room templates can be create via the Create asset menu and their default tilemaps structure is the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Background")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Walls")," - collider"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Platforms")," - collider and platform effector"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Collideable")," - collider"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Other 1")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Other 2"))),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"There are some limitation regarding the platformer generator."),Object(o.b)("h3",{id:"acyclic-level-graphs"},"Acyclic level graphs"),Object(o.b)("p",null,"We should use only ",Object(o.b)("strong",{parentName:"p"},"acyclic")," graphs, i.e. graphs without cycles. The room templates for platformers are often too restrictive to allow cycles. The generator currently allows graphs with cycles but it often happens that it is not able to generate any level."),Object(o.b)("h3",{id:"solvability-of-generated-levels"},"Solvability of generated levels"),Object(o.b)("p",null,"The generator cannot guarantee that all the levels are solvable, i.e. it is possible to successfully traverse generated levels without being stuck at dead-ends caused by impossible jumps, etc. Probably the easiest way to handle that is to design room templates and level graphs in such a way that the generator cannot connect two rooms in a way that it is not possible go one from the first one to the other one."))}u.isMDXComponent=!0},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(d,i({ref:t},s,{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);