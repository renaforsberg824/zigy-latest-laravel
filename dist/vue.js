!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).ZiggyVue={})}(this,function(t){var e=Object.prototype.hasOwnProperty,r=Array.isArray,n=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),i=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},o={arrayToObject:i,assign:function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],i=0;i<e.length;++i)for(var o=e[i],u=o.obj[o.prop],f=Object.keys(u),s=0;s<f.length;++s){var a=f[s],c=u[a];"object"==typeof c&&null!==c&&-1===n.indexOf(c)&&(e.push({obj:u,prop:a}),n.push(c))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(r(n)){for(var i=[],o=0;o<n.length;++o)void 0!==n[o]&&i.push(n[o]);e.obj[e.prop]=i}}}(e),t},decode:function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,e,r){if(0===t.length)return t;var i=t;if("symbol"==typeof t?i=Symbol.prototype.toString.call(t):"string"!=typeof t&&(i=String(t)),"iso-8859-1"===r)return escape(i).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",u=0;u<i.length;++u){var f=i.charCodeAt(u);45===f||46===f||95===f||126===f||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122?o+=i.charAt(u):f<128?o+=n[f]:f<2048?o+=n[192|f>>6]+n[128|63&f]:f<55296||f>=57344?o+=n[224|f>>12]+n[128|f>>6&63]+n[128|63&f]:(f=65536+((1023&f)<<10|1023&i.charCodeAt(u+=1)),o+=n[240|f>>18]+n[128|f>>12&63]+n[128|f>>6&63]+n[128|63&f])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,e){if(r(t)){for(var n=[],i=0;i<t.length;i+=1)n.push(e(t[i]));return n}return e(t)},merge:function t(n,o,u){if(!o)return n;if("object"!=typeof o){if(r(n))n.push(o);else{if(!n||"object"!=typeof n)return[n,o];(u&&(u.plainObjects||u.allowPrototypes)||!e.call(Object.prototype,o))&&(n[o]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(o);var f=n;return r(n)&&!r(o)&&(f=i(n,u)),r(n)&&r(o)?(o.forEach(function(r,i){if(e.call(n,i)){var o=n[i];o&&"object"==typeof o&&r&&"object"==typeof r?n[i]=t(o,r,u):n.push(r)}else n[i]=r}),n):Object.keys(o).reduce(function(r,n){var i=o[n];return r[n]=e.call(r,n)?t(r[n],i,u):i,r},f)}},u=String.prototype.replace,f=/%20/g,s={RFC1738:"RFC1738",RFC3986:"RFC3986"},a=o.assign({default:s.RFC3986,formatters:{RFC1738:function(t){return u.call(t,f,"+")},RFC3986:function(t){return String(t)}}},s),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},h=Array.isArray,p=Array.prototype.push,d=function(t,e){p.apply(t,h(e)?e:[e])},y=Date.prototype.toISOString,b=a.default,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:b,formatter:a.formatters[b],indices:!1,serializeDate:function(t){return y.call(t)},skipNulls:!1,strictNullHandling:!1},m=function t(e,r,n,i,u,f,s,a,c,l,p,y,b){var m,g=e;if("function"==typeof s?g=s(r,g):g instanceof Date?g=l(g):"comma"===n&&h(g)&&(g=o.maybeMap(g,function(t){return t instanceof Date?l(t):t}).join(",")),null===g){if(i)return f&&!y?f(r,v.encoder,b,"key"):r;g=""}if("string"==typeof(m=g)||"number"==typeof m||"boolean"==typeof m||"symbol"==typeof m||"bigint"==typeof m||o.isBuffer(g))return f?[p(y?r:f(r,v.encoder,b,"key"))+"="+p(f(g,v.encoder,b,"value"))]:[p(r)+"="+p(String(g))];var j,w=[];if(void 0===g)return w;if(h(s))j=s;else{var O=Object.keys(g);j=a?O.sort(a):O}for(var $=0;$<j.length;++$){var E=j[$],S=g[E];if(!u||null!==S){var x=h(g)?"function"==typeof n?n(r,E):r:r+(c?"."+E:"["+E+"]");d(w,t(S,x,n,i,u,f,s,a,c,l,p,y,b))}}return w},g=Object.prototype.hasOwnProperty,j=Array.isArray,w={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},O=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},$=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},E=function(t,e,r,n){if(t){var i=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=r.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,s=[];if(f){if(!r.plainObjects&&g.call(Object.prototype,f)&&!r.allowPrototypes)return;s.push(f)}for(var a=0;r.depth>0&&null!==(u=o.exec(i))&&a<r.depth;){if(a+=1,!r.plainObjects&&g.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(u[1])}return u&&s.push("["+i.slice(u.index)+"]"),function(t,e,r,n){for(var i=n?e:$(e,r),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&r.parseArrays)u=[].concat(i);else{u=r.plainObjects?Object.create(null):{};var s="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,a=parseInt(s,10);r.parseArrays||""!==s?!isNaN(a)&&f!==s&&String(a)===s&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(u=[])[a]=i:u[s]=i:u={0:i}}i=u}return i}(s,e,r,n)}},S=function(t,e){var r=function(t){if(!t)return w;if(null!=t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");return{allowDots:void 0===t.allowDots?w.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:w.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:w.arrayLimit,charset:void 0===t.charset?w.charset:t.charset,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:w.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:w.comma,decoder:"function"==typeof t.decoder?t.decoder:w.decoder,delimiter:"string"==typeof t.delimiter||o.isRegExp(t.delimiter)?t.delimiter:w.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:w.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:w.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:w.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:w.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:w.strictNullHandling}}(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof t?function(t,e){var r,n={},i=(e.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(e.delimiter,Infinity===e.parameterLimit?void 0:e.parameterLimit),u=-1,f=e.charset;if(e.charsetSentinel)for(r=0;r<i.length;++r)0===i[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[r]?f="utf-8":"utf8=%26%2310003%3B"===i[r]&&(f="iso-8859-1"),u=r,r=i.length);for(r=0;r<i.length;++r)if(r!==u){var s,a,c=i[r],l=c.indexOf("]="),h=-1===l?c.indexOf("="):l+1;-1===h?(s=e.decoder(c,w.decoder,f,"key"),a=e.strictNullHandling?null:""):(s=e.decoder(c.slice(0,h),w.decoder,f,"key"),a=o.maybeMap($(c.slice(h+1),e),function(t){return e.decoder(t,w.decoder,f,"value")})),a&&e.interpretNumericEntities&&"iso-8859-1"===f&&(a=O(a)),c.indexOf("[]=")>-1&&(a=j(a)?[a]:a),n[s]=g.call(n,s)?o.combine(n[s],a):a}return n}(t,r):t,i=r.plainObjects?Object.create(null):{},u=Object.keys(n),f=0;f<u.length;++f){var s=u[f],a=E(s,n[s],r,"string"==typeof t);i=o.merge(i,a,r)}return o.compact(i)};class x{constructor(t,e,r){this.name=t,this.definition=e,this.bindings=e.bindings??{},this.config=r}get template(){return`${this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?":"+this.config.port:""}`:this.config.url:""}/${this.definition.uri}`.replace(/\/+$/,"")}get parameterSegments(){var t;return(null===(t=this.template.match(/{[^}?]+\??}/g))||void 0===t?void 0:t.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))??[]}matchesUrl(t){if(!this.definition.methods.includes("GET"))return!1;const e=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp(`^${e}$`).test(t.replace(/\/+$/,"").split("?").shift())}compile(t){return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,(e,r)=>{if([null,void 0].includes(t[r])&&this.parameterSegments.find(({name:t})=>t===r).required)throw new Error(`Ziggy error: '${r}' parameter is required for route '${this.name}'.`);return encodeURIComponent(t[r]??"")}).replace(/\/+$/,""):this.template}}class N extends String{constructor(t,e,r=!0,n){if(super(),this.t=n??Ziggy??(null===globalThis||void 0===globalThis?void 0:globalThis.Ziggy),this.t={...this.t,absolute:r},t){if(!this.t.routes[t])throw new Error(`Ziggy error: route '${t}' is not in the route list.`);this.i=new x(t,this.t.routes[t],this.t),this.u=this.s(e)}}toString(){const t=Object.keys(this.u).filter(t=>!this.i.parameterSegments.some(({name:e})=>e===t)).filter(t=>"_query"!==t).reduce((t,e)=>({...t,[e]:this.u[e]}),{});return this.i.compile(this.u)+function(t,e){var r,n=t,i=function(t){if(!t)return v;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==t.format){if(!c.call(a.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var n=a.formatters[r],i=v.filter;return("function"==typeof t.filter||h(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof i.filter?n=(0,i.filter)("",n):h(i.filter)&&(r=i.filter);var o=[];if("object"!=typeof n||null===n)return"";var u=l[e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices"];r||(r=Object.keys(n)),i.sort&&r.sort(i.sort);for(var f=0;f<r.length;++f){var s=r[f];i.skipNulls&&null===n[s]||d(o,m(n[s],s,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var p=o.join(i.delimiter),y=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(y+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),p.length>0?y+p:""}({...t,...this.u._query},{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(t,e)=>"boolean"==typeof t?Number(t):e(t)})}current(t,e){const r=this.t.absolute?this.l.host+this.l.pathname:this.l.pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"),[n,i]=Object.entries(this.t.routes).find(([e,n])=>new x(t,n,this.t).matchesUrl(r))||[void 0,void 0];if(!t)return n;const o=new RegExp(`^${t.replace(".","\\.").replace("*",".*")}$`).test(n);if([null,void 0].includes(e)||!o)return o;const u=new x(n,i,this.t);e=this.s(e,u);const f=this.h(i);return!(!Object.values(e).every(t=>!t)||Object.values(f).length)||Object.entries(e).every(([t,e])=>f[t]==e)}get l(){var t,e,r;const{host:n="",pathname:i="",search:o=""}="undefined"!=typeof window?window.location:{};return{host:(null===(t=this.t.location)||void 0===t?void 0:t.host)??n,pathname:(null===(e=this.t.location)||void 0===e?void 0:e.pathname)??i,search:(null===(r=this.t.location)||void 0===r?void 0:r.search)??o}}get params(){return this.h(this.t.routes[this.current()])}has(t){return Object.keys(this.t.routes).includes(t)}s(t={},e=this.i){t=["string","number"].includes(typeof t)?[t]:t;const r=e.parameterSegments.filter(({name:t})=>!this.t.defaults[t]);return Array.isArray(t)?t=t.reduce((t,e,n)=>r[n]?{...t,[r[n].name]:e}:{...t,[e]:""},{}):1!==r.length||t[r[0].name]||!t.hasOwnProperty(Object.values(e.bindings)[0])&&!t.hasOwnProperty("id")||(t={[r[0].name]:t}),{...this.p(e),...this.v(t,e.bindings)}}p(t){return t.parameterSegments.filter(({name:t})=>this.t.defaults[t]).reduce((t,{name:e},r)=>({...t,[e]:this.t.defaults[e]}),{})}v(t,e={}){return Object.entries(t).reduce((t,[r,n])=>{if(!n||"object"!=typeof n||Array.isArray(n)||"_query"===r)return{...t,[r]:n};if(!n.hasOwnProperty(e[r])){if(!n.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${r}' parameter is missing route model binding key '${e[r]}'.`);e[r]="id"}return{...t,[r]:n[e[r]]}},{})}h(t){var e;let r=this.l.pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"");const n=(t,e="",r)=>{const[n,i]=[t,e].map(t=>t.split(r));return i.reduce((t,e,r)=>/^{[^}?]+\??}$/.test(e)&&n[r]?{...t,[e.replace(/^{|\??}$/g,"")]:n[r]}:t,{})};return{...n(this.l.host,t.domain,"."),...n(r,t.uri,"/"),...S(null===(e=this.l.search)||void 0===e?void 0:e.replace(/^\?/,""))}}valueOf(){return this.toString()}check(t){return this.has(t)}}t.ZiggyVue={install:(t,e)=>t.mixin({methods:{route:(t,r,n,i=e)=>function(t,e,r,n){const i=new N(t,e,r,n);return t?i.toString():i}(t,r,n,i)}})}});
