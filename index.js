// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,a.get),y&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var f=Math.floor;function p(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&(t=e.length,f(t)===t)&&e.length>=0&&e.length<=4294967295;var t}function y(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!p(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}function b(e){return"number"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString,d=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",g=_()?function(e){var t,r,n,o,i;if(null==e)return m.call(e);r=e[v],i=v,t=null!=(o=e)&&d.call(o,i);try{e[v]=void 0}catch(t){return m.call(e)}return n=m.call(e),t?e[v]=r:delete e[v],n}:function(e){return m.call(e)},h=Number,j=h.prototype.toString,S=_();function w(e){return"object"==typeof e&&(e instanceof h||(S?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Number]"===g(e)))}function O(e){return b(e)||w(e)}c(O,"isPrimitive",b),c(O,"isObject",w);var P=y(O.isPrimitive),T=y(O.isObject),E=y(O);return c(E,"primitives",P),c(E,"objects",T),E},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isNumberArray=t();
//# sourceMappingURL=index.js.map
