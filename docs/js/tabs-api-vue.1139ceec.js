(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tabs-api-vue"],{"3a5c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),s("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),s("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),s("api",{attrs:{items:e.slots,title:"Slots"}}),s("api",{attrs:{items:e.events,title:"Events"}})],1)},i=[],r=(s("13d5"),s("109e")),n={value:"",color:"",bgColor:"",items:"",titleClass:"",activeClass:"",noSlider:"",sliderColor:"",contentClass:"",transition:"",fillBar:"",center:"",right:"",card:""},o={"item-title":{description:"Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot."},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.'},"item-content":{description:"Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot."},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.'}},c={input:"Emitted each time the current tab changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the active state of every tab).","update:modelValue":"Emitted each time the current tab changes. It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the active state of every tab).",focus:"Emitted on each tab title focus. The focus DOM event is returned as a parameter."},l={data:function(){return{propsDescs:n,slots:o}},computed:{props:function(){return r["a"].props},events:function(){return r["a"].emits.reduce((function(e,t){return(e[t]={description:c[t]||""})&&e}),{})}}},d=l,p=s("2877"),u=Object(p["a"])(d,a,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=tabs-api-vue.1139ceec.js.map