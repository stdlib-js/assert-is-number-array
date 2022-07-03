// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,a=n.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&u&&u.call(e,t,r.set),e};function f(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=Math.floor;function y(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&(t=e.length,p(t)===t)&&e.length>=0&&e.length<=4294967295;var t}function b(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!y(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}function s(e){return"number"==typeof e}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return _&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString,v=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",j=d()?function(e){var t,r,n,o,i;if(null==e)return m.call(e);r=e[g],i=g,t=null!=(o=e)&&v.call(o,i);try{e[g]=void 0}catch(t){return m.call(e)}return n=m.call(e),t?e[g]=r:delete e[g],n}:function(e){return m.call(e)},h=Number,S=h.prototype.toString,w=d();function O(e){return"object"==typeof e&&(e instanceof h||(w?function(e){try{return S.call(e),!0}catch(e){return!1}}(e):"[object Number]"===j(e)))}function P(e){return s(e)||O(e)}f(P,"isPrimitive",s),f(P,"isObject",O);var T=b(P.isPrimitive),x=b(P.isObject),E=b(P);f(E,"primitives",T),f(E,"objects",x),e.default=E,e.objects=x,e.primitives=T,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isNumberArray={});
//# sourceMappingURL=index.js.map
