(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{631:function(t,e,n){var content=n(729);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("653e89d4",content,!0,{sourceMap:!1})},728:function(t,e,n){"use strict";n(631)},729:function(t,e,n){var r=n(78),o=n(225),c=n(564),l=r((function(i){return i[1]})),d=o(c);l.push([t.i,".news-item-container{border-top:2px solid #efefef}.share-list-item{height:28px;margin-right:5px;width:28px}.post-img{height:auto;margin-bottom:30px;-o-object-fit:cover;object-fit:cover;width:100%}.date{color:#999}.most-viewed{margin:100px 0 60px}.most-viewed-heading{background:url("+d+") 0 100% no-repeat;font-size:22px;font-weight:700;line-height:26px;margin-bottom:20px;padding:10px 0 20px}",""]),l.locals={},t.exports=l},752:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(38),n(28),n(9),n(19),n(22),n(630),n(165),n(46),n(583)),c=n(584),l=n(557),d=n(585),v={components:{MainNavBar:o.default,StickyInfoContact:c.default,Footer:d.default,PartnersCarousel:l.default},data:function(){return{data:{titleImage:"",createdAt:"",descriptionEn:"",descriptionVn:"",titleEn:"",titleVn:""},randomList:[],mostViewedList:[],dialog:!1}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$gsap.to(window,{duration:.5,scrollTo:0});case 2:return e.next=4,t.getData();case 4:return e.next=6,t.getRandomList();case 6:return e.next=8,t.getMostViewedList();case 8:case"end":return e.stop()}}),e)})))()},watch:{"$route.params.id":"fetchAllData"},methods:{fetchAllData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$gsap.to(window,{duration:.5,scrollTo:0});case 2:return e.next=4,t.getData();case 4:return e.next=6,t.getRandomList();case 6:return e.next=8,t.getMostViewedList();case 8:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.$route),e.next=3,fetch("".concat(t.$API_URL,"/news/").concat(t.$route.params.id),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 3:(n=e.sent).success&&(console.log(n),t.data={titleImage:n.data.titleImage,createdAt:n.data.createdAt,descriptionEn:n.data.descriptionEn,descriptionVn:n.data.descriptionVn,titleEn:n.data.titleEn,titleVn:n.data.titleVn});case 5:case"end":return e.stop()}}),e)})))()},getRandomList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={numRecord:3},e.next=3,fetch("".concat(t.$API_URL,"/news/search_random"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then((function(t){return t.json()}));case 3:(n=e.sent).success&&(t.randomList=n.data);case 5:case"end":return e.stop()}}),e)})))()},getMostViewedList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={queryString:"",pagingAndSorting:{sort:{viewCount:-1}}},e.next=3,fetch("".concat(t.$API_URL,"/news/search"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then((function(t){return t.json()}));case 3:(n=e.sent).success&&(t.mostViewedList=n.data.slice(0,3));case 5:case"end":return e.stop()}}),e)})))()},openNews:function(t){this.$router.push({path:"hall-of-fame/".concat(t)})},renderDate:function(t){return new Date(t).toLocaleDateString("en-GB")},shareOnFB:function(){var t=window.location.href;console.log(t);try{new URL(t)}catch(e){return void console.error("Invalid URL:",t)}var e="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t);window.open(e,"facebook-share-dialog","width=800,height=600")},copyLink:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText("http://localhost:3000".concat(t.$route.fullPath));case 3:t.dialog=!0,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Vui lòng thử lại");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}},h=(n(728),n(79)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("MainNavBar"),t._v(" "),e("main",{staticClass:"news-container"},[e("el-dialog",{attrs:{title:"Thông báo",visible:t.dialog,width:"30%"},on:{"update:visible":function(e){t.dialog=e}}},[e("div",{staticStyle:{display:"flex","align-items":"center","flex-direction":"column"}},[e("img",{staticStyle:{width:"150px"},attrs:{src:n(594),alt:""}}),t._v(" "),e("h3",[t._v("Bài viết này đã được copy vào bộ nhớ tạm thời")])]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Xin cảm ơn")])],1)]),t._v(" "),e("div",{staticClass:"news-container-wrapper"},[e("div",{staticClass:"news-item-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,lg:4}},[e("h3",{staticClass:"title-of-news"},[t._v("Học viên xuất sắc")]),t._v(" "),e("h4",[t._v("Chia sẻ bài viết")]),t._v(" "),e("div",{staticClass:"share-list"},[e("a",{attrs:{target:"_blank"},on:{click:t.shareOnFB}},[e("img",{staticClass:"share-list-item",attrs:{src:n(562),alt:""}})]),t._v(" "),e("a",{on:{click:t.copyLink}},[e("svg",{staticClass:"share-list-item",attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 640 512"}},[e("path",{attrs:{d:"M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"}})])])])]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:15}},[e("h1",{staticClass:"news-post-heading"},[t._v("\n              "+t._s(t.data.titleVn)+"\n            ")]),t._v(" "),e("div",{staticClass:"heading-img",domProps:{innerHTML:t._s(t.data.titleImage)}}),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.renderDate(this.data.createdAt)))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(this.data.descriptionVn)}})]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:5}},[e("div",{staticClass:"most-viewed"},[this.mostViewedList.length>2?e("div",{staticClass:"most-viewed-heading"},[t._v("CÁC BÀI VIẾT XEM NHIỀU")]):t._e(),t._v(" "),e("div",{staticClass:"most-viewed-item"},t._l(t.mostViewedList,(function(data){return e("div",{key:data.id},[e("p",{on:{click:function(e){return t.openNews(data._id)}}},[t._v("\n                    "+t._s(data.summaryVn)+"\n                  ")]),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.renderDate(data.createdAt)))])])})),0)]),t._v(" "),e("div",{staticClass:"most-viewed"},[this.randomList.length>2?e("div",{staticClass:"most-viewed-heading"},[t._v("CÁC BÀI VIẾT NGẪU NHIÊN")]):t._e(),t._v(" "),e("div",{staticClass:"most-viewed-item"},t._l(t.randomList,(function(data){return e("div",{key:data.id},[e("p",{on:{click:function(e){return t.openNews(data._id)}}},[t._v("\n                    "+t._s(data.summaryVn)+"\n                  ")]),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.renderDate(data.createdAt)))])])})),0)])])],1)],1)]),t._v(" "),e("PartnersCarousel")],1),t._v(" "),e("StickyInfoContact"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);