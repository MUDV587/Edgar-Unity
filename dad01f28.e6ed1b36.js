(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{293:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(7),a=(o(0),o(340)),i={title:"Performance tips"},s={unversionedId:"basics/performance-tips",id:"version-2.0.0-alpha.8/basics/performance-tips",isDocsHomePage:!1,title:"Performance tips",description:"Room templates",source:"@site/versioned_docs\\version-2.0.0-alpha.8\\basics\\performance-tips.md",slug:"/basics/performance-tips",permalink:"/Edgar-Unity/docs/basics/performance-tips",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.8/basics/performance-tips.md",version:"2.0.0-alpha.8",sidebar:"version-2.0.0-alpha.8/docs",previous:{title:"Level structure and rooms data",permalink:"/Edgar-Unity/docs/basics/generated-level-info"},next:{title:"Dungeon generator",permalink:"/Edgar-Unity/docs/generators/dungeon-generator"}},l=[{value:"Room templates",id:"room-templates",children:[]},{value:"Level graphs",id:"level-graphs",children:[]}],c={toc:l};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"room-templates"},"Room templates"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Try to provide as many door positions as possible.")," The core idea of the algorithm is that it picks a random room and slightly changes its position, hopefully making new connections with neighbouring rooms. If there are too few available door positions, the algorithm will often break already existing connections when trying to connect the room to other neighbours, resulting in poor performance. However, note that if you have all door positions with the same length, it usually ",Object(a.b)("em",{parentName:"p"},"does not")," help to add door positions with different lengths just to make the algorithm faster."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Try to provide rotated versions of room templates.")," If you provide rotated versions of your room templates, the algorithm will have more options to choose from and therefore usually converge faster. However, it is quite time-consuming to manually prepare all rotations - the plugin will hopefully support doing that at least semi-automatically."),Object(a.b)("h2",{id:"level-graphs"},"Level graphs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Limit the number of rooms.")," The core idea of the algorithm is that it decomposes the level graph into smaller subgraphs and tries to lay them out one at a time, connecting them to already laid out rooms. If this step fails, the algorithm needs to backtrack to a previous configuration. If we have too many rooms, backtracking can get quite costly, making the performance bad. We successfully generated dungeons with up to 60 rooms but it also depends on the overall complexity of the level graph - see the next point."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Limit the number of cycles.")," Cycles are very hard to lay out so make sure that there are not too many of them. If you are not sure if cycles are the problem, try to remove some edges that form cycles and see if it makes the performance better."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Make sure that default room templates make sense for rooms without their own room templates.")," The easiest way to configure room templates it to add all templates as ",Object(a.b)("em",{parentName:"p"},"Default room templates"),", making them available to all rooms in the level graph. Now imagine that you design a room template for your dead-end rooms and that it can be connected via doors to only one neighbouring room. Adding this room template to ",Object(a.b)("em",{parentName:"p"},"Default room templates")," will make the performance worse because the algorithm will waste time trying to use it for rooms that have more than 1 neighbour. Instead, you should add this room template only to rooms that have just a single neighbour."))}p.isMDXComponent=!0},340:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),h=r,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||a;return o?n.a.createElement(d,s(s({ref:t},c),{},{components:o})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);