(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b60650"],{"1d79":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"router",attrs:{id:"read_file"}},[i("el-container",[i("el-header",[i("my-navigation",{attrs:{"active-index":"2"},on:{"created-method":t.created_method,"after-save":t.get_setting_info}})],1),i("el-main",[i("el-form",[i("el-form-item",{attrs:{label:"文件路径"}},[i("el-input",{attrs:{readonly:""},model:{value:t.path,callback:function(e){t.path=e},expression:"path"}}),i("el-button",{on:{click:t.get_file}},[t._v("上传小说文件")])],1),i("el-form-item",{attrs:{label:"作者"}},[i("el-input",{staticStyle:{width:"auto"},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}})],1),i("el-form-item",{attrs:{label:"书名"}},[i("el-input",{staticStyle:{width:"auto"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("el-form-item",{attrs:{label:"使用正则提取章节"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:t.whether_regular_changes},model:{value:t.is_regex,callback:function(e){t.is_regex=e},expression:"is_regex"}}),i("el-input",{directives:[{name:"show",rawName:"v-show",value:t.is_regex,expression:"is_regex"}],staticStyle:{width:"auto","margin-left":"20px"},attrs:{placeholder:"正则表达式"},model:{value:t.regex,callback:function(e){t.regex=e},expression:"regex"}}),i("el-input",{directives:[{name:"show",rawName:"v-show",value:!t.is_regex,expression:"!is_regex"}],staticStyle:{width:"auto","margin-left":"20px"},attrs:{placeholder:"章节字符数",type:"number"},model:{value:t.split_num,callback:function(e){t.split_num=e},expression:"split_num"}}),i("el-button",{staticStyle:{"margin-left":"20px"},attrs:{disabled:void 0===t.path},on:{click:t.split_novel}},[t._v("获取章节 ")])],1)],1),i("el-button",{attrs:{disabled:void 0===t.path},on:{click:t.add_bookshelf}},[t._v("加入书架")]),i("div",[i("div",{staticStyle:{"text-align":"center"}},[i("h4",{staticClass:"title"},[t._v("目录")])]),t._l(t.directory_list,(function(e,n){return i("el-col",{key:n,attrs:{span:8}},[i("el-link",{attrs:{target:"_blank",underline:!1}},[t._v(t._s(e.name)+" ")])],1)}))],2)],1)],1)],1)},a=[],r=(i("d81d"),i("b0c0"),i("a9e3"),i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("f11d")),s=i("8196"),o=i("2b0e"),l=o["default"].extend({name:"read_file",components:{"my-navigation":r["a"]},data:function(){return{_id:"",content:"",author:"未知",read_chapter:{},directory_list:[],type:"0",regex:"",name:"",is_regex:!1,split_num:4e3}},methods:{created_method:function(){var t=this;window.utools.setSubInput((function(e){var i=e.text;t.myHistory.addNewItem({name:"search",query:{name:i,type:"1"}})}),"搜索在线小说"),window.utools.subInputBlur(),document.onkeydown=null,this.get_setting_info(),"undefined"!==this.path?(window.readFile(this.path,{},(function(e,i){if(e)return t.$notify({title:"错误",message:"读取文件失败，请重新读取文件",duration:0,type:"error"}),t.myHistory.addNewItem({name:"read_file"}),void t.created_method();t.content=" "+i.toString(),t.name=t.path.match(/\\([^\\]*?)\./)[1]})),this.$notify({title:"提示",message:"目前仅支持utf-8编码的.txt结尾的文件,其他编码方式的.txt文件可以通过文本编辑器改成utf-8编码,就可以正确读取",duration:0,type:"info"})):this.$message({showClose:!0,message:"还没读取文件，先读取文件",type:"error"})},add_bookshelf:function(){this.split_novel();var t={_id:this.path,content:this.content,read_chapter:this.directory_list[0],type:"0",regex:this.regex,name:this.name,is_regex:this.is_regex,split_num:this.split_num,author:this.author,directory_list:this.directory_list},e=s["a"].existNovel(this.path,"0");e&&(t._rev=s["a"].getOneNovelData(this.path,"0")._rev),s["a"].addNovel(t)},split_novel:function(){if(this.directory_list=[],this.is_regex)if(""!==this.regex){var t=RegExp(this.regex,"g"),e=this.content.match(t);null!==e&&(this.directory_list=e.map((function(t,e){return{name:t,cid:e}})))}else this.$notify({title:"错误",message:"正则表达式不能为空",type:"error"});else{this.directory_list=[];for(var i=this.content.length/this.split_num+Number(this.content.length%this.split_num!==0),n=0;n<i;n++)this.directory_list.push({name:"第".concat(n+1,"章"),cid:n})}},whether_regular_changes:function(t){t?this.$notify({title:"提示",message:"使用正则表达式分割章节，正则表达式匹配的值将作为章节名",type:"info"}):this.$notify({title:"提示",message:"不使用正则表达式分割章节，可以选择输入框里输入的数字作为每一章的字符数(包括空格和符号),章节名为第*章",type:"info"})},get_file:function(){var t=window.utools.showOpenDialog({title:"获取小说文件",filters:[{name:"txt文档",extensions:["txt"]}],properties:["openFile"]});void 0!==t&&1===t.length?(this.myHistory.addNewItem({name:"read_file",query:{path:t[0]}}),this.created_method()):this.$message({showClose:!0,message:"没有选取文件",type:"error"})},get_setting_info:function(){}},created:function(){this.created_method()},computed:{path:function(){return String(this.$route.query.path)}}}),c=l,u=(i("32bf"),i("2877")),f=Object(u["a"])(c,n,a,!1,null,"b9bb7912",null);e["default"]=f.exports},"25f0":function(t,e,i){"use strict";var n=i("6eeb"),a=i("825a"),r=i("d039"),s=i("ad6d"),o="toString",l=RegExp.prototype,c=l[o],u=r((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=o;(u||f)&&n(RegExp.prototype,o,(function(){var t=a(this),e=String(t.source),i=t.flags,n=String(void 0===i&&t instanceof RegExp&&!("flags"in l)?s.call(t):i);return"/"+e+"/"+n}),{unsafe:!0})},"32bf":function(t,e,i){"use strict";var n=i("efdb"),a=i.n(n);a.a},"44e7":function(t,e,i){var n=i("861d"),a=i("c6b6"),r=i("b622"),s=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==a(t))}},"4d63":function(t,e,i){var n=i("83ab"),a=i("da84"),r=i("94ca"),s=i("7156"),o=i("9bf2").f,l=i("241c").f,c=i("44e7"),u=i("ad6d"),f=i("9f7f"),d=i("6eeb"),h=i("d039"),p=i("69f3").set,g=i("2626"),m=i("b622"),_=m("match"),v=a.RegExp,x=v.prototype,y=/a/g,b=/a/g,w=new v(y)!==y,N=f.UNSUPPORTED_Y,k=n&&r("RegExp",!w||N||h((function(){return b[_]=!1,v(y)!=y||v(b)==b||"/a/i"!=v(y,"i")})));if(k){var I=function(t,e){var i,n=this instanceof I,a=c(t),r=void 0===e;if(!n&&a&&t.constructor===I&&r)return t;w?a&&!r&&(t=t.source):t instanceof I&&(r&&(e=u.call(t)),t=t.source),N&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,"")));var o=s(w?new v(t,e):v(t,e),n?this:x,I);return N&&i&&p(o,{sticky:i}),o},E=function(t){t in I||o(I,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},S=l(v),R=0;while(S.length>R)E(S[R++]);x.constructor=I,I.prototype=x,d(a,"RegExp",I)}g("RegExp")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),a=i("5899"),r="["+a+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),l=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,i){var n=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var r,s;return a&&"function"==typeof(r=e.constructor)&&r!==i&&n(s=r.prototype)&&s!==i.prototype&&a(t,s),t}},a9e3:function(t,e,i){"use strict";var n=i("83ab"),a=i("da84"),r=i("94ca"),s=i("6eeb"),o=i("5135"),l=i("c6b6"),c=i("7156"),u=i("c04e"),f=i("d039"),d=i("7c73"),h=i("241c").f,p=i("06cf").f,g=i("9bf2").f,m=i("58a8").trim,_="Number",v=a[_],x=v.prototype,y=l(d(x))==_,b=function(t){var e,i,n,a,r,s,o,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=m(c),e=c.charCodeAt(0),43===e||45===e){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+c}for(r=c.slice(2),s=r.length,o=0;o<s;o++)if(l=r.charCodeAt(o),l<48||l>a)return NaN;return parseInt(r,n)}return+c};if(r(_,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var w,N=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof N&&(y?f((function(){x.valueOf.call(i)})):l(i)!=_)?c(new v(b(e)),i,N):b(e)},k=n?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;k.length>I;I++)o(v,w=k[I])&&!o(N,w)&&g(N,w,p(v,w));N.prototype=x,x.constructor=N,s(a,_,N)}},efdb:function(t,e,i){},f11d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Navigation"},[i("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.select}},[t._l(t.navigation_item,(function(e,n){return i("el-menu-item",{key:n,attrs:{index:String(n)}},[t._v(t._s(e.name)+" ")])})),i("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(e){t.dialogVisible=!0}}},[i("i",{staticClass:"el-icon-s-tools",staticStyle:{"font-size":"20px","align-self":"center"}})]),i("el-link",{staticStyle:{float:"right",height:"60px"},attrs:{index:"setting",underline:!1},on:{click:function(e){return t.$emit("created-method")}}},[i("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"20px","align-self":"center","margin-right":"6px"}})])],2),i("my-setting",{attrs:{"dialog-visible":t.dialogVisible},on:{"close-dialog":function(e){t.dialogVisible=!1},"after-save":function(e){return t.$emit("after-save")}}})],1)},a=[],r=i("f49f"),s=i("2b0e"),o=s["default"].extend({name:"Navigation",components:{"my-setting":r["a"]},data:function(){return{navigation_item:[{name:"搜索",path:{name:"search",query:{type:"1"}}},{name:"书架",path:{name:"bookshelf"}},{name:"读取文件",path:{name:"read_file"}},{name:"测试",path:{name:"test"}}],dialogVisible:!1}},props:{activeIndex:String},methods:{select:function(t){this.myHistory.addNewItem(this.navigation_item[t].path)}}}),l=o,c=i("2877"),u=Object(c["a"])(l,n,a,!1,null,"45ea65a0",null);e["a"]=u.exports}}]);