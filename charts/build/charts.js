!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MyCharts=e():t.MyCharts=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-i.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*i.bounceIn(2*t):.5*i.bounceOut(2*t-1)+.5}},r=i;function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e){var n=e.start,i=void 0===n?0:n,r=e.end,a=void 0===r?1e3:r,o=e.life,s=void 0===o?1e3:o,c=e.easing,u=void 0===c?"linear":c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._life=s,this._end=a,this._start=i,this._running=!0,this._current=this._start,this._easing=u}var e,n,i;return e=t,(n=[{key:"start",value:function(){this._startTime=(new Date).getTime(),this._loop()}},{key:"_loop",value:function(){this._running&&(window.requestAnimationFrame(this._loop.bind(this)),this._update())}},{key:"_update",value:function(){var t=((new Date).getTime()-this._startTime)/this._life,e=Math.min(t,1);1===e&&(this._running=!1);var n=r[this._easing](e);this._current=(this._end-this._start)*n,this._start<0&&(this._current-=Math.abs(this._start)),this._end-this._start<.001&&(this._current=this._end),this._fire("frame",this._current)}},{key:"_fire",value:function(t,e){var n="on".concat(t);this[n]&&this[n](this._end,e)}},{key:"stop",value:function(){this._running=!1}}])&&a(e.prototype,n),i&&a(e,i),t}();function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e instanceof HTMLElement?this.containerDom=e:this.containerDom=document.getElementById(e),!(this.containerDom instanceof HTMLElement))throw new TypeError("".concat(e," is not a valid dom Id !"));var n=window.devicePixelRatio||1,i=this.containerDom.offsetWidth,r=this.containerDom.offsetHeight;this.width=i*n,this.height=r*n,this.canvas=document.createElement("canvas"),this.containerDom.appendChild(this.canvas),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width="".concat(this.width,"px"),this.canvas.style.height="".concat(this.height,"px"),this.ctx=this.canvas.getContext("2d"),this.startAngle=0,this.animationTime=1e3,this.easingName="quarticOut",this.baseColor="red",this.bottomColor="#ccc",this.centerPoint={x:this.width/2,y:this.height/2},this.carouselIndex=-1,this.isPauseCarousel=!1,this.addWidth=8,this.listen()}var e,n,i;return e=t,(n=[{key:"setOption",value:function(t){if("object"!==u(t))throw new TypeError("options is not an object !");this.options=t,this.data=t.data,this.textStyle=t.textStyle;var e=t.itemStyle,n=e.lineCap,i=void 0===n?"round":n,r=e.arcGap,a=void 0===r?12:r,o=e.innerRadius,s=void 0===o?50:o,c=e.width,h=void 0===c?32:c,l=e.bottomColor,f=void 0===l?"#eee":l;this.lineCap=i,this.arcGap=a,this.innerRadius=s,this.circleWidth=h,this.bottomColor=f,this.visualMap=t.visualMap,this.normalizeData(),this.render(),this.listen()}},{key:"normalizeData",value:function(){var t=this;if(!Array.isArray(this.data))throw new TypeError("data is not an Array !");if(!Array.isArray(this.visualMap))throw new TypeError("visualMap is not an Array !");this.data=this.data.map(function(e,n){e.baseValue||(e.baseValue=100),e.percent=e.value/e.baseValue*100,e.percent=parseFloat(e.percent.toFixed(2));var i=t.visualMap.find(function(t){return e.value>=t.min&&e.value<=t.max});return e.color=i?i.color:t.baseColor,e.endAngle=t.percentToAngle(e.percent),e.r=t.innerRadius+(n+1)*(t.circleWidth+t.arcGap),e.animation=!0,e})}},{key:"log",value:function(){for(var t,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];(t=console).log.apply(t,["ArcChart LOG:"].concat(n))}},{key:"listen",value:function(){this.canvas.addEventListener("mousemove",this.mouseMove.bind(this))}},{key:"removeListen",value:function(){this.canvas.removeEventListener("mousemove",this.mouseMove.bind(this))}},{key:"mouseMove",value:function(t){var e=this;this.data.forEach(function(n){var i=e.containInArcLine({x:t.offsetX,y:t.offsetY},{centerPoint:e.centerPoint,r:n.r,lineWidth:e.circleWidth,startAngle:e.startAngle,endAngle:e.angleToRadian(n.endAngle)});i&&!n.circleWidth&&(n.circleWidth=e.circleWidth+e.arcGap/2,n.showText=!0,e.pauseCarousel(),e.drawArcs(!1)),!i&&n.circleWidth&&(n.showText=!1,n.circleWidth=0,e.drawArcs(!1))})}},{key:"showText",value:function(t){var e=s({font:"sans-serif",fontSize:22,color:"black",fontWeight:"normal"},this.textStyle.title),n=s({font:"sans-serif",fontSize:32,color:t.color,fontWeight:"bold"},this.textStyle.subTitle);"auto"===n.color&&(n.color=t.color);var i=e.formatter.replace("{name}",t.name).replace("{percent}",t.percent).replace("{value}",t.value).replace("{baseValue}",t.baseValue),r=n.formatter.replace("{name}",t.name).replace("{percent}",t.percent).replace("{value}",t.value).replace("{baseValue}",t.baseValue);this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.translate(this.width/2,this.height/2-.7*n.fontSize),this.ctx.font="".concat(e.fontWeight," ").concat(e.fontSize,"px ").concat(e.fontFamily),this.ctx.fillStyle=e.color,this.ctx.fillText(i,0,0),this.ctx.restore(),this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.translate(this.width/2,this.height/2+.7*n.fontSize),this.ctx.font="".concat(n.fontWeight," ").concat(n.fontSize,"px ").concat(n.fontFamily),this.ctx.fillStyle=n.color,this.ctx.fillText(r,0,0),this.ctx.restore()}},{key:"render",value:function(){this.drawArcs(!0)}},{key:"drawArcs",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.data.forEach(function(n,i){if(e&&n.animation){var r=new o({start:t.startAngle,end:n.endAngle,life:t.animationTime,easing:t.easingName});r.onframe=function(e,i){n.endAngle=i,n.percent=t.angleToPercent(i),t.drawAll()},r.start()}else t.drawAll()})}},{key:"drawAll",value:function(){var t=this;this.clear(),this.data.forEach(function(e,n){var i=0;t.isPauseCarousel||n!==t.carouselIndex||(i=t.addWidth),t.drawArc({lineWidth:(e.circleWidth||t.circleWidth)+i,centerPoint:t.centerPoint,r:e.r,startAngle:0,endAngle:t.angleToRadian(360),lineCap:t.lineCap,color:t.bottomColor}),t.drawArc({lineWidth:(e.circleWidth||t.circleWidth)+i,centerPoint:t.centerPoint,r:e.r,startAngle:t.angleToRadian(t.startAngle),endAngle:t.angleToRadian(e.endAngle),lineCap:t.lineCap,color:e.color}),e.showText&&t.showText(e)})}},{key:"containInArcLine",value:function(t,e){var n=e.centerPoint,i=e.r,r=e.lineWidth,a=e.startAngle,o=e.endAngle,s=t.x,c=t.y;if(s-=n.x,c-=n.y,0===r)return!1;var u=Math.sqrt(s*s+c*c);if(u<i-r/2||u>i+r/2)return!1;var h=2*Math.PI;if(Math.abs(a-o)%h<1e-4)return!0;var l=Math.atan2(c,s);return l<0&&(l+=h),l>=a&&l<=o}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"drawArc",value:function(t){var e=t.lineWidth,n=t.centerPoint,i=t.r,r=t.startAngle,a=t.endAngle,o=t.lineCap,s=void 0===o?"round":o,c=t.color;this.ctx.save(),this.ctx.beginPath(),this.ctx.lineWidth=e,this.ctx.lineCap=s,this.ctx.translate(n.x,n.y),this.ctx.arc(0,0,i,r,a,!1),this.ctx.strokeStyle=c,this.ctx.stroke(),this.ctx.restore()}},{key:"angleToRadian",value:function(t){return Math.PI*t/180}},{key:"radianToAngle",value:function(t){return 180*t/Math.PI}},{key:"percentToAngle",value:function(t){return t>=100?360:18*t/5}},{key:"angleToPercent",value:function(t){return parseFloat((5*t/18).toFixed(0))}},{key:"startCarousel",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;this.log("启动轮播"),this.stopCarousel(),this.isPauseCarousel=!1,this.carouselId=setTimeout(function(){t.carouselIndex++,t.carouselIndex>=t.data.length&&(t.carouselIndex=0),t.data=t.data.map(function(e,n){return n===t.carouselIndex?(e.animation=!0,e.showText=!0):(e.animation=!1,e.showText=!1),e}),t.drawArcs(!0),t.startCarousel(e)},e)}},{key:"pauseCarousel",value:function(){!this.isPauseCarousel&&this.carouselId&&(this.log("暂停轮播"),this.isPauseCarousel=!0,clearTimeout(this.carouselId),clearTimeout(this.restartCarouselId),this.restartCarouselId=setTimeout(this.startCarousel.bind(this),5e3))}},{key:"stopCarousel",value:function(){this.isPauseCarousel=!1,clearTimeout(this.carouselId),clearTimeout(this.restartCarouselId)}},{key:"resize",value:function(){this.log("resize");var t=window.devicePixelRatio||1,e={width:this.containerDom.offsetWidth,height:this.containerDom.offsetHeight};this.ctx.canvas.width===e.width*t&&this.ctx.canvas.height===e.height*t||(this.ctx.canvas.style.width="".concat(e.width,"px"),this.ctx.canvas.style.height="".concat(e.height,"px"),this.ctx.canvas.width=e.width*t,this.ctx.canvas.height=e.height*t,this.width=e.width*t,this.height=e.height*t,this.centerPoint={x:this.width/2,y:this.height/2},this.options&&this.setOption(this.options))}},{key:"dispose",value:function(){this.restartCarouselId&&clearTimeout(this.restartCarouselId),this.carouselId&&clearTimeout(this.carouselId),this.removeListen()}}])&&h(e.prototype,n),i&&h(e,i),t}();n.d(e,"Activity",function(){return l})}])});