import{r as x}from"./index.BVOCwoKb.js";var ne={exports:{}},Q={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function Oe(){if(we)return Q;we=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function t(r,n,s){var a=null;if(s!==void 0&&(a=""+s),n.key!==void 0&&(a=""+n.key),"key"in n){s={};for(var c in n)c!=="key"&&(s[c]=n[c])}else s=n;return n=s.ref,{$$typeof:e,type:r,key:a,ref:n!==void 0?n:null,props:s}}return Q.Fragment=o,Q.jsx=t,Q.jsxs=t,Q}var ve;function Le(){return ve||(ve=1,ne.exports=Oe()),ne.exports}var b=Le();function ye(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)}function Fe(...e){return o=>{let t=!1;const r=e.map(n=>{const s=ye(n,o);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let n=0;n<r.length;n++){const s=r[n];typeof s=="function"?s():ye(e[n],null)}}}}function We(e){const o=Qe(e),t=x.forwardRef((r,n)=>{const{children:s,...a}=r,c=x.Children.toArray(s),u=c.find(Je);if(u){const m=u.props.children,g=c.map(h=>h===u?x.Children.count(m)>1?x.Children.only(null):x.isValidElement(m)?m.props.children:null:h);return b.jsx(o,{...a,ref:n,children:x.isValidElement(m)?x.cloneElement(m,void 0,g):null})}return b.jsx(o,{...a,ref:n,children:s})});return t.displayName=`${e}.Slot`,t}var Be=We("Slot");function Qe(e){const o=x.forwardRef((t,r)=>{const{children:n,...s}=t;if(x.isValidElement(n)){const a=De(n),c=He(s,n.props);return n.type!==x.Fragment&&(c.ref=r?Fe(r,a):a),x.cloneElement(n,c)}return x.Children.count(n)>1?x.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var Ue=Symbol("radix.slottable");function Je(e){return x.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ue}function He(e,o){const t={...o};for(const r in o){const n=e[r],s=o[r];/^on[A-Z]/.test(r)?n&&s?t[r]=(...c)=>{s(...c),n(...c)}:n&&(t[r]=n):r==="style"?t[r]={...n,...s}:r==="className"&&(t[r]=[n,s].filter(Boolean).join(" "))}return{...e,...t}}function De(e){let o=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=o&&"isReactWarning"in o&&o.isReactWarning;return t?e.ref:(o=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=o&&"isReactWarning"in o&&o.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}function je(e){var o,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(t=je(e[o]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ne(){for(var e,o,t=0,r="",n=arguments.length;t<n;t++)(e=arguments[t])&&(o=je(e))&&(r&&(r+=" "),r+=o);return r}const ke=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ie=Ne,Xe=(e,o)=>t=>{var r;if(o?.variants==null)return Ie(e,t?.class,t?.className);const{variants:n,defaultVariants:s}=o,a=Object.keys(n).map(m=>{const g=t?.[m],h=s?.[m];if(g===null)return null;const z=ke(g)||ke(h);return n[m][z]}),c=t&&Object.entries(t).reduce((m,g)=>{let[h,z]=g;return z===void 0||(m[h]=z),m},{}),u=o==null||(r=o.compoundVariants)===null||r===void 0?void 0:r.reduce((m,g)=>{let{class:h,className:z,...N}=g;return Object.entries(N).every(I=>{let[w,v]=I;return Array.isArray(v)?v.includes({...s,...c}[w]):{...s,...c}[w]===v})?[...m,h,z]:m},[]);return Ie(e,a,u,t?.class,t?.className)},de="-",Ye=e=>{const o=Ke(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const c=a.split(de);return c[0]===""&&c.length!==1&&c.shift(),Ae(c,o)||Ze(a)},getConflictingClassGroupIds:(a,c)=>{const u=t[a]||[];return c&&r[a]?[...u,...r[a]]:u}}},Ae=(e,o)=>{if(e.length===0)return o.classGroupId;const t=e[0],r=o.nextPart.get(t),n=r?Ae(e.slice(1),r):void 0;if(n)return n;if(o.validators.length===0)return;const s=e.join(de);return o.validators.find(({validator:a})=>a(s))?.classGroupId},Ce=/^\[(.+)\]$/,Ze=e=>{if(Ce.test(e)){const o=Ce.exec(e)[1],t=o?.substring(0,o.indexOf(":"));if(t)return"arbitrary.."+t}},Ke=e=>{const{theme:o,classGroups:t}=e,r={nextPart:new Map,validators:[]};for(const n in t)ie(t[n],r,n,o);return r},ie=(e,o,t,r)=>{e.forEach(n=>{if(typeof n=="string"){const s=n===""?o:Se(o,n);s.classGroupId=t;return}if(typeof n=="function"){if(et(n)){ie(n(r),o,t,r);return}o.validators.push({validator:n,classGroupId:t});return}Object.entries(n).forEach(([s,a])=>{ie(a,Se(o,s),t,r)})})},Se=(e,o)=>{let t=e;return o.split(de).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},et=e=>e.isThemeGetter,tt=e=>{if(e<1)return{get:()=>{},set:()=>{}};let o=0,t=new Map,r=new Map;const n=(s,a)=>{t.set(s,a),o++,o>e&&(o=0,r=t,t=new Map)};return{get(s){let a=t.get(s);if(a!==void 0)return a;if((a=r.get(s))!==void 0)return n(s,a),a},set(s,a){t.has(s)?t.set(s,a):n(s,a)}}},le="!",ce=":",rt=ce.length,ot=e=>{const{prefix:o,experimentalParseClassName:t}=e;let r=n=>{const s=[];let a=0,c=0,u=0,m;for(let I=0;I<n.length;I++){let w=n[I];if(a===0&&c===0){if(w===ce){s.push(n.slice(u,I)),u=I+rt;continue}if(w==="/"){m=I;continue}}w==="["?a++:w==="]"?a--:w==="("?c++:w===")"&&c--}const g=s.length===0?n:n.substring(u),h=nt(g),z=h!==g,N=m&&m>u?m-u:void 0;return{modifiers:s,hasImportantModifier:z,baseClassName:h,maybePostfixModifierPosition:N}};if(o){const n=o+ce,s=r;r=a=>a.startsWith(n)?s(a.substring(n.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:a,maybePostfixModifierPosition:void 0}}if(t){const n=r;r=s=>t({className:s,parseClassName:n})}return r},nt=e=>e.endsWith(le)?e.substring(0,e.length-1):e.startsWith(le)?e.substring(1):e,st=e=>{const o=Object.fromEntries(e.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const n=[];let s=[];return r.forEach(a=>{a[0]==="["||o[a]?(n.push(...s.sort(),a),s=[]):s.push(a)}),n.push(...s.sort()),n}},at=e=>({cache:tt(e.cacheSize),parseClassName:ot(e),sortModifiers:st(e),...Ye(e)}),it=/\s+/,lt=(e,o)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:n,sortModifiers:s}=o,a=[],c=e.trim().split(it);let u="";for(let m=c.length-1;m>=0;m-=1){const g=c[m],{isExternal:h,modifiers:z,hasImportantModifier:N,baseClassName:I,maybePostfixModifierPosition:w}=t(g);if(h){u=g+(u.length>0?" "+u:u);continue}let v=!!w,j=r(v?I.substring(0,w):I);if(!j){if(!v){u=g+(u.length>0?" "+u:u);continue}if(j=r(I),!j){u=g+(u.length>0?" "+u:u);continue}v=!1}const O=s(z).join(":"),E=N?O+le:O,T=E+j;if(a.includes(T))continue;a.push(T);const C=n(j,v);for(let A=0;A<C.length;++A){const V=C[A];a.push(E+V)}u=g+(u.length>0?" "+u:u)}return u};function ct(){let e=0,o,t,r="";for(;e<arguments.length;)(o=arguments[e++])&&(t=qe(o))&&(r&&(r+=" "),r+=t);return r}const qe=e=>{if(typeof e=="string")return e;let o,t="";for(let r=0;r<e.length;r++)e[r]&&(o=qe(e[r]))&&(t&&(t+=" "),t+=o);return t};function dt(e,...o){let t,r,n,s=a;function a(u){const m=o.reduce((g,h)=>h(g),e());return t=at(m),r=t.cache.get,n=t.cache.set,s=c,c(u)}function c(u){const m=r(u);if(m)return m;const g=lt(u,t);return n(u,g),g}return function(){return s(ct.apply(null,arguments))}}const y=e=>{const o=t=>t[e]||[];return o.isThemeGetter=!0,o},Me=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Pe=/^\((?:(\w[\w-]*):)?(.+)\)$/i,ut=/^\d+\/\d+$/,mt=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ft=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,bt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,F=e=>ut.test(e),f=e=>!!e&&!Number.isNaN(Number(e)),G=e=>!!e&&Number.isInteger(Number(e)),se=e=>e.endsWith("%")&&f(e.slice(0,-1)),P=e=>mt.test(e),xt=()=>!0,ht=e=>pt.test(e)&&!ft.test(e),Ee=()=>!1,wt=e=>bt.test(e),vt=e=>gt.test(e),yt=e=>!i(e)&&!l(e),kt=e=>W(e,Ve,Ee),i=e=>Me.test(e),$=e=>W(e,_e,ht),ae=e=>W(e,Rt,f),ze=e=>W(e,Te,Ee),It=e=>W(e,Ge,vt),K=e=>W(e,$e,wt),l=e=>Pe.test(e),U=e=>B(e,_e),Ct=e=>B(e,jt),Re=e=>B(e,Te),St=e=>B(e,Ve),zt=e=>B(e,Ge),ee=e=>B(e,$e,!0),W=(e,o,t)=>{const r=Me.exec(e);return r?r[1]?o(r[1]):t(r[2]):!1},B=(e,o,t=!1)=>{const r=Pe.exec(e);return r?r[1]?o(r[1]):t:!1},Te=e=>e==="position"||e==="percentage",Ge=e=>e==="image"||e==="url",Ve=e=>e==="length"||e==="size"||e==="bg-size",_e=e=>e==="length",Rt=e=>e==="number",jt=e=>e==="family-name",$e=e=>e==="shadow",Nt=()=>{const e=y("color"),o=y("font"),t=y("text"),r=y("font-weight"),n=y("tracking"),s=y("leading"),a=y("breakpoint"),c=y("container"),u=y("spacing"),m=y("radius"),g=y("shadow"),h=y("inset-shadow"),z=y("text-shadow"),N=y("drop-shadow"),I=y("blur"),w=y("perspective"),v=y("aspect"),j=y("ease"),O=y("animate"),E=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],C=()=>[...T(),l,i],A=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto","contain","none"],p=()=>[l,i,u],q=()=>[F,"full","auto",...p()],ue=()=>[G,"none","subgrid",l,i],me=()=>["auto",{span:["full",G,l,i]},G,l,i],H=()=>[G,"auto",l,i],pe=()=>["auto","min","max","fr",l,i],te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],L=()=>["start","end","center","stretch","center-safe","end-safe"],M=()=>["auto",...p()],_=()=>[F,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...p()],d=()=>[e,l,i],fe=()=>[...T(),Re,ze,{position:[l,i]}],be=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ge=()=>["auto","cover","contain",St,kt,{size:[l,i]}],re=()=>[se,U,$],S=()=>["","none","full",m,l,i],R=()=>["",f,U,$],D=()=>["solid","dashed","dotted","double"],xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],k=()=>[f,se,Re,ze],he=()=>["","none",I,l,i],X=()=>["none",f,l,i],Y=()=>["none",f,l,i],oe=()=>[f,l,i],Z=()=>[F,"full",...p()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[P],breakpoint:[P],color:[xt],container:[P],"drop-shadow":[P],ease:["in","out","in-out"],font:[yt],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[P],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[P],shadow:[P],spacing:["px",f],text:[P],"text-shadow":[P],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",F,i,l,v]}],container:["container"],columns:[{columns:[f,i,l,c]}],"break-after":[{"break-after":E()}],"break-before":[{"break-before":E()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:C()}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:q()}],"inset-x":[{"inset-x":q()}],"inset-y":[{"inset-y":q()}],start:[{start:q()}],end:[{end:q()}],top:[{top:q()}],right:[{right:q()}],bottom:[{bottom:q()}],left:[{left:q()}],visibility:["visible","invisible","collapse"],z:[{z:[G,"auto",l,i]}],basis:[{basis:[F,"full","auto",c,...p()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[f,F,"auto","initial","none",i]}],grow:[{grow:["",f,l,i]}],shrink:[{shrink:["",f,l,i]}],order:[{order:[G,"first","last","none",l,i]}],"grid-cols":[{"grid-cols":ue()}],"col-start-end":[{col:me()}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":ue()}],"row-start-end":[{row:me()}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pe()}],"auto-rows":[{"auto-rows":pe()}],gap:[{gap:p()}],"gap-x":[{"gap-x":p()}],"gap-y":[{"gap-y":p()}],"justify-content":[{justify:[...te(),"normal"]}],"justify-items":[{"justify-items":[...L(),"normal"]}],"justify-self":[{"justify-self":["auto",...L()]}],"align-content":[{content:["normal",...te()]}],"align-items":[{items:[...L(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...L(),{baseline:["","last"]}]}],"place-content":[{"place-content":te()}],"place-items":[{"place-items":[...L(),"baseline"]}],"place-self":[{"place-self":["auto",...L()]}],p:[{p:p()}],px:[{px:p()}],py:[{py:p()}],ps:[{ps:p()}],pe:[{pe:p()}],pt:[{pt:p()}],pr:[{pr:p()}],pb:[{pb:p()}],pl:[{pl:p()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":p()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":p()}],"space-y-reverse":["space-y-reverse"],size:[{size:_()}],w:[{w:[c,"screen",..._()]}],"min-w":[{"min-w":[c,"screen","none",..._()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[a]},..._()]}],h:[{h:["screen",..._()]}],"min-h":[{"min-h":["screen","none",..._()]}],"max-h":[{"max-h":["screen",..._()]}],"font-size":[{text:["base",t,U,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,l,ae]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",se,i]}],"font-family":[{font:[Ct,i,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,l,i]}],"line-clamp":[{"line-clamp":[f,"none",l,ae]}],leading:[{leading:[s,...p()]}],"list-image":[{"list-image":["none",l,i]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",l,i]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:d()}],"text-color":[{text:d()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...D(),"wavy"]}],"text-decoration-thickness":[{decoration:[f,"from-font","auto",l,$]}],"text-decoration-color":[{decoration:d()}],"underline-offset":[{"underline-offset":[f,"auto",l,i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l,i]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l,i]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:fe()}],"bg-repeat":[{bg:be()}],"bg-size":[{bg:ge()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},G,l,i],radial:["",l,i],conic:[G,l,i]},zt,It]}],"bg-color":[{bg:d()}],"gradient-from-pos":[{from:re()}],"gradient-via-pos":[{via:re()}],"gradient-to-pos":[{to:re()}],"gradient-from":[{from:d()}],"gradient-via":[{via:d()}],"gradient-to":[{to:d()}],rounded:[{rounded:S()}],"rounded-s":[{"rounded-s":S()}],"rounded-e":[{"rounded-e":S()}],"rounded-t":[{"rounded-t":S()}],"rounded-r":[{"rounded-r":S()}],"rounded-b":[{"rounded-b":S()}],"rounded-l":[{"rounded-l":S()}],"rounded-ss":[{"rounded-ss":S()}],"rounded-se":[{"rounded-se":S()}],"rounded-ee":[{"rounded-ee":S()}],"rounded-es":[{"rounded-es":S()}],"rounded-tl":[{"rounded-tl":S()}],"rounded-tr":[{"rounded-tr":S()}],"rounded-br":[{"rounded-br":S()}],"rounded-bl":[{"rounded-bl":S()}],"border-w":[{border:R()}],"border-w-x":[{"border-x":R()}],"border-w-y":[{"border-y":R()}],"border-w-s":[{"border-s":R()}],"border-w-e":[{"border-e":R()}],"border-w-t":[{"border-t":R()}],"border-w-r":[{"border-r":R()}],"border-w-b":[{"border-b":R()}],"border-w-l":[{"border-l":R()}],"divide-x":[{"divide-x":R()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":R()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...D(),"hidden","none"]}],"divide-style":[{divide:[...D(),"hidden","none"]}],"border-color":[{border:d()}],"border-color-x":[{"border-x":d()}],"border-color-y":[{"border-y":d()}],"border-color-s":[{"border-s":d()}],"border-color-e":[{"border-e":d()}],"border-color-t":[{"border-t":d()}],"border-color-r":[{"border-r":d()}],"border-color-b":[{"border-b":d()}],"border-color-l":[{"border-l":d()}],"divide-color":[{divide:d()}],"outline-style":[{outline:[...D(),"none","hidden"]}],"outline-offset":[{"outline-offset":[f,l,i]}],"outline-w":[{outline:["",f,U,$]}],"outline-color":[{outline:d()}],shadow:[{shadow:["","none",g,ee,K]}],"shadow-color":[{shadow:d()}],"inset-shadow":[{"inset-shadow":["none",h,ee,K]}],"inset-shadow-color":[{"inset-shadow":d()}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:d()}],"ring-offset-w":[{"ring-offset":[f,$]}],"ring-offset-color":[{"ring-offset":d()}],"inset-ring-w":[{"inset-ring":R()}],"inset-ring-color":[{"inset-ring":d()}],"text-shadow":[{"text-shadow":["none",z,ee,K]}],"text-shadow-color":[{"text-shadow":d()}],opacity:[{opacity:[f,l,i]}],"mix-blend":[{"mix-blend":[...xe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":xe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[f]}],"mask-image-linear-from-pos":[{"mask-linear-from":k()}],"mask-image-linear-to-pos":[{"mask-linear-to":k()}],"mask-image-linear-from-color":[{"mask-linear-from":d()}],"mask-image-linear-to-color":[{"mask-linear-to":d()}],"mask-image-t-from-pos":[{"mask-t-from":k()}],"mask-image-t-to-pos":[{"mask-t-to":k()}],"mask-image-t-from-color":[{"mask-t-from":d()}],"mask-image-t-to-color":[{"mask-t-to":d()}],"mask-image-r-from-pos":[{"mask-r-from":k()}],"mask-image-r-to-pos":[{"mask-r-to":k()}],"mask-image-r-from-color":[{"mask-r-from":d()}],"mask-image-r-to-color":[{"mask-r-to":d()}],"mask-image-b-from-pos":[{"mask-b-from":k()}],"mask-image-b-to-pos":[{"mask-b-to":k()}],"mask-image-b-from-color":[{"mask-b-from":d()}],"mask-image-b-to-color":[{"mask-b-to":d()}],"mask-image-l-from-pos":[{"mask-l-from":k()}],"mask-image-l-to-pos":[{"mask-l-to":k()}],"mask-image-l-from-color":[{"mask-l-from":d()}],"mask-image-l-to-color":[{"mask-l-to":d()}],"mask-image-x-from-pos":[{"mask-x-from":k()}],"mask-image-x-to-pos":[{"mask-x-to":k()}],"mask-image-x-from-color":[{"mask-x-from":d()}],"mask-image-x-to-color":[{"mask-x-to":d()}],"mask-image-y-from-pos":[{"mask-y-from":k()}],"mask-image-y-to-pos":[{"mask-y-to":k()}],"mask-image-y-from-color":[{"mask-y-from":d()}],"mask-image-y-to-color":[{"mask-y-to":d()}],"mask-image-radial":[{"mask-radial":[l,i]}],"mask-image-radial-from-pos":[{"mask-radial-from":k()}],"mask-image-radial-to-pos":[{"mask-radial-to":k()}],"mask-image-radial-from-color":[{"mask-radial-from":d()}],"mask-image-radial-to-color":[{"mask-radial-to":d()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":T()}],"mask-image-conic-pos":[{"mask-conic":[f]}],"mask-image-conic-from-pos":[{"mask-conic-from":k()}],"mask-image-conic-to-pos":[{"mask-conic-to":k()}],"mask-image-conic-from-color":[{"mask-conic-from":d()}],"mask-image-conic-to-color":[{"mask-conic-to":d()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:fe()}],"mask-repeat":[{mask:be()}],"mask-size":[{mask:ge()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",l,i]}],filter:[{filter:["","none",l,i]}],blur:[{blur:he()}],brightness:[{brightness:[f,l,i]}],contrast:[{contrast:[f,l,i]}],"drop-shadow":[{"drop-shadow":["","none",N,ee,K]}],"drop-shadow-color":[{"drop-shadow":d()}],grayscale:[{grayscale:["",f,l,i]}],"hue-rotate":[{"hue-rotate":[f,l,i]}],invert:[{invert:["",f,l,i]}],saturate:[{saturate:[f,l,i]}],sepia:[{sepia:["",f,l,i]}],"backdrop-filter":[{"backdrop-filter":["","none",l,i]}],"backdrop-blur":[{"backdrop-blur":he()}],"backdrop-brightness":[{"backdrop-brightness":[f,l,i]}],"backdrop-contrast":[{"backdrop-contrast":[f,l,i]}],"backdrop-grayscale":[{"backdrop-grayscale":["",f,l,i]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f,l,i]}],"backdrop-invert":[{"backdrop-invert":["",f,l,i]}],"backdrop-opacity":[{"backdrop-opacity":[f,l,i]}],"backdrop-saturate":[{"backdrop-saturate":[f,l,i]}],"backdrop-sepia":[{"backdrop-sepia":["",f,l,i]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":p()}],"border-spacing-x":[{"border-spacing-x":p()}],"border-spacing-y":[{"border-spacing-y":p()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",l,i]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[f,"initial",l,i]}],ease:[{ease:["linear","initial",j,l,i]}],delay:[{delay:[f,l,i]}],animate:[{animate:["none",O,l,i]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,l,i]}],"perspective-origin":[{"perspective-origin":C()}],rotate:[{rotate:X()}],"rotate-x":[{"rotate-x":X()}],"rotate-y":[{"rotate-y":X()}],"rotate-z":[{"rotate-z":X()}],scale:[{scale:Y()}],"scale-x":[{"scale-x":Y()}],"scale-y":[{"scale-y":Y()}],"scale-z":[{"scale-z":Y()}],"scale-3d":["scale-3d"],skew:[{skew:oe()}],"skew-x":[{"skew-x":oe()}],"skew-y":[{"skew-y":oe()}],transform:[{transform:[l,i,"","none","gpu","cpu"]}],"transform-origin":[{origin:C()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Z()}],"translate-x":[{"translate-x":Z()}],"translate-y":[{"translate-y":Z()}],"translate-z":[{"translate-z":Z()}],"translate-none":["translate-none"],accent:[{accent:d()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:d()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l,i]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l,i]}],fill:[{fill:["none",...d()]}],"stroke-w":[{stroke:[f,U,$,ae]}],stroke:[{stroke:["none",...d()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},At=dt(Nt);function qt(...e){return At(Ne(e))}const Mt=Xe("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function J({className:e,variant:o,size:t,asChild:r=!1,...n}){const s=r?Be:"button";return b.jsx(s,{"data-slot":"button",className:qt(Mt({variant:o,size:t,className:e})),...n})}const Pt=({onStart:e})=>b.jsxs("section",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 p-4 sm:p-8",children:[b.jsx("h1",{className:"text-2xl sm:text-4xl font-extrabold mb-8 text-pink-700 drop-shadow text-center",children:"ちょっとHなガンダム3択クイズ"}),b.jsx(J,{className:"w-full max-w-xs px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700 mb-4",onClick:e,"aria-label":"クイズを始める",variant:"default",children:"クイズを始める"})]}),Et=[{question:"セイラ・マスのシャワーシーンで覗いてしまったのは誰？",options:["アムロ","カイ","ハヤト"],answerIndex:0},{question:"フラウ・ボゥが水着姿を見せた場所は？",options:["ホワイトベース内","砂漠のオアシス","ジャブローのプール"],answerIndex:2},{question:"セイラがシャワー中に慌てて隠したものは？",options:["タオル","ガンダムの設計図","下着"],answerIndex:0},{question:"カイ・シデンが女性クルーの部屋を覗こうとした理由は？",options:["イタズラ","好奇心","間違えて入った"],answerIndex:2},{question:"ミライ・ヤシマの入浴シーンで一緒にいたのは？",options:["フラウ","セイラ","一人だった"],answerIndex:1},{question:"セイラがアムロに「女として見てる？」と聞いた理由は？",options:["恋愛相談","からかい","本気だった"],answerIndex:1},{question:"フラウ・ボゥの「ちょっとHな」セリフは？",options:["アムロ、私を見て","アムロ、だめよ","アムロ、こっち向いて"],answerIndex:1},{question:"セイラがシャワー後に着ていた服の色は？",options:["白","ピンク","青"],answerIndex:0},{question:"ミライがブライトに見せた意外な一面は？",options:["大胆な水着","酔っぱらい姿","お色気ダンス"],answerIndex:0},{question:"ララァ・スンの服装の特徴は？",options:["露出が多い","白いドレス","パイロットスーツ"],answerIndex:0},{question:"セイラの「兄さん」とは誰？",options:["シャア","アムロ","カイ"],answerIndex:0},{question:"フラウがアムロに焼きもちを焼いた理由は？",options:["セイラと話していた","ララァを見ていた","ミライと仲良くしていた"],answerIndex:0},{question:"マチルダさんがアムロに贈ったものは？",options:["キス","ガンダムの部品","手紙"],answerIndex:0},{question:"ハモンさんの魅惑的なシーンは？",options:["ダンス","お酒を飲む","シャワー"],answerIndex:0},{question:"セイラがアムロにした「大胆な行動」は？",options:["ビンタ","キス","抱きつく"],answerIndex:0},{question:"フラウがアムロに言った甘い言葉は？",options:["好きよ","がんばって","大丈夫"],answerIndex:0},{question:"セイラがシャワー後にアムロに言った言葉は？",options:["見たわね","恥ずかしい","もう！"],answerIndex:0},{question:"ミライの「大人の色気」を感じさせるシーンは？",options:["入浴","パイロットスーツ姿","寝起き"],answerIndex:0},{question:"セイラがガンダムに乗った理由は？",options:["兄のため","アムロのため","自分の意思"],answerIndex:0},{question:"フラウがアムロの部屋に入ったときの反応は？",options:["驚く","照れる","怒る"],answerIndex:1},{question:"小説版でセイラがアムロに対して見せた“大人の関係”を匂わせる描写は？",options:["一緒に寝た","キスをした","裸を見せた"],answerIndex:0},{question:"小説版でララァとシャアの関係がより濃密に描写された内容は？",options:["恋人同士","肉体関係を匂わせる","兄妹のような関係"],answerIndex:1},{question:"小説版で描かれるミライとブライトの「夜の生活」についての台詞は？",options:["子供ができたかも","昨夜は眠れなかった","二人でシャワーを浴びた"],answerIndex:0},{question:"小説版でアムロが女性クルーに対して感じていた「男の本能」とは？",options:["恋愛感情","性的興味","父性本能"],answerIndex:1},{question:"小説版でフラウ・ボゥがアムロに見せた大胆な行動は？",options:["夜這い","キス","裸で抱きつく"],answerIndex:0},{question:"小説版で描かれるセイラの「下着姿」のシーンはどこ？",options:["シャワー後の部屋","医務室","コックピット"],answerIndex:0},{question:"小説版でシャアがララァに贈った“大人のプレゼント”は？",options:["下着","香水","ドレス"],answerIndex:1},{question:"小説版でハモンがランバ・ラルに語った「夜の願望」は？",options:["子供が欲しい","二人きりで旅したい","もっと愛してほしい"],answerIndex:2},{question:"小説版でアムロがセイラの裸を見てしまったシーンの描写は？",options:["詳細に描かれている","ぼかして描写","全く触れない"],answerIndex:0},{question:"小説版でブライトがミライに言った「大人のジョーク」は？",options:["今夜は寝かせない","一緒にシャワーを浴びよう","キスしていい？"],answerIndex:0},{question:"小説版で描かれるセイラの「大胆な行動」とは？",options:["アムロのベッドに入る","シャワーを一緒に浴びる","キスをせがむ"],answerIndex:0},{question:"小説版でララァがシャアに見せた「大人の表情」は？",options:["涙","微笑み","誘惑的な視線"],answerIndex:2},{question:"小説版でフラウ・ボゥがアムロにした「夜のアプローチ」は？",options:["添い寝","キス","手料理をふるまう"],answerIndex:0},{question:"小説版でミライがブライトに「大人の関係」をほのめかした台詞は？",options:["一緒に寝てもいい？","今夜は二人きり","あなたの子が欲しい"],answerIndex:0},{question:"小説版でセイラがシャワー後に着ていた下着の色は？",options:["白","赤","黒"],answerIndex:0},{question:"小説版でハモンがランバ・ラルに語った「夜の夢」は？",options:["二人で逃避行","子供を育てる","永遠の愛を誓う"],answerIndex:0},{question:"小説版でアムロがセイラの裸を見た時の心情描写は？",options:["動揺する","嬉しい","恥ずかしい"],answerIndex:0},{question:"小説版でミライがブライトに贈った「大人のプレゼント」は？",options:["手編みのセーター","香水","ラブレター"],answerIndex:1},{question:"小説版でシャアがララァに語った「愛の言葉」は？",options:["君は僕のすべて","一緒に逃げよう","愛している"],answerIndex:2},{question:"小説版でフラウ・ボゥがアムロに伝えた「夜の秘密」は？",options:["好きだったと告白","夢で会ったと話す","一緒に寝たいと言う"],answerIndex:2}];function Tt({question:e,onSelect:o,selected:t,disabled:r,questionNumber:n,totalQuestions:s,isAnswered:a,isCorrect:c}){return b.jsxs("section",{className:"flex flex-col justify-center items-center min-h-[60vh] bg-white rounded shadow p-4 sm:p-8 w-full max-w-2xl mx-auto",children:[b.jsxs("div",{className:"text-xs text-gray-500 mb-2 self-start",children:["第",n,"問 / 全",s,"問"]}),b.jsx("h3",{className:"text-center text-2xl sm:text-3xl font-bold mb-8 text-blue-900 break-words","data-testid":"question-text",tabIndex:0,"aria-label":`問題: ${e.question}`,children:e.question}),b.jsx("ul",{className:"list-none p-0 flex flex-col gap-7 w-full max-w-2xl",children:e.options.map((u,m)=>{let g="w-full px-8 py-6 text-2xl sm:text-3xl font-semibold rounded-2xl border-2 text-center transition focus:outline-none focus:ring-4 ";return a?t===m?g+=m===e.answerIndex?"bg-green-500 text-white border-green-600 ":"bg-red-500 text-white border-red-600 ":g+="bg-gray-100 text-gray-400 border-gray-200 ":g+=t===m?"bg-blue-600 text-white border-blue-600 ":"bg-gray-100 border-gray-300 hover:bg-blue-100 ",r&&(g+="opacity-50 cursor-not-allowed "),b.jsx("li",{className:"m-0 p-0 w-full",children:b.jsx(J,{type:"button",className:g,onClick:()=>o(m),disabled:r,"aria-label":`選択肢${m+1}: ${u}`,"data-testid":`choice-${m}`,variant:"ghost",tabIndex:0,children:u})},m)})}),a&&b.jsxs("div",{className:"mt-8 text-2xl sm:text-3xl font-bold text-center","aria-live":"polite",children:[c?"⭕️ 正解！":"❌ 不正解",!c&&b.jsxs("div",{className:"mt-4 text-lg text-green-700 font-semibold",children:["正解: ",e.options[e.answerIndex]]})]})]})}const Gt=e=>e===1?"Sランク！パーフェクト！":e>=.8?"Aランク！すごい！":e>=.6?"Bランク":e>=.4?"Cランク":"がんばろう！";function Vt({score:e,total:o,onRetry:t}){const r=e/o,n=Math.round(r*100),s=Gt(r),c=`https://twitter.com/intent/tweet?text=${encodeURIComponent(`ガンダム3択クイズに挑戦！
${o}問中${e}問正解（正答率${n}%） #ガンダムクイズ https://gundam-quiz.windsurf.build/`)}`;return b.jsxs("section",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 p-4 sm:p-8",children:[b.jsx("h2",{className:"text-2xl sm:text-3xl font-bold mb-6 text-pink-700 text-center",children:"リザルト"}),b.jsxs("div",{className:"text-xl sm:text-2xl mb-4 text-blue-900",children:[e," / ",o," 問正解"]}),b.jsxs("div",{className:"text-base sm:text-xl mb-4 text-gray-700",children:["正答率: ",n,"%"]}),b.jsx("div",{className:"text-base sm:text-lg mb-8 font-bold text-pink-600",children:s}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 w-full max-w-xs mx-auto",children:[b.jsx(J,{className:"w-full px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700",onClick:t,"aria-label":"もう一度挑戦",variant:"default",children:"もう一度挑戦！"}),b.jsx(J,{asChild:!0,className:"w-full px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-sky-400 text-white shadow hover:bg-sky-500 text-center","aria-label":"Xでポスト",variant:"secondary",children:b.jsxs("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:[`
`,"Xでポスト！"]})})]})]})}function _t(e){return[...e].sort(()=>Math.random()-.5)}const $t=()=>{const e=x.useMemo(()=>_t(Et).slice(0,10),[]),o=e.length,[t,r]=x.useState(0),[n,s]=x.useState(void 0),[a,c]=x.useState(!1),[u,m]=x.useState(null),[g,h]=x.useState(0),[z,N]=x.useState(!1),[I,w]=x.useState(0),v=x.useRef(null),j=e[t];x.useEffect(()=>{if(a){w(0);let C=0;return v.current=setInterval(()=>{C+=100,w(C/3e3*100),C>=3e3&&(clearInterval(v.current),E())},100),()=>clearInterval(v.current)}else w(0),v.current&&clearInterval(v.current)},[a]);const O=C=>{if(a)return;s(C);const A=C===j.answerIndex;m(A),c(!0),A&&h(V=>V+1)},E=()=>{if(v.current&&clearInterval(v.current),t+1>=o){N(!0);return}r(C=>C+1),s(void 0),c(!1),m(null),w(0)},T=()=>{r(0),s(void 0),c(!1),m(null),N(!1),h(0),w(0),v.current&&clearInterval(v.current)};return z?b.jsx(Vt,{score:g,total:o,onRetry:T}):j?b.jsxs("section",{className:"flex flex-col items-center justify-center min-h-screen bg-white",children:[b.jsx(Tt,{question:j,onSelect:O,selected:n,disabled:a,questionNumber:t+1,totalQuestions:o,isAnswered:a,isCorrect:u}),a&&b.jsxs(b.Fragment,{children:[b.jsx(J,{className:"mt-8 w-full max-w-xs px-8 py-4 text-xl sm:text-2xl font-bold rounded-2xl bg-blue-600 text-white shadow hover:bg-blue-700",onClick:E,"aria-label":t+1>=o?"リザルトを見る":"次へ",variant:"default",children:t+1>=o?"リザルトを見る":"次へ"}),b.jsx("div",{className:"w-full max-w-xs h-2 bg-gray-200 rounded mt-3 overflow-hidden",children:b.jsx("div",{className:"h-full bg-blue-500 transition-all duration-100",style:{width:`${I}%`}})})]})]}):null},Lt=()=>{const[e,o]=x.useState(!1);return e?b.jsx($t,{}):b.jsx(Pt,{onStart:()=>o(!0)})};export{Lt as default};
