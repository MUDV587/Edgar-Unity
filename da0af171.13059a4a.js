(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{267:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var r=o(3),n=o(7),a=(o(0),o(311)),c=o(314),s={title:"(PRO) Door sockets"},i={unversionedId:"guides/door-sockets",id:"guides/door-sockets",isDocsHomePage:!1,title:"(PRO) Door sockets",description:"In this guide, we will learn about door sockets and how to use them.",source:"@site/docs\\guides\\door-sockets.md",slug:"/guides/door-sockets",permalink:"/Edgar-Unity/docs/next/guides/door-sockets",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/guides/door-sockets.md",version:"current",sidebar:"docs",previous:{title:"(PRO) Minimap",permalink:"/Edgar-Unity/docs/next/guides/minimap"},next:{title:"(PRO) Directed level graphs",permalink:"/Edgar-Unity/docs/next/guides/directed-level-graphs"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Example setup",id:"example-setup",children:[{value:"Create a door socket",id:"create-a-door-socket",children:[]},{value:"Use the socket",id:"use-the-socket",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Advanced",id:"advanced",children:[]}],d={toc:l};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this guide, we will learn about door sockets and how to use them."),Object(a.b)(c.c,{src:"img/v2/guides/door_sockets/result2.png",caption:"Door sockets used to connect normal rooms and skull rooms with special corridors.",mdxType:"Image"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Door sockets are a mechanism to instruct the generator that only some doors are compatible.")," By default, when the generator computes how can two room templates be connected, it looks for doors with the same length. However, that might not always fit our needs. For example, imagine that we have two or more biomes in our game, and we need a special transition corridor to connect these biomes correctly. With the default behaviour, that is not possible because the generator does not know that some doors are not compatible. That is where door sockets come into play. You can assign a door socket to each door, and the generator will connect only doors with the same socket."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," If you use door sockets in a way that it restricts the generator too much, you can negatively impact the performance of the generator.")),Object(a.b)("h2",{id:"example-setup"},"Example setup"),Object(a.b)("p",null,"In this example setup, we will build on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/Edgar-Unity/docs/next/examples/example-1"}),"Example 1")," and introduce a special type of room - the skull room. We will use door sockets to connect normal rooms and skull rooms properly."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(a.b)("em",{parentName:"p"},"Edgar/Examples/DoorSockets"),".")),Object(a.b)("h3",{id:"create-a-door-socket"},"Create a door socket"),Object(a.b)("p",null,"The first step is to create a door socket. We want to have two different door types - normal doors and skull doors. There are two ways of how to approach this. First, we can create a door socket for each door type. Or second, we can utilize the fact that null sockets are not compatible with any other socket and create a door socket just for skull doors. I decided to use the second option because it requires less initial work because we do not have to go through all the already created doors and assign the default socket."),Object(a.b)("p",null,"To create a door socket, head to ",Object(a.b)("em",{parentName:"p"},"Create -> Edgar -> Door socket"),", and that will create a new file in your current folder. If you open the file, you will see a colour field that controls the display colour of doors with this socket. I highly recommend using different colours for individual sockets to make it easy to distinguish between different sockets. I decided to use green colour in this example."),Object(a.b)(c.c,{src:"img/v2/guides/door_sockets/socket.png",caption:"Door socket for skull doors",mdxType:"Image"}),Object(a.b)("h3",{id:"use-the-socket"},"Use the socket"),Object(a.b)("p",null,"Next, I created a skull room. I used the simple door mode and assigned the skull socket. You can see the result below."),Object(a.b)(c.c,{src:"img/v2/guides/door_sockets/skull_room.png",caption:"Skull room",mdxType:"Image"}),Object(a.b)("p",null,"If we want to connect this room to normal rooms, we need a corridor with one skull door and one normal door. In fact, if we have both vertical and horizontal corridors and want both transition directions, we need 4 corridor room templates in total."),Object(a.b)(c.a,{cols:2,mdxType:"Gallery"},Object(a.b)(c.b,{src:"img/v2/guides/door_sockets/skull_hor_6x1_1.png",mdxType:"GalleryImage"}),Object(a.b)(c.b,{src:"img/v2/guides/door_sockets/skull_hor_6x1_2.png",mdxType:"GalleryImage"}),Object(a.b)(c.b,{src:"img/v2/guides/door_sockets/skull_ver_1x6_1.png",mdxType:"GalleryImage"}),Object(a.b)(c.b,{src:"img/v2/guides/door_sockets/skull_ver_1x6_2.png",mdxType:"GalleryImage"})),Object(a.b)("p",null,"You can also have non-corridor rooms with some doors being skull doors and some doors being normal doors. An example of such room template can be seen below."),Object(a.b)(c.c,{src:"img/v2/guides/door_sockets/skull_room_2.png",caption:"Skull room",mdxType:"Image"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," For this room template, you can no longer use the simple door mode as it allows only a single socket. Instead, you have to use the manual door mode. Also, it is good to use the ",Object(a.b)("strong",{parentName:"p"},"Default socket for new doors")," field instead of creating doors without a socket and that assigning the correct socket manually. First, let the field null and create all the default doors. Then, switch the socket to the Skull socket and add all the remaining doors.")),Object(a.b)("h3",{id:"results"},"Results"),Object(a.b)(c.c,{src:"img/v2/guides/door_sockets/result1.png",mdxType:"Image"}),Object(a.b)("h2",{id:"advanced"},"Advanced"),Object(a.b)("p",null,"The default socket implementation considers two doors to be compatible if the sockets are equal. If you need more control over this, you can implement your own socket class that inherits from the ",Object(a.b)("inlineCode",{parentName:"p"},"DoorSocketBase")," class and provide an implementation of the ",Object(a.b)("inlineCode",{parentName:"p"},"IsCompatibleWith(IDoorSocket otherSocket)")," method. An example of a behaviour that is not possible with the default implementation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Socket A is compatible with B"),Object(a.b)("li",{parentName:"ul"},"Socket B is comptaible with C"),Object(a.b)("li",{parentName:"ul"},"Socket A is not compatible with C")))}u.isMDXComponent=!0},311:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return b}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(o),m=r,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return o?n.a.createElement(b,s(s({ref:t},l),{},{components:o})):n.a.createElement(b,s({ref:t},l))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=o[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},312:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return c}));var r=o(22),n=o(313);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(o,r)=>function(e,t,o,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if(Object(n.b)(o))return o;if(r)return t+o;const c=o.startsWith(t)?o:t+o.replace(/^\//,"");return a?e+c:c}(t,e,o,r)}}function c(e,t={}){const{withBaseUrl:o}=a();return o(e,t)}},313:function(e,t,o){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return n}))},314:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return u}));var r=o(3),n=o(0),a=o.n(n),c=o(312);const s=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),i=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,(t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),l=e=>a.a.createElement(s,{cols:e.cols},a.a.createElement("a",{href:Object(c.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(c.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(d,null,e.caption)),d=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),u=e=>{const{src:t,caption:o,...n}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(r.a)({src:Object(c.a)(e.src)},n)),void 0!==e.caption&&a.a.createElement(d,null,e.caption))}}}]);