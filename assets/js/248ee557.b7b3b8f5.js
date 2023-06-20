"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[9522],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var l=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=l.createContext({}),s=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=s(n),k=i,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||r;return n?l.createElement(m,a(a({ref:e},p),{},{components:n})):l.createElement(m,a({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=k;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[c]="string"==typeof t?t:i,a[1]=u;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var l=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3,title:"BlueprintVisualization",hide_title:!0,"sidebar-label":"BlueprintVisualization"},a=void 0,u={unversionedId:"Game-Script-Environment/Userdata/BlueprintVisualization",id:"Game-Script-Environment/Userdata/BlueprintVisualization",title:"BlueprintVisualization",description:"BlueprintVisualization",source:"@site/docs/Game-Script-Environment/Userdata/BlueprintVisualization.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/BlueprintVisualization",permalink:"/docs/Game-Script-Environment/Userdata/BlueprintVisualization",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"BlueprintVisualization",hide_title:!0,"sidebar-label":"BlueprintVisualization"},sidebar:"tutorialSidebar",previous:{title:"AreaTrigger",permalink:"/docs/Game-Script-Environment/Userdata/AreaTrigger"},next:{title:"Body",permalink:"/docs/Game-Script-Environment/Userdata/Body"}},o={},s=[{value:"BlueprintVisualization",id:"blueprintvisualization",level:2},{value:"Functions",id:"functions",level:2},{value:"destroy",id:"destroy",level:3},{value:"setPosition",id:"setposition",level:3},{value:"setRotation",id:"setrotation",level:3},{value:"setScale",id:"setscale",level:3},{value:"updateBuilderGuide",id:"updatebuilderguide",level:3}],p={toc:s},c="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(c,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"blueprintvisualization"},"BlueprintVisualization"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.visualization"},"sm.visualization")),(0,i.kt)("p",null,"A userdata object representing a ",(0,i.kt)("strong",null,"blueprint visualization"),"."),(0,i.kt)("strong",null,"Operations:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operation"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"BlueprintVisualization")," == ",(0,i.kt)("code",null,"BlueprintVisualization")),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,i.kt)("code",null,"BlueprintVisualization")," refer to the same ",(0,i.kt)("code",null,"BlueprintVisualization"),".")))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"destroy"},"destroy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"blueprintVisualization:destroy()\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Destroys a blueprint visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"blueprintVisualization")," [",(0,i.kt)("strong",null," blueprintVisualization "),"]: The blueprint visualization.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setposition"},"setPosition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"blueprintVisualization:setPosition( position )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Sets the world position of a blueprint visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"blueprintVisualization")," [",(0,i.kt)("strong",null," blueprintVisualization "),"]: The blueprint visualization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"position")," [",(0,i.kt)("strong",null," vec3 "),"]: The world position.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setrotation"},"setRotation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"blueprintVisualization:setRotation( rotation )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Sets the rotation of a blueprint visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"blueprintVisualization")," [",(0,i.kt)("strong",null," blueprintVisualization "),"]: The blueprint visualization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"rotation")," [",(0,i.kt)("strong",null," quat "),"]: The rotation.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setscale"},"setScale"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"blueprintVisualization:setScale( scale )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Sets the scale of a blueprint visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"blueprintVisualization")," [",(0,i.kt)("strong",null," blueprintVisualization "),"]: The blueprint visualization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"scale")," [",(0,i.kt)("strong",null," vec3 "),"]: The scale.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatebuilderguide"},"updateBuilderGuide"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"blueprintVisualization:updateBuilderGuide()\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Updates the state of a builder guide ",(0,i.kt)("code",null,"BlueprintVisualization"),". ",(0,i.kt)("br",null),"\nShould be called whenever the root ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Shape"},"Shape")," of the builder guide has changed."),(0,i.kt)("p",null,"For performance reasons, this should not be called every tick."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"blueprintVisualization")," [",(0,i.kt)("strong",null," blueprintVisualization "),"]: The blueprint visualization.")),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);