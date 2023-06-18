"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[4205],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>d});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},k=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),c=s(l),m=r,d=c["".concat(i,".").concat(m)]||c[m]||p[m]||a;return l?n.createElement(d,o(o({ref:t},k),{},{components:l})):n.createElement(d,o({ref:t},k))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},295:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=l(7462),r=(l(7294),l(3905));const a={sidebar_position:29,title:"sm.localPlayer",hide_title:!0,"sidebar-label":"sm.localPlayer"},o=void 0,u={unversionedId:"Game-Script-Environment/Static-Functions/sm.localPlayer",id:"Game-Script-Environment/Static-Functions/sm.localPlayer",title:"sm.localPlayer",description:"sm.localPlayer",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.localPlayer.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.localPlayer",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.localPlayer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Game-Script-Environment/Static-Functions/sm.localPlayer.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,title:"sm.localPlayer",hide_title:!0,"sidebar-label":"sm.localPlayer"},sidebar:"tutorialSidebar",previous:{title:"sm.json",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.json"},next:{title:"sm.log",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.log"}},i={},s=[{value:"sm.localPlayer",id:"smlocalplayer",level:2},{value:"Functions",id:"functions",level:2},{value:"addRenderable",id:"addrenderable",level:3},{value:"getActiveItem",id:"getactiveitem",level:3},{value:"getAimSensitivity",id:"getaimsensitivity",level:3},{value:"getCarry",id:"getcarry",level:3},{value:"getCarryColor",id:"getcarrycolor",level:3},{value:"getDirection",id:"getdirection",level:3},{value:"getFpAnimationInfo",id:"getfpanimationinfo",level:3},{value:"getFpBonePos",id:"getfpbonepos",level:3},{value:"getHotbar",id:"gethotbar",level:3},{value:"getId",id:"getid",level:3},{value:"getInventory",id:"getinventory",level:3},{value:"getMouseDelta",id:"getmousedelta",level:3},{value:"getOwnedLift",id:"getownedlift",level:3},{value:"getPlayer",id:"getplayer",level:3},{value:"getPosition",id:"getposition",level:3},{value:"getRaycast",id:"getraycast",level:3},{value:"getRaycastStart",id:"getraycaststart",level:3},{value:"getRight",id:"getright",level:3},{value:"getSelectedHotbarSlot",id:"getselectedhotbarslot",level:3},{value:"getUp",id:"getup",level:3},{value:"isGarmentUnlocked",id:"isgarmentunlocked",level:3},{value:"isInFirstPersonView",id:"isinfirstpersonview",level:3},{value:"removeRenderable",id:"removerenderable",level:3},{value:"setBlockSprinting",id:"setblocksprinting",level:3},{value:"setDirection",id:"setdirection",level:3},{value:"setLockedControls",id:"setlockedcontrols",level:3},{value:"updateFpAnimation",id:"updatefpanimation",level:3}],k={toc:s},c="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"smlocalplayer"},"sm.localPlayer"),(0,r.kt)("p",null,"Local player represents the current character being controlled on the client's computer. ",(0,r.kt)("br",null),"\nThis library can only be used on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/#client"},"client"),"."),(0,r.kt)("p",null,"For more information about other players in the world, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.player"},"sm.player"),"."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"addrenderable"},"addRenderable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.addRenderable( file )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Adds a renderable (file containing model data) to be used for the local player in first person view."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"file")," [",(0,r.kt)("strong",null," string "),"]: The path to the renderable file.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getactiveitem"},"getActiveItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getActiveItem()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the item currently held by the local player."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," uuid "),"]",": The uuid of the held item.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getaimsensitivity"},"getAimSensitivity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getAimSensitivity()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the local player's aim sensitivity."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The aim sensitivity.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcarry"},"getCarry"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getCarry()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the local player's carrying container."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," container "),"]",": The player's carry.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcarrycolor"},"getCarryColor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getCarryColor()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the color of the shape that the local player is carrying."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," color "),"]",": The player's carry color.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdirection"},"getDirection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getDirection()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the direction in which the local player is looking."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The player's aim direction.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getfpanimationinfo"},"getFpAnimationInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getFpAnimationInfo( name )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns general information for a first person view animation."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"name")," [",(0,r.kt)("strong",null," string "),"]: The animation name.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," table "),"]",": A table containing ",(0,r.kt)("code",null,"name"),", ",(0,r.kt)("code",null,"duration")," and ",(0,r.kt)("code",null,"looping")," information of the animation.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getfpbonepos"},"getFpBonePos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getFpBonePos( name )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the world position for a bone in the first person view animation skeleton."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"name")," [",(0,r.kt)("strong",null," string "),"]: The bone name.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The bone position.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gethotbar"},"getHotbar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getHotbar()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the local player's hotbar container."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," container "),"]",": The hotbar.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getid"},"getId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getId()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the local player's id."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The id.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getinventory"},"getInventory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getInventory()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the local player's inventory container."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," container "),"]",": The inventory.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmousedelta"},"getMouseDelta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getMouseDelta()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the delta position of the mouse."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": Mouse Delta X."),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": Mouse Delta Y.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getownedlift"},"getOwnedLift"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getOwnedLift()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the local player's lift."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," lift "),"]",": The lift.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getplayer"},"getPlayer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getPlayer()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the local player's player object."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," player "),"]",": The player.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getposition"},"getPosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getPosition()\n")),(0,r.kt)("admonition",{title:"warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This function is deprecated."),(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("code",null,"sm.localPlayer.getPlayer().character.worldPosition")," instead.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getraycast"},"getRaycast"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getRaycast( range, origin, direction )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Performs a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ray_casting"},"raycast")," relative to the local player's perspective."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"range")," [",(0,r.kt)("strong",null," number "),"]: The maximum range."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"origin")," [",(0,r.kt)("strong",null," vec3 "),"]: The start position. Defaults to ",(0,r.kt)("code",null,"sm.localPlayer.getRaycastStart()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"direction")," [",(0,r.kt)("strong",null," vec3 "),"]: The direction. Defaults to ",(0,r.kt)("code",null,"sm.localPlayer.getDirection()"))),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the raycast was successful or not."),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," raycastResult "),"]",": The raycast result data.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getraycaststart"},"getRaycastStart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getRaycastStart()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the start position of the local player's raycast. ",(0,r.kt)("br",null),"\nThe position depends on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.camera"},"camera"),"'s position, and whether it's in first - or third-person."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The start position of the raycast.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getright"},"getRight"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getRight()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the right-vector perpendicular to the local player's aim."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The right-vector of the local player's aim.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getselectedhotbarslot"},"getSelectedHotbarSlot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getSelectedHotbarSlot()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the selected hotbar slot."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The selected slot.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getup"},"getUp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.getUp()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns the up-vector perpendicular to the local player's aim."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The up-vector of the local player's aim.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isgarmentunlocked"},"isGarmentUnlocked"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.isGarmentUnlocked( uuid )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Checks if the garment has been granted to the local player."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"uuid")," [",(0,r.kt)("strong",null," uuid "),"]: The garment uuid.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the garment is unlocked or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isinfirstpersonview"},"isInFirstPersonView"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.isInFirstPersonView()\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Returns whether the player is in first person view where the viewpoint is rendered from the player's perspective. ",(0,r.kt)("br",null),"\nOtherwise, the player is in third person view where the camera is behind the player."),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the player is in first-person view or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removerenderable"},"removeRenderable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.removeRenderable( renderable )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Removes a renderable (file containing model data) that was used for the local player in first person view."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"renderable")," [",(0,r.kt)("strong",null," string "),"]: The path to the renderable file.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setblocksprinting"},"setBlockSprinting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.setBlockSprinting( state )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Stops the local player from sprinting."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"state")," [",(0,r.kt)("strong",null," bool "),"]: Whether sprinting is blocked or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setdirection"},"setDirection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.setDirection( dir )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets the direction of where the player is viewing or aiming. ",(0,r.kt)("br",null),"\nIntended to be used when the controls have been locked (See ",(0,r.kt)("a",{parentName:"p",href:"#setlockedcontrols"},"sm.localPlayer.setLockedControls"),")."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"dir")," [",(0,r.kt)("strong",null," vec3 "),"]: The direction.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setlockedcontrols"},"setLockedControls"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.setLockedControls( state )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Locks the player's controls."),(0,r.kt)("p",null,"A player with locked controls ",(0,r.kt)("strong",null,"can:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the game menu by pressing ESC"),(0,r.kt)("li",{parentName:"ul"},"Open the chat")),(0,r.kt)("p",null,"A player with locked controls ",(0,r.kt)("strong",null,"cannot:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interact with parts"),(0,r.kt)("li",{parentName:"ul"},"Open their inventory"),(0,r.kt)("li",{parentName:"ul"},"Move in any way"),(0,r.kt)("li",{parentName:"ul"},"Look around"),(0,r.kt)("li",{parentName:"ul"},"Change the selected hotbar item"),(0,r.kt)("li",{parentName:"ul"},"Use any tools"),(0,r.kt)("li",{parentName:"ul"},"Place or remove any parts")),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"state")," [",(0,r.kt)("strong",null," bool "),"]: The lock state.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatefpanimation"},"updateFpAnimation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"sm.localPlayer.updateFpAnimation( name, time, weight, looping )\n")),(0,r.kt)("code",null,"Client-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Updates a first person view animation."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"name")," [",(0,r.kt)("strong",null," string "),"]: The animation name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"time")," [",(0,r.kt)("strong",null," number "),"]: The time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"weight")," [",(0,r.kt)("strong",null," number "),"]: The weight. Defaults to ",(0,r.kt)("code",null,"-1.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"looping")," [",(0,r.kt)("strong",null," bool "),"]: Whether the animation is looping or not. Defaults to false.")),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);