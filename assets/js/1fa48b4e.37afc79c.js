"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[2513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=u,k=m["".concat(o,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:u,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),u=(n(7294),n(3905));const a={sidebar_position:49,title:"sm.uuid",hide_title:!0,"sidebar-label":"sm.uuid"},l=void 0,i={unversionedId:"Game-Script-Environment/Static-Functions/sm.uuid",id:"Game-Script-Environment/Static-Functions/sm.uuid",title:"sm.uuid",description:"sm.uuid",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.uuid.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.uuid",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.uuid",draft:!1,tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,title:"sm.uuid",hide_title:!0,"sidebar-label":"sm.uuid"},sidebar:"tutorialSidebar",previous:{title:"sm.util",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.util"},next:{title:"sm.vec3",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.vec3"}},o={},s=[{value:"sm.uuid",id:"smuuid",level:2},{value:"Functions",id:"functions",level:2},{value:"generateNamed",id:"generatenamed",level:3},{value:"generateRandom",id:"generaterandom",level:3},{value:"getNil",id:"getnil",level:3},{value:"new",id:"new",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,u.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("br",null),(0,u.kt)("h2",{id:"smuuid"},"sm.uuid"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Associated object type:")," ",(0,u.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Uuid"},"Uuid")),(0,u.kt)("p",null,"A universally unique identifier (",(0,u.kt)("strong",null,"UUID"),") is a 128-bit number that can guarantee uniqueness across space and time."),(0,u.kt)("p",null,"To generate one, use ",(0,u.kt)("a",{parentName:"p",href:"#new"},"sm.uuid.new"),"."),(0,u.kt)("h2",{id:"functions"},"Functions"),(0,u.kt)("h3",{id:"generatenamed"},"generateNamed"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-lua"},"sm.uuid.generateNamed( namespace, name )\n")),(0,u.kt)("p",null,"Generates a named (version 5) uuid."),(0,u.kt)("strong",null,"Arguments:")," ",(0,u.kt)("br",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("code",null,"namespace")," [",(0,u.kt)("strong",null," uuid "),"]: A uuid namespace for the name. The namespace makes sure any equal name from different namespaces do not collide."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("code",null,"name")," [",(0,u.kt)("strong",null," string "),"]: A name, to generate a uuid from. Provided the same namespace and name, the uuid will be the same.")),(0,u.kt)("strong",null,"Returns:")," ",(0,u.kt)("br",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[",(0,u.kt)("strong",null," uuid "),"]",": The created uuid.")),(0,u.kt)("hr",null),(0,u.kt)("h3",{id:"generaterandom"},"generateRandom"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-lua"},"sm.uuid.generateRandom()\n")),(0,u.kt)("p",null,"Generates a random (version 4) uuid."),(0,u.kt)("strong",null,"Returns:")," ",(0,u.kt)("br",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[",(0,u.kt)("strong",null," uuid "),"]",": The generated uuid.")),(0,u.kt)("hr",null),(0,u.kt)("h3",{id:"getnil"},"getNil"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-lua"},"sm.uuid.getNil()\n")),(0,u.kt)("p",null,"Creates a nil uuid {00000000-0000-0000-0000-000000000000}."),(0,u.kt)("strong",null,"Returns:")," ",(0,u.kt)("br",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[",(0,u.kt)("strong",null," uuid "),"]",": The created uuid.")),(0,u.kt)("hr",null),(0,u.kt)("h3",{id:"new"},"new"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-lua"},"sm.uuid.new( uuidString )\n")),(0,u.kt)("p",null,"Creates a uuid from a string or generates a random uuid (version 4)."),(0,u.kt)("strong",null,"Arguments:")," ",(0,u.kt)("br",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("code",null,"uuidString")," [",(0,u.kt)("strong",null," string "),"]: The UUID string. Defaults to random.")),(0,u.kt)("strong",null,"Returns:")," ",(0,u.kt)("br",null),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"[",(0,u.kt)("strong",null," uuid "),"]",": The created uuid.")),(0,u.kt)("hr",null))}d.isMDXComponent=!0}}]);