// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({12:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setAttr = exports.addElemntsToContainer = exports.createElementWithManyClass = exports.createElementWithClass = void 0;
var createElementWithClass = function createElementWithClass(elementType, classesName) {
    var element = document.createElement(elementType);
    element.classList.add(classesName);
    return element;
};
exports.createElementWithClass = createElementWithClass;
var createElementWithManyClass = function createElementWithManyClass(elementType, classesName) {
    var element = document.createElement(elementType);
    classesName.forEach(function (classe) {
        element.classList.add(classe);
    });
    return element;
};
exports.createElementWithManyClass = createElementWithManyClass;
var addElemntsToContainer = function addElemntsToContainer(container, elements) {
    elements.forEach(function (element) {
        container.appendChild(element);
    });
};
exports.addElemntsToContainer = addElemntsToContainer;
var setAttr = function setAttr(element, attributes, setContent) {
    Object.keys(attributes).forEach(function (attribut) {
        element.setAttribute(attribut, attributes[attribut]);
    });
    if (setContent) element.innerHTML = setContent;
};
exports.setAttr = setAttr;
},{}],6:[function(require,module,exports) {
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var body = document.querySelector('.body');
// sendMessage
var createMessageElement = function createMessageElement(messType) {
    return (0, helpers_1.createElementWithManyClass)('div', ["chat__" + messType, 'chat__message']);
};

var Chatbot = function () {
    function Chatbot() {
        var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

        _classCallCheck(this, Chatbot);

        this.root = root;
        this.input = (0, helpers_1.createElementWithClass)('input', 'chat__input--field');
        this.submitInput = (0, helpers_1.createElementWithClass)('button', 'chat__input--submit');
        this.chatBtn = (0, helpers_1.createElementWithClass)('button', 'chat__btn');
        this.chatContainer = (0, helpers_1.createElementWithManyClass)('div', ['chat__container', 'active']);
        this.chatQues = document.createElement('div');
        this.chatWindow = (0, helpers_1.createElementWithClass)('div', 'chat__window');
        this.quesOptions = ['Payment declined', 'Payment info', 'Unknown charge', 'Promotions and Deals'];
        this.quesReply = ['I am very sorry your card has been declined', 'Your last paymant was $3.000', 'I will transfer you to... ', 'Are special deals for you...  '];
    }

    _createClass(Chatbot, [{
        key: "init",
        value: function init() {
            var welcome = createMessageElement('bot');
            welcome.innerHTML = 'Welcome! Ask me a question so I can help you or chose one of the options:';
            this.chatWindow.appendChild(welcome);
            this.createLayout();
            this.chatEventsHandler();
            this.botQueHandler();
        }
    }, {
        key: "createLayout",
        value: function createLayout() {
            // creating elements
            var chatDiv = (0, helpers_1.createElementWithClass)('div', 'chat');
            var chatInput = (0, helpers_1.createElementWithClass)('form', 'chat__input');
            this.chatBtn.innerHTML = 'Chat';
            (0, helpers_1.setAttr)(this.input, { type: 'text', placeholder: 'Ask me question...?' });
            (0, helpers_1.setAttr)(this.submitInput, { type: 'submit' }, '✔');
            //appending element
            this.root.appendChild(chatDiv);
            (0, helpers_1.addElemntsToContainer)(chatDiv, [this.chatBtn, this.chatContainer]);
            (0, helpers_1.addElemntsToContainer)(this.chatContainer, [this.chatWindow, chatInput]);
            (0, helpers_1.addElemntsToContainer)(chatInput, [this.input, this.submitInput]);
            this.chatWindow.appendChild(this.chatQues);
        }
    }, {
        key: "botAnswers",
        value: function botAnswers(question) {
            var findAnswer = this.quesOptions.indexOf(question);
            var botMessage = findAnswer === -1 ? 'I\'m sorry. Chose one of the folowing options: ' : this.quesReply[findAnswer];
            var chatBotMessage = createMessageElement('bot');
            chatBotMessage.innerHTML = botMessage;
            this.chatWindow.appendChild(chatBotMessage);
            this.resetHeight();
        }
    }, {
        key: "botQueHandler",
        value: function botQueHandler() {
            var _this = this;

            this.quesOptions.forEach(function (option, i) {
                var chatQuesBtn = document.createElement('button');
                chatQuesBtn.innerHTML = option;
                chatQuesBtn.setAttribute('id', "" + i);
                chatQuesBtn.addEventListener('click', function (e) {
                    return _this.predominateOptionsHandler(e);
                });
                _this.chatQues.appendChild(chatQuesBtn);
            });
        }
    }, {
        key: "resetHeight",
        value: function resetHeight() {
            this.chatWindow.removeChild(this.chatQues);
            this.chatWindow.appendChild(this.chatQues);
            this.chatWindow.scrollTo(0, this.chatWindow.scrollHeight);
        }
    }, {
        key: "predominateOptionsHandler",
        value: function predominateOptionsHandler(e) {
            var chatBotMessage = createMessageElement('bot');
            var chatUserMessage = createMessageElement('user');
            var targetId = +e.target.id;
            chatUserMessage.innerHTML = e.target.innerHTML;
            chatBotMessage.innerHTML = this.quesReply[targetId];
            this.chatWindow.append(chatUserMessage, chatBotMessage);
            this.resetHeight();
        }
    }, {
        key: "chatEventsHandler",
        value: function chatEventsHandler() {
            var _this2 = this;

            this.submitInput.addEventListener('click', function (e) {
                var chatUserMessage = createMessageElement('user');
                e.preventDefault();
                var userMessage = _this2.input.value;
                _this2.input.value = '';
                chatUserMessage.innerHTML = userMessage;
                _this2.chatWindow.appendChild(chatUserMessage);
                _this2.botAnswers(userMessage);
            });
            this.chatBtn.addEventListener('click', function () {
                _this2.chatContainer.classList.toggle('active');
            });
            window.addEventListener('mouseup', function (e) {
                if (e.target === body) {
                    _this2.chatContainer.classList.remove('active');
                }
            });
        }
    }]);

    return Chatbot;
}();

var chat = new Chatbot(body);
chat.init();
},{"./helpers":12}],19:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '1915' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[19,6], null)
//# sourceMappingURL=/ts.efaa22ac.map