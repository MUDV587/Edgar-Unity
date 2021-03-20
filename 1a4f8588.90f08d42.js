(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{311:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,m=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},312:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(22),a=r(313);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},313:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},314:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return p}));var n=r(3),a=r(0),o=r.n(a),i=r(312);const l=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,(t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),s=e=>o.a.createElement(l,{cols:e.cols},o.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(d,null,e.caption)),d=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:r,...a}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&o.a.createElement(d,null,e.caption))}},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(311)),i=r(314),l={title:"(PRO) Directed level graphs"},c={unversionedId:"guides/directed-level-graphs",id:"guides/directed-level-graphs",isDocsHomePage:!1,title:"(PRO) Directed level graphs",description:"In this guide, we will see what we can do if we make the level graph directed and mark some doors as entrance-only or exit-only.",source:"@site/docs\\guides\\directed-level-graphs.md",slug:"/guides/directed-level-graphs",permalink:"/Edgar-Unity/docs/next/guides/directed-level-graphs",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/guides/directed-level-graphs.md",version:"current",sidebar:"docs",previous:{title:"(PRO) Door sockets",permalink:"/Edgar-Unity/docs/next/guides/door-sockets"},next:{title:"Migration from v1 to v2",permalink:"/Edgar-Unity/docs/next/other/migration-v1-v2"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Setup",id:"setup",children:[{value:"Make the level graph directed",id:"make-the-level-graph-directed",children:[]},{value:"Add some entrances and exits",id:"add-some-entrances-and-exits",children:[]}]},{value:"Example",id:"example",children:[{value:"Level graph",id:"level-graph",children:[]},{value:"Room templates",id:"room-templates",children:[]},{value:"Corridor room templates",id:"corridor-room-templates",children:[]},{value:"Results",id:"results",children:[]}]}],d={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this guide, we will see what we can do if we make the level graph directed and mark some doors as entrance-only or exit-only."),Object(o.b)(i.c,{src:"img/v2/guides/directed_level_graphs/result_1.png",caption:"Level generated from a level graph where all connections were directed away from the spawn. Arrow tiles show that all room templates are correctly oriented.",mdxType:"Image"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"By default, all level graphs are undirected. That means that if you create a connection from Room 1 to Room 2 or from Room 2 to Room 1, the generator sees both cases to be equivalent. While this is fine for the majority of scenarios, it prevents us from doing some interesting things with the level design. "),Object(o.b)("p",null,"For example, imagine that you want to have a puzzle room where the player should enter the room on the left side and solve the puzzle, which, in turn, lets the player leave the room on the right side. With undirected graphs, this is impossible to achieve. Therefore, we have to introduce the notion of direction of individual connections in a level graph. When enabled, there appears a small arrow on each connection to indicate its direction. Moreover, each door can be marked as either entrance-only or exit-only, which gives us all the tools to implement the puzzle room."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," As with other features that limit the freedom of the generator, overuse of this feature can significantly decrease the performance. Always aim to have enough room templates and door positions to choose from.")),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h3",{id:"make-the-level-graph-directed"},"Make the level graph directed"),Object(o.b)("p",null,"The first step in the setup is to make the level graph directed. To do that, you have to enable the ",Object(o.b)("em",{parentName:"p"},"Is Directed")," checkbox in the level graph inspector. After the level graph window is repainted (you might zoom in and out in the graph editor), you should see an arrow on each connection."),Object(o.b)(i.a,{cols:2,mdxType:"Gallery"},Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/is_directed_false.png",caption:"Is Directed false",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/is_directed_true.png",caption:"Is Directed true",mdxType:"GalleryImage"})),Object(o.b)("h3",{id:"add-some-entrances-and-exits"},"Add some entrances and exits"),Object(o.b)("p",null,"Making the level graph directed alone does not change anything in the way levels are generated. The next necessary step is to mark some doors as entrances or exits. This can be done only with the manual door mode. If a door is marked as an exit, it can be used only for connections that are directed away from the room. Likewise, if a door is marked as an entrance, it can be used only for connections that are directed towards the room."),Object(o.b)(i.c,{src:"img/v2/guides/directed_level_graphs/entrance_exit_example.png",caption:"Example of entrance and exit doors. Entrance and exit doors are marked with an 'In' or 'Out' label.",mdxType:"Image"}),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(o.b)("em",{parentName:"p"},"Edgar/Examples/DirectedLevelGraphs"),".")),Object(o.b)("h3",{id:"level-graph"},"Level graph"),Object(o.b)("p",null,"First, I created a simple directed level graph that can be seen below. The graph is pretty simple. All connections are directed away from the spawn room and there is also a single cycle."),Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/example_level_graph.png",caption:"Example level graph",mdxType:"GalleryImage"}),Object(o.b)("h3",{id:"room-templates"},"Room templates"),Object(o.b)("p",null,"Next, I created a room template that should illustrate how we could approach puzzle rooms as described above. All the doors on the left side are marked as entrances and all the doors on the right side are marked as exits. That means that the player will always enter the room from the left side and exit on the right side. I also created a mirrored version of the room template."),Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/directed_room_2.png",caption:"Example room template",mdxType:"GalleryImage"}),Object(o.b)("h3",{id:"corridor-room-templates"},"Corridor room templates"),Object(o.b)("p",null,"I also created directed versions of both vertical and horizontal corridors. This step is completely optional - if you do not care about the direction of corridors, you can use the default undirected doors."),Object(o.b)(i.a,{cols:2,mdxType:"Gallery"},Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/hor_6x1_1.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/hor_6x1_2.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/ver_1x6_1.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/guides/directed_level_graphs/ver_1x6_2.png",mdxType:"GalleryImage"})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The arrow tiles are placed on the room templates manually to better illustrate the direction of the corridors.")),Object(o.b)("h3",{id:"results"},"Results"),Object(o.b)(i.c,{src:"img/v2/guides/directed_level_graphs/result_2.png",mdxType:"Image"}))}p.isMDXComponent=!0}}]);