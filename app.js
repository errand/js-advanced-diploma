(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),o=new T(r||[]);return a._invoke=function(t,e,n){var r=h;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===y){if("throw"===i)throw a;return R()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=C(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?y:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=y,n.method="throw",n.arg=c.arg)}}}(t,n,o),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",y="completed",v={};function p(){}function m(){}function g(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,k=b&&b(b(G([])));k&&k!==n&&r.call(k,a)&&(w=k);var P=g.prototype=p.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,a,o,s){var c=u(t[i],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(h).then((function(t){l.value=t,o(l)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function G(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:e,done:!0}}return m.prototype=g,c(P,"constructor",g),c(g,"constructor",m),m.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(P),t},t.awrap=function(t){return{__await:t}},L(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new E(l(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(P),c(P,s,"Generator"),c(P,a,(function(){return this})),c(P,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=G,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:G(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t){for(var e=[],n=[],r=0;r<Math.pow(t,2);r++)n.push(r),n.length===t&&(e.push(n),n=[]);return e}function s(t,e,n){for(var r=t%n,i=Math.floor(t/n),a=[],s=o(n),c=1;c<=e;c+=1){var l=r+c;l<n&&a.push(s[i][l]);var u=i+c;u<n&&a.push(s[u][r]),u<n&&l<n&&a.push(s[u][l]),(l=r-c)>=0&&a.push(s[i][l]),l>=0&&u<n&&a.push(s[u][l]),(u=i-c)>=0&&a.push(s[u][r]),u>=0&&l>=0&&a.push(s[u][l]),(l=r+c)<n&&u>=0&&a.push(s[u][l])}return a}function c(t,e,n){var r=t%n,i=Math.floor(t/n),a=o(n),s=[],c=i-e,l=i+e,u=r-e,h=r+e;c<0?c=0:l>n-1?l=n-1:u<0?u=0:h>n-1&&(h=n-1);for(var f=c;f<=l;f++)for(var d=u;d<=h;d++)s.push(a[f][d]);return(s=s.filter((function(e){return e!==t}))).filter((function(t){return t>=0&&t<=63}))}function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var h=function(){function t(){r(this,t),this.boardSize=8,this.container=null,this.boardEl=null,this.cells=[],this.cellClickListeners=[],this.cellEnterListeners=[],this.cellLeaveListeners=[],this.newGameListeners=[],this.saveGameListeners=[],this.loadGameListeners=[]}return a(t,[{key:"bindToDOM",value:function(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}},{key:"drawUi",value:function(t){var e,n,r=this;this.checkBinding(),this.container.innerHTML='\n      <div class="controls">\n        <button data-id="action-restart" class="btn">New Game</button>\n        <button data-id="action-save" class="btn">Save Game</button>\n        <button data-id="action-load" class="btn">Load Game</button>\n      </div>\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ',this.newGameEl=this.container.querySelector("[data-id=action-restart]"),this.saveGameEl=this.container.querySelector("[data-id=action-save]"),this.loadGameEl=this.container.querySelector("[data-id=action-load]"),this.newGameEl.addEventListener("click",(function(t){return r.onNewGameClick(t)})),this.saveGameEl.addEventListener("click",(function(t){return r.onSaveGameClick(t)})),this.loadGameEl.addEventListener("click",(function(t){return r.onLoadGameClick(t)})),this.boardEl=this.container.querySelector("[data-id=board]"),this.boardEl.classList.add(t);for(var i=0;i<Math.pow(this.boardSize,2);i+=1){var a=document.createElement("div");a.classList.add("cell","map-tile","map-tile-".concat((e=i,n=this.boardSize,e>0&&e<n-1?"top":e>n*n-n&&e<n*n-1?"bottom":e===n*n-n?"bottom-left":e===n*n-1?"bottom-right":0===e?"top-left":e===n-1?"top-right":e%n==0?"left":(e+1)%n==0?"right":"center"))),a.addEventListener("mouseenter",(function(t){return r.onCellEnter(t)})),a.addEventListener("mouseleave",(function(t){return r.onCellLeave(t)})),a.addEventListener("click",(function(t){return r.onCellClick(t)})),this.boardEl.appendChild(a)}this.cells=Array.from(this.boardEl.children)}},{key:"redrawPositions",value:function(t){var e,n=l(this.cells);try{for(n.s();!(e=n.n()).done;)e.value.innerHTML=""}catch(t){n.e(t)}finally{n.f()}var r,i,a=l(t);try{for(a.s();!(r=a.n()).done;){var o=r.value,s=this.boardEl.children[o.position],c=document.createElement("div");c.classList.add("character",o.character.type);var u=document.createElement("div");u.classList.add("health-level");var h=document.createElement("div");h.classList.add("health-level-indicator","health-level-indicator-".concat((i=o.character.health)<15?"critical":i<50?"normal":"high")),h.style.width="".concat(o.character.health,"%"),u.appendChild(h),c.appendChild(u),s.appendChild(c)}}catch(t){a.e(t)}finally{a.f()}}},{key:"addCellEnterListener",value:function(t){this.cellEnterListeners.push(t)}},{key:"addCellLeaveListener",value:function(t){this.cellLeaveListeners.push(t)}},{key:"addCellClickListener",value:function(t){this.cellClickListeners.push(t)}},{key:"addNewGameListener",value:function(t){this.newGameListeners.push(t)}},{key:"addSaveGameListener",value:function(t){this.saveGameListeners.push(t)}},{key:"addLoadGameListener",value:function(t){this.loadGameListeners.push(t)}},{key:"onCellEnter",value:function(t){t.preventDefault();var e=this.cells.indexOf(t.currentTarget);this.cellEnterListeners.forEach((function(t){return t.call(null,e)}))}},{key:"onCellLeave",value:function(t){t.preventDefault();var e=this.cells.indexOf(t.currentTarget);this.cellLeaveListeners.forEach((function(t){return t.call(null,e)}))}},{key:"onCellClick",value:function(t){var e=this.cells.indexOf(t.currentTarget);this.cellClickListeners.forEach((function(t){return t.call(null,e)}))}},{key:"onNewGameClick",value:function(t){t.preventDefault(),this.newGameListeners.forEach((function(t){return t.call(null)}))}},{key:"onSaveGameClick",value:function(t){t.preventDefault(),this.saveGameListeners.forEach((function(t){return t.call(null)}))}},{key:"onLoadGameClick",value:function(t){t.preventDefault(),this.loadGameListeners.forEach((function(t){return t.call(null)}))}},{key:"selectCell",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yellow";this.deselectCell(t),this.cells[t].classList.add("selected","selected-".concat(e))}},{key:"deselectCell",value:function(t){var n,r=this.cells[t];(n=r.classList).remove.apply(n,e(Array.from(r.classList).filter((function(t){return t.startsWith("selected")}))))}},{key:"showCellTooltip",value:function(t,e){this.cells[e].title=t}},{key:"hideCellTooltip",value:function(t){this.cells[t].title=""}},{key:"showDamage",value:function(t,e){var n=this;return new Promise((function(r){var i=n.cells[t],a=document.createElement("span");a.textContent=e,a.classList.add("damage"),i.appendChild(a),a.addEventListener("animationend",(function(){i.removeChild(a),r()}))}))}},{key:"setCursor",value:function(t){this.boardEl.style.cursor=t}},{key:"checkBinding",value:function(){if(null===this.container)throw new Error("GamePlay not bind to DOM")}}],[{key:"showError",value:function(t){alert(t)}},{key:"showMessage",value:function(t){alert(t)}}]),t}(),f=n(757),d=n.n(f),y=function(){function t(){r(this,t),this.members=[]}return a(t,[{key:"add",value:function(t){this.members.push(t)}}]),t}(),v=d().mark(m),p=d().mark(w);function m(t,e){var n,r,i;return d().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=Math.floor(Math.random()*t.length),r=Math.floor(Math.random()*e+1),i=t[n],a.next=5,new i(r);case 5:case"end":return a.stop()}}),v)}function g(t,e,n){for(var r=new y,i=0;i<n;i++){var a=m(t,e).next();r.add(a.value)}return r.members}function w(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t[Math.floor(Math.random()*t.length)];case 2:case"end":return e.stop()}}),p)}const b="prairie",k="desert",P="arctic",L="mountain",E="auto",C="pointer",S="crosshair",x="not-allowed";var T=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"generic";if(r(this,t),this.level=e,this.attack=0,this.defence=0,this.health=100,this.type=n,"Character"===(this instanceof t?this.constructor:void 0).name)throw new Error("Direct creating Character is forbidden")}return a(t,[{key:"levelUp",value:function(){if(this.health<=0)throw new Error("Character is dead");this.level+=1,this.attack=.2*this.attack+this.attack,this.defence=.2*this.defence+this.defence,this.health=this.health+80>100?100:this.health+80}}]),t}(),G=function t(e,n){if(r(this,t),!(e instanceof T))throw new Error("character must be instance of Character or its children");if("number"!=typeof n)throw new Error("position must be a number");this.character=e,this.position=n};function R(t,e){return R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},R(t,e)}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function j(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var _=function(t){O(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=M(e);if(n){var i=M(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return j(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bowman";return r(this,a),(t=i.call(this,e,n)).attack=25,t.defence=25,t.steps=2,t.attackRadius=2,t}return a}(T);var N=function(t){O(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=M(e);if(n){var i=M(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return j(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"magician";return r(this,a),(t=i.call(this,e,n)).attack=10,t.defence=10,t.steps=1,t.attackRadius=4,t}return a}(T);var I=function(t){O(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=M(e);if(n){var i=M(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return j(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"swordsman";return r(this,a),(t=i.call(this,e,n)).attack=40,t.defence=10,t.steps=4,t.attackRadius=1,t}return a}(T);var B=function(t){O(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=M(e);if(n){var i=M(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return j(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"vampire";return r(this,a),(t=i.call(this,e,n)).attack=25,t.defence=25,t.steps=2,t.attackRadius=2,t}return a}(T);var U=function(t){O(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=M(e);if(n){var i=M(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return j(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undead";return r(this,a),(t=i.call(this,e,n)).attack=40,t.defence=10,t.steps=4,t.attackRadius=1,t}return a}(T);var D=function(t){O(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=M(e);if(n){var i=M(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return j(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"daemon";return r(this,a),(t=i.call(this,e,n)).attack=10,t.defence=10,t.steps=1,t.attackRadius=4,t}return a}(T),z=function(){function t(){r(this,t)}return a(t,null,[{key:"from",value:function(t){return"object"===A(t)?t:null}}]),t}();function F(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H=function(){function t(e,n){r(this,t),this.gamePlay=e,this.stateService=n,this.userTypes=[_,I,N],this.aiTypes=[B,U,D],this.enemyCells=[],this.userPositions=[0,1,8,9,16,17,24,25,32,33,40,41,48,49,56,57],this.enemyPositions=[6,7,14,15,22,23,30,31,38,39,46,47,54,55,62,63],this.player=1,this.positions=[],this.moveArea=[],this.attackArea=[],this.selected=void 0,this.level=1,this.score=0}return a(t,[{key:"init",value:function(){this.gamePlay.drawUi(b),this.gamePlay.addCellClickListener(this.onCellClick.bind(this)),this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this)),this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this)),this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this)),this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this)),this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this))}},{key:"onCellClick",value:function(t){var e=this,n=this.positions.find((function(e){return e.position===t}));if(this.enemyCells=this.positions.filter((function(t){return"daemon"===t.character.type||"undead"===t.character.type||"vampire"===t.character.type})).map((function(t){return t.position})),void 0===n||this.enemyCells.includes(t)?this.moveArea.includes(t)&&!this.enemyCells.includes(t)?(this.gamePlay.deselectCell(this.selected.position),this.selected.position=t,this.gamePlay.redrawPositions(this.positions),this.gamePlay.selectCell(t),this.enemyMove()):n&&!this.attackArea.includes(t)&&h.showError("Please choose one of your characters"):(this.positions.forEach((function(t){return e.gamePlay.deselectCell(t.position)})),this.gamePlay.selectCell(t),this.selected=n,this.moveArea=s(this.selected.position,this.selected.character.steps,this.gamePlay.boardSize),this.attackArea=c(this.selected.position,this.selected.character.attackRadius,this.gamePlay.boardSize)),this.selected&&this.attackArea.includes(t)&&this.enemyCells.includes(t)){var r=n;this.doAttack(t,this.selected.character,r.character),this.enemyMove()}}},{key:"onCellEnter",value:function(t){var e=this.positions.find((function(e){return e.position===t}));if(e){var n="".concat("🎖").concat(e.character.level).concat("⚔").concat(e.character.attack).concat("🛡").concat(e.character.defence).concat("❤").concat(e.character.health);this.gamePlay.showCellTooltip(n,t),this.gamePlay.setCursor(C),["vampire","undead","daemon"].includes(e.character.type)&&this.gamePlay.setCursor(x)}else this.gamePlay.setCursor(E);this.selected&&!e&&(this.moveArea=s(this.selected.position,this.selected.character.steps,this.gamePlay.boardSize),this.moveArea.includes(t)&&(this.gamePlay.selectCell(t,"green"),this.gamePlay.setCursor(C))),this.selected&&e&&["vampire","undead","daemon"].includes(e.character.type)&&(this.attackArea=c(this.selected.position,this.selected.character.attackRadius,this.gamePlay.boardSize),this.attackArea.includes(t)&&(this.gamePlay.selectCell(t,"red"),this.gamePlay.setCursor(S)))}},{key:"onCellLeave",value:function(t){this.gamePlay.hideCellTooltip(t),void 0!==this.selected&&this.selected.position!==t&&this.gamePlay.deselectCell(t)}},{key:"onNewGameClick",value:function(){this.positions=[],this.level=1,this.score=0,this.userTeam=[],this.enemyTeam=[],this.deselectCells(),this.gamePlay.redrawPositions(this.generatePositions(this.userPositions,this.userTypes.slice(0,2))),this.gamePlay.redrawPositions(this.generatePositions(this.enemyPositions,this.aiTypes))}},{key:"generatePositions",value:function(t,n){var r=this;return e(g(n,1,2)).forEach((function(e){var n=r.getRandomPosition(t),i=new G(e,n);r.positions.push(i)})),this.positions}},{key:"getRandomPosition",value:function(t){for(var e=w(t).next().value;this.checkPosition(e);)e=w(t).next().value;return e}},{key:"checkPosition",value:function(t){var e,n=F(this.positions);try{for(n.s();!(e=n.n()).done;)if(t===e.value.position)return!0}catch(t){n.e(t)}finally{n.f()}return!1}},{key:"enemyMove",value:function(){var t=this;this.gamePlay.deselectCell(this.selected.position),this.player=0,this.enemyTeam=this.positions.filter((function(t){return"daemon"===t.character.type||"undead"===t.character.type||"vampire"===t.character.type})),this.userTeam=this.positions.filter((function(t){return["bowman","swordsman","magician"].includes(t.character.type)}));var e=function(){return t.enemyTeam[Math.floor(Math.random()*t.enemyTeam.length)]};if(e()){this.moveArea=s(e().position,e().character.steps,this.gamePlay.boardSize),this.attackArea=c(e().position,e().character.attackRadius,this.gamePlay.boardSize);var n,r=F(this.userTeam);try{for(r.s();!(n=r.n()).done;){var i=n.value;return-1!==this.attackArea.indexOf(i.position)?(this.doAttack(i.position,e().character,i.character),void(this.player=1)):(e().position=this.getRandomPosition(this.moveArea),this.gamePlay.redrawPositions(this.positions),void(this.player=1))}}catch(t){r.e(t)}finally{r.f()}}}},{key:"doAttack",value:function(t,e,n){var r=this,i=Math.max(e.attack-n.defence,.1*e.attack);n.health-=i,n.health<=0&&(n.health=0,this.positions=this.positions.filter((function(e){return e.position!==t}))),this.gamePlay.deselectCell(t),this.gamePlay.showDamage(t,i).then((function(){r.gamePlay.redrawPositions(r.positions),r.checkGameStatus()}))}},{key:"checkGameStatus",value:function(){var t=0;if(this.userTeam.forEach((function(e){t+=e.character.health})),this.score=t,this.enemyTeam=this.positions.filter((function(t){return["vampire","undead","daemon"].includes(t.character.type)})),this.userTeam=this.positions.filter((function(t){return["bowman","swordsman","magician"].includes(t.character.type)})),0===this.enemyTeam.length&&this.level<4){this.level+=1;var e,n=F(this.userTeam);try{for(n.s();!(e=n.n()).done;)e.value.character.levelUp()}catch(t){n.e(t)}finally{n.f()}this.newLevel()}else 0===this.userTeam.length?(h.showMessage("Game over"),this.gamePlay.cellClickListeners=[],this.gamePlay.cellEnterListeners=[],this.gamePlay.cellLeaveListeners=[]):4===this.level&&0===this.enemyTeam.length&&(h.showMessage("You win! Your score is ".concat(this.score)),this.gamePlay.cellClickListeners=[],this.gamePlay.cellEnterListeners=[],this.gamePlay.cellLeaveListeners=[])}},{key:"newLevel",value:function(){2===this.level&&(this.gamePlay.drawUi(k),this.gamePlay.redrawPositions(this.teamNewLevel(this.userPositions,this.userTypes,1,1)),this.gamePlay.redrawPositions(this.teamNewLevel(this.enemyPositions,this.aiTypes,2,this.userTeam.length+1))),3===this.level&&(this.gamePlay.drawUi(P),this.gamePlay.redrawPositions(this.teamNewLevel(this.userPositions,this.userTypes,2,2)),this.gamePlay.redrawPositions(this.teamNewLevel(this.enemyPositions,this.aiTypes,3,this.userTeam.length+2))),4===this.level&&(this.gamePlay.drawUi(L),this.gamePlay.redrawPositions(this.teamNewLevel(this.userPositions,this.userTypes,3,2)),this.gamePlay.redrawPositions(this.teamNewLevel(this.enemyPositions,this.aiTypes,4,this.userTeam.length+2))),this.gamePlay.redrawPositions(this.positions)}},{key:"teamNewLevel",value:function(t,e,n,r){var i,a=F(g(e,n,r));try{for(a.s();!(i=a.n()).done;){var o=i.value;this.positions.push(new G(o,this.getRandomPosition(t)))}}catch(t){a.e(t)}finally{a.f()}return this.positions}},{key:"deselectCells",value:function(){var t=this;this.gamePlay.cells.forEach((function(e,n){e.classList.contains("selected")&&t.gamePlay.deselectCell(n)}))}},{key:"onSaveGameClick",value:function(){var t={level:this.level,activePlayer:this.player,positions:this.positions,score:this.score};this.stateService.save(z.from(t)),h.showMessage("Game Saved")}},{key:"onLoadGameClick",value:function(){var t=this.stateService.load();if(t)switch(this.level=t.level,this.player=t.activePlayer,this.positions=t.positions,this.score=t.score,t.level){case 1:default:this.gamePlay.drawUi(b);break;case 2:this.gamePlay.drawUi(k);break;case 3:this.gamePlay.drawUi(P);break;case 4:this.gamePlay.drawUi(L)}else h.showError("Something wrong...");this.gamePlay.redrawPositions(this.positions)}}]),t}(),Y=function(){function t(e){r(this,t),this.storage=e}return a(t,[{key:"save",value:function(t){this.storage.setItem("state",JSON.stringify(t))}},{key:"load",value:function(){try{return JSON.parse(this.storage.getItem("state"))}catch(t){throw new Error("Invalid state")}}}]),t}(),$=new h;$.bindToDOM(document.querySelector("#game-container")),new H($,new Y(localStorage)).init()})()})();