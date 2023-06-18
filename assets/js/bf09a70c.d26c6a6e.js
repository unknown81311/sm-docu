"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[5433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:5,title:"sm.harvestable",hide_title:!0,"sidebar-label":"sm.harvestable"},o=void 0,s={unversionedId:"Terrain-Script-Environment/Static-Functions/sm.harvestable",id:"Terrain-Script-Environment/Static-Functions/sm.harvestable",title:"sm.harvestable",description:"sm.harvestable",source:"@site/docs/Terrain-Script-Environment/Static-Functions/sm.harvestable.md",sourceDirName:"Terrain-Script-Environment/Static-Functions",slug:"/Terrain-Script-Environment/Static-Functions/sm.harvestable",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.harvestable",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Terrain-Script-Environment/Static-Functions/sm.harvestable.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"sm.harvestable",hide_title:!0,"sidebar-label":"sm.harvestable"},sidebar:"tutorialSidebar",previous:{title:"sm.debugDraw",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.debugDraw"},next:{title:"sm.json",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.json"}},i={},u=[{value:"sm.harvestable",id:"smharvestable",level:2},{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:3},{value:"createHarvestable",id:"createharvestable",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"smharvestable"},"sm.harvestable"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Associated object type:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/Terrain-Script-Environment/Userdata/Harvestable"},"Harvestable")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"create"},"create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.harvestable.create( uuid, position, rotation, slopeNormal )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Creates a new harvestable."),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"uuid")," [",(0,a.kt)("strong",null," uuid "),"]: The uuid of the harvestable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"position")," [",(0,a.kt)("strong",null," vec3 "),"]: The harvestable's world position."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"rotation")," [",(0,a.kt)("strong",null," quat "),"]: The harvestable's world rotation. Defaults to ",(0,a.kt)("code",null,"sm.quat.identity()"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"slopeNormal")," [",(0,a.kt)("strong",null," vec3 "),']: The harvestable\'s slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createharvestable"},"createHarvestable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"sm.harvestable.createHarvestable( uuid, position, rotation, slopeNormal )\n")),(0,a.kt)("code",null,"Server-Only")," ",(0,a.kt)("br",null),(0,a.kt)("p",null,"Creates a new harvestable."),(0,a.kt)("strong",null,"Arguments:")," ",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"uuid")," [",(0,a.kt)("strong",null," uuid "),"]: The uuid of the harvestable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"position")," [",(0,a.kt)("strong",null," vec3 "),"]: The harvestable's world position."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"rotation")," [",(0,a.kt)("strong",null," quat "),"]: The harvestable's world rotation. Defaults to ",(0,a.kt)("code",null,"sm.quat.identity()"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"slopeNormal")," [",(0,a.kt)("strong",null," vec3 "),']: The harvestable\'s slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.')),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);