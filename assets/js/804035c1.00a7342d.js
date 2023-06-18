"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[6611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:4,title:"Uuid",hide_title:!0,"sidebar-label":"Uuid"},l=void 0,u={unversionedId:"Terrain-Script-Environment/Userdata/Uuid",id:"Terrain-Script-Environment/Userdata/Uuid",title:"Uuid",description:"Uuid",source:"@site/docs/Terrain-Script-Environment/Userdata/Uuid.md",sourceDirName:"Terrain-Script-Environment/Userdata",slug:"/Terrain-Script-Environment/Userdata/Uuid",permalink:"/docs/Terrain-Script-Environment/Userdata/Uuid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Terrain-Script-Environment/Userdata/Uuid.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Uuid",hide_title:!0,"sidebar-label":"Uuid"},sidebar:"tutorialSidebar",previous:{title:"Quat",permalink:"/docs/Terrain-Script-Environment/Userdata/Quat"},next:{title:"Vec3",permalink:"/docs/Terrain-Script-Environment/Userdata/Vec3"}},o={},s=[{value:"Uuid",id:"uuid",level:2},{value:"Functions",id:"functions",level:2},{value:"isNil",id:"isnil",level:3}],c={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"uuid"},"Uuid"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.uuid"},"sm.uuid")),(0,i.kt)("p",null,"A userdata object representing a ",(0,i.kt)("strong",null,"uuid"),"."),(0,i.kt)("strong",null,"Operations:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operation"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Uuid")," == ",(0,i.kt)("code",null,"Uuid")),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if two uuids are equal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tostring( ",(0,i.kt)("code",null,"Uuid")," )"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the uuid as a string.")))),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"isnil"},"isNil"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"uuid:isNil()\n")),(0,i.kt)("code",null,"Server-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Returns whether the uuid is nil {00000000-0000-0000-0000-000000000000}."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"uuid")," [",(0,i.kt)("strong",null," uuid "),"]: The uuid.")),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," bool "),"]",": Whether the UUID is a nil UUID or not.")),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);