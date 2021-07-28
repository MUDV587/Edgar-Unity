(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{297:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return d}));var a=r(3),o=r(7),n=(r(0),r(369)),i=r(372),l=r(374),s={title:"Example 2"},c={unversionedId:"examples/example-2",id:"version-2.0.0-alpha.8/examples/example-2",isDocsHomePage:!1,title:"Example 2",description:"In this tutorial, we will use this tileset by 0x72. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/versioned_docs\\version-2.0.0-alpha.8\\examples\\example-2.md",slug:"/examples/example-2",permalink:"/Edgar-Unity/docs/2.0.0-alpha.8/examples/example-2",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.8/examples/example-2.md",version:"2.0.0-alpha.8",sidebar:"version-2.0.0-alpha.8/docs",previous:{title:"Example 1",permalink:"/Edgar-Unity/docs/2.0.0-alpha.8/examples/example-1"},next:{title:"(PRO) Platformer 1",permalink:"/Edgar-Unity/docs/2.0.0-alpha.8/examples/platformer-1"}},p=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms templates",id:"basic-rooms-templates",children:[]},{value:"Vertical corridors",id:"vertical-corridors",children:[]},{value:"Horizontal corridors",id:"horizontal-corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn and boss rooms",id:"spawn-and-boss-rooms",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Wider corridors",id:"wider-corridors",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],m={toc:p};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this tutorial, we will use ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/dungeontileset-ii"}),"this tileset")," by ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/"}),"0x72"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/examples/example2/result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(n.b)("em",{parentName:"p"},"Edgar/Examples/Example2"),".")),Object(n.b)(l.a,{id:"example-2",mdxType:"ExampleFeatures"}),Object(n.b)("h2",{id:"simple-example"},"Simple example"),Object(n.b)("p",null,"The goal is to create two basic rectangular room templates of different sizes and a room template for both horizontal and vertical corridors."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," This tileset is trickier than the one used in ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," because there is an additional row of lighter tiles above all horizontal wall tiles. It will cause us problems when working with corridors.")),Object(n.b)("h3",{id:"basic-rooms-templates"},"Basic rooms templates"),Object(n.b)("p",null,"For this example, I am using doors with two different lengths (1 and 2). That means that we have to use the ",Object(n.b)("em",{parentName:"p"},"Specific positions mode")," mode because the ",Object(n.b)("em",{parentName:"p"},"Simple mode")," can only handle doors with the same length. As you can see below, the door positions look quite messy because they overlap. However, this is only to showcase that it is possible and you can use doors with the same length."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_room1.png",caption:"Smaller room",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_room2.png",caption:"Bigger room",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"vertical-corridors"},"Vertical corridors"),Object(n.b)("p",null,"As I said before, there is a problem with corridors when working with this tileset. To be more precise, there is a problem with vertical corridors because of the additional row of tiles above wall tiles. If we were to design our vertical corridors as in Example 1, we would end up with something like this:"),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_wrong_corridor.png",caption:"Incorrent vertical corridor",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_wrong_corridor2.png",caption:"Incorrent connection",mdxType:"GalleryImage"})),Object(n.b)("p",null,"We can solve this by using the ",Object(n.b)("strong",{parentName:"p"},"Outline override")," feature. It allows us to tell the algorithm that instead of automatically computing the outline of the room template, we want to draw it manually. You can see the result below. By doing so, we easily fix the problem with walls being one tile taller and the level is drawn correctly."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_before.png",caption:"Incorrect - Without outline override",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_after.png",caption:"Correct - With outline override",mdxType:"GalleryImage"})),Object(n.b)("p",null,"To enable the ",Object(n.b)("strong",{parentName:"p"},"Outline override"),", we have to click the ",Object(n.b)("strong",{parentName:"p"},"Add outline override")," button. This button adds another tilemap layer called ",Object(n.b)("em",{parentName:"p"},"Outline Override"),". "),Object(n.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_before_gui.png",caption:"Add outline override button",mdxType:"Image"}),Object(n.b)("p",null,"When computing the outline of this room template, the generator will now ignore all the other layers and use only the ",Object(n.b)("em",{parentName:"p"},"Outline Override")," layer. Moreover, the generator will ignore this layer while copying individual tiles to the shared tilemap so we can use any tiles to draw on this layer. And where we are done with drawing the outline, we can make that tilemap layer inactive so we can see how the room template normally looks."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," We must not forget to make sure that all our doors are contained on the new outline.")),Object(n.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_with_outline_shown.png",caption:"We can use any tiles to draw on the Outline Override layer as they are not used in the output.",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," In the previous version of the algorithm, we had to manually implement some additional logic to fix these situations. The goal of the current version is to make it possible without writing any code.")),Object(n.b)("h3",{id:"horizontal-corridors"},"Horizontal corridors"),Object(n.b)("p",null,"There is also a slight problem with horizontal corridors. It is currently not possible to have doors with length 1 to be at the corners of the room template outline. We fix this by adding ",Object(n.b)("strong",{parentName:"p"},"Outline override")," and using a rectangular outline where the doors are not at the corners."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_before.png",caption:"Incorrect - Without outline override. There must not be doors of length 1 at the corners of the outline.",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_after.png",caption:"Correct - With outline override. Doors are no longer at the corners of the outline.",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"level-graph"},"Level graph"),Object(n.b)(i.c,{src:"img/v2/examples/example2/level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(n.b)("h3",{id:"results"},"Results"),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(n.b)("h2",{id:"real-life-example"},"Real-life example"),Object(n.b)("p",null,"To create something that is closer to a real-life example, we will add more rooms to the level graph, add special room templates for spawn and boss rooms and also two more corridor room templates."),Object(n.b)("h3",{id:"spawn-and-boss-rooms"},"Spawn and boss rooms"),Object(n.b)("p",null,"These rooms will contain:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"our player prefab with basic movement"),Object(n.b)("li",{parentName:"ul"},"interactable chest that changes appearance after an interaction (no loot is implemented)"),Object(n.b)("li",{parentName:"ul"},"ladder that causes the game manager to generated a new level after interaction"),Object(n.b)("li",{parentName:"ul"},"an ogre in the boss room (no AI implemented)")),Object(n.b)(i.c,{src:"img/v2/examples/example2/spawn.png",caption:"Spawn room with our player prefab, chest and exit",mdxType:"Image"}),Object(n.b)(i.c,{src:"img/v2/examples/example2/boss.png",caption:"Boss room with our enemy prefab, chest and exit",mdxType:"Image"}),Object(n.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(n.b)("p",null,"We can make generated dungeons more interesting by adding smaller room templates to our dead-end rooms."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"wider-corridors"},"Wider corridors"),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/example2_corridor_horizontal2.png",caption:"Wider horizontal corridor",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/example2_corridor_vertical2.png",caption:"Wider vertical corridor",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"level-graph-1"},"Level graph"),Object(n.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(n.b)(i.c,{src:"img/v2/examples/example2/level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(n.b)("h3",{id:"results-1"},"Results"),Object(n.b)(i.c,{src:"img/v2/examples/example2/result_reallife2.png",caption:"Example result",mdxType:"Image"}),Object(n.b)(i.c,{src:"img/v2/examples/example2/result_reallife3.png",caption:"Example result",mdxType:"Image"}))}d.isMDXComponent=!0},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||n;return r?o.a.createElement(b,l(l({ref:t},c),{},{components:r})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},370:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}));var a=r(22),o=r(371);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:n=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return n?e+i:i}(t,e,r,a)}}function i(e,t={}){const{withBaseUrl:r}=n();return r(e,t)}},371:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}))},372:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return m}));var a=r(3),o=r(0),n=r.n(o),i=r(370);const l=e=>n.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>n.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},n.a.Children.map(e.children,(t=>n.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),c=e=>n.a.createElement(l,{cols:e.cols},n.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},n.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&n.a.createElement(p,null,e.caption)),p=e=>n.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...o}=e;return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",Object(a.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&n.a.createElement(p,null,e.caption))}},373:function(e,t,r){"use strict";var a=r(0),o=r.n(a),n=r(11),i=r(371),l=r(8);const s=Object(a.createContext)({collectLink:()=>{}});var c=r(370),p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};t.a=function(e){var t,{isNavLink:r,to:m,href:d,activeClassName:u,isActive:b,"data-noBrokenLinkCheck":h,autoAddBaseUrl:g=!0}=e,f=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:x}=Object(c.b)(),v=Object(a.useContext)(s),y=m||d,O=Object(i.a)(y),w=null==y?void 0:y.replace("pathname://",""),j=void 0!==w?(E=w,g&&(e=>e.startsWith("/"))(E)?x(E):E):void 0;var E;const k=Object(a.useRef)(!1),T=r?n.e:n.c,I=l.a.canUseIntersectionObserver;let N;Object(a.useEffect)((()=>(!I&&O&&window.docusaurus.prefetch(j),()=>{I&&N&&N.disconnect()})),[j,I,O]);const _=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,G=!j||!O||_;return j&&O&&!_&&!h&&v.collectLink(j),G?o.a.createElement("a",Object.assign({href:j},y&&!O&&{target:"_blank",rel:"noopener noreferrer"},f)):o.a.createElement(T,Object.assign({},f,{onMouseEnter:()=>{k.current||(window.docusaurus.preload(j),k.current=!0)},innerRef:e=>{var t,r;I&&e&&O&&(t=e,r=()=>{window.docusaurus.prefetch(j)},N=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),r())}))})),N.observe(t))},to:j||""},r&&{isActive:b,activeClassName:u}))}},374:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return p}));var a=r(0),o=r.n(a),n=r(373);const i=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],l=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function s(e){if("undefined"!=typeof window){const t=window.location.href,r=t.split("/");(r[r.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}const c=e=>{const t=i.find((t=>t.id===e.id)).usages.map((e=>({...e,examples:[]})));return l.forEach((r=>{r.features.forEach((a=>{if(a.id===e.id){t.find((e=>e.id===a.usage)).examples.push({example:r,feature:a})}}))})),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),o.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),o.a.createElement("table",null,o.a.createElement("tbody",null,t.map(((e,t)=>o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.examples.map(((e,t)=>o.a.createElement("span",null,t?", ":"",o.a.createElement(n.a,{to:s(e.example.url+"#"+e.feature.anchor),onClick:()=>{return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),1e3);var t}},e.example.name))))),o.a.createElement("td",null,e.description)))))))},p=e=>{const t=l.find((t=>t.id===e.id)),r=[];return t.features.forEach((e=>{const t=i.find((t=>t.id===e.id)),a=t.usages.find((t=>t.id===e.usage));r.push({...e,feature:t,featureUsage:a})})),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"List of used features"),o.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),o.a.createElement("table",null,o.a.createElement("tbody",null,r.map(((e,t)=>o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(n.a,{to:e.feature.url},e.feature.name)),o.a.createElement("td",null,e.featureUsage.description)))))))}}}]);