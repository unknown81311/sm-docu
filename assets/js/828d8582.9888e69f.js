"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[6785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2,title:"sm",hide_title:!0,"sidebar-label":"sm"},s=void 0,l={unversionedId:"Game-Script-Environment/Static-Functions/sm",id:"Game-Script-Environment/Static-Functions/sm",title:"sm",description:"sm",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm",permalink:"/docs/Game-Script-Environment/Static-Functions/sm",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"sm",hide_title:!0,"sidebar-label":"sm"},sidebar:"tutorialSidebar",previous:{title:"Global",permalink:"/docs/Game-Script-Environment/Static-Functions/Global"},next:{title:"sm.ai",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.ai"}},a={},c=[{value:"sm",id:"sm",level:2},{value:"Functions",id:"functions",level:2},{value:"exists",id:"exists",level:3},{value:"isServerMode",id:"isservermode",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"sm"},"sm"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",null,"sm")," namespace contain all API features related to Scrap Mechanic."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#sm"},"Constants")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"exists"},"exists"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.exists( object )\n")),(0,i.kt)("p",null,"Returns whether an object exists in the game. ",(0,i.kt)("br",null),"\nThis is useful for checking whether a reference to an object is valid."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"object")," [",(0,i.kt)("strong",null," any "),"]: The object to check.")),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," bool "),"]",": Whether the object exists or not.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isservermode"},"isServerMode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.isServerMode( object )\n")),(0,i.kt)("p",null,"Returns whether the script is currently running in ",(0,i.kt)("a",{parentName:"p",href:"/docs/#server"},"server")," mode. ",(0,i.kt)("br",null),"\nOtherwise, it is running in ",(0,i.kt)("a",{parentName:"p",href:"/docs/#client"},"client")," mode. Server mode only occurs when ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#sm"},"sm.isHost")," is true."),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," bool "),"]",": Whether the script is running in server mode or not.")),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);