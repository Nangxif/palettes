(function(t){function e(e){for(var s,r,a=e[0],h=e[1],c=e[2],p=0,u=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s]);l&&l(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,a=1;a<i.length;a++){var h=i[a];0!==o[h]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},o={index:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=h;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("c31f")},"37e9":function(t,e,i){"use strict";var s=i("626c"),o=i.n(s);o.a},"4d1c":function(t,e,i){"use strict";var s=i("accf"),o=i.n(s);o.a},"626c":function(t,e,i){},accf:function(t,e,i){},c31f:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("palette")],1)},n=[];i("c975");Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var r=!1;function a(){}try{var h=Object.defineProperty({},"passive",{get:function(){return r=!0,!0}});window.addEventListener("testPassive",a,h),window.removeEventListener("testPassive",a,h)}catch(L){r=!1}function c(t){return t.scrollTop<=0}function l(t){return t.scrollHeight-t.scrollTop<=t.clientHeight}function p(t,e,i){if(!i)return!0;var s=t.clientX-e.clientX,o=t.clientY-e.clientY,n=Math.abs(s),r=Math.abs(o);return n<r}function u(t,e,i,s){var o=t[e],n=t[i];return!(n<=o)&&-1===["hidden","visible"].indexOf(getComputedStyle(t)[s])}function d(t){return u(t,"clientWidth","scrollWidth","overflowX")}var y=!1,g=null,f=null,v=!1,w=!1;function m(){y=!1,g=null,f=null,v=!1,w=!1}function x(t){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-prevent-scroll","true"),e.innerText="".concat(t," { -webkit-overflow-scrolling: touch; }"),document.head.appendChild(e)}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ignore,i=void 0===e?".scrollable":e;function s(t){if("string"===typeof i){f=t.target.closest(i),f&&(w=d(f));var e=t.touches[0],s=e.clientX,o=e.clientY;g={clientX:s,clientY:o}}v=t.target.closest("#__vconsole")}function o(t){if(!v){if("string"===typeof i){var e=t.touches[0],s=!0;if(f?e.clientY<g.clientY&&p(e,g,w)&&l(f)?s=!1:e.clientY>g.clientY&&p(e,g,w)&&c(f)&&(s=!1):s=!1,g={clientX:e.clientX,clientY:e.clientY},s)return}"function"===typeof i&&i(t.target)||t.cancelable&&t.preventDefault()}}function n(){f=null,v=!1}y=!0,x(i);var a=!!r&&{passive:!1};function h(){m(),window.removeEventListener("touchstart",s,a),window.removeEventListener("touchmove",o,a),window.removeEventListener("touchend",n,a)}return y&&h(),window.addEventListener("touchstart",s,a),window.addEventListener("touchmove",o,a),window.addEventListener("touchend",n,a),{cancel:h}}var b=C,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"palette"},[i("p",{staticClass:"palette_tip"},[t._v(" "+t._s(t.paletteStyleCopy.title)+" "),i("button",{staticClass:"tip_btn",style:"background-color:"+t.paletteStyleCopy.borderColor+";",attrs:{type:"button"},on:{click:t.showBar}},[t._v(" 编辑面板 ")])]),i("div",{ref:"palette_wrapper",staticClass:"palette_wrapper",style:"width:"+t.paletteStyleCopy.width+"px;height:"+t.paletteStyleCopy.height+"px;border:"+t.paletteStyleCopy.borderStyle+" "+t.paletteStyleCopy.borderWidth+"px "+t.paletteStyleCopy.borderColor+";"},[t.isEraser?i("div",{ref:"eraser",staticClass:"eraser",style:"width:"+t.eraserOptions.size+"px;height:"+t.eraserOptions.size+"px;background-color:"+t.eraserOptions.backgroundColor+";"+(t.eraserOptions.isRect?"":"border-radius:50%;"),on:{touchstart:function(e){return e.stopPropagation(),t.startPoint(e)},touchmove:function(t){t.stopPropagation()},touchend:function(e){return e.stopPropagation(),t.endPoint(e)},mousedown:function(e){return e.stopPropagation(),t.startPoint(e)},mousemove:function(t){t.stopPropagation()},mouseup:function(e){return e.stopPropagation(),t.endPoint(e)}}}):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:"PaintCircle"==t.touchType&&t.isEdit,expression:"touchType == 'PaintCircle' && isEdit"}],ref:"circle",staticClass:"circle"},[i("span",{on:{click:t.closeEdit,touchstart:function(t){t.stopPropagation()},touchend:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mouseup:function(t){t.stopPropagation()}}},[t._v(" × ")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"PaintRectangle"==t.touchType&&t.isEdit,expression:"touchType == 'PaintRectangle' && isEdit"}],ref:"rectangle",staticClass:"rectangle"},[i("span",{on:{click:t.closeEdit,touchstart:function(t){t.stopPropagation()},touchend:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},mouseup:function(t){t.stopPropagation()}}},[t._v(" × ")])]),i("canvas",{ref:"palette",attrs:{width:t.paletteStyleCopy.width-2*t.paletteStyleCopy.borderWidth,height:t.paletteStyleCopy.height-2*t.paletteStyleCopy.borderWidth}})]),i("div",{ref:"historyBar",staticClass:"historyBar"},[i("div",{staticClass:"historyBar_close",on:{click:t.showHistory}},[t._v("×")]),i("p",{staticClass:"historyBar_title"},[t._v("所有操作记录")]),i("div",{staticClass:"history_wrapper scrollable"},t._l(t.history,(function(e,s){return i("div",{key:s,staticClass:"history_item",on:{click:function(e){return t.goHistory(s)}}},[t._v(" "+t._s(e.time)+t._s(e.text)+" ")])})),0),i("div",{staticClass:"more"})]),i("div",{ref:"showBar",staticClass:"showBar"},[i("div",{staticClass:"showBar_close",on:{click:t.showBar}},[t._v("×")]),i("p",{staticClass:"showBar_title"},[t._v("当前画笔状态："+t._s(t.currentStatus))]),i("div",{staticClass:"showBar_wrapper scrollable"},[i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.prevPaint}},[t._v(" 回撤 ")]),i("button",{attrs:{type:"button"},on:{click:t.nextPaint}},[t._v(" 前进 ")]),i("span",{staticStyle:{"font-size":"14px"},on:{click:t.showHistory}},[t._v(" 共有"+t._s(t.history.length)+"条记录，当前第"+t._s(t.currectHistory+1)+"条 "),i("span",{staticStyle:{color:"#fed640"}},[t._v(">>")])])]),t.showbarOptionCopy.clearBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.clearPalette}},[t._v(" 清除 ")]),i("span",[t._v("当前清理次数"+t._s(t.clearTimes))])]):t._e(),i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.paintRandom}},[t._v(" 普通画笔 ")])]),t.showbarOptionCopy.lineBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.paintLine}},[t._v(" 直线画笔 ")])]):t._e(),t.showbarOptionCopy.hollowIrregularPolygonBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:function(e){return t.paintIrregularPolygon("Hollow")}}},[t._v(" 空心不规则多边形画笔 ")])]):t._e(),t.showbarOptionCopy.solidIrregularPolygonBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:function(e){return t.paintIrregularPolygon("Solid")}}},[t._v(" 实心不规则多边形画笔 ")])]):t._e(),t.showbarOptionCopy.paintCircleBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.paintCircle}},[t._v(" 圆形画笔 ")])]):t._e(),t.showbarOptionCopy.paintRectangleBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.paintRectangle}},[t._v(" 矩形画笔 ")])]):t._e(),t.showbarOptionCopy.paintTextBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.paintText}},[t._v(" 插入文字 ")])]):t._e(),t.showbarOptionCopy.eraserBtn?i("div",{staticClass:"showBar_item"},[i("button",{attrs:{type:"button"},on:{click:t.showEraser}},[t._v(" 橡皮擦 ")])]):t._e(),t.showbarOptionCopy.saveBtn.isShow?i("div",{staticClass:"showBar_item"},[t.showbarOptionCopy.saveBtn.isShow?i("button",{attrs:{type:"button"},on:{click:function(e){return t.savePalette(t.showbarOptionCopy.saveBtn.imageType)}}},[t._v(" 生成图片 ")]):t._e()]):t._e()])]),t.lastBase64?i("div",{staticClass:"images",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeImage(e)}}},[i("img",{ref:"resultImg",attrs:{src:t.lastBase64}})]):t._e()])},P=[],_=(i("99af"),i("cb29"),i("4de4"),i("7db0"),i("4160"),i("fb6a"),i("0d03"),i("159b"),void 0===document.body.style.transform?"-webkit-transform":"transform"),T={name:"palette",props:{point:{type:String,default:""},showbarOption:{type:Object,default:function(){return{}}},paletteStyle:{type:Object,default:function(){return{}}},eraserOption:{type:Object,default:function(){return{}}}},data:function(){return{paletteStyleCopy:{title:"Nangxi's drawing board",width:document.body.clientWidth-20,height:document.body.clientHeight-75,backgroundColor:"white",borderStyle:"solid",borderColor:"#fed640",borderWidth:5,defaultColor:"black",defaultLineWidth:2},showbarOptionCopy:{clearBtn:!0,saveBtn:{isShow:!0,imageType:"png"},lineBtn:!0,hollowIrregularPolygonBtn:!0,solidIrregularPolygonBtn:!0,paintCircleBtn:!0,paintRectangleBtn:!0,eraserBtn:!0},cans:null,ctx:null,currentStatus:"普通画笔",touchType:"Random",preCurrentStatus:"",preTouchType:"",startNew:null,startOld:[],move:{},endPoints:[],circle:null,rectangle:null,text:null,isEdit:!1,isEditing:!1,isEraser:!1,eraserOptions:{size:20,backgroundColor:"black",isRect:!1},isHistory:!1,history:[],historyTextArr:[{operation:"Random",text:"画了一条不规则线"},{operation:"PaintCircle",text:"画了一个圆"},{operation:"PaintRectangle",text:"画了一个矩形"},{operation:"PaintText",text:"插入文本"},{operation:"Eraser",text:"擦除画板"}],currectHistory:-1,isShowBar:!1,clearTimes:0,lastBase64:""}},mounted:function(){Object.assign(this.paletteStyleCopy,this.paletteStyle),Object.assign(this.showbarOptionCopy,this.showbarOption),Object.assign(this.eraserOptions,this.eraserOption),this.init()},methods:{startPoint:function(t){var e=t||window.event;this.startNew={x:e.clientX?e.clientX-this.$refs.palette.getBoundingClientRect().left:e.targetTouches[0].clientX-this.$refs.palette.getBoundingClientRect().left,y:e.clientY?e.clientY-this.$refs.palette.getBoundingClientRect().top:e.targetTouches[0].clientY-this.$refs.palette.getBoundingClientRect().top,isPaint:!1},this.startOld.push(this.startNew),"Random"!=this.touchType&&"Eraser"!=this.touchType||(this.ctx.beginPath(),this.ctx.lineWidth=this.paletteStyleCopy.defaultLineWidth,this.ctx.moveTo(this.startNew.x,this.startNew.y),"Eraser"==this.touchType?(this.ctx.lineWidth=this.eraserOptions.size,this.ctx.strokeStyle=this.paletteStyleCopy.backgroundColor):(this.ctx.lineWidth=this.paletteStyleCopy.defaultLineWidth,this.ctx.strokeStyle=this.paletteStyleCopy.defaultColor)),"PaintCircle"!=this.touchType||this.isEditing||(this.circle.style[_]="translate3d(".concat(this.startNew.x,"px,").concat(this.startNew.y,"px,0)"),this.isEdit=!0),"PaintRectangle"!=this.touchType||this.isEditing||(this.isEdit=!0,this.rectangle.style[_]="translate3d(".concat(this.startNew.x,"px,").concat(this.startNew.y,"px,0)")),this.$refs.palette_wrapper.addEventListener("touchmove",this.movePoint,!1),this.$refs.palette_wrapper.addEventListener("mousemove",this.movePoint,!1)},movePoint:function(t){var e=t||window.event;if(this.startNew.x==this.move.x&&this.startNew.y==this.move.y||(this.startOld[this.startOld.length-1].isPaint=!0,this.move={x:e.clientX?e.clientX-this.$refs.palette.getBoundingClientRect().left:e.targetTouches[0].clientX-this.$refs.palette.getBoundingClientRect().left,y:e.clientY?e.clientY-this.$refs.palette.getBoundingClientRect().top:e.targetTouches[0].clientY-this.$refs.palette.getBoundingClientRect().top}),"Random"!=this.touchType&&"Eraser"!=this.touchType||("Eraser"==this.touchType&&(this.move.x<=this.$refs.eraser.offsetWidth/2&&(this.move.x=this.$refs.eraser.offsetWidth/2),this.move.y<=this.$refs.eraser.offsetHeight/2&&(this.move.y=this.$refs.eraser.offsetHeight/2),this.move.x>=this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth-this.$refs.eraser.offsetWidth/2&&(this.move.x=this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth-this.$refs.eraser.offsetWidth/2),this.move.y>=this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth-this.$refs.eraser.offsetHeight/2&&(this.move.y=this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth-this.$refs.eraser.offsetHeight/2),this.$refs.eraser.style[_]="translate3d(".concat(this.move.x-this.eraserOptions.size/2,"px,").concat(this.move.y-this.eraserOptions.size/2,"px,0)")),this.ctx.lineTo(this.move.x,this.move.y),this.ctx.stroke()),"PaintCircle"!=this.touchType||this.isEditing)"PaintCircle"==this.touchType&&this.isEditing&&(this.circle.style[_]="translate3d(".concat(this.move.x-this.circle.offsetWidth/2,"px,").concat(this.move.y-this.circle.offsetWidth/2,"px,0)"));else{var i=Math.abs(this.startNew.x-this.move.x)>Math.abs(this.startNew.y-this.move.y)?Math.abs(this.startNew.x-this.move.x):Math.abs(this.startNew.y-this.move.y);this.circle.style.cssText="".concat(_,":translate3d(").concat(this.startNew.x-i,"px,").concat(this.startNew.y-i,"px,0);width:").concat(2*i,"px;height:").concat(2*i,"px;")}"PaintRectangle"!=this.touchType||this.isEditing?"PaintRectangle"==this.touchType&&this.isEditing&&(this.rectangle.style[_]="translate3d(".concat(this.move.x-this.rectangle.offsetWidth,"px,").concat(this.move.y-this.rectangle.offsetHeight,"px,0)")):(this.rectangle.style.width="".concat(Math.abs(this.startNew.x-this.move.x),"px"),this.rectangle.style.height="".concat(Math.abs(this.startNew.y-this.move.y),"px"),this.startNew.x-this.move.x<=0?this.startNew.y-this.move.y>0?(this.rectangle.style[_]="translate3d(".concat(this.startNew.x,"px,").concat(this.move.y,"px,0)"),this.rectangle.dataset.x=this.startNew.x,this.rectangle.dataset.y=this.move.y):(this.rectangle.dataset.x=this.startNew.x,this.rectangle.dataset.y=this.startNew.y):this.startNew.y-this.move.y>0?(this.rectangle.style[_]="translate3d(".concat(this.move.x,"px,").concat(this.move.y,"px,0)"),this.rectangle.dataset.x=this.move.x,this.rectangle.dataset.y=this.move.y):(this.rectangle.style[_]="translate3d(".concat(this.move.x,"px,").concat(this.startNew.y,"px,0)"),this.rectangle.dataset.x=this.move.x,this.rectangle.dataset.y=this.startNew.y))},endPoint:function(){var t=this;if("Random"==this.touchType&&this.startNew&&(this.ctx.beginPath(),this.ctx.strokeStyle=this.paletteStyleCopy.defaultColor,this.ctx.arc(this.startNew.x,this.startNew.y,this.paletteStyleCopy.defaultLineWidth/2,0,360,!1),this.ctx.fillStyle=this.paletteStyleCopy.defaultColor,this.ctx.fill()),"PaintCircle"==this.touchType&&(this.isEdit=!0,this.isEditing=!0),"PaintRectangle"==this.touchType&&(this.isEdit=!0,this.isEditing=!0),this.isEditing&&(this.endPoints.length<=1?this.endPoints=[this.move,this.move]:(this.endPoints.shift(),this.endPoints.push(this.move))),this.startNew=null,this.$refs.palette_wrapper.removeEventListener("touchmove",this.movePoint,!1),this.$refs.palette_wrapper.removeEventListener("mousemove",this.movePoint,!1),"PaintCircle"!==this.touchType&&"PaintRectangle"!==this.touchType){this.currectHistory++;var e=new Date;this.currectHistory==this.history.length?this.history.push({time:"".concat(e.getHours()<10?"0"+e.getHours():e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),":").concat(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),text:this.historyTextArr.find((function(e){return e.operation==t.touchType})).text,data:this.ctx.getImageData(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth)}):this.history=this.history.slice(this.currectHistory).push({time:"".concat(e.getHours()<10?"0"+e.getHours():e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),":").concat(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),text:this.historyTextArr.find((function(e){return e.operation==t.touchType})).text,data:this.ctx.getImageData(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth)})}},paintLine:function(){var t=this,e=this.startOld.filter((function(t){if(!t.isPaint)return t}));if(e.length<2)return this.$emit("paintLine","You need at least two active points"),void console.log("You need at least two active points");e.forEach((function(e,i,s){t.ctx.beginPath(),i<s.length-1?(t.ctx.moveTo(e.x,e.y),t.ctx.lineTo(s[i+1].x,s[i+1].y)):t.startOld=[],e.isPaint=!0,t.ctx.stroke()}))},paintIrregularPolygon:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Hollow",i=this.startOld.filter((function(t){if(!t.isPaint)return t}));if(i.length<3)return this.$emit("paintLine","You need at least three active points"),void console.log("You need at least three active points");this.ctx.beginPath(),this.ctx.moveTo(i[0].x,i[0].y),i[0].isPaint=!0,i.forEach((function(e,i,s){0!==i&&i<s.length?t.ctx.lineTo(e.x,e.y):t.startOld=[],e.isPaint=!0})),"Hollow"==e?(this.ctx.closePath(),this.ctx.stroke()):this.ctx.fill()},initpaint:function(){this.isEdit&&(this.startOld=[]),this.isEdit=!1,this.isEditing=!1},paintRandom:function(){this.touchType="Random",this.currentStatus="普通画笔",this.initpaint()},paintCircle:function(){this.touchType="PaintCircle",this.currentStatus="圆形画笔",this.initpaint()},paintRectangle:function(){this.touchType="PaintRectangle",this.currentStatus="矩形画笔",this.initpaint()},paintText:function(){this.touchType="PaintText",this.currentStatus="文字画笔",this.initpaint()},closeEdit:function(){var t=this;this.isEdit=!1,this.isEditing=!1,"PaintCircle"==this.touchType&&(this.ctx.beginPath(),this.ctx.lineWidth=1,this.ctx.strokeStyle="black",this.endPoints[0].x==this.endPoints[1].x&&this.endPoints[0].y==this.endPoints[1].y?(this.ctx.arc(this.startOld[this.startOld.length-1].x,this.startOld[this.startOld.length-1].y,this.circle.offsetWidth/2,0,2*Math.PI),this.startOld=[]):this.ctx.arc(this.move.x,this.move.y,this.circle.offsetWidth/2,0,2*Math.PI),this.endPoints=[],this.ctx.stroke()),"PaintRectangle"==this.touchType&&(this.ctx.beginPath(),this.ctx.lineWidth=1,this.ctx.strokeStyle="black",this.endPoints[0].x==this.endPoints[1].x&&this.endPoints[0].y==this.endPoints[1].y?this.ctx.rect(this.rectangle.dataset.x,this.rectangle.dataset.y,this.rectangle.offsetWidth,this.rectangle.offsetHeight):this.ctx.rect(this.move.x-this.rectangle.offsetWidth,this.move.y-this.rectangle.offsetHeight,this.rectangle.offsetWidth,this.rectangle.offsetHeight),this.endPoints=[],this.ctx.stroke()),this.startNew={},this.currectHistory++;var e=new Date;this.currectHistory==this.history.length?this.history.push({time:"".concat(e.getHours()<10?"0"+e.getHours():e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),":").concat(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),text:this.historyTextArr.find((function(e){return e.operation==t.touchType})).text,data:this.ctx.getImageData(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth)}):this.history=this.history.slice(this.currectHistory).push({time:"".concat(e.getHours()<10?"0"+e.getHours():e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),":").concat(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),text:this.historyTextArr.find((function(e){return e.operation==t.touchType})).text,data:this.ctx.getImageData(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth)})},showEraser:function(){this.isEraser=!this.isEraser,this.isEraser?(this.preCurrentStatus=this.currentStatus,this.preTouchType=this.touchType,this.currentStatus="橡皮擦",this.touchType="Eraser"):(this.currentStatus=this.preCurrentStatus,this.touchType=this.preTouchType)},prevPaint:function(){this.currectHistory>0?(this.ctx.clearRect(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth),--this.currectHistory,0==this.currectHistory?this.ctx.putImageData(this.history[0].data,0,0):this.ctx.putImageData(this.history[this.currectHistory].data,0,0)):this.currectHistory=0},nextPaint:function(){this.currectHistory<this.history.length-1?(this.ctx.clearRect(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth),this.ctx.putImageData(this.history[++this.currectHistory].data,0,0)):this.currectHistory=this.history.length-1},goHistory:function(t){this.ctx.clearRect(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth),this.ctx.putImageData(this.history[t].data,0,0),this.currectHistory=t},closeImage:function(){this.lastBase64=""},init:function(){this.cans=this.$refs.palette,this.circle=this.$refs.circle,this.rectangle=this.$refs.rectangle,this.ctx=this.$refs.palette.getContext("2d"),this.currectHistory++;var t=new Date;this.history.push({time:"".concat(t.getHours()<10?"0"+t.getHours():t.getHours(),":").concat(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),":").concat(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds()),text:"创建画布",data:this.ctx.getImageData(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth)}),this.$refs.palette_wrapper.addEventListener("touchstart",this.startPoint,!1),this.$refs.palette_wrapper.addEventListener("mousedown",this.startPoint,!1),this.$refs.palette_wrapper.addEventListener("touchend",this.endPoint,!1),this.$refs.palette_wrapper.addEventListener("mouseup",this.endPoint,!1)},clearPalette:function(){this.clearTimes++,this.ctx.clearRect(0,0,this.paletteStyleCopy.width-2*this.paletteStyleCopy.borderWidth,this.paletteStyleCopy.height-2*this.paletteStyleCopy.borderWidth),this.startNew=null,this.startOld=[],this.history=[],this.currectHistory=-1},savePalette:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png";"png"==e?this.lastBase64=this.cans.toDataURL("image/png"):"jpeg"==e&&(this.lastBase64=this.cans.toDataURL("image/jpeg",1)),this.$nextTick((function(){var e=setTimeout((function(){t.$refs.resultImg.style[_]="translate3d(0,0,0)",clearTimeout(e)}),0)})),this.$emit("paletteImage",this.lastBase64)},showBar:function(){this.isShowBar?(this.$refs.showBar.style[_]="translate3d(0,110%,0)",this.isShowBar=!1,this.$refs.palette_wrapper.addEventListener("touchstart",this.startPoint,!1),this.$refs.palette_wrapper.addEventListener("mousedown",this.startPoint,!1),this.$refs.palette_wrapper.addEventListener("touchend",this.endPoint,!1),this.$refs.palette_wrapper.addEventListener("mouseup",this.endPoint,!1)):(this.$refs.showBar.style[_]="translate3d(0,0,0)",this.isShowBar=!0,this.$refs.palette_wrapper.removeEventListener("touchstart",this.startPoint,!1),this.$refs.palette_wrapper.removeEventListener("mousedown",this.startPoint,!1),this.$refs.palette_wrapper.removeEventListener("touchend",this.endPoint,!1),this.$refs.palette_wrapper.removeEventListener("mouseup",this.endPoint,!1))},showHistory:function(){this.showBar(),this.isHistory?(this.$refs.historyBar.style[_]="translate3d(100%,0,0)",this.isHistory=!1):(this.$refs.historyBar.style[_]="translate3d(0,0,0)",this.isHistory=!0)}}},E=T,B=(i("37e9"),i("2877")),O=Object(B["a"])(E,S,P,!1,null,"47cecd49",null),H=O.exports;b();var W=H,$={name:"app",components:{palette:W}},k=$,N=(i("4d1c"),Object(B["a"])(k,o,n,!1,null,null,null)),R=N.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=index.7a51b5e6.js.map