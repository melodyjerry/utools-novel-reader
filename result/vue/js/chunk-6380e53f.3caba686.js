(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6380e53f"],{"793e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"router",attrs:{id:"bookshelf"}},[n("el-container",[n("el-header",[n("my-navigation",{attrs:{"active-index":"1"},on:{"created-method":e.created_method,"after-save":e.get_setting_info}})],1),n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:!0,data:e.all_book_list}},[n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{underline:!1},on:{click:function(n){return e.go_to_novel(t.row._id,t.row.type)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])},[n("template",{slot:"header"},[e._v("小说名")])],2),n("el-table-column",{attrs:{prop:"author",label:"作者"}}),n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{underline:!1},on:{click:function(n){e.go_to_content(t.row._id,String(t.row.read_chapter.cid),t.row.type)}}},[e._v(" "+e._s(t.row.read_chapter.name)+" ")])]}}])},[n("template",{slot:"header"},[e._v("最后阅读")])],2),n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{underline:!1,type:"danger"},on:{click:function(n){return e.cancel_collect(t.row._id,t.row.type)}}},[e._v("移除 ")])]}}])},[n("template",{slot:"header"},[e._v("管理")])],2)],1)],1)],1)],1)},i=[],o=n("f11d"),l=n("8196"),r=n("2b0e"),s=r["default"].extend({name:"bookshelf",components:{"my-navigation":o["a"]},data:function(){return{loading:!1,all_book_list:[]}},methods:{go_to_novel:function(e,t){this.myHistory.addNewItem({name:"novel",params:{nid:e},query:{type:t}})},go_to_content:function(e,t,n){this.myHistory.addNewItem({name:"content",params:{nid:e,cid:t},query:{type:n}})},cancel_collect:function(e,t){l["a"].removeNovel(e,t),this.all_book_list=l["a"].getAllNovelData()},created_method:function(){var e=this;this.all_book_list=l["a"].getAllNovelData(),window.utools.setSubInput((function(t){var n=t.text;e.myHistory.addNewItem({name:"search",query:{name:n,type:"1"}})}),"搜索在线小说"),window.utools.subInputBlur(),document.onkeydown=void 0},get_setting_info:function(){}},created:function(){this.created_method()}}),c=s,d=n("2877"),u=Object(d["a"])(c,a,i,!1,null,"7ca825eb",null);t["default"]=u.exports},f11d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Navigation"},[n("el-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.select}},[e._l(e.navigation_item,(function(t,a){return n("el-menu-item",{key:a,attrs:{index:String(a)}},[e._v(e._s(t.name)+" ")])})),n("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(t){e.dialogVisible=!0}}},[n("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),n("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(t){return e.$emit("created-method")}}},[n("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],2),n("my-setting",{attrs:{"dialog-visible":e.dialogVisible},on:{"close-dialog":function(t){e.dialogVisible=!1},"after-save":function(t){return e.$emit("after-save")}}})],1)},i=[],o=n("f49f"),l=n("2b0e"),r=l["default"].extend({name:"Navigation",components:{"my-setting":o["a"]},data:function(){return{navigation_item:[{name:"搜索",path:{name:"search",query:{type:"1"}}},{name:"书架",path:{name:"bookshelf"}},{name:"读取文件",path:{name:"read_file"}},{name:"测试",path:{name:"test"}}],dialogVisible:!1}},props:{activeIndex:String},methods:{select:function(e){this.myHistory.addNewItem(this.navigation_item[e].path)}}}),s=r,c=n("2877"),d=Object(c["a"])(s,a,i,!1,null,"45ea65a0",null);t["a"]=d.exports}}]);