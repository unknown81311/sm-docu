"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[5653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=l.createContext({}),g=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=g(e.components);return l.createElement(u.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=g(r),d=n,p=k["".concat(u,".").concat(d)]||k[d]||c[d]||a;return r?l.createElement(p,i(i({ref:t},s),{},{components:r})):l.createElement(p,i({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[k]="string"==typeof e?e:n,i[1]=o;for(var g=2;g<a;g++)i[g]=r[g];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var l=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2,title:"AreaTrigger",hide_title:!0,"sidebar-label":"AreaTrigger"},i=void 0,o={unversionedId:"Game-Script-Environment/Userdata/AreaTrigger",id:"Game-Script-Environment/Userdata/AreaTrigger",title:"AreaTrigger",description:"AreaTrigger",source:"@site/docs/Game-Script-Environment/Userdata/AreaTrigger.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/AreaTrigger",permalink:"/docs/Game-Script-Environment/Userdata/AreaTrigger",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"AreaTrigger",hide_title:!0,"sidebar-label":"AreaTrigger"},sidebar:"tutorialSidebar",previous:{title:"AiState",permalink:"/docs/Game-Script-Environment/Userdata/AiState"},next:{title:"BlueprintVisualization",permalink:"/docs/Game-Script-Environment/Userdata/BlueprintVisualization"}},u={},g=[{value:"AreaTrigger",id:"areatrigger",level:2},{value:"Functions",id:"functions",level:2},{value:"bindOnEnter",id:"bindonenter",level:3},{value:"bindOnExit",id:"bindonexit",level:3},{value:"bindOnStay",id:"bindonstay",level:3},{value:"bindOnProjectile",id:"bindonprojectile",level:3},{value:"getContents",id:"getcontents",level:3},{value:"getHostInteractable",id:"gethostinteractable",level:3},{value:"getId",id:"getid",level:3},{value:"getShapes",id:"getshapes",level:3},{value:"getSize",id:"getsize",level:3},{value:"getUserData",id:"getuserdata",level:3},{value:"getWorldMax",id:"getworldmax",level:3},{value:"getWorldMin",id:"getworldmin",level:3},{value:"getWorldPosition",id:"getworldposition",level:3},{value:"getWorldRotation",id:"getworldrotation",level:3},{value:"hasVoxelTerrainContact",id:"hasvoxelterraincontact",level:3},{value:"setShapeDetection",id:"setshapedetection",level:3},{value:"setSize",id:"setsize",level:3},{value:"setWorldPosition",id:"setworldposition",level:3},{value:"setWorldRotation",id:"setworldrotation",level:3}],s={toc:g},k="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"areatrigger"},"AreaTrigger"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.areaTrigger"},"sm.areaTrigger")),(0,n.kt)("p",null,"A userdata object representing an ",(0,n.kt)("strong",null,"area trigger")," in the game."),(0,n.kt)("strong",null,"Values:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"id")," [",(0,n.kt)("strong",null," int "),"] ",(0,n.kt)("br",null),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Get"),": The ID of the ",(0,n.kt)("code",null,"AreaTrigger"),".")))),(0,n.kt)("strong",null,"Operations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Operation"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"AreaTrigger")," == ",(0,n.kt)("code",null,"AreaTrigger")),(0,n.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,n.kt)("code",null,"AreaTrigger")," refer to the same ",(0,n.kt)("code",null,"AreaTrigger"),".")))),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"bindonenter"},"bindOnEnter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:bindOnEnter( callback, object = nil )\n")),(0,n.kt)("p",null,"Binds an area trigger's ",(0,n.kt)("code",null,"onEnter")," event to a custom callback. ",(0,n.kt)("br",null)," ",(0,n.kt)("br",null),"\nThe ",(0,n.kt)("code",null,"onEnter")," event is triggered when an object enters the trigger area."),(0,n.kt)("p",null,"The callback receives:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"self")," [",(0,n.kt)("strong",null," table "),"]: The class instance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"trigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The area trigger instance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"results")," [",(0,n.kt)("strong",null," table "),"]: A table of objects that entered the trigger area.")),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"callback")," [",(0,n.kt)("strong",null," string "),"]:  The name of the Lua function to bind."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"object")," [",(0,n.kt)("strong",null," table "),"]: The object that will receive the callback. (optional)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},'MyClass = class()\n\nfunction MyClass.server_onCreate( self )\n    local position = self.shape:getWorldPosition()\n    local size = sm.vec3.new( 1, 1, 1 )\n\n    self.myTrigger = sm.areaTrigger.createBox( size, position )\n    self.myTrigger:bindOnEnter( "onEnter" )\nend\n\nfunction MyClass.onEnter( self, trigger, results )\n    for k, object in ipairs( results ) do\n        print( object, "just entered" )\n    end\nend\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"bindonexit"},"bindOnExit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:bindOnExit( callback, object = nil )\n")),(0,n.kt)("p",null,"Binds an area trigger's ",(0,n.kt)("code",null,"onExit")," event to a custom callback. ",(0,n.kt)("br",null),"\nThe ",(0,n.kt)("code",null,"onExit")," event is triggered when an object leaves the trigger area."),(0,n.kt)("p",null,"The callback receives:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"self")," [",(0,n.kt)("strong",null," table "),"]: The class instance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"trigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The area trigger instance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"results")," [",(0,n.kt)("strong",null," table "),"]: A table of objects that left the trigger area.")),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"callback")," [",(0,n.kt)("strong",null," string "),"]:  The name of the Lua function to bind."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"object")," [",(0,n.kt)("strong",null," table "),"]: The object that will receive the callback. (optional)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},'MyClass = class()\n\nfunction MyClass.server_onCreate( self )\n    local position = self.shape:getWorldPosition()\n    local size = sm.vec3.new( 1, 1, 1 )\n\n    self.myTrigger = sm.areaTrigger.createBox( size, position )\n    self.myTrigger:bindOnExit( "onExit" )\nend\n\nfunction MyClass.onExit( self, trigger, results )\n    for k, object in ipairs( results ) do\n        print( object, "just left" )\n    end\nend\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"bindonstay"},"bindOnStay"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:bindOnStay( callback, object = nil )\n")),(0,n.kt)("p",null,"Binds an area trigger's ",(0,n.kt)("code",null,"onStay")," event to a custom callback. ",(0,n.kt)("br",null),"\nThe ",(0,n.kt)("code",null,"onStay")," event is triggered every tick as long as an object is staying inside of the trigger area."),(0,n.kt)("p",null,"The callback receives:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"self")," [",(0,n.kt)("strong",null," table "),"]: The class instance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"trigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The area trigger instance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"results")," [",(0,n.kt)("strong",null," table "),"]: A table of objects that are in the trigger area.")),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"callback")," [",(0,n.kt)("strong",null," string "),"]:  The name of the Lua function to bind."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"object")," [",(0,n.kt)("strong",null," table "),"]: The object that will receive the callback. (optional)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Usage"',title:'"Example','Usage"':!0},'MyClass = class()\n\nfunction MyClass.server_onCreate( self )\n    local position = self.shape:getWorldPosition()\n    local size = sm.vec3.new( 1, 1, 1 )\n\n    self.myTrigger = sm.areaTrigger.createBox( size, position )\n    self.myTrigger:bindOnExit( "onStay" )\nend\n\nfunction MyClass.onStay( self, trigger, results )\n    print( #results, "objects inside trigger area" )\nend\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"bindonprojectile"},"bindOnProjectile"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:bindOnProjectile( callback, object = nil )\n")),(0,n.kt)("p",null,"Binds an area trigger's ",(0,n.kt)("code",null,"onProjectile")," event to a custom callback. ",(0,n.kt)("br",null),"\nThe ",(0,n.kt)("code",null,"onProjectile")," event is triggered if a projectile collides with the trigger area."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"callback")," [",(0,n.kt)("strong",null," string "),"]:  The name of the Lua function to bind."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"object")," [",(0,n.kt)("strong",null," table "),"]: The object that will receive the callback. (optional)")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getcontents"},"getContents"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getContents()\n")),(0,n.kt)("p",null,"Gets the contents of the area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," table "),"]",": The objects inside the trigger area.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gethostinteractable"},"getHostInteractable"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getHostInteractable()\n")),(0,n.kt)("p",null,"Returns the attached host ",(0,n.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Interactable"},"interactable"),"."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," interactable "),"]",": The area trigger's host interactable.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getid"},"getId"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getId()\n")),(0,n.kt)("p",null,"Returns the id of the area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," int "),"]",": The area trigger's id.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getshapes"},"getShapes"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getShapes()\n")),(0,n.kt)("p",null,"Returns the shapes inside the trigger area."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," table "),"]",": The shapes inside the trigger area.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getsize"},"getSize"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getSize()\n")),(0,n.kt)("p",null,"Returns the size of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," vec3 "),"]",": The area trigger's size.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getuserdata"},"getUserData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getUserData()\n")),(0,n.kt)("p",null,"Returns the userdata set on the area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," table "),"]",": The area trigger's userdata.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getworldmax"},"getWorldMax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getWorldMax()\n")),(0,n.kt)("p",null,"Returns the world max corner position of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," vec3 "),"]",": The area trigger's max corner position.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getworldmin"},"getWorldMin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getWorldMin()\n")),(0,n.kt)("p",null,"Returns the world min corner position of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," vec3 "),"]",": The area trigger's min corner position.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getworldposition"},"getWorldPosition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getWorldPosition()\n")),(0,n.kt)("p",null,"Returns the world position of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," vec3 "),"]",": The area trigger's world position.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getworldrotation"},"getWorldRotation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:getWorldRotation()\n")),(0,n.kt)("p",null,"Returns the world rotation of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," quat "),"]",": The area trigger's world rotation.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hasvoxelterraincontact"},"hasVoxelTerrainContact"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:hasVoxelTerrainContact()\n")),(0,n.kt)("p",null,"Returns true if the AreaTrigger is in contact with destructable terrain."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger.")),(0,n.kt)("strong",null,"Returns:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",null," bool "),"]",": Destructable terrain contact.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setshapedetection"},"setShapeDetection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:setShapeDetection( detectShapes )\n")),(0,n.kt)("p",null,"Shape detection is off by default.\nWhen set to true the area trigger can calculate which shapes are inside of the\ntrigger area with a call to ",(0,n.kt)("a",{parentName:"p",href:"#getShapes"},"AreaTrigger:getShapes()")),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"detectShapes")," [",(0,n.kt)("strong",null," bool "),"]: Whether shape detection is on or off.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setsize"},"setSize"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:setSize( size )\n")),(0,n.kt)("p",null,"Sets the new size of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"size")," [",(0,n.kt)("strong",null," vec3 "),"]: The area trigger's new size.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setworldposition"},"setWorldPosition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:setWorldPosition( position )\n")),(0,n.kt)("p",null,"Sets the new world position of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"position")," [",(0,n.kt)("strong",null," vec3 "),"]: The area trigger's new world position.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setworldrotation"},"setWorldRotation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"AreaTrigger:setWorldRotation( rotation )\n")),(0,n.kt)("p",null,"Sets the new world rotation of an area trigger."),(0,n.kt)("strong",null,"Arguments:")," ",(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"AreaTrigger")," [",(0,n.kt)("strong",null," AreaTrigger "),"]: The AreaTrigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"rotation")," [",(0,n.kt)("strong",null," quat "),"]: The area trigger's new world rotation.")),(0,n.kt)("hr",null))}c.isMDXComponent=!0}}]);