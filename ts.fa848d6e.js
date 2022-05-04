parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeLoader=exports.setLoader=exports.setAttr=exports.addElemntsToContainer=exports.createElementWithManyClass=exports.createElementWithClass=void 0;var e=function(e,t){var r=document.createElement(e);return r.classList.add(t),r};exports.createElementWithClass=e;var t=function(e,t){var r=document.createElement(e);return t.forEach(function(e){r.classList.add(e)}),r};exports.createElementWithManyClass=t;var r=function(e,t){t.forEach(function(t){e.appendChild(t)})};exports.addElemntsToContainer=r;var n=function(e,t,r){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])}),r&&(e.innerHTML=r)};exports.setAttr=n;var o=function(){var t=e("div","loader"),n=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");return r(t,[n,o,a]),t};exports.setLoader=o;var a=function(e,t,r,n){setTimeout(function(){e.removeChild(t),e.innerHTML=r},n)};exports.removeLoader=a;
},{}],5:[function(require,module,exports) {
"use strict";var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./helpers"),i=document.querySelector(".body"),a=function(t){return(0,n.createElementWithManyClass)("div",["chat__"+t,"chat__message"])},s=function(){function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;e(this,s),this.root=t,this.input=(0,n.createElementWithClass)("input","chat__input--field"),this.submitInput=(0,n.createElementWithClass)("button","chat__input--submit"),this.chatBtn=(0,n.createElementWithClass)("button","chat__btn"),this.loader=(0,n.setLoader)(),this.chatContainer=(0,n.createElementWithManyClass)("div",["chat__container","active"]),this.chatQues=(0,n.createElementWithClass)("div","chat__ques"),this.chatWindow=(0,n.createElementWithClass)("div","chat__window"),this.quesOptions=["Payment declined","Payment info","Unknown charge","Promotions and Deals"],this.quesReply=["I am very sorry your card has been declined","Your last paymant was $3.000","I will transfer you to... ","Are special deals for you...  "]}return t(s,[{key:"init",value:function(){var t=a("bot");t.innerHTML="Welcome! Ask me a question so I can help you or chose one of the options:",this.chatWindow.appendChild(t),this.createLayout(),this.chatEventsHandler(),this.botQueHandler()}},{key:"setQues",value:function(t,e){this.quesOptions=t,this.quesReply=e}},{key:"createLayout",value:function(){var t=(0,n.createElementWithClass)("div","chat"),e=(0,n.createElementWithClass)("form","chat__input"),i=(0,n.createElementWithClass)("div","chat__header");i.innerHTML="Chat Assistant",this.chatBtn.innerHTML="Chat",(0,n.setAttr)(this.input,{type:"text",placeholder:"Ask me question...?"}),(0,n.setAttr)(this.submitInput,{type:"submit"},"✔"),this.root.appendChild(t),(0,n.addElemntsToContainer)(t,[this.chatBtn,this.chatContainer]),(0,n.addElemntsToContainer)(this.chatContainer,[i,this.chatWindow,e]),(0,n.addElemntsToContainer)(e,[this.input,this.submitInput]),this.chatWindow.appendChild(this.chatQues)}},{key:"botAnswers",value:function(t){var e=this.quesOptions.indexOf(t),i=-1===e?"I'm sorry. Chose one of the folowing options: ":this.quesReply[e],s=a("bot");s.appendChild(this.loader),this.chatWindow.appendChild(s),(0,n.removeLoader)(s,this.loader,i,3e3),this.resetHeight()}},{key:"botQueHandler",value:function(){var t=this;this.quesOptions.forEach(function(e,i){var a=(0,n.createElementWithClass)("button","chat__ques-btn");a.innerHTML=e,a.setAttribute("id",""+i),a.addEventListener("click",function(e){return t.predominateOptionsHandler(e)}),t.chatQues.appendChild(a)})}},{key:"resetHeight",value:function(){var t=this;this.chatWindow.removeChild(this.chatQues),setTimeout(function(){t.chatWindow.appendChild(t.chatQues),t.chatWindow.scrollTo(0,t.chatWindow.scrollHeight)},4e3)}},{key:"predominateOptionsHandler",value:function(t){var e=a("bot"),i=a("user"),s=+t.target.id;i.innerHTML=t.target.innerHTML,e.appendChild(this.loader),this.chatWindow.append(i,e),(0,n.removeLoader)(e,this.loader,this.quesReply[s],3e3),this.resetHeight()}},{key:"chatEventsHandler",value:function(){var t=this;this.submitInput.addEventListener("click",function(e){var n=t.input.value;if(!(n.length<4)){var i=a("user");e.preventDefault();var s=n;t.input.value="",i.innerHTML=s,t.chatWindow.appendChild(i),t.botAnswers(s)}}),this.chatBtn.addEventListener("click",function(){t.chatContainer.classList.toggle("active")}),window.addEventListener("mouseup",function(e){e.target===i&&t.chatContainer.classList.remove("active")})}}]),s}();exports.default=s;var o=new s(i);o.init();
},{"./helpers":12}]},{},[5], null)
//# sourceMappingURL=ts.fa848d6e.map