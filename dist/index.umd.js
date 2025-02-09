!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],r):r((e||self)["react-colorful"]={},e.react)}(this,function(e,r){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/t(r);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(null,arguments)}function n(e,r){if(null==e)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(r.includes(o))continue;t[o]=e[o]}return t}function l(e){var t=r.useRef(e),o=r.useRef(function(e){t.current&&t.current(e)});return t.current=e,o.current}var u=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},c=["onMove","onKey"],i=function(e,r,t){var o=e.getBoundingClientRect(),a=r;return{left:u((a.pageX-(o.left+window.scrollX))/o.width),top:u((a.pageY-(o.top+window.scrollY))/o.height)}},f=function(e){e.preventDefault()},s=o.default.memo(function(e){var t=e.onMove,u=e.onKey,s=n(e,c),d=r.useRef(null),v=l(t),h=l(u);r.useRef(null);var m=r.useRef(!1),g=r.useMemo(function(){var e=function(e){f(e),e.buttons>0&&d.current?v(i(d.current,e)):r(!1)};function r(r){r?window.addEventListener("mousemove",e):window.removeEventListener("mousemove",e)}return[function(e){var t=e.nativeEvent,o=d.current;o&&(f(t),!function(e,r){return r&&!0}(0,m.current)&&o&&(o.focus(),v(i(o,t)),r(!0)))},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),h({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},r]},[h,v]),p=g[0],b=g[1],_=g[2];return r.useEffect(function(){return _},[_]),/*#__PURE__*/o.default.createElement("div",a({},s,{onMouseDown:p,className:"react-colorful__interactive",ref:d,onKeyDown:b,tabIndex:0,role:"slider"}))}),d=function(e){return e.filter(Boolean).join(" ")},v=function(e){var r=e.color,t=e.left,a=e.top,n=void 0===a?.5:a,l=d(["react-colorful__pointer",e.className]);/*#__PURE__*/return o.default.createElement("div",{className:l,style:{top:100*n+"%",left:100*t+"%"}},/*#__PURE__*/o.default.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},h=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},m={grad:.9,turn:360,rad:360/(2*Math.PI)},g=function(e){return S(p(e))},p=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?h(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?h(parseInt(e.substring(6,8),16)/255,2):1}},b=function(e,r){return void 0===r&&(r="deg"),Number(e)*(m[r]||1)},_=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?E({h:b(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},C=_,E=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},H=function(e){return I(N(e))},x=function(e){var r=e.s,t=e.v,o=e.a,a=(200-r)*t/100;return{h:h(e.h),s:h(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:h(a/2),a:h(o,2)}},w=function(e){var r=x(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},M=function(e){var r=x(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},N=function(e){var r=e.h,t=e.s,o=e.v,a=e.a;r=r/360*6,t/=100,o/=100;var n=Math.floor(r),l=o*(1-t),u=o*(1-(r-n)*t),c=o*(1-(1-r+n)*t),i=n%6;return{r:h(255*[o,u,l,l,c,o][i]),g:h(255*[c,o,o,u,l,l][i]),b:h(255*[l,l,c,o,o,u][i]),a:h(a,2)}},k=function(e){var r=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?j({h:b(r[1],r[2]),s:Number(r[3]),v:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},y=k,q=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?S({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},P=q,R=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},I=function(e){var r=e.r,t=e.g,o=e.b,a=e.a,n=a<1?R(h(255*a)):"";return"#"+R(r)+R(t)+R(o)+n},S=function(e){var r=e.r,t=e.g,o=e.b,a=e.a,n=Math.max(r,t,o),l=n-Math.min(r,t,o),u=l?n===r?(t-o)/l:n===t?2+(o-r)/l:4+(r-t)/l:0;return{h:h(60*(u<0?u+6:u)),s:h(n?l/n*100:0),v:h(n/255*100),a:a}},j=function(e){return{h:h(e.h),s:h(e.s),v:h(e.v),a:h(e.a,2)}},z=o.default.memo(function(e){var r=e.hue,t=e.onChange,a=d(["react-colorful__hue",e.className]);/*#__PURE__*/return o.default.createElement("div",{className:a},/*#__PURE__*/o.default.createElement(s,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:u(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":h(r),"aria-valuemax":"360","aria-valuemin":"0"},/*#__PURE__*/o.default.createElement(v,{className:"react-colorful__hue-pointer",left:r/360,color:w({h:r,s:100,v:100,a:1})})))}),O=o.default.memo(function(e){var r=e.hsva,t=e.onChange,a={backgroundColor:w({h:r.h,s:100,v:100,a:1})};/*#__PURE__*/return o.default.createElement("div",{className:"react-colorful__saturation",style:a},/*#__PURE__*/o.default.createElement(s,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:u(r.s+100*e.left,0,100),v:u(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+h(r.s)+"%, Brightness "+h(r.v)+"%"},/*#__PURE__*/o.default.createElement(v,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:w(r)})))}),B=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},K=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},L=function(e,r){return e.toLowerCase()===r.toLowerCase()||B(p(e),p(r))};function A(e,t,o){var a=l(o),n=r.useState(function(){return e.toHsva(t)}),u=n[0],c=n[1],i=r.useRef({color:t,hsva:u});r.useEffect(function(){if(!e.equal(t,i.current.color)){var r=e.toHsva(t);i.current={hsva:r,color:t},c(r)}},[t,e]),r.useEffect(function(){var r;B(u,i.current.hsva)||e.equal(r=e.fromHsva(u),i.current.color)||(i.current={hsva:u,color:r},a(r))},[u,e,a]);var f=r.useCallback(function(e){c(function(r){return Object.assign({},r,e)})},[]);return[u,f]}var D,T="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,F=function(){return D||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},X=new Map,Y=function(e,r){T(function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!X.has(t)){var o=t.createElement("style");o.innerHTML='.react-colorful{cursor:default;display:flex;flex-direction:column;height:200px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:200px}.react-colorful__saturation{background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0));border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;flex-grow:1;position:relative}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{border-radius:inherit;bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{height:24px;position:relative}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{border-radius:inherit;bottom:0;left:0;outline:none;position:absolute;right:0;top:0;touch-action:none}.react-colorful__pointer{background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);box-sizing:border-box;height:28px;position:absolute;transform:translate(-50%,-50%);width:28px;z-index:1}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',X.set(t,o);var a=F();a&&o.setAttribute("nonce",a),r?r.prepend(o):t.head.appendChild(o)}},[])},$=["className","colorModel","color","onChange","root"],G=function(e){var t=e.className,l=e.colorModel,u=e.color,c=void 0===u?l.defaultColor:u,i=e.onChange,f=e.root,s=n(e,$),v=r.useRef(null);Y(v,f);var h=A(l,c,i),m=h[0],g=h[1],p=d(["react-colorful",t]);/*#__PURE__*/return o.default.createElement("div",a({},s,{ref:v,className:p}),/*#__PURE__*/o.default.createElement(O,{hsva:m,onChange:g}),/*#__PURE__*/o.default.createElement(z,{hue:m.h,onChange:g,className:"react-colorful__last-control"}))},J={defaultColor:"000",toHsva:g,fromHsva:function(e){return H({h:e.h,s:e.s,v:e.v,a:1})},equal:L},Q=function(e){var r=e.className,t=e.hsva,a=e.onChange,n={backgroundImage:"linear-gradient(90deg, "+M(Object.assign({},t,{a:0}))+", "+M(Object.assign({},t,{a:1}))+")"},l=d(["react-colorful__alpha",r]),c=h(100*t.a);/*#__PURE__*/return o.default.createElement("div",{className:l},/*#__PURE__*/o.default.createElement("div",{className:"react-colorful__alpha-gradient",style:n}),/*#__PURE__*/o.default.createElement(s,{onMove:function(e){a({a:e.left})},onKey:function(e){a({a:u(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":c+"%","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":"100"},/*#__PURE__*/o.default.createElement(v,{className:"react-colorful__alpha-pointer",left:t.a,color:M(t)})))},U=["className","colorModel","color","onChange","root"],V=function(e){var t=e.className,l=e.colorModel,u=e.color,c=void 0===u?l.defaultColor:u,i=e.onChange,f=e.root,s=n(e,U),v=r.useRef(null);Y(v,f);var h=A(l,c,i),m=h[0],g=h[1],p=d(["react-colorful",t]);/*#__PURE__*/return o.default.createElement("div",a({},s,{ref:v,className:p}),/*#__PURE__*/o.default.createElement(O,{hsva:m,onChange:g}),/*#__PURE__*/o.default.createElement(z,{hue:m.h,onChange:g}),/*#__PURE__*/o.default.createElement(Q,{hsva:m,onChange:g,className:"react-colorful__last-control"}))},W={defaultColor:"0001",toHsva:g,fromHsva:H,equal:L},Z={defaultColor:{h:0,s:0,l:0,a:1},toHsva:E,fromHsva:x,equal:B},ee={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:_,fromHsva:M,equal:K},re={defaultColor:{h:0,s:0,l:0},toHsva:function(e){return E({h:e.h,s:e.s,l:e.l,a:1})},fromHsva:function(e){return{h:(r=x(e)).h,s:r.s,l:r.l};var r},equal:B},te={defaultColor:"hsl(0, 0%, 0%)",toHsva:C,fromHsva:w,equal:K},oe={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(e){return e},fromHsva:j,equal:B},ae={defaultColor:"hsva(0, 0%, 0%, 1)",toHsva:k,fromHsva:function(e){var r=j(e);return"hsva("+r.h+", "+r.s+"%, "+r.v+"%, "+r.a+")"},equal:K},ne={defaultColor:{h:0,s:0,v:0},toHsva:function(e){return{h:e.h,s:e.s,v:e.v,a:1}},fromHsva:function(e){var r=j(e);return{h:r.h,s:r.s,v:r.v}},equal:B},le={defaultColor:"hsv(0, 0%, 0%)",toHsva:y,fromHsva:function(e){var r=j(e);return"hsv("+r.h+", "+r.s+"%, "+r.v+"%)"},equal:K},ue={defaultColor:{r:0,g:0,b:0,a:1},toHsva:S,fromHsva:N,equal:B},ce={defaultColor:"rgba(0, 0, 0, 1)",toHsva:q,fromHsva:function(e){var r=N(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:K},ie={defaultColor:{r:0,g:0,b:0},toHsva:function(e){return S({r:e.r,g:e.g,b:e.b,a:1})},fromHsva:function(e){return{r:(r=N(e)).r,g:r.g,b:r.b};var r},equal:B},fe={defaultColor:"rgb(0, 0, 0)",toHsva:P,fromHsva:function(e){var r=N(e);return"rgb("+r.r+", "+r.g+", "+r.b+")"},equal:K},se=/^#?([0-9A-F]{3,8})$/i,de=["color","onChange","onBlur","escape","validate","format","process"],ve=function(e){var t=e.color,u=void 0===t?"":t,c=e.onChange,i=e.onBlur,f=e.escape,s=e.validate,d=e.format,v=e.process,h=n(e,de),m=r.useState(function(){return f(u)}),g=m[0],p=m[1],b=l(c),_=l(i),C=r.useCallback(function(e){var r=f(e.target.value);p(r),s(r)&&b(v?v(r):r)},[f,v,s,b]),E=r.useCallback(function(e){s(e.target.value)||p(f(u)),_(e)},[u,f,s,_]);return r.useEffect(function(){p(f(u))},[u,f]),/*#__PURE__*/o.default.createElement("input",a({},h,{value:d?d(g):g,spellCheck:"false",onChange:C,onBlur:E}))},he=["prefixed","alpha"],me=function(e){return"#"+e};e.HexAlphaColorPicker=function(e){/*#__PURE__*/return o.default.createElement(V,a({},e,{colorModel:W}))},e.HexColorInput=function(e){var t=e.prefixed,l=e.alpha,u=n(e,he),c=r.useCallback(function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,l?8:6)},[l]),i=r.useCallback(function(e){return function(e,r){var t=se.exec(e),o=t?t[1].length:0;return 3===o||6===o||!!r&&4===o||!!r&&8===o}(e,l)},[l]);/*#__PURE__*/return o.default.createElement(ve,a({},u,{escape:c,format:t?me:void 0,process:me,validate:i}))},e.HexColorPicker=function(e){/*#__PURE__*/return o.default.createElement(G,a({},e,{colorModel:J}))},e.HslColorPicker=function(e){/*#__PURE__*/return o.default.createElement(G,a({},e,{colorModel:re}))},e.HslStringColorPicker=function(e){/*#__PURE__*/return o.default.createElement(G,a({},e,{colorModel:te}))},e.HslaColorPicker=function(e){/*#__PURE__*/return o.default.createElement(V,a({},e,{colorModel:Z}))},e.HslaStringColorPicker=function(e){/*#__PURE__*/return o.default.createElement(V,a({},e,{colorModel:ee}))},e.HsvColorPicker=function(e){/*#__PURE__*/return o.default.createElement(G,a({},e,{colorModel:ne}))},e.HsvStringColorPicker=function(e){/*#__PURE__*/return o.default.createElement(G,a({},e,{colorModel:le}))},e.HsvaColorPicker=function(e){/*#__PURE__*/return o.default.createElement(V,a({},e,{colorModel:oe}))},e.HsvaStringColorPicker=function(e){/*#__PURE__*/return o.default.createElement(V,a({},e,{colorModel:ae}))},e.RgbColorPicker=function(e){/*#__PURE__*/return o.default.createElement(G,a({},e,{colorModel:ie}))},e.RgbStringColorPicker=function(e){/*#__PURE__*/return o.default.createElement(G,a({},e,{colorModel:fe}))},e.RgbaColorPicker=function(e){/*#__PURE__*/return o.default.createElement(V,a({},e,{colorModel:ue}))},e.RgbaStringColorPicker=function(e){/*#__PURE__*/return o.default.createElement(V,a({},e,{colorModel:ce}))},e.setNonce=function(e){D=e}});
//# sourceMappingURL=index.umd.js.map
