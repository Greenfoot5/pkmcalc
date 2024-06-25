var X=Object.defineProperty;var Y=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>Y(t,typeof e!="symbol"?e+"":e,n);import{n as x,r as w,j as D,f as b,i as z,k as O,l as Z,m as tt,p as et,q as nt,v as q,w as it,x as rt,y as st}from"./scheduler.C4COIYC2.js";const I=typeof window<"u";let L=I?()=>window.performance.now():()=>Date.now(),B=I?t=>requestAnimationFrame(t):x;const g=new Set;function M(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&B(M)}function F(t){let e;return g.size===0&&B(M),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let j=!1;function lt(){j=!0}function at(){j=!1}function ot(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(i>0&&e[n[i]].claim_order<=a?i+1:ot(1,i,_=>e[n[_]].claim_order,a))-1;r[l]=n[u]+1;const f=u+1;n[f]=l,i=Math.max(f,i)}const o=[],s=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<o.length&&s[l].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(s[l],u)}}function ft(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=W("style");return e.textContent="/* empty */",_t(U(t),e),e.sheet}function _t(t,e){return ft(t.head||t,e),e.sheet}function dt(t,e){if(j){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Dt(t,e,n){j&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function kt(){return P(" ")}function Rt(){return P("")}function Tt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t){return t.dataset.svelteH}function Ht(t){return t===""?null:+t}function mt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,r,i=!1){ht(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function pt(t,e,n,r){return G(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Ot(t,e,n){return pt(t,e,n,W)}function $t(t,e){return G(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>P(e),!0)}function qt(t){return $t(t," ")}function zt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e){t.value=e??""}function Lt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function yt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Mt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Ft(t,e){return new t(e)}const A=new Map;let C=0;function gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function xt(t,e){const n={stylesheet:ut(e),rules:{}};return A.set(t,n),n}function J(t,e,n,r,i,o,s,c=0){const l=16.666/r;let a=`{
`;for(let $=0;$<=1;$+=l){const p=e+(n-e)*o($);a+=$*100+`%{${s(p,1-p)}}
`}const u=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${gt(u)}_${c}`,_=U(t),{stylesheet:d,rules:m}=A.get(_)||xt(_,t);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${i}ms 1 both`,C+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),C-=i,C||vt())}function vt(){B(()=>{C||(A.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),A.clear())})}let v;function K(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function S(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function Ut(){y={r:0,c:[],p:y}}function Vt(){y.r||w(y.c),y=y.p}function wt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Wt(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Q={duration:0};function Gt(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,c,l=0;function a(){s&&T(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=z,tick:h=x,css:$}=i||Q;$&&(s=J(t,0,1,d,_,m,$,l++)),h(0,1);const p=L()+_,N=p+d;c&&c.abort(),o=!0,b(()=>S(t,!0,"start")),c=F(k=>{if(o){if(k>=N)return h(1,0),S(t,!0,"end"),a(),o=!1;if(k>=p){const H=m((k-p)/d);h(H,1-H)}}return o})}let f=!1;return{start(){f||(f=!0,T(t),D(i)?(i=i(r),K().then(u)):u())},invalidate(){f=!1},end(){o&&(a(),o=!1)}}}function Jt(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const c=y;c.r+=1;let l;function a(){const{delay:u=0,duration:f=300,easing:_=z,tick:d=x,css:m}=i||Q;m&&(s=J(t,1,0,f,u,_,m));const h=L()+u,$=h+f;b(()=>S(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),F(p=>{if(o){if(p>=$)return d(0,1),S(t,!1,"end"),--c.r||w(c.c),!1;if(p>=h){const N=_((p-h)/f);d(1-N,N)}}return o})}return D(i)?K().then(()=>{i=i(r),a()}):a(),{end(u){u&&"inert"in t&&(t.inert=l),u&&i.tick&&i.tick(1,0),o&&(s&&T(t,s),o=!1)}}}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function Nt(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),b(()=>{const o=t.$$.on_mount.map(it).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):w(o),t.$$.on_mount=[]}),i.forEach(b)}function Et(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(rt.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,r,i,o,s=null,c=[-1]){const l=nt;q(t);const a=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:O(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(f,_,...d)=>{const m=d.length?d[0]:_;return a.ctx&&i(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),u&&bt(t,f)),_}):[],a.update(),u=!0,w(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){lt();const f=mt(e.target);a.fragment&&a.fragment.l(f),f.forEach(V)}else a.fragment&&a.fragment.c();e.intro&&wt(t.$$.fragment),Nt(t,e.target,e.anchor),at(),Z()}q(l)}class Yt{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){Et(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const At="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(At);export{Gt as A,Jt as B,jt as C,It as D,Tt as E,Ht as F,Yt as S,mt as a,$t as b,Ot as c,V as d,W as e,qt as f,Dt as g,dt as h,Xt as i,zt as j,Pt as k,Bt as l,Kt as m,Mt as n,Qt as o,Nt as p,wt as q,Wt as r,kt as s,P as t,Et as u,Rt as v,Vt as w,Lt as x,Ut as y,Ft as z};
