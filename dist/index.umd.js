!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],r):r((e||self)["react-colorful"]={},e.react)}(this,function(e,r){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(r);function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r.indexOf(t=a[o])>=0||(n[t]=e[t]);return n}function l(e){var t=r.useRef(e),o=r.useRef(function(e){t.current&&t.current(e)});return t.current=e,o.current}var u=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},c=function(e){return"touches"in e},f=function(e){return e&&e.ownerDocument.defaultView||self},i=function(e,r,t){var o=e.getBoundingClientRect(),n=c(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:u((n.pageX-(o.left+f(e).pageXOffset))/o.width),top:u((n.pageY-(o.top+f(e).pageYOffset))/o.height)}},s=function(e){!c(e)&&e.preventDefault()},d=o.default.memo(function(e){var t=e.onMove,u=e.onKey,d=a(e,["onMove","onKey"]),v=r.useRef(null),h=l(t),g=l(u),m=r.useRef(null),p=r.useRef(!1),b=r.useMemo(function(){var e=function(e){s(e),(c(e)?e.touches.length>0:e.buttons>0)&&v.current?h(i(v.current,e,m.current)):t(!1)},r=function(){return t(!1)};function t(t){var o=p.current,n=f(v.current),a=t?n.addEventListener:n.removeEventListener;a(o?"touchmove":"mousemove",e),a(o?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,o=v.current;if(o&&(s(r),!function(e,r){return r&&!c(e)}(r,p.current)&&o)){if(c(r)){p.current=!0;var n=r.changedTouches||[];n.length&&(m.current=n[0].identifier)}o.focus(),h(i(o,r,m.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),g({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]},[g,h]),_=b[0],C=b[1],E=b[2];return r.useEffect(function(){return E},[E]),o.default.createElement("div",n({},d,{onMouseDown:_,className:"react-colorful__interactive",ref:v,onKeyDown:C,tabIndex:0,role:"slider"}))}),v=function(e){return e.filter(Boolean).join(" ")},h=function(e){var r=e.color,t=e.left,n=e.top,a=void 0===n?.5:n,l=v(["react-colorful__pointer",e.className]);return o.default.createElement("div",{className:l,style:{top:100*a+"%",left:100*t+"%"}},o.default.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},g=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},m={grad:.9,turn:360,rad:360/(2*Math.PI)},p=function(e){return S(b(e))},b=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?g(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?g(parseInt(e.substring(6,8),16)/255,2):1}},_=function(e,r){return void 0===r&&(r="deg"),Number(e)*(m[r]||1)},C=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?H({h:_(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},E=C,H=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},x=function(e){return O(w(e))},M=function(e){var r=e.s,t=e.v,o=e.a,n=(200-r)*t/100;return{h:g(e.h),s:g(n>0&&n<200?r*t/100/(n<=100?n:200-n)*100:0),l:g(n/2),a:g(o,2)}},k=function(e){var r=M(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},N=function(e){var r=M(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},w=function(e){var r=e.h,t=e.s,o=e.v,n=e.a;r=r/360*6,t/=100,o/=100;var a=Math.floor(r),l=o*(1-t),u=o*(1-(r-a)*t),c=o*(1-(1-r+a)*t),f=a%6;return{r:g(255*[o,u,l,l,c,o][f]),g:g(255*[c,o,o,u,l,l][f]),b:g(255*[l,l,c,o,o,u][f]),a:g(n,2)}},y=function(e){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?j({h:_(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},q=y,P=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?S({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},R=P,I=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},O=function(e){var r=e.r,t=e.g,o=e.b,n=e.a,a=n<1?I(g(255*n)):"";return"#"+I(r)+I(t)+I(o)+a},S=function(e){var r=e.r,t=e.g,o=e.b,n=e.a,a=Math.max(r,t,o),l=a-Math.min(r,t,o),u=l?a===r?(t-o)/l:a===t?2+(o-r)/l:4+(r-t)/l:0;return{h:g(60*(u<0?u+6:u)),s:g(a?l/a*100:0),v:g(a/255*100),a:n}},j=function(e){return{h:g(e.h),s:g(e.s),v:g(e.v),a:g(e.a,2)}},z=o.default.memo(function(e){var r=e.hue,t=e.onChange,n=v(["react-colorful__hue",e.className]);return o.default.createElement("div",{className:n},o.default.createElement(d,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:u(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":g(r),"aria-valuemax":"360","aria-valuemin":"0"},o.default.createElement(h,{className:"react-colorful__hue-pointer",left:r/360,color:k({h:r,s:100,v:100,a:1})})))}),B=o.default.memo(function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:k({h:r.h,s:100,v:100,a:1})};return o.default.createElement("div",{className:"react-colorful__saturation",style:n},o.default.createElement(d,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:u(r.s+100*e.left,0,100),v:u(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+g(r.s)+"%, Brightness "+g(r.v)+"%"},o.default.createElement(h,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:k(r)})))}),D=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},K=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},L=function(e,r){return e.toLowerCase()===r.toLowerCase()||D(b(e),b(r))};function A(e,t,o){var n=l(o),a=r.useState(function(){return e.toHsva(t)}),u=a[0],c=a[1],f=r.useRef({color:t,hsva:u});r.useEffect(function(){if(!e.equal(t,f.current.color)){var r=e.toHsva(t);f.current={hsva:r,color:t},c(r)}},[t,e]),r.useEffect(function(){var r;D(u,f.current.hsva)||e.equal(r=e.fromHsva(u),f.current.color)||(f.current={hsva:u,color:r},n(r))},[u,e,n]);var i=r.useCallback(function(e){c(function(r){return Object.assign({},r,e)})},[]);return[u,i]}var T,F="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,X=function(){return T||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},Y=new Map,V=function(e){F(function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!Y.has(r)){var t=r.createElement("style");t.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',Y.set(r,t);var o=X();o&&t.setAttribute("nonce",o),r.head.appendChild(t)}},[])},$=function(e){var t=e.className,l=e.colorModel,u=e.color,c=void 0===u?l.defaultColor:u,f=e.onChange,i=a(e,["className","colorModel","color","onChange"]),s=r.useRef(null);V(s);var d=A(l,c,f),h=d[0],g=d[1],m=v(["react-colorful",t]);return o.default.createElement("div",n({},i,{ref:s,className:m}),o.default.createElement(B,{hsva:h,onChange:g}),o.default.createElement(z,{hue:h.h,onChange:g,className:"react-colorful__last-control"}))},G={defaultColor:"000",toHsva:p,fromHsva:function(e){return x({h:e.h,s:e.s,v:e.v,a:1})},equal:L},J=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+N(Object.assign({},t,{a:0}))+", "+N(Object.assign({},t,{a:1}))+")"},l=v(["react-colorful__alpha",r]),c=g(100*t.a);return o.default.createElement("div",{className:l},o.default.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),o.default.createElement(d,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:u(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":c+"%","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":"100"},o.default.createElement(h,{className:"react-colorful__alpha-pointer",left:t.a,color:N(t)})))},Q=function(e){var t=e.className,l=e.colorModel,u=e.color,c=void 0===u?l.defaultColor:u,f=e.onChange,i=a(e,["className","colorModel","color","onChange"]),s=r.useRef(null);V(s);var d=A(l,c,f),h=d[0],g=d[1],m=v(["react-colorful",t]);return o.default.createElement("div",n({},i,{ref:s,className:m}),o.default.createElement(B,{hsva:h,onChange:g}),o.default.createElement(z,{hue:h.h,onChange:g}),o.default.createElement(J,{hsva:h,onChange:g,className:"react-colorful__last-control"}))},U={defaultColor:"0001",toHsva:p,fromHsva:x,equal:L},W={defaultColor:{h:0,s:0,l:0,a:1},toHsva:H,fromHsva:M,equal:D},Z={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:C,fromHsva:N,equal:K},ee={defaultColor:{h:0,s:0,l:0},toHsva:function(e){return H({h:e.h,s:e.s,l:e.l,a:1})},fromHsva:function(e){return{h:(r=M(e)).h,s:r.s,l:r.l};var r},equal:D},re={defaultColor:"hsl(0, 0%, 0%)",toHsva:E,fromHsva:k,equal:K},te={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(e){return e},fromHsva:j,equal:D},oe={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:y,fromHsva:function(e){var r=j(e);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:K},ne={defaultColor:{h:0,s:0,v:0},toHsva:function(e){return{h:e.h,s:e.s,v:e.v,a:1}},fromHsva:function(e){var r=j(e);return{h:r.h,s:r.s,v:r.v}},equal:D},ae={defaultColor:"hsv(0, 0%, 0%)",toHsva:q,fromHsva:function(e){var r=j(e);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:K},le={defaultColor:{r:0,g:0,b:0,a:1},toHsva:S,fromHsva:w,equal:D},ue={defaultColor:"rgba(0, 0, 0, 1)",toHsva:P,fromHsva:function(e){var r=w(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:K},ce={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return S({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=w(e)).r,g:r.g,b:r.b};var r},equal:D},fe={defaultColor:"rgb(0, 0, 0)",toHsva:R,fromHsva:function(e){var r=w(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:K},ie=/^#?([0-9A-F]{3,8})$/i,se=function(e){var t=e.color,u=void 0===t?"":t,c=e.onChange,f=e.onBlur,i=e.escape,s=e.validate,d=e.format,v=e.process,h=a(e,["color","onChange","onBlur","escape","validate","format","process"]),g=r.useState(function(){return i(u)}),m=g[0],p=g[1],b=l(c),_=l(f),C=r.useCallback(function(e){var r=i(e.target.value);p(r),s(r)&&b(v?v(r):r)},[i,v,s,b]),E=r.useCallback(function(e){s(e.target.value)||p(i(u)),_(e)},[u,i,s,_]);return r.useEffect(function(){p(i(u))},[u,i]),o.default.createElement("input",n({},h,{value:d?d(m):m,spellCheck:"false",onChange:C,onBlur:E}))},de=function(e){return"#"+e};e.HexAlphaColorPicker=function(e){return o.default.createElement(Q,n({},e,{colorModel:U}))},e.HexColorInput=function(e){var t=e.prefixed,l=e.alpha,u=a(e,["prefixed","alpha"]),c=r.useCallback(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,l?8:6)},[l]),f=r.useCallback(function(e){return function(e,r){var t=ie.exec(e),o=t?t[1].length:0;return 3===o||6===o||!!r&&4===o||!!r&&8===o}(e,l)},[l]);return o.default.createElement(se,n({},u,{escape:c,format:t?de:void 0,process:de,validate:f}))},e.HexColorPicker=function(e){return o.default.createElement($,n({},e,{colorModel:G}))},e.HslColorPicker=function(e){return o.default.createElement($,n({},e,{colorModel:ee}))},e.HslStringColorPicker=function(e){return o.default.createElement($,n({},e,{colorModel:re}))},e.HslaColorPicker=function(e){return o.default.createElement(Q,n({},e,{colorModel:W}))},e.HslaStringColorPicker=function(e){return o.default.createElement(Q,n({},e,{colorModel:Z}))},e.HsvColorPicker=function(e){return o.default.createElement($,n({},e,{colorModel:ne}))},e.HsvStringColorPicker=function(e){return o.default.createElement($,n({},e,{colorModel:ae}))},e.HsvaColorPicker=function(e){return o.default.createElement(Q,n({},e,{colorModel:te}))},e.HsvaStringColorPicker=function(e){return o.default.createElement(Q,n({},e,{colorModel:oe}))},e.RgbColorPicker=function(e){return o.default.createElement($,n({},e,{colorModel:ce}))},e.RgbStringColorPicker=function(e){return o.default.createElement($,n({},e,{colorModel:fe}))},e.RgbaColorPicker=function(e){return o.default.createElement(Q,n({},e,{colorModel:le}))},e.RgbaStringColorPicker=function(e){return o.default.createElement(Q,n({},e,{colorModel:ue}))},e.setNonce=function(e){T=e}});
//# sourceMappingURL=index.umd.js.map
