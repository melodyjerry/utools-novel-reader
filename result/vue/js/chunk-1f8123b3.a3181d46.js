(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f8123b3"],{"0480":function(e,t,i){"use strict";var a=i("0f53"),n=i.n(a);n.a},"0f53":function(e,t,i){},"466d":function(e,t,i){"use strict";var a=i("d784"),n=i("825a"),r=i("50c4"),o=i("1d80"),s=i("8aa5"),d=i("14c3");a("match",1,(function(e,t,i){return[function(t){var i=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i):new RegExp(t)[e](String(i))},function(e){var a=i(t,e,this);if(a.done)return a.value;var o=n(e),l=String(this);if(!o.global)return d(o,l);var c=o.unicode;o.lastIndex=0;var _,u=[],m=0;while(null!==(_=d(o,l))){var h=String(_[0]);u[m]=h,""===h&&(o.lastIndex=s(l,r(o.lastIndex),c)),m++}return 0===m?null:u}]}))},"4de4":function(e,t,i){"use strict";var a=i("23e7"),n=i("b727").filter,r=i("1dde"),o=i("ae40"),s=r("filter"),d=o("filter");a({target:"Array",proto:!0,forced:!s||!d},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,i){var a=i("861d"),n=i("e8b5"),r=i("b622"),o=r("species");e.exports=function(e,t){var i;return n(e)&&(i=e.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?a(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===t?0:t)}},8196:function(e,t,i){"use strict";i.d(t,"e",(function(){return s})),i.d(t,"g",(function(){return l})),i.d(t,"f",(function(){return c})),i.d(t,"j",(function(){return _})),i.d(t,"c",(function(){return u})),i.d(t,"h",(function(){return m})),i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return p})),i.d(t,"i",(function(){return v})),i.d(t,"d",(function(){return g}));i("4de4"),i("d81d"),i("ac1f"),i("466d"),i("5319");var a=i("5c96"),n=i("fa95");function r(e,t){if("0"!==t){var i=n["a"][t].novel_id_to_url;return i.replace("{##novel_id##}",e)}return e}function o(e,t){if("0"!==t){var i=n["a"][t].url_to_novel_id;return e.match(i).groups["id"]}return e}function s(){return window.utools.db.get("setting")}function d(){return s().remind}function l(){return s().style}function c(){return s().keyboard}function _(e){var t=s(),i=window.utools.db.put(e);return i.hasOwnProperty("error")&&i["error"]?(t.remind.settings_saved_remind>=2&&Object(a["Notification"])({title:"错误",message:"保存设置失败",duration:0,type:"error"}),!1):(t.remind.settings_saved_remind>=3&&Object(a["Notification"])({title:"成功",message:"保存设置成功",type:"success"}),!0)}function u(){return window.utools.db.allDocs().filter((function(e){return"setting"!==e._id})).map((function(e){return e._id=o(e._id,e.type),e}))}function m(e,t){e=r(e,t);var i=window.utools.db.remove(e),n=d();return i.hasOwnProperty("error")&&i["error"]?(n.collect_remind>=2&&Object(a["Notification"])({title:"错误",message:"移除书架失败",duration:0,type:"error"}),!1):(n.collect_remind>=3&&Object(a["Notification"])({title:"成功",message:"移除书架成功",type:"success"}),!0)}function h(e){e._id=r(e._id,e.type);var t=window.utools.db.put(e),i=d();return t.hasOwnProperty("error")&&t["error"]?(i.collect_remind>=2&&Object(a["Notification"])({title:"错误",message:"加入书架失败",duration:0,type:"error"}),!1):(i.collect_remind>=3&&Object(a["Notification"])({title:"成功",message:"加入书架成功",type:"success"}),!0)}function p(e,t){e=r(e,t);var i=window.utools.db.get(e);return null!==i}function v(e){e._id=r(e._id,e.type);var t=window.utools.db.put(e),i=d();t.hasOwnProperty("error")&&t["error"]?i.update_reading_section>=2&&Object(a["Notification"])({title:"错误",message:"更新最后阅读章节失败",duration:0,type:"error"}):i.update_reading_section>=3&&Object(a["Message"])({showClose:!0,message:"更新最后阅读章节成功",type:"success"})}function g(e,t){e=r(e,t);var i=window.utools.db.get(e);return i._id=o(i._id,t),i}},b727:function(e,t,i){var a=i("0366"),n=i("44ad"),r=i("7b0b"),o=i("50c4"),s=i("65f0"),d=[].push,l=function(e){var t=1==e,i=2==e,l=3==e,c=4==e,_=6==e,u=5==e||_;return function(m,h,p,v){for(var g,f,b=r(m),y=n(b),w=a(h,p,3),k=o(y.length),x=0,$=v||s,O=t?$(m,k):i?$(m,0):void 0;k>x;x++)if((u||x in y)&&(g=y[x],f=w(g,x,b),e))if(t)O[x]=f;else if(f)switch(e){case 3:return!0;case 5:return g;case 6:return x;case 2:d.call(O,g)}else if(c)return!1;return _?-1:l||c?c:O}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d81d:function(e,t,i){"use strict";var a=i("23e7"),n=i("b727").map,r=i("1dde"),o=i("ae40"),s=r("map"),d=o("map");a({target:"Array",proto:!0,forced:!s||!d},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},f49f:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"setting"},[i("el-dialog",{attrs:{title:"设置",visible:e.dialogVisible,width:"70%","before-close":e.dialog_close},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"快捷键",name:"first"}},[i("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[i("el-form-item",[i("el-switch",{attrs:{"inactive-text":"使用快捷键打开上下章"},model:{value:e.setting_data.keyboard.using_keyboard,callback:function(t){e.$set(e.setting_data.keyboard,"using_keyboard",t)},expression:"setting_data.keyboard.using_keyboard"}})],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyboard.using_keyboard,expression:"setting_data.keyboard.using_keyboard"}]},[i("el-row",{attrs:{gutter:2}},[i("el-col",{attrs:{span:5}},[i("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[i("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 上章快捷键"),i("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),i("el-col",{attrs:{span:17}},[i("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_previous_chapter},model:{value:e.setting_data.keyboard.pre_key,callback:function(t){e.$set(e.setting_data.keyboard,"pre_key",t)},expression:"setting_data.keyboard.pre_key"}})],1)],1)],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyboard.using_keyboard,expression:"setting_data.keyboard.using_keyboard"}]},[i("el-row",{attrs:{gutter:2}},[i("el-col",{attrs:{span:5}},[i("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[i("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 下章快捷键"),i("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),i("el-col",{attrs:{span:17}},[i("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_next_chapter},model:{value:e.setting_data.keyboard.next_key,callback:function(t){e.$set(e.setting_data.keyboard,"next_key",t)},expression:"setting_data.keyboard.next_key"}})],1)],1)],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyboard.using_keyboard,expression:"setting_data.keyboard.using_keyboard"}]},[i("el-row",{attrs:{gutter:2}},[i("el-col",{attrs:{span:5}},[i("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[i("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动快捷键"),i("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),i("el-col",{attrs:{span:17}},[i("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_scroll},model:{value:e.setting_data.keyboard.scroll_key,callback:function(t){e.$set(e.setting_data.keyboard,"scroll_key",t)},expression:"setting_data.keyboard.scroll_key"}})],1)],1)],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyboard.using_keyboard,expression:"setting_data.keyboard.using_keyboard"}]},[i("el-row",{attrs:{gutter:2}},[i("el-col",{attrs:{span:5}},[i("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"设置滚动长度，数字越大滚动远，最大1000"}},[i("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动长度"),i("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),i("el-col",{attrs:{span:17}},[i("el-input-number",{attrs:{min:1,max:1e3},model:{value:e.setting_data.keyboard.scroll_distance,callback:function(t){e.$set(e.setting_data.keyboard,"scroll_distance",t)},expression:"setting_data.keyboard.scroll_distance"}})],1)],1)],1),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyboard.using_keyboard,expression:"setting_data.keyboard.using_keyboard"}]},[i("el-row",{attrs:{gutter:2}},[i("el-col",{attrs:{span:5}},[i("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"设置滚动速度，数字越大滚动越慢，为0时立即滚动，最大20"}},[i("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动速度"),i("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),i("el-col",{attrs:{span:17}},[i("el-input-number",{attrs:{min:0,max:20},model:{value:e.setting_data.keyboard.scroll_speed,callback:function(t){e.$set(e.setting_data.keyboard,"scroll_speed",t)},expression:"setting_data.keyboard.scroll_speed"}})],1)],1)],1)],1)],1),i("el-tab-pane",{attrs:{label:"提醒",name:"second"}},[i("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[i("el-form-item",{attrs:{label:"收藏提醒 "}},[i("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("都不提醒")]),i("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("只有失败提醒")]),i("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("都提醒")])],1),i("el-form-item",{attrs:{label:"章节更新提醒 "}},[i("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("都不提醒")]),i("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("只有失败提醒")]),i("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("都提醒")])],1),i("el-form-item",{attrs:{label:"设置保存提醒 "}},[i("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("都不提醒")]),i("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("只有失败提醒")]),i("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("都提醒")])],1)],1)],1),i("el-tab-pane",{attrs:{label:"阅读外观",name:"third"}},[i("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[i("el-form-item",{attrs:{label:"主题"}},[i("el-select",{attrs:{placeholder:"主题"},model:{value:e.setting_data.style.theme,callback:function(t){e.$set(e.setting_data.style,"theme",t)},expression:"setting_data.style.theme"}},[i("el-option",{attrs:{label:"基础",value:"base-theme"}}),i("el-option",{attrs:{label:"护眼",value:"yellow-theme"}}),i("el-option",{attrs:{label:"暗色",value:"gray-theme"}})],1)],1),i("el-form-item",{attrs:{label:"字体大小"}},[i("el-input-number",{attrs:{min:1,max:40},model:{value:e.setting_data.style.font_size,callback:function(t){e.$set(e.setting_data.style,"font_size",t)},expression:"setting_data.style.font_size"}})],1),i("el-form-item",{attrs:{label:"间隔大小"}},[i("el-input-number",{attrs:{min:1,max:40},model:{value:e.setting_data.style.line_height,callback:function(t){e.$set(e.setting_data.style,"line_height",t)},expression:"setting_data.style.line_height"}})],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.save_settings}},[e._v("保存")]),i("el-button",{attrs:{type:"danger"},on:{click:e.restore_settings}},[e._v("取消")])],1)],1)],1)},n=[],r=i("8196"),o=i("2b0e"),s=o["default"].extend({name:"setting",data:function(){return{setting_data:{_id:"setting",keyboard:{using_keyboard:!1,pre_key:"ArrowLeft",next_key:"ArrowRight",scroll_key:" ",scroll_distance:150,scroll_speed:5},remind:{collect_remind:3,update_reading_section:3,settings_saved_remind:3},style:{theme:"base-theme",font_size:18,line_height:25},version:"0.1.2",_rev:""},activeName:"first"}},props:{dialogVisible:Boolean},methods:{dialog_close:function(){this.$emit("close-dialog")},listen_previous_chapter:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyboard.scroll_key&&t.key!==e.setting_data.keyboard.next_key?e.setting_data.keyboard.pre_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},listen_next_chapter:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyboard.pre_key&&t.key!==e.setting_data.keyboard.scroll_key?e.setting_data.keyboard.next_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},listen_scroll:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyboard.pre_key&&t.key!==e.setting_data.keyboard.next_key?e.setting_data.keyboard.scroll_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},cleared_to_monitor:function(){document.onkeydown=null},save_settings:function(){Object(r["j"])(this.setting_data),this.setting_data=Object(r["e"])(),this.$emit("after-save"),this.$emit("close-dialog")},restore_settings:function(){this.setting_data=Object(r["e"])(),this.$emit("close-dialog")}},created:function(){this.setting_data=Object(r["e"])()}}),d=s,l=(i("0480"),i("2877")),c=Object(l["a"])(d,a,n,!1,null,"455a3410",null);t["a"]=c.exports},fa95:function(e,t,i){"use strict";i.d(t,"b",(function(){return a}));i("ac1f"),i("466d");function a(e,t,i){var a=e(t).attr("href");if(void 0===a)return null;var n=a.match(i);return null===n||void 0===n.groups?null:n.groups["id"]}var n={1:{encoding:"utf-8",url:"https://www.meegoq.com",name:"米趣小说网",novel_id_to_url:"https://www.meegoq.com/info{##novel_id##}.html",url_to_novel_id:"info(?<id>\\d+)\\.html",search:{url:"https://www.meegoq.com/search.htm?keyword={##search_name##}",li:"body > section > div.left > section > ul > li",novel_id:"span.n2 > a",author:"span.a2 > a",latest_chapter_id:"span.c2 > a",latest_chapter_id_regex:"_(?<id>\\d+).html",update_time:"span.t",novel_id_regex:"info(?<id>\\d+)\\.html"},novel:{directory:{url:"https://www.meegoq.com/book{##novel_id##}.html",chapter_id:"body > section > article > ul > li > a",chapter_id_regex:"_(?<id>\\d+).html",slice_left:9,slice_right:!1},info:{url:"https://www.meegoq.com/info{##novel_id##}.html",name:"body > section > div.left > article.info > header > h1",author:"body > section > div.left > article.info > p.detail.pt20 > i:nth-child(1) > a",last_update_time:"body > section > div.left > article.info > p:nth-child(4) > i",latest_chapter_id:"body > section > div.left > article.info > p:nth-child(5) > i > a",latest_chapter_id_regex:"_(?<id>\\d+).html"}},content:{url:"https://www.meegoq.com/book/{##novel_id##}_{##chapter_id##}.html",chapter_name:"body > article > header > h1",novel_name:"body > article > header > div > span:nth-child(1) > a",pre_chapter_id:"body > article > div.operate > ul > li:nth-child(1) > a",pre_chapter_id_regex:"_(?<id>\\d+).html",next_chapter_id:"body > article > div.operate > ul > li.last > a",next_chapter_id_regex:"_(?<id>\\d+).html",content:"#content",content_split:"　　"}},2:{name:"笔趣阁1",url:"https://www.kuxiaoshuo.com/",encoding:"gbk",novel_id_to_url:"https://www.kuxiaoshuo.com/{##novel_id##}/",url_to_novel_id:"com\\/(?<id>.*?)\\/",search:{url:"https://www.kuxiaoshuo.com/modules/article/search.php?searchkey={##search_name##}",li:"#hotcontent > table > tbody > tr",novel_id:"td:nth-child(1) > a",author:"td:nth-child(3)",latest_chapter_id:"td:nth-child(2) > a",latest_chapter_id_regex:"\\/(?<id>\\d+).html",update_time:"td:nth-child(5)",novel_id_regex:"com\\/(?<id>.*?)\\/"},novel:{directory:{url:"https://www.kuxiaoshuo.com/{##novel_id##}/",chapter_id:"#list > dl > dd > a",chapter_id_regex:"\\/(?<id>\\d+).html",slice_left:9,slice_right:!1},info:{url:"https://www.kuxiaoshuo.com/{##novel_id##}/",name:"#info > h1",author:"#info > p:nth-child(2)",last_update_time:"#info > p:nth-child(4)",latest_chapter_id:"#list > dl > dd:nth-child(2) > a",latest_chapter_id_regex:"\\/(?<id>\\d+).html"}},content:{url:"https://www.kuxiaoshuo.com/{##novel_id##}/{##chapter_id##}.html",chapter_name:"#wrapper > div.content_read > div > div.bookname > h1",novel_name:"#wrapper > div.content_read > div > div.con_top > a:nth-child(4)",pre_chapter_id:"#wrapper > div.content_read > div > div.bookname > div.bottem1 > a:nth-child(3)",pre_chapter_id_regex:"\\/(?<id>\\d+).html",next_chapter_id:"#wrapper > div.content_read > div > div.bookname > div.bottem1 > a:nth-child(5)",next_chapter_id_regex:"\\/(?<id>\\d+).html",content:"#content",content_split:"　　"}},3:{encoding:"utf-8",url:"https://www.9txs.com/",name:"九桃小说",novel_id_to_url:"https://www.9txs.com/book/{##novel_id##}.html",url_to_novel_id:"\\/(?<id>\\w+)\\.html",search:{url:"https://www.9txs.com/search.html?searchkey={##search_name##}",li:"body > div.main > div > div.box.left.w_840 > ul > li",novel_id:"a.bookname",author:"p:nth-child(4) > a.author",latest_chapter_id:"a.chapter",latest_chapter_id_regex:"\\/(?<id>\\w+)\\.html",update_time:!1,novel_id_regex:"\\/(?<id>\\w+)\\.html"},novel:{directory:{url:"https://www.9txs.com/book/{##novel_id##}/",chapter_id:"body > div.main > div > div:nth-child(2) > div.read > dl > dd > a",chapter_id_regex:"\\/(?<id>\\w+)\\.html",slice_left:12,slice_right:!1},info:{url:"https://www.9txs.com/book/{##novel_id##}.html",name:"body > div.main > div > div.left.w_860 > div:nth-child(1) > div.detail > h1",author:"body > div.main > div > div.left.w_860 > div:nth-child(1) > div.detail > p:nth-child(3) > a:nth-child(1)",latest_chapter_id:"body > div.main > div > div.left.w_860 > div:nth-child(1) > div.detail > p:nth-child(6) > a",last_update_time:"body > div.main > div > div.left.w_860 > div:nth-child(1) > div.detail > p:nth-child(6) > span",latest_chapter_id_regex:"\\/(?<id>\\w+)\\.html"}},content:{url:"https://www.9txs.com/book/{##novel_id##}/{##chapter_id##}.html",chapter_name:"#chapter > div.main > div > div.area > h1",novel_name:"#chapter > div.main > div > div.box > div > a:nth-child(5)",pre_chapter_id:"#chapter > div.main > div > div.area > div.page > a:nth-child(1)",pre_chapter_id_regex:"\\/(?<id>\\w+)\\.html",next_chapter_id:"#chapter > div.main > div > div.area > div.page > a:nth-child(3)",next_chapter_id_regex:"\\/(?<id>\\w+)\\.html",content:"#content > p",content_split:!1}}};t["a"]=n}}]);