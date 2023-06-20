"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[1236],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>m});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),k=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},s=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},g="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,u=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),g=k(l),c=r,m=g["".concat(i,".").concat(c)]||g[c]||p[c]||u;return l?n.createElement(m,a(a({ref:e},s),{},{components:l})):n.createElement(m,a({ref:e},s))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=l.length,a=new Array(u);a[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[g]="string"==typeof t?t:r,a[1]=o;for(var k=2;k<u;k++)a[k]=l[k];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},3483:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>k});var n=l(7462),r=(l(7294),l(3905));const u={sidebar_position:14,title:"Joint",hide_title:!0,"sidebar-label":"Joint"},a=void 0,o={unversionedId:"Game-Script-Environment/Userdata/Joint",id:"Game-Script-Environment/Userdata/Joint",title:"Joint",description:"Joint",source:"@site/docs/Game-Script-Environment/Userdata/Joint.md",sourceDirName:"Game-Script-Environment/Userdata",slug:"/Game-Script-Environment/Userdata/Joint",permalink:"/docs/Game-Script-Environment/Userdata/Joint",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Joint",hide_title:!0,"sidebar-label":"Joint"},sidebar:"tutorialSidebar",previous:{title:"Interactable",permalink:"/docs/Game-Script-Environment/Userdata/Interactable"},next:{title:"Lift",permalink:"/docs/Game-Script-Environment/Userdata/Lift"}},i={},k=[{value:"Joint",id:"joint",level:2},{value:"Functions",id:"functions",level:2},{value:"createBlock",id:"createblock",level:3},{value:"createPart",id:"createpart",level:3},{value:"getAngle",id:"getangle",level:3},{value:"getAngularVelocity",id:"getangularvelocity",level:3},{value:"getAppliedImpulse",id:"getappliedimpulse",level:3},{value:"getBoundingBox",id:"getboundingbox",level:3},{value:"getColor",id:"getcolor",level:3},{value:"setColor",id:"setcolor",level:3},{value:"getId",id:"getid",level:3},{value:"getLength",id:"getlength",level:3},{value:"getLocalPosition",id:"getlocalposition",level:3},{value:"getLocalRotation",id:"getlocalrotation",level:3},{value:"getShapeA",id:"getshapea",level:3},{value:"getShapeB",id:"getshapeb",level:3},{value:"getShapeUuid",id:"getshapeuuid",level:3},{value:"getSticky",id:"getsticky",level:3},{value:"getType",id:"gettype",level:3},{value:"getWorldPosition",id:"getworldposition",level:3},{value:"getWorldRotation",id:"getworldrotation",level:3},{value:"getXAxis",id:"getxaxis",level:3},{value:"getYAxis",id:"getyaxis",level:3},{value:"getZAxis",id:"getzaxis",level:3},{value:"isReversed",id:"isreversed",level:3},{value:"setMotorVelocity",id:"setmotorvelocity",level:3},{value:"setTargetAngle",id:"settargetangle",level:3},{value:"setTargetLength",id:"settargetlength",level:3}],s={toc:k},g="wrapper";function p(t){let{components:e,...l}=t;return(0,r.kt)(g,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"joint"},"Joint"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Associated namespace:")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Static-Functions/sm.joint"},"sm.joint")),(0,r.kt)("p",null,"A userdata object representing a ",(0,r.kt)("strong",null,"joint")," (bearing, piston, etc.) in the game."),(0,r.kt)("strong",null,"Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"angle")," [",(0,r.kt)("strong",null," number "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The bearing's angle.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"angularVelocity")," [",(0,r.kt)("strong",null," number "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The bearing's angular velocity.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"appliedImpulse")," [",(0,r.kt)("strong",null," number "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The bearing's applied impulse.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"color")," [",(0,r.kt)("strong",null," color "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's color.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"id")," [",(0,r.kt)("strong",null," int "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's id.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"length")," [",(0,r.kt)("strong",null," number "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The piston's current length in blocks.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"localPosition")," [",(0,r.kt)("strong",null," vec3 "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's local position.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"localRotation")," [",(0,r.kt)("strong",null," quat "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's local rotation.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"reversed")," [",(0,r.kt)("strong",null," bool "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": Whether the bearing is reversed (counterclockwise) or not.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"shapeA")," [",(0,r.kt)("strong",null," shape "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's parent shape. This shape always exists.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"shapeB")," [",(0,r.kt)("strong",null," shape "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's child shape or nil if no shape is attached.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"type")," [",(0,r.kt)("strong",null," string "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's type.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"uuid")," [",(0,r.kt)("strong",null," uuid "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's uuid.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"worldPosition")," [",(0,r.kt)("strong",null," vec3 "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's world position.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"xAxis")," [",(0,r.kt)("strong",null," vec3 "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's local x-axis vector.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"yAxis")," [",(0,r.kt)("strong",null," vec3 "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's local y-axis vector.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"zAxis")," [",(0,r.kt)("strong",null," vec3 "),"] ",(0,r.kt)("br",null),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"Get"),": The joint's local z-axis vector.")))),(0,r.kt)("strong",null,"Operations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Joint")," == ",(0,r.kt)("code",null,"Joint")),(0,r.kt)("td",{parentName:"tr",align:null},"Checks if two instances of ",(0,r.kt)("code",null,"Joint")," refer to the same ",(0,r.kt)("code",null,"Joint"),".")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"createblock"},"createBlock"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:createBlock( uuid, size, position, forceCreate )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Creates a block on the joint."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"uuid")," [",(0,r.kt)("strong",null," uuid "),"]: The shape uuid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"size")," [",(0,r.kt)("strong",null," vec3 "),"]: The shape size."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"position")," [",(0,r.kt)("strong",null," vec3 "),"]: The shape's local position."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"forceCreate")," [",(0,r.kt)("strong",null," bool "),"]: Whether to force creating the shape or not. Defaults to true.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createpart"},"createPart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:createPart( uuid, position, zAxis, xAxis, forceCreate )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Creates a part on the joint."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"uuid")," [",(0,r.kt)("strong",null," uuid "),"]: The shape uuid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"position")," [",(0,r.kt)("strong",null," vec3 "),"]: The shape's local position."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"zAxis")," [",(0,r.kt)("strong",null," vec3 "),"]: The shape's local z direction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"xAxis")," [",(0,r.kt)("strong",null," vec3 "),"]: The shape's local x direction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"forceCreate")," [",(0,r.kt)("strong",null," bool "),"]: Whether to force creating the shape or not. Defaults to true.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getangle"},"getAngle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"bearing:getAngle()\n")),(0,r.kt)("p",null,"Returns the bearing's angle."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"bearing")," [",(0,r.kt)("strong",null," joint "),"]: The bearing.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The bearing's angle (-math.pi - +math.pi).")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getangularvelocity"},"getAngularVelocity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"bearing:getAngularVelocity()\n")),(0,r.kt)("p",null,"Returns the bearing's angular velocity."),(0,r.kt)("p",null,"This velocity can be set using ",(0,r.kt)("a",{parentName:"p",href:"#setMotorVelocity"},"setMotorVelocity")," or ",(0,r.kt)("a",{parentName:"p",href:"#setTargetAngle"},"setTargetAngle"),"."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"bearing")," [",(0,r.kt)("strong",null," joint "),"]: The bearing.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The bearing's angular velocity.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getappliedimpulse"},"getAppliedImpulse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"bearing:getAppliedImpulse()\n")),(0,r.kt)("p",null,"Returns the bearing's applied impulse."),(0,r.kt)("p",null,"The applied impulse can be set using ",(0,r.kt)("a",{parentName:"p",href:"#setMotorVelocity"},"setMotorVelocity")," or ",(0,r.kt)("a",{parentName:"p",href:"#setTargetAngle"},"setTargetAngle"),"."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"bearing")," [",(0,r.kt)("strong",null," joint "),"]: The bearing.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The bearing's applied impulse.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getboundingbox"},"getBoundingBox"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getBoundingBox()\n")),(0,r.kt)("p",null,"Returns the joint's bounding box - the dimensions that it occupies when building."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The joint's bounding box.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcolor"},"getColor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getColor()\n")),(0,r.kt)("p",null,"Returns the joint's color."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," color "),"]",": The joint's color.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setcolor"},"setColor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:setColor( color )\n")),(0,r.kt)("code",null,"Server-Only")," ",(0,r.kt)("br",null),(0,r.kt)("p",null,"Sets the joint's color."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"color")," [",(0,r.kt)("strong",null," color "),"]: The color.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getid"},"getId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getId()\n")),(0,r.kt)("p",null,"Returns the joint's id."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," int "),"]",": The joint's id.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlength"},"getLength"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"piston:getLength()\n")),(0,r.kt)("p",null,"Returns the piston's current length in blocks."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"piston")," [",(0,r.kt)("strong",null," joint "),"]: The piston.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," number "),"]",": The joint's id.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlocalposition"},"getLocalPosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getLocalPosition()\n")),(0,r.kt)("p",null,"Returns the joint's local position."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The joint's local position.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlocalrotation"},"getLocalRotation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getLocalRotation()\n")),(0,r.kt)("p",null,"Returns the joint's local rotation."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," quat "),"]",": The joint's local rotation.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getshapea"},"getShapeA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getShapeA()\n")),(0,r.kt)("p",null,"Returns the joint's parent shape. ",(0,r.kt)("br",null),"\nThis is the shape that the joint is attached to. ",(0,r.kt)("br",null),"\nThis shape always exists."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," shape "),"]",": The joint's parent shape.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getshapeb"},"getShapeB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getShapeB()\n")),(0,r.kt)("p",null,"Returns the joint's child shape. ",(0,r.kt)("br",null),"\nThis is the shape that is attached to the joint."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," shape "),"]",": The joint's child shape.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getshapeuuid"},"getShapeUuid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getShapeUuid()\n")),(0,r.kt)("p",null,"Returns the joint's uuid."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," uuid "),"]",": The joint's uuid.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getsticky"},"getSticky"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getSticky()\n")),(0,r.kt)("p",null,"Returns the sticky directions of the joint for positive xyz and negative xyz."),(0,r.kt)("p",null,"A value of 1 means that the direction is sticky and a value of 0 means that the direction is not sticky."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The negative sticky directions."),(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The positive sticky directions.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettype"},"getType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getType()\n")),(0,r.kt)("p",null,"Returns the joint's type."),(0,r.kt)("p",null,"For details, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Constants#smjointtypes"},"sm.joint.types"),"."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," string "),"]",": The joint's type.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getworldposition"},"getWorldPosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getWorldPosition()\n")),(0,r.kt)("p",null,"Returns the joint's world position."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The joint's world position.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getworldrotation"},"getWorldRotation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getWorldRotation()\n")),(0,r.kt)("p",null,"Returns the joint's world rotation."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," quat "),"]",": The joint's world rotation.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getxaxis"},"getXAxis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getXAxis()\n")),(0,r.kt)("p",null,"Returns the joint's local x-axis vector."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The joint's x-axis vector.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getyaxis"},"getYAxis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getYAxis()\n")),(0,r.kt)("p",null,"Returns the joint's local y-axis vector."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The joint's y-axis vector.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getzaxis"},"getZAxis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"joint:getZAxis()\n")),(0,r.kt)("p",null,"Returns the joint's local z-axis vector."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"joint")," [",(0,r.kt)("strong",null," joint "),"]: The joint.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," vec3 "),"]",": The joint's z-axis vector.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isreversed"},"isReversed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"bearing:isReversed()\n")),(0,r.kt)("p",null,"Returns whether the bearing has been reversed using the Connect Tool. ",(0,r.kt)("br",null),"\nA reversed bearing rotates counterclockwise."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"bearing")," [",(0,r.kt)("strong",null," joint "),"]: The bearing.")),(0,r.kt)("strong",null,"Returns:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[",(0,r.kt)("strong",null," bool "),"]",": Whether the bearing was reversed or not.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setmotorvelocity"},"setMotorVelocity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"bearing:setMotorVelocity( targetVelocity, maxImpulse )\n")),(0,r.kt)("p",null,"Sets the motor velocity for a bearing. The bearing will try to maintain the target velocity with the given amount of impulse/strength."),(0,r.kt)("p",null,"In Scrap Mechanic, the Gas Engine increases both velocity and impulse with every gear. ",(0,r.kt)("br",null),"\nThe Electric Engine increases velocity, but maintains the same impulse for every gear, making it sturdier."),(0,r.kt)("p",null,"This method cancels the effects of ",(0,r.kt)("a",{parentName:"p",href:"#setTargetAngle"},"setTargetAngle"),"."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"bearing")," [",(0,r.kt)("strong",null," joint "),"]: The bearing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"targetVelocity")," [",(0,r.kt)("strong",null," number "),"]: The target velocity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"maxImpulse")," [",(0,r.kt)("strong",null," number "),"]: The max impulse.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"settargetangle"},"setTargetAngle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"bearing:setTargetAngle( targetAngle, targetVelocity, maxImpulse )\n")),(0,r.kt)("p",null,"Sets the target angle for a bearing. The bearing will try to reach the target angle with the target velocity and the given amount of impulse/strength."),(0,r.kt)("p",null,"The target angle is set to range between ",(0,r.kt)("code",null,"-math.pi")," and ",(0,r.kt)("code",null,"+math.pi"),". ",(0,r.kt)("br",null),"\nThe bearing will always try to rotate in the direction closest to the target angle."),(0,r.kt)("p",null,"This method cancels the effects of ",(0,r.kt)("a",{parentName:"p",href:"#setMotorVelocity"},"setMotorVelocity"),"."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"bearing")," [",(0,r.kt)("strong",null," joint "),"]: The bearing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"targetAngle")," [",(0,r.kt)("strong",null," number "),"]: The target angle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"targetVelocity")," [",(0,r.kt)("strong",null," number "),"]: The target velocity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"maxImpulse")," [",(0,r.kt)("strong",null," number "),"]: The max impulse.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"settargetlength"},"setTargetLength"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"piston:setTargetLength( targetLength, targetVelocity, maxImpulse )\n")),(0,r.kt)("p",null,"Sets the target length for a piston. The piston will try to reach the target length with the target velocity and the given amount of impulse/strength."),(0,r.kt)("p",null,"The target length is measured in blocks."),(0,r.kt)("p",null,"This method cancels the effects of setMotorVelocity."),(0,r.kt)("strong",null,"Arguments:")," ",(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"piston")," [",(0,r.kt)("strong",null," joint "),"]: The piston."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"targetLength")," [",(0,r.kt)("strong",null," number "),"]: The target length."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"targetVelocity")," [",(0,r.kt)("strong",null," number "),"]: The target velocity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"maxImpulse")," [",(0,r.kt)("strong",null," number "),"]: The max impulse.")),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);