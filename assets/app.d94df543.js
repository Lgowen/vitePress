import{i as I,c as at,e as it,a as lt,b as ct,d as Ne,f as ut,g as Re,h as He,j as dt,k as Be,l as ft,m as pt,n as ht,s as _t,o as h,p as Ie,r as Me,q as K,u as vt,w as mt,v as b,x as H,y as B,z as D,A as p,B as f,C as A,D as M,E as d,F as u,G as k,H as ne,_ as w,I as Oe,J as E,K as De,L as z,M as se,N as g,O as x,P as U,Q as gt,R as Ue,S as Z,T as bt,U as T}from"./plugin-vue_export-helper.fc7452c3.js";const kt="modulepreload",ce={},yt="/vitePress/",je=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${yt}${s}`,s in ce)return;ce[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":kt,o||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),o)return new Promise((i,l)=>{r.addEventListener("load",i),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ee;const ue=typeof window!="undefined"&&window.trustedTypes;if(ue)try{ee=ue.createPolicy("vue",{createHTML:e=>e})}catch{}const qe=ee?e=>ee.createHTML(e):e=>e,xt="http://www.w3.org/2000/svg",wt="http://www.w3.org/1998/Math/MathML",P=typeof document!="undefined"?document:null,de=P&&P.createElement("template"),Lt={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?P.createElementNS(xt,e):t==="mathml"?P.createElementNS(wt,e):n?P.createElement(e,{is:n}):P.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>P.createTextNode(e),createComment:e=>P.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>P.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,a){const r=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{de.innerHTML=qe(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const i=de.content;if(s==="svg"||s==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$t=Symbol("_vtc");function St(e,t,n){const s=e[$t];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const fe=Symbol("_vod"),Ct=Symbol("_vsh"),Et=Symbol(""),At=/(^|;)\s*display\s*:/;function Pt(e,t,n){const s=e.style,o=I(n);let a=!1;if(n&&!o){if(t)if(I(t))for(const r of t.split(";")){const i=r.slice(0,r.indexOf(":")).trim();n[i]==null&&q(s,i,"")}else for(const r in t)n[r]==null&&q(s,r,"");for(const r in n)r==="display"&&(a=!0),q(s,r,n[r])}else if(o){if(t!==n){const r=s[Et];r&&(n+=";"+r),s.cssText=n,a=At.test(n)}}else t&&e.removeAttribute("style");fe in e&&(e[fe]=a?s.display:"",e[Ct]&&(s.display="none"))}const pe=/\s*!important$/;function q(e,t,n){if(Re(n))n.forEach(s=>q(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Tt(e,t);pe.test(n)?e.setProperty(He(s),n.replace(pe,""),"important"):e[s]=n}}const he=["Webkit","Moz","ms"],X={};function Tt(e,t){const n=X[t];if(n)return n;let s=Ne(t);if(s!=="filter"&&s in e)return X[t]=s;s=dt(s);for(let o=0;o<he.length;o++){const a=he[o]+s;if(a in e)return X[t]=a}return t}const _e="http://www.w3.org/1999/xlink";function ve(e,t,n,s,o,a=pt(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_e,t.slice(6,t.length)):e.setAttributeNS(_e,t,n):n==null||a&&!Be(n)?e.removeAttribute(t):e.setAttribute(t,a?"":ft(n)?String(n):n)}function me(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?qe(n):n);return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const i=a==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Be(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Nt(e,t,n,s){e.addEventListener(t,n,s)}function Rt(e,t,n,s){e.removeEventListener(t,n,s)}const ge=Symbol("_vei");function Ht(e,t,n,s,o=null){const a=e[ge]||(e[ge]={}),r=a[t];if(s&&r)r.value=s;else{const[i,l]=Bt(t);if(s){const c=a[t]=Ot(s,o);Nt(e,i,c,l)}else r&&(Rt(e,i,r,l),a[t]=void 0)}}const be=/(?:Once|Passive|Capture)$/;function Bt(e){let t;if(be.test(e)){t={};let s;for(;s=e.match(be);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):He(e.slice(2)),t]}let J=0;const It=Promise.resolve(),Mt=()=>J||(It.then(()=>J=0),J=Date.now());function Ot(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ht(Dt(s,n.value),t,5,[s])};return n.value=e,n.attached=Mt(),n}function Dt(e,t){if(Re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const ke=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ut=(e,t,n,s,o,a)=>{const r=o==="svg";t==="class"?St(e,s,r):t==="style"?Pt(e,n,s):lt(t)?ct(t)||Ht(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jt(e,t,s,r))?(me(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ve(e,t,s,r,a,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!I(s))?me(e,Ne(t),s,a,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ve(e,t,s,r))};function jt(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ke(t)&&ut(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ke(t)&&I(n)?!1:t in e}const qt=it({patchProp:Ut},Lt);let Y,ye=!1;function Ft(){return Y=ye?Y:at(qt),ye=!0,Y}const Wt=(...e)=>{const t=Ft().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Gt(s);if(o)return n(o,!0,zt(o))},t};function zt(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gt(e){return I(e)?document.querySelector(e):e}var Vt='{"lang":"en-US","title":"\u524D\u7AEF\u5C0F\u6587","description":"leetcode share.","base":"/vitePress/","head":[],"themeConfig":{"repo":"Lgowen","nav":[{"text":"\u524D\u7AEF\u57FA\u7840","link":"leetcode/day1"},{"text":"\u65E5\u5E38\u5B66\u4E60","link":"study/day1"},{"text":"vue","link":"vue/v-model"},{"text":"webpack","link":"webpack/demo"},{"text":"hot100","link":"hot100/day1"}],"sidebar":{"/leetcode/":[{"text":"leetcode","children":[{"text":" \u6808\u4E0E\u961F\u5217 ","link":"/leetcode/day1"},{"text":" \u94FE\u8868 ","link":"/leetcode/day2"},{"text":" \u5B57\u7B26\u4E32 ","link":"/leetcode/day3"},{"text":" \u67E5\u627E\u7B97\u6CD5 ","link":"/leetcode/day4"},{"text":" \u67E5\u627E\u7B97\u6CD5 ","link":"/leetcode/day5"},{"text":" \u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 ","link":"/leetcode/day6"},{"text":" \u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 ","link":"/leetcode/day7"},{"text":" \u52A8\u6001\u89C4\u5212 ","link":"/leetcode/day8"},{"text":" \u52A8\u6001\u89C4\u5212 ","link":"/leetcode/day9"},{"text":" \u52A8\u6001\u89C4\u5212 ","link":"/leetcode/day10"},{"text":" \u53CC\u6307\u9488 ","link":"/leetcode/day11"},{"text":" \u53CC\u6307\u9488 ","link":"/leetcode/day12"},{"text":" \u53CC\u6307\u9488 ","link":"/leetcode/day13"},{"text":" \u641C\u7D22\u4E0E\u56DE\u6EAF\u7B97\u6CD5 ","link":"/leetcode/day14"},{"text":" \u54C8\u5E0C ","link":"/leetcode/day15"},{"text":" \u6ED1\u52A8\u7A97\u53E3 ","link":"/leetcode/day16"},{"text":" \u5B50\u4E32 ","link":"/leetcode/day17"},{"text":" \u666E\u901A\u6570\u7EC4 ","link":"/leetcode/day18"},{"text":" \u56DE\u6EAF ","link":"/leetcode/day19"},{"text":" \u8D2A\u5FC3\u7B97\u6CD5 ","link":"/leetcode/day20"},{"text":" \u52A8\u6001\u89C4\u5212 ","link":"/leetcode/day21"},{"text":" \u591A\u7EF4\u52A8\u6001\u89C4\u5212 ","link":"/leetcode/day22"}]}],"/study/":[{"text":"study","children":[{"text":" css\u5B9E\u73B0\u534A\u5706\u5F27\u5F62\u8FDB\u5EA6\u6761 ","link":"/study/arc-progress-bar"},{"text":" \u5723\u676F\u5E03\u5C40\u548C\u53CC\u98DE\u7FFC\u5E03\u5C40 ","link":"/study/css"},{"text":" \u968F\u624B\u8BB0 ","link":"/study/day1"},{"text":" js\u57FA\u7840 ","link":"/study/day2"},{"text":" \u6D4F\u89C8\u5668\u6E32\u67D3 ","link":"/study/day3"},{"text":" \u5B66\u4E60\u4E4B\u8DEF ","link":"/study/meeting"},{"text":" promise\u5408\u96C6 ","link":"/study/promise"},{"text":" css\u5B9E\u73B0\u591A\u884C\u6587\u672C\u5C55\u5F00\u6536\u8D77 ","link":"/study/text-expansion"}]}],"/vue/":[{"text":"vue","children":[{"text":" \u54CD\u5E94\u5F0F\u6570\u636E ","link":"/vue/proxy"},{"text":" \u6E32\u67D3\u5668 ","link":"/vue/renderer"},{"text":" vue\u5B66\u4E60 ","link":"/vue/v-model"}]}],"webpack":[{"text":"webpack","children":[{"text":" \u53D1\u5C55\u53F2 ","link":"/webpack/demo"}]}],"hot100":[{"text":"hot100","children":[{"text":" \u5B57\u7B26\u4E32\u89E3\u7801 ","link":"/hot100/day1"},{"text":" \u5C9B\u5C7F\u6570\u91CF ","link":"/hot100/day10"},{"text":" \u6700\u5927\u5B50\u6570\u7EC4 ","link":"/hot100/day11"},{"text":" \u5355\u8BCD\u62C6\u5206 ","link":"/hot100/day12"},{"text":" \u6700\u957F\u8FDE\u7EED\u5E8F\u5217 ","link":"/hot100/day13"},{"text":" \u5B50\u96C6 ","link":"/hot100/day14"},{"text":" \u6700\u5C0F\u8DEF\u5F84\u548C ","link":"/hot100/day15"},{"text":" \u4E0D\u540C\u8DEF\u5F84 ","link":"/hot100/day16"},{"text":" \u5408\u5E76\u533A\u95F4 ","link":"/hot100/day17"},{"text":" \u8DF3\u8DC3\u6E38\u620F ","link":"/hot100/day18"},{"text":" \u7EC4\u5408\u603B\u548C ","link":"/hot100/day19"},{"text":" \u56DE\u6587 ","link":"/hot100/day2"},{"text":" \u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E ","link":"/hot100/day20"},{"text":" \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4 ","link":"/hot100/day21"},{"text":" \u4E0B\u4E00\u4E2A\u6392\u5217 ","link":"/hot100/day22"},{"text":" \u62EC\u53F7 ","link":"/hot100/day23"},{"text":" \u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9 ","link":"/hot100/day24"},{"text":" \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32 ","link":"/hot100/day25"},{"text":" \u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20 ","link":"/hot100/day3"},{"text":" \u6700\u5927\u6B63\u65B9\u5F62 ","link":"/hot100/day4"},{"text":" \u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 ","link":"/hot100/day5"},{"text":" \u5BFB\u627E\u91CD\u590D\u6570 ","link":"/hot100/day6"},{"text":" \u548C\u4E3A K \u7684\u5B50\u6570\u7EC4 ","link":"/hot100/day7"},{"text":" \u5B8C\u5168\u5E73\u65B9\u6570 ","link":"/hot100/day8"},{"text":" \u94FE\u8868 ","link":"/hot100/day9"}]}]}},"locales":{},"langs":{},"scrollOffset":90}';const Fe=/^https?:/i,C=typeof window!="undefined";function Kt(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function xe(e,t){const n=Kt(t,Object.keys(e));return n?e[n]:void 0}function Xt(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,o)=>(s[o]={label:t[o].label,lang:n[o].lang},s),{}):{}}function Jt(e,t){t=Yt(e,t);const n=xe(e.locales||{},t),s=xe(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:Xt(e)})}function Yt(e,t){if(!C)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const We=Symbol(),G=_t(Qt(Vt));function Qt(e){return JSON.parse(e)}function Zt(e){const t=h(()=>Jt(G.value,e.path));return{site:t,theme:h(()=>t.value.themeConfig),page:h(()=>e.data),frontmatter:h(()=>e.data.frontmatter),lang:h(()=>t.value.lang),localePath:h(()=>{const{langs:n,lang:s}=t.value,o=Object.keys(n).find(a=>n[a].lang===s);return O(o||"/")}),title:h(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:h(()=>e.data.description||t.value.description)}}function $(){const e=Ie(We);if(!e)throw new Error("vitepress data not properly injected in app");return e}function en(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function O(e){return Fe.test(e)?e:en(G.value.base,e)}function ze(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),C){const n="/vitePress/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Ge=Symbol(),we="http://a.com",tn=()=>({path:"/",component:null,data:{frontmatter:{}}});function nn(e,t){const n=Me(tn());function s(r=C?location.href:"/"){const i=new URL(r,we);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",r=i.pathname+i.search+i.hash),C&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",r)),a(r)}let o=null;async function a(r,i=0){const l=new URL(r,we),c=o=l.pathname;try{let _=e(c);if("then"in _&&typeof _.then=="function"&&(_=await _),o===c){o=null;const{default:v,__pageData:L}=_;if(!v)throw new Error(`Invalid route component: ${v}`);n.path=c,n.component=K(v),n.data=K(JSON.parse(L)),C&&vt(()=>{if(l.hash&&!i){let y=null;try{y=document.querySelector(decodeURIComponent(l.hash))}catch(S){console.warn(S)}if(y){Le(y,l.hash);return}}window.scrollTo(0,i)})}}catch(_){_.message.match(/fetch/)||console.error(_),o===c&&(o=null,n.path=c,n.component=t?K(t):null)}}return C&&(window.addEventListener("click",r=>{const i=r.target.closest("a");if(i){const{href:l,protocol:c,hostname:_,pathname:v,hash:L,target:y}=i,S=window.location,R=v.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&y!=="_blank"&&c===S.protocol&&_===S.hostname&&!(R&&R[0]!==".html")&&(r.preventDefault(),v===S.pathname?L&&L!==S.hash&&(history.pushState(null,"",L),window.dispatchEvent(new Event("hashchange")),Le(i,L,i.classList.contains("header-anchor"))):s(l))}},{capture:!0}),window.addEventListener("popstate",r=>{a(location.href,r.state&&r.state.scrollPosition||0)}),window.addEventListener("hashchange",r=>{r.preventDefault()})),{route:n,go:s}}function sn(){const e=Ie(Ge);if(!e)throw new Error("useRouter() is called without provider.");return e}function N(){return sn().route}function Le(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(s){let o=G.value.scrollOffset;typeof o=="string"&&(o=document.querySelector(o).getBoundingClientRect().bottom+24);const a=parseInt(window.getComputedStyle(s).paddingTop,10),r=window.scrollY+s.getBoundingClientRect().top-o+a;!n||Math.abs(r-window.scrollY)>window.innerHeight?window.scrollTo(0,r):window.scrollTo({left:0,top:r,behavior:"smooth"})}}function on(e,t){let n=[],s=!0;const o=a=>{if(s){s=!1;return}const r=[],i=Math.min(n.length,a.length);for(let l=0;l<i;l++){let c=n[l];const[_,v,L=""]=a[l];if(c.tagName.toLocaleLowerCase()===_){for(const y in v)c.getAttribute(y)!==v[y]&&c.setAttribute(y,v[y]);for(let y=0;y<c.attributes.length;y++){const S=c.attributes[y].name;S in v||c.removeAttribute(S)}c.innerHTML!==L&&(c.innerHTML=L)}else document.head.removeChild(c),c=$e(a[l]),document.head.append(c);r.push(c)}n.slice(i).forEach(l=>document.head.removeChild(l)),a.slice(i).forEach(l=>{const c=$e(l);document.head.appendChild(c),r.push(c)}),n=r};mt(()=>{const a=e.data,r=t.value,i=a&&a.title,l=a&&a.description,c=a&&a.frontmatter.head;document.title=(i?i+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",l||r.description),o([...c?an(c):[]])})}function $e([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function rn(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function an(e){return e.filter(t=>!rn(t))}const ln=b({name:"VitePressContent",setup(){const e=N();return()=>H("div",{style:{position:"relative"}},[e.component?H(e.component):null])}});const cn={class:"block"};b({__name:"Debug",setup(e){const t=$(),n=B(null),s=B(!1),o=Me(t);return D(s,a=>{a||(n.value.scrollTop=0)}),(a,r)=>(d(),p("div",{class:M(["debug",{open:s.value}]),ref_key:"el",ref:n,onClick:r[0]||(r[0]=i=>s.value=!s.value)},[r[1]||(r[1]=f("p",{class:"title"},"Debug",-1)),f("pre",cn,A(o),1)],2))}});const un=/#.*$/,dn=/(index)?\.(md|html)$/,F=/\/$/,fn=/^[a-z]+:/i;function oe(e){return Array.isArray(e)}function re(e){return fn.test(e)}function pn(e,t){if(t===void 0)return!1;const n=Se(`/${e.data.relativePath}`),s=Se(t);return n===s}function Se(e){return decodeURI(e).replace(un,"").replace(dn,"")}function hn(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function te(e){return/^\//.test(e)?e:`/${e}`}function Ve(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function _n(e){return e===!1||e==="auto"||oe(e)}function vn(e){return e.children!==void 0}function mn(e){return oe(e)?e.length===0:!e}function ae(e,t){if(_n(e))return e;t=te(t);for(const n in e)if(t.startsWith(te(n)))return e[n];return"auto"}function Ke(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Ve(n.link)}),vn(n)&&(t=[...t,...Ke(n.children)]),t),[])}const gn=["href","aria-label"],bn=["src"],kn=b({__name:"NavBarTitle",setup(e){const{site:t,theme:n,localePath:s}=$();return(o,a)=>(d(),p("a",{class:"nav-bar-title",href:u(s),"aria-label":`${u(t).title}, back to home`},[u(n).logo?(d(),p("img",{key:0,class:"logo",src:u(O)(u(n).logo),alt:"Logo"},null,8,bn)):k("",!0),ne(" "+A(u(t).title),1)],8,gn))}});var yn=w(kn,[["__scopeId","data-v-cc01ef16"]]);function xn(){const{site:e,localePath:t,theme:n}=$();return h(()=>{const s=e.value.langs,o=Object.keys(s);if(o.length<2)return null;const r=N().path.replace(t.value,""),i=o.map(c=>({text:s[c].label,link:`${c}${r}`}));return{text:n.value.selectText||"Languages",items:i}})}const wn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function Ln(){const{site:e}=$();return h(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=$n(n);return{text:Sn(s,t.repoLabel),link:s}})}function $n(e){return Fe.test(e)?e:`https://github.com/${e}`}function Sn(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=wn.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function Xe(e){const t=N(),n=re(e.value.link);return{props:h(()=>{const o=Ce(`/${t.data.relativePath}`);let a=!1;if(e.value.activeMatch)a=new RegExp(e.value.activeMatch).test(o);else{const r=Ce(e.value.link);a=r==="/"?r===o:o.startsWith(r)}return{class:{active:a,isExternal:n},href:n?e.value.link:O(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function Ce(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Cn={},En={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"};function An(e,t){return d(),p("svg",En,t[0]||(t[0]=[f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1)]))}var ie=w(Cn,[["render",An]]);const Pn={class:"nav-link"},Tn=b({__name:"NavLink",props:{item:{}},setup(e){const n=Oe(e),{props:s,isExternal:o}=Xe(n.item);return(a,r)=>(d(),p("div",Pn,[f("a",De({class:"item"},u(s)),[ne(A(a.item.text)+" ",1),u(o)?(d(),E(ie,{key:0})):k("",!0)],16)]))}});var Ee=w(Tn,[["__scopeId","data-v-b8818f8c"]]);const Nn={class:"nav-dropdown-link-item"},Rn={class:"text"},Hn={class:"icon"},Bn=b({__name:"NavDropdownLinkItem",props:{item:{}},setup(e){const n=Oe(e),{props:s,isExternal:o}=Xe(n.item);return(a,r)=>(d(),p("div",Nn,[f("a",De({class:"item"},u(s)),[r[0]||(r[0]=f("span",{class:"arrow"},null,-1)),f("span",Rn,A(a.item.text),1),f("span",Hn,[u(o)?(d(),E(ie,{key:0})):k("",!0)])],16)]))}});var In=w(Bn,[["__scopeId","data-v-bbc27490"]]);const Mn=["aria-label"],On={class:"button-text"},Dn={class:"dialog"},Un=b({__name:"NavDropdownLink",props:{item:{}},setup(e){const t=N(),n=B(!1);D(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(d(),p("div",{class:M(["nav-dropdown-link",{open:n.value}])},[f("button",{class:"button","aria-label":o.item.ariaLabel,onClick:s},[f("span",On,A(o.item.text),1),f("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,Mn),f("ul",Dn,[(d(!0),p(z,null,se(o.item.items,r=>(d(),p("li",{key:r.text,class:"dialog-item"},[g(In,{item:r},null,8,["item"])]))),128))])],2))}});var Ae=w(Un,[["__scopeId","data-v-56bf3a3f"]]);const jn={key:0,class:"nav-links"},qn={key:1,class:"item"},Fn={key:2,class:"item"},Wn=b({__name:"NavLinks",setup(e){const{theme:t}=$(),n=xn(),s=Ln(),o=h(()=>t.value.nav||s.value||n.value);return(a,r)=>o.value?(d(),p("nav",jn,[u(t).nav?(d(!0),p(z,{key:0},se(u(t).nav,i=>(d(),p("div",{key:i.text,class:"item"},[i.items?(d(),E(Ae,{key:0,item:i},null,8,["item"])):(d(),E(Ee,{key:1,item:i},null,8,["item"]))]))),128)):k("",!0),u(n)?(d(),p("div",qn,[g(Ae,{item:u(n)},null,8,["item"])])):k("",!0),u(s)?(d(),p("div",Fn,[g(Ee,{item:u(s)},null,8,["item"])])):k("",!0)])):k("",!0)}});var Je=w(Wn,[["__scopeId","data-v-eab3edfe"]]);const zn={emits:["toggle"]};function Gn(e,t,n,s,o,a){return d(),p("div",{class:"sidebar-button",onClick:t[0]||(t[0]=r=>e.$emit("toggle"))},t[1]||(t[1]=[f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1)]))}var Vn=w(zn,[["render",Gn]]);const Kn={class:"nav-bar"},Xn={class:"nav"},Jn=b({__name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(d(),p("header",Kn,[g(Vn,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),g(yn),n[1]||(n[1]=f("div",{class:"flex-grow"},null,-1)),f("div",Xn,[g(Je)]),x(t.$slots,"search",{},void 0,!0)]))}});var Yn=w(Jn,[["__scopeId","data-v-675d8756"]]);function Qn(){let e=null,t=null;const n=ss(s,300);function s(){const r=Zn(),i=es(r);for(let l=0;l<i.length;l++){const c=i[l],_=i[l+1],[v,L]=ns(l,c,_);if(v){history.replaceState(null,document.title,L||" "),o(L);return}}}function o(r){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${r}"]`),!t)return;t.classList.add("active");const i=t.closest(".sidebar-links > ul > li");i&&i!==t.parentElement?(e=i.querySelector("a"),e&&e.classList.add("active")):e=null}function a(r){r&&r.classList.remove("active")}U(()=>{s(),window.addEventListener("scroll",n)}),gt(()=>{o(decodeURIComponent(location.hash))}),Ue(()=>{window.removeEventListener("scroll",n)})}function Zn(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function es(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function ts(){return document.querySelector(".nav-bar").offsetHeight}function Pe(e){const t=ts();return e.parentElement.offsetTop-t-15}function ns(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Pe(t)?[!1,null]:!n||s<Pe(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function ss(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function os(){const e=N(),{site:t}=$();return Qn(),h(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Te(n,o);const a=ae(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?Te(n,o):a})}function Te(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:a,slug:r})=>{if(o-1>t)return;const i={text:a,link:`#${r}`};o===2?(s=i,n.push(i)):s&&(s.children||(s.children=[])).push(i)}),n}const Ye=e=>{const t=N(),{site:n,frontmatter:s}=$(),o=e.depth||1,a=s.value.sidebarDepth||1/0,r=t.data.headers,i=e.item.text,l=rs(n.value.base,e.item.link),c=e.item.children,_=pn(t,e.item.link),v=o<a?Qe(_,c,r,o+1):null;return H("li",{class:"sidebar-link"},[H(l?"a":"p",{class:{"sidebar-link-item":!0,active:_},href:l},i),v])};function rs(e,t){return t===void 0||t.startsWith("#")?t:hn(e,t)}function Qe(e,t,n,s=1){return t&&t.length>0?H("ul",{class:"sidebar-links"},t.map(o=>H(Ye,{item:o,depth:s}))):e&&n?Qe(!1,as(n),void 0,s):null}function as(e){return Ze(is(e))}function is(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Ze(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Ze(t.children):void 0}))}const ls={key:0,class:"sidebar-links"},cs=b({__name:"SideBarLinks",setup(e){const t=os();return(n,s)=>u(t).length>0?(d(),p("ul",ls,[(d(!0),p(z,null,se(u(t),o=>(d(),E(u(Ye),{item:o},null,8,["item"]))),256))])):k("",!0)}});const us=b({__name:"SideBar",props:{open:{type:Boolean}},setup(e){return(t,n)=>(d(),p("aside",{class:M(["sidebar",{open:t.open}])},[g(Je,{class:"nav"}),x(t.$slots,"sidebar-top",{},void 0,!0),g(cs),x(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var ds=w(us,[["__scopeId","data-v-83e92a68"]]);const fs=/bitbucket.org/;function ps(){const{page:e,theme:t,frontmatter:n}=$(),s=h(()=>{const{repo:a,docsDir:r="",docsBranch:i="master",docsRepo:l=a,editLinks:c}=t.value,_=n.value.editLink!=null?n.value.editLink:c,{relativePath:v}=e.value;return!_||!v||!a?null:hs(a,l,r,i,v)}),o=h(()=>t.value.editLinkText||"Edit this page");return{url:s,text:o}}function hs(e,t,n,s,o){return fs.test(e)?vs(e,t,n,s,o):_s(e,t,n,s,o)}function _s(e,t,n,s,o){return(re(t)?t:`https://github.com/${t}`).replace(F,"")+`/edit/${s}/`+(n?n.replace(F,"")+"/":"")+o}function vs(e,t,n,s,o){return(re(t)?t:e).replace(F,"")+`/src/${s}/`+(n?n.replace(F,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const ms={class:"edit-link"},gs=["href"],bs=b({__name:"EditLink",setup(e){const{url:t,text:n}=ps();return(s,o)=>(d(),p("div",ms,[u(t)?(d(),p("a",{key:0,class:"link",href:u(t),target:"_blank",rel:"noopener noreferrer"},[ne(A(u(n))+" ",1),g(ie,{class:"icon"})],8,gs)):k("",!0)]))}});var ks=w(bs,[["__scopeId","data-v-1ed99556"]]);const ys={key:0,class:"last-updated"},xs={class:"prefix"},ws={class:"datetime"},Ls=b({__name:"LastUpdated",setup(e){const{theme:t,page:n}=$(),s=h(()=>{const r=t.value.lastUpdated;return r!==void 0&&r!==!1}),o=h(()=>{const r=t.value.lastUpdated;return r===!0?"Last Updated":r}),a=B("");return U(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(r,i)=>s.value?(d(),p("p",ys,[f("span",xs,A(o.value)+":",1),f("span",ws,A(a.value),1)])):k("",!0)}});var $s=w(Ls,[["__scopeId","data-v-5797b537"]]);const Ss={class:"page-footer"},Cs={class:"edit"},Es={class:"updated"},As=b({__name:"PageFooter",setup(e){return(t,n)=>(d(),p("footer",Ss,[f("div",Cs,[g(ks)]),f("div",Es,[g($s)])]))}});var Ps=w(As,[["__scopeId","data-v-fb8d84c6"]]);function Ts(){const{page:e,theme:t}=$(),n=h(()=>Ve(te(e.value.relativePath))),s=h(()=>{const l=ae(t.value.sidebar,n.value);return oe(l)?Ke(l):[]}),o=h(()=>s.value.findIndex(l=>l.link===n.value)),a=h(()=>{if(t.value.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),r=h(()=>{if(t.value.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),i=h(()=>!!a.value||!!r.value);return{next:a,prev:r,hasLinks:i}}const Ns={},Rs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function Hs(e,t){return d(),p("svg",Rs,t[0]||(t[0]=[f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1)]))}var Bs=w(Ns,[["render",Hs]]);const Is={},Ms={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function Os(e,t){return d(),p("svg",Ms,t[0]||(t[0]=[f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1)]))}var Ds=w(Is,[["render",Os]]);const Us={key:0,class:"next-and-prev-link"},js={class:"container"},qs={class:"prev"},Fs=["href"],Ws={class:"text"},zs={class:"next"},Gs=["href"],Vs={class:"text"},Ks=b({__name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=Ts();return(o,a)=>u(t)?(d(),p("div",Us,[f("div",js,[f("div",qs,[u(n)?(d(),p("a",{key:0,class:"link",href:u(O)(u(n).link)},[g(Bs,{class:"icon icon-prev"}),f("span",Ws,A(u(n).text),1)],8,Fs)):k("",!0)]),f("div",zs,[u(s)?(d(),p("a",{key:0,class:"link",href:u(O)(u(s).link)},[f("span",Vs,A(u(s).text),1),g(Ds,{class:"icon icon-next"})],8,Gs)):k("",!0)])])])):k("",!0)}});var Xs=w(Ks,[["__scopeId","data-v-38ede35f"]]);const Js={class:"page"},Ys={class:"container"},Qs=b({__name:"Page",setup(e){return(t,n)=>{const s=Z("Content");return d(),p("main",Js,[f("div",Ys,[x(t.$slots,"top",{},void 0,!0),g(s,{class:"content"}),g(Ps),g(Xs),x(t.$slots,"bottom",{},void 0,!0)])])}}});var Zs=w(Qs,[["__scopeId","data-v-7eddb2c4"]]);const eo={key:0,id:"ads-container"},to=b({__name:"Layout",setup(e){const t=bt(()=>je(()=>import("./Home.92df640f.js"),["assets/Home.92df640f.js","assets/plugin-vue_export-helper.fc7452c3.js"])),n=()=>null,s=n,o=n,a=n,r=N(),{site:i,page:l,theme:c,frontmatter:_}=$(),v=h(()=>!!_.value.customLayout),L=h(()=>!!_.value.home),y=h(()=>Object.keys(i.value.langs).length>1),S=h(()=>{const m=c.value;return _.value.navbar===!1||m.navbar===!1?!1:i.value.title||m.logo||m.repo||m.nav}),R=B(!1),tt=h(()=>_.value.home||_.value.sidebar===!1?!1:!mn(ae(c.value.sidebar,r.data.relativePath))),V=m=>{R.value=typeof m=="boolean"?m:!R.value},nt=V.bind(null,!1);D(r,nt);const st=h(()=>[{"no-navbar":!S.value,"sidebar-open":R.value,"no-sidebar":!tt.value}]);return(m,le)=>{const ot=Z("Content"),rt=Z("Debug");return d(),p(z,null,[f("div",{class:M(["theme",st.value])},[S.value?(d(),E(Yn,{key:0,onToggle:V},{search:T(()=>[x(m.$slots,"navbar-search",{},()=>[u(c).algolia?(d(),E(u(a),{key:0,options:u(c).algolia,multilang:y.value},null,8,["options","multilang"])):k("",!0)])]),_:3})):k("",!0),g(ds,{open:R.value},{"sidebar-top":T(()=>[x(m.$slots,"sidebar-top")]),"sidebar-bottom":T(()=>[x(m.$slots,"sidebar-bottom")]),_:3},8,["open"]),f("div",{class:"sidebar-mask",onClick:le[0]||(le[0]=vo=>V(!1))}),v.value?(d(),E(ot,{key:1})):L.value?x(m.$slots,"home",{key:2},()=>[g(u(t),null,{hero:T(()=>[x(m.$slots,"home-hero")]),features:T(()=>[x(m.$slots,"home-features")]),footer:T(()=>[x(m.$slots,"home-footer")]),_:3})]):(d(),E(Zs,{key:3},{top:T(()=>[x(m.$slots,"page-top-ads",{},()=>[u(c).carbonAds&&u(c).carbonAds.carbon?(d(),p("div",eo,[(d(),E(u(s),{key:"carbon"+u(l).relativePath,code:u(c).carbonAds.carbon,placement:u(c).carbonAds.placement},null,8,["code","placement"]))])):k("",!0)]),x(m.$slots,"page-top")]),bottom:T(()=>[x(m.$slots,"page-bottom"),x(m.$slots,"page-bottom-ads",{},()=>[u(c).carbonAds&&u(c).carbonAds.custom?(d(),E(u(o),{key:"custom"+u(l).relativePath,code:u(c).carbonAds.custom,placement:u(c).carbonAds.placement},null,8,["code","placement"])):k("",!0)])]),_:3}))],2),g(rt)],64)}}}),no={class:"theme"},so=["href"],oo=b({__name:"NotFound",setup(e){const{site:t}=$(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(o,a)=>(d(),p("div",no,[a[0]||(a[0]=f("h1",null,"404",-1)),f("blockquote",null,A(s()),1),f("a",{href:u(t).base,"aria-label":"go to home"},"Take me home.",8,so)]))}}),W={Layout:to,NotFound:oo},Q=new Set,et=()=>document.createElement("link"),ro=e=>{const t=et();t.rel="prefetch",t.href=e,document.head.appendChild(t)},ao=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let j;const io=C&&(j=et())&&j.relList&&j.relList.supports&&j.relList.supports("prefetch")?ro:ao;function lo(){if(!C||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(r=>{if(r.isIntersecting){const i=r.target;n.unobserve(i);const{pathname:l}=i;if(!Q.has(l)){Q.add(l);const c=ze(l);io(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:r,hostname:i,pathname:l}=a,c=l.match(/\.\w+$/);c&&c[0]!==".html"||r!=="_blank"&&i===location.hostname&&(l!==location.pathname?n.observe(a):Q.add(l))})})};U(s);const o=N();D(()=>o.path,s),Ue(()=>{n&&n.disconnect()})}const co=b({setup(e,{slots:t}){const n=B(!1);return U(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),uo=W.NotFound||(()=>"404 Not Found"),fo={name:"VitePressApp",setup(){const{site:e}=$();return U(()=>{D(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),lo(),()=>H(W.Layout)}};function po(){const e=_o(),t=ho();t.provide(Ge,e);const n=Zt(e.route);return t.provide(We,n),C&&on(e.route,n.site),t.component("Content",ln),t.component("ClientOnly",co),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),W.enhanceApp&&W.enhanceApp({app:t,router:e,siteData:G}),{app:t,router:e}}function ho(){return Wt(fo)}function _o(){let e=C,t;return nn(n=>{let s=ze(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),C?(e=!1,je(()=>import(s),[])):require(s)},uo)}if(C){const{app:e,router:t}=po();t.go().then(()=>{e.mount("#app")})}export{Ee as N,po as createApp,$ as u,O as w};