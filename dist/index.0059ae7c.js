// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8LktY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5719a5f70059ae7c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2dUup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _aboutViewJs = require("./view/aboutView.js");
var _aboutViewJsDefault = parcelHelpers.interopDefault(_aboutViewJs);
var _habilitiesViewJs = require("./view/habilitiesView.js");
var _habilitiesViewJsDefault = parcelHelpers.interopDefault(_habilitiesViewJs);
var _workViewJs = require("./view/workView.js");
var _workViewJsDefault = parcelHelpers.interopDefault(_workViewJs);
var _contactViewJs = require("./view/contactView.js");
var _contactViewJsDefault = parcelHelpers.interopDefault(_contactViewJs);
const btnForm = document.querySelector('.primary');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const enviarForm = document.querySelector('form');
const spinner = document.querySelector('.spinner');
const reCaptcha = document.querySelector('#valid');
const captchaForm = document.querySelector('.captcha');
const espanol = document.getElementById('es');
const ingles = document.getElementById('en');
const captcha = new Captcha($('#canvas'), {
    autoRefresh: false,
    caseSensitive: false,
    clickRefresh: true
});
document.addEventListener('DOMContentLoaded', iniciarApp);
//resetForm.addEventListener('click', resetFormulario)
function iniciarApp() {
    btnForm.disabled = true;
    _modelJs.render.render = true;
    if (document.querySelector('form')) {
        name.addEventListener('blur', validarFormulario);
        email.addEventListener('blur', validarFormulario);
        subject.addEventListener('blur', validarFormulario);
        message.addEventListener('blur', validarFormulario);
        reCaptcha.addEventListener('click', captchaValidar);
        enviarForm.addEventListener('submit', enviarEmail);
    }
//btnForm.classList.add('cursor-not-allowed', 'opacity-50')
}
window.addEventListener("load", function(event) {
    name.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    subject.addEventListener('blur', validarFormulario);
    message.addEventListener('blur', validarFormulario);
    reCaptcha.addEventListener('click', captchaValidar);
    enviarForm.addEventListener('submit', enviarEmail);
});
espanol.addEventListener('click', changeLanguage);
ingles.addEventListener('click', changeLanguage);
function changeLanguage(lang) {
    _modelJs.language.language = this.innerText;
    controlLanguage();
    return true;
}
function controlLanguage() {
    _aboutViewJsDefault.default.render(_modelJs.language.language);
    _habilitiesViewJsDefault.default.render(_modelJs.language.language);
    _workViewJsDefault.default.render(_modelJs.language.language);
    _contactViewJsDefault.default.render(_modelJs.language.language);
    return true;
}
const mensajes = {
};
function validarFormulario(e) {
    if (e.target.id == 'name' && e.target.value.length > 0) {
        const error = this.parentElement.querySelector('p');
        if (error) {
            error.classList.add("removing");
            error.style.opacity = '0';
            setTimeout(function() {
                error.remove();
            }, 400);
        }
        //console.log(model.state, Object.values(model.state).every(item => item === true))
        _modelJs.state.name = true;
    } else if (e.target.id == 'name' && e.target.value.length === 0) {
        _modelJs.state.name = false;
        mostrarError.bind(this)('debes rellenar el nombre');
    }
    if (e.target.id == 'subject' && e.target.value.length > 0) {
        const error = this.parentElement.querySelector('p');
        if (error) {
            error.classList.add("removing");
            error.style.opacity = '0';
            setTimeout(function() {
                error.remove();
            }, 400);
        }
        _modelJs.state.subject = true;
    } else if (e.target.id == 'subject' && e.target.value.length === 0) {
        _modelJs.state.subject = false;
        mostrarError.bind(this)('debes rellenar el subject');
    }
    if (e.target.id == 'message' && e.target.value.length > 0) {
        const error = this.parentElement.querySelector('p');
        if (error) {
            error.classList.add("removing");
            error.style.opacity = '0';
            setTimeout(function() {
                error.remove();
            }, 400);
        }
        _modelJs.state.text = true;
    } else if (e.target.id == 'message' && e.target.value.length === 0) {
        _modelJs.state.text = false;
        mostrarError.bind(this)('debes rellenar el message');
    }
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (e.target.id === 'email') {
        const error = this.parentElement.querySelector('p');
        if (error) {
            error.classList.add("removing");
            error.style.opacity = '0';
            setTimeout(function() {
                error.remove();
            }, 400);
        }
        _modelJs.state.email = true;
        if (!re.test(e.target.value)) {
            _modelJs.state.email = false;
            mostrarError.bind(this)('debes rellenar el email bien');
        }
    }
    if (stateIsTrue()) return;
}
function captchaValidar() {
    const ans = captcha.valid($('input[name="code"]').val());
    if (ans) {
        _modelJs.state.captcha = true;
        captchaForm.classList.add("removing");
        captchaForm.style.opacity = '0';
        setTimeout(function() {
            captchaForm.style.visibility = 'hidden';
        }, 400);
        return stateIsTrue();
    //btnForm.disabled = false; 
    }
}
function stateIsTrue() {
    if (Object.values(_modelJs.state).every((item)=>item === true
    )) {
        btnForm.disabled = false;
        return true;
    } else btnForm.disabled = true;
}
function mostrarError(mensaje) {
    if (this.nextSibling) return;
    const mensajeError = document.createElement('p');
    mensajeError.classList.add("error");
    mensajeError.textContent = mensaje;
    this.parentElement.appendChild(mensajeError);
}
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_AkrT6Y0GbahNNY8C3VXwL');
})();
function enviarEmail(e) {
    e.preventDefault();
    spinner.style.visibility = "visible";
    btnForm.style.visibility = "hidden";
    emailjs.sendForm('service_afkvuhz', 'template_1vkk6pa', this).then(function() {
        spinner.style.visibility = "hidden";
        btnForm.style.visibility = "visible";
        const message1 = document.createElement('p');
        message1.classList.add("mystyle");
        message1.innerHTML = 'el formulario se ha enviado correctamente';
        document.querySelector(".actions").appendChild(message1);
        setTimeout(function() {
            document.querySelector("p.mystyle").remove();
        }, 4000);
        enviarForm.reset();
        captcha.refresh();
        captchaForm.classList.remove("removing");
        captchaForm.style.opacity = '1';
        captchaForm.style.visibility = 'visible';
        document.getElementById("code").value = '';
        restoreState();
        stateIsTrue();
        console.log('SUCCESS!');
    }, function(error) {
        spinner.style.visibility = "hidden";
        btnForm.style.visibility = "visible";
        const message2 = document.createElement('p');
        message2.classList.add("mystyle");
        message2.innerHTML = 'el formulario no se ha podido enviar';
        document.querySelector(".actions").appendChild(message2);
        setTimeout(function() {
            document.querySelector("p.mystyle").remove();
        }, 4000);
        console.log('FAILED...', error);
    });
}
function restoreState() {
    for(let key in _modelJs.state)_modelJs.state[key] = false;
}
const init = function() {
    _aboutViewJsDefault.default.addHandlerRender(controlLanguage);
    _habilitiesViewJsDefault.default.addHandlerRender(controlLanguage);
    _workViewJsDefault.default.addHandlerRender(controlLanguage);
    _contactViewJsDefault.default.addHandlerRender(controlLanguage);
};
init();
iniciarApp();

},{"./model.js":"dkYPG","./view/aboutView.js":"eaY21","./view/habilitiesView.js":"1wl9p","./view/workView.js":"kRFnn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./view/contactView.js":"f0gp0"}],"dkYPG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "language", ()=>language
);
parcelHelpers.export(exports, "render", ()=>render
);
const state = {
    name: false,
    email: false,
    subject: false,
    text: false,
    captcha: false
};
const language = {
    language: "ES"
};
const render = {
    render: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eaY21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class aboutView extends _viewJsDefault.default {
    _parentElement = document.getElementById('first');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
    }
    _generateMarkup(data) {
        return `
         <header class="major">
			<!--<h2>jeje</h2> -->
				<p>${data.about.title}</p>
		</header>
		<p>${data.about.text}</p>
        `;
    }
}
exports.default = new aboutView();

},{"./view.js":"eF7YH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eF7YH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../../images/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _languageJson = require("../../language.json");
var _languageJsonDefault = parcelHelpers.interopDefault(_languageJson);
class View {
    _data;
    /**
     * 
     * @param {*} data 
     * @param {*} render 
     * @returns 
     */ render(data, render = true) {
        // console.log('this._generateMarkup()',this)
        const markup = this._generateMarkup(_languageJsonDefault.default[data]);
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value)
            );
        });
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner = function() {
        const markup = `<div class="spinner">
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-loader"></use>
            </svg>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };
    renderError(error = this._errorMessage) {
        const markup = `<div class="error">
          <div>
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${error}</p>
        </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(error = this._message) {
        const markup = `<div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-smile"></use>
            </svg>
          </div>
          <p>${error}</p>
        </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"../../../images/icons.svg":"g8JJq","../../language.json":"awwat","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g8JJq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7tDcp') + "icons.023d1b17.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"awwat":[function(require,module,exports) {
module.exports = JSON.parse("{\"ES\":{\"about\":{\"title\":\"Sobre Mi\",\"text\":\"Soy un desarrollador full-stack con background en el area audiovisual. Soy una persona que trabaja muy bien en equipo y con vision resolutiva. He trabajado con diferentes tecnologias como React, Redux, HTML, CSS, Javascript entre otras tecnologías y acostumbrado a cmunicarme en Inglés de forma oral y escrita.\"},\"abilities\":{\"title\":\"Mis Habilidades\",\"text\":\"Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.\"},\"work\":{\"title\":\"Mi Experiencia Laboral\",\"text\":\"A lo largo de mi experiencia laboral he trabajado en diferentes proyectos y tecnologias.\",\"positions\":[{\"title\":\"Protecmedia\",\"text\":\"Desarrollo web con el CMS Millenium Designer.\",\"img\":\"images/descarga.png\"},{\"title\":\"Booboo Operador Logistico\",\"text\":\"Desarrollo y mantenimiento de la plataforma con Angular, NodeJs y PostgreSql.\",\"img\":\"images/booboo.png\"},{\"title\":\"CodaFish\",\"text\":\"HTML, CSS, JavaScript y Wordpress.\",\"img\":\"images/codafish-logo.png\"}]},\"contact\":{\"title\":\"Contacto\",\"name\":\"Nombre\",\"email\":\"Email\",\"subject\":\"Asunto\",\"message\":\"Mensaje\",\"send\":\"Enviar\"},\"aside\":{\"0\":\"Sobre Mi\",\"1\":\"Mis Habilidades\",\"2\":\"Mis Logros\",\"3\":\"Contacto\",\"text\":\"Programador Fullstack\"}},\"EN\":{\"about\":{\"title\":\"About Me\",\"text\":\"I'm a Full-stack developer with an audiovisual background. I'm a good team player with resolution atittude. I've worked in different technologies like React, Redux, HTML, CSS, Javascript like many different other and i'm used to comunicate myself in English and Spanish spoken and writen.\"},\"abilities\":{\"title\":\"My Abilidades\",\"text\":\"Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.\"},\"work\":{\"title\":\"My Work Experience\",\"text\":\"Throughout my work experience i've worked in different projects and technologies.\",\"positions\":[{\"title\":\"Protecmedia\",\"text\":\"Web development with Millenium Designer CMS.\",\"img\":\"../images/descarga.png\"},{\"title\":\"Booboo Operador Logistico\",\"text\":\"Development and maintainment of the platform with Angular, NodeJs and PostgreSql.\",\"img\":\"images/booboo.png\"},{\"title\":\"CodaFish\",\"text\":\"HTML, CSS, JavaScript and Wordpress.\",\"img\":\"images/codafish-logo.png\"}]},\"contact\":{\"title\":\"Contact\",\"name\":\"Name\",\"email\":\"Email\",\"subject\":\"Subject\",\"message\":\"Message\",\"send\":\"Send\"},\"aside\":{\"0\":\"About Mi\",\"1\":\"My Abilidades\",\"2\":\"My Achievements\",\"3\":\"Contact\",\"text\":\"Fullstack Developer\"}}}");

},{}],"1wl9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class habilitiesView extends _viewJsDefault.default {
    _parentElement = document.querySelector('#two .container');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
    }
    _generateMarkup(data) {
        return `
        <h3>${data.abilities.title}</h3>
        <p>${data.abilities.text}</p>
        <ul class="feature-icons">
            <li class="icon brands fa-js">JavaScript</li>
            <li class="icon brands fa-node-js">Node Js</li>
            <li class="icon brands fa-html5">HTML</li>
            <li class="icon solid fa-cubes">MySQL</li>
            <li class="icon brands fa-css3-alt">CSS</li>
            <li class="icon solid fa-database">MongoDB</li>
        </ul>
        `;
    }
}
exports.default = new habilitiesView();

},{"./view.js":"eF7YH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRFnn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class workView extends _viewJsDefault.default {
    _parentElement = document.querySelector('#three .container');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
    }
    _generateMarkup(data) {
        return `
        <h3>${data.abilities.title}</h3>
									<p>${data.abilities.text}</p>
									<div class="features">
									${data.work["positions"].map((item)=>{
            return `<article>
											<a href="#" class="image"><img src="${item.img}" alt="" /></a>
											<div class="inner">
												<h4>${item.title}</h4>
												<p>${item.text}</p>
											</div>
										</article>`;
        }).join('')}
										
        `;
    }
}
exports.default = new workView();

},{"./view.js":"eF7YH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0gp0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class contactView extends _viewJsDefault.default {
    _parentElement = document.querySelector('#four .container');
    _name = document.querySelector('#name');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
        console.log(this);
    }
    _generateMarkup(data) {
        return `
        <h3>${data.contact.title}</h3>
        <form if="form" method="post">
            <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="${data.contact.name}" /></div>
                <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="${data.contact.email}" /></div>
                <div class="col-12"><input type="text" name="subject" id="subject" placeholder="${data.contact.subject}" /></div>
                <div class="col-12"><textarea name="message" id="message" placeholder="${data.contact.message}" rows="6"></textarea></div>
                <div class="col-12">
                    <ul class="actions">
                        <li><input type="submit" class="primary" value="${data.contact.send}" /></li>
                        <li><div class="spinner" style="visibility: hidden;"></div></li>
                        <!--<li><input id="reset" type="reset" value="Reset Form" /></li>-->
                    </ul>
                </div>
            </div>
            

        </form>
        <div class="captcha">
            <canvas id="canvas"></canvas>
            <input id="code" name="code" />
            <button id="valid">send</button>
        </div>
        `;
    }
}
exports.default = new contactView();

},{"./view.js":"eF7YH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8LktY","2dUup"], "2dUup", "parcelRequiree9aa")

//# sourceMappingURL=index.0059ae7c.js.map
