(function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],d=0,p=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-189675aa":"01c0baa8","chunk-2d0dd3f2":"a3717bd1","chunk-2d224cd5":"0d0b1b2a","chunk-50199773":"4448fe86","chunk-e4d3dcc4":"6e264e35","chunk-f7177ccc":"c9c9a939","chunk-0074fda0":"deddc837","chunk-2d0a3ef6":"47fb1b7c","chunk-2d0dd80d":"6a878564","chunk-2d21aafa":"d792e27e","chunk-2d22c34c":"c0905af2","chunk-2d237580":"5652765b","chunk-5dd9b5a3":"59b509ae"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-189675aa":1,"chunk-50199773":1,"chunk-e4d3dcc4":1,"chunk-0074fda0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-189675aa":"caf4f95b","chunk-2d0dd3f2":"31d6cfe0","chunk-2d224cd5":"31d6cfe0","chunk-50199773":"c4c12cb2","chunk-e4d3dcc4":"b652b11a","chunk-f7177ccc":"31d6cfe0","chunk-0074fda0":"a13c1ddf","chunk-2d0a3ef6":"31d6cfe0","chunk-2d0dd80d":"31d6cfe0","chunk-2d21aafa":"31d6cfe0","chunk-2d22c34c":"31d6cfe0","chunk-2d237580":"31d6cfe0","chunk-5dd9b5a3":"31d6cfe0"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===c))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){i=p[u],d=i.getAttribute("data-href");if(d===a||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var p=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2019:function(e,t,n){"use strict";n("bdcc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexible-content"},[n("CoreNavBar"),n("main",{staticStyle:{"padding-top":"85px"}},[n("CoreMainContent"),n("CoreFooter")],1)],1)},c=[],o=(n("d3b7"),{name:"App",metaInfo:{title:"DETECTOR",titleTemplate:"%s | DETECTOR",htmlAttrs:{lang:"ru"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},components:{CoreNavBar:function(){return n.e("chunk-189675aa").then(n.bind(null,"a7a0"))},CoreMainContent:function(){return n.e("chunk-e4d3dcc4").then(n.bind(null,"2d7c"))},CoreFooter:function(){return n.e("chunk-50199773").then(n.bind(null,"7a74"))}}}),u=o,s=(n("7faf"),n("2877")),i=Object(s["a"])(u,r,c,!1,null,null,null),d=i.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[e._v("new version 123 ")])},h=[],m=n("91c9"),l=n.n(m),g={name:"Home",components:{mdbChip:m["mdbChip"]}},v=g,b=(n("2019"),Object(s["a"])(v,f,h,!1,null,"5d9b1259",null)),k=b.exports;a["default"].use(p["a"]);var w=new p["a"]({mode:"history",base:"/",scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:n||{x:0,y:0}},routes:[{path:"/",name:"home",component:k,props:!0},{path:"/region/:id",name:"region",component:function(){return Promise.all([n.e("chunk-f7177ccc"),n.e("chunk-2d0dd80d")]).then(n.bind(null,"8252"))},props:!0},{path:"/theme/:id",name:"theme",component:function(){return Promise.all([n.e("chunk-f7177ccc"),n.e("chunk-2d21aafa")]).then(n.bind(null,"bd24"))},props:!0},{path:"/human/:id",name:"human",component:function(){return Promise.all([n.e("chunk-f7177ccc"),n.e("chunk-2d22c34c")]).then(n.bind(null,"f1f1"))},props:!0},{path:"/media/:id",name:"media",component:function(){return Promise.all([n.e("chunk-f7177ccc"),n.e("chunk-2d0a3ef6")]).then(n.bind(null,"03fc"))},props:!0},{path:"/truth/:id",name:"truth",component:function(){return Promise.all([n.e("chunk-f7177ccc"),n.e("chunk-2d237580")]).then(n.bind(null,"fb5c"))},props:!0},{path:"/post/:id",name:"staticpost",component:function(){return Promise.all([n.e("chunk-f7177ccc"),n.e("chunk-0074fda0")]).then(n.bind(null,"efcc"))},props:!0},{path:"/search/:find",name:"search",component:function(){return Promise.all([n.e("chunk-f7177ccc"),n.e("chunk-5dd9b5a3")]).then(n.bind(null,"2d3b"))},props:!0},{path:"/donate",name:"donate",component:function(){return n.e("chunk-2d0dd3f2").then(n.bind(null,"8125"))}},{path:"/factcheck",name:"factcheck",component:function(){return n.e("chunk-2d224cd5").then(n.bind(null,"e24f"))}}]}),x=n("2f62"),y=(n("baa5"),n("b0c0"),n("96cf"),n("1da1")),R={p:{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Basic ZGpvbmFuYW1hOnF5ZWI0UTN4T0syVyRrcGReMQ==",Accept:"*/*"},redirect:"follow",referrerPolicy:"no-referrer"},URL:""};function P(e){var t,n,a={},r=[];for(n=0;n<e.length;n+=1)e[n].id=e[n].categor_id;for(n=0;n<e.length;n+=1)a[e[n].categor_id]=n,e[n].children=[];for(n=0;n<e.length;n+=1)t=e[n],0!==t.parent_id?e[a[t.parent_id]].children.push(t):r.push(t);return r}function j(e){var t,n;for(t=0;t<e.length;t+=1)for(n=0;n<e[t].posts.length;n+=1){var a=e[t].posts[n],r=a.post_id,c=a.geo_locate;e[t].posts={post_id:r,geo_locate:c},e[t].name=e[t]._id.substring(e[t]._id.lastIndexOf("/ ")+2)}return e}function O(e){var t,n;for(t=0;t<e.length;t+=1)for(n=0;n<e[t].page.length;n+=1)e[t].name=e[t].page[0].title;return e}var T={namespaced:!1,actions:{runLoadDataMegaMenu:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,e.commit,t.next=3,n("fetchCategories");case 3:return t.next=5,n("fetchTopRegions");case 5:return t.next=7,n("fetchTopPersonMedia",{api:"person",itemMenu:"Люди"});case 7:return t.next=9,n("fetchTopPersonMedia",{api:"media",itemMenu:"Медиа"});case 9:case"end":return t.stop()}}),t)})))()},fetchTopPersonMedia:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c,o,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/nav/humantop/"+t.api,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:for(c=n.sent,o=O(c),u=0;u<o.length;u+=1)o[u].id=o[u]._id;s={item:t.itemMenu,data:o},a("updateMegaMenuItem",s);case 11:case"end":return n.stop()}}),n)})))()},fetchTopRegions:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch(R.URL+"/api/nav/rgiontop",R.p);case 3:return a=t.sent,t.next=6,a.json();case 6:for(r=t.sent,c=j(r),o=0;o<c.length;o+=1)c[o].id=c[o].posts.geo_locate.value;u={item:"Регион",data:c},n("updateMegaMenuItem",u);case 11:case"end":return t.stop()}}),t)})))()},fetchCategories:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch(R.URL+"/api/nav/category",R.p);case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,c=P(r),o={item:"Тема",data:c},n("updateMegaMenuItem",o);case 10:case"end":return t.stop()}}),t)})))()},fetchPosts:function(e){var t=arguments;return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.length>1&&void 0!==t[1]?t[1]:"",n.next=4,fetch(R.URL+"/api/posts/"+r,R.p);case 4:return c=n.sent,n.next=7,c.json();case 7:o=n.sent,a("updateDataPost",o);case 9:case"end":return n.stop()}}),n)})))()},fetchStaticPost:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/post/"+t,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("updateStaticPost",c);case 8:case"end":return n.stop()}}),n)})))()}},mutations:{updateMegaMenuItem:function(e,t){var n=t.item,a=t.data;e.data.megamenu[n].data=a},updateDataPost:function(e,t){e.data.posts=t},updateStaticPost:function(e,t){for(var n=t,a=0;a<t.length;a+=1)n[a].page=t[a].page[0];e.data.staticpost=t}},state:{data:{posts:[],staticpost:[],megamenu:{"Регион":{type:"region",data:[]},"Тема":{type:"theme",data:[]},"Люди":{type:"human",data:[]},"Медиа":{type:"media",data:[]},"Степень истинности":{type:"truth",data:[{id:1,name:"Правда"},{id:2,name:"В основном правда"},{id:3,name:"Наполовину правда"},{id:4,name:"В основном ложь"},{id:5,name:"Ложь"}]}}}},getters:{getMegaMenuItem:function(e){return e.data.megamenu},getPosts:function(e){return e.data.posts},getStaticPost:function(e){return e.data.staticpost}}},C={namespaced:!1,actions:{fetchHumanPosts:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/human/"+t,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("updateHumanPosts",c);case 8:case"end":return n.stop()}}),n)})))()}},mutations:{updateHumanPosts:function(e,t){for(var n=0;n<t.length;n+=1){var a=t[n];t[n]=t[n].post,t[n].page=a.page[0]}e.data=t}},state:{data:{}},getters:{getHumanPosts:function(e){return e.data}}},_={namespaced:!1,actions:{fetchRegionPosts:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/region/"+t,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("updateRegionPosts",c);case 8:case"end":return n.stop()}}),n)})))()}},mutations:{updateRegionPosts:function(e,t){for(var n=0;n<t.length;n+=1){var a=t[n];t[n].page=a.page[0]}e.data=t}},state:{data:{}},getters:{getRegionPosts:function(e){return e.data}}},M={namespaced:!1,actions:{fetchTruthPosts:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/truth/"+t,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("updateTruthPosts",c);case 8:case"end":return n.stop()}}),n)})))()}},mutations:{updateTruthPosts:function(e,t){for(var n=0;n<t.length;n+=1){var a=t[n];t[n].page=a.page[0]}e.data=t}},state:{data:{}},getters:{getTruthPosts:function(e){return e.data}}},S={namespaced:!1,actions:{fetchThemePosts:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/theme/"+t,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("updateThemePosts",c);case 8:case"end":return n.stop()}}),n)})))()},fetchCategory:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/Categories/"+t,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("updateCategory",c);case 8:case"end":return n.stop()}}),n)})))()}},mutations:{updateThemePosts:function(e,t){for(var n=0;n<t.length;n+=1){var a=t[n];t[n].page=a.page[0]}e.data.themeposts=t},updateCategory:function(e,t){e.data.categories=t[0]}},state:{data:{themeposts:[],categories:[]}},getters:{getThemePosts:function(e){return e.data.themeposts},getCategory:function(e){return e.data.categories}}},L={namespaced:!1,actions:{fetchSearch:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fetch(R.URL+"/api/search/"+t,R.p);case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("updateSearch",c);case 8:case"end":return n.stop()}}),n)})))()}},mutations:{updateSearch:function(e,t){for(var n=0;n<t.posts.data.post.length;n+=1)t.posts.data.post[n].page=t.posts.data.page[n][0];delete t.posts.data["page"],e.data=t}},state:{data:{}},getters:{getSearch:function(e){return e.data}}};a["default"].use(x["a"]);var E=new x["a"].Store({modules:{navbar:T,human:C,region:_,truth:M,theme:S,search:L}}),U=n("2ead"),A=n.n(U);n("cabf"),n("3c76"),n("becf");a["default"].config.productionTip=!1,new a["default"]({moment:A.a,mdbvue:l.a,router:w,store:E,render:function(e){return e(d)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";n("b8ff")},b8ff:function(e,t,n){},bdcc:function(e,t,n){}});
//# sourceMappingURL=app-legacy.b569a021.js.map