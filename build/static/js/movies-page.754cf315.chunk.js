"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{131:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(523),c=n(271),o={},a=n(184);function u(e){var t=e.movies,n=(0,c.TH)();return(0,a.jsx)("ul",{className:o.list,children:t.map((function(e){return(0,a.jsx)("li",{className:o.item,children:(0,a.jsx)(r.rU,{className:o.movie,to:{pathname:"movie/".concat(e.id),state:{from:n}},children:e.title})})}))})}},790:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return m}});var a=n(152),u=n(791),i=n(271),s={},f=n(184);function l(e){var t=e.onSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),c=r[0],o=r[1];return(0,f.jsx)("header",{children:(0,f.jsxs)("form",{onSubmit:function(e){o(e.target.value.toLowerCase())},children:[(0,f.jsxs)("input",{className:s.input,children:["type='text' autocomplete='off' autoFocus placeholder=\"Search movie\" value=",c,"onChange=",function(e){e.preventDefault()," "!==c.trim()?t(c):alert("Write something")}]}),(0,f.jsx)("button",{className:s.btn,type:"submit",children:"Search"})]})})}var p=n(131),h=n(412);function m(){var e,t=(0,u.useState)(null),n=(0,a.Z)(t,2),r=n[0],c=n[1],s=(0,u.useState)(""),m=(0,a.Z)(s,2),b=m[0],g=m[1],v=(0,i.TH)(),d=(0,i.k6)(),y=null!==(e=new URLSearchParams(v.search).get("query"))&&void 0!==e?e:"";(0,u.useEffect)((function(){b&&(0,h.on)(b).then((function(e){e.results.lenght?c(e.results):alert("No results")})).catch((function(e){return alert("Something went wrong")}))}),[b]),(0,u.useEffect)((function(){""!==y&&g(y)}),[y]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{onSubmit:function(e){g(e),function(e){d.push(o(o({},v),{},{search:"query=".concat(e)}))}(e)}}),r&&(0,f.jsx)(p.Z,{movies:r})]})}},412:function(e,t,n){n.d(t,{Bt:function(){return m},DD:function(){return p},Tg:function(){return f},d5:function(){return h},on:function(){return l}});var r=n(861),c=n(757),o=n.n(c),a="f93b01b73c44b40ba53413c6e5601742",u="https://api.themoviedb.org/3/";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function e(){var t,n,r,c=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Nothing found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return i("".concat(u,"/trending/movie/day?api_key=").concat(a))}function l(e){return i("".concat(u,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function p(e){return i("".concat(u,"movie/").concat(e,"?api_key=").concat(a,"&language=en-US"))}function h(e){return i("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US"))}function m(e){return i("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=movies-page.754cf315.chunk.js.map