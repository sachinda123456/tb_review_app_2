parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cT7V":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var t=new Uint8Array(16);function o(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(t)}
},{}],"VlfT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;exports.default=e;
},{}],"Tknj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./regex.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){return"string"==typeof t&&e.default.test(t)}var u=r;exports.default=u;
},{"./regex.js":"VlfT"}],"Zh7j":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./validate.js"));function r(e){return e&&e.__esModule?e:{default:e}}for(var t=[],i=0;i<256;++i)t.push((i+256).toString(16).substr(1));function o(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(t[r[i+0]]+t[r[i+1]]+t[r[i+2]]+t[r[i+3]]+"-"+t[r[i+4]]+t[r[i+5]]+"-"+t[r[i+6]]+t[r[i+7]]+"-"+t[r[i+8]]+t[r[i+9]]+"-"+t[r[i+10]]+t[r[i+11]]+t[r[i+12]]+t[r[i+13]]+t[r[i+14]]+t[r[i+15]]).toLowerCase();if(!(0,e.default)(o))throw TypeError("Stringified UUID is invalid");return o}var u=o;exports.default=u;
},{"./validate.js":"Tknj"}],"nQZ2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r,s=o(require("./rng.js")),n=o(require("./stringify.js"));function o(e){return e&&e.__esModule?e:{default:e}}var u=0,t=0;function a(o,a,l){var d=a&&l||0,i=a||new Array(16),c=(o=o||{}).node||e,v=void 0!==o.clockseq?o.clockseq:r;if(null==c||null==v){var f=o.random||(o.rng||s.default)();null==c&&(c=e=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==v&&(v=r=16383&(f[6]<<8|f[7]))}var q=void 0!==o.msecs?o.msecs:Date.now(),m=void 0!==o.nsecs?o.nsecs:t+1,p=q-u+(m-t)/1e4;if(p<0&&void 0===o.clockseq&&(v=v+1&16383),(p<0||q>u)&&void 0===o.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=q,t=m,r=v;var w=(1e4*(268435455&(q+=122192928e5))+m)%4294967296;i[d++]=w>>>24&255,i[d++]=w>>>16&255,i[d++]=w>>>8&255,i[d++]=255&w;var _=q/4294967296*1e4&268435455;i[d++]=_>>>8&255,i[d++]=255&_,i[d++]=_>>>24&15|16,i[d++]=_>>>16&255,i[d++]=v>>>8|128,i[d++]=255&v;for(var g=0;g<6;++g)i[d+g]=c[g];return a||(0,n.default)(i)}var l=a;exports.default=l;
},{"./rng.js":"cT7V","./stringify.js":"Zh7j"}],"EHUk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./validate.js"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r){if(!(0,e.default)(r))throw TypeError("Invalid UUID");var t,s=new Uint8Array(16);return s[0]=(t=parseInt(r.slice(0,8),16))>>>24,s[1]=t>>>16&255,s[2]=t>>>8&255,s[3]=255&t,s[4]=(t=parseInt(r.slice(9,13),16))>>>8,s[5]=255&t,s[6]=(t=parseInt(r.slice(14,18),16))>>>8,s[7]=255&t,s[8]=(t=parseInt(r.slice(19,23),16))>>>8,s[9]=255&t,s[10]=(t=parseInt(r.slice(24,36),16))/1099511627776&255,s[11]=t/4294967296&255,s[12]=t>>>24&255,s[13]=t>>>16&255,s[14]=t>>>8&255,s[15]=255&t,s}var s=t;exports.default=s;
},{"./validate.js":"Tknj"}],"y1M0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.URL=exports.DNS=void 0,exports.default=s;var e=t(require("./stringify.js")),r=t(require("./parse.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){e=unescape(encodeURIComponent(e));for(var r=[],t=0;t<e.length;++t)r.push(e.charCodeAt(t));return r}var a="6ba7b810-9dad-11d1-80b4-00c04fd430c8";exports.DNS=a;var o="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function s(t,s,u){function i(t,a,o,i){if("string"==typeof t&&(t=n(t)),"string"==typeof a&&(a=(0,r.default)(a)),16!==a.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var d=new Uint8Array(16+t.length);if(d.set(a),d.set(t,a.length),(d=u(d))[6]=15&d[6]|s,d[8]=63&d[8]|128,o){i=i||0;for(var f=0;f<16;++f)o[i+f]=d[f];return o}return(0,e.default)(d)}try{i.name=t}catch(d){}return i.DNS=a,i.URL=o,i}exports.URL=o;
},{"./stringify.js":"Zh7j","./parse.js":"EHUk"}],"hNcK":[function(require,module,exports) {
"use strict";function n(n){if("string"==typeof n){var t=unescape(encodeURIComponent(n));n=new Uint8Array(t.length);for(var o=0;o<t.length;++o)n[o]=t.charCodeAt(o)}return r(e(u(n),8*n.length))}function r(n){for(var r=[],t=32*n.length,e=0;e<t;e+=8){var u=n[e>>5]>>>e%32&255,o=parseInt("0123456789abcdef".charAt(u>>>4&15)+"0123456789abcdef".charAt(15&u),16);r.push(o)}return r}function t(n){return 14+(n+64>>>9<<4)+1}function e(n,r){n[r>>5]|=128<<r%32,n[t(r)-1]=r;for(var e=1732584193,u=-271733879,f=-1732584194,a=271733878,v=0;v<n.length;v+=16){var s=e,d=u,p=f,g=a;e=c(e,u,f,a,n[v],7,-680876936),a=c(a,e,u,f,n[v+1],12,-389564586),f=c(f,a,e,u,n[v+2],17,606105819),u=c(u,f,a,e,n[v+3],22,-1044525330),e=c(e,u,f,a,n[v+4],7,-176418897),a=c(a,e,u,f,n[v+5],12,1200080426),f=c(f,a,e,u,n[v+6],17,-1473231341),u=c(u,f,a,e,n[v+7],22,-45705983),e=c(e,u,f,a,n[v+8],7,1770035416),a=c(a,e,u,f,n[v+9],12,-1958414417),f=c(f,a,e,u,n[v+10],17,-42063),u=c(u,f,a,e,n[v+11],22,-1990404162),e=c(e,u,f,a,n[v+12],7,1804603682),a=c(a,e,u,f,n[v+13],12,-40341101),f=c(f,a,e,u,n[v+14],17,-1502002290),e=i(e,u=c(u,f,a,e,n[v+15],22,1236535329),f,a,n[v+1],5,-165796510),a=i(a,e,u,f,n[v+6],9,-1069501632),f=i(f,a,e,u,n[v+11],14,643717713),u=i(u,f,a,e,n[v],20,-373897302),e=i(e,u,f,a,n[v+5],5,-701558691),a=i(a,e,u,f,n[v+10],9,38016083),f=i(f,a,e,u,n[v+15],14,-660478335),u=i(u,f,a,e,n[v+4],20,-405537848),e=i(e,u,f,a,n[v+9],5,568446438),a=i(a,e,u,f,n[v+14],9,-1019803690),f=i(f,a,e,u,n[v+3],14,-187363961),u=i(u,f,a,e,n[v+8],20,1163531501),e=i(e,u,f,a,n[v+13],5,-1444681467),a=i(a,e,u,f,n[v+2],9,-51403784),f=i(f,a,e,u,n[v+7],14,1735328473),e=h(e,u=i(u,f,a,e,n[v+12],20,-1926607734),f,a,n[v+5],4,-378558),a=h(a,e,u,f,n[v+8],11,-2022574463),f=h(f,a,e,u,n[v+11],16,1839030562),u=h(u,f,a,e,n[v+14],23,-35309556),e=h(e,u,f,a,n[v+1],4,-1530992060),a=h(a,e,u,f,n[v+4],11,1272893353),f=h(f,a,e,u,n[v+7],16,-155497632),u=h(u,f,a,e,n[v+10],23,-1094730640),e=h(e,u,f,a,n[v+13],4,681279174),a=h(a,e,u,f,n[v],11,-358537222),f=h(f,a,e,u,n[v+3],16,-722521979),u=h(u,f,a,e,n[v+6],23,76029189),e=h(e,u,f,a,n[v+9],4,-640364487),a=h(a,e,u,f,n[v+12],11,-421815835),f=h(f,a,e,u,n[v+15],16,530742520),e=l(e,u=h(u,f,a,e,n[v+2],23,-995338651),f,a,n[v],6,-198630844),a=l(a,e,u,f,n[v+7],10,1126891415),f=l(f,a,e,u,n[v+14],15,-1416354905),u=l(u,f,a,e,n[v+5],21,-57434055),e=l(e,u,f,a,n[v+12],6,1700485571),a=l(a,e,u,f,n[v+3],10,-1894986606),f=l(f,a,e,u,n[v+10],15,-1051523),u=l(u,f,a,e,n[v+1],21,-2054922799),e=l(e,u,f,a,n[v+8],6,1873313359),a=l(a,e,u,f,n[v+15],10,-30611744),f=l(f,a,e,u,n[v+6],15,-1560198380),u=l(u,f,a,e,n[v+13],21,1309151649),e=l(e,u,f,a,n[v+4],6,-145523070),a=l(a,e,u,f,n[v+11],10,-1120210379),f=l(f,a,e,u,n[v+2],15,718787259),u=l(u,f,a,e,n[v+9],21,-343485551),e=o(e,s),u=o(u,d),f=o(f,p),a=o(a,g)}return[e,u,f,a]}function u(n){if(0===n.length)return[];for(var r=8*n.length,e=new Uint32Array(t(r)),u=0;u<r;u+=8)e[u>>5]|=(255&n[u/8])<<u%32;return e}function o(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function f(n,r){return n<<r|n>>>32-r}function a(n,r,t,e,u,a){return o(f(o(o(r,n),o(e,a)),u),t)}function c(n,r,t,e,u,o,f){return a(r&t|~r&e,n,r,u,o,f)}function i(n,r,t,e,u,o,f){return a(r&e|t&~e,n,r,u,o,f)}function h(n,r,t,e,u,o,f){return a(r^t^e,n,r,u,o,f)}function l(n,r,t,e,u,o,f){return a(t^(r|~e),n,r,u,o,f)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var v=n;exports.default=v;
},{}],"DhOM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./v35.js")),r=t(require("./md5.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.default)("v3",48,r.default),d=u;exports.default=d;
},{"./v35.js":"y1M0","./md5.js":"hNcK"}],"hVBO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./rng.js")),r=t(require("./stringify.js"));function t(e){return e&&e.__esModule?e:{default:e}}function u(t,u,n){var a=(t=t||{}).random||(t.rng||e.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,u){n=n||0;for(var f=0;f<16;++f)u[n+f]=a[f];return u}return(0,r.default)(a)}var n=u;exports.default=n;
},{"./rng.js":"cT7V","./stringify.js":"Zh7j"}],"PBRp":[function(require,module,exports) {
"use strict";function r(r,e,t,a){switch(r){case 0:return e&t^~e&a;case 1:return e^t^a;case 2:return e&t^e&a^t&a;case 3:return e^t^a}}function e(r,e){return r<<e|r>>>32-e}function t(t){var a=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var s=0;s<n.length;++s)t.push(n.charCodeAt(s))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var f=t.length/4+2,u=Math.ceil(f/16),c=new Array(u),l=0;l<u;++l){for(var i=new Uint32Array(16),v=0;v<16;++v)i[v]=t[64*l+4*v]<<24|t[64*l+4*v+1]<<16|t[64*l+4*v+2]<<8|t[64*l+4*v+3];c[l]=i}c[u-1][14]=8*(t.length-1)/Math.pow(2,32),c[u-1][14]=Math.floor(c[u-1][14]),c[u-1][15]=8*(t.length-1)&4294967295;for(var h=0;h<u;++h){for(var p=new Uint32Array(80),y=0;y<16;++y)p[y]=c[h][y];for(var d=16;d<80;++d)p[d]=e(p[d-3]^p[d-8]^p[d-14]^p[d-16],1);for(var A=o[0],g=o[1],w=o[2],M=o[3],x=o[4],U=0;U<80;++U){var C=Math.floor(U/20),_=e(A,5)+r(C,g,w,M)+x+a[C]+p[U]>>>0;x=M,M=w,w=e(g,30)>>>0,g=A,A=_}o[0]=o[0]+A>>>0,o[1]=o[1]+g>>>0,o[2]=o[2]+w>>>0,o[3]=o[3]+M>>>0,o[4]=o[4]+x>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=t;exports.default=a;
},{}],"UVmZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./v35.js")),r=t(require("./sha1.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.default)("v5",80,r.default),s=u;exports.default=s;
},{"./v35.js":"y1M0","./sha1.js":"PBRp"}],"jae2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e="00000000-0000-0000-0000-000000000000";exports.default=e;
},{}],"SVu6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./validate.js"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r){if(!(0,e.default)(r))throw TypeError("Invalid UUID");return parseInt(r.substr(14,1),16)}var u=t;exports.default=u;
},{"./validate.js":"Tknj"}],"Lz3t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"NIL",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"parse",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(exports,"stringify",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(exports,"v1",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"v4",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"v5",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"validate",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"version",{enumerable:!0,get:function(){return i.default}});var e=a(require("./v1.js")),r=a(require("./v3.js")),t=a(require("./v4.js")),n=a(require("./v5.js")),u=a(require("./nil.js")),i=a(require("./version.js")),o=a(require("./validate.js")),f=a(require("./stringify.js")),s=a(require("./parse.js"));function a(e){return e&&e.__esModule?e:{default:e}}
},{"./v1.js":"nQZ2","./v3.js":"DhOM","./v4.js":"hVBO","./v5.js":"UVmZ","./nil.js":"jae2","./version.js":"SVu6","./validate.js":"Tknj","./stringify.js":"Zh7j","./parse.js":"EHUk"}],"Svf4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TBAPI=void 0;var t=function(){function t(t,e){this.tbCommunication=t,this.ctx=e}return t.prototype.reRender=function(){this.tbCommunication.request({cmd:"get",type:"re-render",body:{context:this.ctx}},function(t){})},t.prototype.alert=function(t){var e=this;return new Promise(function(o,n){e.tbCommunication.request({cmd:"get",type:"alert-modal",body:{msg:t,context:e.ctx}},function(t){200===t.response.status?o(!0):o(!1)})})},t.prototype.webView=function(t,e){var o=this;return new Promise(function(n,r){o.tbCommunication.request({cmd:"get",type:"web-view-modal",body:{title:t,url:e,context:o.ctx}},function(t){n()})})},t.prototype.closeWebView=function(){var t=this;return new Promise(function(e,o){t.tbCommunication.request({cmd:"set",type:"close-web-view-modal",body:{context:t.ctx}},function(t){e()})})},t.prototype.linkTo=function(t){var e=this;return new Promise(function(o,n){e.tbCommunication.request({cmd:"get",type:"link-to-url",body:{url:t,context:e.ctx}},function(t){o()})})},t.prototype.postInChat=function(t,e){var o=this;return new Promise(function(n,r){o.tbCommunication.request({cmd:"set",type:"post-in-chat",body:{channelId:t,msg:e,context:o.ctx}},function(t){200===t.response.status?n(t.response.body):r("Could not post chat msg")})})},t.prototype.getActiveContextInformation=function(t){var e=this;return new Promise(function(o,n){e.tbCommunication.request({cmd:"get",type:"active-"+t,body:{context:e.ctx}},function(e){200===e.response.status?o(e.response.body):n("Could not get active "+t)})})},t.prototype.activeAccount=function(){return this.getActiveContextInformation("account")},t.prototype.activeUser=function(){return this.getActiveContextInformation("user")},t.prototype.activeJob=function(){return this.getActiveContextInformation("job")},t.prototype.activeChecklist=function(){return this.getActiveContextInformation("checklist")},t.prototype.activeClient=function(){return this.getActiveContextInformation("client")},t.prototype.activeSite=function(){return this.getActiveContextInformation("site")},t.prototype.getResource=function(t,e){var o=this;return new Promise(function(n,r){var i={};i[t+"_id"]=e,o.tbCommunication.request({cmd:"get",type:"resource-"+t,body:i},function(e){200===e.response.status?n(e.response.body):r("Could not get "+t)})})},t.prototype.getUser=function(t){return this.getResource("user",t)},t.prototype.getJob=function(t){return this.getResource("job",t)},t.prototype.getStorage=function(t,e,o,n){var r=this;return new Promise(function(i,c){r.tbCommunication.request({cmd:"get",type:"storage",body:{context:r.ctx,type:t,resourceId:e,key:o,availableTo:n}},function(r){200===r.response.status?i(JSON.parse(r.response.body.data)):c("Could not get storage for "+t+", "+e+", "+o+", "+n)})})},t.prototype.setStorage=function(t,e,o,n,r){var i=this;return new Promise(function(c,s){i.tbCommunication.request({cmd:"set",type:"storage",body:{context:i.ctx,type:t,resourceId:e,key:o,availableTo:n,data:JSON.stringify(r)}},function(r){200===r.response.status?c():s("Could not set storage for "+t+", "+e+", "+o+", "+n)})})},t}();exports.TBAPI=t;
},{}],"TXGN":[function(require,module,exports) {
"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},e=this&&this.__awaiter||function(n,e,t,i){return new(t||(t=Promise))(function(o,a){function r(n){try{d(i.next(n))}catch(e){a(e)}}function s(n){try{d(i.throw(n))}catch(e){a(e)}}function d(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t(function(n){n(e)})).then(r,s)}d((i=i.apply(n,e||[])).next())})},t=this&&this.__generator||function(n,e){var t,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(n,r)}catch(s){a=[6,s],i=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},i=this&&this.__spreadArray||function(n,e,t){if(t||2===arguments.length)for(var i,o=0,a=e.length;o<a;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return n.concat(i||Array.prototype.slice.call(e))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TBInitIframe=exports.TBInitAddOn=exports.TBAddOnCommunicationAPI=exports.TBAPI=void 0;var o=require("uuid"),a=require("./tb-api");Object.defineProperty(exports,"TBAPI",{enumerable:!0,get:function(){return a.TBAPI}});var r,s=require("./tb-api"),d=null,c=null,u=!1,f=function(){function e(){this.isInitialized=!1,this.onClickListeners=[],this.onChangeListeners=[]}return e.prototype.requestProcessor=function(e,t){var o=this,a=function(n){t({status:400,body:{msg:n}})};if(this.config){switch(e.data.type){case"render":return"get"!==e.data.cmd?void a("cannot set render"):void function(){if(o.config)if("render"===e.data.type){var n=o.config.impressions.find(function(n){return"render"===e.data.type&&n.name===e.data.body.name});n?n.renderFunc(new s.TBAPI(o,e.data.body.context)).then(function(e){e.objects.forEach(function(e){var t;"button"===e.type&&e.onClick&&((t=o.onClickListeners.find(function(t){return t.id===e.id&&t.name===n.name}))?t.onClick=e.onClick:o.onClickListeners=i(i([],o.onClickListeners,!0),[{id:e.id,name:n.name,onClick:e.onClick}],!1)),e.onChange&&((t=o.onChangeListeners.find(function(t){return t.id===e.id&&t.name===n.name}))?t.onChange=e.onChange:o.onChangeListeners=i(i([],o.onChangeListeners,!0),[{id:e.id,name:n.name,onChange:e.onChange}],!1))}),t({status:200,body:e})}).catch(function(n){a(JSON.stringify(n))}):t({status:404,body:{msg:"Not found"}})}else a("Cannot handle invalid render request");else a("Add-on, not initialized")}();case"config":return"get"!==e.data.cmd?void a("cannot set config"):void(o.config?t({body:n(n({},o.config),{impressions:o.config.impressions.map(function(n){return{name:n.name}})}),status:200}):a("Add-on, missing configuration"));case"css":return"set"!==e.data.cmd?void a("cannot get css"):void function(){var n;if(o.config){if(null===(n=e.data.body)||void 0===n?void 0:n.css){var i=document.createElement("style");i.innerHTML=e.data.body.css;var r=document.querySelector("script");r&&r.parentNode&&r.parentNode.insertBefore(i,r)}t({body:{msg:"done"},status:200})}else a("Add-on, missing configuration")}();case"onClick":return"get"!==e.data.cmd?void a("cannot set onClick"):void function(){if(o.config)if("onClick"!==e.data.type||"string"!=typeof e.data.body.name&&"string"!=typeof e.data.body.id)a("Cannot handle invalid onClick request");else{var n=o.onClickListeners.find(function(n){return"onClick"===e.data.type&&n.id===e.data.body.id&&n.name===e.data.body.name});n?n.onClick(new s.TBAPI(o,e.data.body.context)).then(function(){t({status:200,body:{msg:"done"}})}).catch(function(n){a(JSON.stringify(n))}):t({status:404,body:{msg:"OnClick handler not found"}})}else a("Add-on, not initialized")}();case"onChange":return"get"!==e.data.cmd?void a("cannot set onChange"):void function(){if(o.config)if("onChange"!==e.data.type||"string"==typeof e.data.body.name||"string"==typeof e.data.body.id){var n=o.onChangeListeners.find(function(n){return"onChange"===e.data.type&&n.id===e.data.body.id&&n.name===e.data.body.name});n?n.onChange(new s.TBAPI(o,e.data.body.context),e.data.body.value).then(function(){t({status:200,body:{msg:"done"}})}).catch(function(n){a(JSON.stringify(n))}):t({status:404,body:{msg:"OnChange handler not found"}})}else a("Cannot handle invalid onChange request");else a("Add-on, not initialized")}()}a("Could not process command")}else a("Add-on, not initialized")},e.prototype.initialize=function(n,e){var t=this;this.config=n,this.listen("",this.requestProcessor.bind(this)),this.untilLoaded(function(){t.isInitialized=!0,e()})},e.prototype.untilLoaded=function(n){var e=this;u?n():setTimeout(function(){e.untilLoaded(n)},300)},e.prototype.request=function(n,e){window._sendTBMessage(void 0,n).then(function(n){e(n)}).catch(function(n){})},e.prototype.listen=function(n,e){r=e},e}();exports.TBAddOnCommunicationAPI=f;var l=function(n,e,t){var i,o,a,r,s=null,d="",c="unknown";switch(typeof n){case"string":try{(null===(i=s=JSON.parse(n))||void 0===i?void 0:i.id)?c="add_on_request":(null===(a=null===(o=s)||void 0===o?void 0:o.request)||void 0===a?void 0:a.id)&&(null===(r=s)||void 0===r?void 0:r.response)&&(c="add_on_response")}catch(u){d=n}break;case"object":s=n}return{objVal:s,strVal:d,type:c,source:e,origin:t}},p=[],g=function(n){if("unknown"!==n.type&&n.objVal)if("add_on_request"===n.type){var e=n.objVal;if("welcome-msg"===e.id)return u=!0,d=n.source,c=n.origin,void window._sendTBMessage(e,{msg:"thanks"});r&&r(e,function(n){window._sendTBMessage(e,n)})}else if("add_on_response"===n.type){var t=p.find(function(e){return e.mid===n.objVal.request.id});t&&(p=p.filter(function(e){return e.mid!==n.objVal.request.id}),t.callback(n))}};window.addEventListener("message",function(n){var e=l(n.data,n.source,n.origin);g(e)},!1),window._sendTBMessage=function(n,e){return new Promise(function(t,a){if(u)if(n){if(n){var r={request:n,response:e};window.tbPostMessage?window.tbPostMessage(r):d.postMessage(JSON.stringify(r),c),t(!0)}}else{var s={id:(0,o.v4)(),data:e};p=i(i([],p,!0),[{mid:s.id,callback:function(n){t(n.objVal)}}],!1),window.tbPostMessage?window.tbPostMessage(s):d.postMessage(JSON.stringify(s),c)}else a(!1)})};var y=function(n){(new f).initialize(n,function(){})};exports.TBInitAddOn=y,window.TaskbuddyInitAddOn=exports.TBInitAddOn;var h=function(n,i,o){(new f).initialize({id:n+"-"+i,impressions:[{name:"tb-add-on-iframe",renderFunc:function(n){return e(void 0,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,o(n)];case 1:return e.sent(),[2,{objects:[]}]}})})}}],name:"tb-iframe"},function(){})};exports.TBInitIframe=h,window.TaskbuddyInitIframe=exports.TBInitIframe;
},{"uuid":"Lz3t","./tb-api":"Svf4"}],"WN0s":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}u((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(c){o=[6,c],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@taskbuddy/add-on");(0,n.TBInitIframe)("c5ndeu59aacjmf4ksd30","modal-web-view",function(n){return e(void 0,void 0,void 0,function(){return t(this,function(e){return[2,n.activeUser().then(function(e){n.getStorage("account",e.account_id,"job-reviews","all").then(function(e){if(e){var t=document.getElementById("container");e.reviewedJobs.forEach(function(e){var r=document.createElement("div");r.className="reviewcontainer";var a=document.createElement("p");a.textContent='The job "'+e.id+'" was rated ',n.getJob(e.id).then(function(e){a.textContent='The job "'+e.name+'" was rated '});var o=document.createElement("img");o.src="https://taskbuddy-add-on-example.netlify.app/"+e.rating+".png",o.style.height="2rem;";var i=document.createElement("p");i.textContent=' by user "'+e.u_id+'"',n.getUser(e.u_id).then(function(e){i.textContent=' by user "'+e.given_name+" "+e.family_name+'"'});var c=document.createElement("a");c.textContent="See review",c.onclick=function(){r.removeChild(c);var t=document.createElement("div");t.className="morediv";var a=document.createElement("p"),o=document.createElement("p");n.getStorage("job",e.id,"job-review","all").then(function(e){a.textContent=e.title,o.textContent=e.description}),t.appendChild(a),t.appendChild(o),r.appendChild(t)},r.appendChild(a),r.appendChild(o),r.appendChild(i),r.appendChild(c),null==t||t.appendChild(r)})}})})]})})});
},{"@taskbuddy/add-on":"TXGN"}]},{},["WN0s"], null)
//# sourceMappingURL=/all-feedback.6e1261ac.js.map