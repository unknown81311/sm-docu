"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[3370],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>m});var n=l(7294);function i(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function r(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){i(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,i=function(t,e){if(null==t)return{};var l,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(i[l]=t[l]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(i[l]=t[l])}return i}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):r(r({},e),t)),l},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var l=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=s(l),d=i,m=k["".concat(u,".").concat(d)]||k[d]||p[d]||a;return l?n.createElement(m,r(r({ref:e},c),{},{components:l})):n.createElement(m,r({ref:e},c))}));function m(t,e){var l=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=l.length,r=new Array(a);r[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[k]="string"==typeof t?t:i,r[1]=o;for(var s=2;s<a;s++)r[s]=l[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},1388:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=l(7462),i=(l(7294),l(3905));const a={sidebar_position:51,title:"sm.visualization",hide_title:!0,"sidebar-label":"sm.visualization"},r=void 0,o={unversionedId:"Game-Script-Environment/Static-Functions/sm.visualization",id:"Game-Script-Environment/Static-Functions/sm.visualization",title:"sm.visualization",description:"sm.visualization",source:"@site/docs/Game-Script-Environment/Static-Functions/sm.visualization.md",sourceDirName:"Game-Script-Environment/Static-Functions",slug:"/Game-Script-Environment/Static-Functions/sm.visualization",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.visualization",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Game-Script-Environment/Static-Functions/sm.visualization.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"sm.visualization",hide_title:!0,"sidebar-label":"sm.visualization"},sidebar:"tutorialSidebar",previous:{title:"sm.vec3",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.vec3"},next:{title:"sm.world",permalink:"/docs/Game-Script-Environment/Static-Functions/sm.world"}},u={},s=[{value:"sm.visualization",id:"smvisualization",level:2},{value:"Functions",id:"functions",level:2},{value:"createBlueprint",id:"createblueprint",level:3},{value:"createBuilderGuide",id:"createbuilderguide",level:3},{value:"setBlockVisualization",id:"setblockvisualization",level:3},{value:"getShapePlacementVisualization",id:"getshapeplacementvisualization",level:3},{value:"setCreationBodies",id:"setcreationbodies",level:3},{value:"setCreationFreePlacement",id:"setcreationfreeplacement",level:3},{value:"setCreationFreePlacementPosition",id:"setcreationfreeplacementposition",level:3},{value:"setCreationFreePlacementRotation",id:"setcreationfreeplacementrotation",level:3},{value:"setCreationValid",id:"setcreationvalid",level:3},{value:"setCreationVisible",id:"setcreationvisible",level:3},{value:"setLiftLevel",id:"setliftlevel",level:3},{value:"setLiftPosition",id:"setliftposition",level:3},{value:"setLiftValid",id:"setliftvalid",level:3},{value:"setLiftVisible",id:"setliftvisible",level:3}],c={toc:s},k="wrapper";function p(t){let{components:e,...l}=t;return(0,i.kt)(k,(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"smvisualization"},"sm.visualization"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Associated object type:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/BlueprintVisualization"},"BlueprintVisualization")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",null,"visualization")," is used for visualizing game objects."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createblueprint"},"createBlueprint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.createBlueprint( blueprint )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/BlueprintVisualization"},"Blueprint Visualization")," from blueprint data."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"blueprint")," [",(0,i.kt)("strong",null," string/table "),"]: The path to the blueprint file OR the table containing blueprint data.")),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," blueprintVisualization "),"]",": The blueprint visualization.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createbuilderguide"},"createBuilderGuide"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.createBuilderGuide( path, shape, ignoreBlockUuid, completeEffectName )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Creates a builder guide ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/BlueprintVisualization"},"Blueprint Visualization"),", comparing the creation from the root ",(0,i.kt)("a",{parentName:"p",href:"/docs/Game-Script-Environment/Userdata/Shape"},"Shape")," to the given blueprint."),(0,i.kt)("p",null,"The builder guide blueprint contains stage indices based on shape color, stage color order is the same as the color order in the PaintTool color picker."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"path")," [",(0,i.kt)("strong",null," string "),"]: The file path to the builder guide blueprint."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"shape")," [",(0,i.kt)("strong",null," shape "),"]: The root Shape for comparing the creation from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"ignoreBlockUuid")," [",(0,i.kt)("strong",null," bool "),"]: Whether the block UUID should be evaluated for stage completion. Defaults to false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"completeEffectName")," [",(0,i.kt)("strong",null," string "),"]: The name of the effect to play when the guide is completed. Defaults to none.")),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," blueprintVisualization "),"]",": The builder guide blueprint visualization.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setblockvisualization"},"setBlockVisualization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setBlockVisualization( position, illegal, target )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Visualizes a block."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"position")," [",(0,i.kt)("strong",null," vec3 "),"]: The world position of the block. Local position if using a target."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"illegal")," [",(0,i.kt)("strong",null," bool "),"]: Whether the visualization should render as illegal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"target")," [",(0,i.kt)("strong",null," shape/joint/nil "),"]: The target shape or joint. Defaults to none (visualizes in world space).")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getshapeplacementvisualization"},"getShapePlacementVisualization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.getShapePlacementVisualization()\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Returns a table containing the current state of the shape placement visualization."),(0,i.kt)("strong",null,"Returns:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[",(0,i.kt)("strong",null," table "),"]",": The state of the visualization.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setcreationbodies"},"setCreationBodies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setCreationBodies( bodies )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Sets an array of bodies to visualize."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"bodies")," [",(0,i.kt)("strong",null," table "),"]: The array of bodies to visualize.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setcreationfreeplacement"},"setCreationFreePlacement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setCreationFreePlacement( valid )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Controls the transform of the creation visualization. ",(0,i.kt)("br",null),"\nIf true the visualization will render using ",(0,i.kt)("code",null,"setFreePlacementPosition"),"/",(0,i.kt)("code",null,"setFreePlacementRotation")," functions."),(0,i.kt)("p",null,"If false the visualization will render on top of the creation."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"valid")," [",(0,i.kt)("strong",null," bool "),"]: The transform state.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setcreationfreeplacementposition"},"setCreationFreePlacementPosition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setCreationFreePlacementPosition( pos )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Set the world position of the creation visualization. Only works ",(0,i.kt)("code",null,"setFreePlacement")," is true."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"pos")," [",(0,i.kt)("strong",null," vec3 "),"]: The visualization position.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setcreationfreeplacementrotation"},"setCreationFreePlacementRotation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setCreationFreePlacementRotation( index )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Set the rotation index of the creation visualization. Only works ",(0,i.kt)("code",null,"setFreePlacement")," is true."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"index")," [",(0,i.kt)("strong",null," int "),"]: The rotation index.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setcreationvalid"},"setCreationValid"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setCreationValid( valid, lift )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Controls the rendering of the creation visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"valid")," [",(0,i.kt)("strong",null," bool "),"]: Whether the visualization should be rendered as valid or invalid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"lift")," [",(0,i.kt)("strong",null," bool "),"]: Whether the visualization should render a lift (?).")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setcreationvisible"},"setCreationVisible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setCreationVisible( visible )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Controls the visibility of the creation visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"visible")," [",(0,i.kt)("strong",null," bool "),"]: Whether the visualization should be visible or not.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setliftlevel"},"setLiftLevel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setLiftLevel( level )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Sets the lift level of the lift visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"level")," [",(0,i.kt)("strong",null," int "),"]: The level of the lift.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setliftposition"},"setLiftPosition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setLiftPosition( pos )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Sets the lift position of the lift visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"pos")," [",(0,i.kt)("strong",null," vec3 "),"]: The position of the lift.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setliftvalid"},"setLiftValid"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setLiftValid( valid )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Controls the rendering of the lift visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"valid")," [",(0,i.kt)("strong",null," bool "),"]: Whether the lift renders as valid or invalid.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setliftvisible"},"setLiftVisible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"sm.visualization.setLiftVisible( visible )\n")),(0,i.kt)("code",null,"Client-Only")," ",(0,i.kt)("br",null),(0,i.kt)("p",null,"Controls the visibility of the lift visualization."),(0,i.kt)("strong",null,"Arguments:")," ",(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("code",null,"visible")," [",(0,i.kt)("strong",null," bool "),"]: Whether the lift is visible or not.")),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);