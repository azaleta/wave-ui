import{n as t,E as s}from"./index.56be13dc.js";import"./vendor.f7aaafb3.js";const e={};var n=t({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Default")]),e("example",{scopedSlots:t._u([{key:"pug",fn:function(){},proxy:!0}])})],1)}),[],!1,(function(t){for(let s in e)this[s]=e[s]}),null,null,null);n.options.__file="src/documentation/views/ui-components/steps/examples.vue";var i=n.exports;const o={},l={},r={},a={};var p=t({data:()=>({propsDescs:o,slots:l}),computed:{props:()=>s.props,events:()=>s.emits.reduce(((t,s)=>(t[s]=r[s]||{})&&t),{})}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"w-divider my12"}),e("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),e("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The missing props descriptions will be added shortly (all the props are already listed).")]),e("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),e("component-api",{attrs:{items:t.slots,title:"Slots"}}),e("component-api",{attrs:{items:t.events,title:"Events"}})],1)}),[],!1,(function(t){for(let s in a)this[s]=a[s]}),null,null,null);p.options.__file="src/documentation/views/ui-components/steps/api.vue";var c=p.exports;const u={};var m=t({components:{Examples:i,Api:c}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("main",[e("ui-component-title",{attrs:{slug:"w-steps","in-progress":""}},[t._v("w-steps")]),e("examples"),e("api")],1)}),[],!1,(function(t){for(let s in u)this[s]=u[s]}),null,null,null);m.options.__file="src/documentation/views/ui-components/steps/index.vue";var v=m.exports;export default v;