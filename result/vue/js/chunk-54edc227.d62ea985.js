(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54edc227"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"4e22":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"router",attrs:{id:"search"}},[n("el-container",[n("el-header",[n("my-navigation",{attrs:{"active-index":"0"},on:{"created-method":e.created_method,"after-save":function(e){}}})],1),n("el-main",[n("div",{staticStyle:{"text-align":"center"}},[n("h4",{staticClass:"title"},[e._v("搜索:"+e._s(this.$route.query.name))])]),n("span",{staticStyle:{"font-size":"18px"}},[e._v("选择源网站")]),n("el-select",{staticStyle:{"margin-left":"10px"},attrs:{placeholder:"选择网站源"},on:{change:e.typeChange},model:{value:e.selected_type,callback:function(t){e.selected_type=t},expression:"selected_type"}},e._l(e.config,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:t}})})),1),n("el-link",{staticStyle:{"margin-left":"10px","font-size":"18px"},attrs:{underline:!1,icon:"el-icon-link"},on:{click:e.openUrl}},[e._v("前往源网站 ")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.search_list,border:"",stripe:!0}},[n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{underline:!1},on:{click:function(n){return e.go_to_novel(t.row.novel_id)}}},[e._v(e._s(t.row.name)+" ")])]}}])},[n("template",{slot:"header"},[e._v("小说名")])],2),n("el-table-column",{attrs:{prop:"author",label:"作者"}}),n("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{underline:!1},on:{click:function(n){return e.go_to_content(t.row.novel_id,t.row.latest_chapter_id)}}},[e._v(" "+e._s(t.row.latest_chapter_name)+" ")])]}}])},[n("template",{slot:"header"},[e._v("最后章节")])],2),n("el-table-column",{attrs:{prop:"update_time",label:"更新时间"}})],1)],1)],1)],1)},i=[],r=(n("b0c0"),n("ac1f"),n("841c"),n("f11d")),o=(n("5319"),n("fa95")),s=n("02cc");function l(e,t,n){"0"!==e&&c(t,n,e)}function c(e,t,n){t.loading=!0,t.search_list=[];var a=o["a"][n].search.url.replace("{##search_name##}",e),i=o["a"][n].encoding;window.getHtml(a,i,(function(e){var a=o["a"][n]["search"],i=a.li,r=a.novel_id,l=a.author,c=a.latest_chapter_id,d=a.update_time,u=a.novel_id_regex,h=a.latest_chapter_id_regex;t.loading=!1;var m=s["load"](e,{decodeEntities:!1});m(i).each((function(e,n){var a,i=s["load"](m.html(n),{decodeEntities:!1,xmlMode:!0}),p=i(r).text(),f=i(l).text(),_=i(c).text();a=!1===d?"源网站不显示更新时间":i(d).text();var v=Object(o["b"])(i,r,u),g=Object(o["b"])(i,c,h);null!==v&&null!==g&&t.search_list.push({name:p,novel_id:v,author:f,latest_chapter_name:_,latest_chapter_id:g,update_time:a})}))}))}var d={search:l},u=n("2b0e"),h=u["default"].extend({name:"search",components:{"my-navigation":r["a"]},data:function(){return{search_name:"",loading:!1,search_list:[],config:{},selected_type:""}},methods:{search:function(){""!==this.$route.query.name&&void 0!==this.$route.query.name&&d.search(this.type,String(this.$route.query.name),this)},go_to_novel:function(e){this.myHistory.addNewItem({name:"novel",params:{nid:e},query:{type:String(this.type)}})},go_to_content:function(e,t){this.myHistory.addNewItem({name:"content",params:{nid:e,cid:t},query:{type:String(this.type)}})},created_method:function(){var e=this;this.config=o["a"],this.selected_type=this.type,window.utools.setSubInput((function(t){var n=t.text;e.search_name=n}),"搜索在线小说",!0),document.onkeydown=function(t){"Enter"===t.key&&e.myHistory.addNewItem({name:"search",query:{name:e.search_name,type:String(e.type)}})},void 0!==this.$route.query.name&&this.search()},openUrl:function(){window.utools.shellOpenExternal(this.config[this.selected_type].url)},typeChange:function(e){this.myHistory.addNewItem({name:"search",query:{name:this.search_name,type:e}})}},computed:{type:function(){return String(this.$route.query.type)}},created:function(){this.created_method()},watch:{$route:"search"}}),m=h,p=(n("dea9"),n("2877")),f=Object(p["a"])(m,a,i,!1,null,"01d84565",null);t["default"]=f.exports},"841c":function(e,t,n){"use strict";var a=n("d784"),i=n("825a"),r=n("1d80"),o=n("129f"),s=n("14c3");a("search",1,(function(e,t,n){return[function(t){var n=r(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var r=i(e),l=String(this),c=r.lastIndex;o(c,0)||(r.lastIndex=0);var d=s(r,l);return o(r.lastIndex,c)||(r.lastIndex=c),null===d?-1:d.index}]}))},dea9:function(e,t,n){"use strict";var a=n("e26d"),i=n.n(a);i.a},e26d:function(e,t,n){},f11d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Navigation"},[n("el-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.select}},[e._l(e.navigation_item,(function(t,a){return n("el-menu-item",{key:a,attrs:{index:String(a)}},[e._v(e._s(t.name)+" ")])})),n("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(t){e.dialogVisible=!0}}},[n("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),n("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(t){return e.$emit("created-method")}}},[n("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],2),n("my-setting",{attrs:{"dialog-visible":e.dialogVisible},on:{"close-dialog":function(t){e.dialogVisible=!1},"after-save":function(t){return e.$emit("after-save")}}})],1)},i=[],r=n("f49f"),o=n("2b0e"),s=o["default"].extend({name:"Navigation",components:{"my-setting":r["a"]},data:function(){return{navigation_item:[{name:"搜索",path:{name:"search",query:{type:"1"}}},{name:"书架",path:{name:"bookshelf"}},{name:"读取文件",path:{name:"read_file"}},{name:"测试",path:{name:"test"}}],dialogVisible:!1}},props:{activeIndex:String},methods:{select:function(e){this.myHistory.addNewItem(this.navigation_item[e].path)}}}),l=s,c=n("2877"),d=Object(c["a"])(l,a,i,!1,null,"45ea65a0",null);t["a"]=d.exports}}]);