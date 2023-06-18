"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[6451],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=u(n),k=l,d=p["".concat(o,".").concat(k)]||p[k]||m[k]||a;return n?r.createElement(d,s(s({ref:e},c),{},{components:n})):r.createElement(d,s({ref:e},c))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,s=new Array(a);s[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[p]="string"==typeof t?t:l,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5991:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:6,title:"sm.json",hide_title:!0,"sidebar-label":"sm.json"},s=void 0,i={unversionedId:"Terrain-Script-Environment/Static-Functions/sm.json",id:"Terrain-Script-Environment/Static-Functions/sm.json",title:"sm.json",description:"sm.json",source:"@site/docs/Terrain-Script-Environment/Static-Functions/sm.json.md",sourceDirName:"Terrain-Script-Environment/Static-Functions",slug:"/Terrain-Script-Environment/Static-Functions/sm.json",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.json",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Terrain-Script-Environment/Static-Functions/sm.json.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"sm.json",hide_title:!0,"sidebar-label":"sm.json"},sidebar:"tutorialSidebar",previous:{title:"sm.harvestable",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.harvestable"},next:{title:"sm.noise",permalink:"/docs/Terrain-Script-Environment/Static-Functions/sm.noise"}},o={},u=[{value:"sm.json",id:"smjson",level:2},{value:"Functions",id:"functions",level:2},{value:"fileExists",id:"fileexists",level:3},{value:"open",id:"open",level:3},{value:"parseJsonString",id:"parsejsonstring",level:3},{value:"save",id:"save",level:3},{value:"writeJsonString",id:"writejsonstring",level:3}],c={toc:u},p="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"smjson"},"sm.json"),(0,l.kt)("p",null,"The JSON library is used for reading and writing data from/to JSON files."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"fileexists"},"fileExists"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.json.fileExists( file )\n")),(0,l.kt)("p",null,"Returns whether any file ",(0,l.kt)("em",{parentName:"p"},"or")," folder exists at the given path."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"file")," [",(0,l.kt)("strong",null," string "),"]: The file path to check.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," bool "),"]",": Whether the file exists or not.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"open"},"open"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.json.open( file )\n")),(0,l.kt)("p",null,"Opens a JSON file and returns it's content as a Lua table."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"file")," [",(0,l.kt)("strong",null," string "),"]: The file path.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," table "),"]",": The loaded JSON data.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"parsejsonstring"},"parseJsonString"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.json.parseJsonString( json )\n")),(0,l.kt)("p",null,"Parses a JSON string and returns it as a Lua table."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"file")," [",(0,l.kt)("strong",null," string "),"]: The JSON string.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," table "),"]",": The parsed JSON data.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"save"},"save"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.json.save( data, path )\n")),(0,l.kt)("p",null,"Writes a Lua table to a JSON file."),(0,l.kt)("p",null,"If the file does not exist, this will create a new file at the given file path. ",(0,l.kt)("br",null),"\nIf the file does exist, this will overwrite the file content."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"data")," [",(0,l.kt)("strong",null," table "),"]: The Lua table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"path")," [",(0,l.kt)("strong",null," string "),"]: The path to the JSON file.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"writejsonstring"},"writeJsonString"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"sm.json.writeJsonString( data )\n")),(0,l.kt)("p",null,"Converts a Lua table to a JSON string."),(0,l.kt)("strong",null,"Arguments:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"data")," [",(0,l.kt)("strong",null," table "),"]: The Lua table.")),(0,l.kt)("strong",null,"Returns:")," ",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("strong",null," string "),"]",": The JSON string.")),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);