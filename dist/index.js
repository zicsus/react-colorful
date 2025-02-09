var e=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=/*#__PURE__*/r(e);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(null,arguments)}function a(e,r){if(null==e)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(r.includes(o))continue;t[o]=e[o]}return t}function n(r){var t=e.useRef(r),o=e.useRef(function(e){t.current&&t.current(e)});return t.current=r,o.current}var l=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},u=["onMove","onKey"],c=function(e,r,t){var o=e.getBoundingClientRect(),a=r;return{left:l((a.pageX-(o.left+window.scrollX))/o.width),top:l((a.pageY-(o.top+window.scrollY))/o.height)}},s=function(e){e.preventDefault()},i=t.default.memo(function(r){var l=r.onMove,i=r.onKey,f=a(r,u),d=e.useRef(null),v=n(l),h=n(i);e.useRef(null);var m=e.useRef(!1),g=e.useMemo(function(){var e=function(e){s(e),e.buttons>0&&d.current?v(c(d.current,e)):r(!1)};function r(r){r?window.addEventListener("mousemove",e):window.removeEventListener("mousemove",e)}return[function(e){var t=e.nativeEvent,o=d.current;o&&(s(t),!function(e,r){return r&&!0}(0,m.current)&&o&&(o.focus(),v(c(o,t)),r(!0)))},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),h({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},r]},[h,v]),p=g[0],b=g[1],_=g[2];return e.useEffect(function(){return _},[_]),/*#__PURE__*/t.default.createElement("div",o({},f,{onMouseDown:p,className:"react-colorful__interactive",ref:d,onKeyDown:b,tabIndex:0,role:"slider"}))}),f=function(e){return e.filter(Boolean).join(" ")},d=function(e){var r=e.color,o=e.left,a=e.top,n=void 0===a?.5:a,l=f(["react-colorful__pointer",e.className]);/*#__PURE__*/return t.default.createElement("div",{className:l,style:{top:100*n+"%",left:100*o+"%"}},/*#__PURE__*/t.default.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},v=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},h={grad:.9,turn:360,rad:360/(2*Math.PI)},m=function(e){return I(g(e))},g=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?v(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?v(parseInt(e.substring(6,8),16)/255,2):1}},p=function(e,r){return void 0===r&&(r="deg"),Number(e)*(h[r]||1)},b=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?C({h:p(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},_=b,C=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},x=function(e){return R(M(e))},E=function(e){var r=e.s,t=e.v,o=e.a,a=(200-r)*t/100;return{h:v(e.h),s:v(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:v(a/2),a:v(o,2)}},H=function(e){var r=E(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},w=function(e){var r=E(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},M=function(e){var r=e.h,t=e.s,o=e.v,a=e.a;r=r/360*6,t/=100,o/=100;var n=Math.floor(r),l=o*(1-t),u=o*(1-(r-n)*t),c=o*(1-(1-r+n)*t),s=n%6;return{r:v(255*[o,u,l,l,c,o][s]),g:v(255*[c,o,o,u,l,l][s]),b:v(255*[l,l,c,o,o,u][s]),a:v(a,2)}},N=function(e){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?S({h:p(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},k=N,y=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?I({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},q=y,P=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},R=function(e){var r=e.r,t=e.g,o=e.b,a=e.a,n=a<1?P(v(255*a)):"";return"#"+P(r)+P(t)+P(o)+n},I=function(e){var r=e.r,t=e.g,o=e.b,a=e.a,n=Math.max(r,t,o),l=n-Math.min(r,t,o),u=l?n===r?(t-o)/l:n===t?2+(o-r)/l:4+(r-t)/l:0;return{h:v(60*(u<0?u+6:u)),s:v(n?l/n*100:0),v:v(n/255*100),a:a}},S=function(e){return{h:v(e.h),s:v(e.s),v:v(e.v),a:v(e.a,2)}},j=t.default.memo(function(e){var r=e.hue,o=e.onChange,a=f(["react-colorful__hue",e.className]);/*#__PURE__*/return t.default.createElement("div",{className:a},/*#__PURE__*/t.default.createElement(i,{onMove:function(e){o({h:360*e.left})},onKey:function(e){o({h:l(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":v(r),"aria-valuemax":"360","aria-valuemin":"0"},/*#__PURE__*/t.default.createElement(d,{className:"react-colorful__hue-pointer",left:r/360,color:H({h:r,s:100,v:100,a:1})})))}),z=t.default.memo(function(e){var r=e.hsva,o=e.onChange,a={backgroundColor:H({h:r.h,s:100,v:100,a:1})};/*#__PURE__*/return t.default.createElement("div",{className:"react-colorful__saturation",style:a},/*#__PURE__*/t.default.createElement(i,{onMove:function(e){o({s:100*e.left,v:100-100*e.top})},onKey:function(e){o({s:l(r.s+100*e.left,0,100),v:l(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+v(r.s)+"%, Brightness "+v(r.v)+"%"},/*#__PURE__*/t.default.createElement(d,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:H(r)})))}),O=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},B=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},K=function(e,r){return e.toLowerCase()===r.toLowerCase()||O(g(e),g(r))};function L(r,t,o){var a=n(o),l=e.useState(function(){return r.toHsva(t)}),u=l[0],c=l[1],s=e.useRef({color:t,hsva:u});e.useEffect(function(){if(!r.equal(t,s.current.color)){var e=r.toHsva(t);s.current={hsva:e,color:t},c(e)}},[t,r]),e.useEffect(function(){var e;O(u,s.current.hsva)||r.equal(e=r.fromHsva(u),s.current.color)||(s.current={hsva:u,color:e},a(e))},[u,r,a]);var i=e.useCallback(function(e){c(function(r){return Object.assign({},r,e)})},[]);return[u,i]}var A,D="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,F=function(){return A||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},X=new Map,Y=function(e,r){D(function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!X.has(t)){var o=t.createElement("style");o.innerHTML='.react-colorful{cursor:default;display:flex;flex-direction:column;height:200px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:200px}.react-colorful__saturation{background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0));border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{border-radius:inherit;bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;bottom:0;left:0;outline:none;position:absolute;right:0;top:0;touch-action:none}.react-colorful__pointer{background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);box-sizing:border-box;height:28px;position:absolute;transform:translate(-50%,-50%);width:28px;z-index:1}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',X.set(t,o);var a=F();a&&o.setAttribute("nonce",a),r?r.prepend(o):t.head.appendChild(o)}},[])},T=["className","colorModel","color","onChange","root"],$=function(r){var n=r.className,l=r.colorModel,u=r.color,c=void 0===u?l.defaultColor:u,s=r.onChange,i=r.root,d=a(r,T),v=e.useRef(null);Y(v,i);var h=L(l,c,s),m=h[0],g=h[1],p=f(["react-colorful",n]);/*#__PURE__*/return t.default.createElement("div",o({},d,{ref:v,className:p}),/*#__PURE__*/t.default.createElement(z,{hsva:m,onChange:g}),/*#__PURE__*/t.default.createElement(j,{hue:m.h,onChange:g,className:"react-colorful__last-control"}))},G={defaultColor:"000",toHsva:m,fromHsva:function(e){return x({h:e.h,s:e.s,v:e.v,a:1})},equal:K},J=function(e){var r=e.className,o=e.hsva,a=e.onChange,n={backgroundImage:"linear-gradient(90deg, "+w(Object.assign({},o,{a:0}))+", "+w(Object.assign({},o,{a:1}))+")"},u=f(["react-colorful__alpha",r]),c=v(100*o.a);/*#__PURE__*/return t.default.createElement("div",{className:u},/*#__PURE__*/t.default.createElement("div",{className:"react-colorful__alpha-gradient",style:n}),/*#__PURE__*/t.default.createElement(i,{onMove:function(e){a({a:e.left})},onKey:function(e){a({a:l(o.a+e.left)})},"aria-label":"Alpha","aria-valuetext":c+"%","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":"100"},/*#__PURE__*/t.default.createElement(d,{className:"react-colorful__alpha-pointer",left:o.a,color:w(o)})))},Q=["className","colorModel","color","onChange","root"],U=function(r){var n=r.className,l=r.colorModel,u=r.color,c=void 0===u?l.defaultColor:u,s=r.onChange,i=r.root,d=a(r,Q),v=e.useRef(null);Y(v,i);var h=L(l,c,s),m=h[0],g=h[1],p=f(["react-colorful",n]);/*#__PURE__*/return t.default.createElement("div",o({},d,{ref:v,className:p}),/*#__PURE__*/t.default.createElement(z,{hsva:m,onChange:g}),/*#__PURE__*/t.default.createElement(j,{hue:m.h,onChange:g}),/*#__PURE__*/t.default.createElement(J,{hsva:m,onChange:g,className:"react-colorful__last-control"}))},V={defaultColor:"0001",toHsva:m,fromHsva:x,equal:K},W={defaultColor:{h:0,s:0,l:0,a:1},toHsva:C,fromHsva:E,equal:O},Z={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:b,fromHsva:w,equal:B},ee={defaultColor:{h:0,s:0,l:0},toHsva:function(e){return C({h:e.h,s:e.s,l:e.l,a:1})},fromHsva:function(e){return{h:(r=E(e)).h,s:r.s,l:r.l};var r},equal:O},re={defaultColor:"hsl(0, 0%, 0%)",toHsva:_,fromHsva:H,equal:B},te={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(e){return e},fromHsva:S,equal:O},oe={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:N,fromHsva:function(e){var r=S(e);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:B},ae={defaultColor:{h:0,s:0,v:0},toHsva:function(e){return{h:e.h,s:e.s,v:e.v,a:1}},fromHsva:function(e){var r=S(e);return{h:r.h,s:r.s,v:r.v}},equal:O},ne={defaultColor:"hsv(0, 0%, 0%)",toHsva:k,fromHsva:function(e){var r=S(e);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:B},le={defaultColor:{r:0,g:0,b:0,a:1},toHsva:I,fromHsva:M,equal:O},ue={defaultColor:"rgba(0, 0, 0, 1)",toHsva:y,fromHsva:function(e){var r=M(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:B},ce={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return I({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=M(e)).r,g:r.g,b:r.b};var r},equal:O},se={defaultColor:"rgb(0, 0, 0)",toHsva:q,fromHsva:function(e){var r=M(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:B},ie=/^#?([0-9A-F]{3,8})$/i,fe=["color","onChange","onBlur","escape","validate","format","process"],de=function(r){var l=r.color,u=void 0===l?"":l,c=r.onChange,s=r.onBlur,i=r.escape,f=r.validate,d=r.format,v=r.process,h=a(r,fe),m=e.useState(function(){return i(u)}),g=m[0],p=m[1],b=n(c),_=n(s),C=e.useCallback(function(e){var r=i(e.target.value);p(r),f(r)&&b(v?v(r):r)},[i,v,f,b]),x=e.useCallback(function(e){f(e.target.value)||p(i(u)),_(e)},[u,i,f,_]);return e.useEffect(function(){p(i(u))},[u,i]),/*#__PURE__*/t.default.createElement("input",o({},h,{value:d?d(g):g,spellCheck:"false",onChange:C,onBlur:x}))},ve=["prefixed","alpha"],he=function(e){return"#"+e};exports.HexAlphaColorPicker=function(e){/*#__PURE__*/return t.default.createElement(U,o({},e,{colorModel:V}))},exports.HexColorInput=function(r){var n=r.prefixed,l=r.alpha,u=a(r,ve),c=e.useCallback(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,l?8:6)},[l]),s=e.useCallback(function(e){return function(e,r){var t=ie.exec(e),o=t?t[1].length:0;return 3===o||6===o||!!r&&4===o||!!r&&8===o}(e,l)},[l]);/*#__PURE__*/return t.default.createElement(de,o({},u,{escape:c,format:n?he:void 0,process:he,validate:s}))},exports.HexColorPicker=function(e){/*#__PURE__*/return t.default.createElement($,o({},e,{colorModel:G}))},exports.HslColorPicker=function(e){/*#__PURE__*/return t.default.createElement($,o({},e,{colorModel:ee}))},exports.HslStringColorPicker=function(e){/*#__PURE__*/return t.default.createElement($,o({},e,{colorModel:re}))},exports.HslaColorPicker=function(e){/*#__PURE__*/return t.default.createElement(U,o({},e,{colorModel:W}))},exports.HslaStringColorPicker=function(e){/*#__PURE__*/return t.default.createElement(U,o({},e,{colorModel:Z}))},exports.HsvColorPicker=function(e){/*#__PURE__*/return t.default.createElement($,o({},e,{colorModel:ae}))},exports.HsvStringColorPicker=function(e){/*#__PURE__*/return t.default.createElement($,o({},e,{colorModel:ne}))},exports.HsvaColorPicker=function(e){/*#__PURE__*/return t.default.createElement(U,o({},e,{colorModel:te}))},exports.HsvaStringColorPicker=function(e){/*#__PURE__*/return t.default.createElement(U,o({},e,{colorModel:oe}))},exports.RgbColorPicker=function(e){/*#__PURE__*/return t.default.createElement($,o({},e,{colorModel:ce}))},exports.RgbStringColorPicker=function(e){/*#__PURE__*/return t.default.createElement($,o({},e,{colorModel:se}))},exports.RgbaColorPicker=function(e){/*#__PURE__*/return t.default.createElement(U,o({},e,{colorModel:le}))},exports.RgbaStringColorPicker=function(e){/*#__PURE__*/return t.default.createElement(U,o({},e,{colorModel:ue}))},exports.setNonce=function(e){A=e};
//# sourceMappingURL=index.js.map
