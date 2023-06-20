"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[7638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={sidebar_position:52,title:"sm.world",hide_title:!0,"sidebar-label":"sm.world"},o=void 0,i={unversionedId:"Game-Script-Environment/Static-Functions/sm.world",id:"Game-Script-Environment/Static-Functions/sm.world",title:"sm.world",description:"sm.world",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.world.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.world",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.world",draft:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52,title:"sm.world",hide_title:!0,"sidebar-label":"sm.world"},sidebar:"tutorialSidebar",previous:{title:"sm.visualization",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.visualization"},next:{title:"Info",permalink:"/docs/Terrain-Script-Environment/Info"}},s={},u=[{value:"sm.world",id:"smworld",level:2},{value:"Functions",id:"functions",level:2},{value:"createWorld",id:"createworld",level:3},{value:"getCurrentWorld",id:"getcurrentworld",level:3},{value:"getDirtySpheres",id:"getdirtyspheres",level:3},{value:"getLegacyCreativeWorld",id:"getlegacycreativeworld",level:3},{value:"loadWorld",id:"loadworld",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"smworld"},"sm.world"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Associated object type:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/World"},"World")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",null,"world")," API handles the creation and destruction of worlds."),(0,l.kt)("p",null,"A world contains the terrain and simulates the physics environment in which other game objects can exist."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smworldids"},"Constants")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"createworld"},"createWorld"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.world.createWorld( filename, classname, terrainParams, seed )\n")),(0,l.kt)("code",null,"Server-Only")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"Creates a new world object. Can only be called from inside the Game script environment."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"filename")," [",(0,l.kt)("strong",null," string "),"]: The path to the world script file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"classname")," [",(0,l.kt)("strong",null," string "),"]: The name of the world script class name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"terrainParams")," [",(0,l.kt)("strong",null," any "),"]: Any extra terrain parameters. Optional."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"seed")," [",(0,l.kt)("strong",null," int "),"]: The world seed. Defaults to 0.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," world "),"]",": The created world.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getcurrentworld"},"getCurrentWorld"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.world.getCurrentWorld()\n")),(0,l.kt)("p",null,"Get the world that the scripted object is in."),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," world "),"]",": The current world.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdirtyspheres"},"getDirtySpheres"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.world.getDirtySpheres( position, radius )\n")),(0,l.kt)("p",null,"Returns an array of tables representing spheres where something has changed in the world."),(0,l.kt)("p",null,"The optional position and radius parameters will construct a sphere, and use it as a filter to only show results that intersect that sphere."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"position")," [",(0,l.kt)("strong",null," vec3 "),"]: The position of the sphere. Optional."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"radius")," [",(0,l.kt)("strong",null," number "),"]: The size of the sphere. Optional.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," table "),"]",": A table containing tables of changed spheres. See structure below.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Table Structure"',title:'"Table','Structure"':!0},"{\n    {\n        center = vec3,  --The sphere's position\n        radius = number --The sphere's size.\n    }\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getlegacycreativeworld"},"getLegacyCreativeWorld"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.world.getLegacyCreativeWorld()\n")),(0,l.kt)("code",null,"Server-Only")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"Gets a previously saved creative world."),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," world "),"]",": The world (id 0) if it exists in the database or nil.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadworld"},"loadWorld"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.world.loadWorld( world )\n")),(0,l.kt)("code",null,"Server-Only")," ",(0,l.kt)("br",null),(0,l.kt)("p",null,"Loads a previously created world. ",(0,l.kt)("br",null),"\nCan only be called from inside the Game script environment."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"world")," [",(0,l.kt)("strong",null," world "),"]: The world.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," bool "),"]",": Whether the world was loaded successfully or not.")),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);