"use strict";(self.webpackChunkcharacters=self.webpackChunkcharacters||[]).push([[999],{999:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(243).Z.create({baseURL:"https://rickandmortyapi.com/api/character",params:{}});function p(){return(p=(0,t.Z)(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get();case 2:if(e=n.sent,(r=e.data.results).length){n.next=6;break}throw new Error("Sorry, there are no charaters.");case 6:return n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var u,h,x,l,d,f,m,g={fetchCharaters:function(){return p.apply(this,arguments)}},b=g,Z=r(270),v=function(){},w=r(483),j=r(168),k=r(444),y=k.ZP.ul(u||(u=(0,j.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n"]))),P=r(689),C=r(87),S=k.ZP.li(h||(h=(0,j.Z)(["\n    width: 312px;\n    height: 308px;\n    border-radius: 4px;\n    overflow: hidden;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), \n    0px 3px 4px rgba(0, 0, 0, 0.12), \n    0px 2px 4px rgba(0, 0, 0, 0.14);\n    \n    transform: scale(1);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus{\n        transform: scale(1.03);\n    };\n"]))),z=(0,k.ZP)(C.rU)(x||(x=(0,j.Z)(["\n  text-decoration: none;\n  color: inherit;\n"]))),E=k.ZP.img(l||(l=(0,j.Z)(["\n  width: 100%;\n  border-radius: 4px;\n  height: 300px;\n  object-fit: cover;\n  margin-bottom: auto;\n"]))),H=k.ZP.div(d||(d=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0 0 0;\n"]))),U=k.ZP.h4(f||(f=(0,j.Z)(["\n  max-width: 158px; \n"]))),q=k.ZP.p(m||(m=(0,j.Z)(["\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: white;\n  background-color: orangered;\n  font-size: 12px; \n  font-weight: 600;\n"]))),L=r(184),R=function(n){var e=n.id,r=n.title,t=n.imagePath,a=n.vote,c=(0,P.TH)(),s=c.pathname,i=c.search,o="".concat(s).concat(i);return(0,L.jsx)(S,{children:(0,L.jsxs)(z,{to:"/".concat(e),state:{from:o},children:[(0,L.jsx)(E,{src:t,alt:r}),(0,L.jsxs)(H,{children:[(0,L.jsx)(U,{children:r}),(0,L.jsx)(q,{children:a})]})]})})},T=function(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),r=e[0],c=e[1],o=(0,i.useState)(!1),p=(0,a.Z)(o,2),u=p[0],h=p[1];return(0,i.useEffect)((function(){function n(){return n=(0,t.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.fetchCharaters();case 3:e=n.sent,console.log(e),c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case 15:case"end":return n.stop()}}),n,null,[[0,8,11,14]])}))),n.apply(this,arguments)}h(!0),function(){n.apply(this,arguments)}()}),[]),(0,L.jsxs)("main",{children:[(0,L.jsx)(Z.q,{children:(0,L.jsx)("title",{children:"Home"})}),(0,L.jsx)(v,{}),u&&(0,L.jsx)(w.a,{}),(0,L.jsx)(y,{children:r.map((function(n){var e=n.id,r=n.name,t=n.species;return(0,L.jsx)(R,{id:e,name:r,species:t},e)}))})]})}}}]);
//# sourceMappingURL=999.4fa1b4c6.chunk.js.map