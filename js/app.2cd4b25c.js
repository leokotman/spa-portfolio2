(function(t){function e(e){for(var o,s,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/spa-portfolio2/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"071e":function(t,e,n){},"11db":function(t,e,n){t.exports=n.p+"img/project4.9ca727ee.png"},"26f9":function(t,e,n){},"2c62":function(t,e,n){"use strict";n("26f9")},"3ad5":function(t,e,n){},4225:function(t,e,n){t.exports=n.p+"img/project5.bfee8488.png"},"4c2f":function(t,e,n){},"4c3f":function(t,e,n){t.exports=n.p+"img/game-jump.8aa20bc2.png"},"4ec3":function(t,e,n){"use strict";n("3ad5")},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),i=n("8c4f"),r=function(){var t=this,e=t._self._c;return e("div",[e("the-navigation"),e("router-view"),e("router-view",{attrs:{name:"footer"}})],1)},s=[],a=function(){var t=this,e=t._self._c;return e("header",[e("nav",[e("ul",[e("li",[e("v-btn",{on:{click:t.toggleActivity}},[e("router-link",{attrs:{to:"/spa-portfolio2"}},[t._v("Main")])],1)],1),e("li",[e("v-btn",[e("router-link",{attrs:{to:"/spa-portfolio2/projects"}},[t._v("Projects")])],1)],1),e("li",[e("v-btn",[e("router-link",{attrs:{to:"/spa-portfolio2/contacts"}},[t._v("Contacts")])],1)],1)])])])},c=[],l={methods:{toggleActivity(t){t.stopPropagation(),t.target.setAttribute("color","error"),t.target.setAttribute("large","")}}},p=l,u=(n("2c62"),n("2877")),d=Object(u["a"])(p,a,c,!1,null,"43df93ec",null),f=d.exports,m={name:"App",components:{TheNavigation:f},data(){return{experience:[{dates:"Oct 2021",format:"Job",description:"Web-developer. Tech stack: Vue.js + Ejs. Project: business orders' and items' stock system. Fixed problems with frontend, new users' regitration."},{dates:"2020 – today",format:"Education",description:"Front-end courses (Youtube; Udemy; Freecodecamp; GeekBrains - web-development React, QA; Codewars), making pet projects"},{dates:"2019 – 2020",format:"Job",description:"Bank representative (Tinkoff)"},{dates:"2018 – 2020",format:"Job",description:"Psychologist (consultation, private practice)"},{dates:"2015 – 2019",format:"Education",description:"RSUH (Psychology Institute) – bachelor"},{dates:"2009 – 2014",format:"Education",description:"NRNU Mephi (Institute of International Relations) – specialist"},{dates:"2015",format:"Job",description:"Adminstrator (State budgetary institution on culture 'Sovremennik')"}],skills:{hardSkills:["HTML5","CSS3, SCSS","JavaScript","VueJS","ReactJS"],softSkills:["Analytical mind","Creative thinking","Attentive towards details","Conflicts' managment"]},address:"Montenegro, Herceg Novi",contacts:["+382(68)498-108"],webLinks:[{name:"My Github profile",link:"https://github.com/leokotman"},{name:"Facebook",link:"https://www.facebook.com/leokotman"},{name:"levkotman@gmail.com",link:"mailto:levkotman@gmail.com"}],projects:[{link:"https://leokotman.github.io/local_lang_vue/",imgSrc:"project6.png",alt:"Serbian-English learning app",width:"1140",height:"600",projectText:"Serbian-English learning app"},{link:"https://leokotman.github.io/forum_lp/",imgSrc:"project7.png",alt:"Forum Registration landing page",width:"1140",height:"600",projectText:"Security Forum registration landing page"},{link:"https://leokotman.github.io/JesKotman-artist/",imgSrc:"project2.png",alt:"project2-artists-page",width:"1140",height:"600",projectText:"Artist's landing page"},{link:"https://leokotman.github.io/4-HTML5-CSS3/",imgSrc:"project1.png",alt:"project1-course-site",width:"1140",height:"480",projectText:"Website Landing page"},{link:"https://leokotman.github.io/rockstone-swiper/",imgSrc:"project3.png",alt:"project3-mobile-React-app",width:"",height:"350",projectText:"Messages & Current time – Swiper React mobile app"},{link:"https://leokotman.github.io/drum-kit/",imgSrc:"project4.png",alt:"project4-drumkit-vanillajs",width:"",height:"350",projectText:"Play drums on Vanilla JS"},{link:"https://leokotman.github.io/My-portfolio/",imgSrc:"project5.png",alt:"project5-first-portfolio",width:"",height:"350",projectText:"First Portfolio"}]}},provide(){return{experience:this.experience,skills:this.skills,address:this.address,contacts:this.contacts,webLinks:this.webLinks,projects:this.projects}}},h=m,g=(n("9cf0"),Object(u["a"])(h,r,s,!1,null,null,null)),v=g.exports,b=function(){var t=this,e=t._self._c;return e("main",[e("v-card",{staticClass:"about_author",attrs:{elevation:"2",outlined:"",shaped:""}},[e("h1",[t._v("Lev Kotman")]),e("h3",{staticClass:"card-heading"},[t._v("Front-end web-developer")]),e("p",{staticClass:"paragraph"},[t._v(" I started programming in 2020, during worldwide crisis. I have come to development after the long journey to myself. The information here is updated according to the new skills acquired. ")])]),e("section",{staticClass:"exp_skills"},[e("v-card",{attrs:{width:"50%"}},[e("v-list",{attrs:{dense:""}},[e("v-subheader",[e("h2",{staticClass:"content-heading"},[t._v("Experience")])]),e("v-list-item-group",t._l(t.experience,(function(n){return e("v-list-item",{key:n.dates,staticClass:"exp_item"},[e("v-list-item-content",[t._v(t._s(n.dates))]),e("v-list-item-content",[e("strong",[t._v(t._s(n.format))]),t._v(" "+t._s(n.description)+" ")])],1)})),1)],1)],1),e("v-card",{attrs:{width:"50%"}},[e("v-list",{staticClass:"skills_list"},[e("v-list-item-group",[e("v-subheader",[e("h2",{staticClass:"content-heading"},[t._v("Hard Skills")])]),e("v-list-item",{staticClass:"skills_item"},t._l(t.skills.hardSkills,(function(n){return e("v-list-item-content",{key:n.index},[t._v(" "+t._s(n)+" ")])})),1)],1),e("v-list-item-group",[e("v-subheader",[e("h2",{staticClass:"content-heading"},[t._v("Soft Skills")])]),e("v-list-item",{staticClass:"skills_item"},t._l(t.skills.softSkills,(function(n){return e("v-list-item-content",{key:n.index},[t._v(" "+t._s(n)+" ")])})),1)],1)],1)],1)],1)],1)},_=[],j={inject:["experience","skills"]},k=j,w=(n("e120"),Object(u["a"])(k,b,_,!1,null,null,null)),x=w.exports,y=function(){var t=this,e=t._self._c;return e("v-footer",t._b({attrs:{padless:t.padless}},"v-footer",t.localAttrs,!1),[e("v-card",{attrs:{width:"100%"}},[e("v-card-text",[e("span",[e("v-icon",[t._v(t._s(t.icons.address))]),t._v(" "+t._s(t.address)+" ")],1),t._l(t.contacts,(function(n){return e("v-btn",{key:n.index},[n==t.contacts[0]?e("v-icon",[t._v(" "+t._s(t.icons.phone))]):t._e(),n==t.contacts[1]?e("v-icon",[t._v(" "+t._s(t.icons.chat))]):t._e(),e("a",{attrs:{href:"tel:"+n}},[t._v(t._s(n))])],1)}))],2),e("v-divider"),e("v-card-text",[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Lev Kotman")])])],1)],1)},S=[],C={inject:["address","contacts"],data(){return{icons:{phone:"mdi-phone",chat:"mdi-whatsapp",address:"mdi-map-marker"},padless:!0,variant:"fixed"}},computed:{localAttrs(){const t={};return"default"===this.variant?(t.absolute=!1,t.fixed=!1):t[this.variant]=!0,t}}},O=C,P=(n("9800"),Object(u["a"])(O,y,S,!1,null,"5fe66b20",null)),T=P.exports,M=function(){var t=this,e=t._self._c;return e("section",{staticClass:"our-project container",attrs:{id:"my_projects"}},[e("h2",{staticClass:"content-heading"},[t._v("My finished projects")]),e("p",{staticClass:"paragraph paragraph_project"},[t._v(" You can find here my recent projects (screenshots are real projects & clickable links). ")]),t._l(t.projects,(function(o){return e("div",{key:o.alt,staticClass:"project_item"},[e("a",{attrs:{href:o.link,target:"_blank"}},[e("img",{staticClass:"project_img",attrs:{src:n("bb6e")("./"+o.imgSrc),alt:o.alt,width:o.width,height:o.height}}),e("p",{staticClass:"project_text_small"},[t._v(t._s(o.projectText))])])])}))],2)},A=[],L={name:"ProjectsList",inject:["projects"]},J=L,F=(n("ec11"),Object(u["a"])(J,M,A,!1,null,"854947e6",null)),E=F.exports,R=function(){var t=this,e=t._self._c;return e("main",[e("h1",[t._v("Projects page")]),e("nav",[e("v-btn",{attrs:{small:""}},[e("router-link",{attrs:{to:"/spa-portfolio2/projects/sites"}},[t._v("Websites")])],1),e("v-btn",{attrs:{small:""}},[e("router-link",{attrs:{to:"/spa-portfolio2/projects/games"}},[t._v("Games")])],1)],1),e("router-view")],1)},N=[],H=(n("f740"),{}),I=Object(u["a"])(H,R,N,!1,null,"42597b6c",null),U=I.exports,D=function(){var t=this,e=t._self._c;return e("section",[e("ul",[e("li",[e("v-card",[e("a",{attrs:{href:"https://leokotman.github.io/monster-game/",target:"_blank",title:"Beat the monster"}},[e("img",{attrs:{src:n("e787"),alt:"monster-game",height:"400"}})])])],1),e("li",[e("v-card",[e("a",{attrs:{href:"https://leokotman.github.io/doodle-jump/",target:"_blank",title:"Doodle jump"}},[e("img",{attrs:{src:n("4c3f"),alt:"jump-game",height:"400"}})])])],1)])])},B=[],G=(n("4ec3"),{}),K=Object(u["a"])(G,D,B,!1,null,"2af0b3db",null),V=K.exports,W=function(){var t=this,e=t._self._c;return e("main",[e("h1",[t._v("Contacts page")]),e("v-card",{attrs:{tile:"","max-width":"300"}},[e("v-list",{attrs:{rounded:""}},[e("v-list-item-group",t._l(t.contacts,(function(n){return e("v-list-item",{key:n.index},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(t.icons.contacts)}})],1),e("v-list-item-content",[e("v-list-item-title",[e("a",{attrs:{href:"tel:"+n}},[t._v(" "+t._s(n)+" ")])])],1)],1)})),1)],1)],1),e("v-card",{attrs:{tile:"","max-width":"300"}},[e("v-list",{attrs:{rounded:""}},[e("v-list-item-group",t._l(t.webLinks,(function(n){return e("v-list-item",{key:n.name},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(t.icons.links)}})],1),e("v-list-item-content",[e("v-list-item-title",[e("a",{attrs:{href:n.link,target:"_blank"}},[t._v(" "+t._s(n.name)+" ")])])],1)],1)})),1)],1)],1),e("v-card",{staticClass:"map"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501546.5340215224!2d18.269279135926663!3d42.68872573668996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3217242c1fcb%3A0x384c9d866effd346!2sMontenegro!5e0!3m2!1sen!2s!4v1613007567467!5m2!1sen!2s",width:"100%",height:"300",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])],1)},Y=[],q={inject:["address","contacts","webLinks"],data(){return{icons:{contacts:"mdi-phone",links:"mdi-web"}}}},Q=q,z=(n("de9d"),Object(u["a"])(Q,W,Y,!1,null,"390a1ef0",null)),X=z.exports;const Z=[{path:"/spa-portfolio2",name:"main",components:{default:x,footer:T}},{path:"/spa-portfolio2/projects",name:"projects",components:{default:U,footer:T},children:[{path:"/spa-portfolio2/projects/sites",name:"websites",component:E},{path:"/spa-portfolio2/projects/games",name:"games",component:V}]},{path:"/spa-portfolio2/contacts",name:"contacts",components:{default:X,footer:T}}];var $=n("ce5b"),tt=n.n($);n("bf40");o["default"].use(tt.a);var et=new tt.a({});n("e792");o["default"].use(i["a"]);const nt=new i["a"]({routes:Z,mode:"history"});new o["default"]({el:"#app",router:nt,vuetify:et,render:t=>t(v)})},"7f38":function(t,e,n){},"897f":function(t,e,n){t.exports=n.p+"img/project6.5474067e.png"},9800:function(t,e,n){"use strict";n("f7b0")},"9cf0":function(t,e,n){"use strict";n("c36c")},"9fce":function(t,e,n){t.exports=n.p+"img/project2.e14b2b58.png"},bb6e:function(t,e,n){var o={"./game-jump.png":"4c3f","./game-monster.png":"e787","./project1.png":"ccdd","./project2.png":"9fce","./project3.png":"bf5a","./project4.png":"11db","./project5.png":"4225","./project6.png":"897f","./project7.png":"d56a"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id="bb6e"},bf5a:function(t,e,n){t.exports=n.p+"img/project3.e4d83785.png"},c241:function(t,e,n){},c36c:function(t,e,n){},ccdd:function(t,e,n){t.exports=n.p+"img/project1.2f7748e3.png"},d56a:function(t,e,n){t.exports=n.p+"img/project7.4797cefd.png"},de9d:function(t,e,n){"use strict";n("071e")},e120:function(t,e,n){"use strict";n("4c2f")},e787:function(t,e,n){t.exports=n.p+"img/game-monster.e348bc88.png"},ec11:function(t,e,n){"use strict";n("c241")},f740:function(t,e,n){"use strict";n("7f38")},f7b0:function(t,e,n){}});
//# sourceMappingURL=app.2cd4b25c.js.map