(function(t){function e(e){for(var n,s,a=e[0],c=e[1],u=e[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1458:function(t,e,r){"use strict";var n=r("fc8d"),i=r.n(n);i.a},"501c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("asideMenu",{on:{triggerMarkerPopup:t.openPopup}}),r("maskMap",{ref:"map"}),r("lightBox")],1)},o=[],s=(r("d81d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aside-menu"},[r("div",{staticClass:"wraps"},[r("label",[t._v(" 縣市： "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.currCity,expression:"currCity"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currCity=e.target.multiple?r:r[0]}}},t._l(t.cityList,(function(e){return r("option",{key:e},[t._v(t._s(e))])})),0)]),r("label",[t._v(" 行政區： "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.currDistrict,expression:"currDistrict"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currDistrict=e.target.multiple?r:r[0]}}},t._l(t.districtList,(function(e){return r("option",{key:e.id},[t._v(t._s(e.name))])})),0)])]),r("div",{staticClass:"wraps"},[r("label",[r("i",{staticClass:"fas fa-search-location"}),t._v(" 關鍵字搜尋： "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"請輸入關鍵字"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})])]),r("ul",{staticClass:"store-lists"},t._l(t.stores,(function(e){return r("li",{key:e.id,staticClass:"store-info wraps",on:{click:function(r){return r.preventDefault(),t.$emit("triggerMarkerPopup",e.id)}}},[r("h1",{domProps:{innerHTML:t._s(t.keywordHighlight(e.name))}}),r("div",{staticClass:"mask-info"},[r("i",{staticClass:"fas fa-head-side-mask"}),r("span",[t._v("大人口罩: "+t._s(e.mask_adult)+" 個")])]),r("div",{staticClass:"mask-info"},[r("i",{staticClass:"fas fa-baby"}),r("span",[t._v("兒童口罩: "+t._s(e.mask_child)+" 個")])]),r("div",{staticClass:"mask-info"},[t._v(" 最後更新時間: "+t._s(e.updated)+" ")]),r("button",{staticClass:"btn-store-detail",on:{click:function(r){return t.openBox(e.id)}}},[r("i",{staticClass:"fas fa-info-circle"}),t._v(" 看詳細資訊 ")])])})),0)])}),a=[],c=(r("b0c0"),r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("3835")),u={name:"asideMenu",watch:{districtList:function(t){var e=Object(c["a"])(t,1),r=e[0];this.currDistrict=r.name}},computed:{currCity:{get:function(){return this.$store.state.currCity},set:function(t){this.$store.commit("setcurrCity",t)}},currDistrict:{get:function(){return this.$store.state.currDistrict},set:function(t){this.$store.commit("setcurrDistrict",t)}},keyword:{get:function(){return this.$store.state.keyword},set:function(t){this.$store.commit("setKeyword",t)}},showModal:{get:function(){return this.$store.state.showModal},set:function(t){this.$store.commit("setShowModal",t)}},infoBoxSid:{get:function(){return this.$store.state.infoBoxSid},set:function(t){this.$store.commit("setInfoBoxSid",t)}},cityList:function(){return this.$store.getters.cityList},districtList:function(){return this.$store.getters.districtList},stores:function(){return this.$store.getters.filteredStores}},methods:{openBox:function(t){this.infoBoxSid=t,this.showModal=!0},keywordHighlight:function(t){return t.replace(new RegExp(this.keyword,"g"),'<span class="highlight">'.concat(this.keyword,"</span>"))}}},l=u,d=(r("b45d"),r("2877")),f=Object(d["a"])(l,s,a,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"modal"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[t.currStore?r("div",{staticClass:"modal-container"},[r("div",{staticClass:"modal-body"},[r("h1",{staticClass:"store-name"},[t._v(t._s(t.currStore.name))]),r("hr"),r("h2",{staticClass:"title"},[t._v("營業時間")]),r("table",[r("thead",[r("tr",[r("th"),r("th",[t._v("ㄧ")]),r("th",[t._v("二")]),r("th",[t._v("三")]),r("th",[t._v("四")]),r("th",[t._v("五")]),r("th",[t._v("六")]),r("th",[t._v("日")])])]),r("tbody",[r("tr",[r("th",[t._v("早上")]),t._l(t.servicePeriods[0],(function(e,n){return r("td",{key:n},[t._v(t._s(e))])}))],2),r("tr",[r("th",[t._v("中午")]),t._l(t.servicePeriods[1],(function(e,n){return r("td",{key:n},[t._v(t._s(e))])}))],2),r("tr",[r("th",[t._v("晚上")]),t._l(t.servicePeriods[2],(function(e,n){return r("td",{key:n},[t._v(t._s(e))])}))],2)])]),r("h2",{staticClass:"title"},[t._v("地址 "+t._s(t.currStore.address))]),r("h2",{staticClass:"title"},[t._v("電話 "+t._s(t.currStore.phone))]),r("h2",{staticClass:"title"},[t._v("備註 "+t._s(t.currStore.note))])])]):t._e()])])])},m=[],v=(r("7db0"),r("fb6a"),r("1276"),{name:"lightbox",computed:{showModal:{get:function(){return this.$store.state.showModal},set:function(t){this.$store.commit("setShowModal",t)}},infoBoxSid:{get:function(){return this.$store.state.infoBoxSid},set:function(t){this.$store.commit("setInfoBoxSid",t)}},currStore:function(){var t=this;return this.$store.state.stores.find((function(e){return e.id===t.infoBoxSid}))},servicePeriods:function(){var t,e=(null===this||void 0===this||null===(t=this.currStore)||void 0===t?void 0:t["service_periods"])||"";return e=e.replace(/N/g,"O").replace(/Y/g,"X"),e?[e.slice(0,7).split(""),e.slice(7,14).split(""),e.slice(14,21).split("")]:e}},methods:{close:function(){this.showModal=!1}}}),g=v,w=(r("614c"),r("e403"),r("1458"),Object(d["a"])(g,h,m,!1,null,"785b7f6e",null)),y=w.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mask-map",attrs:{id:"mask-map"}})},k=[],b=(r("4160"),r("159b"),r("e11e")),x=r.n(b),S={name:"maskMap",data:function(){return{map:{},markers:[]}},computed:{currDistrictInfo:function(){return this.$store.getters.currDistrictInfo},filteredStores:function(){return this.$store.getters.filteredStores}},methods:{addMarker:function(t){var e={iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},r=x.a.marker([t.longitude,t.latitude],e).addTo(this.map).bindPopup('<h2 class="popup-name">'.concat(t.name,"</h2>"));r.markerId=t.id,r.lng=t.longitude,r.lat=t.latitude,this.markers.push(r)},clearMarkers:function(){var t=this;this.markers=[],this.map.eachLayer((function(e){e instanceof x.a.Marker&&t.map.removeLayer(e)}))},triggerPopup:function(t){var e=this.markers.find((function(e){return e.markerId===t}));this.map.flyTo(new x.a.LatLng(e.lng,e.lat),15),e.openPopup()}},watch:{currDistrictInfo:function(t){this.map.panTo(new x.a.LatLng(t.latitude,t.longitude))},filteredStores:function(t){var e=this;this.clearMarkers(),t.forEach((function(t){e.addMarker(t)}))}},mounted:function(){this.map=x.a.map("mask-map",{center:[25.03,121.55],zoom:14}),x.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'<a target="_blank" href="https://www.openstreetmap.org/">© OpenStreetMap 貢獻者</a>',maxZoom:18}).addTo(this.map)}},C=S,M=Object(d["a"])(C,_,k,!1,null,null,null),$=M.exports,j={name:"App",components:{asideMenu:p,lightBox:y,maskMap:$},methods:{openPopup:function(t){this.$refs.map.triggerPopup(t)}},mounted:function(){this.$store.dispatch("fetchLocations"),this.$store.dispatch("fetchPharmacies")}},L=j,P=(r("79cc"),Object(d["a"])(L,i,o,!1,null,null,null)),O=P.exports,D=(r("4de4"),r("caad"),r("d3b7"),r("2532"),r("5530")),B=(r("96cf"),r("1da1")),I=r("2f62");n["a"].use(I["a"]);var T=new I["a"].Store({state:{currCity:"臺北市",currDistrict:"北投區",location:[],stores:[],keyword:"",showModal:!1,infoBoxSid:null},mutations:{setcurrCity:function(t,e){t.currCity=e},setcurrDistrict:function(t,e){t.currDistrict=e},setAreaLocation:function(t,e){t.location=e},setStores:function(t,e){t.stores=e},setKeyword:function(t,e){t.keyword=e},setShowModal:function(t,e){t.showModal=e},setInfoBoxSid:function(t,e){t.infoBoxSid=e}},actions:{fetchLocations:function(t){return Object(B["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,fetch("https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json").then((function(t){return t.json()}));case 3:n=e.sent,r("setAreaLocation",n);case 5:case"end":return e.stop()}}),e)})))()},fetchPharmacies:function(t){return Object(B["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,fetch("https://kiang.github.io/pharmacies/json/points.json").then((function(t){return t.json()}));case 3:n=e.sent,i=n.features.map((function(t){return Object(D["a"])({},t.properties,{latitude:t.geometry.coordinates[0],longitude:t.geometry.coordinates[1]})})),r("setStores",i);case 6:case"end":return e.stop()}}),e)})))()}},getters:{cityList:function(t){return t.location.map((function(t){return t.name}))},districtList:function(t){var e;return null===(e=t.location.find((function(e){return e.name===t.currCity})))||void 0===e?void 0:e.districts},filteredStores:function(t){return t.keyword?t.stores.filter((function(e){return e.name.includes(t.keyword)})):t.stores.filter((function(e){return e.county===t.currCity&&e.town===t.currDistrict}))},currDistrictInfo:function(t,e){return e.districtList?e.districtList.find((function(e){return e.name===t.currDistrict})):{}}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:T,render:function(t){return t(O)}}).$mount("#app")},"614c":function(t,e,r){"use strict";var n=r("501c"),i=r.n(n);i.a},"79cc":function(t,e,r){"use strict";var n=r("d231"),i=r.n(n);i.a},aa27:function(t,e,r){},b45d:function(t,e,r){"use strict";var n=r("cc8f"),i=r.n(n);i.a},cc8f:function(t,e,r){},d231:function(t,e,r){},e403:function(t,e,r){"use strict";var n=r("aa27"),i=r.n(n);i.a},fc8d:function(t,e,r){}});