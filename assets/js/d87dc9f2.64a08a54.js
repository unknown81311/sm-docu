"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[5273],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=s(n),d=i,k=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(k,a(a({ref:e},c),{},{components:n})):r.createElement(k,a({ref:e},c))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,a=new Array(l);a[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[p]="string"==typeof t?t:i,a[1]=u;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5199:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const l={sidebar_position:47,title:"sm.unit",hide_title:!0,"sidebar-label":"sm.unit"},a=void 0,u={unversionedId:"Game-Script-Environment/Static-Functions/sm.unit",id:"Game-Script-Environment/Static-Functions/sm.unit",title:"sm.unit",description:"sm.unit",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.unit.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.unit",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.unit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Game-Script-Environment/Static-Functions/sm.unit.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,title:"sm.unit",hide_title:!0,"sidebar-label":"sm.unit"},sidebar:"tutorialSidebar",previous:{title:"sm.tool",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.tool"},next:{title:"sm.util",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.util"}},o={},s=[{value:"sm.unit",id:"smunit",level:2},{value:"Functions",id:"functions",level:2},{value:"createUnit",id:"createunit",level:3},{value:"getAllUnits",id:"getallunits",level:3}],c={toc:s},p="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"smunit"},"sm.unit"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Associated object type:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Unit"},"Unit")),(0,i.kt)("p",null,"Unit creation and management."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createunit"},"createUnit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.unit.createUnit( uuid, feetPos, yaw, data, pitch )\n")),(0,i.kt)("code",null,"Server-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Creates a new unit."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"uuid")," [",(0,i.kt)("strong",null," uuid "),"]: The character type uuid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"feetPos")," [",(0,i.kt)("strong",null," vec3 "),"]: The feet position of the unit, at the spawn position."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"yaw")," [",(0,i.kt)("strong",null," number "),"]: The initial yaw. Defaults to 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"data")," [",(0,i.kt)("strong",null," any "),"]: Extra parameters for the unit. Optional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"pitch")," [",(0,i.kt)("strong",null," number "),"]: The initial pitch. Defaults to 0.")),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," unit "),"]",": The created unit.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getallunits"},"getAllUnits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.unit.getAllUnits()\n")),(0,i.kt)("code",null,"Server-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Returns a table of all units in the world."),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," table "),"]",": The table of units.")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);