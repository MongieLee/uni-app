(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"0ac9":function(t,n,e){"use strict";var i=e("f93c"),a=e.n(i);a.a},"2d30":function(t,n,e){"use strict";var i=e("b422"),a=e.n(i);a.a},"2d30a":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uIcon:e("f8d3").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"menu-wrapper"},[e("v-uni-view",[e("u-icon",{attrs:{name:"man-add-fill",size:"64",color:"#0000ff"}}),t._v("考勤")],1),e("v-uni-view",[e("u-icon",{attrs:{name:"car-fill",size:"64",color:"#0000ff"}}),t._v("出差")],1),e("v-uni-view",[e("u-icon",{attrs:{name:"hourglass",size:"64",color:"#0000ff"}}),t._v("加班")],1),e("v-uni-view",[e("u-icon",{attrs:{name:"order",size:"64",color:"#0000ff"}}),t._v("外派")],1),e("v-uni-view",[e("u-icon",{attrs:{name:"minus-people-fill",size:"64",color:"#0000ff"}}),t._v("请假")],1)],1)],1)},r=[]},3088:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-nav-bar-text[data-v-495e41c9]{font-size:%?32?%}.uni-nav-bar-right-text[data-v-495e41c9]{font-size:%?28?%}.uni-navbar__content[data-v-495e41c9]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-495e41c9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-navbar__header[data-v-495e41c9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px}.uni-navbar__header-btns[data-v-495e41c9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer}.uni-navbar__header-btns-left[data-v-495e41c9]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-495e41c9]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-495e41c9]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-495e41c9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-495e41c9]{height:44px}.uni-navbar--fixed[data-v-495e41c9]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-495e41c9]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-495e41c9]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#c8c7cc}',""]),t.exports=n},"3b41":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("9364")),r={name:"UniNavBar",components:{statusBar:a.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")},onClickTitle:function(){this.$emit("clickTitle")}}};n.default=r},"3bd6":function(t,n,e){"use strict";e.r(n);var i=e("3efb"),a=e("59d8");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("0ac9");var o,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"495e41c9",null,!1,i["a"],o);n["default"]=s.exports},"3efb":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-navbar"},[e("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?e("status-bar"):t._e(),e("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[e("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?e("v-uni-view",{staticClass:"uni-navbar__content_view"},[e("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?e("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[e("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),e("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickTitle.apply(void 0,arguments)}}},[t.title.length?e("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[e("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),e("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?e("v-uni-view",{staticClass:"uni-navbar__content_view"},[e("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?e("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[e("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?e("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?e("status-bar"):t._e(),e("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[]},"411f":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[]},"4d29":function(t,n,e){"use strict";e.r(n);var i=e("2d30a"),a=e("bd72");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("2d30");var o,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"51d1e8c2",null,!1,i["a"],o);n["default"]=s.exports},"534e":function(t,n,e){var i=e("e335");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("b7d67c88",i,!0,{sourceMap:!1,shadowMode:!1})},"59d8":function(t,n,e){"use strict";e.r(n);var i=e("3b41"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},"643e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};n.default=a},"72c9":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("3bd6")),r={components:{uniNavBar:a.default},mounted:function(){},data:function(){return{}},methods:{},onLoad:function(){try{var t=uni.getStorageSync("access_token");t&&console.log(t)}catch(n){}}};n.default=r},"80ee":function(t,n,e){"use strict";var i=e("534e"),a=e.n(i);a.a},9364:function(t,n,e){"use strict";e.r(n);var i=e("411f"),a=e("bbdb");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("80ee");var o,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"6fbde844",null,!1,i["a"],o);n["default"]=s.exports},b422:function(t,n,e){var i=e("d275");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("73fc8e85",i,!0,{sourceMap:!1,shadowMode:!1})},bbdb:function(t,n,e){"use strict";e.r(n);var i=e("643e"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},bd72:function(t,n,e){"use strict";e.r(n);var i=e("72c9"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},d275:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.status_bar[data-v-51d1e8c2]{height:0;width:100%;border:1px solid red}.menu-wrapper[data-v-51d1e8c2]{margin-top:5px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.menu-wrapper > uni-view[data-v-51d1e8c2]{padding:%?8?%;width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=n},e335:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-status-bar[data-v-6fbde844]{height:20px}',""]),t.exports=n},f93c:function(t,n,e){var i=e("3088");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("746b437a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);