"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{131:function(e,n,t){t.d(n,{Z:function(){return o}});var c=t(523),i=t(271),r={},a=t(184);function o(e){var n=e.movies,t=(0,i.TH)();return(0,a.jsx)("ul",{className:r.list,children:n.map((function(e){return(0,a.jsx)("li",{className:r.item,children:(0,a.jsx)(c.rU,{className:r.movie,to:{pathname:"movie/".concat(e.id),state:{from:t}},children:e.title})})}))})}},206:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var c=t(152),i=t(791),r=t(412),a=t(131),o=t(184);function s(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],s=n[1];return(0,i.useEffect)((function(){(0,r.Tg)().then((function(e){s(e.results)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Trending Today"}),t&&(0,o.jsx)(a.Z,{movies:t})]})}},954:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var c=t(152),i=t(791),r=t(523),a=t(271),o=t(412),s=t(558),l={},u=t(184),d=(0,i.lazy)((function(){t.e(809).then(t.bind(t,123))})),h=(0,i.lazy)((function(){t.e(53).then(t.bind(t,115))}));function f(){var e,n,t=(0,a.k6)(),f=(0,a.TH)(),m=(0,a.UO)().movieId,v=(0,i.useState)(null),p=(0,c.Z)(v,2),x=p[0],j=p[1],g=(0,a.$B)(),k=g.url,b=g.path;(0,i.useEffect)((function(){(0,o.DD)(m).then((function(e){j(e)}))}),[m]);return(0,u.jsx)(u.Fragment,{children:x&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:l.wrapper,children:[(0,u.jsx)("button",{className:l.button,onCLick:function(){var e,n,c;t.push(null!==(e=null===f||void 0===f||null===(n=f.state)||void 0===n||null===(c=n.from)||void 0===c?void 0:c.location)&&void 0!==e?e:"/")},type:"button",children:"Go back"}),(0,u.jsxs)("div",{className:l.card,children:[(0,u.jsx)("img",{className:l.poster,src:"https://image.tmdb.org/t/p/w500/".concat(x.poster_path),alt:x.title}),(0,u.jsxs)("div",{className:l.info,children:[(0,u.jsx)("h2",{className:l.title,children:x.title}),(0,u.jsxs)("p",{children:["User score:",x.vote_average]}),(0,u.jsx)("h3",{className:l.title,children:"Overview"}),(0,u.jsx)("p",{children:x.overview}),(0,u.jsx)("h3",{className:l.title,children:"Genres"}),(0,u.jsx)("p",{children:x.genres.map((function(e){return e.name})).join(",")})]})]}),(0,u.jsxs)("div",{className:l.more,children:[(0,u.jsx)("h3",{className:l.title,children:"Additional information"}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(r.OL,{className:l.link,onCLick:function(){setTimeout((function(){window.scrollTo({top:document.documentElement.clientHeight,behavior:"smooth"})}),1200)},to:{pathname:"".concat(k,"/reviews"),state:{from:null!==(e=null===f||void 0===f||null===(n=f.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"}},children:"Reviews"})})})]})]}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(s.Z,{}),children:(0,u.jsx)(a.AW,{path:"".concat(b,"/cast"),children:(0,u.jsx)(h,{movieId:m})})}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(s.Z,{}),children:(0,u.jsx)(a.AW,{path:"".concat(b,"/reviews"),children:(0,u.jsx)(d,{movieId:m})})})]})})}},412:function(e,n,t){t.d(n,{Bt:function(){return m},DD:function(){return h},Tg:function(){return u},d5:function(){return f},on:function(){return d}});var c=t(861),i=t(757),r=t.n(i),a="f93b01b73c44b40ba53413c6e5601742",o="https://api.themoviedb.org/3/";function s(){return l.apply(this,arguments)}function l(){return l=(0,c.Z)(r().mark((function e(){var n,t,c,i=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Nothing found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(){return s("".concat(o,"/trending/movie/day?api_key=").concat(a))}function d(e){return s("".concat(o,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function h(e){return s("".concat(o,"movie/").concat(e,"?api_key=").concat(a,"&language=en-US"))}function f(e){return s("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US"))}function m(e){return s("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=home-page.4e39860e.chunk.js.map