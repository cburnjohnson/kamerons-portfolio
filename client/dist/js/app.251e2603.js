(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],p=0,v=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"008c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"events__nav"},[n("ul",{staticClass:"events__types"},e._l(e.eventTypes,(function(t){return n("li",{key:t,class:["events__type",{"events__type--active":e.currentEventType===t}],on:{click:function(n){return e.setEventType(t)}}},[e._v(" "+e._s(t)+" ")])})),0),n("ul",{staticClass:"events__names"},e._l(e.eventsByType,(function(t){return n("li",{key:t.id,class:["events__name",{"events__name--active":e.selectedEvent.name===t.name}],on:{click:function(n){return e.$emit("selectEvent",t)}}},[e._v(" "+e._s(new Intl.DateTimeFormat("en-US").format(new Date(t.dateOfEvent)))+" ")])})),0)])},r=[],s=n("2909"),i=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),{data:function(){return{currentEventType:"birthday"}},props:["events","selectedEvent"],computed:{eventTypes:function(){return Object(s["a"])(new Set(this.events.map((function(e){return e.type}))))},eventsByType:function(){var e=this;return this.events.filter((function(t){return t.type===e.currentEventType}))}},methods:{setEventType:function(e){this.currentEventType=e}}}),o=i,c=(n("d1ce"),n("2877")),l=Object(c["a"])(o,a,r,!1,null,"78e7019a",null);t["a"]=l.exports},"06db":function(e,t,n){"use strict";n("d5f3")},"1e8a":function(e,t,n){},"1f1e":function(e,t,n){e.exports=n.p+"img/portrait.cd8522d3.webp"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-container"}},[n("Navbar"),n("router-view")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar"},[n("div",{staticClass:"navbar__container"},[n("router-link",{staticClass:"navbar__brand",attrs:{to:"/"}},[e._v("K.H.")]),n("div",{staticClass:"navbar__right"},[n("div",{class:["navbar-mobile__menu-icon",{"navbar-mobile__menu-icon--open":e.isMenuOpen}],on:{click:e.toggleNav}},[n("span"),n("span"),n("span")]),n("ul",{staticClass:"navbar__links"},[n("li",{staticClass:"navbar__link"},[n("router-link",{attrs:{to:"/events"}},[e._v("Events")])],1)]),e._m(0)])],1),n("div",{class:["navbar-mobile__overlay",{"navbar-mobile__overlay--open":e.isMenuOpen}]}),n("div",{class:["navbar-mobile__mobile-menu",{"navbar-mobile__mobile-menu--open":e.isMenuOpen}]},[e._m(1),n("ul",{staticClass:"navbar-mobile__links"},[n("li",{staticClass:"navbar-mobile__link"},[n("router-link",{attrs:{to:"/events"}},[e._v("Events")])],1)])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"navbar__media-list"},[n("li",{staticClass:"navbar__media-item"},[n("a",{attrs:{href:"https://www.instagram.com/kameronholmberg/",target:"_blank"}},[n("i",{staticClass:"fab fa-instagram"})])]),n("li",{staticClass:"navbar__media-item"},[n("a",{attrs:{href:"https://www.instagram.com/kameronholmberg/",target:"_blank"}},[n("i",{staticClass:"fab fa-twitter"})])]),n("li",{staticClass:"navbar__media-item"},[n("a",{attrs:{href:"https://www.linkedin.com/in/kameron-holmberg-a788231a3/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin-in"})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"navbar-mobile__media-list"},[n("li",{staticClass:"navbar-mobile__media-item"},[n("a",{attrs:{href:"https://www.instagram.com/kameronholmberg/",target:"_blank"}},[n("i",{staticClass:"fab fa-instagram"})])]),n("li",{staticClass:"navbar-mobile__media-item"},[n("a",{attrs:{href:"https://www.instagram.com/kameronholmberg/",target:"_blank"}},[n("i",{staticClass:"fab fa-twitter"})])]),n("li",{staticClass:"navbar-mobile__media-item"},[n("a",{attrs:{href:"https://www.linkedin.com/in/kameron-holmberg-a788231a3/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin-in"})])])])}],c={data:function(){return{isMenuOpen:!1}},methods:{toggleNav:function(){this.isMenuOpen=!this.isMenuOpen}}},l=c,u=(n("b912"),n("2877")),p=Object(u["a"])(l,i,o,!1,null,"1574601a",null),v=p.exports,f={components:{Navbar:v}},m=f,d=(n("5c0b"),Object(u["a"])(m,r,s,!1,null,null,null)),_=d.exports,b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("Hero")],1)},h=[],w=n("3f08"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero"},[n("div",{staticClass:"hero__flex"},[n("section",{staticClass:"hero__left"},[n("div",{staticClass:"hero__container"},[n("p",{staticClass:"hero__intro"},[e._v("Hi, I am")]),e._m(0),n("p",{staticClass:"hero__name"},[e._v("Kameron Holmberg")]),n("p",{staticClass:"hero__text"},[e._v("Event planner")]),n("router-link",{staticClass:"hero__cta",attrs:{to:"/events"}},[e._v(" View Events ")])],1)]),e._m(1)])])},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero__portrait"},[a("img",{attrs:{src:n("1f1e"),alt:"portrait"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero__right"},[n("div",{staticClass:"hero__img"},[n("div",{staticClass:"hero__img-overlay"})])])}],E={},O=E,k=(n("06db"),Object(u["a"])(O,y,C,!1,null,"2d343da8",null)),x=k.exports,T={components:{Hero:x,Fragment:w["a"]}},j=T,I=Object(u["a"])(j,g,h,!1,null,null,null),P=I.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fragment",[n("div",{staticClass:"events__container"},[n("EventsNav",{attrs:{events:e.events,selectedEvent:e.selectedEvent},on:{selectEvent:e.selectEvent}}),e.selectedEvent?n("div",{staticClass:"gallery-container"},[n("h1",{staticClass:"title"},[e._v(" "+e._s(new Intl.DateTimeFormat("en-US").format(new Date(e.selectedEvent.dateOfEvent)))+" ")]),n("div",{staticClass:"gallery"},e._l(e.selectedImages,(function(t){return n("img",{key:t,staticClass:"gallery__img",attrs:{src:t,alt:""},on:{click:function(n){return e.openPopup(t)}}})})),0)]):e._e()],1),n("div",{ref:"popup",staticClass:"popup",on:{click:e.closePopup}},[n("img",{ref:"popupImg",staticClass:"popup__img",attrs:{src:"",alt:""}})])])},R=[],S=n("e54f"),D=S["a"],N=(n("f17e"),Object(u["a"])(D,$,R,!1,null,null,null)),M=N.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("form",{staticClass:"login__form",on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-group__input",attrs:{type:"text",name:"username",id:"username",placeholder:" "},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("label",{staticClass:"form-group__label",attrs:{for:"username"}},[e._v("Username")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-group__input",attrs:{type:"password",name:"password",id:"password",placeholder:" "},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("label",{staticClass:"form-group__label",attrs:{for:"password"}},[e._v("Password")])]),n("input",{staticClass:"form-group__btn",attrs:{type:"submit",value:"Login"}})])])},U=[],A={data:function(){return{username:null,password:null}},methods:{onLogin:function(){if("Kameron"===this.username&&"123123"===this.password){var e=window.localStorage;e.setItem("userAuthenticated",!0),this.$router.push({name:"Admin"})}else console.log("error")}}},F=A,H=(n("9b5b"),Object(u["a"])(F,L,U,!1,null,"1deaa350",null)),q=H.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-container"},[n("div",{staticClass:"admin"},[n("h2",{staticClass:"admin__title"},[e._v("Upload Events")]),n("form",{staticClass:"admin__form",on:{submit:function(t){return t.preventDefault(),e.addEvent.apply(null,arguments)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.dateOfEvent,expression:"dateOfEvent"}],staticClass:"form-group__input",attrs:{type:"date",id:"dateOfEvent",placeholder:" ",required:""},domProps:{value:e.dateOfEvent},on:{input:function(t){t.target.composing||(e.dateOfEvent=t.target.value)}}}),n("label",{staticClass:"form-group__label",attrs:{for:"dateOfEvent"}},[e._v("Date of Event")])]),n("h3",[e._v("Type of Event")]),n("div",{staticClass:"form-group form-group--radio"},[n("div",{staticClass:"form-group__child"},[n("label",{attrs:{for:"birthday"}},[e._v("Birthday")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.eventType,expression:"eventType"}],attrs:{type:"radio",name:"typeOfEvent",value:"birthday"},domProps:{checked:e._q(e.eventType,"birthday")},on:{change:function(t){e.eventType="birthday"}}})]),n("div",{staticClass:"form-group__child"},[n("label",{attrs:{for:"wedding"}},[e._v("Wedding")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.eventType,expression:"eventType"}],attrs:{type:"radio",name:"typeOfEvent",value:"wedding"},domProps:{checked:e._q(e.eventType,"wedding")},on:{change:function(t){e.eventType="wedding"}}})])]),n("div",{staticClass:"form-group form-group--align"},[n("label",{staticClass:"form-group__label--file",attrs:{for:"images"}},[e._v("Select Images")]),n("input",{ref:"eventImages",staticClass:"form-group__file",attrs:{type:"file",name:"images",id:"images",multiple:"",required:""}})]),e.uploading?n("p",[e._v("Uploading...")]):n("input",{staticClass:"form-group__btn",attrs:{type:"submit",value:"UPLOAD"}})])]),n("div",{staticClass:"events"},[n("h2",{staticClass:"events__title"},[e._v("List of Events")]),n("ul",{staticClass:"events__list"},e._l(e.events,(function(t){return n("li",{key:t._id,staticClass:"events__list-item"},[n("p",{staticClass:"event"},[e._v(" "+e._s(new Intl.DateTimeFormat("en-US").format(new Date(t.dateOfEvent)))+" ")]),n("button",{staticClass:"button button--delete",on:{click:function(n){return e.deleteEvent(t._id)}}},[n("i",{staticClass:"fas fa-trash-alt"})])])})),0)])])},K=[],J=n("2909"),Y=n("1da1"),V=(n("96cf"),n("a630"),n("3ca3"),n("159b"),n("99af"),n("4de4"),n("bc3a")),W=n.n(V);function z(){return G.apply(this,arguments)}function G(){return G=Object(Y["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("/api/events");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}var Q={data:function(){return{dateOfEvent:null,eventType:"birthday",events:[],uploading:!1}},methods:{addEvent:function(){var e=this;return Object(Y["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.uploading=!0,n=e.$refs.eventImages,a=Array.from(n.files),r=new FormData,a.forEach((function(e){r.append("files",e)})),r.append("dateOfEvent",e.dateOfEvent),r.append("eventType",e.eventType),t.next=9,W.a.post("upload",r,{headers:{"Content-Type":"multipart/form-data"}});case 9:s=t.sent,e.uploading=!1,e.dateOfEvent="",n.value=null,e.events=[].concat(Object(J["a"])(e.events),[s.data]);case 14:case"end":return t.stop()}}),t)})))()},deleteEvent:function(e){var t=this;return Object(Y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,W.a.delete("/api/events/".concat(e));case 2:t.events=t.events.filter((function(t){return t._id!==e}));case 3:case"end":return n.stop()}}),n)})))()}},created:function(){var e=this;return Object(Y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:e.events=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},X=Q,Z=(n("6e6f"),Object(u["a"])(X,B,K,!1,null,"24f9c66e",null)),ee=Z.exports;a["a"].use(b["a"]);var te=new b["a"]({routes:[{path:"/",name:"Home",component:P},{path:"/events",name:"Events",component:M},{path:"/login",name:"Login",component:q},{path:"/admin",name:"Admin",component:ee,beforeEnter:function(e,t,n){window.localStorage.getItem("userAuthenticated")?n():n({name:"Login"})}}]});a["a"].config.productionTip=!1,new a["a"]({router:te,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6e6f":function(e,t,n){"use strict";n("1e8a")},"9b44":function(e,t,n){},"9b5b":function(e,t,n){"use strict";n("fac8")},"9c0c":function(e,t,n){},b912:function(e,t,n){"use strict";n("bcff")},bcff:function(e,t,n){},d1ce:function(e,t,n){"use strict";n("d52d")},d52d:function(e,t,n){},d5f3:function(e,t,n){},e54f:function(e,t,n){"use strict";(function(e){var a=n("2909"),r=n("1da1"),s=(n("96cf"),n("99af"),n("d3b7"),n("25f0"),n("159b"),n("bc3a")),i=n.n(s),o=n("3f08"),c=n("008c");t["a"]={components:{Fragment:o["a"],EventsNav:c["a"]},data:function(){return{events:[],selectedEvent:null,selectedImages:[]}},created:function(){this.getEvents()},methods:{getEvents:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/events");case 2:n=t.sent,e.events=[].concat(Object(a["a"])(e.events),Object(a["a"])(n.data)),e.selectedEvent=n.data[0];case 5:case"end":return t.stop()}}),t)})))()},getImage:function(t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.a.get("/api/image/".concat(t),{responseType:"arraybuffer"});case 2:return a=n.sent,r=e.from(a.data,"binary").toString("base64"),n.abrupt("return","data:image/png;base64,".concat(r));case 5:case"end":return n.stop()}}),n)})))()},openPopup:function(e){var t=this.$refs,n=t.popup,a=t.popupImg;n.style.transform="translateY(0)",a.src=e},closePopup:function(){var e=this.$refs,t=e.popup,n=e.popupImg;t.style.transform="translateY(-100%)",n.src="",n.alt=""},selectEvent:function(e){this.selectedEvent=e}},watch:{selectedEvent:function(){var e=this;this.selectedImages=[],this.selectedEvent.images.forEach(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getImage(n);case 2:r=t.sent,e.selectedImages=[].concat(Object(a["a"])(e.selectedImages),[r]);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}}).call(this,n("b639").Buffer)},f17e:function(e,t,n){"use strict";n("9b44")},fac8:function(e,t,n){}});
//# sourceMappingURL=app.251e2603.js.map