"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[9361],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),m=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=m(n.components);return r.createElement(l.Provider,{value:e},n.children)},p="mdxType",b={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),p=m(t),u=a,d=p["".concat(l,".").concat(u)]||p[u]||b[u]||i;return t?r.createElement(d,o(o({ref:e},c),{},{components:t})):r.createElement(d,o({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[p]="string"==typeof n?n:a,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1917:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2,title:"Environment Table",hide_title:!0,"sidebar-label":"Environment Table"},o=void 0,s={unversionedId:"Terrain-Script-Environment/Environment_Table",id:"Terrain-Script-Environment/Environment_Table",title:"Environment Table",description:"Environment Table",source:"@site/docs/Terrain-Script-Environment/Environment_Table.md",sourceDirName:"Terrain-Script-Environment",slug:"/Terrain-Script-Environment/Environment_Table",permalink:"/docs/Terrain-Script-Environment/Environment_Table",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Terrain-Script-Environment/Environment_Table.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Environment Table",hide_title:!0,"sidebar-label":"Environment Table"},sidebar:"tutorialSidebar",previous:{title:"Info",permalink:"/docs/Terrain-Script-Environment/Info"},next:{title:"Color",permalink:"/docs/Terrain-Script-Environment/Userdata/Color"}},l={},m=[{value:"Environment Table",id:"environment-table",level:2}],c={toc:m},p="wrapper";function b(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"environment-table"},"Environment Table"),(0,a.kt)("p",null,"This is the raw Lua environment table of the terrain script environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"unsafe_env = {\n    print = print,\n    dofile = dofile,\n    type = type,\n    assert = assert,\n    error = error,\n    ipairs = ipairs,\n    next = next,\n    pairs = pairs,\n    pcall = pcall,\n    select = select,\n    tonumber = tonumber,\n    tostring = tostring,\n    type = type,\n    unpack = unpack,\n    _VERSION = _VERSION,\n    xpcall = xpcall,\n    gcinfo = gcinfo,\n    class = class,\n    sm = {\n        version = sm.version,\n        isHost = sm.isHost,\n        isServerMode = sm.isServerMode,\n        exists = sm.exists,\n        terrainData = sm.terrainData,\n        terrainTile = sm.terrainTile,\n        terrainGeneration = sm.terrainGeneration,\n        voxelTerrainGrid = sm.voxelTerrainGrid,\n        world = sm.world,\n        json = sm.json,\n        noise = sm.noise,\n        util = sm.util,\n        log = sm.log,\n        vec3 = sm.vec3,\n        quat = sm.quat,\n        uuid = sm.uuid,\n        color = sm.color\n    },\n    string = {\n        byte = string.byte,\n        char = string.char,\n        find = string.find,\n        format = string.format,\n        gmatch = string.gmatch,\n        gsub = string.gsub,\n        len = string.len,\n        lower = string.lower,\n        match = string.match,\n        rep = string.rep,\n        reverse = string.reverse,\n        sub = string.sub,\n        upper = string.upper\n    },\n    table = {\n        insert = table.insert,\n        maxn = table.maxn,\n        remove = table.remove,\n        sort = table.sort,\n        concat = table.concat,\n        getn = table.getn\n    },\n    math = {\n        abs = math.abs,\n        acos = math.acos,\n        asin = math.asin,\n        atan = math.atan,\n        atan2 = math.atan2,\n        ceil = math.ceil,\n        cos = math.cos,\n        cosh = math.cosh,\n        deg = math.deg,\n        exp = math.exp,\n        floor = math.floor,\n        fmod = math.fmod,\n        frexp = math.frexp,\n        huge = math.huge,\n        ldexp = math.ldexp,\n        log = math.log,\n        log10 = math.log10,\n        max = math.max,\n        min = math.min,\n        modf = math.modf,\n        pi = math.pi,\n        pow = math.pow,\n        rad = math.rad,\n        random = math.random,\n        sin = math.sin,\n        sinh = math.sinh,\n        sqrt = math.sqrt,\n        tan = math.tan,\n        tanh = math.tanh,\n        randomseed = math.randomseed\n    },\n    bit = {\n        tobit = bit.tobit,\n        tohex = bit.tohex,\n        bnot = bit.bnot,\n        band = bit.band,\n        bor = bit.bor,\n        bxor = bit.bxor,\n        lshift = bit.lshift,\n        rshift = bit.rshift,\n        arshift = bit.arshift,\n        rol = bit.rol,\n        ror = bit.ror,\n        bswap = bit.bswap\n    },\n    os = {\n        clock = os.clock,\n        difftime = os.difftime,\n        time = os.time\n    }\n}\n")))}b.isMDXComponent=!0}}]);