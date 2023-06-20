"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[2393],{3905:(t,l,e)=>{e.d(l,{Zo:()=>s,kt:()=>d});var n=e(7294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function o(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?o(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function u(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),i=function(t){var l=n.useContext(p),e=l;return t&&(e="function"==typeof t?t(l):a(a({},l),t)),e},s=function(t){var l=i(t.components);return n.createElement(p.Provider,{value:l},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),k=i(e),c=r,d=k["".concat(p,".").concat(c)]||k[c]||g[c]||o;return e?n.createElement(d,a(a({ref:l},s),{},{components:e})):n.createElement(d,a({ref:l},s))}));function d(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var o=e.length,a=new Array(o);a[0]=c;var u={};for(var p in l)hasOwnProperty.call(l,p)&&(u[p]=l[p]);u.originalType=t,u[k]="string"==typeof t?t:r,a[1]=u;for(var i=2;i<o;i++)a[i]=e[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},4958:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=e(7462),r=(e(7294),e(3905));const o={sidebar_position:20,title:"Portal",hide_title:!0,"sidebar-label":"Portal"},a=void 0,u={unversionedId:"Game-Script-Environment/Userdata/Portal",id:"Game-Script-Environment/Userdata/Portal",title:"Portal",description:"Portal",source:"@site/docs/Game-Script-Environment/Userdata/Portal.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/Portal",permalink:"/docs/Game-Script-Environment/Userdata/Portal",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Portal",hide_title:!0,"sidebar-label":"Portal"},sidebar:"tutorialSidebar",previous:{title:"Player",permalink:"/docs/Game-Script-Environment/Userdata/Player"},next:{title:"Quat",permalink:"/docs/Game-Script-Environment/Userdata/Quat"}},p={},i=[{value:"Portal",id:"portal",level:2},{value:"Functions",id:"functions",level:2},{value:"getContentsA",id:"getcontentsa",level:3},{value:"getContentsB",id:"getcontentsb",level:3},{value:"getId",id:"getid",level:3},{value:"getPositionA",id:"getpositiona",level:3},{value:"getPositionB",id:"getpositionb",level:3},{value:"getRotationA",id:"getrotationa",level:3},{value:"getRotationB",id:"getrotationb",level:3},{value:"getWorldA",id:"getworlda",level:3},{value:"getWorldB",id:"getworldb",level:3},{value:"hasOpeningA",id:"hasopeninga",level:3},{value:"hasOpeningB",id:"hasopeningb",level:3},{value:"setOpeningA",id:"setopeninga",level:3},{value:"setOpeningB",id:"setopeningb",level:3},{value:"transferAToB",id:"transferatob",level:3},{value:"transferBToA",id:"transferbtoa",level:3}],s={toc:i},k="wrapper";function g(t){let{components:l,...e}=t;return(0,r.kt)(k,(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"portal"},"Portal"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.portal"},"sm.portal")),(0,r.kt)("p",null,"A userdata object representing a ",(0,r.kt)("strong",null,"portal")," in the game."),(0,r.kt)("strong",null,"Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"id")," [",(0,r.kt)("strong",null," int "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": (Server-Only) The portal's id.")))),(0,r.kt)("strong",null,"Operations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Portal")," == ",(0,r.kt)("code",null,"Portal")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,r.kt)("code",null,"Portal")," refer to the same ",(0,r.kt)("code",null,"Portal"),".")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"getcontentsa"},"getContentsA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getContentsA()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the contents of opening A."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," table "),"]",": The table of characters and bodies in opening A.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcontentsb"},"getContentsB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getContentsB()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the contents of opening B."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," table "),"]",": The table of characters and bodies in opening B.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getid"},"getId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getId()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the portal's id."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The portal's id.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpositiona"},"getPositionA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getPositionA()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the position of portal opening A."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The position of opening A.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getpositionb"},"getPositionB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getPositionB()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the position of portal opening B."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The position of opening B.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getrotationa"},"getRotationA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getRotationA()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the rotation of portal opening A."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," quat "),"]",": The rotation of opening A.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getrotationb"},"getRotationB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getRotationB()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the rotation of portal opening B."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," quat "),"]",": The rotation of opening B.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getworlda"},"getWorldA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getWorldA()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the world of portal opening A."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," world "),"]",": The world of opening A.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getworldb"},"getWorldB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:getWorldB()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the world of portal opening B."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," world "),"]",": The world of opening B.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hasopeninga"},"hasOpeningA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:hasOpeningA()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns whether the portal has an opening A."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the portal has an opening A or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hasopeningb"},"hasOpeningB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:hasOpeningB()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns whether the portal has an opening B."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the portal has an opening B or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setopeninga"},"setOpeningA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:setOpeningA( position, rotation )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets the portal's opening A."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"position")," [",(0,r.kt)("strong",null," vec3 "),"]: The opening position."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"rotation")," [",(0,r.kt)("strong",null," quat "),"]: The the opening rotation.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setopeningb"},"setOpeningB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:setOpeningB( position, rotation )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets the portal's opening B."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"position")," [",(0,r.kt)("strong",null," vec3 "),"]: The opening position."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"rotation")," [",(0,r.kt)("strong",null," quat "),"]: The the opening rotation.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transferatob"},"transferAToB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:transferAToB()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Transfers objects inside opening A to opening B."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the transfer was successful or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transferbtoa"},"transferBToA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"portal:transferBToA()\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Transfers objects inside opening B to opening A."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"portal")," [",(0,r.kt)("strong",null," portal "),"]: The portal.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the transfer was successful or not.")),(0,r.kt)("hr",null))}g.isMDXComponent=!0}}]);