(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bd59520"],{1915:function(t,e,i){},"25f0":function(t,e,i){"use strict";var n=i("6eeb"),a=i("825a"),r=i("d039"),o=i("ad6d"),c="toString",l=RegExp.prototype,s=l[c],d=r((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),u=s.name!=c;(d||u)&&n(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),i=t.flags,n=String(void 0===i&&t instanceof RegExp&&!("flags"in l)?o.call(t):i);return"/"+e+"/"+n}),{unsafe:!0})},"44e7":function(t,e,i){var n=i("861d"),a=i("c6b6"),r=i("b622"),o=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},"4d63":function(t,e,i){var n=i("83ab"),a=i("da84"),r=i("94ca"),o=i("7156"),c=i("9bf2").f,l=i("241c").f,s=i("44e7"),d=i("ad6d"),u=i("9f7f"),h=i("6eeb"),_=i("d039"),f=i("69f3").set,g=i("2626"),p=i("b622"),m=p("match"),y=a.RegExp,v=y.prototype,x=/a/g,b=/a/g,w=new y(x)!==x,k=u.UNSUPPORTED_Y,S=n&&r("RegExp",!w||k||_((function(){return b[m]=!1,y(x)!=x||y(b)==b||"/a/i"!=y(x,"i")})));if(S){var E=function(t,e){var i,n=this instanceof E,a=s(t),r=void 0===e;if(!n&&a&&t.constructor===E&&r)return t;w?a&&!r&&(t=t.source):t instanceof E&&(r&&(e=d.call(t)),t=t.source),k&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,"")));var c=o(w?new y(t,e):y(t,e),n?this:v,E);return k&&i&&f(c,{sticky:i}),c},C=function(t){t in E||c(E,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},N=l(y),R=0;while(N.length>R)C(N[R++]);v.constructor=E,E.prototype=v,h(a,"RegExp",E)}g("RegExp")},"70df":function(t,e,i){"use strict";var n=i("1915"),a=i.n(n);a.a},7156:function(t,e,i){var n=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var r,o;return a&&"function"==typeof(r=e.constructor)&&r!==i&&n(o=r.prototype)&&o!==i.prototype&&a(t,o),t}},"71c2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-header"},[i("el-col",{attrs:{span:20}},[i("el-page-header",{staticStyle:{height:"40px"},on:{back:t.go_back}},[i("span",{staticStyle:{"font-size":"15px"},attrs:{slot:"title"},slot:"title"},[t._v(" 返回 ")]),i("template",{staticStyle:{"font-size":"20px"},slot:"content"},[t._v(t._s(t.name)+" ")])],2)],1),i("el-col",{staticStyle:{height:"40px"},attrs:{span:4}},[i("el-link",{staticStyle:{float:"right",height:"100%"},attrs:{index:"setting",underline:!1},on:{click:function(e){t.dialogVisible=!0}}},[i("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),i("el-link",{staticStyle:{float:"right",height:"100%"},attrs:{index:"setting",underline:!1},on:{click:function(e){return t.$emit("created-method")}}},[i("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],1),i("my-setting",{attrs:{"dialog-visible":t.dialogVisible},on:{"close-dialog":function(e){t.dialogVisible=!1},"after-save":function(e){return t.$emit("after-save")}}})],1)},a=[],r=i("f49f"),o=i("2b0e"),c=o["default"].extend({name:"my-header",components:{"my-setting":r["a"]},methods:{go_back:function(){this.myHistory.goBackItem()}},data:function(){return{dialogVisible:!1}},props:{name:String}}),l=c,s=i("2877"),d=Object(s["a"])(l,n,a,!1,null,"b8cb0ad8",null);e["a"]=d.exports},a434:function(t,e,i){"use strict";var n=i("23e7"),a=i("23cb"),r=i("a691"),o=i("50c4"),c=i("7b0b"),l=i("65f0"),s=i("8418"),d=i("1dde"),u=i("ae40"),h=d("splice"),_=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!_},{splice:function(t,e){var i,n,d,u,h,_,y=c(this),v=o(y.length),x=a(t,v),b=arguments.length;if(0===b?i=n=0:1===b?(i=0,n=v-x):(i=b-2,n=g(f(r(e),0),v-x)),v+i-n>p)throw TypeError(m);for(d=l(y,n),u=0;u<n;u++)h=x+u,h in y&&s(d,u,y[h]);if(d.length=n,i<n){for(u=x;u<v-n;u++)h=u+n,_=u+i,h in y?y[_]=y[h]:delete y[_];for(u=v;u>v-n+i;u--)delete y[u-1]}else if(i>n)for(u=v-n;u>x;u--)h=u+n-1,_=u+i-1,h in y?y[_]=y[h]:delete y[_];for(u=0;u<i;u++)y[u+x]=arguments[u+2];return y.length=v-n+i,d}})},c3f4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"router",attrs:{id:"novel"}},[i("el-container",[i("el-header",{attrs:{height:"40px"}},[i("my-header",{attrs:{name:t.name},on:{"created-method":t.created_method,"after-save":t.get_setting_info}})],1),i("el-main",[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.info_loading,expression:"info_loading"}]},[i("div",{staticStyle:{"text-align":"center"}},[i("h4",{staticClass:"title"},[t._v(t._s(t.name))])]),i("div",{staticStyle:{"text-align":"center"}},[i("p",[i("span",{staticStyle:{"margin-right":"10px"}},[i("i",{staticClass:"el-icon-user"}),t._v(t._s(t.author)+" ")]),i("span",{staticStyle:{"margin-right":"10px"}},[i("i",{staticClass:"el-icon-time"}),t._v(t._s(t.last_update_time)+" ")]),i("span",{staticStyle:{"margin-right":"10px"}},[i("i",{staticClass:"el-icon-timer"}),i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:function(e){return t.go_to_content(t.nid,t.last_cid)}}},[t._v(t._s(t.latest_chapter))])],1),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.whether_collection,expression:"!whether_collection"}],staticStyle:{"margin-right":"10px"}},[i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:t.collect}},[i("i",{staticClass:"el-icon-star-off"}),t._v(" 加入书架 ")])],1),i("span",{directives:[{name:"show",rawName:"v-show",value:t.whether_collection,expression:"whether_collection"}],staticStyle:{"margin-right":"10px"}},[i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:t.cancel_collect}},[i("i",{staticClass:"el-icon-star-on"}),t._v(" 移除书架 ")])],1)])])]),i("el-divider"),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.directory_loading,expression:"directory_loading"}]},[i("div",{staticStyle:{"text-align":"center"}},[i("h4",{staticClass:"title"},[t._v("目录")])]),t._l(t.directory_list,(function(e,n){return i("el-col",{key:n,attrs:{span:8}},[i("el-link",{attrs:{target:"_blank",underline:!1},on:{click:function(i){return t.go_to_content(t.nid,e.cid)}}},[t._v(t._s(e.name)+" ")])],1)}))],2)],1)],1)],1)},a=[],r=(i("b0c0"),i("a434"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("5319"),i("8196")),o=i("fa95"),c=i("5c96");function l(t,e,i){"0"===t?d(e,i):s(e,i,t)}function s(t,e,n){e.info_loading=!0,e.directory_loading=!0;var a=o["a"][n]["novel"].directory.url.replace("{##novel_id##}",t),r=o["a"][n].encoding;window.getHtml(a,r,(function(t){var a=o["a"][n]["novel"].directory,r=a.chapter_id,c=a.chapter_id_regex,l=a.slice_left,s=a.slice_right,d=i("02cc"),u=d.load(t,{decodeEntities:!1});e.directory_list=[],u(r).each((function(t,i){var n=u(i),a=n.text(),r=n.attr("href");r=r.match(RegExp(c)).groups["id"],e.directory_list.push({name:a,cid:r})}));var h=!1===l?0:l,_=!1===s?e.directory_list.length:s;e.directory_list=e.directory_list.splice(h,_),e.directory_loading=!1}));var l=o["a"][n]["novel"].info.url.replace("{##novel_id##}",t);console.log(l),window.getHtml(l,r,(function(t){var a=o["a"][n]["novel"].info,r=a.name,l=a.author,s=a.last_update_time,d=a.latest_chapter_id,u=a.latest_chapter_id_regex,h=i("02cc"),_=h.load(t,{decodeEntities:!1});e.name=_(r).text(),e.author=_(l).text(),e.last_update_time=_(s).text();var f=_(d);e.latest_chapter=f.text(),e.last_cid=f.attr("href"),void 0!==e.last_cid?e.last_cid=e.last_cid.match(RegExp(u)).groups["id"]:Object(c["Message"])({showClose:!0,message:"网站解析发生错误",type:"error"}),e.info_loading=!1}))}function d(t,e){var i=r["a"].getOneNovelData(t,e.type);e.name=i.name,e.author=i.author,e.last_update_time="未知",e.latest_chapter=i.directory_list[i.directory_list.length-1].name,e.last_cid=i.directory_list[i.directory_list.length-1].cid,e.directory_list=i.directory_list,e.whether_collection=!0,e.directory_loading=!1,e.info_loading=!1}var u={get_directory_and_info:l},h=i("f49f"),_=i("71c2"),f=i("2b0e"),g=f["default"].extend({name:"novel",components:{"my-setting":h["a"],"my-header":_["a"]},data:function(){return{name:"",author:"",last_update_time:"",latest_chapter:"",last_cid:"",directory_list:[],whether_collection:!1,info_loading:!1,directory_loading:!1}},computed:{nid:function(){return this.$route.params.nid},type:function(){return String(this.$route.query.type)}},methods:{to_get_directory_and_info:function(){u.get_directory_and_info(this.type,this.nid,this)},go_to_content:function(t,e){this.myHistory.addNewItem({name:"content",params:{nid:t,cid:e},query:{type:String(this.type)}})},collect:function(){var t={_id:this.nid,name:this.name,author:this.author,read_chapter:this.directory_list[0],bookmark_list:[],type:this.type};r["a"].addNovel(t),this.whether_collection=r["a"].existNovel(this.nid,this.type)},cancel_collect:function(){r["a"].removeNovel(this.nid,this.type),this.whether_collection=r["a"].existNovel(this.nid,this.type)},created_method:function(){var t=this;this.whether_collection=r["a"].existNovel(this.nid,this.type),window.utools.setSubInput((function(e){var i=e.text;t.myHistory.addNewItem({name:"search",query:{name:i,type:t.type}})}),"搜索在线小说"),document.onkeydown=null,window.utools.subInputBlur(),this.to_get_directory_and_info()},get_setting_info:function(){}},created:function(){this.created_method()}}),p=g,m=(i("70df"),i("2877")),y=Object(m["a"])(p,n,a,!1,null,"fb508e76",null);e["default"]=y.exports}}]);