import{S as w,i as y,s as z,e as E,t as v,c as d,a as b,g as P,d as m,f as n,E as R,h as N,k as S,l as F,n as q,F as H}from"./chunks/vendor-e56b8d6e.js";function h(r){let f,t=r[1].frame+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&N(a,t)},d(l){l&&m(f)}}}function j(r){let f,t=r[1].stack+"",a;return{c(){f=E("pre"),a=v(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&N(a,t)},d(l){l&&m(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,u,p,i=r[1].frame&&h(r),_=r[1].stack&&j(r);return{c(){f=E("h1"),t=v(r[0]),a=S(),l=E("pre"),c=v(s),k=S(),i&&i.c(),u=S(),_&&_.c(),p=F()},l(e){f=d(e,"H1",{});var o=b(f);t=P(o,r[0]),o.forEach(m),a=q(e),l=d(e,"PRE",{});var C=b(l);c=P(C,s),C.forEach(m),k=q(e),i&&i.l(e),u=q(e),_&&_.l(e),p=F()},m(e,o){n(e,f,o),R(f,t),n(e,a,o),n(e,l,o),R(l,c),n(e,k,o),i&&i.m(e,o),n(e,u,o),_&&_.m(e,o),n(e,p,o)},p(e,[o]){o&1&&N(t,e[0]),o&2&&s!==(s=e[1].message+"")&&N(c,s),e[1].frame?i?i.p(e,o):(i=h(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?_?_.p(e,o):(_=j(e),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null)},i:H,o:H,d(e){e&&m(f),e&&m(a),e&&m(l),e&&m(k),i&&i.d(e),e&&m(u),_&&_.d(e),e&&m(p)}}}function G({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class I extends w{constructor(f){super();y(this,f,B,A,z,{status:0,error:1})}}export{I as default,G as load};
