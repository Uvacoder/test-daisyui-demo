(window.webpackJsonp=window.webpackJsonp||[]).push([[61,10,20],{402:function(t,e,n){var o=n(18),l="["+n(403)+"]",c=RegExp("^"+l+l+"*"),r=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},404:function(t,e,n){"use strict";var o=n(10),l=n(4),c=n(81),r=n(14),d=n(12),h=n(35),v=n(162),f=n(57),_=n(5),m=n(59),y=n(58).f,C=n(25).f,x=n(13).f,w=n(402).trim,I="Number",E=l.Number,N=E.prototype,S=h(m(N))==I,T=function(t){var e,n,o,l,c,r,d,code,h=f(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=w(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+h}for(r=(c=h.slice(2)).length,d=0;d<r;d++)if((code=c.charCodeAt(d))<48||code>l)return NaN;return parseInt(c,o)}return+h};if(c(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var k,D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(S?_((function(){N.valueOf.call(n)})):h(n)!=I)?v(new E(T(e)),n,D):T(e)},A=o?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;A.length>O;O++)d(E,k=A[O])&&!d(D,k)&&x(D,k,C(E,k));D.prototype=N,N.constructor=D,r(l,I,D)}},405:function(t,e,n){"use strict";n.r(e);n(45),n(404),n(26),n(36),n(82),n(112),n(43),n(46),n(163),n(60),n(161),n(83),n(44);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,n){"use strict";var o=n(2),l=n(402).trim;o({target:"String",proto:!0,forced:n(407)("trim")},{trim:function(){return l(this)}})},407:function(t,e,n){var o=n(5),l=n(403);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},408:function(t,e,n){"use strict";n.r(e);n(406),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,l=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+c),e.appendChild(o));return e}var e,div;this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim()+"\n",t(div,0).innerHTML)}},mounted:function(){this.setSrc()}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[t.nocode?t._e():n("div",{staticClass:"inline-block select-none",on:{click:function(e){t.showcode=!t.showcode}}},[t.showcode?t._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),t._v(" "),t.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):t._e()],1),t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(160).default,CollapseTransition:n(405).default})},436:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{DAISYUI_VERSION:"0.22.1"}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"mb-4 text-base-content text-opacity-60"},[t._v("\n      DaisyUI is themeable, powered by CSS variables.\n    ")]),t._v(" "),n("p",{staticClass:"mb-4 text-lg font-bold"},[t._v("\n      List of included themes\n    ")]),t._v(" "),n("div",{staticClass:"prose"},[n("ul",[n("li",{staticClass:"h-6"},[t._v("aqua")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("black")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("bumblebee")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("cupcake")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("cyberpunk")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("dark")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("dracula")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("fantasy")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("forest")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("garden")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("halloween")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("light (default)")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("luxury")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("pastel")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("retro")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("synthwave")]),t._v(" "),n("li",{staticClass:"h-6"},[t._v("valentine")])])]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      The default theme is "),n("span",{staticClass:"badge badge-outline"},[t._v("light")]),t._v(" theme and it's included in DaisyUI even if you disable the "),n("span",{staticClass:"badge badge-outline"},[t._v("themes")]),t._v(" config.\n    ")]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      You can also use the "),n("span",{staticClass:"badge badge-outline"},[t._v("themes.css")]),t._v(" file from CDN.\n    ")]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      If you don't want to include themes, you need to disable "),n("span",{staticClass:"badge badge-outline"},[t._v("themes")]),t._v(" config.\n    ")]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      To use your own theme, please see\n      "),n("NuxtLink",{staticClass:"inline-block btn btn-sm",attrs:{to:"/docs/add-themes"}},[t._v("\n        add themes\n      ")]),t._v("\n      page\n    ")],1),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",[t._v("Enable themes")])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Mehtod 1:")]),t._v(" "),n("span",[t._v("Config file")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[n("span",{staticClass:"badge badge-outline"},[t._v("themes")]),t._v(" config is enabled by default. you just need to safelist "),n("span",{staticClass:"badge badge-outline"},[t._v("/data-theme$/")]),t._v(" for purge options on your "),n("span",{staticClass:"badge badge-outline"},[t._v("tailwind.config.js")]),t._v(" file.\n    ")]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      You don't need to do anything if you're using Tailwind's "),n("span",{staticClass:"badge badge-outline"},[t._v("mode: 'jit'")]),t._v(" config.\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("module.exports = {")]),t._v("\n  "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("...")]),t._v("\n\n    purge: {\n      content: ['yourfiles/**/*.html'],\n      options: {\n        safelist: [\n          "),n("span",{staticClass:"badge badge-primary"},[t._v("/data-theme$/,")]),t._v("\n        ]\n      },\n    },\n\n    daisyui: {\n      styled: true,\n      "),n("span",{staticClass:"badge badge-primary"},[t._v("themes: true,")]),t._v("\n      rtl: false,\n    },\n\n  "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("...")]),t._v("\n  "),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("}")])])])])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Mehtod 2:")]),t._v(" "),n("span",[t._v("Using CDN")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      Alternatively you can load included themes from CDN:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code"},[n("pre",[n("code",[n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v('<link href="')]),t._v("https://cdn.jsdelivr.net/npm/daisyui@"+t._s(t.DAISYUI_VERSION)+"/dist/themes.css"),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v('" rel="stylesheet" type="text/css" />')])])])])]),t._v(" "),n("h2",{staticClass:"my-6 text-3xl font-bold"},[n("span",[t._v("How to use themes?")])]),t._v(" "),n("p",{staticClass:"my-4 text-lg"},[t._v("\n      And you need to add "),n("span",{staticClass:"badge badge-outline"},[t._v('data-theme="THEME_NAME"')]),t._v(" to <html> tag.\n    ")]),t._v(" "),n("p",{staticClass:"my-4 text-lg prose"},[t._v("\n      I suggest using "),n("a",{attrs:{href:"https://github.com/saadeghi/theme-change",target:"_blank"}},[t._v("them-change")]),t._v(" for this, so you can switch themes and save selected theme in local storage.\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code"},[n("pre",[n("code",[n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v("<html")]),t._v(' data-theme="dark"'),n("span",{staticClass:"text-neutral-content text-opacity-20"},[t._v(">")])])])])])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn lg:text-lg",attrs:{to:"/docs/add-themes"}},[t._v("\n      Next: Add themes\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"my-6 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Included Themes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(408).default,Icon:n(160).default})}}]);