parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setAttr=exports.addElemntsToContainer=exports.createElementWithManyClass=exports.createElementWithClass=void 0;var e=function(e,t){var r=document.createElement(e);return r.classList.add(t),r};exports.createElementWithClass=e;var t=function(e,t){var r=document.createElement(e);return t.forEach(function(e){r.classList.add(e)}),r};exports.createElementWithManyClass=t;var r=function(e,t){t.forEach(function(t){e.appendChild(t)})};exports.addElemntsToContainer=r;var n=function(e,t,r){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])}),r&&(e.innerHTML=r)};exports.setAttr=n;
},{}],6:[function(require,module,exports) {
"use strict";var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./helpers"),i=document.querySelector(".body"),a=function(t){return(0,n.createElementWithManyClass)("div",["chat__"+t,"chat__message"])},s=function(){function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;e(this,s),this.root=t,this.input=(0,n.createElementWithClass)("input","chat__input--field"),this.submitInput=(0,n.createElementWithClass)("button","chat__input--submit"),this.chatBtn=(0,n.createElementWithClass)("button","chat__btn"),this.chatContainer=(0,n.createElementWithManyClass)("div",["chat__container","active"]),this.chatQues=document.createElement("div"),this.chatWindow=(0,n.createElementWithClass)("div","chat__window"),this.quesOptions=["Payment declined","Payment info","Unknown charge","Promotions and Deals"],this.quesReply=["I am very sorry your card has been declined","Your last paymant was $3.000","I will transfer you to... ","Are special deals for you...  "]}return t(s,[{key:"init",value:function(){this.createLayout(),this.chatEventsHandler(),this.botQueHandler()}},{key:"createLayout",value:function(){var t=(0,n.createElementWithClass)("div","chat"),e=(0,n.createElementWithClass)("form","chat__input");this.chatBtn.innerHTML="Chat",(0,n.setAttr)(this.input,{type:"text",placeholder:"Ask me question...?"}),(0,n.setAttr)(this.submitInput,{type:"submit"},"✔"),this.root.appendChild(t),(0,n.addElemntsToContainer)(t,[this.chatBtn,this.chatContainer]),(0,n.addElemntsToContainer)(this.chatContainer,[this.chatWindow,e]),(0,n.addElemntsToContainer)(e,[this.input,this.submitInput]),this.chatWindow.appendChild(this.chatQues)}},{key:"botAnswers",value:function(t){var e=this.quesOptions.indexOf(t),n=-1===e?"I'm sorry. Chose one of the folowing options: ":this.quesReply[e],i=a("bot");i.innerHTML=n,this.chatWindow.appendChild(i),this.resetHeight()}},{key:"botQueHandler",value:function(){var t=this;this.quesOptions.forEach(function(e,n){var i=document.createElement("button");i.innerHTML=e,i.setAttribute("id",""+n),i.addEventListener("click",function(e){return t.predominateOptionsHandler(e)}),t.chatQues.appendChild(i)})}},{key:"resetHeight",value:function(){this.chatWindow.removeChild(this.chatQues),this.chatWindow.appendChild(this.chatQues),this.chatWindow.scrollTo(0,this.chatWindow.scrollHeight)}},{key:"predominateOptionsHandler",value:function(t){var e=a("bot"),n=a("user"),i=+t.target.id;n.innerHTML=t.target.innerHTML,e.innerHTML=this.quesReply[i],this.chatWindow.append(n,e),this.resetHeight()}},{key:"chatEventsHandler",value:function(){var t=this;this.submitInput.addEventListener("click",function(e){var n=a("user");e.preventDefault();var i=t.input.value;t.input.value="",n.innerHTML=i,t.chatWindow.appendChild(n),t.botAnswers(i)}),this.chatBtn.addEventListener("click",function(){t.chatContainer.classList.toggle("active")}),window.addEventListener("mouseup",function(e){e.target===i&&t.chatContainer.classList.remove("active")})}}]),s}(),r=new s(i);r.init();
},{"./helpers":12}]},{},[6], null)
//# sourceMappingURL=ts.e484c768.map