(function(t){function e(e){for(var n,a,d=e[0],i=e[1],l=e[2],u=0,c=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&c.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);b&&b(e);while(c.length)c.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var d=r[a];0!==o[d]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o={app:0},s=[];function d(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5c49dfe7","chunk-767fa28a":"2c07cbd6"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"chunk-767fa28a":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-767fa28a":"ba5b998c"}[t]+".css",o=i.p+n,s=document.getElementsByTagName("link"),d=0;d<s.length;d++){var l=s[d],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var c=document.getElementsByTagName("style");for(d=0;d<c.length;d++){l=c[d],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],b.parentNode.removeChild(b),r(s)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=d(t);var c=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(b);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[t]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var b=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var n=r("2b0e"),a=(r("d3b7"),r("bc3a")),o=r.n(a),s={},d=o.a.create(s);d.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=d,window.axios=d,Object.defineProperties(t.prototype,{axios:{get:function(){return d}},$axios:{get:function(){return d}}})},n["default"].use(Plugin);Plugin;var i=r("5f5b");r("ab8b"),r("2dd8");n["default"].use(i["a"]);var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"secondary",sticky:""}},[r("b-navbar-brand",{attrs:{to:"/"}},[t._v("DnD 5E 中文查詢區")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item-dropdown",{staticClass:"mr-4 ml-4",attrs:{text:"規則",right:""}},[r("b-dropdown-item",{attrs:{disabled:""}},[t._v("快速參照")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("選用規則,變體與雜項")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("雜項表格")]),r("b-dropdown-divider"),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("玩家手冊")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("地下城主手冊")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("怪物手冊")])],1),r("b-nav-item-dropdown",{staticClass:"mr-4",attrs:{text:"我是玩家",right:""}},[r("b-dropdown-item",{attrs:{to:"/Player/Class"}},[t._v("職業")]),r("b-dropdown-item",{attrs:{to:"/Player/Background"}},[t._v("背景")]),r("b-dropdown-item",{attrs:{to:"/Player/Races"}},[t._v("種族")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("專長")]),r("b-dropdown-divider"),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("屬性產生器")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("名字產生器")])],1),r("b-nav-item-dropdown",{staticClass:"mr-4",attrs:{text:"我是DM",right:""}},[r("b-dropdown-item",{attrs:{disabled:""}},[t._v("異教或惡魔恩惠")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("特殊物品")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("陷阱與危害")])],1),r("b-nav-item-dropdown",{staticClass:"mr-4",attrs:{text:"參考資料",right:""}},[r("b-dropdown-item",{attrs:{disabled:""}},[t._v("語言")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("子職業能力")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("恩惠與獎勵")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("法術")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("狀態與疾病")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("神祇")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("物品")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("動作")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("載具")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("靈能")]),r("b-dropdown-item",{attrs:{disabled:""}},[t._v("怪物圖鑑")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"搜尋"}}),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",variant:"dark"}},[t._v("搜尋")])],1)],1)],1)],1),r("router-view")],1)},u=[],c=(r("5c0b"),r("2877")),b={},p=Object(c["a"])(b,l,u,!1,null,null,null),f=p.exports,m=r("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"})},g=[],_={name:"HelloWorld",props:{msg:String}},y=_,P=(r("cd3d"),Object(c["a"])(y,w,g,!1,null,"407a8148",null)),j=P.exports,x={name:"Home",components:{HelloWorld:j}},C=x,k=Object(c["a"])(C,v,h,!1,null,null,null),O=k.exports;n["default"].use(m["a"]);var E=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/player/:type",name:"Player",component:function(){return r.e("chunk-767fa28a").then(r.bind(null,"3a4b"))}}],S=new m["a"]({mode:"history",base:"/",routes:E}),A=S,T=r("2f62");n["default"].use(T["a"]);var H=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:A,store:H,render:function(t){return t(f)}}).$mount("#app")},"58d0":function(t,e,r){},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(t,e,r){},cd3d:function(t,e,r){"use strict";var n=r("58d0"),a=r.n(n);a.a}});
//# sourceMappingURL=app.d4dc1626.js.map