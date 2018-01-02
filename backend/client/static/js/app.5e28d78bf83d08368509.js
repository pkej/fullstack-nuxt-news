webpackJsonp([1],[,,,,,,,,,,,function(t,e,s){"use strict";function a(t){s(42)}var n=s(43),i=s(44),r=s(1),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),n=s(25),i=s(27),r=s.n(i),o=s(28),c=s(33),u=s(86);a.a.use(r.a),a.a.use(n.a),a.a.config.productionTip=!1,new a.a({el:"#app",http:{root:"/"},store:u.a,router:c.a,template:"<App/>",components:{App:o.a}})},,,,function(t,e){},,function(t,e,s){"use strict";function a(t){s(29)}var n=s(31),i=s(32),r=s(1),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},,function(t,e,s){"use strict";e.a={name:"app"}},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-app",[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-toolbar-title",[t._v("My News Feed")]),t._v(" "),s("v-spacer")],1),t._v(" "),s("v-content",[s("router-view")],1)],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},function(t,e,s){"use strict";var a=s(2),n=s(34),i=s(35),r=s(50);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"NewsFeed",component:i.a},{path:"/sources",name:"SourcesList",component:r.a}]})},,function(t,e,s){"use strict";function a(t){s(36)}var n=s(37),i=s(49),r=s(1),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var a=s(38),n=(s(11),s(45));e.a={name:"NewsFeed",data:function(){return{dialog:!1,category:[]}},computed:{lastUpdate:function(){var t=this.$store.state.lastUpdate;return(t.getDay()==(new Date).getDay()?"Today":"Yesterday")+" at "+t.toLocaleTimeString()},items:function(){return this.$store.state.feeds}},methods:{onClickCategory:function(t){var e="";e+="?"+t[0],t.slice(1).forEach(function(t,s){e+="&"+t})},refreshNews:function(){this.$store.dispatch("fetchLatestNews")}},components:{NewsItem:n.a,CategoryFilter:a.a},created:function(){this.$store.dispatch("fetchNews")}}},function(t,e,s){"use strict";function a(t){s(39)}var n=s(40),i=s(41),r=s(1),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";e.a={name:"CategoryFilter",data:function(){return{categories:[],allCategories:["Technology","Business","Finance","Politics","Culture","Art"]}},methods:{filter:function(t){this.$store.dispatch("fetchNews",t)},handleChange:function(t){var e=this,s=t.map(function(t){return e.allCategories[t]}).join(",");this.filter({where:{category:s}})}}}},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-select",{attrs:{label:"Categories",items:t.allCategories,chips:"",tags:""},on:{change:t.handleChange},scopedSlots:t._u([{key:"selection",fn:function(e){return[s("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{selected:e.selected,disabled:e.disabled},on:{input:function(t){e.parent.selectItem(e.item)}}},[s("v-avatar",{staticClass:"accent"},[t._v(t._s(e.item.slice(0,1).toUpperCase()))]),t._v("\n      "+t._s(e.item)+"\n    ")],1)]}}]),model:{value:t.categories,callback:function(e){t.categories=e},expression:"categories"}})},n=[],i={render:a,staticRenderFns:n};e.a=i},function(t,e){},function(t,e,s){"use strict";e.a={name:"AddSourceForm",data:function(){return{valid:!0,formData:{name:"",url:""},nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=25||"Name must be less than 25 characters"}],urlRules:[function(t){return!!t||"Url is required"},function(t){return/^(http|https):[\/]{2}([\.-]?\w+)*(\.\w{2,3}).*$/.test(t)||"Url must be valid"}],allCategories:["Technology","Design","Business","Finance","Politics","Culture","Art"]}},methods:{submit:function(t){t&&this.$refs.form.validate()&&this.$store.dispatch("addNewsSource",this.formData)},clearForm:function(){this.formData={}}}}},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{label:"Name",rules:t.nameRules,placeholder:"ycombinator",counter:25,required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),t._v(" "),s("v-text-field",{attrs:{label:"Url",placeholder:"https://news.ycombinator.com",rules:t.urlRules,required:""},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}}),t._v(" "),s("v-select",{attrs:{label:"Categories",items:t.allCategories,chips:"",tags:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[s("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{selected:e.selected,disabled:e.disabled},on:{input:function(t){e.parent.selectItem(e.item)}}},[s("v-avatar",{staticClass:"accent"},[t._v(t._s(e.item.slice(0,1).toUpperCase()))]),t._v("\n        "+t._s(e.item)+"\n      ")],1)]}}]),model:{value:t.formData.categories,callback:function(e){t.$set(t.formData,"categories",e)},expression:"formData.categories"}})],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},function(t,e,s){"use strict";function a(t){s(46)}var n=s(47),i=s(48),r=s(1),o=a,c=r(n.a,i.a,!1,o,"data-v-51cd3ca6",null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";e.a={name:"NewsItem",props:["item"],methods:{viewItem:function(t){var e=t.target.offsetParent;e&&(e.setAttribute("href",this.item.url),e.setAttribute("target","_blank"),e.click())}}}},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-list-tile",{key:t.item.header,staticClass:"news-item",attrs:{avatar:""},on:{click:t.viewItem}},[s("v-list-tile-content",[s("v-list-tile-title",{staticClass:"no-overflow",domProps:{innerHTML:t._s(t.item.header)}}),t._v(" "),s("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.item.site)}})],1)],1),t._v(" "),s("hr",{staticClass:"divider"})],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[s("v-toolbar",[s("span",{staticClass:"last-update",domProps:{innerHTML:t._s(t.lastUpdate)}}),t._v(" "),s("v-btn",{attrs:{round:"",flat:"",icon:""},on:{click:t.refreshNews}},[s("v-icon",[t._v("refresh")])],1),t._v(" "),s("v-btn",{attrs:{right:"",round:"",flat:"",absolute:"",to:"/sources"}},[t._v("Configure")])],1),t._v(" "),s("v-card",t._l(t.items,function(t){return s("v-list",{attrs:{"three-lines":""}},[s("news-item",{key:t.header,attrs:{item:t}})],1)}))],1)],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},function(t,e,s){"use strict";function a(t){s(51)}var n=s(52),i=s(85),r=s(1),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";var a=s(12),n=s.n(a),i=s(11),r=s(81);e.a={name:"SourcesList",components:{AddSourceForm:i.a,SourcesListItem:r.a},data:function(){return{dialog:!1,category:[]}},computed:{items:function(){return this.$store.state.sources}},methods:{saveConfig:function(t){var e={};this.items.forEach(function(t){e[t.name]=n()({},t)}),this.$store.dispatch("setSourcesConfig",e),this.$router.back()},submitForm:function(t){this.$refs.addSourceForm.$refs.form.validate()&&(this.$refs.addSourceForm.submit(t),this.dialog=!1,this.$refs.addSourceForm.clearForm(t))}},created:function(){this.$store.dispatch("fetchSources")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";function a(t){s(82)}var n=s(83),i=s(84),r=s(1),o=a,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},function(t,e){},function(t,e,s){"use strict";e.a={name:"SourcesListItem",props:["item"],data:function(){return{selected:!!this.item.selected,category:[]}},methods:{itemTap:function(t){this.item.selected=!this.item.selected,this.selected=this.item.selected}}}},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-list-tile",{key:t.item.name,on:{"!click":function(e){e.stopPropagation(),t.itemTap(e)}}},[s("v-list-tile-avatar",[s("v-checkbox",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{innerHTML:t._s(t.item.name)}}),t._v(" "),s("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.item.url)}})],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[s("v-toolbar",[s("v-btn",{attrs:{primary:""},on:{click:t.saveConfig}},[t._v("Back")]),t._v(" "),s("v-btn",{attrs:{absolute:"",dark:"",right:"",color:"orange"},nativeOn:{click:function(e){t.dialog=!0}}},[s("v-icon",[t._v("add")])],1)],1),t._v(" "),s("v-card",[s("v-subheader",{domProps:{textContent:t._s("Filter")}}),t._v(" "),s("v-list",{attrs:{"two-line":""}},[s("v-layout",{attrs:{"child-flex":""}},[t._l(t.items,function(t){return[s("sources-list-item",{key:t.name,attrs:{item:t}})]})],2)],1)],1),t._v(" "),s("v-dialog",{attrs:{persistent:"",dark:"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[t._v("Request a News Source")]),t._v(" "),s("v-card-text",[s("add-source-form",{ref:"addSourceForm"})],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.submitForm(e)}}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},function(t,e,s){"use strict";var a=s(12),n=s.n(a),i=s(87),r=s.n(i),o=s(2),c=s(89),u=s(90),l=s.n(u);o.a.use(c.a);var f=new c.a.Store({state:{feeds:[],sources:[],config:{},lastUpdate:new Date},mutations:{setFeeds:function(t,e){t.feeds=e},setFeedSources:function(t,e){t.sources=e},setSourcesConfig:function(t,e){t.config=e},lastupdate:function(t,e){t.lastUpdate=new Date}},actions:{fetchLatestNews:function(t){var e=this,s=t.commit;l.a.get("/api/scraper/run").then(function(t){e.fetchNews({commit:s})},function(t){})},fetchNews:function(t,e){var s=t.commit,a="/api/news";e&&(a+="?filters="+r()(e)),l.a.get(a).then(function(t){s("setFeeds",t.data||[]),s("lastUpdate")},function(t){})},fetchSources:function(t){var e=t.commit;l.a.get("/api/sources").then(function(t){e("setFeedSources",t.data||[])},function(t){})},setSourcesConfig:function(t,e){(0,t.commit)("setSourcesConfig",e)},addNewsSource:function(t,e){t.commit;l.a.post("/api/request",n()({},e)).then(function(t){})}},getters:{getConfig:function(t){return JSON.parse(localStorage.getItem("feeds-config"))}}});e.a=f}],[22]);
//# sourceMappingURL=app.5e28d78bf83d08368509.js.map