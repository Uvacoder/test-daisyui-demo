(window.webpackJsonp=window.webpackJsonp||[]).push([[64,7,10,20],{402:function(t,e,n){var o=n(18),r="["+n(403)+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},404:function(t,e,n){"use strict";var o=n(10),r=n(4),c=n(81),l=n(14),d=n(12),f=n(35),h=n(162),m=n(57),v=n(5),y=n(59),_=n(58).f,C=n(25).f,w=n(13).f,x=n(402).trim,E="Number",I=r.Number,S=I.prototype,T=f(y(S))==E,N=function(t){var e,n,o,r,c,l,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=x(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,o)}return+f};if(c(E,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var k,D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(T?v((function(){S.valueOf.call(n)})):f(n)!=E)?h(new I(N(e)),n,D):N(e)},O=o?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;O.length>A;A++)d(I,k=O[A])&&!d(D,k)&&w(D,k,C(I,k));D.prototype=S,S.constructor=D,l(r,E,D)}},405:function(t,e,n){"use strict";n.r(e);n(45),n(404),n(26),n(36),n(82),n(112),n(43),n(46),n(163),n(60),n(161),n(83),n(44);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,n){"use strict";var o=n(2),r=n(402).trim;o({target:"String",proto:!0,forced:n(407)("trim")},{trim:function(){return r(this)}})},407:function(t,e,n){var o=n(5),r=n(403);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},408:function(t,e,n){"use strict";n.r(e);n(406),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,r=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+r),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+c),e.appendChild(o));return e}var e,div;this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim()+"\n",t(div,0).innerHTML)}},mounted:function(){this.setSrc()}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[t.nocode?t._e():n("div",{staticClass:"inline-block select-none",on:{click:function(e){t.showcode=!t.showcode}}},[t.showcode?t._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),t._v(" "),t.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):t._e()],1),t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(160).default,CollapseTransition:n(405).default})},409:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(409).default})},467:function(t,e,n){"use strict";n.r(e);var o=n(6),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"prose text-base-content"},[t._v("\n      Once you "),n("NuxtLink",{attrs:{to:"/docs/install"}},[t._v("installed")]),t._v(" DaisyUI, you can use component classes like "),n("span",{staticClass:"badge badge-outline"},[t._v("btn")]),t._v(", "),n("span",{staticClass:"badge badge-outline"},[t._v("card")]),t._v(", etc...\n    ")],1),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      So instead of making a button like this:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v('<button class="'),n("span",{staticClass:"text-warning"},[t._v("inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600")]),t._v('">Tailwind Button</button>')])])])]),t._v(" "),n("div",{staticClass:"w-full my-2"},[n("button",{staticClass:"inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600"},[t._v("Tailwind Button")])]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      You just need this:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[t._v('<button class="'),n("span",{staticClass:"text-success"},[t._v("btn btn-primary")]),t._v('">DaisyUI Button</button>')])])])]),t._v(" "),n("div",{staticClass:"w-full my-2"},[n("button",{staticClass:"btn btn-primary"},[t._v("DaisyUI Button")])]),t._v(" "),n("p",{staticClass:"max-w-4xl my-4"},[t._v("\n      As you can see: cleaner code, better animations, better accessibility, and more importantly, easily themeable.\n    ")])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/docs/config"}},[t._v("\n      Next: Config\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Add component classes")]),t._v(" "),n("span",[t._v("to your HTML: ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(409).default,Wrapper:n(408).default,Icon:n(160).default})}}]);