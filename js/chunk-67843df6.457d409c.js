(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67843df6"],{"168e":function(t,e,n){"use strict";var r=n("a73e"),i=n.n(r);i.a},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),o=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"62dc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Reference"},[n("b-breadcrumb",{attrs:{items:t.items}}),"Conditions"===this.$route.params.type?n("Conditions"):t._e()],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Conditions"},[n("listNDetail",{attrs:{field:t.field,itemList:t.featsList,itemDetail:t.featDetail}})],1)},o=[],s=(n("d81d"),n("b64b"),n("dfd0")),c=n("bc3a").default,l={name:"Conditions",components:{listNDetail:s["a"]},data:function(){return{featsList:[],field:[{key:"type",label:"類型",sortable:!0},{key:"chtName",label:"名稱",sortable:!0},{key:"book",label:"資源",sortable:!0}],selectedFeat:"",featDetail:[]}},mounted:function(){var t=this,e=this;c.get("/dnd-5e-standard-book/data/Conditions.json").then((function(n){e.featsList=Object.keys(n.data).map((function(t){return e.$set(n.data[t],"key",t),n.data[t]})).sort(t.sortProperty("name"))})).catch((function(t){console.log(t)})),c.get("/dnd-5e-standard-book/data/conditions/Conditions-Detail.json").then((function(t){e.featDetail=t.data})).catch((function(t){console.log(t)}))},methods:{sortProperty:function(t){return function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0}}},computed:{},filters:{bookColor:function(t){switch(t){case"PHB":return"text-blue"}}}},u=l,f=(n("a4c7"),n("2877")),d=Object(f["a"])(u,a,o,!1,null,"5c87b880",null),b=d.exports,m={name:"Reference",components:{Conditions:b},data:function(){return{items:[{}],pType:""}},mounted:function(){this.pType=this.$route.params.type,this.bread()},methods:{bread:function(){var t=this,e=[{text:"首頁",to:{name:"Home"}},{text:"參考資料",active:!0},{text:"",active:!0}];switch(t.pType){case"Conditions":e[2].text="狀態與疾病";break}t.items=e}}},p=m,v=Object(f["a"])(p,r,i,!1,null,null,null);e["default"]=v.exports},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),o=n("ae40"),s="find",c=!0,l=o(s);s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(s)},"9c5a":function(t,e,n){},a4c7:function(t,e,n){"use strict";var r=n("9c5a"),i=n.n(r);i.a},a73e:function(t,e,n){},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(a(s,t))return s[t];e||(e={});var n=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,f=a(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(l&&!r)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,f)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in a)&&i(a,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),a=n("df75"),o=n("d039"),s=o((function(){a(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(t){return a(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(b,m,p,v){for(var h,y,_=a(b),k=i(_),C=r(m,p,3),D=o(k.length),g=0,x=v||s,A=e?x(b,D):n?x(b,0):void 0;D>g;g++)if((d||g in k)&&(h=k[g],y=C(h,g,_),t))if(e)A[g]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return g;case 2:c.call(A,h)}else if(u)return!1;return f?-1:l||u?u:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),o=n("ae40"),s=a("map"),c=o("map");r({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dfd0:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ListNDetail"},[n("b-container",{attrs:{fluid:""}},[n("b-row",[t.itemList?n("b-col",[n("b-card",{attrs:{"no-body":""}},[n("b-form-tags"),n("b-table",{staticClass:"small mb-0",attrs:{small:"",hover:"",striped:"","sticky-header":"87vh",borderless:"",fields:t.field,items:t.itemList},on:{"row-clicked":t.itemSelect},scopedSlots:t._u([{key:"cell(book)",fn:function(e){var r=e.value;return[n("span",{class:t._f("bookColor")(r)},[t._v(" "+t._s(r)+" ")])]}}],null,!1,4047795191)})],1)],1):t._e(),t.itemDetail?n("b-col",[n("br"),t.selectedItemDetail?n("b-card",{attrs:{title:t.selectedItemDetail.chtName,"sub-title":t.selectedItemDetail.name}},[t.selectedItemDetail.prerequisite?n("b-card-text",[n("small",{staticClass:"text-muted"},[t._v("先決條件："+t._s(t.selectedItemDetail.prerequisite))])]):t._e(),n("hr"),n("b-card-text",{attrs:{align:"left"}},t._l(t.selectedItemDetail.content,(function(e,r){return n("span",{key:r},["string"===typeof e?n("span",[t._v(t._s(e)),n("br")]):t._e(),"object"===typeof e&&Array.isArray(e)?n("ul",t._l(e,(function(e,r){return n("li",{key:r},[t._v(t._s(e))])})),0):t._e(),Array.isArray(e)?t._e():n("b-table",{attrs:{fields:e.field,items:e.items}})],1)})),0)],1):t._e()],1):t._e()],1)],1)],1)},i=[],a=(n("7db0"),n("b0c0"),{name:"ListNDetail",components:{},props:{field:Array,itemList:Array,itemDetail:Array},data:function(){return{selectedItem:""}},mounted:function(){},methods:{itemSelect:function(t,e){var n=this;n.selectedItem=t.name}},computed:{selectedItemDetail:function(){var t=this;return t.itemDetail.find((function(e){return t.selectedItem?e.itemName===t.selectedItem:""}))}},watch:{itemList:function(){this.selectedItem=this.itemList[0].name}},filters:{bookColor:function(t){switch(t){case"PHB":return"text-blue"}}}}),o=a,s=(n("168e"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"38bca4f8",null);e["a"]=c.exports},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-67843df6.457d409c.js.map