"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[3341],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>d});var l=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var u=l.createContext({}),s=function(t){var n=l.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},c=function(t){var n=s(t.components);return l.createElement(u.Provider,{value:n},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),k=s(e),p=a,d=k["".concat(u,".").concat(p)]||k[p]||m[p]||r;return e?l.createElement(d,o(o({ref:n},c),{},{components:e})):l.createElement(d,o({ref:n},c))}));function d(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,o=new Array(r);o[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=t,i[k]="string"==typeof t?t:a,o[1]=i;for(var s=2;s<r;s++)o[s]=e[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,e)}p.displayName="MDXCreateElement"},1912:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=e(7462),a=(e(7294),e(3905));const r={sidebar_position:14,title:"sm.container",hide_title:!0,"sidebar-label":"sm.container"},o=void 0,i={unversionedId:"Game-Script-Environment/Static-Functions/sm.container",id:"Game-Script-Environment/Static-Functions/sm.container",title:"sm.container",description:"sm.container",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.container.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.container",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.container",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"sm.container",hide_title:!0,"sidebar-label":"sm.container"},sidebar:"tutorialSidebar",previous:{title:"sm.construction",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.construction"},next:{title:"sm.creation",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.creation"}},u={},s=[{value:"sm.container",id:"smcontainer",level:2},{value:"Functions",id:"functions",level:2},{value:"abortTransaction",id:"aborttransaction",level:3},{value:"beginTransaction",id:"begintransaction",level:3},{value:"collect",id:"collect",level:3},{value:"collectToSlot",id:"collecttoslot",level:3},{value:"endTransaction",id:"endtransaction",level:3},{value:"getFirstItem",id:"getfirstitem",level:3},{value:"itemUuid",id:"itemuuid",level:3},{value:"moveAll",id:"moveall",level:3},{value:"moveAllToCarryContainer",id:"movealltocarrycontainer",level:3},{value:"quantity",id:"quantity",level:3},{value:"spend",id:"spend",level:3},{value:"spendFromSlot",id:"spendfromslot",level:3},{value:"swap",id:"swap",level:3},{value:"totalQuantity",id:"totalquantity",level:3}],c={toc:s},k="wrapper";function m(t){let{components:n,...e}=t;return(0,a.kt)(k,(0,l.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"smcontainer"},"sm.container"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Associated object type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Container"},"Container"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",null,"container")," keeps track of items and stores them in slots. ",(0,a.kt)("br",null),"\nEach slot holds one item type and a quantity, if the item is stackable."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"aborttransaction"},"abortTransaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.abortTransaction()\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Aborts a transaction."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"begintransaction"},"beginTransaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.beginTransaction()\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Starts a new transaction shared across all containers. ",(0,a.kt)("br",null),"\nA transaction is a collection of all changes of container items that will be collected and processed."),(0,a.kt)("p",null,"A transaction must be ended with ",(0,a.kt)("a",{parentName:"p",href:"#endTransaction"},"sm.container.endTransaction"),"."),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," bool "),"]",": Whether the transaction was successfully started or not.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"collect"},"collect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.collect( container, itemUuid, quantity, mustCollectAll )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Adds a quantity of a given item to a container."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A transaction must be ",(0,a.kt)("a",{parentName:"p",href:"#begintransaction"},"started")," before using this.")),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"itemUuid")," [",(0,a.kt)("strong",null," uuid "),"]: The item uuid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"quantity")," [",(0,a.kt)("strong",null," int "),"]: The item amount."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"mustCollectAll")," [",(0,a.kt)("strong",null," bool "),"]: Whether all items must be collected to make the transaction valid. Defaults to true.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," int "),"]",": The amount of collected items.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"collecttoslot"},"collectToSlot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.collectToSlot( container, slot, itemUuid, quantity, mustCollectAll )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Performs an ",(0,a.kt)("a",{parentName:"p",href:"#collect"},"sm.container.collect")," operation on a specific slot."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A transaction must be ",(0,a.kt)("a",{parentName:"p",href:"#begintransaction"},"started")," before using this.")),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"slot")," [",(0,a.kt)("strong",null," int "),"]: The slot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"itemUuid")," [",(0,a.kt)("strong",null," uuid "),"]: The item uuid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"quantity")," [",(0,a.kt)("strong",null," int "),"]: The item amount."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"mustCollectAll")," [",(0,a.kt)("strong",null," bool "),"]: Whether all items must be collected to make the transaction valid. Defaults to true.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," int "),"]",": The amount of collected items.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"endtransaction"},"endTransaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.endTransaction()\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Ends a transaction."),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," bool "),"]",": Whether the transaction was ended successfully or not.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getfirstitem"},"getFirstItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.getFirstItem( container )\n")),(0,a.kt)("p",null,"Returns a table containing item uuid, quantity (and instance id for tools) at the first available slot."),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," table "),"]",": The table containing the item data.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"itemuuid"},"itemUuid"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.itemUuid( container )\n")),(0,a.kt)("p",null,"Returns a table containing all item uuids in a container."),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," table "),"]",": The table containing the item uuids.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"moveall"},"moveAll"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.moveAll( container, container, moveAll )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Moves the content from one container to another."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A transaction must be ",(0,a.kt)("a",{parentName:"p",href:"#begintransaction"},"started")," before using this.")),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The source container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The target container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"moveAll")," [",(0,a.kt)("strong",null," bool "),"]: Whether all items are required to be movable.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"movealltocarrycontainer"},"moveAllToCarryContainer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.moveAllToCarryContainer( container, player, color )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Moves the content of input container to the player carry container and assigns the carry color."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A transaction must be ",(0,a.kt)("a",{parentName:"p",href:"#begintransaction"},"started")," before using this.")),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container to assign."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"player")," [",(0,a.kt)("strong",null," player "),"]: The player to receive the carry content and color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"color")," [",(0,a.kt)("strong",null," color "),"]: The color to assign.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"quantity"},"quantity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.quantity( container )\n")),(0,a.kt)("p",null,"Returns a table containing all item quantities in a container."),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," table "),"]",": The table of item quantities.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"spend"},"spend"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.spend( container, itemUuid, quantity, mustSpendAll )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Removes a quantity of a given item from a container."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A transaction must be ",(0,a.kt)("a",{parentName:"p",href:"#begintransaction"},"started")," before using this.")),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"itemUuid")," [",(0,a.kt)("strong",null," uuid "),"]: The item uuid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"quantity")," [",(0,a.kt)("strong",null," int "),"]: The item amount."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"mustSpendAll")," [",(0,a.kt)("strong",null," bool "),"]: True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," int "),"]",": The amount of successfully removed items.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"spendfromslot"},"spendFromSlot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.spendFromSlot( container, slot, itemUuid, quantity, mustSpendAll )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Performs an ",(0,a.kt)("a",{parentName:"p",href:"#spend"},"sm.container.spend")," operation on a specific slot."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A transaction must be ",(0,a.kt)("a",{parentName:"p",href:"#begintransaction"},"started")," before using this.")),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"slot")," [",(0,a.kt)("strong",null," int "),"]: The slot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"itemUuid")," [",(0,a.kt)("strong",null," uuid "),"]: The item uuid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"quantity")," [",(0,a.kt)("strong",null," int "),"]: The item amount."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"mustSpendAll")," [",(0,a.kt)("strong",null," bool "),"]: True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," int "),"]",": The amount of successfully removed items.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"swap"},"swap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.swap( container, container, sourceSlot, targetSlot )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Swaps two item slots."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A transaction must be ",(0,a.kt)("a",{parentName:"p",href:"#begintransaction"},"started")," before using this.")),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The first container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The second container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"sourceSlot")," [",(0,a.kt)("strong",null," int "),"]: The first slot."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"targetSlot")," [",(0,a.kt)("strong",null," int "),"]: The second slot.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," bool "),"]",": Whether the action was successful or not.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"totalquantity"},"totalQuantity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.container.totalQuantity( container, uuid )\n")),(0,a.kt)("p",null,"Returns the total number of a given item uuid in a container."),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"container")," [",(0,a.kt)("strong",null," container "),"]: The container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"uuid")," [",(0,a.kt)("strong",null," uuid "),"]: The item uuid.")),(0,a.kt)("strong",null,"Returns:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",null," int "),"]",": The quantity of the given item uuid.")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);