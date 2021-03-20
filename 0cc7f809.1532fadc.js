(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{340:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(340)),i={title:"(PRO) Custom input"},l={unversionedId:"generators/custom-input",id:"version-2.0.0-alpha.8/generators/custom-input",isDocsHomePage:!1,title:"(PRO) Custom input",description:"In the free version of the asset, the input for the generator is fixed. That means that we create a level graph in the GUI and give it directly to the generator. However, there are situations where we might want to alter the level graph. For example, we may want to add a secret room that is connected to a random room in the level.",source:"@site/versioned_docs\\version-2.0.0-alpha.8\\generators\\custom-input.md",slug:"/generators/custom-input",permalink:"/Edgar-Unity/docs/generators/custom-input",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.8/generators/custom-input.md",version:"2.0.0-alpha.8",sidebar:"version-2.0.0-alpha.8/docs",previous:{title:"(PRO) Platformer generator",permalink:"/Edgar-Unity/docs/generators/platformer-generator"},next:{title:"Example 1",permalink:"/Edgar-Unity/docs/examples/example-1"}},s=[{value:"<code>LevelGraph</code> and <code>LevelDescription</code>",id:"levelgraph-and-leveldescription",children:[]},{value:"Custom input implementation",id:"custom-input-implementation",children:[]},{value:"Typical use cases",id:"typical-use-cases",children:[{value:"Add rooms to the level graph",id:"add-rooms-to-the-level-graph",children:[]},{value:"Assign room templates automatically",id:"assign-room-templates-automatically",children:[]},{value:"Procedural graphs",id:"procedural-graphs",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the free version of the asset, the input for the generator is fixed. That means that we create a level graph in the GUI and give it directly to the generator. However, there are situations where we might want to alter the level graph. For example, we may want to add a secret room that is connected to a random room in the level."),Object(a.b)("p",null,"In this tutorial, we will learn how to implement custom inputs in order to have more control over the input for the generator."),Object(a.b)("h2",{id:"levelgraph-and-leveldescription"},Object(a.b)("inlineCode",{parentName:"h2"},"LevelGraph")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"LevelDescription")),Object(a.b)("p",null,"The first thing that we need to understand is the difference between ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," and ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," classes. If you are reading this tutorial, you probably know what is a level graph. It is a collection of rooms and connections and it describes the high-level structure of generated levels. With each level graph is associated an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," scriptable object. "),Object(a.b)("p",null,"However, level graphs are not directly given to the generator as an input. First, we need to convert the ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," to an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," class. The reason for that is that level graphs are made primarily for the GUI editor and we need to convert them to a real graph data structure."),Object(a.b)("p",null,"Both ",Object(a.b)("inlineCode",{parentName:"p"},"LevelGraph")," and ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," revolve around rooms and connections. The following code should demonstrate the basic API of both classes and how to convert one to the other one:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'public class CustomInputExample : DungeonGeneratorInputBase\n{\n    public LevelGraph LevelGraph;\n    public bool UseCorridors;\n\n    protected override LevelDescription GetLevelDescription()\n    {\n        var levelDescription = new LevelDescription();\n\n        // Go through rooms in the level graph and add them to the level description\n        foreach (var room in LevelGraph.Rooms)\n        {\n            levelDescription.AddRoom(room, GetRoomTemplates(room));\n        }\n\n        // Go through connections in the level graph\n        foreach (var connection in LevelGraph.Connections)\n        {\n            // If corridors are enabled, add corridor connection\n            if (UseCorridors)\n            {\n                // Create a room for the corridor\n                var corridorRoom = ScriptableObject.CreateInstance<Room>();\n                corridorRoom.Name = "Corridor";\n\n\n                levelDescription.AddCorridorConnection(connection, corridorRoom, GetCorridorRoomTemplates());\n            }\n            // Else connect the rooms directly\n            else\n            {\n                levelDescription.AddConnection(connection);\n            }\n        }\n\n        return levelDescription;\n    }\n\n    /// <summary>\n    /// Gets room templates for a given room.\n    /// </summary>\n    private List<GameObject> GetRoomTemplates(RoomBase room)\n    {\n        // Get room templates from a given room\n        var roomTemplates = room.GetRoomTemplates();\n\n        // If the list is empty, we use the defaults room templates from the level graph\n        if (roomTemplates == null || roomTemplates.Count == 0)\n        {\n            var defaultRoomTemplates = LevelGraph.DefaultIndividualRoomTemplates;\n            var defaultRoomTemplatesFromSets = LevelGraph.DefaultRoomTemplateSets.SelectMany(x => x.RoomTemplates);\n\n            // Combine individual room templates with room templates from room template sets\n            return defaultRoomTemplates.Union(defaultRoomTemplatesFromSets).ToList();\n        }\n\n        return roomTemplates;\n    }\n\n    /// <summary>\n    /// Gets corridor room templates.\n    /// </summary>\n    private List<GameObject> GetCorridorRoomTemplates()\n    {\n        var defaultRoomTemplates = LevelGraph.CorridorIndividualRoomTemplates;\n        var defaultRoomTemplatesFromSets = LevelGraph.CorridorRoomTemplateSets.SelectMany(x => x.RoomTemplates);\n\n        return defaultRoomTemplates.Union(defaultRoomTemplatesFromSets).ToList();\n    }\n}\n')),Object(a.b)("h2",{id:"custom-input-implementation"},"Custom input implementation"),Object(a.b)("p",null,"Custom inputs are quite similar to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/Edgar-Unity/docs/generators/post-process"}),"Custom post-processing")," logic. We have to create a class that inherits from ",Object(a.b)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBase"),". And because the base class is a ScriptableObject, we need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"CreateAssetMenu")," attribute so we are able to create an instance of that ScriptableObject. The ",Object(a.b)("inlineCode",{parentName:"p"},"DungeonGeneratorInputBase")," class has one abstract method that we need to implement - ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription GetLevelDescription()"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'[CreateAssetMenu(menuName = "Edgar/Examples/Docs/My custom input", fileName = "MyCustomInputSetup")]\npublic class CustomInputExample : DungeonGeneratorInputBase\n{\n    protected override LevelDescription GetLevelDescription()\n    {\n        // Create level description\n    }\n}\n')),Object(a.b)("p",null,"After we implement the logic, we have to create an instance of that ScriptableObject by right-clicking in the project view and ",Object(a.b)("em",{parentName:"p"},"Create -> Edgar -> Examples -> Docs -> My custom input"),". And the last step is to switch the ",Object(a.b)("em",{parentName:"p"},"Input Type")," in the generator inspector to ",Object(a.b)("em",{parentName:"p"},"Custom Input")," and drag and drop the ScriptableObject instance to the ",Object(a.b)("em",{parentName:"p"},"Custom Input Task")," field."),Object(a.b)("h2",{id:"typical-use-cases"},"Typical use cases"),Object(a.b)("h3",{id:"add-rooms-to-the-level-graph"},"Add rooms to the level graph"),Object(a.b)("p",null,"One typical use case is adding additional rooms (for example a random secret room) to an existing level graph. The workflow is usually as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create the static part of the level graph in the GUI"),Object(a.b)("li",{parentName:"ol"},"Create a custom input task with a public level graph field that we will assign our level graph to"),Object(a.b)("li",{parentName:"ol"},"Convert the ",Object(a.b)("inlineCode",{parentName:"li"},"LevelGraph")," to ",Object(a.b)("inlineCode",{parentName:"li"},"LevelDescription")," (as discussed above)"),Object(a.b)("li",{parentName:"ol"},"Create additional rooms and connect them to existing rooms in the level description")),Object(a.b)("p",null,"To make it easier to work with the graph of rooms and connections, ",Object(a.b)("inlineCode",{parentName:"p"},"LevelDescription")," has a ",Object(a.b)("inlineCode",{parentName:"p"},"IGraph<RoomBase> GetGraph()")," method to get the current graph of rooms. The graphs contains all the expected methods like getting all rooms or checking if two rooms are neighbours."),Object(a.b)("p",null,"For an example of how can this be implemented, see the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/Edgar-Unity/docs/examples/enter-the-gungeon"}),"Enter the Gungeon")," example where we connect a secret room to a random room in the graph."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The graph which is returned by the ",Object(a.b)("inlineCode",{parentName:"p"},"GetGraph()")," method currently does not get updated when you modify the level description. You need to call the method again to get a new graph.")),Object(a.b)("h3",{id:"assign-room-templates-automatically"},"Assign room templates automatically"),Object(a.b)("p",null,"Another typical use case is implementing custom logic for assigning room templates to individual rooms. For example, if we use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../basics/level-graphs#pro-custom-rooms-and-connections"}),"custom rooms"),", we may want to assign room templates based on the type of the room instead of manually assigning room templates to individual rooms. This can be seen both in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/Edgar-Unity/docs/examples/enter-the-gungeon"}),"Enter the Gungeon")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/Edgar-Unity/docs/examples/dead-cells"}),"Dead Cells")," examples."),Object(a.b)("h3",{id:"procedural-graphs"},"Procedural graphs"),Object(a.b)("p",null,"It is also possible to have a completely procedural structure of levels by creating the whole level description on the fly without any static parts."))}p.isMDXComponent=!0}}]);