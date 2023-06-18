"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[1037],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),s=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return l.createElement(i.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),k=s(n),p=r,d=k["".concat(i,".").concat(p)]||k[p]||m[p]||a;return n?l.createElement(d,o(o({ref:e},c),{},{components:n})):l.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[k]="string"==typeof t?t:r,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9988:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:8,title:"Container",hide_title:!0,"sidebar-label":"Container"},o=void 0,u={unversionedId:"Game-Script-Environment/Userdata/Container",id:"Game-Script-Environment/Userdata/Container",title:"Container",description:"Container",source:"@site/docs/Game-Script-Environment/Userdata/Container.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/Container",permalink:"/docs/Game-Script-Environment/Userdata/Container",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Game-Script-Environment/Userdata/Container.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Container",hide_title:!0,"sidebar-label":"Container"},sidebar:"tutorialSidebar",previous:{title:"Color",permalink:"/docs/Game-Script-Environment/Userdata/Color"},next:{title:"CullSphereGroup",permalink:"/docs/Game-Script-Environment/Userdata/CullSphereGroup"}},i={},s=[{value:"Container",id:"container",level:2},{value:"Functions",id:"functions",level:2},{value:"canCollect",id:"cancollect",level:3},{value:"canSpend",id:"canspend",level:3},{value:"getAllowCollect",id:"getallowcollect",level:3},{value:"getAllowSpend",id:"getallowspend",level:3},{value:"getItem",id:"getitem",level:3},{value:"getMaxStackSize",id:"getmaxstacksize",level:3},{value:"getSize",id:"getsize",level:3},{value:"hasChanged",id:"haschanged",level:3},{value:"isEmpty",id:"isempty",level:3},{value:"setAllowCollect",id:"setallowcollect",level:3},{value:"setAllowSpend",id:"setallowspend",level:3},{value:"setFilters",id:"setfilters",level:3},{value:"setItem",id:"setitem",level:3}],c={toc:s},k="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"container"},"Container"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.container"},"sm.container")),(0,r.kt)("p",null,"A userdata object representing a ",(0,r.kt)("strong",null,"container")," in the game."),(0,r.kt)("strong",null,"Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"allowCollect")," [",(0,r.kt)("strong",null," bool "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": (Server-Only) Whether the container can collect items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Set"),": (Server-Only) Sets whether the container can collect items or not.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"allowSpend")," [",(0,r.kt)("strong",null," bool "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": (Server-Only) Whether the container can spend items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Set"),": (Server-Only) Sets whether the container can spend items or not.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"id")," [",(0,r.kt)("strong",null," int "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The id of the container.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"size")," [",(0,r.kt)("strong",null," int "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The number of slots in the container.")))),(0,r.kt)("strong",null,"Operations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Container")," == ",(0,r.kt)("code",null,"Container")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,r.kt)("code",null,"Container")," refer to the same ",(0,r.kt)("code",null,"Container"),".")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"cancollect"},"canCollect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:canCollect( itemUuid, quantity )\n")),(0,r.kt)("p",null,"Checks if ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.container#collect"},"sm.container.collect")," is allowed using the same parameters."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"itemUuid")," [",(0,r.kt)("strong",null," uuid "),"]: The uuid of the item."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"quantity")," [",(0,r.kt)("strong",null," int "),"]: The number of items.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the container can collect the item(s) or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canspend"},"canSpend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:canSpend( itemUuid, quantity )\n")),(0,r.kt)("p",null,"Checks if ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.container#spend"},"sm.container.spend")," is allowed using the same parameters."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"itemUuid")," [",(0,r.kt)("strong",null," uuid "),"]: The uuid of the item."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"quantity")," [",(0,r.kt)("strong",null," int "),"]: The number of items.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the container can spend the item(s) or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getallowcollect"},"getAllowCollect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:getAllowCollect()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns whether the container can collect items."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the container can collect items or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getallowspend"},"getAllowSpend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:getAllowSpend()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns whether the container can spend items."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the container can spend items or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getitem"},"getItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:getItem( slot )\n")),(0,r.kt)("p",null,"Returns a table containing item uuid, quantity (and instance id for tools) at the given slot."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"slot")," [",(0,r.kt)("strong",null," int "),"]: The slot.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," table "),"]",": The table containing item information (see table content below).")),(0,r.kt)("strong",null,"Table Content:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"uuid")," [",(0,r.kt)("strong",null," uuid "),"]: The item UUID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"instance")," [",(0,r.kt)("strong",null," int "),"]: The instance ID, if the item is a tool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"quantity")," [",(0,r.kt)("strong",null," int "),"]: The item amount.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmaxstacksize"},"getMaxStackSize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:getMaxStackSize()\n")),(0,r.kt)("p",null,"Returns the max stack size in the container."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The container's max stack size.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getsize"},"getSize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:getSize()\n")),(0,r.kt)("p",null,"Returns the number of slots in a container."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The size.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"haschanged"},"hasChanged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:hasChanged( tick )\n")),(0,r.kt)("p",null,"Returns true if the given tick is lower than the tick the container was last changed."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"tick")," [",(0,r.kt)("strong",null," int "),"]: The tick.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the container has changed or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isempty"},"isEmpty"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:isEmpty()\n")),(0,r.kt)("p",null,"Returns true if the container is empty."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the container is empty or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setallowcollect"},"setAllowCollect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:setAllowCollect( state )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets whether the container can collect items."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"state")," [",(0,r.kt)("strong",null," bool "),"]: Whether the container can collect items or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setallowspend"},"setAllowSpend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:setAllowSpend( state )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets whether the container can spend items."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"state")," [",(0,r.kt)("strong",null," bool "),"]: Whether the container can spend items or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setfilters"},"setFilters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:setFilters( filter )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets item filters."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"filter")," [",(0,r.kt)("strong",null," table "),"]: The table of allowed item uuids.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setitem"},"setItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"container:setItem( slot, itemUuid, quantity, instance )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets the number of items stacked in a given container slot."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"container")," [",(0,r.kt)("strong",null," container "),"]: The container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"slot")," [",(0,r.kt)("strong",null," table "),"]: The slot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"itemUuid")," [",(0,r.kt)("strong",null," table "),"]: The uuid of the item."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"quantity")," [",(0,r.kt)("strong",null," table "),"]: The number of items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"instance")," [",(0,r.kt)("strong",null," table "),"]: The instance id, if the item is a tool. (Optional)")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the action was successful or not.")),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);