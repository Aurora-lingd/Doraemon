// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.header{\n    width: 324px;\n    height: 304px;\n    border: 2px solid #757575;\n    position: relative;\n    left: 50%;\n    margin-left: -162px;\n    border-radius: 50% ;\n    background: linear-gradient(229deg, rgba(255,255,255,1) 10%, rgba(7,187,238,1) 20%, rgba(16,166,206,1) 75%, rgba(0,0,0,1) 100%);\n    box-shadow: -5px 10px 15px rgba(171,168,168,1);\n}\n.header .face{\n    width: 264px;\n    height: 196px;\n    border-radius: 50%;\n    border: 1px solid white;\n    background-color: white;\n    position: absolute;\n    top: 80px;\n    left: 50%;\n    margin-left: -132px;\n    z-index: 3;\n}\n.header .eye{\n    width: 76px;\n    height: 86px;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    top: -40px;\n    margin-left: -38px;\n    border-radius: 35px;\n    background-color:white;\n    z-index: 1;\n}\n.header .eye::before{\n    content: '';\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    background-color: black;\n    position: absolute;\n    top: 50%;\n}\n \n.header .eye.left{\n    transform: translateX(37px);\n}\n.header .eye.right{\n    transform: translateX(-37px);\n}\n.header .eye.left::before{\n    left: 15px;\n}\n.header .eye.right::before{\n    right: 15px;\n}\n\n\n\n.header .nose{\n    width: 34px;\n    height: 34px;\n    border: 2px solid black;\n    border-radius: 45%;\n    background-color:#ba401d ;\n    position: absolute;\n    left: 50%;\n    margin-left: -17px;\n    top: 30px;\n}\n.header .nose::before{\n    content: '';\n    width: 10px;\n    height: 10px;\n    display: block;\n    position: absolute;\n    top: -2px;\n    left: -4px;\n    border-radius: 5px;\n    box-shadow: 19px 8px 5px #fff;\n}\n.header .nose::after{\n    display: block;\n    content: '';\n    height: 96px;\n    width: 2px;\n    background-color: black;\n    position: absolute;\n    left: 50%;\n    margin-left: -1px;\n    bottom: -96px;\n}\n.header .mouth{\n    width: 190px;\n    height: 180px;\n    border: 3px solid black;\n    position: absolute;\n    left: 50%;\n    margin-left: -95px;\n    border-radius: 0 0 100px 100px;\n    top: -20px;\n    border-top:transparent;\n    border-left: transparent;\n    border-right: transparent;\n}\n.header .mouth::before{\n    content: '';\n    width: 20px;\n    height: 55px;\n    display: block;\n    background-color: white;\n    position: absolute;\n    bottom: 39px;\n    left: 0;\n}\n.header .mouth::after{\n    content: '';\n    width: 20px;\n    height: 55px;\n    display: block;\n    background-color: white;\n    position: absolute;\n    bottom: 39px;\n    right: 0;\n\n}\n.header .huz,.header .huz::before,.header .huz::after{\n    width:58px;\n    height: 2px;\n    border: 1px solid black;\n    background-color: black;\n    position: absolute;\n    left: 50%;\n    margin-left: -29px;\n}\n\n.header .huz.left{\n    bottom: 130px;\n    transform: translateX(78px) rotate(-25deg);\n\n}\n.header .huz.right{\n    bottom: 130px;\n    transform: translateX(-78px) rotate(25deg);\n\n}\n.header .huz.left::before,.header .huz.right::before,.header .huz.left::after,.header .huz.right::after{\n    content: '';\n    display: block;\n}\n.header .huz.left::before{\n    bottom:-20px ;\n    transform: translateX(-6px) rotate(23deg);\n}\n.header .huz.right::before{\n    bottom:-20px ;\n    transform: translateX(6px) rotate(-23deg);\n}\n.header .huz.left::after{\n    bottom:-40px ;\n    transform: translateX(-15px) rotate(45deg);\n}\n.header .huz.right::after{\n    bottom:-40px;\n    transform: translateX(15px) rotate(-45deg);\n}\n.header .necklace{\n    width: 234px;\n    height: 24px;\n    border: 2px solid black;\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    margin-left: -117px;\n    background-color: #ba401d;\n    border-radius: 20px;\n    z-index: 3;\n}\n.header .necklace .bell{\n    width: 44px;\n    height: 44px;\n    border: 2px solid black;\n    background-color: #f3eb56;\n    position: absolute;\n    left: 50%;\n    margin-left: -22px;\n    top: 10px;\n    border-radius: 50%;\n}\n.header .necklace .bell .yuan{\n    width: 12px;\n    height: 10px;\n    border-radius: 50%;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    margin-left: -6px;\n    bottom: 10px;\n    background-color: black;\n    box-shadow: 11px -13px 4px white;\n    z-index: 10;\n}\n.header .necklace .bell::after,.header .necklace .bell::before{\n    content: '';\n    display: block;\n    position: absolute;\n}\n.header .necklace .bell::after{\n    width: 40px;\n    height: 6px;\n    border: 2px solid black;\n    top: 10px;\n    border-radius: 2px 2px 0 0 ;\n}\n.header .necklace .bell::before{\n    width: 4px;\n    height: 15px;\n    background-color: black;\n    left: 50%;\n    margin-left: -2px;\n    bottom: 0;\n}\n\n\n.body{\n    width: 224px;\n    height: 168px;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    margin-left: -112px;\n    top:-16px;\n    background: linear-gradient(270deg, rgba(7,187,238,1) 0%, rgba(48,116,173,1) 42%, rgba(42,125,179,1) 57%, rgba(8,185,234,1) 84%);\n    z-index: 2;\n}\n.body::before,.body::after{\n    content: '';\n    display: block;\n    width: 2px;\n    height: 38px;\n    border: 1px solid  rgba(7,187,238,1);\n    position: absolute;\n    left: 50%;\n    margin-left: -17px;\n    top: 0px;\n}\n.body::before{\n    transform: translateX(-95px);\n}\n.body::after{\n    transform: translateX(127px);\n}\n.body .belly{\n    width: 174px;\n    height: 174px;\n    border: 2px solid black;\n    border-radius: 50%;\n    background-color: white;\n    position: absolute;\n    left: 50%;\n    margin-left: -87px;\n    top: -35px;\n\n}\n.body .belly .bag{\n    width: 134px;\n    height: 134px;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    margin-left:-67px;\n    bottom: 20px;\n    border-radius: 0 0 50% 50%;\n}\n.body .belly .bag::before,.body .belly .bag::after{\n    width: 134px;\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    margin-left: -67px;\n}\n.body .belly .bag::before{\n    height: 53px;\n    border: 2px solid white;\n    top: 14px;\n}\n.body .belly .bag::after{\n    height: 0px;\n    border: 1px solid black;\n    top:65px;\n}\n.hand{\n    width: 100px;\n    height: 100px;\n    position:absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: 300px;\n}\n.hand.left{\n    transform: translateX(-120px);\n}\n.hand.right{\n    transform: translateX(120px);\n}\n.hand.left .arm,.hand.right .arm{\n    width: 60px;\n    height: 50px;\n    border: 1px solid black;\n    position: absolute;\n    left: 50%;\n    margin-left: -25px;\n    top: -5px;\n    background-color: rgba(7,187,238,1);\n    box-shadow: 10px 5px 10px #8b8b8f;\n}\n.hand.left .arm{\n    transform: translateX(-10px) rotate(-35deg);\n}\n.hand.right .arm{\n    transform: translateX(0px) rotate(35deg);\n}\n.hand .arm::after{\n    content: '';\n    display: block;\n    width: 64px;\n    height: 64px;\n    border: 2px solid black;\n    background-color: white;\n    position: absolute;\n    left: 50%;\n    margin-left: -32px;\n    top: -5px;\n    border-radius: 50%;\n    \n}\n.hand.left .arm::after{\n    transform: translateX(-40px);\n    background: linear-gradient(66deg, rgba(191,187,187,1) 0%, rgba(224,224,224,1) 16%, rgba(248,248,248,1) 30%, rgba(255,255,255,1) 100%);\n    \n}\n.hand.right .arm::after{\n    transform: translateX(40px);\n    background: linear-gradient(315deg, rgba(191,187,187,1) 0%, rgba(224,224,224,1) 16%, rgba(248,248,248,1) 30%, rgba(255,255,255,1) 100%);\n}\n.hand.left .arm::before{\n    transform: rotate(-55deg) translateY(10px);\n}\n.foot{\n    width: 120px;\n    height: 34px;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    margin-left: -60px;\n    border-radius:80px 50px 50px 50px ;\n    bottom: -10px;\n    z-index: 2;\n    background: rgb(171,168,168);\nbackground: linear-gradient(85deg, rgba(171,168,168,1) 0%, rgba(255,255,255,1) 18%);\n}\n.foot.left{\n    transform: translateX(-70px);\n}\n.foot.right{\n    transform: translateX(70px);\n}\n.foot.left::before{\n    content: '';\n    display: block;\n    width: 26px;\n    height: 14px;\n    position: absolute;\n   right:-26px;\n    bottom: 22px;\n    border: 2px solid black;\n    border-radius: 40px 40px 0 0;\n    background: rgb(255,255,255);\nbackground: linear-gradient(328deg, rgba(255,255,255,1) 0%, rgba(79,72,72,1) 100%);\n    border-bottom: none;\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  ui: {
    demo: document.querySelector('#demo'),
    styleTag: document.querySelector('#styleTag')
  },
  id: undefined,
  time: 5,
  n: 1,
  init: function init() {
    // player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.styleTag.innerHTML = _css.default.substr(0, player.n);
    player.eventsOnclick();
    player.play();
  },
  events: {
    // '#btnPause': 'pause',
    // '#btnPlay': 'play',
    '#btnSlow': "slow",
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  eventsOnclick: function eventsOnclick() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.styleTag.innerHTML = _css.default.substr(0, player.n);
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"css.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59406" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
        parents.push(k);
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map