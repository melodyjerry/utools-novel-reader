(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0435c87b"],{"14b1":function(e,t,a){"use strict";var n=a("81d5"),i=a.n(n);i.a},"4de4":function(e,t,a){"use strict";var n=a("23e7"),i=a("b727").filter,s=a("1dde"),r=a("ae40"),o=s("filter"),l=r("filter");n({target:"Array",proto:!0,forced:!o||!l},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,a){var n=a("861d"),i=a("e8b5"),s=a("b622"),r=s("species");e.exports=function(e,t){var a;return i(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?n(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"793e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"router",attrs:{id:"bookshelf"}},[a("el-container",{staticStyle:{height:"100%"}},[a("el-header",[a("my-navigation",{attrs:{"active-index":"1"},on:{"created-method":e.created_method,"after-save":e.get_setting_info}})],1),a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:!0,data:e.all_book_list}},[a("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{underline:!1},on:{click:function(a){return e.go_to_novel(t.row._id,t.row.type)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])},[a("template",{slot:"header"},[e._v("小说名")])],2),a("el-table-column",{attrs:{prop:"author",label:"作者"}}),a("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{underline:!1},on:{click:function(a){return e.go_to_content(t.row._id,t.row.read_chapter.cid,t.row.type)}}},[e._v(" "+e._s(t.row.read_chapter.name)+" ")])]}}])},[a("template",{slot:"header"},[e._v("最后阅读")])],2),a("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{underline:!1,type:"danger"},on:{click:function(a){return e.cancel_collect(t.row._id)}}},[e._v("移除 ")])]}}])},[a("template",{slot:"header"},[e._v("管理")])],2)],1)],1)],1)],1)},i=[],s=(a("4de4"),a("f11d")),r={name:"bookshelf",components:{"my-navigation":s["a"]},data:function(){return{loading:!1,all_book_list:[],remind:{collect_remind:3,update_reading_section:3,settings_saved_remind:3}}},methods:{go_to_novel:function(e,t){this.myHistory.addNewItem({name:"novel",params:{nid:e},query:{type:t}}),this.$router.push({name:"novel",params:{nid:e},query:{type:t}})},go_to_content:function(e,t,a){this.myHistory.addNewItem({name:"content",params:{nid:e,cid:t},query:{type:a}}),this.$router.push({name:"content",params:{nid:e,cid:t},query:{type:a}})},cancel_collect:function(e){var t=window.utools.db.remove(e);t.hasOwnProperty("error")&&t["error"]?this.remind.collect_remind>=2&&this.$notify({title:"错误",message:"移除书架失败",duration:0,type:"error"}):(this.whether_collection=!1,this.remind.collect_remind>=3&&this.$notify({title:"成功",message:"移除书架成功",type:"success"})),this.all_book_list=window.utools.db.allDocs().filter((function(e){return"setting"!==e._id}))},created_method:function(){var e=this;this.all_book_list=window.utools.db.allDocs().filter((function(e){return"setting"!==e._id})),window.utools.setSubInput((function(t){var a=t.text;e.myHistory.addNewItem({name:"search",query:{name:a,type:"1"}}),e.$router.push({name:"search",query:{name:a,type:"1"}})}),"搜索在线小说"),window.utools.subInputBlur(),document.onkeydown=void 0,this.remind=window.utools.db.get("setting").remind},get_setting_info:function(){this.remind=window.utools.db.get("setting").remind}},created:function(){this.created_method()}},o=r,l=a("2877"),d=Object(l["a"])(o,n,i,!1,null,"94dbd80c",null);t["default"]=d.exports},"81d5":function(e,t,a){},b727:function(e,t,a){var n=a("0366"),i=a("44ad"),s=a("7b0b"),r=a("50c4"),o=a("65f0"),l=[].push,d=function(e){var t=1==e,a=2==e,d=3==e,c=4==e,_=6==e,u=5==e||_;return function(m,g,p,f){for(var y,b,v=s(m),h=i(v),k=n(g,p,3),w=r(h.length),x=0,$=f||o,S=t?$(m,w):a?$(m,0):void 0;w>x;x++)if((u||x in h)&&(y=h[x],b=k(y,x,v),e))if(t)S[x]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return x;case 2:l.call(S,y)}else if(c)return!1;return _?-1:d||c?c:S}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},f11d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Navigation"},[a("el-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.select}},[e._l(e.navigation_item,(function(t,n){return a("el-menu-item",{key:n,attrs:{index:String(n)}},[e._v(e._s(t.name)+" ")])})),a("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(t){e.dialogVisible=!0}}},[a("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),a("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(t){return e.$emit("created-method")}}},[a("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],2),a("my-setting",{attrs:{"dialog-visible":e.dialogVisible},on:{"close-dialog":function(t){e.dialogVisible=!1},"after-save":function(t){return e.$emit("after-save")}}})],1)},i=[],s=a("f49f"),r={name:"Navigation",components:{"my-setting":s["a"]},data:function(){return{navigation_item:[{name:"搜索",path:{name:"search",query:{type:"1"}}},{name:"书架",path:{name:"bookshelf"}},{name:"读取文件",path:{name:"read_file"}},{name:"测试",path:{name:"text"}}],dialogVisible:!1}},props:{activeIndex:String},methods:{select:function(e){this.myHistory.addNewItem(this.navigation_item[e].path),this.$router.push(this.navigation_item[e].path)}}},o=r,l=a("2877"),d=Object(l["a"])(o,n,i,!1,null,"6150565c",null);t["a"]=d.exports},f49f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"setting"}},[a("el-dialog",{attrs:{title:"设置",visible:e.dialogVisible,width:"70%","before-close":e.dialog_close},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"快捷键",name:"first"}},[a("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[a("el-form-item",[a("el-switch",{attrs:{"inactive-text":"使用快捷键打开上下章"},model:{value:e.setting_data.keyborad.using_keyboard,callback:function(t){e.$set(e.setting_data.keyborad,"using_keyboard",t)},expression:"setting_data.keyborad.using_keyboard"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[a("el-row",{attrs:{gutter:2}},[a("el-col",{attrs:{span:5}},[a("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[a("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 上章快捷键"),a("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),a("el-col",{attrs:{span:17}},[a("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_previous_chapter},model:{value:e.setting_data.keyborad.pre_key,callback:function(t){e.$set(e.setting_data.keyborad,"pre_key",t)},expression:"setting_data.keyborad.pre_key"}})],1)],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[a("el-row",{attrs:{gutter:2}},[a("el-col",{attrs:{span:5}},[a("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[a("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 下章快捷键"),a("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),a("el-col",{attrs:{span:17}},[a("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_next_chapter},model:{value:e.setting_data.keyborad.next_key,callback:function(t){e.$set(e.setting_data.keyborad,"next_key",t)},expression:"setting_data.keyborad.next_key"}})],1)],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[a("el-row",{attrs:{gutter:2}},[a("el-col",{attrs:{span:5}},[a("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"鼠标点击输入框，输入框亮起时即可输入你想要的快捷键,目前只支持一个键"}},[a("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动快捷键"),a("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),a("el-col",{attrs:{span:17}},[a("el-input",{attrs:{readonly:""},on:{blur:e.cleared_to_monitor,focus:e.listen_scroll},model:{value:e.setting_data.keyborad.scroll_key,callback:function(t){e.$set(e.setting_data.keyborad,"scroll_key",t)},expression:"setting_data.keyborad.scroll_key"}})],1)],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[a("el-row",{attrs:{gutter:2}},[a("el-col",{attrs:{span:5}},[a("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"设置滚动长度，数字越大滚动远，最大1000"}},[a("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动长度"),a("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:1,max:1e3},model:{value:e.setting_data.keyborad.scroll_distance,callback:function(t){e.$set(e.setting_data.keyborad,"scroll_distance",t)},expression:"setting_data.keyborad.scroll_distance"}})],1)],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.setting_data.keyborad.using_keyboard,expression:"setting_data.keyborad.using_keyboard"}]},[a("el-row",{attrs:{gutter:2}},[a("el-col",{attrs:{span:5}},[a("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"设置滚动速度，数字越大滚动越慢，为0时立即滚动，最大20"}},[a("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"reference"},slot:"reference"},[e._v(" 滚动速度"),a("i",{staticClass:"el-icon-question",staticStyle:{"font-size":"1em"}})])])],1),a("el-col",{attrs:{span:17}},[a("el-input-number",{attrs:{min:0,max:20},model:{value:e.setting_data.keyborad.scroll_speed,callback:function(t){e.$set(e.setting_data.keyborad,"scroll_speed",t)},expression:"setting_data.keyborad.scroll_speed"}})],1)],1)],1)],1)],1),a("el-tab-pane",{attrs:{label:"提醒",name:"second"}},[a("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[a("el-form-item",{attrs:{label:"收藏提醒 "}},[a("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("都不提醒")]),a("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("只有失败提醒")]),a("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.collect_remind,callback:function(t){e.$set(e.setting_data.remind,"collect_remind",t)},expression:"setting_data.remind.collect_remind"}},[e._v("都提醒")])],1),a("el-form-item",{attrs:{label:"章节更新提醒 "}},[a("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("都不提醒")]),a("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("只有失败提醒")]),a("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.update_reading_section,callback:function(t){e.$set(e.setting_data.remind,"update_reading_section",t)},expression:"setting_data.remind.update_reading_section"}},[e._v("都提醒")])],1),a("el-form-item",{attrs:{label:"设置保存提醒 "}},[a("el-radio",{attrs:{label:1},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("都不提醒")]),a("el-radio",{attrs:{label:2},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("只有失败提醒")]),a("el-radio",{attrs:{label:3},model:{value:e.setting_data.remind.settings_saved_remind,callback:function(t){e.$set(e.setting_data.remind,"settings_saved_remind",t)},expression:"setting_data.remind.settings_saved_remind"}},[e._v("都提醒")])],1)],1)],1),a("el-tab-pane",{attrs:{label:"阅读外观",name:"third"}},[a("el-form",{ref:"setting_data",attrs:{model:e.setting_data}},[a("el-form-item",{attrs:{label:"主题"}},[a("el-select",{attrs:{placeholder:"主题"},model:{value:e.setting_data.style.theme,callback:function(t){e.$set(e.setting_data.style,"theme",t)},expression:"setting_data.style.theme"}},[a("el-option",{attrs:{label:"基础",value:"base-theme"}}),a("el-option",{attrs:{label:"护眼",value:"yellow-theme"}}),a("el-option",{attrs:{label:"暗色",value:"gray-theme"}})],1)],1),a("el-form-item",{attrs:{label:"字体大小"}},[a("el-input-number",{attrs:{min:1,max:40},model:{value:e.setting_data.style.fort_size,callback:function(t){e.$set(e.setting_data.style,"fort_size",t)},expression:"setting_data.style.fort_size"}})],1),a("el-form-item",{attrs:{label:"间隔大小"}},[a("el-input-number",{attrs:{min:1,max:40},model:{value:e.setting_data.style.line_height,callback:function(t){e.$set(e.setting_data.style,"line_height",t)},expression:"setting_data.style.line_height"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.save_settings}},[e._v("保存")]),a("el-button",{attrs:{type:"danger"},on:{click:e.restore_settings}},[e._v("取消")])],1)],1)],1)},i=[],s={name:"setting",data:function(){return{setting_data:{_id:"setting",keyborad:{using_keyboard:!1,pre_key:"ArrowLeft",next_key:"ArrowRight",scroll_key:" ",scroll_distance:150,scroll_speed:5},remind:{collect_remind:3,update_reading_section:3,settings_saved_remind:3},style:{theme:"base-theme",fort_size:18,line_height:25},version:"0.1.2"},activeName:"first"}},props:{dialogVisible:Boolean},methods:{dialog_close:function(e){this.$emit("close-dialog")},listen_previous_chapter:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyborad.scroll_key&&t.key!==e.setting_data.keyborad.next_key?e.setting_data.keyborad.pre_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},listen_next_chapter:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyborad.pre_key&&t.key!==e.setting_data.keyborad.scroll_key?e.setting_data.keyborad.next_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},listen_scroll:function(){var e=this;document.onkeydown=function(t){t.key!==e.setting_data.keyborad.pre_key&&t.key!==e.setting_data.keyborad.next_key?e.setting_data.keyborad.scroll_key=t.key:e.$message({showClose:!0,message:"两个快捷键不能相同",type:"error"})}},cleared_to_monitor:function(){document.onkeydown=void 0},save_settings:function(){var e=window.utools.db.put(this.setting_data);e.hasOwnProperty("error")&&e["error"]?(this.setting_data.remind.settings_saved_remind>=2&&this.$notify({title:"错误",message:"保存设置失败",duration:0,type:"error"}),this.setting_data=window.utools.db.get("setting")):(this.setting_data=window.utools.db.get("setting"),this.setting_data.remind.settings_saved_remind>=3&&this.$notify({title:"成功",message:"保存设置成功",type:"success"})),this.$emit("after-save")},restore_settings:function(){this.setting_data=window.utools.db.get("setting")}},created:function(){this.setting_data=window.utools.db.get("setting")}},r=s,o=(a("14b1"),a("2877")),l=Object(o["a"])(r,n,i,!1,null,"cd5b509e",null);t["a"]=l.exports}}]);