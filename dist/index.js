!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?exports.scollAnim=t(require("jquery")):e.scollAnim=t(e.jquery)}(window,function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.init=function(e){r(e.element).each(function(t,n){var i=r(n);i.data("fadeAnimation",new o(i,e))})};var r=n(0);var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.item=t,this.targetOffset=n.offset,this.delay=n.delay,this.children=[],this.window=r(window);for(var i=this.item.find(n.children),o=0;o<i.length;o++)this.children.push({element:r(i[o])});this.onEnter=n.onEnter,this.window.on("resize",this.resize.bind(this)),this.window.on("scroll",this.scroll.bind(this)),this.resize()}return i(e,[{key:"resize",value:function(){this.windowHeight=this.window.height();for(var e=void 0,t=0;t<this.children.length;t++)(e=this.children[t]).offsetTop=e.element.offset().top,e.height=e.element.outerHeight();this.scroll()}},{key:"scroll",value:function(){for(var e=this.window.scrollTop()+this.windowHeight,t=0;t<this.children.length;t++){var n=this.children[t].element,i=this.children[t].height*this.targetOffset;this.children[t].offsetTop+i<e&&("function"==typeof this.onEnter?this.onEnter(t,n):(n.addClass("active"),n.css({"animation-delay":t*this.delay+"ms"})),delete this.children[t])}this.children=this.children.filter(function(){return!0})}}]),e}()}])});