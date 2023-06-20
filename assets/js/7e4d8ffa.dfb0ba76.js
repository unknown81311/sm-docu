"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[926],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>d});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function c(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),o=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):c(c({},e),t)),l},s=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},b="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),b=o(l),k=r,d=b["".concat(i,".").concat(k)]||b[k]||p[k]||a;return l?n.createElement(d,c(c({ref:e},s),{},{components:l})):n.createElement(d,c({ref:e},s))}));function d(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,c=new Array(a);c[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[b]="string"==typeof t?t:r,c[1]=u;for(var o=2;o<a;o++)c[o]=l[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},8151:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var n=l(7462),r=(l(7294),l(3905));const a={sidebar_position:23,title:"ScriptableObject",hide_title:!0,"sidebar-label":"ScriptableObject"},c=void 0,u={unversionedId:"Game-Script-Environment/Userdata/ScriptableObject",id:"Game-Script-Environment/Userdata/ScriptableObject",title:"ScriptableObject",description:"ScriptableObject",source:"@site/docs/Game-Script-Environment/Userdata/ScriptableObject.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/ScriptableObject",permalink:"/docs/Game-Script-Environment/Userdata/ScriptableObject",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"ScriptableObject",hide_title:!0,"sidebar-label":"ScriptableObject"},sidebar:"tutorialSidebar",previous:{title:"RaycastResult",permalink:"/docs/Game-Script-Environment/Userdata/RaycastResult"},next:{title:"Shape",permalink:"/docs/Game-Script-Environment/Userdata/Shape"}},i={},o=[{value:"ScriptableObject",id:"scriptableobject",level:2},{value:"Functions",id:"functions",level:2},{value:"destroy",id:"destroy",level:3},{value:"getClientPublicData",id:"getclientpublicdata",level:3},{value:"getId",id:"getid",level:3},{value:"getPublicData",id:"getpublicdata",level:3},{value:"getWorld",id:"getworld",level:3},{value:"setClientPublicData",id:"setclientpublicdata",level:3},{value:"setPublicData",id:"setpublicdata",level:3}],s={toc:o},b="wrapper";function p(t){let{components:e,...l}=t;return(0,r.kt)(b,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"scriptableobject"},"ScriptableObject"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.scriptableObject"},"sm.scriptableObject")),(0,r.kt)("p",null,"A userdata object representing a ",(0,r.kt)("strong",null,"scriptable object"),"."),(0,r.kt)("strong",null,"Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"clientPublicData")," [",(0,r.kt)("strong",null," table "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": (Client-Only) The objects's client public data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Set"),": (Client-Only) Sets the objects's client public data.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"id")," [",(0,r.kt)("strong",null," int "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The object's id.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"publicData")," [",(0,r.kt)("strong",null," table "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": (Server-Only) The object's server public data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Set"),": (Server-Only) Sets the object's server public data.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"world")," [",(0,r.kt)("strong",null," world "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The object's world.")))),(0,r.kt)("strong",null,"Operations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"ScriptableObject")," == ",(0,r.kt)("code",null,"ScriptableObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,r.kt)("code",null,"ScriptableObject")," refer to the same ",(0,r.kt)("code",null,"ScriptableObject"),".")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"scriptableObject:destroy()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Destroys the object."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"scriptableObject")," [",(0,r.kt)("strong",null," scriptableObject "),"]: The scriptable object.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getclientpublicdata"},"getClientPublicData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"scriptableObject:getClientPublicData()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the object's client public data."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"scriptableObject")," [",(0,r.kt)("strong",null," scriptableObject "),"]: The scriptable object.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," table "),"]",": The objects's client public data.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getid"},"getId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"scriptableObject:getId()\n")),(0,r.kt)("p",null,"Returns the object's id."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"scriptableObject")," [",(0,r.kt)("strong",null," scriptableObject "),"]: The scriptable object.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The objects's id.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpublicdata"},"getPublicData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"scriptableObject:getPublicData()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the object's server public data."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"scriptableObject")," [",(0,r.kt)("strong",null," scriptableObject "),"]: The scriptable object.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," table "),"]",": The objects's server public data.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getworld"},"getWorld"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"scriptableObject:getWorld()\n")),(0,r.kt)("p",null,"Returns the object's world."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"scriptableObject")," [",(0,r.kt)("strong",null," scriptableObject "),"]: The scriptable object.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," world "),"]",": The objects's world.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setclientpublicdata"},"setClientPublicData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"scriptableObject:setClientPublicData( data )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets the object's client public data."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"scriptableObject")," [",(0,r.kt)("strong",null," scriptableObject "),"]: The scriptable object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"data")," [",(0,r.kt)("strong",null," table "),"]: The data to set.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setpublicdata"},"setPublicData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"scriptableObject:setPublicData( data )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets the object's server public data."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"scriptableObject")," [",(0,r.kt)("strong",null," scriptableObject "),"]: The scriptable object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"data")," [",(0,r.kt)("strong",null," table "),"]: The data to set.")),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);