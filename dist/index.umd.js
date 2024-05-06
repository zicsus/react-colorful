!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],r):r((e||self)["react-colorful"]={},e.react)}(this,function(e,r){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(r);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function n(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r.indexOf(t=n[o])>=0||(a[t]=e[t]);return a}function l(e){var t=r.useRef(e),o=r.useRef(function(e){t.current&&t.current(e)});return t.current=e,o.current}var u=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},c=function(e,r,t){var o=e.getBoundingClientRect(),a=r;return{left:u((a.pageX-(o.left+window.scrollX))/o.width),top:u((a.pageY-(o.top+window.scrollY))/o.height)}},f=function(e){e.preventDefault()},i=o.default.memo(function(e){var t=e.onMove,u=e.onKey,i=n(e,["onMove","onKey"]),s=r.useRef(null),d=l(t),v=l(u);r.useRef(null);var h=r.useRef(!1),m=r.useMemo(function(){var e=function(e){f(e),e.buttons>0&&s.current?d(c(s.current,e)):r(!1)};function r(r){r?window.addEventListener("mousemove",e):window.removeEventListener("mousemove",e)}return[function(e){var t=e.nativeEvent,o=s.current;o&&(f(t),!function(e,r){return r&&!0}(0,h.current)&&o&&(o.focus(),d(c(o,t)),r(!0)))},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),v({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},r]},[v,d]),g=m[0],p=m[1],b=m[2];return r.useEffect(function(){return b},[b]),o.default.createElement("div",a({},i,{onMouseDown:g,className:"react-colorful__interactive",ref:s,onKeyDown:p,tabIndex:0,role:"slider"}))}),s=function(e){return e.filter(Boolean).join(" ")},d=function(e){var r=e.color,t=e.left,a=e.top,n=void 0===a?.5:a,l=s(["react-colorful__pointer",e.className]);return o.default.createElement("div",{className:l,style:{top:100*n+"%",left:100*t+"%"}},o.default.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},v=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},h={grad:.9,turn:360,rad:360/(2*Math.PI)},m=function(e){return I(g(e))},g=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?v(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?v(parseInt(e.substring(6,8),16)/255,2):1}},p=function(e,r){return void 0===r&&(r="deg"),Number(e)*(h[r]||1)},b=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?C({h:p(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},_=b,C=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},E=function(e){return R(M(e))},H=function(e){var r=e.s,t=e.v,o=e.a,a=(200-r)*t/100;return{h:v(e.h),s:v(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:v(a/2),a:v(o,2)}},x=function(e){var r=H(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},w=function(e){var r=H(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},M=function(e){var r=e.h,t=e.s,o=e.v,a=e.a;r=r/360*6,t/=100,o/=100;var n=Math.floor(r),l=o*(1-t),u=o*(1-(r-n)*t),c=o*(1-(1-r+n)*t),f=n%6;return{r:v(255*[o,u,l,l,c,o][f]),g:v(255*[c,o,o,u,l,l][f]),b:v(255*[l,l,c,o,o,u][f]),a:v(a,2)}},k=function(e){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?S({h:p(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},N=k,y=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?I({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},q=y,P=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},R=function(e){var r=e.r,t=e.g,o=e.b,a=e.a,n=a<1?P(v(255*a)):"";return"#"+P(r)+P(t)+P(o)+n},I=function(e){var r=e.r,t=e.g,o=e.b,a=e.a,n=Math.max(r,t,o),l=n-Math.min(r,t,o),u=l?n===r?(t-o)/l:n===t?2+(o-r)/l:4+(r-t)/l:0;return{h:v(60*(u<0?u+6:u)),s:v(n?l/n*100:0),v:v(n/255*100),a:a}},S=function(e){return{h:v(e.h),s:v(e.s),v:v(e.v),a:v(e.a,2)}},j=o.default.memo(function(e){var r=e.hue,t=e.onChange,a=s(["react-colorful__hue",e.className]);return o.default.createElement("div",{className:a},o.default.createElement(i,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:u(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":v(r),"aria-valuemax":"360","aria-valuemin":"0"},o.default.createElement(d,{className:"react-colorful__hue-pointer",left:r/360,color:x({h:r,s:100,v:100,a:1})})))}),O=o.default.memo(function(e){var r=e.hsva,t=e.onChange,a={backgroundColor:x({h:r.h,s:100,v:100,a:1})};return o.default.createElement("div",{className:"react-colorful__saturation",style:a},o.default.createElement(i,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:u(r.s+100*e.left,0,100),v:u(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+v(r.s)+"%, Brightness "+v(r.v)+"%"},o.default.createElement(d,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:x(r)})))}),z=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},B=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},K=function(e,r){return e.toLowerCase()===r.toLowerCase()||z(g(e),g(r))};function L(e,t,o){var a=l(o),n=r.useState(function(){return e.toHsva(t)}),u=n[0],c=n[1],f=r.useRef({color:t,hsva:u});r.useEffect(function(){if(!e.equal(t,f.current.color)){var r=e.toHsva(t);f.current={hsva:r,color:t},c(r)}},[t,e]),r.useEffect(function(){var r;z(u,f.current.hsva)||e.equal(r=e.fromHsva(u),f.current.color)||(f.current={hsva:u,color:r},a(r))},[u,e,a]);var i=r.useCallback(function(e){c(function(r){return Object.assign({},r,e)})},[]);return[u,i]}var A,D="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,T=function(){return A||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},F=new Map,X=function(e){D(function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!F.has(r)){var t=r.createElement("style");t.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',F.set(r,t);var o=T();o&&t.setAttribute("nonce",o),r.head.appendChild(t)}},[])},Y=function(e){var t=e.className,l=e.colorModel,u=e.color,c=void 0===u?l.defaultColor:u,f=e.onChange,i=n(e,["className","colorModel","color","onChange"]),d=r.useRef(null);X(d);var v=L(l,c,f),h=v[0],m=v[1],g=s(["react-colorful",t]);return o.default.createElement("div",a({},i,{ref:d,className:g}),o.default.createElement(O,{hsva:h,onChange:m}),o.default.createElement(j,{hue:h.h,onChange:m,className:"react-colorful__last-control"}))},$={defaultColor:"000",toHsva:m,fromHsva:function(e){return E({h:e.h,s:e.s,v:e.v,a:1})},equal:K},G=function(e){var r=e.className,t=e.hsva,a=e.onChange,n={backgroundImage:"linear-gradient(90deg, "+w(Object.assign({},t,{a:0}))+", "+w(Object.assign({},t,{a:1}))+")"},l=s(["react-colorful__alpha",r]),c=v(100*t.a);return o.default.createElement("div",{className:l},o.default.createElement("div",{className:"react-colorful__alpha-gradient",style:n}),o.default.createElement(i,{onMove:function(e){a({a:e.left})},onKey:function(e){a({a:u(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":c+"%","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":"100"},o.default.createElement(d,{className:"react-colorful__alpha-pointer",left:t.a,color:w(t)})))},J=function(e){var t=e.className,l=e.colorModel,u=e.color,c=void 0===u?l.defaultColor:u,f=e.onChange,i=n(e,["className","colorModel","color","onChange"]),d=r.useRef(null);X(d);var v=L(l,c,f),h=v[0],m=v[1],g=s(["react-colorful",t]);return o.default.createElement("div",a({},i,{ref:d,className:g}),o.default.createElement(O,{hsva:h,onChange:m}),o.default.createElement(j,{hue:h.h,onChange:m}),o.default.createElement(G,{hsva:h,onChange:m,className:"react-colorful__last-control"}))},Q={defaultColor:"0001",toHsva:m,fromHsva:E,equal:K},U={defaultColor:{h:0,s:0,l:0,a:1},toHsva:C,fromHsva:H,equal:z},V={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:b,fromHsva:w,equal:B},W={defaultColor:{h:0,s:0,l:0},toHsva:function(e){return C({h:e.h,s:e.s,l:e.l,a:1})},fromHsva:function(e){return{h:(r=H(e)).h,s:r.s,l:r.l};var r},equal:z},Z={defaultColor:"hsl(0, 0%, 0%)",toHsva:_,fromHsva:x,equal:B},ee={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(e){return e},fromHsva:S,equal:z},re={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:k,fromHsva:function(e){var r=S(e);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:B},te={defaultColor:{h:0,s:0,v:0},toHsva:function(e){return{h:e.h,s:e.s,v:e.v,a:1}},fromHsva:function(e){var r=S(e);return{h:r.h,s:r.s,v:r.v}},equal:z},oe={defaultColor:"hsv(0, 0%, 0%)",toHsva:N,fromHsva:function(e){var r=S(e);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:B},ae={defaultColor:{r:0,g:0,b:0,a:1},toHsva:I,fromHsva:M,equal:z},ne={defaultColor:"rgba(0, 0, 0, 1)",toHsva:y,fromHsva:function(e){var r=M(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:B},le={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return I({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=M(e)).r,g:r.g,b:r.b};var r},equal:z},ue={defaultColor:"rgb(0, 0, 0)",toHsva:q,fromHsva:function(e){var r=M(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:B},ce=/^#?([0-9A-F]{3,8})$/i,fe=function(e){var t=e.color,u=void 0===t?"":t,c=e.onChange,f=e.onBlur,i=e.escape,s=e.validate,d=e.format,v=e.process,h=n(e,["color","onChange","onBlur","escape","validate","format","process"]),m=r.useState(function(){return i(u)}),g=m[0],p=m[1],b=l(c),_=l(f),C=r.useCallback(function(e){var r=i(e.target.value);p(r),s(r)&&b(v?v(r):r)},[i,v,s,b]),E=r.useCallback(function(e){s(e.target.value)||p(i(u)),_(e)},[u,i,s,_]);return r.useEffect(function(){p(i(u))},[u,i]),o.default.createElement("input",a({},h,{value:d?d(g):g,spellCheck:"false",onChange:C,onBlur:E}))},ie=function(e){return"#"+e};e.HexAlphaColorPicker=function(e){return o.default.createElement(J,a({},e,{colorModel:Q}))},e.HexColorInput=function(e){var t=e.prefixed,l=e.alpha,u=n(e,["prefixed","alpha"]),c=r.useCallback(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,l?8:6)},[l]),f=r.useCallback(function(e){return function(e,r){var t=ce.exec(e),o=t?t[1].length:0;return 3===o||6===o||!!r&&4===o||!!r&&8===o}(e,l)},[l]);return o.default.createElement(fe,a({},u,{escape:c,format:t?ie:void 0,process:ie,validate:f}))},e.HexColorPicker=function(e){return o.default.createElement(Y,a({},e,{colorModel:$}))},e.HslColorPicker=function(e){return o.default.createElement(Y,a({},e,{colorModel:W}))},e.HslStringColorPicker=function(e){return o.default.createElement(Y,a({},e,{colorModel:Z}))},e.HslaColorPicker=function(e){return o.default.createElement(J,a({},e,{colorModel:U}))},e.HslaStringColorPicker=function(e){return o.default.createElement(J,a({},e,{colorModel:V}))},e.HsvColorPicker=function(e){return o.default.createElement(Y,a({},e,{colorModel:te}))},e.HsvStringColorPicker=function(e){return o.default.createElement(Y,a({},e,{colorModel:oe}))},e.HsvaColorPicker=function(e){return o.default.createElement(J,a({},e,{colorModel:ee}))},e.HsvaStringColorPicker=function(e){return o.default.createElement(J,a({},e,{colorModel:re}))},e.RgbColorPicker=function(e){return o.default.createElement(Y,a({},e,{colorModel:le}))},e.RgbStringColorPicker=function(e){return o.default.createElement(Y,a({},e,{colorModel:ue}))},e.RgbaColorPicker=function(e){return o.default.createElement(J,a({},e,{colorModel:ae}))},e.RgbaStringColorPicker=function(e){return o.default.createElement(J,a({},e,{colorModel:ne}))},e.setNonce=function(e){A=e}});
//# sourceMappingURL=index.umd.js.map
