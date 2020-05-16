(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{210:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var a=r(1),o=r(6),n=(r(0),r(216)),l=r(219),i={title:"Example 1"},s={id:"version-2.0.0-alpha.3/examples/example-1",title:"Example 1",description:'import { Image, Gallery, GalleryImage } from "@theme/Gallery";\r',source:"@site/versioned_docs\\version-2.0.0-alpha.3\\examples\\example-1.md",permalink:"/ProceduralLevelGenerator-Unity/docs/examples/example-1",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.3/examples/example-1.md",version:"2.0.0-alpha.3",sidebar:"version-2.0.0-alpha.3/docs",previous:{title:"Post processing",permalink:"/ProceduralLevelGenerator-Unity/docs/generators/post-process"},next:{title:"Example 2",permalink:"/ProceduralLevelGenerator-Unity/docs/examples/example-2"}},c=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn room",id:"spawn-room",children:[]},{value:"Boss room",id:"boss-room",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Doors",id:"doors",children:[]},{value:"Longer corridors",id:"longer-corridors",children:[]},{value:"Enemies",id:"enemies",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],p={rightToc:c};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this tutorial, we will use ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://pixel-poem.itch.io/dungeon-assetpuck"}),"this tileset")," by ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/pixel_poem"}),"@pixel_poem"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles. "),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/example1_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/example1_result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(n.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example1"),".")),Object(n.b)("h2",{id:"simple-example"},"Simple example"),Object(n.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors. We will use the smaller room template for our dead-end rooms and the bigger room template for other rooms."),Object(n.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(n.b)("p",null,"There should be nothing hard about the design of the two rectangular room templates. We use the ",Object(n.b)("em",{parentName:"p"},"simple doors mode configured")," to door length 1 and corner distance 2. We need corner distance 2 in order to easily connect corridors."),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/example1_room1.png",caption:"Bigger room",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/example1_room2.png",caption:"Smaller room",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"corridors"},"Corridors"),Object(n.b)("p",null,"Corridors are very simple with this tileset. We use the ",Object(n.b)("em",{parentName:"p"},"specific positions")," doors mode to choose the two possible door positions. And because corridors are by default placed after non-corridor rooms, these room templates just work without the need of any scripting."),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/original/example1_corridor_horizontal.png",caption:"Horizontal corridor",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/original/example1_corridor_vertical.png",caption:"Vertical corridor",mdxType:"GalleryImage"})),Object(n.b)("p",null,"We just need to make sure that we do not allow door positions of non-corridor rooms that are closer than 2 tiles from corners. Below you can see what would happen otherwise. It is possible to allow that but we would have to implement some post process logic that would fix such cases."),Object(n.b)(l.c,{src:"img/original/example1_wrong_corridor.png",caption:"Incorrect corridor connection",mdxType:"Image"}),Object(n.b)("h3",{id:"level-graph"},"Level graph"),Object(n.b)("p",null,"With only two room templates for non-corridor rooms, we must think about which level graphs are possible to lay out and which are not. For example, using only the bigger room template, the algorithm is not able to lay out cycles of lengths 3 and 5 because there simply is not any way to form these cycles with such room templates. But cycles of length 4 are possible so that is what we do here."),Object(n.b)(l.c,{src:"img/v2/examples/example1_level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(n.b)("h3",{id:"results"},"Results"),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/example1_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/example1_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(n.b)("h2",{id:"real-life-example"},"Real-life example"),Object(n.b)("p",null,"To create something that is closer to a real-life example, we will:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"add spawn room template that includes a player"),Object(n.b)("li",{parentName:"ul"},"add boss room that contains a ladder to the next level"),Object(n.b)("li",{parentName:"ul"},"add doors to corridors"),Object(n.b)("li",{parentName:"ul"},"add two more corridor room templates"),Object(n.b)("li",{parentName:"ul"},"add enemies"),Object(n.b)("li",{parentName:"ul"},"add more rooms to the level graph")),Object(n.b)("h3",{id:"spawn-room"},"Spawn room"),Object(n.b)("p",null,"Our spawn room will look different than our basic rooms. We will also want the generator to spawn our player prefab inside the room. This can be simply achieved by placing our prefab inside the room template, next to the GameObject that holds our tilemaps."),Object(n.b)(l.c,{src:"img/v2/examples/example1_spawn.png",caption:"Spawn room with player prefab",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," A basic script for player movement is included in the example scene.")),Object(n.b)("h3",{id:"boss-room"},"Boss room"),Object(n.b)("p",null,"Our boss room will also have a special look. We also created a simple Exit prefab that looks like a ladder a generates a new level when interacted with. And similarly to placing our player prefab, we can also let the generator spawn a ",Object(n.b)("em",{parentName:"p"},"mighty ogre")," that will guard the exit."),Object(n.b)(l.c,{src:"img/v2/examples/example1_boss.png",caption:"Boss room template with exit prefab",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," There is no enemy AI so the ogre is really not the mighty.")),Object(n.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(n.b)("p",null,"Even for ordinary rooms, we can have non-rectangular room templates."),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/original/example1_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"doors"},"Doors"),Object(n.b)("p",null,"We can easily add doors to our corridors. We created a simple door prefab that has a collider and also a trigger that lets the player open the door."),Object(n.b)(l.c,{src:"img/v2/examples/example1_corridor_doors.png",caption:"Corridor with doors",mdxType:"Image"}),Object(n.b)("h3",{id:"longer-corridors"},"Longer corridors"),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/example1_corridor_horizontal2.png",caption:"Longer horizontal corridor",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/example1_corridor_vertical2.png",caption:"Longer vertical corridor",mdxType:"GalleryImage"})),Object(n.b)("h3",{id:"enemies"},"Enemies"),Object(n.b)("p",null,"We can easily add enemies to our levels. In this tutorial, we will add enemies directly to room templates and then implement a post process task that spawns each enemy with a configurable chance. "),Object(n.b)("p",null,'We will start by creating a GameObject called "Enemies" in all the room templates that will contain enemies a make all the enemies children of this GameObject.'),Object(n.b)(l.c,{src:"img/v2/examples/example1/room_with_monsters.png",caption:"Enemies added to the room template",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:"),' We must make sure to always name the root GameObject "Enemies" as we will use that name to work with the enemies.')),Object(n.b)("p",null,"If we now generate the dungeon, we will see that it contains all the enemies that we added to individual room templates."),Object(n.b)(l.c,{src:"img/v2/examples/example1/dungeon_with_monsters.png",caption:"Dungeon with monsters",mdxType:"Image"}),Object(n.b)("p",null,"If we are happy with the results, we can stop here. However, to showcase how we can add some post processing logic to the generator, we will try to spawn each monster with some predefined probability so that different monsters spawn every time. The result can be found below."),Object(n.b)("p",null,"We have to create a class that inherits from ",Object(n.b)("inlineCode",{parentName:"p"},"DungeonGeneratorPostProcessBase")," and because the base class is a ScriptableObject, we need to add the ",Object(n.b)("inlineCode",{parentName:"p"},"CreateAssetMenu")," attribute so we are able to create an instance of that ScriptableObject. After a level is generated, the ",Object(n.b)("inlineCode",{parentName:"p"},"Run")," method is called and that is the place where we call our post process logic."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'[CreateAssetMenu(menuName = "Dungeon generator/Examples/Example 1/Post process", fileName = "Example1PostProcess")]\npublic class Example1PostProcess : DungeonGeneratorPostProcessBase\n{\n    [Range(0, 1)]\n    public float EnemySpawnChance = 0.5f;\n\n    protected override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    { \n        HandleEnemies(level);\n    }\n\n    private void HandleEnemies(GeneratedLevel level)\n    {\n        // Iterate through all the rooms\n        foreach (var roomInstance in level.GetRoomInstances())\n        {\n            // Get the transform that holds all the enemies\n            var enemiesHolder = roomInstance.RoomTemplateInstance.transform.Find("Enemies");\n\n            // Skip this room if there are no enemies\n            if (enemiesHolder == null)\n            {\n                continue;\n            }\n\n            // Iterate through all enemies (children of the enemiesHolder)\n            foreach (Transform enemyTransform in enemiesHolder)\n            {\n                var enemy = enemyTransform.gameObject;\n\n                // Roll a dice and check whether to spawn this enemy or not\n                // Use the provided Random instance so that the whole generator uses the same seed and the results can be reproduced\n                if (Random.NextDouble() < EnemySpawnChance)\n                {\n                    enemy.SetActive(true);\n                }\n                else\n                {\n                    enemy.SetActive(false);\n                }\n            }\n        }\n    }\n}\n')),Object(n.b)("p",null,"With the implementation ready, we now have to create an instance of that ScriptableObject by right clicking in the project view and ",Object(n.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Examples -> Example 1-> Post process"),". And the last step is to drag and drop this GameObject in the ",Object(n.b)("em",{parentName:"p"},"Custom post process tasks")," section of the dungeon generator."),Object(n.b)(l.c,{src:"img/v2/examples/example1/custom_post_process.png",caption:"Add the ScriptableObject to the Custom post process tasks array",mdxType:"Image"}),Object(n.b)("h3",{id:"level-graph-1"},"Level graph"),Object(n.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(n.b)(l.c,{src:"img/v2/examples/example1_level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(n.b)("p",null,"You can also see that with corridors of different lengths a more room templates to choose from, we can now have cycles of various sizes. The boss and spawn rooms have assigned only a single room template."),Object(n.b)("h3",{id:"results-1"},"Results"),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/example1_result_reallife2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/example1_result_reallife3.png",caption:"Example result",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/example1_result_reallife4.png",caption:"Example result with enemies",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/example1_result_reallife5.png",caption:"Example result with enemies",mdxType:"GalleryImage"})))}m.isMDXComponent=!0},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return h}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},m=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,h=m["".concat(l,".").concat(b)]||m[b]||d[b]||n;return r?o.a.createElement(h,i({ref:t},c,{components:r})):o.a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},217:function(e,t,r){"use strict";var a=r(0),o=r(32);t.a=function(){return Object(a.useContext)(o.a)}},218:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(217);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return d}));var a=r(1),o=r(6),n=r(0),l=r.n(n),i=r(218),s=function(e){return l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:"calc("+100/e.cols+"% - 4px)",verticalAlign:"top"}},e.children)},c=function(e){return l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,(function(t){return l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})})))},p=function(e){return l.a.createElement(s,{cols:e.cols},l.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(m,null,e.caption))},m=function(e){return l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children)},d=function(e){e.src,e.caption;var t=Object(o.a)(e,["src","caption"]);return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(a.a)({src:Object(i.a)(e.src)},t)),void 0!==e.caption&&l.a.createElement(m,null,e.caption))}}}]);