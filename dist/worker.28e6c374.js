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
})({"lA1v7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
module.bundle.HMR_BUNDLE_ID = "96232e1028e6c374";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"evoMS":[function(require,module,exports) {
var _workerServer = require("./worker-server");
const ctx = self;
(0, _workerServer.messageManager).onOutgoingMessage.bind(()=>{
    let msgs = (0, _workerServer.messageManager).getOutgoingMessages();
    for (let msg of msgs)ctx.postMessage(msg.msg, msg.transferables);
});
let launchHandler = (evt)=>{
    if (evt && evt.data && evt.data.t === "wasm") {
        let url = location.href.startsWith("blob") ? evt.data.url : new URL(require("d640bc9b0ac25d27")).toString();
        (0, _workerServer.launchWorkerServer)(url);
        ctx.removeEventListener("message", launchHandler);
    }
};
ctx.addEventListener("message", launchHandler);
ctx.addEventListener("message", (evt)=>{
    (0, _workerServer.messageManager).postIncomingMessage(evt.data);
});

},{"./worker-server":"4vjJx","d640bc9b0ac25d27":"1YY4N"}],"4vjJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messageManager", ()=>messageManager);
parcelHelpers.export(exports, "launchWorkerServer", ()=>launchWorkerServer);
var _zapparCv = require("./zappar-cv");
var _zapparCwrap = require("./gen/zappar-cwrap");
var _zapparServer = require("./gen/zappar-server");
var _messages = require("./messages");
var _glMatrix = require("gl-matrix");
var _zapparNative = require("./gen/zappar-native");
var _workerImagebitmap = require("./worker-imagebitmap");
var _profile = require("./profile");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let messageManager = new (0, _messages.MsgManager)();
let latestCameraToScreenRotation = 0;
function launchWorkerServer(wasmUrl) {
    return __awaiter(this, void 0, void 0, function*() {
        let mod = _zapparCv.default({
            locateFile: (path, prefix)=>{
                if (path.endsWith("zappar-cv.wasm")) return wasmUrl;
                return prefix + path;
            },
            onRuntimeInitialized: ()=>{
                let r = (0, _zapparCwrap.getRuntimeObject)(mod);
                let server = new (0, _zapparServer.zappar_server)(r, (pipelineId, ab)=>{
                    messageManager.postOutgoingMessage({
                        p: pipelineId,
                        t: "zappar",
                        d: ab
                    }, [
                        ab
                    ]);
                });
                messageManager.postOutgoingMessage("loaded", []);
                messageManager.onIncomingMessage.bind((msg)=>{
                    var _a;
                    switch(msg.t){
                        case "zappar":
                            server.processBuffer(msg.d);
                            messageManager.postOutgoingMessage({
                                t: "buf",
                                d: msg.d
                            }, [
                                msg.d
                            ]);
                            break;
                        case "buf":
                            (_a = server.serializersByPipelineId.get(msg.p)) === null || _a === void 0 || _a.bufferReturn(msg.d);
                            break;
                        case "cameraFrameC2S":
                            {
                                let msgt = msg;
                                let pipeline = server._pipeline_by_instance.get(msgt.p);
                                let att;
                                if (pipeline) {
                                    r.pipeline_camera_frame_submit(pipeline, msgt.d, msgt.width, msgt.height, msgt.token, msgt.c2d, msgt.cm, msgt.userFacing);
                                    r.pipeline_frame_update(pipeline);
                                    att = r.pipeline_camera_frame_device_attitude(pipeline);
                                    server.exploreState();
                                }
                                let ret = {
                                    token: msgt.token,
                                    d: msgt.d,
                                    p: msgt.p,
                                    t: "cameraFrameRecycleS2C",
                                    att
                                };
                                messageManager.postOutgoingMessage(ret, [
                                    msgt.d
                                ]);
                                break;
                            }
                        case "streamC2S":
                            {
                                let msgt = msg;
                                consumeStream(mod, r, msgt.s, msgt.p, msgt.userFacing, server, msgt.source);
                                break;
                            }
                        case "cameraToScreenC2S":
                            {
                                let msgt = msg;
                                latestCameraToScreenRotation = msgt.r;
                                break;
                            }
                        case "imageBitmapC2S":
                            {
                                let msgt = msg;
                                (0, _workerImagebitmap.handleImageBitmap)(msgt, r, server, messageManager);
                                break;
                            }
                    }
                });
            }
        });
    });
}
let streamDataBufferPointer = 0;
let streamDataBufferLength = 0;
let tokenId = 1;
const cameraToDeviceTransform = (0, _glMatrix.mat4).create();
const cameraModel = new Float32Array([
    300,
    300,
    160,
    120,
    0,
    0
]);
function consumeStream(mod, r, stream, p, userFacing, server, source) {
    return __awaiter(this, void 0, void 0, function*() {
        const reader = yield stream.getReader();
        while(true){
            let result = yield reader.read();
            if (result.done) {
                console.log("Stream done");
                return;
            }
            let frame = result.value;
            let size = frame.allocationSize();
            if (size > streamDataBufferLength) {
                if (streamDataBufferPointer > 0) mod._free(streamDataBufferPointer);
                streamDataBufferPointer = mod._malloc(size);
                streamDataBufferLength = size;
            }
            yield frame.copyTo(mod.HEAPU8.subarray(streamDataBufferPointer, streamDataBufferPointer + streamDataBufferLength));
            let token = tokenId;
            tokenId++;
            const width = frame.visibleRect.width;
            const height = frame.visibleRect.height;
            let uvTransform;
            let dataWidth = width;
            let dataHeight = height;
            switch(latestCameraToScreenRotation){
                case 270:
                    uvTransform = new Float32Array([
                        0,
                        1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        1,
                        0,
                        0,
                        1
                    ]);
                    dataWidth = height;
                    dataHeight = width;
                    break;
                case 180:
                    uvTransform = new Float32Array([
                        -1,
                        0,
                        0,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1
                    ]);
                    break;
                case 90:
                    uvTransform = new Float32Array([
                        0,
                        -1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        1
                    ]);
                    dataWidth = height;
                    dataHeight = width;
                    break;
                default:
                    uvTransform = new Float32Array([
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                    ]);
                    break;
            }
            let clone = frame.clone();
            if (userFacing) (0, _glMatrix.mat4).fromScaling(cameraToDeviceTransform, [
                -1,
                1,
                -1
            ]);
            else (0, _glMatrix.mat4).identity(cameraToDeviceTransform);
            let focalLength = 300.0 * (0, _profile.profile).dataWidth / 320.0;
            cameraModel[0] = focalLength;
            cameraModel[1] = focalLength;
            cameraModel[2] = (0, _profile.profile).dataWidth * 0.5;
            cameraModel[3] = (0, _profile.profile).dataHeight * 0.5;
            const ret = {
                token: token,
                d: clone,
                p: p,
                t: "videoFrameS2C",
                userFacing,
                uvTransform,
                w: dataWidth,
                h: dataHeight,
                cameraToDevice: cameraToDeviceTransform,
                cameraModel,
                source
            };
            messageManager.postOutgoingMessage(ret, [
                ret.d,
                ret.uvTransform.buffer
            ]);
            const pipeline = server._pipeline_by_instance.get(p);
            if (pipeline) {
                r.pipeline_camera_frame_submit_raw_pointer(pipeline, streamDataBufferPointer, size, framePixelFormatFromFormat(frame.format), width, height, token, cameraToDeviceTransform, latestCameraToScreenRotation, cameraModel, userFacing);
                r.pipeline_frame_update(pipeline);
                server.exploreState();
            }
            frame.close();
        }
    });
}
function framePixelFormatFromFormat(f) {
    switch(f){
        case "I420":
            return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_I420;
        case "I420A":
            return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_I420A;
        case "I422":
            return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_I422;
        case "I444":
            return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_I444;
        case "NV12":
            return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_NV12;
        case "RGBA":
        case "RGBX":
            return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_RGBA;
        case "BGRA":
        case "BGRX":
            return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_BGRA;
    }
    return (0, _zapparNative.frame_pixel_format_t).FRAME_PIXEL_FORMAT_Y;
}

},{"./zappar-cv":"4YWuy","./gen/zappar-cwrap":"cdARF","./gen/zappar-server":"elKUo","./messages":"6FPsV","gl-matrix":"28U3r","./gen/zappar-native":"ajquC","./worker-imagebitmap":"kEg0J","./profile":"ly8v4","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4YWuy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var ZCV = function() {
    var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
    return function(ZCV) {
        ZCV = ZCV || {};
        var e;
        e || (e = typeof ZCV !== "undefined" ? ZCV : {});
        var aa, ba;
        e.ready = new Promise(function(a, b) {
            aa = a;
            ba = b;
        });
        var ca = {}, l;
        for(l in e)e.hasOwnProperty(l) && (ca[l] = e[l]);
        var da = "./this.program";
        function ea(a, b) {
            throw b;
        }
        var m = "", fa;
        m = self.location.href;
        _scriptDir && (m = _scriptDir);
        0 !== m.indexOf("blob:") ? m = m.substr(0, m.lastIndexOf("/") + 1) : m = "";
        fa = function(a) {
            var b = new XMLHttpRequest;
            b.open("GET", a, !1);
            b.responseType = "arraybuffer";
            b.send(null);
            return new Uint8Array(b.response);
        };
        var ha = e.print || console.log.bind(console), n = e.printErr || console.warn.bind(console);
        for(l in ca)ca.hasOwnProperty(l) && (e[l] = ca[l]);
        ca = null;
        e.thisProgram && (da = e.thisProgram);
        e.quit && (ea = e.quit);
        function ia(a) {
            ja || (ja = {});
            ja[a] || (ja[a] = 1, n(a));
        }
        var ja, ka;
        e.wasmBinary && (ka = e.wasmBinary);
        var noExitRuntime = e.noExitRuntime || !0;
        "object" !== typeof WebAssembly && x("no native wasm support detected");
        var la, ma = !1, na;
        function oa(a, b) {
            a || x("Assertion failed: " + b);
        }
        function pa(a) {
            var b = e["_" + a];
            oa(b, "Cannot call unknown function " + a + ", make sure it is exported");
            return b;
        }
        function qa(a, b, c, d) {
            var f = {
                string: function(p) {
                    var t = 0;
                    if (null !== p && void 0 !== p && 0 !== p) {
                        var w = (p.length << 2) + 1;
                        t = ra(w);
                        z(p, A, t, w);
                    }
                    return t;
                },
                array: function(p) {
                    var t = ra(p.length);
                    D.set(p, t);
                    return t;
                }
            }, g = pa(a), k = [];
            a = 0;
            if (d) for(var q = 0; q < d.length; q++){
                var r = f[c[q]];
                r ? (0 === a && (a = sa()), k[q] = r(d[q])) : k[q] = d[q];
            }
            c = g.apply(null, k);
            c = function(p) {
                return "string" === b ? E(p) : "boolean" === b ? !!p : p;
            }(c);
            0 !== a && ta(a);
            return c;
        }
        var ua = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function va(a, b, c) {
            var d = b + c;
            for(c = b; a[c] && !(c >= d);)++c;
            if (16 < c - b && a.subarray && ua) return ua.decode(a.subarray(b, c));
            for(d = ""; b < c;){
                var f = a[b++];
                if (f & 128) {
                    var g = a[b++] & 63;
                    if (192 == (f & 224)) d += String.fromCharCode((f & 31) << 6 | g);
                    else {
                        var k = a[b++] & 63;
                        f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | k : (f & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
                        65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
                    }
                } else d += String.fromCharCode(f);
            }
            return d;
        }
        function E(a, b) {
            return a ? va(A, a, b) : "";
        }
        function z(a, b, c, d) {
            if (!(0 < d)) return 0;
            var f = c;
            d = c + d - 1;
            for(var g = 0; g < a.length; ++g){
                var k = a.charCodeAt(g);
                if (55296 <= k && 57343 >= k) {
                    var q = a.charCodeAt(++g);
                    k = 65536 + ((k & 1023) << 10) | q & 1023;
                }
                if (127 >= k) {
                    if (c >= d) break;
                    b[c++] = k;
                } else {
                    if (2047 >= k) {
                        if (c + 1 >= d) break;
                        b[c++] = 192 | k >> 6;
                    } else {
                        if (65535 >= k) {
                            if (c + 2 >= d) break;
                            b[c++] = 224 | k >> 12;
                        } else {
                            if (c + 3 >= d) break;
                            b[c++] = 240 | k >> 18;
                            b[c++] = 128 | k >> 12 & 63;
                        }
                        b[c++] = 128 | k >> 6 & 63;
                    }
                    b[c++] = 128 | k & 63;
                }
            }
            b[c] = 0;
            return c - f;
        }
        function wa(a) {
            for(var b = 0, c = 0; c < a.length; ++c){
                var d = a.charCodeAt(c);
                55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
                127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
            }
            return b;
        }
        function xa(a) {
            var b = wa(a) + 1, c = ya(b);
            c && z(a, D, c, b);
            return c;
        }
        function za(a, b) {
            for(var c = 0; c < a.length; ++c)D[b++ >> 0] = a.charCodeAt(c);
            D[b >> 0] = 0;
        }
        var Aa, D, A, Ba, F, G, H, Ca, Da;
        function Ea() {
            var a = la.buffer;
            Aa = a;
            e.HEAP8 = D = new Int8Array(a);
            e.HEAP16 = Ba = new Int16Array(a);
            e.HEAP32 = G = new Int32Array(a);
            e.HEAPU8 = A = new Uint8Array(a);
            e.HEAPU16 = F = new Uint16Array(a);
            e.HEAPU32 = H = new Uint32Array(a);
            e.HEAPF32 = Ca = new Float32Array(a);
            e.HEAPF64 = Da = new Float64Array(a);
        }
        var I, Fa = [], Ga = [], Ha = [], Ia = [];
        function Ja() {
            var a = e.preRun.shift();
            Fa.unshift(a);
        }
        var Ka = 0, La = null, Ma = null;
        function Na() {
            Ka++;
            e.monitorRunDependencies && e.monitorRunDependencies(Ka);
        }
        function Oa() {
            Ka--;
            e.monitorRunDependencies && e.monitorRunDependencies(Ka);
            if (0 == Ka && (null !== La && (clearInterval(La), La = null), Ma)) {
                var a = Ma;
                Ma = null;
                a();
            }
        }
        e.preloadedImages = {};
        e.preloadedAudios = {};
        function x(a) {
            if (e.onAbort) e.onAbort(a);
            n(a);
            ma = !0;
            na = 1;
            a = new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
            ba(a);
            throw a;
        }
        var Pa = "zappar-cv.wasm";
        if (String.prototype.startsWith ? !Pa.startsWith("data:application/octet-stream;base64,") : 0 !== Pa.indexOf("data:application/octet-stream;base64,")) {
            var Qa = Pa;
            Pa = e.locateFile ? e.locateFile(Qa, m) : m + Qa;
        }
        function Ra(a) {
            var b = Pa;
            try {
                a: {
                    try {
                        if (b == Pa && ka) {
                            var c = new Uint8Array(ka);
                            break a;
                        }
                        if (fa) {
                            c = fa(b);
                            break a;
                        }
                        throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
                    } catch (g) {
                        x(g);
                    }
                    c = void 0;
                }
                var d = new WebAssembly.Module(c);
                var f = new WebAssembly.Instance(d, a);
            } catch (g) {
                throw a = g.toString(), n("failed to compile wasm module: " + a), (0 <= a.indexOf("imported Memory") || 0 <= a.indexOf("memory import")) && n("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."), g;
            }
            return [
                f,
                d
            ];
        }
        var K, M;
        function Sa(a) {
            for(; 0 < a.length;){
                var b = a.shift();
                if ("function" == typeof b) b(e);
                else {
                    var c = b.vd;
                    "number" === typeof c ? void 0 === b.Oc ? I.get(c)() : I.get(c)(b.Oc) : c(void 0 === b.Oc ? null : b.Oc);
                }
            }
        }
        var Ta;
        Ta = function() {
            return performance.now();
        };
        function Ua(a, b) {
            if (0 === a) a = Date.now();
            else if (1 === a || 4 === a) a = Ta();
            else return G[Va() >> 2] = 28, -1;
            G[b >> 2] = a / 1E3 | 0;
            G[b + 4 >> 2] = a % 1E3 * 1E6 | 0;
            return 0;
        }
        function Wa(a) {
            this.Hc = a - 16;
            this.Md = function(b) {
                G[this.Hc + 8 >> 2] = b;
            };
            this.Jd = function(b) {
                G[this.Hc + 0 >> 2] = b;
            };
            this.Kd = function() {
                G[this.Hc + 4 >> 2] = 0;
            };
            this.Id = function() {
                D[this.Hc + 12 >> 0] = 0;
            };
            this.Ld = function() {
                D[this.Hc + 13 >> 0] = 0;
            };
            this.yd = function(b, c) {
                this.Md(b);
                this.Jd(c);
                this.Kd();
                this.Id();
                this.Ld();
            };
        }
        var Ya = 0;
        function Za(a, b) {
            for(var c = 0, d = a.length - 1; 0 <= d; d--){
                var f = a[d];
                "." === f ? a.splice(d, 1) : ".." === f ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
            }
            if (b) for(; c; c--)a.unshift("..");
            return a;
        }
        function $a(a) {
            var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
            (a = Za(a.split("/").filter(function(d) {
                return !!d;
            }), !b).join("/")) || b || (a = ".");
            a && c && (a += "/");
            return (b ? "/" : "") + a;
        }
        function ab(a) {
            var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
            a = b[0];
            b = b[1];
            if (!a && !b) return ".";
            b && (b = b.substr(0, b.length - 1));
            return a + b;
        }
        function bb(a) {
            if ("/" === a) return "/";
            a = $a(a);
            a = a.replace(/\/$/, "");
            var b = a.lastIndexOf("/");
            return -1 === b ? a : a.substr(b + 1);
        }
        function cb() {
            if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
                var a = new Uint8Array(1);
                return function() {
                    crypto.getRandomValues(a);
                    return a[0];
                };
            }
            return function() {
                x("randomDevice");
            };
        }
        function db() {
            for(var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--){
                b = 0 <= c ? arguments[c] : "/";
                if ("string" !== typeof b) throw new TypeError("Arguments to path.resolve must be strings");
                if (!b) return "";
                a = b + "/" + a;
                b = "/" === b.charAt(0);
            }
            a = Za(a.split("/").filter(function(d) {
                return !!d;
            }), !b).join("/");
            return (b ? "/" : "") + a || ".";
        }
        var eb = [];
        function fb(a, b) {
            eb[a] = {
                input: [],
                wc: [],
                Gc: b
            };
            gb(a, hb);
        }
        var hb = {
            open: function(a) {
                var b = eb[a.node.Lc];
                if (!b) throw new N(43);
                a.uc = b;
                a.seekable = !1;
            },
            close: function(a) {
                a.uc.Gc.flush(a.uc);
            },
            flush: function(a) {
                a.uc.Gc.flush(a.uc);
            },
            read: function(a, b, c, d) {
                if (!a.uc || !a.uc.Gc.hd) throw new N(60);
                for(var f = 0, g = 0; g < d; g++){
                    try {
                        var k = a.uc.Gc.hd(a.uc);
                    } catch (q) {
                        throw new N(29);
                    }
                    if (void 0 === k && 0 === f) throw new N(6);
                    if (null === k || void 0 === k) break;
                    f++;
                    b[c + g] = k;
                }
                f && (a.node.timestamp = Date.now());
                return f;
            },
            write: function(a, b, c, d) {
                if (!a.uc || !a.uc.Gc.$c) throw new N(60);
                try {
                    for(var f = 0; f < d; f++)a.uc.Gc.$c(a.uc, b[c + f]);
                } catch (g) {
                    throw new N(29);
                }
                d && (a.node.timestamp = Date.now());
                return f;
            }
        }, jb = {
            hd: function(a) {
                if (!a.input.length) {
                    var b = null;
                    "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
                    if (!b) return null;
                    a.input = ib(b, !0);
                }
                return a.input.shift();
            },
            $c: function(a, b) {
                null === b || 10 === b ? (ha(va(a.wc, 0)), a.wc = []) : 0 != b && a.wc.push(b);
            },
            flush: function(a) {
                a.wc && 0 < a.wc.length && (ha(va(a.wc, 0)), a.wc = []);
            }
        }, kb = {
            $c: function(a, b) {
                null === b || 10 === b ? (n(va(a.wc, 0)), a.wc = []) : 0 != b && a.wc.push(b);
            },
            flush: function(a) {
                a.wc && 0 < a.wc.length && (n(va(a.wc, 0)), a.wc = []);
            }
        }, P = {
            zc: null,
            Bc: function() {
                return P.createNode(null, "/", 16895, 0);
            },
            createNode: function(a, b, c, d) {
                if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new N(63);
                P.zc || (P.zc = {
                    dir: {
                        node: {
                            yc: P.qc.yc,
                            Ac: P.qc.Ac,
                            Jc: P.qc.Jc,
                            Qc: P.qc.Qc,
                            nd: P.qc.nd,
                            Wc: P.qc.Wc,
                            od: P.qc.od,
                            Rc: P.qc.Rc,
                            Sc: P.qc.Sc
                        },
                        stream: {
                            Ec: P.sc.Ec
                        }
                    },
                    file: {
                        node: {
                            yc: P.qc.yc,
                            Ac: P.qc.Ac
                        },
                        stream: {
                            Ec: P.sc.Ec,
                            read: P.sc.read,
                            write: P.sc.write,
                            cd: P.sc.cd,
                            jd: P.sc.jd,
                            ld: P.sc.ld
                        }
                    },
                    link: {
                        node: {
                            yc: P.qc.yc,
                            Ac: P.qc.Ac,
                            Mc: P.qc.Mc
                        },
                        stream: {}
                    },
                    dd: {
                        node: {
                            yc: P.qc.yc,
                            Ac: P.qc.Ac
                        },
                        stream: lb
                    }
                });
                c = mb(a, b, c, d);
                16384 === (c.mode & 61440) ? (c.qc = P.zc.dir.node, c.sc = P.zc.dir.stream, c.rc = {}) : 32768 === (c.mode & 61440) ? (c.qc = P.zc.file.node, c.sc = P.zc.file.stream, c.tc = 0, c.rc = null) : 40960 === (c.mode & 61440) ? (c.qc = P.zc.link.node, c.sc = P.zc.link.stream) : 8192 === (c.mode & 61440) && (c.qc = P.zc.dd.node, c.sc = P.zc.dd.stream);
                c.timestamp = Date.now();
                a && (a.rc[b] = c, a.timestamp = c.timestamp);
                return c;
            },
            Yd: function(a) {
                return a.rc ? a.rc.subarray ? a.rc.subarray(0, a.tc) : new Uint8Array(a.rc) : new Uint8Array(0);
            },
            ed: function(a, b) {
                var c = a.rc ? a.rc.length : 0;
                c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.rc, a.rc = new Uint8Array(b), 0 < a.tc && a.rc.set(c.subarray(0, a.tc), 0));
            },
            Gd: function(a, b) {
                if (a.tc != b) {
                    if (0 == b) a.rc = null, a.tc = 0;
                    else {
                        var c = a.rc;
                        a.rc = new Uint8Array(b);
                        c && a.rc.set(c.subarray(0, Math.min(b, a.tc)));
                        a.tc = b;
                    }
                }
            },
            qc: {
                yc: function(a) {
                    var b = {};
                    b.td = 8192 === (a.mode & 61440) ? a.id : 1;
                    b.Zc = a.id;
                    b.mode = a.mode;
                    b.Ed = 1;
                    b.uid = 0;
                    b.wd = 0;
                    b.Lc = a.Lc;
                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.tc : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                    b.pd = new Date(a.timestamp);
                    b.Dd = new Date(a.timestamp);
                    b.sd = new Date(a.timestamp);
                    b.qd = 4096;
                    b.rd = Math.ceil(b.size / b.qd);
                    return b;
                },
                Ac: function(a, b) {
                    void 0 !== b.mode && (a.mode = b.mode);
                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                    void 0 !== b.size && P.Gd(a, b.size);
                },
                Jc: function() {
                    throw nb[44];
                },
                Qc: function(a, b, c, d) {
                    return P.createNode(a, b, c, d);
                },
                nd: function(a, b, c) {
                    if (16384 === (a.mode & 61440)) {
                        try {
                            var d = ob(b, c);
                        } catch (g) {}
                        if (d) for(var f in d.rc)throw new N(55);
                    }
                    delete a.parent.rc[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.rc[c] = a;
                    b.timestamp = a.parent.timestamp;
                    a.parent = b;
                },
                Wc: function(a, b) {
                    delete a.rc[b];
                    a.timestamp = Date.now();
                },
                od: function(a, b) {
                    var c = ob(a, b), d;
                    for(d in c.rc)throw new N(55);
                    delete a.rc[b];
                    a.timestamp = Date.now();
                },
                Rc: function(a) {
                    var b = [
                        ".",
                        ".."
                    ], c;
                    for(c in a.rc)a.rc.hasOwnProperty(c) && b.push(c);
                    return b;
                },
                Sc: function(a, b, c) {
                    a = P.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a;
                },
                Mc: function(a) {
                    if (40960 !== (a.mode & 61440)) throw new N(28);
                    return a.link;
                }
            },
            sc: {
                read: function(a, b, c, d, f) {
                    var g = a.node.rc;
                    if (f >= a.node.tc) return 0;
                    a = Math.min(a.node.tc - f, d);
                    if (8 < a && g.subarray) b.set(g.subarray(f, f + a), c);
                    else for(d = 0; d < a; d++)b[c + d] = g[f + d];
                    return a;
                },
                write: function(a, b, c, d, f, g) {
                    b.buffer === D.buffer && (g = !1);
                    if (!d) return 0;
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.rc || a.rc.subarray)) {
                        if (g) return a.rc = b.subarray(c, c + d), a.tc = d;
                        if (0 === a.tc && 0 === f) return a.rc = b.slice(c, c + d), a.tc = d;
                        if (f + d <= a.tc) return a.rc.set(b.subarray(c, c + d), f), d;
                    }
                    P.ed(a, f + d);
                    if (a.rc.subarray && b.subarray) a.rc.set(b.subarray(c, c + d), f);
                    else for(g = 0; g < d; g++)a.rc[f + g] = b[c + g];
                    a.tc = Math.max(a.tc, f + d);
                    return d;
                },
                Ec: function(a, b, c) {
                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.tc);
                    if (0 > b) throw new N(28);
                    return b;
                },
                cd: function(a, b, c) {
                    P.ed(a.node, b + c);
                    a.node.tc = Math.max(a.node.tc, b + c);
                },
                jd: function(a, b, c, d, f, g) {
                    if (0 !== b) throw new N(28);
                    if (32768 !== (a.node.mode & 61440)) throw new N(43);
                    a = a.node.rc;
                    if (g & 2 || a.buffer !== Aa) {
                        if (0 < d || d + c < a.length) a.subarray ? a = a.subarray(d, d + c) : a = Array.prototype.slice.call(a, d, d + c);
                        d = !0;
                        g = 16384 * Math.ceil(c / 16384);
                        for(b = ya(g); c < g;)D[b + c++] = 0;
                        c = b;
                        if (!c) throw new N(48);
                        D.set(a, c);
                    } else d = !1, c = a.byteOffset;
                    return {
                        Hc: c,
                        Ud: d
                    };
                },
                ld: function(a, b, c, d, f) {
                    if (32768 !== (a.node.mode & 61440)) throw new N(43);
                    if (f & 2) return 0;
                    P.sc.write(a, b, 0, d, c, !1);
                    return 0;
                }
            }
        }, pb = null, qb = {}, rb = [], sb = 1, Q = null, tb = !0, R = {}, N = null, nb = {};
        function T(a, b) {
            a = db("/", a);
            b = b || {};
            if (!a) return {
                path: "",
                node: null
            };
            var c = {
                fd: !0,
                ad: 0
            }, d;
            for(d in c)void 0 === b[d] && (b[d] = c[d]);
            if (8 < b.ad) throw new N(32);
            a = Za(a.split("/").filter(function(k) {
                return !!k;
            }), !1);
            var f = pb;
            c = "/";
            for(d = 0; d < a.length; d++){
                var g = d === a.length - 1;
                if (g && b.parent) break;
                f = ob(f, a[d]);
                c = $a(c + "/" + a[d]);
                f.Kc && (!g || g && b.fd) && (f = f.Kc.root);
                if (!g || b.Pc) {
                    for(g = 0; 40960 === (f.mode & 61440);)if (f = ub(c), c = db(ab(c), f), f = T(c, {
                        ad: b.ad
                    }).node, 40 < g++) throw new N(32);
                }
            }
            return {
                path: c,
                node: f
            };
        }
        function vb(a) {
            for(var b;;){
                if (a === a.parent) return a = a.Bc.kd, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
                b = b ? a.name + "/" + b : a.name;
                a = a.parent;
            }
        }
        function wb(a, b) {
            for(var c = 0, d = 0; d < b.length; d++)c = (c << 5) - c + b.charCodeAt(d) | 0;
            return (a + c >>> 0) % Q.length;
        }
        function ob(a, b) {
            var c;
            if (c = (c = xb(a, "x")) ? c : a.qc.Jc ? 0 : 2) throw new N(c, a);
            for(c = Q[wb(a.id, b)]; c; c = c.Fc){
                var d = c.name;
                if (c.parent.id === a.id && d === b) return c;
            }
            return a.qc.Jc(a, b);
        }
        function mb(a, b, c, d) {
            a = new yb(a, b, c, d);
            b = wb(a.parent.id, a.name);
            a.Fc = Q[b];
            return Q[b] = a;
        }
        var zb = {
            r: 0,
            "r+": 2,
            w: 577,
            "w+": 578,
            a: 1089,
            "a+": 1090
        };
        function Ab(a) {
            var b = [
                "r",
                "w",
                "rw"
            ][a & 3];
            a & 512 && (b += "w");
            return b;
        }
        function xb(a, b) {
            if (tb) return 0;
            if (-1 === b.indexOf("r") || a.mode & 292) {
                if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) return 2;
            } else return 2;
            return 0;
        }
        function Bb(a, b) {
            try {
                return ob(a, b), 20;
            } catch (c) {}
            return xb(a, "wx");
        }
        function Cb(a) {
            var b = 4096;
            for(a = a || 0; a <= b; a++)if (!rb[a]) return a;
            throw new N(33);
        }
        function Db(a, b) {
            Eb || (Eb = function() {}, Eb.prototype = {});
            var c = new Eb, d;
            for(d in a)c[d] = a[d];
            a = c;
            b = Cb(b);
            a.Cc = b;
            return rb[b] = a;
        }
        var lb = {
            open: function(a) {
                a.sc = qb[a.node.Lc].sc;
                a.sc.open && a.sc.open(a);
            },
            Ec: function() {
                throw new N(70);
            }
        };
        function gb(a, b) {
            qb[a] = {
                sc: b
            };
        }
        function Fb(a, b) {
            var c = "/" === b, d = !b;
            if (c && pb) throw new N(10);
            if (!c && !d) {
                var f = T(b, {
                    fd: !1
                });
                b = f.path;
                f = f.node;
                if (f.Kc) throw new N(10);
                if (16384 !== (f.mode & 61440)) throw new N(54);
            }
            b = {
                type: a,
                be: {},
                kd: b,
                Cd: []
            };
            a = a.Bc(b);
            a.Bc = b;
            b.root = a;
            c ? pb = a : f && (f.Kc = b, f.Bc && f.Bc.Cd.push(b));
        }
        function Gb(a, b, c) {
            var d = T(a, {
                parent: !0
            }).node;
            a = bb(a);
            if (!a || "." === a || ".." === a) throw new N(28);
            var f = Bb(d, a);
            if (f) throw new N(f);
            if (!d.qc.Qc) throw new N(63);
            return d.qc.Qc(d, a, b, c);
        }
        function U(a) {
            return Gb(a, 16895, 0);
        }
        function Hb(a, b, c) {
            "undefined" === typeof c && (c = b, b = 438);
            Gb(a, b | 8192, c);
        }
        function Ib(a, b) {
            if (!db(a)) throw new N(44);
            var c = T(b, {
                parent: !0
            }).node;
            if (!c) throw new N(44);
            b = bb(b);
            var d = Bb(c, b);
            if (d) throw new N(d);
            if (!c.qc.Sc) throw new N(63);
            c.qc.Sc(c, b, a);
        }
        function ub(a) {
            a = T(a).node;
            if (!a) throw new N(44);
            if (!a.qc.Mc) throw new N(28);
            return db(vb(a.parent), a.qc.Mc(a));
        }
        function Jb(a, b) {
            a = T(a, {
                Pc: !b
            }).node;
            if (!a) throw new N(44);
            if (!a.qc.yc) throw new N(63);
            return a.qc.yc(a);
        }
        function Kb(a) {
            return Jb(a, !0);
        }
        function Lb(a, b, c, d) {
            if ("" === a) throw new N(44);
            if ("string" === typeof b) {
                var f = zb[b];
                if ("undefined" === typeof f) throw Error("Unknown file open mode: " + b);
                b = f;
            }
            c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
            if ("object" === typeof a) var g = a;
            else {
                a = $a(a);
                try {
                    g = T(a, {
                        Pc: !(b & 131072)
                    }).node;
                } catch (k) {}
            }
            f = !1;
            if (b & 64) {
                if (g) {
                    if (b & 128) throw new N(20);
                } else g = Gb(a, c, 0), f = !0;
            }
            if (!g) throw new N(44);
            8192 === (g.mode & 61440) && (b &= -513);
            if (b & 65536 && 16384 !== (g.mode & 61440)) throw new N(54);
            if (!f && (c = g ? 40960 === (g.mode & 61440) ? 32 : 16384 === (g.mode & 61440) && ("r" !== Ab(b) || b & 512) ? 31 : xb(g, Ab(b)) : 44)) throw new N(c);
            if (b & 512) {
                c = g;
                c = "string" === typeof c ? T(c, {
                    Pc: !0
                }).node : c;
                if (!c.qc.Ac) throw new N(63);
                if (16384 === (c.mode & 61440)) throw new N(31);
                if (32768 !== (c.mode & 61440)) throw new N(28);
                if (f = xb(c, "w")) throw new N(f);
                c.qc.Ac(c, {
                    size: 0,
                    timestamp: Date.now()
                });
            }
            b &= -131713;
            d = Db({
                node: g,
                path: vb(g),
                flags: b,
                seekable: !0,
                position: 0,
                sc: g.sc,
                Rd: [],
                error: !1
            }, d);
            d.sc.open && d.sc.open(d);
            !e.logReadFiles || b & 1 || (Mb || (Mb = {}), a in Mb || (Mb[a] = 1, n("FS.trackingDelegate error on read file: " + a)));
            try {
                R.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= 1), 0 !== (b & 2097155) && (g |= 2), R.onOpenFile(a, g));
            } catch (k) {
                n("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + k.message);
            }
            return d;
        }
        function Nb(a, b, c) {
            if (null === a.Cc) throw new N(8);
            if (!a.seekable || !a.sc.Ec) throw new N(70);
            if (0 != c && 1 != c && 2 != c) throw new N(28);
            a.position = a.sc.Ec(a, b, c);
            a.Rd = [];
            return a.position;
        }
        function Ob() {
            N || (N = function(a, b) {
                this.node = b;
                this.Hd = function(c) {
                    this.vc = c;
                };
                this.Hd(a);
                this.message = "FS error";
            }, N.prototype = Error(), N.prototype.constructor = N, [
                44
            ].forEach(function(a) {
                nb[a] = new N(a);
                nb[a].stack = "<generic error, no stack>";
            }));
        }
        var Pb;
        function Qb(a, b) {
            var c = 0;
            a && (c |= 365);
            b && (c |= 146);
            return c;
        }
        function Rb(a, b, c) {
            a = $a("/dev/" + a);
            var d = Qb(!!b, !!c);
            Sb || (Sb = 64);
            var f = Sb++ << 8 | 0;
            gb(f, {
                open: function(g) {
                    g.seekable = !1;
                },
                close: function() {
                    c && c.buffer && c.buffer.length && c(10);
                },
                read: function(g, k, q, r) {
                    for(var p = 0, t = 0; t < r; t++){
                        try {
                            var w = b();
                        } catch (C) {
                            throw new N(29);
                        }
                        if (void 0 === w && 0 === p) throw new N(6);
                        if (null === w || void 0 === w) break;
                        p++;
                        k[q + t] = w;
                    }
                    p && (g.node.timestamp = Date.now());
                    return p;
                },
                write: function(g, k, q, r) {
                    for(var p = 0; p < r; p++)try {
                        c(k[q + p]);
                    } catch (t) {
                        throw new N(29);
                    }
                    r && (g.node.timestamp = Date.now());
                    return p;
                }
            });
            Hb(a, d, f);
        }
        var Sb, V = {}, Eb, Mb;
        function Tb(a, b, c) {
            try {
                var d = a(b);
            } catch (f) {
                if (f && f.node && $a(b) !== $a(vb(f.node))) return -54;
                throw f;
            }
            G[c >> 2] = d.td;
            G[c + 4 >> 2] = 0;
            G[c + 8 >> 2] = d.Zc;
            G[c + 12 >> 2] = d.mode;
            G[c + 16 >> 2] = d.Ed;
            G[c + 20 >> 2] = d.uid;
            G[c + 24 >> 2] = d.wd;
            G[c + 28 >> 2] = d.Lc;
            G[c + 32 >> 2] = 0;
            M = [
                d.size >>> 0,
                (K = d.size, 1 <= +Math.abs(K) ? 0 < K ? (Math.min(+Math.floor(K / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)
            ];
            G[c + 40 >> 2] = M[0];
            G[c + 44 >> 2] = M[1];
            G[c + 48 >> 2] = 4096;
            G[c + 52 >> 2] = d.rd;
            G[c + 56 >> 2] = d.pd.getTime() / 1E3 | 0;
            G[c + 60 >> 2] = 0;
            G[c + 64 >> 2] = d.Dd.getTime() / 1E3 | 0;
            G[c + 68 >> 2] = 0;
            G[c + 72 >> 2] = d.sd.getTime() / 1E3 | 0;
            G[c + 76 >> 2] = 0;
            M = [
                d.Zc >>> 0,
                (K = d.Zc, 1 <= +Math.abs(K) ? 0 < K ? (Math.min(+Math.floor(K / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)
            ];
            G[c + 80 >> 2] = M[0];
            G[c + 84 >> 2] = M[1];
            return 0;
        }
        var Ub = void 0;
        function Vb() {
            Ub += 4;
            return G[Ub - 4 >> 2];
        }
        function Wb(a) {
            a = rb[a];
            if (!a) throw new N(8);
            return a;
        }
        function Xb(a, b) {
            Yb = a;
            Zb = b;
            if ($b) {
                if (ac || (ac = !0), 0 == a) bc = function() {
                    var d = Math.max(0, cc + b - Ta()) | 0;
                    setTimeout(dc, d);
                };
                else if (1 == a) bc = function() {
                    ec(dc);
                };
                else if (2 == a) {
                    if ("undefined" === typeof setImmediate) {
                        var c = [];
                        addEventListener("message", function(d) {
                            if ("setimmediate" === d.data || "setimmediate" === d.data.target) d.stopPropagation(), c.shift()();
                        }, !0);
                        setImmediate = function(d) {
                            c.push(d);
                            void 0 === e.setImmediates && (e.setImmediates = []);
                            e.setImmediates.push(d);
                            postMessage({
                                target: "setimmediate"
                            });
                        };
                    }
                    bc = function() {
                        setImmediate(dc);
                    };
                }
            }
        }
        function fc(a) {
            function b() {
                if (c < gc) {
                    if (!noExitRuntime) try {
                        hc(na);
                    } catch (d) {
                        if (!(d instanceof ic)) throw d;
                    }
                    return !1;
                }
                return !0;
            }
            oa(!$b, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
            $b = a;
            var c = gc;
            ac = !1;
            dc = function() {
                if (!ma) {
                    if (0 < jc.length) {
                        var d = Date.now(), f = jc.shift();
                        f.vd(f.Oc);
                        if (kc) {
                            var g = kc, k = 0 == g % 1 ? g - 1 : Math.floor(g);
                            kc = f.Vd ? k : (8 * g + (k + .5)) / 9;
                        }
                        console.log('main loop blocker "' + f.name + '" took ' + (Date.now() - d) + " ms");
                        e.setStatus && (d = e.statusMessage || "Please wait...", f = kc, g = lc.Xd, f ? f < g ? e.setStatus(d + " (" + (g - f) + "/" + g + ")") : e.setStatus(d) : e.setStatus(""));
                        b() && setTimeout(dc, 0);
                    } else b() && (mc = mc + 1 | 0, 1 == Yb && 1 < Zb && 0 != mc % Zb ? bc() : (0 == Yb && (cc = Ta()), ma || e.preMainLoop && !1 === e.preMainLoop() || (X(a), e.postMainLoop && e.postMainLoop()), b() && ("object" === typeof SDL && SDL.audio && SDL.audio.Fd && SDL.audio.Fd(), bc())));
                }
            };
        }
        function X(a) {
            try {
                a();
            } catch (b) {
                if (!(b instanceof ic) && "unwind" !== b) throw b && "object" === typeof b && b.stack && n("exception thrown: " + [
                    b,
                    b.stack
                ]), b;
            }
        }
        var ac = !1, bc = null, gc = 0, $b = null, Yb = 0, Zb = 0, mc = 0, jc = [], lc = {}, cc, dc, kc, nc = !1, oc = !1, pc = [];
        function qc() {
            function a() {
                oc = document.pointerLockElement === e.canvas || document.mozPointerLockElement === e.canvas || document.webkitPointerLockElement === e.canvas || document.msPointerLockElement === e.canvas;
            }
            e.preloadPlugins || (e.preloadPlugins = []);
            if (!rc) {
                rc = !0;
                try {
                    sc = !0;
                } catch (c) {
                    sc = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
                }
                tc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : sc ? null : console.log("warning: no BlobBuilder");
                uc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
                e.md || "undefined" !== typeof uc || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), e.md = !0);
                e.preloadPlugins.push({
                    canHandle: function(c) {
                        return !e.md && /\.(jpg|jpeg|png|bmp)$/i.test(c);
                    },
                    handle: function(c, d, f, g) {
                        var k = null;
                        if (sc) try {
                            k = new Blob([
                                c
                            ], {
                                type: vc(d)
                            }), k.size !== c.length && (k = new Blob([
                                new Uint8Array(c).buffer
                            ], {
                                type: vc(d)
                            }));
                        } catch (p) {
                            ia("Blob constructor present but fails: " + p + "; falling back to blob builder");
                        }
                        k || (k = new tc, k.append(new Uint8Array(c).buffer), k = k.getBlob());
                        var q = uc.createObjectURL(k), r = new Image;
                        r.onload = function() {
                            oa(r.complete, "Image " + d + " could not be decoded");
                            var p = document.createElement("canvas");
                            p.width = r.width;
                            p.height = r.height;
                            p.getContext("2d").drawImage(r, 0, 0);
                            e.preloadedImages[d] = p;
                            uc.revokeObjectURL(q);
                            f && f(c);
                        };
                        r.onerror = function() {
                            console.log("Image " + q + " could not be decoded");
                            g && g();
                        };
                        r.src = q;
                    }
                });
                e.preloadPlugins.push({
                    canHandle: function(c) {
                        return !e.ae && c.substr(-4) in {
                            ".ogg": 1,
                            ".wav": 1,
                            ".mp3": 1
                        };
                    },
                    handle: function(c, d, f, g) {
                        function k(w) {
                            r || (r = !0, e.preloadedAudios[d] = w, f && f(c));
                        }
                        function q() {
                            r || (r = !0, e.preloadedAudios[d] = new Audio, g && g());
                        }
                        var r = !1;
                        if (sc) {
                            try {
                                var p = new Blob([
                                    c
                                ], {
                                    type: vc(d)
                                });
                            } catch (w) {
                                return q();
                            }
                            p = uc.createObjectURL(p);
                            var t = new Audio;
                            t.addEventListener("canplaythrough", function() {
                                k(t);
                            }, !1);
                            t.onerror = function() {
                                if (!r) {
                                    console.log("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                                    for(var w = "", C = 0, h = 0, u = 0; u < c.length; u++)for(C = C << 8 | c[u], h += 8; 6 <= h;){
                                        var y = C >> h - 6 & 63;
                                        h -= 6;
                                        w += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[y];
                                    }
                                    2 == h ? (w += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(C & 3) << 4], w += "==") : 4 == h && (w += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(C & 15) << 2], w += "=");
                                    t.src = "data:audio/x-" + d.substr(-3) + ";base64," + w;
                                    k(t);
                                }
                            };
                            t.src = p;
                            wc(function() {
                                k(t);
                            }, 1E4);
                        } else return q();
                    }
                });
                var b = e.canvas;
                b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function() {}, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), e.elementPointerLock && b.addEventListener("click", function(c) {
                    !oc && e.canvas.requestPointerLock && (e.canvas.requestPointerLock(), c.preventDefault());
                }, !1));
            }
        }
        function xc(a, b, c, d) {
            if (b && e.Yc && a == e.canvas) return e.Yc;
            var f;
            if (b) {
                var g = {
                    antialias: !1,
                    alpha: !1,
                    Bd: 1
                };
                if (d) for(var k in d)g[k] = d[k];
                if ("undefined" !== typeof yc && (f = zc(a, g))) var q = Ac[f].Xc;
            } else q = a.getContext("2d");
            if (!q) return null;
            c && (b || oa("undefined" === typeof Bc, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), e.Yc = q, b && (Cc = Ac[f], e.Yc = Bc = Cc && Cc.Xc), e.ee = b, pc.forEach(function(r) {
                r();
            }), qc());
            return q;
        }
        var Dc = !1, Ec = void 0, Fc = void 0;
        function Gc(a, b) {
            function c() {
                nc = !1;
                var g = d.parentNode;
                (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === g ? (d.exitFullscreen = Hc, Ec && d.requestPointerLock(), nc = !0, Fc ? ("undefined" != typeof SDL && (G[SDL.screen >> 2] = H[SDL.screen >> 2] | 8388608), Ic(e.canvas), Jc()) : Ic(d)) : (g.parentNode.insertBefore(d, g), g.parentNode.removeChild(g), Fc ? ("undefined" != typeof SDL && (G[SDL.screen >> 2] = H[SDL.screen >> 2] & -8388609), Ic(e.canvas), Jc()) : Ic(d));
                if (e.onFullScreen) e.onFullScreen(nc);
                if (e.onFullscreen) e.onFullscreen(nc);
            }
            Ec = a;
            Fc = b;
            "undefined" === typeof Ec && (Ec = !0);
            "undefined" === typeof Fc && (Fc = !1);
            var d = e.canvas;
            Dc || (Dc = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
            var f = document.createElement("div");
            d.parentNode.insertBefore(f, d);
            f.appendChild(d);
            f.requestFullscreen = f.requestFullscreen || f.mozRequestFullScreen || f.msRequestFullscreen || (f.webkitRequestFullscreen ? function() {
                f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } : null) || (f.webkitRequestFullScreen ? function() {
                f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } : null);
            f.requestFullscreen();
        }
        function Hc() {
            if (!nc) return !1;
            (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []);
            return !0;
        }
        var Kc = 0;
        function ec(a) {
            if ("function" === typeof requestAnimationFrame) requestAnimationFrame(a);
            else {
                var b = Date.now();
                if (0 === Kc) Kc = b + 1E3 / 60;
                else for(; b + 2 >= Kc;)Kc += 1E3 / 60;
                setTimeout(a, Math.max(Kc - b, 0));
            }
        }
        function Lc(a) {
            ec(function() {
                X(a);
            });
        }
        function wc(a, b) {
            setTimeout(function() {
                X(a);
            }, b);
        }
        function vc(a) {
            return ({
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                bmp: "image/bmp",
                ogg: "audio/ogg",
                wav: "audio/wav",
                mp3: "audio/mpeg"
            })[a.substr(a.lastIndexOf(".") + 1)];
        }
        var Mc = [];
        function Jc() {
            var a = e.canvas;
            Mc.forEach(function(b) {
                b(a.width, a.height);
            });
        }
        function Ic(a, b, c) {
            b && c ? (a.Sd = b, a.xd = c) : (b = a.Sd, c = a.xd);
            var d = b, f = c;
            e.forcedAspectRatio && 0 < e.forcedAspectRatio && (d / f < e.forcedAspectRatio ? d = Math.round(f * e.forcedAspectRatio) : f = Math.round(d / e.forcedAspectRatio));
            if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
                var g = Math.min(screen.width / d, screen.height / f);
                d = Math.round(d * g);
                f = Math.round(f * g);
            }
            Fc ? (a.width != d && (a.width = d), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || f != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
        }
        var rc, sc, tc, uc;
        function Nc() {
            return !1;
        }
        e._emscripten_is_main_browser_thread = Nc;
        var Oc = [];
        function Y(a, b) {
            H[a >> 2] = b;
            H[a + 4 >> 2] = b / 4294967296 | 0;
        }
        var Pc;
        function Qc(a, b, c, d, f) {
            function g(B) {
                var O = 0, L = 0;
                B && (L = v.response ? v.response.byteLength : 0, O = ya(L), A.set(new Uint8Array(v.response), O));
                H[a + 12 >> 2] = O;
                Y(a + 16, L);
            }
            var k = H[a + 8 >> 2];
            if (k) {
                var q = E(k), r = a + 112, p = E(r);
                p || (p = "GET");
                var t = H[r + 52 >> 2], w = H[r + 56 >> 2], C = !!H[r + 60 >> 2], h = H[r + 68 >> 2], u = H[r + 72 >> 2];
                k = H[r + 76 >> 2];
                var y = H[r + 80 >> 2], J = H[r + 84 >> 2];
                r = H[r + 88 >> 2];
                var S = !!(t & 1), W = !!(t & 2);
                t = !!(t & 64);
                h = h ? E(h) : void 0;
                u = u ? E(u) : void 0;
                var Xa = y ? E(y) : void 0, v = new XMLHttpRequest;
                v.withCredentials = C;
                v.open(p, q, !t, h, u);
                t || (v.timeout = w);
                v.ce = q;
                v.responseType = "arraybuffer";
                y && v.overrideMimeType(Xa);
                if (k) for(;;){
                    p = H[k >> 2];
                    if (!p) break;
                    q = H[k + 4 >> 2];
                    if (!q) break;
                    k += 8;
                    p = E(p);
                    q = E(q);
                    v.setRequestHeader(p, q);
                }
                Oc.push(v);
                H[a + 0 >> 2] = Oc.length;
                k = J && r ? A.slice(J, J + r) : null;
                v.onload = function(B) {
                    g(S && !W);
                    var O = v.response ? v.response.byteLength : 0;
                    Y(a + 24, 0);
                    O && Y(a + 32, O);
                    F[a + 40 >> 1] = v.readyState;
                    F[a + 42 >> 1] = v.status;
                    v.statusText && z(v.statusText, A, a + 44, 64);
                    200 <= v.status && 300 > v.status ? b && b(a, v, B) : c && c(a, v, B);
                };
                v.onerror = function(B) {
                    g(S);
                    var O = v.status;
                    Y(a + 24, 0);
                    Y(a + 32, v.response ? v.response.byteLength : 0);
                    F[a + 40 >> 1] = v.readyState;
                    F[a + 42 >> 1] = O;
                    c && c(a, v, B);
                };
                v.ontimeout = function(B) {
                    c && c(a, v, B);
                };
                v.onprogress = function(B) {
                    var O = S && W && v.response ? v.response.byteLength : 0, L = 0;
                    S && W && (L = ya(O), A.set(new Uint8Array(v.response), L));
                    H[a + 12 >> 2] = L;
                    Y(a + 16, O);
                    Y(a + 24, B.loaded - O);
                    Y(a + 32, B.total);
                    F[a + 40 >> 1] = v.readyState;
                    3 <= v.readyState && 0 === v.status && 0 < B.loaded && (v.status = 200);
                    F[a + 42 >> 1] = v.status;
                    v.statusText && z(v.statusText, A, a + 44, 64);
                    d && d(a, v, B);
                    L && Rc(L);
                };
                v.onreadystatechange = function(B) {
                    F[a + 40 >> 1] = v.readyState;
                    2 <= v.readyState && (F[a + 42 >> 1] = v.status);
                    f && f(a, v, B);
                };
                try {
                    v.send(k);
                } catch (B) {
                    c && c(a, v, B);
                }
            } else c(a, 0, "no url specified!");
        }
        function Sc(a, b, c, d) {
            var f = Pc;
            if (f) {
                var g = H[a + 112 + 64 >> 2];
                g || (g = H[a + 8 >> 2]);
                var k = E(g);
                try {
                    var q = f.transaction([
                        "FILES"
                    ], "readwrite").objectStore("FILES").put(b, k);
                    q.onsuccess = function() {
                        F[a + 40 >> 1] = 4;
                        F[a + 42 >> 1] = 200;
                        z("OK", A, a + 44, 64);
                        c(a, 0, k);
                    };
                    q.onerror = function(r) {
                        F[a + 40 >> 1] = 4;
                        F[a + 42 >> 1] = 413;
                        z("Payload Too Large", A, a + 44, 64);
                        d(a, 0, r);
                    };
                } catch (r) {
                    d(a, 0, r);
                }
            } else d(a, 0, "IndexedDB not available!");
        }
        function Tc(a, b, c) {
            var d = Pc;
            if (d) {
                var f = H[a + 112 + 64 >> 2];
                f || (f = H[a + 8 >> 2]);
                f = E(f);
                try {
                    var g = d.transaction([
                        "FILES"
                    ], "readonly").objectStore("FILES").get(f);
                    g.onsuccess = function(k) {
                        if (k.target.result) {
                            k = k.target.result;
                            var q = k.byteLength || k.length, r = ya(q);
                            A.set(new Uint8Array(k), r);
                            H[a + 12 >> 2] = r;
                            Y(a + 16, q);
                            Y(a + 24, 0);
                            Y(a + 32, q);
                            F[a + 40 >> 1] = 4;
                            F[a + 42 >> 1] = 200;
                            z("OK", A, a + 44, 64);
                            b(a, 0, k);
                        } else F[a + 40 >> 1] = 4, F[a + 42 >> 1] = 404, z("Not Found", A, a + 44, 64), c(a, 0, "no data");
                    };
                    g.onerror = function(k) {
                        F[a + 40 >> 1] = 4;
                        F[a + 42 >> 1] = 404;
                        z("Not Found", A, a + 44, 64);
                        c(a, 0, k);
                    };
                } catch (k) {
                    c(a, 0, k);
                }
            } else c(a, 0, "IndexedDB not available!");
        }
        function Uc(a, b, c) {
            var d = Pc;
            if (d) {
                var f = H[a + 112 + 64 >> 2];
                f || (f = H[a + 8 >> 2]);
                f = E(f);
                try {
                    var g = d.transaction([
                        "FILES"
                    ], "readwrite").objectStore("FILES").delete(f);
                    g.onsuccess = function(k) {
                        k = k.target.result;
                        H[a + 12 >> 2] = 0;
                        Y(a + 16, 0);
                        Y(a + 24, 0);
                        Y(a + 32, 0);
                        F[a + 40 >> 1] = 4;
                        F[a + 42 >> 1] = 200;
                        z("OK", A, a + 44, 64);
                        b(a, 0, k);
                    };
                    g.onerror = function(k) {
                        F[a + 40 >> 1] = 4;
                        F[a + 42 >> 1] = 404;
                        z("Not Found", A, a + 44, 64);
                        c(a, 0, k);
                    };
                } catch (k) {
                    c(a, 0, k);
                }
            } else c(a, 0, "IndexedDB not available!");
        }
        var Vc = {};
        function Wc() {
            if (!Xc) {
                var a = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: da || "./this.program"
                }, b;
                for(b in Vc)a[b] = Vc[b];
                var c = [];
                for(b in a)c.push(b + "=" + a[b]);
                Xc = c;
            }
            return Xc;
        }
        var Xc;
        function Yc(a) {
            var b = a.getExtension("ANGLE_instanced_arrays");
            b && (a.vertexAttribDivisor = function(c, d) {
                b.vertexAttribDivisorANGLE(c, d);
            }, a.drawArraysInstanced = function(c, d, f, g) {
                b.drawArraysInstancedANGLE(c, d, f, g);
            }, a.drawElementsInstanced = function(c, d, f, g, k) {
                b.drawElementsInstancedANGLE(c, d, f, g, k);
            });
        }
        function Zc(a) {
            var b = a.getExtension("OES_vertex_array_object");
            b && (a.createVertexArray = function() {
                return b.createVertexArrayOES();
            }, a.deleteVertexArray = function(c) {
                b.deleteVertexArrayOES(c);
            }, a.bindVertexArray = function(c) {
                b.bindVertexArrayOES(c);
            }, a.isVertexArray = function(c) {
                return b.isVertexArrayOES(c);
            });
        }
        function $c(a) {
            var b = a.getExtension("WEBGL_draw_buffers");
            b && (a.drawBuffers = function(c, d) {
                b.drawBuffersWEBGL(c, d);
            });
        }
        var ad = 1, bd = [], Ac = [];
        function cd(a) {
            for(var b = ad++, c = a.length; c < b; c++)a[c] = null;
            return b;
        }
        function zc(a, b) {
            a.gd || (a.gd = a.getContext, a.getContext = function(d, f) {
                f = a.gd(d, f);
                return "webgl" == d == f instanceof WebGLRenderingContext ? f : null;
            });
            var c = a.getContext("webgl", b);
            return c ? dd(c, b) : 0;
        }
        function dd(a, b) {
            var c = cd(Ac), d = {
                Zd: c,
                attributes: b,
                version: b.Bd,
                Xc: a
            };
            a.canvas && (a.canvas.Td = d);
            Ac[c] = d;
            ("undefined" === typeof b.ud || b.ud) && ed(d);
            return c;
        }
        function ed(a) {
            a || (a = Cc);
            if (!a.zd) {
                a.zd = !0;
                var b = a.Xc;
                Yc(b);
                Zc(b);
                $c(b);
                b.Wd = b.getExtension("EXT_disjoint_timer_query");
                b.$d = b.getExtension("WEBGL_multi_draw");
                (b.getSupportedExtensions() || []).forEach(function(c) {
                    0 > c.indexOf("lose_context") && 0 > c.indexOf("debug") && b.getExtension(c);
                });
            }
        }
        var yc = {}, fd, Cc;
        function gd(a, b) {
            a = new Date(1E3 * G[a >> 2]);
            G[b >> 2] = a.getUTCSeconds();
            G[b + 4 >> 2] = a.getUTCMinutes();
            G[b + 8 >> 2] = a.getUTCHours();
            G[b + 12 >> 2] = a.getUTCDate();
            G[b + 16 >> 2] = a.getUTCMonth();
            G[b + 20 >> 2] = a.getUTCFullYear() - 1900;
            G[b + 24 >> 2] = a.getUTCDay();
            G[b + 36 >> 2] = 0;
            G[b + 32 >> 2] = 0;
            G[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
            gd.bd || (gd.bd = xa("GMT"));
            G[b + 40 >> 2] = gd.bd;
            return b;
        }
        function hd() {
            function a(k) {
                return (k = k.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? k[1] : "GMT";
            }
            if (!id) {
                id = !0;
                var b = (new Date).getFullYear(), c = new Date(b, 0, 1), d = new Date(b, 6, 1);
                b = c.getTimezoneOffset();
                var f = d.getTimezoneOffset(), g = Math.max(b, f);
                G[jd() >> 2] = 60 * g;
                G[kd() >> 2] = Number(b != f);
                c = a(c);
                d = a(d);
                c = xa(c);
                d = xa(d);
                f < b ? (G[ld() >> 2] = c, G[ld() + 4 >> 2] = d) : (G[ld() >> 2] = d, G[ld() + 4 >> 2] = c);
            }
        }
        var id;
        function md(a) {
            return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
        }
        function nd(a, b) {
            for(var c = 0, d = 0; d <= b; c += a[d++]);
            return c;
        }
        var od = [
            31,
            29,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ], pd = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ];
        function qd(a, b) {
            for(a = new Date(a.getTime()); 0 < b;){
                var c = a.getMonth(), d = (md(a.getFullYear()) ? od : pd)[c];
                if (b > d - a.getDate()) b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
                else {
                    a.setDate(a.getDate() + b);
                    break;
                }
            }
            return a;
        }
        function rd(a, b, c, d) {
            function f(h, u, y) {
                for(h = "number" === typeof h ? h.toString() : h || ""; h.length < u;)h = y[0] + h;
                return h;
            }
            function g(h, u) {
                return f(h, u, "0");
            }
            function k(h, u) {
                function y(S) {
                    return 0 > S ? -1 : 0 < S ? 1 : 0;
                }
                var J;
                0 === (J = y(h.getFullYear() - u.getFullYear())) && 0 === (J = y(h.getMonth() - u.getMonth())) && (J = y(h.getDate() - u.getDate()));
                return J;
            }
            function q(h) {
                switch(h.getDay()){
                    case 0:
                        return new Date(h.getFullYear() - 1, 11, 29);
                    case 1:
                        return h;
                    case 2:
                        return new Date(h.getFullYear(), 0, 3);
                    case 3:
                        return new Date(h.getFullYear(), 0, 2);
                    case 4:
                        return new Date(h.getFullYear(), 0, 1);
                    case 5:
                        return new Date(h.getFullYear() - 1, 11, 31);
                    case 6:
                        return new Date(h.getFullYear() - 1, 11, 30);
                }
            }
            function r(h) {
                h = qd(new Date(h.xc + 1900, 0, 1), h.Vc);
                var u = new Date(h.getFullYear() + 1, 0, 4), y = q(new Date(h.getFullYear(), 0, 4));
                u = q(u);
                return 0 >= k(y, h) ? 0 >= k(u, h) ? h.getFullYear() + 1 : h.getFullYear() : h.getFullYear() - 1;
            }
            var p = G[d + 40 >> 2];
            d = {
                Pd: G[d >> 2],
                Od: G[d + 4 >> 2],
                Tc: G[d + 8 >> 2],
                Nc: G[d + 12 >> 2],
                Ic: G[d + 16 >> 2],
                xc: G[d + 20 >> 2],
                Uc: G[d + 24 >> 2],
                Vc: G[d + 28 >> 2],
                de: G[d + 32 >> 2],
                Nd: G[d + 36 >> 2],
                Qd: p ? E(p) : ""
            };
            c = E(c);
            p = {
                "%c": "%a %b %d %H:%M:%S %Y",
                "%D": "%m/%d/%y",
                "%F": "%Y-%m-%d",
                "%h": "%b",
                "%r": "%I:%M:%S %p",
                "%R": "%H:%M",
                "%T": "%H:%M:%S",
                "%x": "%m/%d/%y",
                "%X": "%H:%M:%S",
                "%Ec": "%c",
                "%EC": "%C",
                "%Ex": "%m/%d/%y",
                "%EX": "%H:%M:%S",
                "%Ey": "%y",
                "%EY": "%Y",
                "%Od": "%d",
                "%Oe": "%e",
                "%OH": "%H",
                "%OI": "%I",
                "%Om": "%m",
                "%OM": "%M",
                "%OS": "%S",
                "%Ou": "%u",
                "%OU": "%U",
                "%OV": "%V",
                "%Ow": "%w",
                "%OW": "%W",
                "%Oy": "%y"
            };
            for(var t in p)c = c.replace(new RegExp(t, "g"), p[t]);
            var w = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), C = "January February March April May June July August September October November December".split(" ");
            p = {
                "%a": function(h) {
                    return w[h.Uc].substring(0, 3);
                },
                "%A": function(h) {
                    return w[h.Uc];
                },
                "%b": function(h) {
                    return C[h.Ic].substring(0, 3);
                },
                "%B": function(h) {
                    return C[h.Ic];
                },
                "%C": function(h) {
                    return g((h.xc + 1900) / 100 | 0, 2);
                },
                "%d": function(h) {
                    return g(h.Nc, 2);
                },
                "%e": function(h) {
                    return f(h.Nc, 2, " ");
                },
                "%g": function(h) {
                    return r(h).toString().substring(2);
                },
                "%G": function(h) {
                    return r(h);
                },
                "%H": function(h) {
                    return g(h.Tc, 2);
                },
                "%I": function(h) {
                    h = h.Tc;
                    0 == h ? h = 12 : 12 < h && (h -= 12);
                    return g(h, 2);
                },
                "%j": function(h) {
                    return g(h.Nc + nd(md(h.xc + 1900) ? od : pd, h.Ic - 1), 3);
                },
                "%m": function(h) {
                    return g(h.Ic + 1, 2);
                },
                "%M": function(h) {
                    return g(h.Od, 2);
                },
                "%n": function() {
                    return "\n";
                },
                "%p": function(h) {
                    return 0 <= h.Tc && 12 > h.Tc ? "AM" : "PM";
                },
                "%S": function(h) {
                    return g(h.Pd, 2);
                },
                "%t": function() {
                    return "	";
                },
                "%u": function(h) {
                    return h.Uc || 7;
                },
                "%U": function(h) {
                    var u = new Date(h.xc + 1900, 0, 1), y = 0 === u.getDay() ? u : qd(u, 7 - u.getDay());
                    h = new Date(h.xc + 1900, h.Ic, h.Nc);
                    return 0 > k(y, h) ? g(Math.ceil((31 - y.getDate() + (nd(md(h.getFullYear()) ? od : pd, h.getMonth() - 1) - 31) + h.getDate()) / 7), 2) : 0 === k(y, u) ? "01" : "00";
                },
                "%V": function(h) {
                    var u = new Date(h.xc + 1901, 0, 4), y = q(new Date(h.xc + 1900, 0, 4));
                    u = q(u);
                    var J = qd(new Date(h.xc + 1900, 0, 1), h.Vc);
                    return 0 > k(J, y) ? "53" : 0 >= k(u, J) ? "01" : g(Math.ceil((y.getFullYear() < h.xc + 1900 ? h.Vc + 32 - y.getDate() : h.Vc + 1 - y.getDate()) / 7), 2);
                },
                "%w": function(h) {
                    return h.Uc;
                },
                "%W": function(h) {
                    var u = new Date(h.xc, 0, 1), y = 1 === u.getDay() ? u : qd(u, 0 === u.getDay() ? 1 : 7 - u.getDay() + 1);
                    h = new Date(h.xc + 1900, h.Ic, h.Nc);
                    return 0 > k(y, h) ? g(Math.ceil((31 - y.getDate() + (nd(md(h.getFullYear()) ? od : pd, h.getMonth() - 1) - 31) + h.getDate()) / 7), 2) : 0 === k(y, u) ? "01" : "00";
                },
                "%y": function(h) {
                    return (h.xc + 1900).toString().substring(2);
                },
                "%Y": function(h) {
                    return h.xc + 1900;
                },
                "%z": function(h) {
                    h = h.Nd;
                    var u = 0 <= h;
                    h = Math.abs(h) / 60;
                    return (u ? "+" : "-") + String("0000" + (h / 60 * 100 + h % 60)).slice(-4);
                },
                "%Z": function(h) {
                    return h.Qd;
                },
                "%%": function() {
                    return "%";
                }
            };
            for(t in p)0 <= c.indexOf(t) && (c = c.replace(new RegExp(t, "g"), p[t](d)));
            t = ib(c, !1);
            if (t.length > b) return 0;
            D.set(t, a);
            return t.length - 1;
        }
        function yb(a, b, c, d) {
            a || (a = this);
            this.parent = a;
            this.Bc = a.Bc;
            this.Kc = null;
            this.id = sb++;
            this.name = b;
            this.mode = c;
            this.qc = {};
            this.sc = {};
            this.Lc = d;
        }
        Object.defineProperties(yb.prototype, {
            read: {
                get: function() {
                    return 365 === (this.mode & 365);
                },
                set: function(a) {
                    a ? this.mode |= 365 : this.mode &= -366;
                }
            },
            write: {
                get: function() {
                    return 146 === (this.mode & 146);
                },
                set: function(a) {
                    a ? this.mode |= 146 : this.mode &= -147;
                }
            }
        });
        Ob();
        Q = Array(4096);
        Fb(P, "/");
        U("/tmp");
        U("/home");
        U("/home/web_user");
        (function() {
            U("/dev");
            gb(259, {
                read: function() {
                    return 0;
                },
                write: function(b, c, d, f) {
                    return f;
                }
            });
            Hb("/dev/null", 259);
            fb(1280, jb);
            fb(1536, kb);
            Hb("/dev/tty", 1280);
            Hb("/dev/tty1", 1536);
            var a = cb();
            Rb("random", a);
            Rb("urandom", a);
            U("/dev/shm");
            U("/dev/shm/tmp");
        })();
        (function() {
            U("/proc");
            var a = U("/proc/self");
            U("/proc/self/fd");
            Fb({
                Bc: function() {
                    var b = mb(a, "fd", 16895, 73);
                    b.qc = {
                        Jc: function(c, d) {
                            var f = rb[+d];
                            if (!f) throw new N(8);
                            c = {
                                parent: null,
                                Bc: {
                                    kd: "fake"
                                },
                                qc: {
                                    Mc: function() {
                                        return f.path;
                                    }
                                }
                            };
                            return c.parent = c;
                        }
                    };
                    return b;
                }
            }, "/proc/self/fd");
        })();
        e.requestFullscreen = function(a, b) {
            Gc(a, b);
        };
        e.requestAnimationFrame = function(a) {
            ec(a);
        };
        e.setCanvasSize = function(a, b, c) {
            Ic(e.canvas, a, b);
            c || Jc();
        };
        e.pauseMainLoop = function() {
            bc = null;
            gc++;
        };
        e.resumeMainLoop = function() {
            gc++;
            var a = Yb, b = Zb, c = $b;
            $b = null;
            fc(c);
            Xb(a, b);
            bc();
        };
        e.getUserMedia = function() {
            window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
            window.getUserMedia(void 0);
        };
        e.createContext = function(a, b, c, d) {
            return xc(a, b, c, d);
        };
        (function(a, b) {
            try {
                var c = indexedDB.open("emscripten_filesystem", 1);
            } catch (d) {
                b(d);
                return;
            }
            c.onupgradeneeded = function(d) {
                d = d.target.result;
                d.objectStoreNames.contains("FILES") && d.deleteObjectStore("FILES");
                d.createObjectStore("FILES");
            };
            c.onsuccess = function(d) {
                a(d.target.result);
            };
            c.onerror = function(d) {
                b(d);
            };
        })(function(a) {
            Pc = a;
            Oa();
        }, function() {
            Pc = !1;
            Oa();
        });
        "undefined" !== typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || Na();
        var Bc;
        function ib(a, b) {
            var c = Array(wa(a) + 1);
            a = z(a, c, 0, c.length);
            b && (c.length = a);
            return c;
        }
        var sd = {
            I: function(a, b) {
                return Ua(a, b);
            },
            a: function(a) {
                return ya(a + 16) + 16;
            },
            b: function(a, b, c) {
                new Wa(a).yd(b, c);
                Ya++;
                throw a;
            },
            e: function(a, b, c) {
                Ub = c;
                try {
                    var d = Wb(a);
                    switch(b){
                        case 0:
                            var f = Vb();
                            return 0 > f ? -28 : Lb(d.path, d.flags, 0, f).Cc;
                        case 1:
                        case 2:
                            return 0;
                        case 3:
                            return d.flags;
                        case 4:
                            return f = Vb(), d.flags |= f, 0;
                        case 12:
                            return f = Vb(), Ba[f + 0 >> 1] = 2, 0;
                        case 13:
                        case 14:
                            return 0;
                        case 16:
                        case 8:
                            return -28;
                        case 9:
                            return G[Va() >> 2] = 28, -1;
                        default:
                            return -28;
                    }
                } catch (g) {
                    return "undefined" !== typeof V && g instanceof N || x(g), -g.vc;
                }
            },
            E: function(a, b, c) {
                try {
                    var d = Wb(a);
                    if (!d.Dc) {
                        var f = T(d.path, {
                            Pc: !0
                        }).node;
                        if (!f.qc.Rc) throw new N(54);
                        var g = f.qc.Rc(f);
                        d.Dc = g;
                    }
                    a = 0;
                    for(var k = Nb(d, 0, 1), q = Math.floor(k / 280); q < d.Dc.length && a + 280 <= c;){
                        var r = d.Dc[q];
                        if ("." === r[0]) {
                            var p = 1;
                            var t = 4;
                        } else {
                            var w = ob(d.node, r);
                            p = w.id;
                            t = 8192 === (w.mode & 61440) ? 2 : 16384 === (w.mode & 61440) ? 4 : 40960 === (w.mode & 61440) ? 10 : 8;
                        }
                        M = [
                            p >>> 0,
                            (K = p, 1 <= +Math.abs(K) ? 0 < K ? (Math.min(+Math.floor(K / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)
                        ];
                        G[b + a >> 2] = M[0];
                        G[b + a + 4 >> 2] = M[1];
                        M = [
                            280 * (q + 1) >>> 0,
                            (K = 280 * (q + 1), 1 <= +Math.abs(K) ? 0 < K ? (Math.min(+Math.floor(K / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)
                        ];
                        G[b + a + 8 >> 2] = M[0];
                        G[b + a + 12 >> 2] = M[1];
                        Ba[b + a + 16 >> 1] = 280;
                        D[b + a + 18 >> 0] = t;
                        z(r, A, b + a + 19, 256);
                        a += 280;
                        q += 1;
                    }
                    Nb(d, 280 * q, 0);
                    return a;
                } catch (C) {
                    return "undefined" !== typeof V && C instanceof N || x(C), -C.vc;
                }
            },
            n: function() {
                return 42;
            },
            G: function(a, b, c) {
                Ub = c;
                try {
                    var d = Wb(a);
                    switch(b){
                        case 21509:
                        case 21505:
                            return d.uc ? 0 : -59;
                        case 21510:
                        case 21511:
                        case 21512:
                        case 21506:
                        case 21507:
                        case 21508:
                            return d.uc ? 0 : -59;
                        case 21519:
                            if (!d.uc) return -59;
                            var f = Vb();
                            return G[f >> 2] = 0;
                        case 21520:
                            return d.uc ? -28 : -59;
                        case 21531:
                            a = f = Vb();
                            if (!d.sc.Ad) throw new N(59);
                            return d.sc.Ad(d, b, a);
                        case 21523:
                            return d.uc ? 0 : -59;
                        case 21524:
                            return d.uc ? 0 : -59;
                        default:
                            x("bad ioctl syscall " + b);
                    }
                } catch (g) {
                    return "undefined" !== typeof V && g instanceof N || x(g), -g.vc;
                }
            },
            H: function(a, b) {
                try {
                    return a = E(a), Tb(Kb, a, b);
                } catch (c) {
                    return "undefined" !== typeof V && c instanceof N || x(c), -c.vc;
                }
            },
            p: function(a, b, c) {
                Ub = c;
                try {
                    var d = E(a), f = c ? Vb() : 0;
                    return Lb(d, b, f).Cc;
                } catch (g) {
                    return "undefined" !== typeof V && g instanceof N || x(g), -g.vc;
                }
            },
            J: function(a, b) {
                try {
                    return a = E(a), Tb(Jb, a, b);
                } catch (c) {
                    return "undefined" !== typeof V && c instanceof N || x(c), -c.vc;
                }
            },
            C: function(a, b) {
                try {
                    return a = E(a), b = E(b), Ib(a, b), 0;
                } catch (c) {
                    return "undefined" !== typeof V && c instanceof N || x(c), -c.vc;
                }
            },
            K: function(a) {
                try {
                    if (!a) return -21;
                    var b = {
                        __size__: 390,
                        domainname: 325,
                        machine: 260,
                        nodename: 65,
                        release: 130,
                        sysname: 0,
                        version: 195
                    };
                    za("Emscripten", a + b.sysname);
                    za("emscripten", a + b.nodename);
                    za("1.0", a + b.release);
                    za("#1", a + b.version);
                    za("wasm32", a + b.machine);
                    return 0;
                } catch (c) {
                    return "undefined" !== typeof V && c instanceof N || x(c), -c.vc;
                }
            },
            D: function(a) {
                try {
                    a = E(a);
                    var b = T(a, {
                        parent: !0
                    }).node, c = bb(a), d = ob(b, c);
                    a: {
                        try {
                            var f = ob(b, c);
                        } catch (p) {
                            var g = p.vc;
                            break a;
                        }
                        var k = xb(b, "wx");
                        g = k ? k : 16384 === (f.mode & 61440) ? 31 : 0;
                    }
                    if (g) throw new N(g);
                    if (!b.qc.Wc) throw new N(63);
                    if (d.Kc) throw new N(10);
                    try {
                        R.willDeletePath && R.willDeletePath(a);
                    } catch (p) {
                        n("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + p.message);
                    }
                    b.qc.Wc(b, c);
                    var q = wb(d.parent.id, d.name);
                    if (Q[q] === d) Q[q] = d.Fc;
                    else for(var r = Q[q]; r;){
                        if (r.Fc === d) {
                            r.Fc = d.Fc;
                            break;
                        }
                        r = r.Fc;
                    }
                    try {
                        if (R.onDeletePath) R.onDeletePath(a);
                    } catch (p) {
                        n("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + p.message);
                    }
                    return 0;
                } catch (p) {
                    return "undefined" !== typeof V && p instanceof N || x(p), -p.vc;
                }
            },
            L: function(a) {
                delete Oc[a - 1];
            },
            c: function() {
                x();
            },
            h: Ua,
            P: function(a, b) {
                return a - b;
            },
            R: function() {
                self.postMessage({
                    t: "gfx"
                });
            },
            t: function() {
                var a = new URL(location.origin).hostname;
                0 === a.length && (a = new URL(location.href.replace("blob:", "")).hostname);
                if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(a)) 0 === a.indexOf("10.") && (a = "10.*"), 0 === a.indexOf("192.168.") && (a = "192.168.*"), 0 === a.indexOf("172.") && (a = "172.*"), 0 === a.indexOf("127.") && (a = "127.*");
                else {
                    var b = new RegExp("(" + String.fromCharCode(92) + ".ngrok" + String.fromCharCode(92) + ".io)$", "i");
                    b.test(a) && (a = "*.ngrok.io");
                    b = new RegExp("(" + String.fromCharCode(92) + ".arweb" + String.fromCharCode(92) + ".app)$", "i");
                    b.test(a) && (a = "*.arweb.app");
                }
                b = wa(a) + 1;
                var c = ya(b);
                z(a, A, c, b + 1);
                return c;
            },
            s: function() {
                self.postMessage({
                    t: "licerr"
                });
            },
            l: function(a, b, c) {
                function d() {
                    I.get(a)(b);
                }
                0 <= c ? wc(d, c) : Lc(d);
            },
            x: function() {
                return 2147483648;
            },
            N: Nc,
            v: function(a, b, c) {
                A.copyWithin(a, b, b + c);
            },
            w: function(a) {
                var b = A.length;
                if (2147483648 < a) return !1;
                for(var c = 1; 4 >= c; c *= 2){
                    var d = b * (1 + .2 / c);
                    d = Math.min(d, a + 100663296);
                    d = Math.max(a, d);
                    0 < d % 65536 && (d += 65536 - d % 65536);
                    a: {
                        try {
                            la.grow(Math.min(2147483648, d) - Aa.byteLength + 65535 >>> 16);
                            Ea();
                            var f = 1;
                            break a;
                        } catch (g) {}
                        f = void 0;
                    }
                    if (f) return !0;
                }
                return !1;
            },
            M: function(a, b, c, d, f) {
                function g(B) {
                    Qc(B, k, p, t, r);
                }
                function k(B, O) {
                    Sc(B, O.response, function(L) {
                        X(function() {
                            u ? I.get(u)(L) : b && b(L);
                        });
                    }, function(L) {
                        X(function() {
                            u ? I.get(u)(L) : b && b(L);
                        });
                    });
                }
                function q(B) {
                    Qc(B, w, p, t, r);
                }
                function r(B) {
                    X(function() {
                        S ? I.get(S)(B) : f && f(B);
                    });
                }
                function p(B) {
                    X(function() {
                        y ? I.get(y)(B) : c && c(B);
                    });
                }
                function t(B) {
                    X(function() {
                        J ? I.get(J)(B) : d && d(B);
                    });
                }
                function w(B) {
                    X(function() {
                        u ? I.get(u)(B) : b && b(B);
                    });
                }
                var C = a + 112, h = E(C), u = H[C + 36 >> 2], y = H[C + 40 >> 2], J = H[C + 44 >> 2], S = H[C + 48 >> 2], W = H[C + 52 >> 2], Xa = !!(W & 4), v = !!(W & 32);
                W = !!(W & 16);
                if ("EM_IDB_STORE" === h) h = H[C + 84 >> 2], Sc(a, A.slice(h, h + H[C + 88 >> 2]), w, p);
                else if ("EM_IDB_DELETE" === h) Uc(a, w, p);
                else if (W) {
                    if (v) return 0;
                    Qc(a, Xa ? k : w, p, t, r);
                } else Tc(a, w, v ? p : Xa ? g : q);
                return a;
            },
            A: function(a, b) {
                try {
                    var c = 0;
                    Wc().forEach(function(d, f) {
                        var g = b + c;
                        G[a + 4 * f >> 2] = g;
                        za(d, g);
                        c += d.length + 1;
                    });
                    return 0;
                } catch (d) {
                    return "undefined" !== typeof V && d instanceof N || x(d), d.vc;
                }
            },
            B: function(a, b) {
                try {
                    var c = Wc();
                    G[a >> 2] = c.length;
                    var d = 0;
                    c.forEach(function(f) {
                        d += f.length + 1;
                    });
                    G[b >> 2] = d;
                    return 0;
                } catch (f) {
                    return "undefined" !== typeof V && f instanceof N || x(f), f.vc;
                }
            },
            O: function(a) {
                hc(a);
            },
            g: function(a) {
                try {
                    var b = Wb(a);
                    if (null === b.Cc) throw new N(8);
                    b.Dc && (b.Dc = null);
                    try {
                        b.sc.close && b.sc.close(b);
                    } catch (c) {
                        throw c;
                    } finally{
                        rb[b.Cc] = null;
                    }
                    b.Cc = null;
                    return 0;
                } catch (c) {
                    return "undefined" !== typeof V && c instanceof N || x(c), c.vc;
                }
            },
            F: function(a, b, c, d) {
                try {
                    a: {
                        for(var f = Wb(a), g = a = 0; g < c; g++){
                            var k = G[b + (8 * g + 4) >> 2], q = f, r = G[b + 8 * g >> 2], p = k, t = void 0, w = D;
                            if (0 > p || 0 > t) throw new N(28);
                            if (null === q.Cc) throw new N(8);
                            if (1 === (q.flags & 2097155)) throw new N(8);
                            if (16384 === (q.node.mode & 61440)) throw new N(31);
                            if (!q.sc.read) throw new N(28);
                            var C = "undefined" !== typeof t;
                            if (!C) t = q.position;
                            else if (!q.seekable) throw new N(70);
                            var h = q.sc.read(q, w, r, p, t);
                            C || (q.position += h);
                            var u = h;
                            if (0 > u) {
                                var y = -1;
                                break a;
                            }
                            a += u;
                            if (u < k) break;
                        }
                        y = a;
                    }
                    G[d >> 2] = y;
                    return 0;
                } catch (J) {
                    return "undefined" !== typeof V && J instanceof N || x(J), J.vc;
                }
            },
            u: function(a, b, c, d, f) {
                try {
                    var g = Wb(a);
                    a = 4294967296 * c + (b >>> 0);
                    if (-9007199254740992 >= a || 9007199254740992 <= a) return -61;
                    Nb(g, a, d);
                    M = [
                        g.position >>> 0,
                        (K = g.position, 1 <= +Math.abs(K) ? 0 < K ? (Math.min(+Math.floor(K / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)
                    ];
                    G[f >> 2] = M[0];
                    G[f + 4 >> 2] = M[1];
                    g.Dc && 0 === a && 0 === d && (g.Dc = null);
                    return 0;
                } catch (k) {
                    return "undefined" !== typeof V && k instanceof N || x(k), k.vc;
                }
            },
            k: function(a, b, c, d) {
                try {
                    a: {
                        for(var f = Wb(a), g = a = 0; g < c; g++){
                            var k = f, q = G[b + 8 * g >> 2], r = G[b + (8 * g + 4) >> 2], p = void 0, t = D;
                            if (0 > r || 0 > p) throw new N(28);
                            if (null === k.Cc) throw new N(8);
                            if (0 === (k.flags & 2097155)) throw new N(8);
                            if (16384 === (k.node.mode & 61440)) throw new N(31);
                            if (!k.sc.write) throw new N(28);
                            k.seekable && k.flags & 1024 && Nb(k, 0, 2);
                            var w = "undefined" !== typeof p;
                            if (!w) p = k.position;
                            else if (!k.seekable) throw new N(70);
                            var C = k.sc.write(k, t, q, r, p, void 0);
                            w || (k.position += C);
                            try {
                                if (k.path && R.onWriteToFile) R.onWriteToFile(k.path);
                            } catch (y) {
                                n("FS.trackingDelegate['onWriteToFile']('" + k.path + "') threw an exception: " + y.message);
                            }
                            var h = C;
                            if (0 > h) {
                                var u = -1;
                                break a;
                            }
                            a += h;
                        }
                        u = a;
                    }
                    G[d >> 2] = u;
                    return 0;
                } catch (y) {
                    return "undefined" !== typeof V && y instanceof N || x(y), y.vc;
                }
            },
            f: function(a) {
                var b = Date.now();
                G[a >> 2] = b / 1E3 | 0;
                G[a + 4 >> 2] = b % 1E3 * 1E3 | 0;
                return 0;
            },
            m: function(a, b) {
                Bc.bindTexture(a, bd[b]);
            },
            o: function(a, b) {
                for(var c = 0; c < a; c++){
                    var d = Bc.createTexture(), f = d && cd(bd);
                    d ? (d.name = f, bd[f] = d) : fd || (fd = 1282);
                    G[b + 4 * c >> 2] = f;
                }
            },
            i: function(a, b, c, d, f, g, k, q, r) {
                var p = Bc, t = p.texImage2D;
                if (r) {
                    var w = q - 5120;
                    w = 1 == w ? A : 4 == w ? G : 6 == w ? Ca : 5 == w || 28922 == w ? H : F;
                    var C = 31 - Math.clz32(w.BYTES_PER_ELEMENT);
                    r = w.subarray(r >> C, r + f * (d * (({
                        5: 3,
                        6: 4,
                        8: 2,
                        29502: 3,
                        29504: 4
                    })[k - 6402] || 1) * (1 << C) + 4 - 1 & -4) >> C);
                } else r = null;
                t.call(p, a, b, c, d, f, g, k, q, r);
            },
            j: function(a, b, c) {
                Bc.texParameteri(a, b, c);
            },
            r: gd,
            q: function(a, b) {
                hd();
                a = new Date(1E3 * G[a >> 2]);
                G[b >> 2] = a.getSeconds();
                G[b + 4 >> 2] = a.getMinutes();
                G[b + 8 >> 2] = a.getHours();
                G[b + 12 >> 2] = a.getDate();
                G[b + 16 >> 2] = a.getMonth();
                G[b + 20 >> 2] = a.getFullYear() - 1900;
                G[b + 24 >> 2] = a.getDay();
                var c = new Date(a.getFullYear(), 0, 1);
                G[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0;
                G[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
                var d = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
                c = c.getTimezoneOffset();
                a = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0;
                G[b + 32 >> 2] = a;
                a = G[ld() + (a ? 4 : 0) >> 2];
                G[b + 40 >> 2] = a;
                return b;
            },
            Q: function() {
                return 6;
            },
            y: function() {
                return 28;
            },
            z: function(a, b, c, d) {
                return rd(a, b, c, d);
            },
            d: function(a) {
                var b = Date.now() / 1E3 | 0;
                a && (G[a >> 2] = b);
                return b;
            }
        }, Z = function() {
            function a(c) {
                e.asm = c.exports;
                la = e.asm.S;
                Ea();
                I = e.asm.X;
                Ga.unshift(e.asm.T);
                Oa();
            }
            var b = {
                a: sd
            };
            Na();
            if (e.instantiateWasm) try {
                return e.instantiateWasm(b, a);
            } catch (c) {
                return n("Module.instantiateWasm callback failed with error: " + c), !1;
            }
            b = Ra(b);
            a(b[0]);
            return e.asm;
        }();
        e.___wasm_call_ctors = Z.T;
        e._zappar_has_initialized = Z.U;
        e._zappar_invert = Z.V;
        e._zappar_loaded = Z.W;
        e._zappar_pipeline_create = Z.Y;
        e._zappar_pipeline_destroy = Z.Z;
        e._zappar_pipeline_camera_frame_submit = Z._;
        e._zappar_pipeline_camera_frame_submit_raw_pointer = Z.$;
        e._zappar_pipeline_frame_update = Z.aa;
        e._zappar_pipeline_camera_frame_user_data = Z.ba;
        e._zappar_pipeline_camera_model = Z.ca;
        e._zappar_pipeline_frame_number = Z.da;
        e._zappar_pipeline_motion_accelerometer_submit = Z.ea;
        e._zappar_pipeline_motion_rotation_rate_submit = Z.fa;
        e._zappar_pipeline_motion_attitude_submit = Z.ga;
        e._zappar_pipeline_motion_attitude_matrix_submit = Z.ha;
        e._zappar_pipeline_camera_frame_user_facing = Z.ia;
        e._zappar_pipeline_camera_frame_texture_matrix = Z.ja;
        e._zappar_pipeline_camera_pose_with_attitude = Z.ka;
        e._zappar_pipeline_camera_pose_with_origin = Z.la;
        e._zappar_pipeline_camera_frame_camera_attitude = Z.ma;
        e._zappar_pipeline_camera_frame_device_attitude = Z.na;
        e._zappar_pipeline_camera_frame_texture_gl = Z.oa;
        e._zappar_pipeline_camera_frame_upload_gl = Z.pa;
        e._zappar_pipeline_sequence_record_start = Z.qa;
        e._zappar_pipeline_sequence_record_stop = Z.ra;
        e._zappar_pipeline_sequence_record_clear = Z.sa;
        e._zappar_pipeline_sequence_record_device_attitude_matrices_set = Z.ta;
        e._zappar_pipeline_sequence_record_data_size = Z.ua;
        e._zappar_pipeline_sequence_record_data = Z.va;
        e._zappar_pipeline_process_gl = Z.wa;
        e._zappar_pipeline_camera_pose_default = Z.xa;
        e._zappar_instant_world_tracker_create = Z.ya;
        e._zappar_instant_world_tracker_destroy = Z.za;
        e._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw = Z.Aa;
        e._zappar_instant_world_tracker_anchor_pose_raw = Z.Ba;
        e._zappar_instant_world_tracker_enabled_set = Z.Ca;
        e._zappar_instant_world_tracker_enabled = Z.Da;
        e._zappar_image_tracker_create = Z.Ea;
        e._zappar_image_tracker_destroy = Z.Fa;
        e._zappar_image_tracker_target_load_from_memory = Z.Ga;
        e.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc = Z.Ha;
        var Rc = e._free = Z.Ia;
        e._zappar_image_tracker_anchor_count = Z.Ja;
        e._zappar_image_tracker_anchor_id = Z.Ka;
        e._zappar_image_tracker_anchor_pose_raw = Z.La;
        e._zappar_image_tracker_enabled_set = Z.Ma;
        e._zappar_image_tracker_enabled = Z.Na;
        e._zappar_image_tracker_target_loaded_version = Z.Oa;
        e.__Z33zappar_image_tracker_target_countP23zappar_image_tracker_ti = Z.Pa;
        e.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii = Z.Qa;
        e.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii = Z.Ra;
        e.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii = Z.Sa;
        e.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii = Z.Ta;
        e.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii = Z.Ua;
        e.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii = Z.Va;
        e.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii = Z.Wa;
        e.__Z38zappar_image_tracker_target_radius_topP23zappar_image_tracker_tii = Z.Xa;
        e.__Z41zappar_image_tracker_target_radius_bottomP23zappar_image_tracker_tii = Z.Ya;
        e.__Z39zappar_image_tracker_target_side_lengthP23zappar_image_tracker_tii = Z.Za;
        e.__Z49zappar_image_tracker_target_physical_scale_factorP23zappar_image_tracker_tii = Z._a;
        e.__Z49zappar_image_tracker_target_preview_mesh_verticesP23zappar_image_tracker_tii = Z.$a;
        e.__Z48zappar_image_tracker_target_preview_mesh_normalsP23zappar_image_tracker_tii = Z.ab;
        e.__Z44zappar_image_tracker_target_preview_mesh_uvsP23zappar_image_tracker_tii = Z.bb;
        e.__Z48zappar_image_tracker_target_preview_mesh_indicesP23zappar_image_tracker_tii = Z.cb;
        e.__Z54zappar_image_tracker_target_preview_mesh_vertices_sizeP23zappar_image_tracker_tii = Z.db;
        e.__Z53zappar_image_tracker_target_preview_mesh_normals_sizeP23zappar_image_tracker_tii = Z.eb;
        e.__Z49zappar_image_tracker_target_preview_mesh_uvs_sizeP23zappar_image_tracker_tii = Z.fb;
        e.__Z53zappar_image_tracker_target_preview_mesh_indices_sizeP23zappar_image_tracker_tii = Z.gb;
        e.__Z32zappar_image_tracker_target_typeP23zappar_image_tracker_tii = Z.hb;
        e._zappar_face_tracker_create = Z.ib;
        e._zappar_face_tracker_destroy = Z.jb;
        e._zappar_face_tracker_model_load_from_memory = Z.kb;
        e._zappar_face_tracker_anchor_count = Z.lb;
        e._zappar_face_tracker_anchor_id = Z.mb;
        e._zappar_face_tracker_anchor_pose_raw = Z.nb;
        e._zappar_face_tracker_anchor_identity_coefficients = Z.ob;
        e._zappar_face_tracker_anchor_expression_coefficients = Z.pb;
        e._zappar_face_tracker_enabled_set = Z.qb;
        e._zappar_face_tracker_enabled = Z.rb;
        e._zappar_face_tracker_max_faces_set = Z.sb;
        e._zappar_face_tracker_max_faces = Z.tb;
        e._zappar_face_tracker_model_loaded_version = Z.ub;
        e._zappar_face_landmark_create = Z.vb;
        e._zappar_face_landmark_destroy = Z.wb;
        e.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i = Z.xb;
        e._zappar_face_landmark_anchor_pose = Z.yb;
        e._zappar_barcode_finder_create = Z.zb;
        e._zappar_barcode_finder_destroy = Z.Ab;
        e._zappar_barcode_finder_found_number = Z.Bb;
        e._zappar_barcode_finder_found_text = Z.Cb;
        e._zappar_barcode_finder_enabled_set = Z.Db;
        e._zappar_barcode_finder_enabled = Z.Eb;
        e._zappar_barcode_finder_found_format = Z.Fb;
        e._zappar_barcode_finder_formats = Z.Gb;
        e._zappar_barcode_finder_formats_set = Z.Hb;
        var ya = e._malloc = Z.Ib;
        e._zappar_face_mesh_create = Z.Jb;
        e._zappar_face_mesh_destroy = Z.Kb;
        e.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii = Z.Lb;
        e.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti = Z.Mb;
        e.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti = Z.Nb;
        e.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti = Z.Ob;
        e.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti = Z.Pb;
        e.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti = Z.Qb;
        e.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti = Z.Rb;
        e.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti = Z.Sb;
        e.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i = Z.Tb;
        e.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti = Z.Ub;
        e.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti = Z.Vb;
        e._zappar_camera_source_create = Z.Wb;
        e._zappar_camera_source_destroy = Z.Xb;
        e._zappar_camera_source_start = Z.Yb;
        e._zappar_camera_source_pause = Z.Zb;
        e._zappar_camera_default_device_id = Z._b;
        e._zappar_sequence_source_create = Z.$b;
        e.__Z28zappar_sequence_source_startP25zappar_sequence_source_ti = Z.ac;
        e.__Z39zappar_sequence_source_load_from_memoryP25zappar_sequence_source_tiPKci = Z.bc;
        e.__Z28zappar_sequence_source_pauseP25zappar_sequence_source_ti = Z.cc;
        e._zappar_sequence_source_destroy = Z.dc;
        e._zappar_sequence_source_max_playback_fps_set = Z.ec;
        e._zappar_log_level_set = Z.fc;
        e._zappar_log_level = Z.gc;
        e.__Z23zappar_log_redirect_setPFv18zappar_log_level_tPKcE = Z.hc;
        e._zappar_analytics_project_id_set = Z.ic;
        var Va = e.___errno_location = Z.jc, ld = e.__get_tzname = Z.kc, kd = e.__get_daylight = Z.lc, jd = e.__get_timezone = Z.mc, sa = e.stackSave = Z.nc, ta = e.stackRestore = Z.oc, ra = e.stackAlloc = Z.pc;
        e.cwrap = function(a, b, c, d) {
            c = c || [];
            var f = c.every(function(g) {
                return "number" === g;
            });
            return "string" !== b && f && !d ? pa(a) : function() {
                return qa(a, b, c, arguments);
            };
        };
        e.setValue = function(a, b, c) {
            c = c || "i8";
            "*" === c.charAt(c.length - 1) && (c = "i32");
            switch(c){
                case "i1":
                    D[a >> 0] = b;
                    break;
                case "i8":
                    D[a >> 0] = b;
                    break;
                case "i16":
                    Ba[a >> 1] = b;
                    break;
                case "i32":
                    G[a >> 2] = b;
                    break;
                case "i64":
                    M = [
                        b >>> 0,
                        (K = b, 1 <= +Math.abs(K) ? 0 < K ? (Math.min(+Math.floor(K / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((K - +(~~K >>> 0)) / 4294967296) >>> 0 : 0)
                    ];
                    G[a >> 2] = M[0];
                    G[a + 4 >> 2] = M[1];
                    break;
                case "float":
                    Ca[a >> 2] = b;
                    break;
                case "double":
                    Da[a >> 3] = b;
                    break;
                default:
                    x("invalid type for setValue: " + c);
            }
        };
        e.getValue = function(a, b) {
            b = b || "i8";
            "*" === b.charAt(b.length - 1) && (b = "i32");
            switch(b){
                case "i1":
                    return D[a >> 0];
                case "i8":
                    return D[a >> 0];
                case "i16":
                    return Ba[a >> 1];
                case "i32":
                    return G[a >> 2];
                case "i64":
                    return G[a >> 2];
                case "float":
                    return Ca[a >> 2];
                case "double":
                    return Da[a >> 3];
                default:
                    x("invalid type for getValue: " + b);
            }
            return null;
        };
        e.UTF8ToString = E;
        var td;
        function ic(a) {
            this.name = "ExitStatus";
            this.message = "Program terminated with exit(" + a + ")";
            this.status = a;
        }
        Ma = function ud() {
            td || vd();
            td || (Ma = ud);
        };
        function vd() {
            function a() {
                if (!td && (td = !0, e.calledRun = !0, !ma)) {
                    e.noFSInit || Pb || (Pb = !0, Ob(), e.stdin = e.stdin, e.stdout = e.stdout, e.stderr = e.stderr, e.stdin ? Rb("stdin", e.stdin) : Ib("/dev/tty", "/dev/stdin"), e.stdout ? Rb("stdout", null, e.stdout) : Ib("/dev/tty", "/dev/stdout"), e.stderr ? Rb("stderr", null, e.stderr) : Ib("/dev/tty1", "/dev/stderr"), Lb("/dev/stdin", 0), Lb("/dev/stdout", 1), Lb("/dev/stderr", 1));
                    Sa(Ga);
                    tb = !1;
                    Sa(Ha);
                    aa(e);
                    if (e.onRuntimeInitialized) e.onRuntimeInitialized();
                    if (e.postRun) for("function" == typeof e.postRun && (e.postRun = [
                        e.postRun
                    ]); e.postRun.length;){
                        var b = e.postRun.shift();
                        Ia.unshift(b);
                    }
                    Sa(Ia);
                }
            }
            if (!(0 < Ka)) {
                if (e.preRun) for("function" == typeof e.preRun && (e.preRun = [
                    e.preRun
                ]); e.preRun.length;)Ja();
                Sa(Fa);
                0 < Ka || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        e.setStatus("");
                    }, 1);
                    a();
                }, 1)) : a());
            }
        }
        e.run = vd;
        function hc(a) {
            na = a;
            if (!noExitRuntime) {
                if (e.onExit) e.onExit(a);
                ma = !0;
            }
            ea(a, new ic(a));
        }
        if (e.preInit) for("function" == typeof e.preInit && (e.preInit = [
            e.preInit
        ]); 0 < e.preInit.length;)e.preInit.pop()();
        vd();
        return ZCV;
    };
}();
exports.default = ZCV;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fn8Fk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"cdARF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRuntimeObject", ()=>getRuntimeObject);
function getRuntimeObject(mod) {
    let log_level_wrapped = mod.cwrap("zappar_log_level", "number", []);
    let log_level_set_wrapped = mod.cwrap("zappar_log_level_set", null, [
        "number"
    ]);
    let analytics_project_id_set_wrapped = mod.cwrap("zappar_analytics_project_id_set", null, [
        "string",
        "string"
    ]);
    let pipeline_create_wrapped = mod.cwrap("zappar_pipeline_create", "number", []);
    let pipeline_destroy_wrapped = mod.cwrap("zappar_pipeline_destroy", null, [
        "number"
    ]);
    let pipeline_frame_update_wrapped = mod.cwrap("zappar_pipeline_frame_update", null, [
        "number"
    ]);
    let pipeline_frame_number_wrapped = mod.cwrap("zappar_pipeline_frame_number", "number", [
        "number"
    ]);
    let pipeline_camera_model_wrapped = mod.cwrap("zappar_pipeline_camera_model", "number", [
        "number"
    ]);
    let pipeline_camera_frame_user_data_wrapped = mod.cwrap("zappar_pipeline_camera_frame_user_data", "number", [
        "number"
    ]);
    let pipeline_camera_frame_submit_wrapped = mod.cwrap("zappar_pipeline_camera_frame_submit", null, [
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number"
    ]);
    let pipeline_camera_frame_submit_raw_pointer_wrapped = mod.cwrap("zappar_pipeline_camera_frame_submit_raw_pointer", null, [
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number",
        "number"
    ]);
    let pipeline_camera_frame_camera_attitude_wrapped = mod.cwrap("zappar_pipeline_camera_frame_camera_attitude", "number", [
        "number"
    ]);
    let pipeline_camera_frame_device_attitude_wrapped = mod.cwrap("zappar_pipeline_camera_frame_device_attitude", "number", [
        "number"
    ]);
    let pipeline_motion_accelerometer_submit_wrapped = mod.cwrap("zappar_pipeline_motion_accelerometer_submit", null, [
        "number",
        "number",
        "number",
        "number",
        "number"
    ]);
    let pipeline_motion_rotation_rate_submit_wrapped = mod.cwrap("zappar_pipeline_motion_rotation_rate_submit", null, [
        "number",
        "number",
        "number",
        "number",
        "number"
    ]);
    let pipeline_motion_attitude_submit_wrapped = mod.cwrap("zappar_pipeline_motion_attitude_submit", null, [
        "number",
        "number",
        "number",
        "number",
        "number"
    ]);
    let pipeline_motion_attitude_matrix_submit_wrapped = mod.cwrap("zappar_pipeline_motion_attitude_matrix_submit", null, [
        "number",
        "number"
    ]);
    let camera_source_create_wrapped = mod.cwrap("zappar_camera_source_create", "number", [
        "number",
        "string"
    ]);
    let camera_source_destroy_wrapped = mod.cwrap("zappar_camera_source_destroy", null, [
        "number"
    ]);
    let sequence_source_create_wrapped = mod.cwrap("zappar_sequence_source_create", "number", [
        "number"
    ]);
    let sequence_source_destroy_wrapped = mod.cwrap("zappar_sequence_source_destroy", null, [
        "number"
    ]);
    let image_tracker_create_wrapped = mod.cwrap("zappar_image_tracker_create", "number", [
        "number"
    ]);
    let image_tracker_destroy_wrapped = mod.cwrap("zappar_image_tracker_destroy", null, [
        "number"
    ]);
    let image_tracker_target_load_from_memory_wrapped = mod.cwrap("zappar_image_tracker_target_load_from_memory", null, [
        "number",
        "number",
        "number"
    ]);
    let image_tracker_target_loaded_version_wrapped = mod.cwrap("zappar_image_tracker_target_loaded_version", "number", [
        "number"
    ]);
    let image_tracker_enabled_wrapped = mod.cwrap("zappar_image_tracker_enabled", "number", [
        "number"
    ]);
    let image_tracker_enabled_set_wrapped = mod.cwrap("zappar_image_tracker_enabled_set", null, [
        "number",
        "number"
    ]);
    let image_tracker_anchor_count_wrapped = mod.cwrap("zappar_image_tracker_anchor_count", "number", [
        "number"
    ]);
    let image_tracker_anchor_id_wrapped = mod.cwrap("zappar_image_tracker_anchor_id", "string", [
        "number",
        "number"
    ]);
    let image_tracker_anchor_pose_raw_wrapped = mod.cwrap("zappar_image_tracker_anchor_pose_raw", "number", [
        "number",
        "number"
    ]);
    let face_tracker_create_wrapped = mod.cwrap("zappar_face_tracker_create", "number", [
        "number"
    ]);
    let face_tracker_destroy_wrapped = mod.cwrap("zappar_face_tracker_destroy", null, [
        "number"
    ]);
    let face_tracker_model_load_from_memory_wrapped = mod.cwrap("zappar_face_tracker_model_load_from_memory", null, [
        "number",
        "number",
        "number"
    ]);
    let face_tracker_model_loaded_version_wrapped = mod.cwrap("zappar_face_tracker_model_loaded_version", "number", [
        "number"
    ]);
    let face_tracker_enabled_set_wrapped = mod.cwrap("zappar_face_tracker_enabled_set", null, [
        "number",
        "number"
    ]);
    let face_tracker_enabled_wrapped = mod.cwrap("zappar_face_tracker_enabled", "number", [
        "number"
    ]);
    let face_tracker_max_faces_set_wrapped = mod.cwrap("zappar_face_tracker_max_faces_set", null, [
        "number",
        "number"
    ]);
    let face_tracker_max_faces_wrapped = mod.cwrap("zappar_face_tracker_max_faces", "number", [
        "number"
    ]);
    let face_tracker_anchor_count_wrapped = mod.cwrap("zappar_face_tracker_anchor_count", "number", [
        "number"
    ]);
    let face_tracker_anchor_id_wrapped = mod.cwrap("zappar_face_tracker_anchor_id", "string", [
        "number",
        "number"
    ]);
    let face_tracker_anchor_pose_raw_wrapped = mod.cwrap("zappar_face_tracker_anchor_pose_raw", "number", [
        "number",
        "number"
    ]);
    let face_tracker_anchor_identity_coefficients_wrapped = mod.cwrap("zappar_face_tracker_anchor_identity_coefficients", "number", [
        "number",
        "number"
    ]);
    let face_tracker_anchor_expression_coefficients_wrapped = mod.cwrap("zappar_face_tracker_anchor_expression_coefficients", "number", [
        "number",
        "number"
    ]);
    let face_mesh_create_wrapped = mod.cwrap("zappar_face_mesh_create", "number", []);
    let face_mesh_destroy_wrapped = mod.cwrap("zappar_face_mesh_destroy", null, [
        "number"
    ]);
    let face_landmark_create_wrapped = mod.cwrap("zappar_face_landmark_create", "number", [
        "number"
    ]);
    let face_landmark_destroy_wrapped = mod.cwrap("zappar_face_landmark_destroy", null, [
        "number"
    ]);
    let barcode_finder_create_wrapped = mod.cwrap("zappar_barcode_finder_create", "number", [
        "number"
    ]);
    let barcode_finder_destroy_wrapped = mod.cwrap("zappar_barcode_finder_destroy", null, [
        "number"
    ]);
    let barcode_finder_enabled_set_wrapped = mod.cwrap("zappar_barcode_finder_enabled_set", null, [
        "number",
        "number"
    ]);
    let barcode_finder_enabled_wrapped = mod.cwrap("zappar_barcode_finder_enabled", "number", [
        "number"
    ]);
    let barcode_finder_found_number_wrapped = mod.cwrap("zappar_barcode_finder_found_number", "number", [
        "number"
    ]);
    let barcode_finder_found_text_wrapped = mod.cwrap("zappar_barcode_finder_found_text", "string", [
        "number",
        "number"
    ]);
    let barcode_finder_found_format_wrapped = mod.cwrap("zappar_barcode_finder_found_format", "number", [
        "number",
        "number"
    ]);
    let barcode_finder_formats_wrapped = mod.cwrap("zappar_barcode_finder_formats", "number", [
        "number"
    ]);
    let barcode_finder_formats_set_wrapped = mod.cwrap("zappar_barcode_finder_formats_set", null, [
        "number",
        "number"
    ]);
    let instant_world_tracker_create_wrapped = mod.cwrap("zappar_instant_world_tracker_create", "number", [
        "number"
    ]);
    let instant_world_tracker_destroy_wrapped = mod.cwrap("zappar_instant_world_tracker_destroy", null, [
        "number"
    ]);
    let instant_world_tracker_enabled_set_wrapped = mod.cwrap("zappar_instant_world_tracker_enabled_set", null, [
        "number",
        "number"
    ]);
    let instant_world_tracker_enabled_wrapped = mod.cwrap("zappar_instant_world_tracker_enabled", "number", [
        "number"
    ]);
    let instant_world_tracker_anchor_pose_raw_wrapped = mod.cwrap("zappar_instant_world_tracker_anchor_pose_raw", "number", [
        "number"
    ]);
    let instant_world_tracker_anchor_pose_set_from_camera_offset_raw_wrapped = mod.cwrap("zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw", null, [
        "number",
        "number",
        "number",
        "number",
        "number"
    ]);
    let dataArrayArgLength = 32;
    let dataArrayArg = mod._malloc(dataArrayArgLength);
    let floatDataArrayArgLength = 64;
    let floatDataArrayArg = mod._malloc(floatDataArrayArgLength);
    let floatDataArraysByArgIndex = new Map();
    let getFloatDataArrayForArgIndex = (indx, len)=>{
        let existing = floatDataArraysByArgIndex.get(indx);
        if (!existing || existing[0] < len) {
            if (existing) mod._free(existing[1]);
            existing = [
                len,
                mod._malloc(len)
            ];
            floatDataArraysByArgIndex.set(indx, existing);
        }
        return existing[1];
    };
    return {
        log_level: ()=>{
            let ret = log_level_wrapped();
            return ret;
        },
        log_level_set: (level)=>{
            let arg_level = level;
            let ret = log_level_set_wrapped(arg_level);
            return ret;
        },
        analytics_project_id_set: (id, uid)=>{
            let arg_id = id;
            let arg_uid = uid;
            let ret = analytics_project_id_set_wrapped(arg_id, arg_uid);
            return ret;
        },
        pipeline_create: ()=>{
            return pipeline_create_wrapped();
        },
        pipeline_destroy: ()=>{
            pipeline_destroy_wrapped();
        },
        pipeline_frame_update: (o)=>{
            let ret = pipeline_frame_update_wrapped(o);
            return ret;
        },
        pipeline_frame_number: (o)=>{
            let ret = pipeline_frame_number_wrapped(o);
            return ret;
        },
        pipeline_camera_model: (o)=>{
            let ret = pipeline_camera_model_wrapped(o);
            let ab = new Float32Array(6);
            ab.set(mod.HEAPF32.subarray(ret / 4, 6 + ret / 4));
            ret = ab;
            return ret;
        },
        pipeline_camera_frame_user_data: (o)=>{
            let ret = pipeline_camera_frame_user_data_wrapped(o);
            return ret;
        },
        pipeline_camera_frame_submit: (o, data, width, height, user_data, camera_to_device_transform, camera_model, user_facing)=>{
            if (dataArrayArgLength < data.byteLength) {
                mod._free(dataArrayArg);
                dataArrayArgLength = data.byteLength;
                dataArrayArg = mod._malloc(dataArrayArgLength);
            }
            let arg_data = dataArrayArg;
            let arg_len_data = data.byteLength;
            mod.HEAPU8.set(new Uint8Array(data), dataArrayArg);
            let arg_width = width;
            let arg_height = height;
            let arg_user_data = user_data;
            let arg_camera_to_device_transform = getFloatDataArrayForArgIndex(4, camera_to_device_transform.byteLength);
            mod.HEAPF32.set(camera_to_device_transform, arg_camera_to_device_transform / 4);
            let arg_camera_model = getFloatDataArrayForArgIndex(5, camera_model.byteLength);
            mod.HEAPF32.set(camera_model, arg_camera_model / 4);
            let arg_user_facing = user_facing ? 1 : 0;
            let ret = pipeline_camera_frame_submit_wrapped(o, arg_data, arg_len_data, arg_width, arg_height, arg_user_data, arg_camera_to_device_transform, arg_camera_model, arg_user_facing);
            return ret;
        },
        pipeline_camera_frame_submit_raw_pointer: (o, data, dataLength, format, width, height, user_data, camera_to_device_transform, rotation, camera_model, user_facing)=>{
            let arg_data = data;
            let arg_dataLength = dataLength;
            let arg_format = format;
            let arg_width = width;
            let arg_height = height;
            let arg_user_data = user_data;
            let arg_camera_to_device_transform = getFloatDataArrayForArgIndex(6, camera_to_device_transform.byteLength);
            mod.HEAPF32.set(camera_to_device_transform, arg_camera_to_device_transform / 4);
            let arg_rotation = rotation;
            let arg_camera_model = getFloatDataArrayForArgIndex(8, camera_model.byteLength);
            mod.HEAPF32.set(camera_model, arg_camera_model / 4);
            let arg_user_facing = user_facing ? 1 : 0;
            let ret = pipeline_camera_frame_submit_raw_pointer_wrapped(o, arg_data, arg_dataLength, arg_format, arg_width, arg_height, arg_user_data, arg_camera_to_device_transform, arg_rotation, arg_camera_model, arg_user_facing);
            return ret;
        },
        pipeline_camera_frame_camera_attitude: (o)=>{
            let ret = pipeline_camera_frame_camera_attitude_wrapped(o);
            let ab = new Float32Array(16);
            ab.set(mod.HEAPF32.subarray(ret / 4, 16 + ret / 4));
            ret = ab;
            return ret;
        },
        pipeline_camera_frame_device_attitude: (o)=>{
            let ret = pipeline_camera_frame_device_attitude_wrapped(o);
            let ab = new Float32Array(16);
            ab.set(mod.HEAPF32.subarray(ret / 4, 16 + ret / 4));
            ret = ab;
            return ret;
        },
        pipeline_motion_accelerometer_submit: (o, time, x, y, z)=>{
            let arg_time = time;
            let arg_x = x;
            let arg_y = y;
            let arg_z = z;
            let ret = pipeline_motion_accelerometer_submit_wrapped(o, arg_time, arg_x, arg_y, arg_z);
            return ret;
        },
        pipeline_motion_rotation_rate_submit: (o, time, x, y, z)=>{
            let arg_time = time;
            let arg_x = x;
            let arg_y = y;
            let arg_z = z;
            let ret = pipeline_motion_rotation_rate_submit_wrapped(o, arg_time, arg_x, arg_y, arg_z);
            return ret;
        },
        pipeline_motion_attitude_submit: (o, time, x, y, z)=>{
            let arg_time = time;
            let arg_x = x;
            let arg_y = y;
            let arg_z = z;
            let ret = pipeline_motion_attitude_submit_wrapped(o, arg_time, arg_x, arg_y, arg_z);
            return ret;
        },
        pipeline_motion_attitude_matrix_submit: (o, mat)=>{
            let arg_mat = getFloatDataArrayForArgIndex(0, mat.byteLength);
            mod.HEAPF32.set(mat, arg_mat / 4);
            let ret = pipeline_motion_attitude_matrix_submit_wrapped(o, arg_mat);
            return ret;
        },
        camera_source_create: (pipeline, device_id)=>{
            let arg_pipeline = pipeline;
            let arg_device_id = device_id;
            return camera_source_create_wrapped(arg_pipeline, arg_device_id);
        },
        camera_source_destroy: ()=>{
            camera_source_destroy_wrapped();
        },
        sequence_source_create: (pipeline)=>{
            let arg_pipeline = pipeline;
            return sequence_source_create_wrapped(arg_pipeline);
        },
        sequence_source_destroy: ()=>{
            sequence_source_destroy_wrapped();
        },
        image_tracker_create: (pipeline)=>{
            let arg_pipeline = pipeline;
            return image_tracker_create_wrapped(arg_pipeline);
        },
        image_tracker_destroy: ()=>{
            image_tracker_destroy_wrapped();
        },
        image_tracker_target_load_from_memory: (o, data)=>{
            if (dataArrayArgLength < data.byteLength) {
                mod._free(dataArrayArg);
                dataArrayArgLength = data.byteLength;
                dataArrayArg = mod._malloc(dataArrayArgLength);
            }
            let arg_data = dataArrayArg;
            let arg_len_data = data.byteLength;
            mod.HEAPU8.set(new Uint8Array(data), dataArrayArg);
            let ret = image_tracker_target_load_from_memory_wrapped(o, arg_data, arg_len_data);
            return ret;
        },
        image_tracker_target_loaded_version: (o)=>{
            let ret = image_tracker_target_loaded_version_wrapped(o);
            return ret;
        },
        image_tracker_enabled: (o)=>{
            let ret = image_tracker_enabled_wrapped(o);
            ret = ret === 1;
            return ret;
        },
        image_tracker_enabled_set: (o, enabled)=>{
            let arg_enabled = enabled ? 1 : 0;
            let ret = image_tracker_enabled_set_wrapped(o, arg_enabled);
            return ret;
        },
        image_tracker_anchor_count: (o)=>{
            let ret = image_tracker_anchor_count_wrapped(o);
            return ret;
        },
        image_tracker_anchor_id: (o, indx)=>{
            let arg_indx = indx;
            let ret = image_tracker_anchor_id_wrapped(o, arg_indx);
            return ret;
        },
        image_tracker_anchor_pose_raw: (o, indx)=>{
            let arg_indx = indx;
            let ret = image_tracker_anchor_pose_raw_wrapped(o, arg_indx);
            let ab = new Float32Array(16);
            ab.set(mod.HEAPF32.subarray(ret / 4, 16 + ret / 4));
            ret = ab;
            return ret;
        },
        face_tracker_create: (pipeline)=>{
            let arg_pipeline = pipeline;
            return face_tracker_create_wrapped(arg_pipeline);
        },
        face_tracker_destroy: ()=>{
            face_tracker_destroy_wrapped();
        },
        face_tracker_model_load_from_memory: (o, data)=>{
            if (dataArrayArgLength < data.byteLength) {
                mod._free(dataArrayArg);
                dataArrayArgLength = data.byteLength;
                dataArrayArg = mod._malloc(dataArrayArgLength);
            }
            let arg_data = dataArrayArg;
            let arg_len_data = data.byteLength;
            mod.HEAPU8.set(new Uint8Array(data), dataArrayArg);
            let ret = face_tracker_model_load_from_memory_wrapped(o, arg_data, arg_len_data);
            return ret;
        },
        face_tracker_model_loaded_version: (o)=>{
            let ret = face_tracker_model_loaded_version_wrapped(o);
            return ret;
        },
        face_tracker_enabled_set: (o, enabled)=>{
            let arg_enabled = enabled ? 1 : 0;
            let ret = face_tracker_enabled_set_wrapped(o, arg_enabled);
            return ret;
        },
        face_tracker_enabled: (o)=>{
            let ret = face_tracker_enabled_wrapped(o);
            ret = ret === 1;
            return ret;
        },
        face_tracker_max_faces_set: (o, num)=>{
            let arg_num = num;
            let ret = face_tracker_max_faces_set_wrapped(o, arg_num);
            return ret;
        },
        face_tracker_max_faces: (o)=>{
            let ret = face_tracker_max_faces_wrapped(o);
            return ret;
        },
        face_tracker_anchor_count: (o)=>{
            let ret = face_tracker_anchor_count_wrapped(o);
            return ret;
        },
        face_tracker_anchor_id: (o, indx)=>{
            let arg_indx = indx;
            let ret = face_tracker_anchor_id_wrapped(o, arg_indx);
            return ret;
        },
        face_tracker_anchor_pose_raw: (o, indx)=>{
            let arg_indx = indx;
            let ret = face_tracker_anchor_pose_raw_wrapped(o, arg_indx);
            let ab = new Float32Array(16);
            ab.set(mod.HEAPF32.subarray(ret / 4, 16 + ret / 4));
            ret = ab;
            return ret;
        },
        face_tracker_anchor_identity_coefficients: (o, indx)=>{
            let arg_indx = indx;
            let ret = face_tracker_anchor_identity_coefficients_wrapped(o, arg_indx);
            let ab = new Float32Array(50);
            ab.set(mod.HEAPF32.subarray(ret / 4, 50 + ret / 4));
            ret = ab;
            return ret;
        },
        face_tracker_anchor_expression_coefficients: (o, indx)=>{
            let arg_indx = indx;
            let ret = face_tracker_anchor_expression_coefficients_wrapped(o, arg_indx);
            let ab = new Float32Array(29);
            ab.set(mod.HEAPF32.subarray(ret / 4, 29 + ret / 4));
            ret = ab;
            return ret;
        },
        face_mesh_create: ()=>{
            return face_mesh_create_wrapped();
        },
        face_mesh_destroy: ()=>{
            face_mesh_destroy_wrapped();
        },
        face_landmark_create: (landmark)=>{
            let arg_landmark = landmark;
            return face_landmark_create_wrapped(arg_landmark);
        },
        face_landmark_destroy: ()=>{
            face_landmark_destroy_wrapped();
        },
        barcode_finder_create: (pipeline)=>{
            let arg_pipeline = pipeline;
            return barcode_finder_create_wrapped(arg_pipeline);
        },
        barcode_finder_destroy: ()=>{
            barcode_finder_destroy_wrapped();
        },
        barcode_finder_enabled_set: (o, enabled)=>{
            let arg_enabled = enabled ? 1 : 0;
            let ret = barcode_finder_enabled_set_wrapped(o, arg_enabled);
            return ret;
        },
        barcode_finder_enabled: (o)=>{
            let ret = barcode_finder_enabled_wrapped(o);
            ret = ret === 1;
            return ret;
        },
        barcode_finder_found_number: (o)=>{
            let ret = barcode_finder_found_number_wrapped(o);
            return ret;
        },
        barcode_finder_found_text: (o, indx)=>{
            let arg_indx = indx;
            let ret = barcode_finder_found_text_wrapped(o, arg_indx);
            return ret;
        },
        barcode_finder_found_format: (o, indx)=>{
            let arg_indx = indx;
            let ret = barcode_finder_found_format_wrapped(o, arg_indx);
            return ret;
        },
        barcode_finder_formats: (o)=>{
            let ret = barcode_finder_formats_wrapped(o);
            return ret;
        },
        barcode_finder_formats_set: (o, f)=>{
            let arg_f = f;
            let ret = barcode_finder_formats_set_wrapped(o, arg_f);
            return ret;
        },
        instant_world_tracker_create: (pipeline)=>{
            let arg_pipeline = pipeline;
            return instant_world_tracker_create_wrapped(arg_pipeline);
        },
        instant_world_tracker_destroy: ()=>{
            instant_world_tracker_destroy_wrapped();
        },
        instant_world_tracker_enabled_set: (o, enabled)=>{
            let arg_enabled = enabled ? 1 : 0;
            let ret = instant_world_tracker_enabled_set_wrapped(o, arg_enabled);
            return ret;
        },
        instant_world_tracker_enabled: (o)=>{
            let ret = instant_world_tracker_enabled_wrapped(o);
            ret = ret === 1;
            return ret;
        },
        instant_world_tracker_anchor_pose_raw: (o)=>{
            let ret = instant_world_tracker_anchor_pose_raw_wrapped(o);
            let ab = new Float32Array(16);
            ab.set(mod.HEAPF32.subarray(ret / 4, 16 + ret / 4));
            ret = ab;
            return ret;
        },
        instant_world_tracker_anchor_pose_set_from_camera_offset_raw: (o, x, y, z, orientation)=>{
            let arg_x = x;
            let arg_y = y;
            let arg_z = z;
            let arg_orientation = orientation;
            let ret = instant_world_tracker_anchor_pose_set_from_camera_offset_raw_wrapped(o, arg_x, arg_y, arg_z, arg_orientation);
            return ret;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"elKUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zappar_server", ()=>zappar_server);
var _serializer = require("../serializer");
var _deserializer = require("../deserializer");
class zappar_server {
    constructor(_impl, _sender){
        this._impl = _impl;
        this._sender = _sender;
        this._deserializer = new (0, _deserializer.MessageDeserializer)();
        this.serializersByPipelineId = new Map();
        this._pipeline_id_by_pipeline_id = new Map();
        this._pipeline_by_instance = new Map();
        this._pipeline_id_by_camera_source_id = new Map();
        this._camera_source_by_instance = new Map();
        this._pipeline_id_by_sequence_source_id = new Map();
        this._sequence_source_by_instance = new Map();
        this._pipeline_id_by_image_tracker_id = new Map();
        this._image_tracker_by_instance = new Map();
        this._pipeline_id_by_face_tracker_id = new Map();
        this._face_tracker_by_instance = new Map();
        this._pipeline_id_by_face_mesh_id = new Map();
        this._face_mesh_by_instance = new Map();
        this._pipeline_id_by_face_landmark_id = new Map();
        this._face_landmark_by_instance = new Map();
        this._pipeline_id_by_barcode_finder_id = new Map();
        this._barcode_finder_by_instance = new Map();
        this._pipeline_id_by_instant_world_tracker_id = new Map();
        this._instant_world_tracker_by_instance = new Map();
    }
    processBuffer(b) {
        this._deserializer.setData(b);
        this._deserializer.forMessages((messageId, msg)=>{
            switch(messageId){
                case 34:
                    this._impl.log_level_set(msg.logLevel());
                    break;
                case 31:
                    this._impl.analytics_project_id_set(msg.string(), msg.string());
                    break;
                case 27:
                    {
                        let clientId = msg.type();
                        let handle = this._impl.pipeline_create();
                        this._pipeline_by_instance.set(clientId, handle);
                        this._pipeline_id_by_pipeline_id.set(clientId, clientId);
                        this.serializersByPipelineId.set(clientId, new (0, _serializer.MessageSerializer)((ab)=>{
                            this._sender(clientId, ab);
                        }));
                        break;
                    }
                case 28:
                    {
                        let clientId = msg.type();
                        let obj = this._pipeline_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.pipeline_destroy(obj);
                        this._pipeline_by_instance.delete(clientId);
                        break;
                    }
                case 9:
                    {
                        let clientId = msg.type();
                        let obj = this._pipeline_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.pipeline_frame_update(obj);
                        break;
                    }
                case 8:
                    {
                        let clientId = msg.type();
                        let obj = this._pipeline_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.pipeline_camera_frame_submit(obj, msg.dataWithLength(), msg.int(), msg.int(), msg.int(), msg.matrix4x4(), msg.cameraModel(), msg.bool());
                        break;
                    }
                case 10:
                    {
                        let clientId = msg.type();
                        let obj = this._pipeline_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.pipeline_motion_accelerometer_submit(obj, msg.timestamp(), msg.float(), msg.float(), msg.float());
                        break;
                    }
                case 11:
                    {
                        let clientId = msg.type();
                        let obj = this._pipeline_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.pipeline_motion_rotation_rate_submit(obj, msg.timestamp(), msg.float(), msg.float(), msg.float());
                        break;
                    }
                case 12:
                    {
                        let clientId = msg.type();
                        let obj = this._pipeline_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.pipeline_motion_attitude_submit(obj, msg.timestamp(), msg.float(), msg.float(), msg.float());
                        break;
                    }
                case 13:
                    {
                        let clientId = msg.type();
                        let obj = this._pipeline_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.pipeline_motion_attitude_matrix_submit(obj, msg.matrix4x4());
                        break;
                    }
                case 29:
                    {
                        let clientId = msg.type();
                        let arg_pipeline_id = msg.type();
                        let arg_pipeline = this._pipeline_by_instance.get(arg_pipeline_id);
                        let arg_device_id = msg.string();
                        let handle = this._impl.camera_source_create(arg_pipeline, arg_device_id);
                        this._camera_source_by_instance.set(clientId, handle);
                        this._pipeline_id_by_camera_source_id.set(clientId, arg_pipeline_id);
                        break;
                    }
                case 30:
                    {
                        let clientId = msg.type();
                        let obj = this._camera_source_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.camera_source_destroy(obj);
                        this._camera_source_by_instance.delete(clientId);
                        break;
                    }
                case 35:
                    {
                        let clientId = msg.type();
                        let arg_pipeline_id = msg.type();
                        let arg_pipeline = this._pipeline_by_instance.get(arg_pipeline_id);
                        let handle = this._impl.sequence_source_create(arg_pipeline);
                        this._sequence_source_by_instance.set(clientId, handle);
                        this._pipeline_id_by_sequence_source_id.set(clientId, arg_pipeline_id);
                        break;
                    }
                case 36:
                    {
                        let clientId = msg.type();
                        let obj = this._sequence_source_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.sequence_source_destroy(obj);
                        this._sequence_source_by_instance.delete(clientId);
                        break;
                    }
                case 2:
                    {
                        let clientId = msg.type();
                        let arg_pipeline_id = msg.type();
                        let arg_pipeline = this._pipeline_by_instance.get(arg_pipeline_id);
                        let handle = this._impl.image_tracker_create(arg_pipeline);
                        this._image_tracker_by_instance.set(clientId, handle);
                        this._pipeline_id_by_image_tracker_id.set(clientId, arg_pipeline_id);
                        break;
                    }
                case 14:
                    {
                        let clientId = msg.type();
                        let obj = this._image_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.image_tracker_destroy(obj);
                        this._image_tracker_by_instance.delete(clientId);
                        break;
                    }
                case 4:
                    {
                        let clientId = msg.type();
                        let obj = this._image_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.image_tracker_target_load_from_memory(obj, msg.dataWithLength());
                        break;
                    }
                case 3:
                    {
                        let clientId = msg.type();
                        let obj = this._image_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.image_tracker_enabled_set(obj, msg.bool());
                        break;
                    }
                case 20:
                    {
                        let clientId = msg.type();
                        let arg_pipeline_id = msg.type();
                        let arg_pipeline = this._pipeline_by_instance.get(arg_pipeline_id);
                        let handle = this._impl.face_tracker_create(arg_pipeline);
                        this._face_tracker_by_instance.set(clientId, handle);
                        this._pipeline_id_by_face_tracker_id.set(clientId, arg_pipeline_id);
                        break;
                    }
                case 21:
                    {
                        let clientId = msg.type();
                        let obj = this._face_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.face_tracker_destroy(obj);
                        this._face_tracker_by_instance.delete(clientId);
                        break;
                    }
                case 22:
                    {
                        let clientId = msg.type();
                        let obj = this._face_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.face_tracker_model_load_from_memory(obj, msg.dataWithLength());
                        break;
                    }
                case 23:
                    {
                        let clientId = msg.type();
                        let obj = this._face_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.face_tracker_enabled_set(obj, msg.bool());
                        break;
                    }
                case 24:
                    {
                        let clientId = msg.type();
                        let obj = this._face_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.face_tracker_max_faces_set(obj, msg.int());
                        break;
                    }
                case 25:
                    {
                        let clientId = msg.type();
                        let handle = this._impl.face_mesh_create();
                        this._face_mesh_by_instance.set(clientId, handle);
                        break;
                    }
                case 26:
                    {
                        let clientId = msg.type();
                        let obj = this._face_mesh_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.face_mesh_destroy(obj);
                        this._face_mesh_by_instance.delete(clientId);
                        break;
                    }
                case 32:
                    {
                        let clientId = msg.type();
                        let arg_landmark = msg.faceLandmarkName();
                        let handle = this._impl.face_landmark_create(arg_landmark);
                        this._face_landmark_by_instance.set(clientId, handle);
                        break;
                    }
                case 33:
                    {
                        let clientId = msg.type();
                        let obj = this._face_landmark_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.face_landmark_destroy(obj);
                        this._face_landmark_by_instance.delete(clientId);
                        break;
                    }
                case 16:
                    {
                        let clientId = msg.type();
                        let arg_pipeline_id = msg.type();
                        let arg_pipeline = this._pipeline_by_instance.get(arg_pipeline_id);
                        let handle = this._impl.barcode_finder_create(arg_pipeline);
                        this._barcode_finder_by_instance.set(clientId, handle);
                        this._pipeline_id_by_barcode_finder_id.set(clientId, arg_pipeline_id);
                        break;
                    }
                case 17:
                    {
                        let clientId = msg.type();
                        let obj = this._barcode_finder_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.barcode_finder_destroy(obj);
                        this._barcode_finder_by_instance.delete(clientId);
                        break;
                    }
                case 18:
                    {
                        let clientId = msg.type();
                        let obj = this._barcode_finder_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.barcode_finder_enabled_set(obj, msg.bool());
                        break;
                    }
                case 19:
                    {
                        let clientId = msg.type();
                        let obj = this._barcode_finder_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.barcode_finder_formats_set(obj, msg.barcodeFormat());
                        break;
                    }
                case 5:
                    {
                        let clientId = msg.type();
                        let arg_pipeline_id = msg.type();
                        let arg_pipeline = this._pipeline_by_instance.get(arg_pipeline_id);
                        let handle = this._impl.instant_world_tracker_create(arg_pipeline);
                        this._instant_world_tracker_by_instance.set(clientId, handle);
                        this._pipeline_id_by_instant_world_tracker_id.set(clientId, arg_pipeline_id);
                        break;
                    }
                case 15:
                    {
                        let clientId = msg.type();
                        let obj = this._instant_world_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.instant_world_tracker_destroy(obj);
                        this._instant_world_tracker_by_instance.delete(clientId);
                        break;
                    }
                case 6:
                    {
                        let clientId = msg.type();
                        let obj = this._instant_world_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.instant_world_tracker_enabled_set(obj, msg.bool());
                        break;
                    }
                case 7:
                    {
                        let clientId = msg.type();
                        let obj = this._instant_world_tracker_by_instance.get(clientId);
                        if (obj === undefined) return;
                        this._impl.instant_world_tracker_anchor_pose_set_from_camera_offset_raw(obj, msg.float(), msg.float(), msg.float(), msg.instantTrackerTransformOrientation());
                        break;
                    }
            }
        });
    }
    exploreState() {
        for (let [k, v] of this._pipeline_by_instance){
            let pipeline = this._pipeline_id_by_pipeline_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
            serializer.sendMessage(7, (msg)=>{
                msg.type(k);
                msg.int(this._impl.pipeline_frame_number(v));
            });
            serializer.sendMessage(6, (msg)=>{
                msg.type(k);
                msg.cameraModel(this._impl.pipeline_camera_model(v));
            });
            serializer.sendMessage(5, (msg)=>{
                msg.type(k);
                msg.int(this._impl.pipeline_camera_frame_user_data(v));
            });
            serializer.sendMessage(11, (msg)=>{
                msg.type(k);
                msg.matrix4x4(this._impl.pipeline_camera_frame_camera_attitude(v));
            });
            serializer.sendMessage(12, (msg)=>{
                msg.type(k);
                msg.matrix4x4(this._impl.pipeline_camera_frame_device_attitude(v));
            });
        }
        for (let [k, v] of this._camera_source_by_instance){
            let pipeline = this._pipeline_id_by_camera_source_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
        }
        for (let [k, v] of this._sequence_source_by_instance){
            let pipeline = this._pipeline_id_by_sequence_source_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
        }
        for (let [k, v] of this._image_tracker_by_instance){
            let pipeline = this._pipeline_id_by_image_tracker_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
            serializer.sendMessage(19, (msg)=>{
                msg.type(k);
                msg.int(this._impl.image_tracker_target_loaded_version(v));
            });
            serializer.sendMessage(1, (msg)=>{
                msg.type(k);
                msg.int(this._impl.image_tracker_anchor_count(v));
            });
            for(let i = 0; i < this._impl.image_tracker_anchor_count(v); i++)serializer.sendMessage(2, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.string(this._impl.image_tracker_anchor_id(v, i));
            });
            for(let i = 0; i < this._impl.image_tracker_anchor_count(v); i++)serializer.sendMessage(3, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.matrix4x4(this._impl.image_tracker_anchor_pose_raw(v, i));
            });
        }
        for (let [k, v] of this._face_tracker_by_instance){
            let pipeline = this._pipeline_id_by_face_tracker_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
            serializer.sendMessage(18, (msg)=>{
                msg.type(k);
                msg.int(this._impl.face_tracker_model_loaded_version(v));
            });
            serializer.sendMessage(13, (msg)=>{
                msg.type(k);
                msg.int(this._impl.face_tracker_anchor_count(v));
            });
            for(let i = 0; i < this._impl.face_tracker_anchor_count(v); i++)serializer.sendMessage(14, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.string(this._impl.face_tracker_anchor_id(v, i));
            });
            for(let i = 0; i < this._impl.face_tracker_anchor_count(v); i++)serializer.sendMessage(15, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.matrix4x4(this._impl.face_tracker_anchor_pose_raw(v, i));
            });
            for(let i = 0; i < this._impl.face_tracker_anchor_count(v); i++)serializer.sendMessage(16, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.identityCoefficients(this._impl.face_tracker_anchor_identity_coefficients(v, i));
            });
            for(let i = 0; i < this._impl.face_tracker_anchor_count(v); i++)serializer.sendMessage(17, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.expressionCoefficients(this._impl.face_tracker_anchor_expression_coefficients(v, i));
            });
        }
        for (let [k, v] of this._face_mesh_by_instance){
            let pipeline = this._pipeline_id_by_face_mesh_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
        }
        for (let [k, v] of this._face_landmark_by_instance){
            let pipeline = this._pipeline_id_by_face_landmark_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
        }
        for (let [k, v] of this._barcode_finder_by_instance){
            let pipeline = this._pipeline_id_by_barcode_finder_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
            serializer.sendMessage(8, (msg)=>{
                msg.type(k);
                msg.int(this._impl.barcode_finder_found_number(v));
            });
            for(let i = 0; i < this._impl.barcode_finder_found_number(v); i++)serializer.sendMessage(9, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.string(this._impl.barcode_finder_found_text(v, i));
            });
            for(let i = 0; i < this._impl.barcode_finder_found_number(v); i++)serializer.sendMessage(10, (msg)=>{
                msg.type(k);
                msg.int(i);
                msg.barcodeFormat(this._impl.barcode_finder_found_format(v, i));
            });
        }
        for (let [k, v] of this._instant_world_tracker_by_instance){
            let pipeline = this._pipeline_id_by_instant_world_tracker_id.get(k);
            if (!pipeline) continue;
            let serializer = this.serializersByPipelineId.get(pipeline);
            if (!serializer) continue;
            serializer.sendMessage(4, (msg)=>{
                msg.type(k);
                msg.matrix4x4(this._impl.instant_world_tracker_anchor_pose_raw(v));
            });
        }
    }
}

},{"../serializer":"4q5of","../deserializer":"kl8xh","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4q5of":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageSerializer", ()=>MessageSerializer);
class MessageSerializer {
    constructor(_messageSender){
        this._messageSender = _messageSender;
        this._freeBufferPool = [];
        this._buffer = new ArrayBuffer(16);
        this._i32View = new Int32Array(this._buffer);
        this._f32View = new Float32Array(this._buffer);
        this._f64View = new Float64Array(this._buffer);
        this._u8View = new Uint8Array(this._buffer);
        this._u8cView = new Uint8ClampedArray(this._buffer);
        this._u16View = new Uint16Array(this._buffer);
        this._u32View = new Uint32Array(this._buffer);
        this._offset = 1;
        this._startOffset = -1;
        this._timeoutSet = false;
        this._appender = {
            int: (i)=>this.int(i),
            bool: (i)=>this.int(i ? 1 : 0),
            float: (i)=>this.float(i),
            string: (i)=>this.string(i),
            dataWithLength: (i)=>this.arrayBuffer(i),
            type: (i)=>this.int(i),
            matrix4x4: (i)=>this.float32ArrayBuffer(i),
            matrix3x3: (i)=>this.float32ArrayBuffer(i),
            identityCoefficients: (i)=>this.float32ArrayBuffer(i),
            expressionCoefficients: (i)=>this.float32ArrayBuffer(i),
            cameraModel: (i)=>this.float32ArrayBuffer(i),
            timestamp: (i)=>this.double(i),
            barcodeFormat: (i)=>this.int(i),
            faceLandmarkName: (i)=>this.int(i),
            instantTrackerTransformOrientation: (i)=>this.int(i),
            logLevel: (i)=>this.int(i)
        };
        this._freeBufferPool.push(new ArrayBuffer(16));
        this._freeBufferPool.push(new ArrayBuffer(16));
    }
    bufferReturn(ab) {
        this._freeBufferPool.push(ab);
    }
    // public copySerializedData(): ArrayBuffer {
    //     let data = this._buffer.slice(0, this._offset * Int32Array.BYTES_PER_ELEMENT);
    //     this._offset = 0;
    //     this._startOffset = -1;
    //     return data;
    // }
    _ensureArrayBuffer(incremental) {
        let requirement = (this._offset + incremental + 8) * 4;
        if (this._buffer && this._buffer.byteLength >= requirement) return;
        let newBuffer = undefined;
        // for (let i = 0; i < this._freeBufferPool.length; i++) {
        //     if (this._freeBufferPool[i].byteLength > requirement) {
        //         newBuffer = this._freeBufferPool[i];
        //         this._freeBufferPool.splice(i, 1);
        //         break;
        //     }
        // }
        if (!newBuffer) {
            let nextPow2 = requirement;
            nextPow2--;
            nextPow2 |= nextPow2 >> 1;
            nextPow2 |= nextPow2 >> 2;
            nextPow2 |= nextPow2 >> 4;
            nextPow2 |= nextPow2 >> 8;
            nextPow2 |= nextPow2 >> 16;
            nextPow2++;
            newBuffer = new ArrayBuffer(nextPow2);
        }
        let oldView = this._buffer ? this._i32View : undefined;
        this._buffer = newBuffer;
        this._i32View = new Int32Array(this._buffer);
        this._f32View = new Float32Array(this._buffer);
        this._f64View = new Float64Array(this._buffer);
        this._u8View = new Uint8Array(this._buffer);
        this._u8cView = new Uint8ClampedArray(this._buffer);
        this._u16View = new Uint16Array(this._buffer);
        this._u32View = new Uint32Array(this._buffer);
        if (oldView) this._i32View.set(oldView.subarray(0, this._offset));
    // this._offset = 1; // First int is whole length
    // this._startOffset = -1;
    }
    sendMessage(messageId, cb) {
        this._ensureArrayBuffer(4);
        this._startOffset = this._offset;
        this._i32View[this._offset + 1] = messageId;
        this._offset += 2;
        cb(this._appender);
        this._i32View[this._startOffset] = this._offset - this._startOffset;
        this._startOffset = -1;
        this._sendOneTime();
    }
    _sendOneTime() {
        if (this._timeoutSet === false) {
            this._timeoutSet = true;
            setTimeout(()=>{
                this._timeoutSet = false;
                this._send();
            }, 0);
        }
    }
    _send() {
        // Continue filling the current buffer unless have a new buffer to fill
        if (this._freeBufferPool.length === 0) {
            this._sendOneTime();
            return;
        }
        this._i32View[0] = this._offset;
        this._messageSender(this._buffer);
        this._buffer = undefined;
        this._buffer = this._freeBufferPool.pop();
        this._i32View = new Int32Array(this._buffer);
        this._f32View = new Float32Array(this._buffer);
        this._f64View = new Float64Array(this._buffer);
        this._u8View = new Uint8Array(this._buffer);
        this._u8cView = new Uint8ClampedArray(this._buffer);
        this._u16View = new Uint16Array(this._buffer);
        this._u32View = new Uint32Array(this._buffer);
        this._offset = 1;
        this._startOffset = -1;
    }
    int(arg) {
        this._ensureArrayBuffer(1);
        this._i32View[this._offset] = arg;
        this._offset++;
    }
    double(arg) {
        this._ensureArrayBuffer(2);
        if (this._offset % 2 === 1) this._offset++;
        this._f64View[this._offset / 2] = arg;
        this._offset += 2;
    }
    float(arg) {
        this._ensureArrayBuffer(1);
        this._f32View[this._offset] = arg;
        this._offset++;
    }
    int32Array(args) {
        this._ensureArrayBuffer(args.length);
        for(let i = 0; i < args.length; ++i)this._i32View[this._offset + i] = args[i];
        this._offset += args.length;
    }
    float32Array(args) {
        this._ensureArrayBuffer(args.length);
        for(let i = 0; i < args.length; ++i)this._f32View[this._offset + i] = args[i];
        this._offset += args.length;
    }
    booleanArray(args) {
        this._ensureArrayBuffer(args.length);
        for(let i = 0; i < args.length; ++i)this._i32View[this._offset + i] = args[i] ? 1 : 0;
        this._offset += args.length;
    }
    uint8ArrayBuffer(data) {
        this._ensureArrayBuffer(data.byteLength / 4);
        this._i32View[this._offset] = data.byteLength;
        this._offset++;
        this._u8View.set(data, this._offset * 4);
        // Update the int32 offset
        this._offset += data.byteLength >> 2;
        if ((data.byteLength & 3) !== 0) this._offset++;
    }
    arrayBuffer(data) {
        let view = new Uint8Array(data);
        this.uint8ArrayBuffer(view);
    }
    uint8ClampedArrayBuffer(data) {
        this._ensureArrayBuffer(data.byteLength / 4);
        this._i32View[this._offset] = data.byteLength;
        this._offset++;
        this._u8cView.set(data, this._offset * 4);
        // Update the int32 offset
        this._offset += data.byteLength >> 2;
        if ((data.byteLength & 3) !== 0) this._offset++;
    }
    float32ArrayBuffer(data) {
        this._ensureArrayBuffer(data.byteLength / 4);
        this._i32View[this._offset] = data.length;
        this._offset++;
        this._f32View.set(data, this._offset);
        this._offset += data.length;
    }
    uint16ArrayBuffer(data) {
        this._ensureArrayBuffer(data.byteLength / 4);
        this._i32View[this._offset] = data.length;
        this._offset++;
        let u16Offset = this._offset * 2;
        this._u16View.set(data, u16Offset);
        // Update the int32 offset
        this._offset += data.length >> 1;
        if ((data.length & 1) !== 0) this._offset++;
    }
    int32ArrayBuffer(data) {
        this._ensureArrayBuffer(data.byteLength / 4);
        this._i32View[this._offset] = data.length;
        this._offset++;
        this._i32View.set(data, this._offset);
        this._offset += data.length;
    }
    uint32ArrayBuffer(data) {
        this._ensureArrayBuffer(data.byteLength / 4);
        this._i32View[this._offset] = data.length;
        this._offset++;
        this._u32View.set(data, this._offset);
        this._offset += data.length;
    }
    string(data) {
        let encoder = new TextEncoder();
        let res = encoder.encode(data);
        this._ensureArrayBuffer(res.byteLength / 4);
        this._i32View[this._offset] = res.byteLength;
        this._offset++;
        this._u8View.set(res, this._offset * 4);
        // Update the int32 offset
        this._offset += res.byteLength >> 2;
        if ((res.byteLength & 3) !== 0) this._offset++;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"kl8xh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageDeserializer", ()=>MessageDeserializer);
class MessageDeserializer {
    constructor(){
        this._buffer = new ArrayBuffer(0);
        this._i32View = new Int32Array(this._buffer);
        this._f32View = new Float32Array(this._buffer);
        this._f64View = new Float64Array(this._buffer);
        this._u8View = new Uint8Array(this._buffer);
        this._u16View = new Uint16Array(this._buffer);
        this._u32View = new Uint32Array(this._buffer);
        this._offset = 0;
        this._length = 0;
        this._startOffset = -1;
        this._processor = {
            int: ()=>this._i32View[this._startOffset++],
            bool: ()=>this._i32View[this._startOffset++] === 1,
            type: ()=>this._i32View[this._startOffset++],
            float: ()=>this._f32View[this._startOffset++],
            timestamp: ()=>{
                if (this._startOffset % 2 === 1) this._startOffset++;
                let ret = this._f64View[this._startOffset / 2];
                this._startOffset += 2;
                return ret;
            },
            string: ()=>{
                let len = this._i32View[this._startOffset++];
                let decoder = new TextDecoder();
                let res = decoder.decode(new Uint8Array(this._buffer, this._startOffset * 4, len));
                this._startOffset += len >> 2;
                if ((len & 3) !== 0) this._startOffset++;
                return res;
            },
            dataWithLength: ()=>{
                let len = this._i32View[this._startOffset++];
                let ret = new Uint8Array(len);
                ret.set(this._u8View.subarray(this._startOffset * 4, this._startOffset * 4 + len));
                this._startOffset += ret.byteLength >> 2;
                if ((ret.byteLength & 3) !== 0) this._startOffset++;
                return ret.buffer;
            },
            matrix4x4: ()=>{
                let len = this._i32View[this._startOffset++];
                let ret = new Float32Array(len);
                ret.set(this._f32View.subarray(this._startOffset, this._startOffset + 16));
                this._startOffset += len;
                return ret;
            },
            matrix3x3: ()=>{
                let len = this._i32View[this._startOffset++];
                let ret = new Float32Array(len);
                ret.set(this._f32View.subarray(this._startOffset, this._startOffset + 9));
                this._startOffset += len;
                return ret;
            },
            identityCoefficients: ()=>{
                let len = this._i32View[this._startOffset++];
                let ret = new Float32Array(len);
                ret.set(this._f32View.subarray(this._startOffset, this._startOffset + 50));
                this._startOffset += len;
                return ret;
            },
            expressionCoefficients: ()=>{
                let len = this._i32View[this._startOffset++];
                let ret = new Float32Array(len);
                ret.set(this._f32View.subarray(this._startOffset, this._startOffset + 29));
                this._startOffset += len;
                return ret;
            },
            cameraModel: ()=>{
                let len = this._i32View[this._startOffset++];
                let ret = new Float32Array(len);
                ret.set(this._f32View.subarray(this._startOffset, this._startOffset + 6));
                this._startOffset += len;
                return ret;
            },
            barcodeFormat: ()=>this._i32View[this._startOffset++],
            faceLandmarkName: ()=>this._i32View[this._startOffset++],
            instantTrackerTransformOrientation: ()=>this._i32View[this._startOffset++],
            logLevel: ()=>this._i32View[this._startOffset++]
        };
    }
    setData(data) {
        this._buffer = data;
        this._i32View = new Int32Array(this._buffer);
        this._f32View = new Float32Array(this._buffer);
        this._f64View = new Float64Array(this._buffer);
        this._u8View = new Uint8Array(this._buffer);
        this._u16View = new Uint16Array(this._buffer);
        this._u32View = new Uint32Array(this._buffer);
        this._offset = 0;
        this._length = 0;
        if (data.byteLength >= 4) {
            this._offset = 1;
            this._length = this._i32View[0];
        }
        this._startOffset = -1;
    }
    hasMessage() {
        return this._offset + 1 < this._length;
    }
    forMessages(cb) {
        while(this.hasMessage()){
            let len = this._i32View[this._offset];
            let messageId = this._i32View[this._offset + 1];
            this._startOffset = this._offset + 2;
            this._offset += len;
            cb(messageId, this._processor);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"6FPsV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MsgManager", ()=>MsgManager);
var _event = require("./event");
class MsgManager {
    constructor(){
        this.onOutgoingMessage = new (0, _event.Event)();
        this.onIncomingMessage = new (0, _event.Event1)();
        this._outgoingMessages = [];
    }
    postIncomingMessage(msg) {
        this.onIncomingMessage.emit(msg);
    }
    postOutgoingMessage(msg, trans) {
        this._outgoingMessages.push({
            msg: msg,
            transferables: trans
        });
        this.onOutgoingMessage.emit();
    }
    getOutgoingMessages() {
        let ret = this._outgoingMessages;
        this._outgoingMessages = [];
        return ret;
    }
}

},{"./event":"75GQd","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"75GQd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Event", ()=>Event);
parcelHelpers.export(exports, "Event1", ()=>Event1);
parcelHelpers.export(exports, "Event2", ()=>Event2);
parcelHelpers.export(exports, "Event3", ()=>Event3);
parcelHelpers.export(exports, "Event5", ()=>Event5);
class Event {
    constructor(){
        this._funcs = [];
    }
    bind(f) {
        this._funcs.push(f);
    }
    unbind(f) {
        let indx = this._funcs.indexOf(f);
        if (indx > -1) this._funcs.splice(indx, 1);
    }
    emit() {
        for(var i = 0, total = this._funcs.length; i < total; i++)this._funcs[i]();
    }
}
class Event1 {
    constructor(){
        this._funcs = [];
    }
    bind(f) {
        this._funcs.push(f);
    }
    unbind(f) {
        let indx = this._funcs.indexOf(f);
        if (indx > -1) this._funcs.splice(indx, 1);
    }
    emit(a) {
        for(var i = 0, total = this._funcs.length; i < total; i++)this._funcs[i](a);
    }
}
class Event2 {
    constructor(){
        this._funcs = [];
    }
    bind(f) {
        this._funcs.push(f);
    }
    unbind(f) {
        let indx = this._funcs.indexOf(f);
        if (indx > -1) this._funcs.splice(indx, 1);
    }
    emit(a, b) {
        for(var i = 0, total = this._funcs.length; i < total; i++)this._funcs[i](a, b);
    }
}
class Event3 {
    constructor(){
        this._funcs = [];
    }
    bind(f) {
        this._funcs.push(f);
    }
    unbind(f) {
        let indx = this._funcs.indexOf(f);
        if (indx > -1) this._funcs.splice(indx, 1);
    }
    emit(a, b, c) {
        for(var i = 0, total = this._funcs.length; i < total; i++)this._funcs[i](a, b, c);
    }
}
class Event5 {
    constructor(){
        this._funcs = [];
    }
    bind(f) {
        this._funcs.push(f);
    }
    unbind(f) {
        let indx = this._funcs.indexOf(f);
        if (indx > -1) this._funcs.splice(indx, 1);
    }
    emit(a, b, c, d, e) {
        for(var i = 0, total = this._funcs.length; i < total; i++)this._funcs[i](a, b, c, d, e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"28U3r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glMatrix", ()=>_commonJs);
parcelHelpers.export(exports, "mat2", ()=>_mat2Js);
parcelHelpers.export(exports, "mat2d", ()=>_mat2DJs);
parcelHelpers.export(exports, "mat3", ()=>_mat3Js);
parcelHelpers.export(exports, "mat4", ()=>_mat4Js);
parcelHelpers.export(exports, "quat", ()=>_quatJs);
parcelHelpers.export(exports, "quat2", ()=>_quat2Js);
parcelHelpers.export(exports, "vec2", ()=>_vec2Js);
parcelHelpers.export(exports, "vec3", ()=>_vec3Js);
parcelHelpers.export(exports, "vec4", ()=>_vec4Js);
var _commonJs = require("./common.js");
var _mat2Js = require("./mat2.js");
var _mat2DJs = require("./mat2d.js");
var _mat3Js = require("./mat3.js");
var _mat4Js = require("./mat4.js");
var _quatJs = require("./quat.js");
var _quat2Js = require("./quat2.js");
var _vec2Js = require("./vec2.js");
var _vec3Js = require("./vec3.js");
var _vec4Js = require("./vec4.js");

},{"./common.js":"1olMy","./mat2.js":"1Ra1Z","./mat2d.js":"fGfh2","./mat3.js":"9cSCE","./mat4.js":"lMFn8","./quat.js":"dBcY3","./quat2.js":"j7Ebt","./vec2.js":"4q6bS","./vec3.js":"gAcN1","./vec4.js":"h0FKX","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"1olMy":[function(require,module,exports) {
/**
 * Common utilities
 * @module glMatrix
 */ // Configuration Constants
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EPSILON", ()=>EPSILON);
parcelHelpers.export(exports, "ARRAY_TYPE", ()=>ARRAY_TYPE);
parcelHelpers.export(exports, "RANDOM", ()=>RANDOM);
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */ parcelHelpers.export(exports, "setMatrixArrayType", ()=>setMatrixArrayType);
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */ parcelHelpers.export(exports, "toRadian", ()=>toRadian);
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
function setMatrixArrayType(type) {
    ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
function toRadian(a) {
    return a * degree;
}
function equals(a, b) {
    return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function() {
    var y = 0, i = arguments.length;
    while(i--)y += arguments[i] * arguments[i];
    return Math.sqrt(y);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"1Ra1Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 2x2 Matrix
 * @module mat2
 */ /**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "adjoint", ()=>adjoint);
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */ parcelHelpers.export(exports, "LDU", ()=>LDU);
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(4);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
    }
    out[0] = 1;
    out[3] = 1;
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
function fromValues(m00, m01, m10, m11) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
function set(out, m00, m01, m10, m11) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache
    // some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    return out;
}
function invert(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3]; // Calculate the determinant
    var det = a0 * a3 - a2 * a1;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] = a0 * det;
    return out;
}
function adjoint(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] = a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a0;
    return out;
}
function determinant(a) {
    return a[0] * a[3] - a[2] * a[1];
}
function multiply(out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
}
function rotate(out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = a0 * c + a2 * s;
    out[1] = a1 * c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
}
function scale(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
}
function fromRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
}
function str(a) {
    return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3]);
}
function LDU(L, D, U, a) {
    L[2] = a[2] / a[0];
    U[0] = a[0];
    U[1] = a[1];
    U[3] = a[3] - L[2] * U[1];
    return [
        L,
        D,
        U
    ];
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"1olMy","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fGfh2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */ /**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(6);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[4] = 0;
        out[5] = 0;
    }
    out[0] = 1;
    out[3] = 1;
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
}
function fromValues(a, b, c, d, tx, ty) {
    var out = new _commonJs.ARRAY_TYPE(6);
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
}
function set(out, a, b, c, d, tx, ty) {
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
}
function invert(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3];
    var atx = a[4], aty = a[5];
    var det = aa * ad - ab * ac;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
}
function determinant(a) {
    return a[0] * a[3] - a[1] * a[2];
}
function multiply(out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
}
function rotate(out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = a0 * c + a2 * s;
    out[1] = a1 * c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
}
function scale(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
}
function translate(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
}
function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    out[4] = 0;
    out[5] = 0;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    out[4] = 0;
    out[5] = 0;
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = v[0];
    out[5] = v[1];
    return out;
}
function str(a) {
    return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"1olMy","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"9cSCE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 3x3 Matrix
 * @module mat3
 */ /**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromMat4", ()=>fromMat4);
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "adjoint", ()=>adjoint);
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/ parcelHelpers.export(exports, "fromMat2d", ()=>fromMat2d);
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "fromQuat", ()=>fromQuat);
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "normalFromMat4", ()=>normalFromMat4);
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "projection", ()=>projection);
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(9);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
    }
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
}
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new _commonJs.ARRAY_TYPE(9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    return out;
}
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20; // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    out[0] = a11 * a22 - a12 * a21;
    out[1] = a02 * a21 - a01 * a22;
    out[2] = a01 * a12 - a02 * a11;
    out[3] = a12 * a20 - a10 * a22;
    out[4] = a00 * a22 - a02 * a20;
    out[5] = a02 * a10 - a00 * a12;
    out[6] = a10 * a21 - a11 * a20;
    out[7] = a01 * a20 - a00 * a21;
    out[8] = a00 * a11 - a01 * a10;
    return out;
}
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
function translate(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}
function rotate(out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;
    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}
function scale(out, a, v) {
    var x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}
function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = -s;
    out[4] = c;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function fromMat2d(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;
    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;
    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
}
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
}
function normalFromMat4(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
}
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}
function str(a) {
    return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"1olMy","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"lMFn8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */ /**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "adjoint", ()=>adjoint);
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant);
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling);
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromXRotation", ()=>fromXRotation);
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromYRotation", ()=>fromYRotation);
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromZRotation", ()=>fromZRotation);
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslation", ()=>fromRotationTranslation);
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */ parcelHelpers.export(exports, "fromQuat2", ()=>fromQuat2);
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getTranslation", ()=>getTranslation);
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getScaling", ()=>getScaling);
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */ parcelHelpers.export(exports, "getRotation", ()=>getRotation);
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslationScale", ()=>fromRotationTranslationScale);
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslationScaleOrigin", ()=>fromRotationTranslationScaleOrigin);
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromQuat", ()=>fromQuat);
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "frustum", ()=>frustum);
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveNO", ()=>perspectiveNO);
parcelHelpers.export(exports, "perspective", ()=>perspective);
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveZO", ()=>perspectiveZO);
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveFromFieldOfView", ()=>perspectiveFromFieldOfView);
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "orthoNO", ()=>orthoNO);
parcelHelpers.export(exports, "ortho", ()=>ortho);
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "orthoZO", ()=>orthoZO);
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "lookAt", ()=>lookAt);
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "targetTo", ()=>targetTo);
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob);
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar);
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "sub", ()=>sub);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(16);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new _commonJs.ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3];
        var a12 = a[6], a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
}
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
}
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]; // Cache only the current line of the second matrix
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len < _commonJs.EPSILON) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11]; // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}
function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}
function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}
function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    if (len < _commonJs.EPSILON) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c; // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromQuat2(out, a) {
    var translation = new _commonJs.ARRAY_TYPE(3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
    if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
}
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
}
function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
}
function getRotation(out, mat) {
    var scaling = new _commonJs.ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (sm23 - sm32) / S;
        out[1] = (sm31 - sm13) / S;
        out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
        out[3] = (sm23 - sm32) / S;
        out[0] = 0.25 * S;
        out[1] = (sm12 + sm21) / S;
        out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
        S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
        out[3] = (sm31 - sm13) / S;
        out[0] = (sm12 + sm21) / S;
        out[1] = 0.25 * S;
        out[2] = (sm23 + sm32) / S;
    } else {
        S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
        out[3] = (sm12 - sm21) / S;
        out[0] = (sm31 + sm13) / S;
        out[1] = (sm23 + sm32) / S;
        out[2] = 0.25 * S;
    }
    return out;
}
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
}
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
}
var perspective = perspectiveNO;
function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = far * nf;
        out[14] = far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -near;
    }
    return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
    var xScale = 2.0 / (leftTan + rightTan);
    var yScale = 2.0 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = far * near / (near - far);
    out[15] = 0.0;
    return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}
var ortho = orthoNO;
function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
}
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < _commonJs.EPSILON && Math.abs(eyey - centery) < _commonJs.EPSILON && Math.abs(eyez - centerz) < _commonJs.EPSILON) return identity(out);
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
}
function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}
function str(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    out[9] = a[9] + b[9] * scale;
    out[10] = a[10] + b[10] * scale;
    out[11] = a[11] + b[11] * scale;
    out[12] = a[12] + b[12] * scale;
    out[13] = a[13] + b[13] * scale;
    out[14] = a[14] + b[14] * scale;
    out[15] = a[15] + b[15] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"1olMy","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"dBcY3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Quaternion
 * @module quat
 */ /**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/ parcelHelpers.export(exports, "setAxisAngle", ()=>setAxisAngle);
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */ parcelHelpers.export(exports, "getAxisAngle", ()=>getAxisAngle);
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */ parcelHelpers.export(exports, "getAngle", ()=>getAngle);
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "calculateW", ()=>calculateW);
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "exp", ()=>exp);
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "ln", ()=>ln);
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */ parcelHelpers.export(exports, "pow", ()=>pow);
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */ parcelHelpers.export(exports, "slerp", ()=>slerp);
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */ parcelHelpers.export(exports, "conjugate", ()=>conjugate);
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */ parcelHelpers.export(exports, "fromMat3", ()=>fromMat3);
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */ parcelHelpers.export(exports, "fromEuler", ()=>fromEuler);
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
parcelHelpers.export(exports, "clone", ()=>clone);
parcelHelpers.export(exports, "fromValues", ()=>fromValues);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "dot", ()=>dot);
parcelHelpers.export(exports, "lerp", ()=>lerp);
parcelHelpers.export(exports, "length", ()=>length);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "rotationTo", ()=>rotationTo);
parcelHelpers.export(exports, "sqlerp", ()=>sqlerp);
parcelHelpers.export(exports, "setAxes", ()=>setAxes);
var _commonJs = require("./common.js");
var _mat3Js = require("./mat3.js");
var _vec3Js = require("./vec3.js");
var _vec4Js = require("./vec4.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(4);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    out[3] = 1;
    return out;
}
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}
function getAxisAngle(out_axis, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s > _commonJs.EPSILON) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
    } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
    }
    return rad;
}
function getAngle(a, b) {
    var dotproduct = dot(a, b);
    return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
function rotateX(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}
function rotateY(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}
function rotateZ(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}
function calculateW(out, a) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
}
function exp(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var et = Math.exp(w);
    var s = r > 0 ? et * Math.sin(r) / r : 0;
    out[0] = x * s;
    out[1] = y * s;
    out[2] = z * s;
    out[3] = et * Math.cos(r);
    return out;
}
function ln(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var t = r > 0 ? Math.atan2(r, w) / r : 0;
    out[0] = x * t;
    out[1] = y * t;
    out[2] = z * t;
    out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
    return out;
}
function pow(out, a, b) {
    ln(out, a);
    scale(out, out, b);
    exp(out, out);
    return out;
}
function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1; // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    } // calculate coefficients
    if (1.0 - cosom > _commonJs.EPSILON) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    } // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
}
function random(out) {
    // Implementation of http://planning.cs.uiuc.edu/node198.html
    // TODO: Calling random 3 times is probably not the fastest solution
    var u1 = _commonJs.RANDOM();
    var u2 = _commonJs.RANDOM();
    var u3 = _commonJs.RANDOM();
    var sqrt1MinusU1 = Math.sqrt(1 - u1);
    var sqrtU1 = Math.sqrt(u1);
    out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
    out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
    out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
    out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
    return out;
}
function invert(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
function fromEuler(out, x, y, z) {
    var halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;
    var sx = Math.sin(x);
    var cx = Math.cos(x);
    var sy = Math.sin(y);
    var cy = Math.cos(y);
    var sz = Math.sin(z);
    var cz = Math.cos(z);
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
    return out;
}
function str(a) {
    return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone = _vec4Js.clone;
var fromValues = _vec4Js.fromValues;
var copy = _vec4Js.copy;
var set = _vec4Js.set;
var add = _vec4Js.add;
var mul = multiply;
var scale = _vec4Js.scale;
var dot = _vec4Js.dot;
var lerp = _vec4Js.lerp;
var length = _vec4Js.length;
var len = length;
var squaredLength = _vec4Js.squaredLength;
var sqrLen = squaredLength;
var normalize = _vec4Js.normalize;
var exactEquals = _vec4Js.exactEquals;
var equals = _vec4Js.equals;
var rotationTo = function() {
    var tmpvec3 = _vec3Js.create();
    var xUnitVec3 = _vec3Js.fromValues(1, 0, 0);
    var yUnitVec3 = _vec3Js.fromValues(0, 1, 0);
    return function(out, a, b) {
        var dot = _vec3Js.dot(a, b);
        if (dot < -0.999999) {
            _vec3Js.cross(tmpvec3, xUnitVec3, a);
            if (_vec3Js.len(tmpvec3) < 0.000001) _vec3Js.cross(tmpvec3, yUnitVec3, a);
            _vec3Js.normalize(tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            _vec3Js.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return normalize(out, out);
        }
    };
}();
var sqlerp = function() {
    var temp1 = create();
    var temp2 = create();
    return function(out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
    };
}();
var setAxes = function() {
    var matr = _mat3Js.create();
    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize(out, fromMat3(out, matr));
    };
}();

},{"./common.js":"1olMy","./mat3.js":"9cSCE","./vec3.js":"gAcN1","./vec4.js":"h0FKX","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"gAcN1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 3 Dimensional Vector
 * @module vec3
 */ /**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "min", ()=>min);
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "max", ()=>max);
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "scaleAndAdd", ()=>scaleAndAdd);
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "hermite", ()=>hermite);
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "bezier", ()=>bezier);
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat3", ()=>transformMat3);
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformQuat", ()=>transformQuat);
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */ parcelHelpers.export(exports, "angle", ()=>angle);
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "zero", ()=>zero);
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "dist", ()=>dist);
parcelHelpers.export(exports, "sqrDist", ()=>sqrDist);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "forEach", ()=>forEach);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(3);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
}
function fromValues(x, y, z) {
    var out = new _commonJs.ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
}
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function random(out, scale) {
    scale = scale || 1.0;
    var r = _commonJs.RANDOM() * 2.0 * Math.PI;
    var z = _commonJs.RANDOM() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2]; // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2; // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}
function rotateX(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateY(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateZ(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2]; //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function angle(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    return out;
}
function str(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 3;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
}();

},{"./common.js":"1olMy","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"h0FKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 4 Dimensional Vector
 * @module vec4
 */ /**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "min", ()=>min);
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "max", ()=>max);
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "scaleAndAdd", ()=>scaleAndAdd);
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "transformQuat", ()=>transformQuat);
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */ parcelHelpers.export(exports, "zero", ()=>zero);
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "dist", ()=>dist);
parcelHelpers.export(exports, "sqrDist", ()=>sqrDist);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "forEach", ()=>forEach);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(4);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
    }
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function fromValues(x, y, z, w) {
    var out = new _commonJs.ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
}
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return Math.hypot(x, y, z, w);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
}
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.hypot(x, y, z, w);
}
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
}
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len = x * x + y * y + z * z + w * w;
    if (len > 0) len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function cross(out, u, v, w) {
    var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
    var G = u[0];
    var H = u[1];
    var I = u[2];
    var J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}
function random(out, scale) {
    scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;
    var v1, v2, v3, v4;
    var s1, s2;
    do {
        v1 = _commonJs.RANDOM() * 2 - 1;
        v2 = _commonJs.RANDOM() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
    }while (s1 >= 1);
    do {
        v3 = _commonJs.RANDOM() * 2 - 1;
        v4 = _commonJs.RANDOM() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
    }while (s2 >= 1);
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale * v1;
    out[1] = scale * v2;
    out[2] = scale * v3 * d;
    out[3] = scale * v4 * d;
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}
function transformQuat(out, a, q) {
    var x = a[0], y = a[1], z = a[2];
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3]; // calculate quat * vec
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    return out;
}
function str(a) {
    return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 4;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
        }
        return a;
    };
}();

},{"./common.js":"1olMy","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"j7Ebt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */ /**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */ parcelHelpers.export(exports, "fromRotationTranslationValues", ()=>fromRotationTranslationValues);
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromRotationTranslation", ()=>fromRotationTranslation);
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation);
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation);
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */ parcelHelpers.export(exports, "fromMat4", ()=>fromMat4);
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "identity", ()=>identity);
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "getReal", ()=>getReal);
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */ parcelHelpers.export(exports, "getDual", ()=>getDual);
parcelHelpers.export(exports, "setReal", ()=>setReal);
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "setDual", ()=>setDual);
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */ parcelHelpers.export(exports, "getTranslation", ()=>getTranslation);
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "translate", ()=>translate);
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX);
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY);
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateByQuatAppend", ()=>rotateByQuatAppend);
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateByQuatPrepend", ()=>rotateByQuatPrepend);
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "rotateAroundAxis", ()=>rotateAroundAxis);
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
parcelHelpers.export(exports, "mul", ()=>mul);
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "invert", ()=>invert);
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */ parcelHelpers.export(exports, "conjugate", ()=>conjugate);
parcelHelpers.export(exports, "length", ()=>length);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
var _commonJs = require("./common.js");
var _quatJs = require("./quat.js");
var _mat4Js = require("./mat4.js");
function create() {
    var dq = new _commonJs.ARRAY_TYPE(8);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        dq[0] = 0;
        dq[1] = 0;
        dq[2] = 0;
        dq[4] = 0;
        dq[5] = 0;
        dq[6] = 0;
        dq[7] = 0;
    }
    dq[3] = 1;
    return dq;
}
function clone(a) {
    var dq = new _commonJs.ARRAY_TYPE(8);
    dq[0] = a[0];
    dq[1] = a[1];
    dq[2] = a[2];
    dq[3] = a[3];
    dq[4] = a[4];
    dq[5] = a[5];
    dq[6] = a[6];
    dq[7] = a[7];
    return dq;
}
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
    var dq = new _commonJs.ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    dq[4] = x2;
    dq[5] = y2;
    dq[6] = z2;
    dq[7] = w2;
    return dq;
}
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
    var dq = new _commonJs.ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
    dq[4] = ax * w1 + ay * z1 - az * y1;
    dq[5] = ay * w1 + az * x1 - ax * z1;
    dq[6] = az * w1 + ax * y1 - ay * x1;
    dq[7] = -ax * x1 - ay * y1 - az * z1;
    return dq;
}
function fromRotationTranslation(out, q, t) {
    var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
    out[0] = bx;
    out[1] = by;
    out[2] = bz;
    out[3] = bw;
    out[4] = ax * bw + ay * bz - az * by;
    out[5] = ay * bw + az * bx - ax * bz;
    out[6] = az * bw + ax * by - ay * bx;
    out[7] = -ax * bx - ay * by - az * bz;
    return out;
}
function fromTranslation(out, t) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = t[0] * 0.5;
    out[5] = t[1] * 0.5;
    out[6] = t[2] * 0.5;
    out[7] = 0;
    return out;
}
function fromRotation(out, q) {
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
    out[3] = q[3];
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
}
function fromMat4(out, a) {
    //TODO Optimize this
    var outer = _quatJs.create();
    _mat4Js.getRotation(outer, a);
    var t = new _commonJs.ARRAY_TYPE(3);
    _mat4Js.getTranslation(t, a);
    fromRotationTranslation(out, outer, t);
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    return out;
}
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
}
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
    out[0] = x1;
    out[1] = y1;
    out[2] = z1;
    out[3] = w1;
    out[4] = x2;
    out[5] = y2;
    out[6] = z2;
    out[7] = w2;
    return out;
}
var getReal = _quatJs.copy;
function getDual(out, a) {
    out[0] = a[4];
    out[1] = a[5];
    out[2] = a[6];
    out[3] = a[7];
    return out;
}
var setReal = _quatJs.copy;
function setDual(out, q) {
    out[4] = q[0];
    out[5] = q[1];
    out[6] = q[2];
    out[7] = q[3];
    return out;
}
function getTranslation(out, a) {
    var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
    out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    return out;
}
function translate(out, a, v) {
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
    out[0] = ax1;
    out[1] = ay1;
    out[2] = az1;
    out[3] = aw1;
    out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
    out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
    out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
    out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
    return out;
}
function rotateX(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quatJs.rotateX(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
function rotateY(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quatJs.rotateY(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
function rotateZ(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quatJs.rotateZ(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
function rotateByQuatAppend(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
    out[0] = ax * qw + aw * qx + ay * qz - az * qy;
    out[1] = ay * qw + aw * qy + az * qx - ax * qz;
    out[2] = az * qw + aw * qz + ax * qy - ay * qx;
    out[3] = aw * qw - ax * qx - ay * qy - az * qz;
    ax = a[4];
    ay = a[5];
    az = a[6];
    aw = a[7];
    out[4] = ax * qw + aw * qx + ay * qz - az * qy;
    out[5] = ay * qw + aw * qy + az * qx - ax * qz;
    out[6] = az * qw + aw * qz + ax * qy - ay * qx;
    out[7] = aw * qw - ax * qx - ay * qy - az * qz;
    return out;
}
function rotateByQuatPrepend(out, q, a) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
    out[0] = qx * bw + qw * bx + qy * bz - qz * by;
    out[1] = qy * bw + qw * by + qz * bx - qx * bz;
    out[2] = qz * bw + qw * bz + qx * by - qy * bx;
    out[3] = qw * bw - qx * bx - qy * by - qz * bz;
    bx = a[4];
    by = a[5];
    bz = a[6];
    bw = a[7];
    out[4] = qx * bw + qw * bx + qy * bz - qz * by;
    out[5] = qy * bw + qw * by + qz * bx - qx * bz;
    out[6] = qz * bw + qw * bz + qx * by - qy * bx;
    out[7] = qw * bw - qx * bx - qy * by - qz * bz;
    return out;
}
function rotateAroundAxis(out, a, axis, rad) {
    //Special case for rad = 0
    if (Math.abs(rad) < _commonJs.EPSILON) return copy(out, a);
    var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
    rad = rad * 0.5;
    var s = Math.sin(rad);
    var bx = s * axis[0] / axisLength;
    var by = s * axis[1] / axisLength;
    var bz = s * axis[2] / axisLength;
    var bw = Math.cos(rad);
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
    out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    var ax = a[4], ay = a[5], az = a[6], aw = a[7];
    out[4] = ax * bw + aw * bx + ay * bz - az * by;
    out[5] = ay * bw + aw * by + az * bx - ax * bz;
    out[6] = az * bw + aw * bz + ax * by - ay * bx;
    out[7] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    return out;
}
function multiply(out, a, b) {
    var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
    out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
    out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
    out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
    out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
    out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
    out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
    out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
    out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
    return out;
}
var mul = multiply;
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    return out;
}
var dot = _quatJs.dot;
function lerp(out, a, b, t) {
    var mt = 1 - t;
    if (dot(a, b) < 0) t = -t;
    out[0] = a[0] * mt + b[0] * t;
    out[1] = a[1] * mt + b[1] * t;
    out[2] = a[2] * mt + b[2] * t;
    out[3] = a[3] * mt + b[3] * t;
    out[4] = a[4] * mt + b[4] * t;
    out[5] = a[5] * mt + b[5] * t;
    out[6] = a[6] * mt + b[6] * t;
    out[7] = a[7] * mt + b[7] * t;
    return out;
}
function invert(out, a) {
    var sqlen = squaredLength(a);
    out[0] = -a[0] / sqlen;
    out[1] = -a[1] / sqlen;
    out[2] = -a[2] / sqlen;
    out[3] = a[3] / sqlen;
    out[4] = -a[4] / sqlen;
    out[5] = -a[5] / sqlen;
    out[6] = -a[6] / sqlen;
    out[7] = a[7] / sqlen;
    return out;
}
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    out[4] = -a[4];
    out[5] = -a[5];
    out[6] = -a[6];
    out[7] = a[7];
    return out;
}
var length = _quatJs.length;
var len = length;
var squaredLength = _quatJs.squaredLength;
var sqrLen = squaredLength;
function normalize(out, a) {
    var magnitude = squaredLength(a);
    if (magnitude > 0) {
        magnitude = Math.sqrt(magnitude);
        var a0 = a[0] / magnitude;
        var a1 = a[1] / magnitude;
        var a2 = a[2] / magnitude;
        var a3 = a[3] / magnitude;
        var b0 = a[4];
        var b1 = a[5];
        var b2 = a[6];
        var b3 = a[7];
        var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
        out[0] = a0;
        out[1] = a1;
        out[2] = a2;
        out[3] = a3;
        out[4] = (b0 - a0 * a_dot_b) / magnitude;
        out[5] = (b1 - a1 * a_dot_b) / magnitude;
        out[6] = (b2 - a2 * a_dot_b) / magnitude;
        out[7] = (b3 - a3 * a_dot_b) / magnitude;
    }
    return out;
}
function str(a) {
    return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

},{"./common.js":"1olMy","./quat.js":"dBcY3","./mat4.js":"lMFn8","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4q6bS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 2 Dimensional Vector
 * @module vec2
 */ /**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues);
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "copy", ()=>copy);
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "divide", ()=>divide);
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "ceil", ()=>ceil);
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "floor", ()=>floor);
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "min", ()=>min);
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "max", ()=>max);
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "round", ()=>round);
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "scale", ()=>scale);
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "scaleAndAdd", ()=>scaleAndAdd);
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance);
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance);
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length);
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength);
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "negate", ()=>negate);
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse);
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot);
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "cross", ()=>cross);
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp);
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "random", ()=>random);
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat2", ()=>transformMat2);
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat2d", ()=>transformMat2d);
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat3", ()=>transformMat3);
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4);
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */ parcelHelpers.export(exports, "angle", ()=>angle);
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */ parcelHelpers.export(exports, "zero", ()=>zero);
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str);
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "mul", ()=>mul);
parcelHelpers.export(exports, "div", ()=>div);
parcelHelpers.export(exports, "dist", ()=>dist);
parcelHelpers.export(exports, "sqrDist", ()=>sqrDist);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen);
parcelHelpers.export(exports, "forEach", ()=>forEach);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(2);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
    }
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
function fromValues(x, y) {
    var out = new _commonJs.ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
}
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return Math.hypot(x, y);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return x * x + y * y;
}
function length(a) {
    var x = a[0], y = a[1];
    return Math.hypot(x, y);
}
function squaredLength(a) {
    var x = a[0], y = a[1];
    return x * x + y * y;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}
function normalize(out, a) {
    var x = a[0], y = a[1];
    var len = x * x + y * y;
    if (len > 0) //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0], ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}
function random(out, scale) {
    scale = scale || 1.0;
    var r = _commonJs.RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
}
function transformMat2(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}
function transformMat2d(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0];
    var y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}
function rotate(out, a, b, rad) {
    //Translate point to the origin
    var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad); //perform rotation and translate to correct position
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];
    return out;
}
function angle(a, b) {
    var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], // mag is the product of the magnitudes of a and b
    mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), // mag &&.. short circuits if mag == 0
    cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    return out;
}
function str(a) {
    return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1];
    var b0 = b[0], b1 = b[1];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
var len = length;
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 2;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
        }
        return a;
    };
}();

},{"./common.js":"1olMy","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"ajquC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "barcode_format_t", ()=>barcode_format_t);
parcelHelpers.export(exports, "face_landmark_name_t", ()=>face_landmark_name_t);
parcelHelpers.export(exports, "instant_world_tracker_transform_orientation_t", ()=>instant_world_tracker_transform_orientation_t);
parcelHelpers.export(exports, "log_level_t", ()=>log_level_t);
parcelHelpers.export(exports, "frame_pixel_format_t", ()=>frame_pixel_format_t);
parcelHelpers.export(exports, "image_target_type_t", ()=>image_target_type_t);
var barcode_format_t;
(function(barcode_format_t) {
    barcode_format_t[barcode_format_t["UNKNOWN"] = 131072] = "UNKNOWN";
    barcode_format_t[barcode_format_t["AZTEC"] = 1] = "AZTEC";
    barcode_format_t[barcode_format_t["CODABAR"] = 2] = "CODABAR";
    barcode_format_t[barcode_format_t["CODE_39"] = 4] = "CODE_39";
    barcode_format_t[barcode_format_t["CODE_93"] = 8] = "CODE_93";
    barcode_format_t[barcode_format_t["CODE_128"] = 16] = "CODE_128";
    barcode_format_t[barcode_format_t["DATA_MATRIX"] = 32] = "DATA_MATRIX";
    barcode_format_t[barcode_format_t["EAN_8"] = 64] = "EAN_8";
    barcode_format_t[barcode_format_t["EAN_13"] = 128] = "EAN_13";
    barcode_format_t[barcode_format_t["ITF"] = 256] = "ITF";
    barcode_format_t[barcode_format_t["MAXICODE"] = 512] = "MAXICODE";
    barcode_format_t[barcode_format_t["PDF_417"] = 1024] = "PDF_417";
    barcode_format_t[barcode_format_t["QR_CODE"] = 2048] = "QR_CODE";
    barcode_format_t[barcode_format_t["RSS_14"] = 4096] = "RSS_14";
    barcode_format_t[barcode_format_t["RSS_EXPANDED"] = 8192] = "RSS_EXPANDED";
    barcode_format_t[barcode_format_t["UPC_A"] = 16384] = "UPC_A";
    barcode_format_t[barcode_format_t["UPC_E"] = 32768] = "UPC_E";
    barcode_format_t[barcode_format_t["UPC_EAN_EXTENSION"] = 65536] = "UPC_EAN_EXTENSION";
    barcode_format_t[barcode_format_t["ALL"] = 131071] = "ALL";
})(barcode_format_t || (barcode_format_t = {}));
var face_landmark_name_t;
(function(face_landmark_name_t) {
    face_landmark_name_t[face_landmark_name_t["EYE_LEFT"] = 0] = "EYE_LEFT";
    face_landmark_name_t[face_landmark_name_t["EYE_RIGHT"] = 1] = "EYE_RIGHT";
    face_landmark_name_t[face_landmark_name_t["EAR_LEFT"] = 2] = "EAR_LEFT";
    face_landmark_name_t[face_landmark_name_t["EAR_RIGHT"] = 3] = "EAR_RIGHT";
    face_landmark_name_t[face_landmark_name_t["NOSE_BRIDGE"] = 4] = "NOSE_BRIDGE";
    face_landmark_name_t[face_landmark_name_t["NOSE_TIP"] = 5] = "NOSE_TIP";
    face_landmark_name_t[face_landmark_name_t["NOSE_BASE"] = 6] = "NOSE_BASE";
    face_landmark_name_t[face_landmark_name_t["LIP_TOP"] = 7] = "LIP_TOP";
    face_landmark_name_t[face_landmark_name_t["LIP_BOTTOM"] = 8] = "LIP_BOTTOM";
    face_landmark_name_t[face_landmark_name_t["MOUTH_CENTER"] = 9] = "MOUTH_CENTER";
    face_landmark_name_t[face_landmark_name_t["CHIN"] = 10] = "CHIN";
    face_landmark_name_t[face_landmark_name_t["EYEBROW_LEFT"] = 11] = "EYEBROW_LEFT";
    face_landmark_name_t[face_landmark_name_t["EYEBROW_RIGHT"] = 12] = "EYEBROW_RIGHT";
})(face_landmark_name_t || (face_landmark_name_t = {}));
var instant_world_tracker_transform_orientation_t;
(function(instant_world_tracker_transform_orientation_t) {
    instant_world_tracker_transform_orientation_t[instant_world_tracker_transform_orientation_t["WORLD"] = 3] = "WORLD";
    instant_world_tracker_transform_orientation_t[instant_world_tracker_transform_orientation_t["MINUS_Z_AWAY_FROM_USER"] = 4] = "MINUS_Z_AWAY_FROM_USER";
    instant_world_tracker_transform_orientation_t[instant_world_tracker_transform_orientation_t["MINUS_Z_HEADING"] = 5] = "MINUS_Z_HEADING";
    instant_world_tracker_transform_orientation_t[instant_world_tracker_transform_orientation_t["UNCHANGED"] = 6] = "UNCHANGED";
})(instant_world_tracker_transform_orientation_t || (instant_world_tracker_transform_orientation_t = {}));
var log_level_t;
(function(log_level_t) {
    log_level_t[log_level_t["LOG_LEVEL_NONE"] = 0] = "LOG_LEVEL_NONE";
    log_level_t[log_level_t["LOG_LEVEL_ERROR"] = 1] = "LOG_LEVEL_ERROR";
    log_level_t[log_level_t["LOG_LEVEL_WARNING"] = 2] = "LOG_LEVEL_WARNING";
    log_level_t[log_level_t["LOG_LEVEL_VERBOSE"] = 3] = "LOG_LEVEL_VERBOSE";
})(log_level_t || (log_level_t = {}));
var frame_pixel_format_t;
(function(frame_pixel_format_t) {
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_I420"] = 0] = "FRAME_PIXEL_FORMAT_I420";
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_I420A"] = 1] = "FRAME_PIXEL_FORMAT_I420A";
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_I422"] = 2] = "FRAME_PIXEL_FORMAT_I422";
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_I444"] = 3] = "FRAME_PIXEL_FORMAT_I444";
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_NV12"] = 4] = "FRAME_PIXEL_FORMAT_NV12";
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_RGBA"] = 5] = "FRAME_PIXEL_FORMAT_RGBA";
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_BGRA"] = 6] = "FRAME_PIXEL_FORMAT_BGRA";
    frame_pixel_format_t[frame_pixel_format_t["FRAME_PIXEL_FORMAT_Y"] = 7] = "FRAME_PIXEL_FORMAT_Y";
})(frame_pixel_format_t || (frame_pixel_format_t = {}));
var image_target_type_t;
(function(image_target_type_t) {
    image_target_type_t[image_target_type_t["IMAGE_TRACKER_TYPE_PLANAR"] = 0] = "IMAGE_TRACKER_TYPE_PLANAR";
    image_target_type_t[image_target_type_t["IMAGE_TRACKER_TYPE_CYLINDRICAL"] = 1] = "IMAGE_TRACKER_TYPE_CYLINDRICAL";
    image_target_type_t[image_target_type_t["IMAGE_TRACKER_TYPE_CONICAL"] = 2] = "IMAGE_TRACKER_TYPE_CONICAL";
})(image_target_type_t || (image_target_type_t = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"kEg0J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleImageBitmap", ()=>handleImageBitmap);
var _imageProcessGl = require("./image-process-gl");
var _profile = require("./profile");
var _glMatrix = require("gl-matrix");
let pixels;
let texture;
let _imageProcessor;
let _gl;
function getImageProcessor() {
    if (!_imageProcessor || !_gl) {
        const canvas = new OffscreenCanvas(1, 1);
        _gl = canvas.getContext("webgl");
        if (!_gl) throw new Error("Unable to get offscreen GL context");
        _imageProcessor = new (0, _imageProcessGl.ImageProcessGL)(_gl);
    }
    return [
        _imageProcessor,
        _gl
    ];
}
function handleImageBitmap(m, r, server, mgr) {
    // img: ImageBitmap,
    //                                 rot: number,
    //                                 tokenId: number,
    //                                 r: zappar_cwrap,
    //                                 p: zappar_pipeline_t,
    //                                 userFacing: boolean,
    //                                 server: zappar_server,
    //                                 mgr: MsgManager) {
    const [imageProcessor, gl] = getImageProcessor();
    if (!texture) {
        texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
    if (!texture) return;
    if (!pixels || pixels.byteLength < (0, _profile.profile).dataWidth * (0, _profile.profile).dataHeight) {
        console.log("Generating pixel buffer", (0, _profile.profile).dataWidth * (0, _profile.profile).dataHeight);
        pixels = new ArrayBuffer((0, _profile.profile).dataWidth * (0, _profile.profile).dataHeight);
    }
    imageProcessor.uploadFrame(texture, m.i, m.r, m.userFacing);
    let info = imageProcessor.readFrame(texture, pixels);
    let msg = {
        t: "imageBitmapS2C",
        dataWidth: info.dataWidth,
        dataHeight: info.dataHeight,
        frame: m.i,
        userFacing: info.userFacing,
        uvTransform: info.uvTransform || (0, _glMatrix.mat4).create(),
        tokenId: m.tokenId,
        p: m.p
    };
    mgr.postOutgoingMessage(msg, [
        m.i
    ]);
    let pipeline = server._pipeline_by_instance.get(m.p);
    if (pipeline) {
        r.pipeline_camera_frame_submit(pipeline, pixels, info.dataWidth, info.dataHeight, m.tokenId, m.cameraToDevice, m.cameraModel, info.userFacing);
        r.pipeline_frame_update(pipeline);
        server.exploreState();
    }
}

},{"./image-process-gl":"149sq","./profile":"ly8v4","gl-matrix":"28U3r","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"149sq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageProcessGL", ()=>ImageProcessGL);
var _glMatrix = require("gl-matrix");
var _glStateManager = require("./gl-state-manager");
var _profile = require("./profile");
var _shader = require("./shader");
class ImageProcessGL {
    constructor(_gl){
        this._gl = _gl;
        this._isPaused = true;
        this._hadFrames = false;
        this._isUserFacing = false;
        this._cameraToScreenRotation = 0;
        this._isUploadFrame = true;
        this._computedTransformRotation = -1;
        this._computedFrontCameraRotation = false;
        this._cameraUvTransform = (0, _glMatrix.mat4).create();
        this._framebufferWidth = 0;
        this._framebufferHeight = 0;
        this._framebufferId = null;
        this._renderTexture = null;
        this._isWebGL2 = false;
        this._isWebGL2 = _gl.getParameter(_gl.VERSION).indexOf("WebGL 2") >= 0;
        if (!this._isWebGL2) this._instancedArraysExtension = this._gl.getExtension("ANGLE_instanced_arrays");
    }
    resetGLContext() {
        this._framebufferId = null;
        this._renderTexture = null;
        this._vertexBuffer = undefined;
        this._indexBuffer = undefined;
        this._greyscaleShader = undefined;
    }
    destroy() {
        this.resetGLContext();
    }
    uploadFrame(texture, img, rotation, fc) {
        let gl = this._gl;
        const glStateManager = (0, _glStateManager.GLStateManager).get(gl);
        glStateManager.push();
        const reenableScissorTest = gl.isEnabled(gl.SCISSOR_TEST);
        const reenableDepthTest = gl.isEnabled(gl.DEPTH_TEST);
        const reenableBlend = gl.isEnabled(gl.BLEND);
        const reenableCullFace = gl.isEnabled(gl.CULL_FACE);
        const reenableStencilTest = gl.isEnabled(gl.STENCIL_TEST);
        const previousActiveTexture = gl.getParameter(gl.ACTIVE_TEXTURE);
        const previousUnpackFlip = gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL);
        const previousProgram = gl.getParameter(gl.CURRENT_PROGRAM);
        gl.activeTexture(gl.TEXTURE0);
        const previousBoundTexture = gl.getParameter(gl.TEXTURE_BINDING_2D);
        const previousBoundFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
        const previousBoundArrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
        const previousBoundElementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
        gl.disable(gl.SCISSOR_TEST);
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.BLEND);
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.STENCIL_TEST);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        const level = 0;
        const internalFormat = gl.RGBA;
        const srcFormat = gl.RGBA;
        const srcType = gl.UNSIGNED_BYTE;
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, img);
        let videoWidth = 0;
        let videoHeight = 0;
        if (typeof HTMLVideoElement !== "undefined" && img instanceof HTMLVideoElement) {
            videoWidth = img.videoWidth;
            videoHeight = img.videoHeight;
        } else {
            videoWidth = img.width;
            videoHeight = img.height;
        }
        if (videoHeight > videoWidth) videoHeight = [
            videoWidth,
            videoWidth = videoHeight
        ][0];
        this._updateTransforms(rotation, fc);
        let framebuffer = this._getFramebuffer(gl, (0, _profile.profile).dataWidth / 4, (0, _profile.profile).dataHeight);
        let vbo = this._getVertexBuffer(gl);
        let ibo = this._getIndexBuffer(gl);
        let shader = this._getGreyscaleShader(gl);
        const previousVertexAttribSize = gl.getVertexAttrib(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_SIZE);
        const previousVertexAttribType = gl.getVertexAttrib(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_TYPE);
        const previousVertexAttribNormalized = gl.getVertexAttrib(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_NORMALIZED);
        const previousVertexAttribStride = gl.getVertexAttrib(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_STRIDE);
        const previousVertexAttribOffset = gl.getVertexAttribOffset(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_POINTER);
        const previousVertexAttribEnabled = gl.getVertexAttrib(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
        const previousVertexAttribBufferBinding = gl.getVertexAttrib(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING);
        const previousTextureAttribSize = gl.getVertexAttrib(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_SIZE);
        const previousTextureAttribType = gl.getVertexAttrib(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_TYPE);
        const previousTextureAttribNormalized = gl.getVertexAttrib(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_NORMALIZED);
        const previousTextureAttribStride = gl.getVertexAttrib(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_STRIDE);
        const previousTextureAttribOffset = gl.getVertexAttribOffset(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_POINTER);
        const previousTextureAttribBufferBinding = gl.getVertexAttrib(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING);
        const previousTextureAttribEnabled = gl.getVertexAttrib(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_ENABLED);
        let previousVertexAttribDivisor = 0;
        let previousTextureAttribDivisor = 0;
        if (this._isWebGL2) {
            previousVertexAttribDivisor = gl.getVertexAttrib(shader.aVertexPositionLoc, gl.VERTEX_ATTRIB_ARRAY_DIVISOR);
            previousTextureAttribDivisor = gl.getVertexAttrib(shader.aTextureCoordLoc, gl.VERTEX_ATTRIB_ARRAY_DIVISOR);
            gl.vertexAttribDivisor(shader.aVertexPositionLoc, 0);
            gl.vertexAttribDivisor(shader.aTextureCoordLoc, 0);
        } else if (this._instancedArraysExtension) {
            previousVertexAttribDivisor = gl.getVertexAttrib(shader.aVertexPositionLoc, this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE);
            previousTextureAttribDivisor = gl.getVertexAttrib(shader.aTextureCoordLoc, this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE);
            this._instancedArraysExtension.vertexAttribDivisorANGLE(shader.aVertexPositionLoc, 0);
            this._instancedArraysExtension.vertexAttribDivisorANGLE(shader.aTextureCoordLoc, 0);
        }
        // Rendering to the greyscale conversion buffer - bind the framebuffer
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.viewport(0, 0, this._framebufferWidth, this._framebufferHeight);
        // We'll be replacing all the content - clear is a good hint for this on mobile
        gl.clear(gl.COLOR_BUFFER_BIT);
        // Set up bindings for vertex attributes
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.vertexAttribPointer(shader.aVertexPositionLoc, 2, gl.FLOAT, false, 16, 0);
        gl.enableVertexAttribArray(shader.aVertexPositionLoc);
        gl.vertexAttribPointer(shader.aTextureCoordLoc, 2, gl.FLOAT, false, 16, 8);
        gl.enableVertexAttribArray(shader.aTextureCoordLoc);
        // Bind the index buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
        // Tell WebGL to use our program when drawing
        gl.useProgram(shader.program);
        // Specify greyscale width for the correct offsets, and the uv transform
        gl.uniform1f(shader.uTexWidthLoc, (0, _profile.profile).dataWidth);
        gl.uniformMatrix4fv(shader.uUvTransformLoc, false, this._cameraUvTransform);
        gl.activeTexture(gl.TEXTURE0);
        // Bind the texture to texture unit 0
        gl.bindTexture(gl.TEXTURE_2D, texture);
        // Tell the shader we bound the texture to texture unit 0
        gl.uniform1i(shader.uSamplerLoc, 0);
        // Do the drawing...
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, previousVertexAttribBufferBinding);
        gl.vertexAttribPointer(shader.aVertexPositionLoc, previousVertexAttribSize, previousVertexAttribType, previousVertexAttribNormalized, previousVertexAttribStride, previousVertexAttribOffset);
        gl.bindBuffer(gl.ARRAY_BUFFER, previousTextureAttribBufferBinding);
        gl.vertexAttribPointer(shader.aTextureCoordLoc, previousTextureAttribSize, previousTextureAttribType, previousTextureAttribNormalized, previousTextureAttribStride, previousTextureAttribOffset);
        gl.bindBuffer(gl.ARRAY_BUFFER, previousBoundArrayBuffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, previousBoundElementArrayBuffer);
        if (!previousVertexAttribEnabled) gl.disableVertexAttribArray(shader.aVertexPositionLoc);
        if (!previousTextureAttribEnabled) gl.disableVertexAttribArray(shader.aTextureCoordLoc);
        if (this._isWebGL2) {
            gl.vertexAttribDivisor(shader.aVertexPositionLoc, previousVertexAttribDivisor);
            gl.vertexAttribDivisor(shader.aTextureCoordLoc, previousTextureAttribDivisor);
        } else if (this._instancedArraysExtension) {
            this._instancedArraysExtension.vertexAttribDivisorANGLE(shader.aVertexPositionLoc, previousVertexAttribDivisor);
            this._instancedArraysExtension.vertexAttribDivisorANGLE(shader.aTextureCoordLoc, previousTextureAttribDivisor);
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousBoundFramebuffer);
        gl.useProgram(previousProgram);
        gl.bindTexture(gl.TEXTURE_2D, previousBoundTexture);
        gl.activeTexture(previousActiveTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, previousUnpackFlip);
        glStateManager.pop();
        if (reenableBlend) gl.enable(gl.BLEND);
        if (reenableCullFace) gl.enable(gl.CULL_FACE);
        if (reenableDepthTest) gl.enable(gl.DEPTH_TEST);
        if (reenableScissorTest) gl.enable(gl.SCISSOR_TEST);
        if (reenableStencilTest) gl.enable(gl.STENCIL_TEST);
    }
    readFrame(texture, pixels) {
        let gl = this._gl;
        let pixelsView = new Uint8Array(pixels);
        const previousBoundFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
        let framebuffer = this._getFramebuffer(gl, (0, _profile.profile).dataWidth / 4, (0, _profile.profile).dataHeight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.readPixels(0, 0, this._framebufferWidth, this._framebufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixelsView);
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousBoundFramebuffer);
        return {
            uvTransform: this._cameraUvTransform,
            data: pixels,
            texture,
            dataWidth: (0, _profile.profile).dataWidth,
            dataHeight: (0, _profile.profile).dataHeight,
            userFacing: this._computedFrontCameraRotation
        };
    }
    _updateTransforms(rot, fc) {
        if (rot == this._computedTransformRotation && fc == this._computedFrontCameraRotation) return;
        this._computedTransformRotation = rot;
        this._computedFrontCameraRotation = fc;
        this._cameraUvTransform = this._getCameraUvTransform();
    }
    _getCameraUvTransform() {
        switch(this._computedTransformRotation){
            case 270:
                return new Float32Array([
                    0,
                    1,
                    0,
                    0,
                    -1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                    0,
                    0,
                    1
                ]);
            case 180:
                return new Float32Array([
                    -1,
                    0,
                    0,
                    0,
                    0,
                    -1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1
                ]);
            case 90:
                return new Float32Array([
                    0,
                    -1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1
                ]);
        }
        return new Float32Array([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    _getFramebuffer(gl, fbWidth, fbHeight) {
        if (this._framebufferWidth === fbWidth && this._framebufferHeight === fbHeight && this._framebufferId) return this._framebufferId;
        if (this._framebufferId) {
            gl.deleteFramebuffer(this._framebufferId);
            this._framebufferId = null;
        }
        if (this._renderTexture) {
            gl.deleteTexture(this._renderTexture);
            this._renderTexture = null;
        }
        this._framebufferId = gl.createFramebuffer();
        if (!this._framebufferId) throw new Error("Unable to create framebuffer");
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebufferId);
        this._renderTexture = gl.createTexture();
        if (!this._renderTexture) throw new Error("Unable to create render texture");
        gl.activeTexture(gl.TEXTURE0);
        const previousBoundTexture = gl.getParameter(gl.TEXTURE_BINDING_2D);
        gl.bindTexture(gl.TEXTURE_2D, this._renderTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, fbWidth, fbHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._renderTexture, 0);
        let fbStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (fbStatus !== gl.FRAMEBUFFER_COMPLETE) throw new Error("Framebuffer not complete: " + fbStatus.toString());
        this._framebufferWidth = fbWidth;
        this._framebufferHeight = fbHeight;
        gl.bindTexture(gl.TEXTURE_2D, previousBoundTexture);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        return this._framebufferId;
    }
    _getVertexBuffer(gl) {
        if (this._vertexBuffer) return this._vertexBuffer;
        this._vertexBuffer = gl.createBuffer();
        if (!this._vertexBuffer) throw new Error("Unable to create vertex buffer");
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        let buffer = new Float32Array([
            -1,
            -1,
            0.0,
            0.0,
            -1,
            1.0,
            0.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            1.0,
            -1,
            1.0,
            0.0
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
        return this._vertexBuffer;
    }
    _getIndexBuffer(gl) {
        if (this._indexBuffer) return this._indexBuffer;
        this._indexBuffer = gl.createBuffer();
        if (!this._indexBuffer) throw new Error("Unable to create index buffer");
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
        let buffer = new Uint16Array([
            0,
            1,
            2,
            0,
            2,
            3
        ]);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
        return this._indexBuffer;
    }
    _getGreyscaleShader(gl) {
        if (this._greyscaleShader) return this._greyscaleShader;
        let prog = gl.createProgram();
        if (!prog) throw new Error("Unable to create program");
        let vertexShader = (0, _shader.compileShader)(gl, gl.VERTEX_SHADER, greyscaleVsSource);
        let fragmentShader = (0, _shader.compileShader)(gl, gl.FRAGMENT_SHADER, greyscaleFsSource);
        gl.attachShader(prog, vertexShader);
        gl.attachShader(prog, fragmentShader);
        (0, _shader.linkProgram)(gl, prog);
        let uTexWidthLoc = gl.getUniformLocation(prog, "uTexWidth");
        if (!uTexWidthLoc) throw new Error("Unable to get uniform location uTexWidth");
        let uUvTransformLoc = gl.getUniformLocation(prog, "uUvTransform");
        if (!uUvTransformLoc) throw new Error("Unable to get uniform location uUvTransform");
        let uSamplerLoc = gl.getUniformLocation(prog, "uSampler");
        if (!uSamplerLoc) throw new Error("Unable to get uniform location uSampler");
        this._greyscaleShader = {
            program: prog,
            aVertexPositionLoc: gl.getAttribLocation(prog, "aVertexPosition"),
            aTextureCoordLoc: gl.getAttribLocation(prog, "aTextureCoord"),
            uTexWidthLoc: uTexWidthLoc,
            uUvTransformLoc: uUvTransformLoc,
            uSamplerLoc: uSamplerLoc
        };
        return this._greyscaleShader;
    }
}
let greyscaleVsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    varying highp vec2 vTextureCoord1;
    varying highp vec2 vTextureCoord2;
    varying highp vec2 vTextureCoord3;
    varying highp vec2 vTextureCoord4;

    uniform float uTexWidth;
	uniform mat4 uUvTransform;

    void main(void) {
      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);
      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);

      gl_Position = aVertexPosition;
      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;
      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;
      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;
      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;
    }
`;
// Fragment shader program
let greyscaleFsSource = `
  varying highp vec2 vTextureCoord1;
  varying highp vec2 vTextureCoord2;
  varying highp vec2 vTextureCoord3;
  varying highp vec2 vTextureCoord4;

  uniform sampler2D uSampler;

  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);

  void main(void) {
    lowp vec4 outpx;

    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);
    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);
    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);
    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);

    gl_FragColor = outpx;
  }
`;

},{"gl-matrix":"28U3r","./gl-state-manager":"6ss3E","./profile":"ly8v4","./shader":"4YrVe","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"6ss3E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLStateManager", ()=>GLStateManager);
const managers = new Map();
class GLStateManager {
    constructor(_gl){
        this._gl = _gl;
        this._viewports = [];
        this._underlyingViewport = this._gl.viewport;
        this._viewports.push(this._gl.getParameter(this._gl.VIEWPORT));
        this._gl.viewport = (x, y, width, height)=>{
            this._viewports[this._viewports.length - 1] = [
                x,
                y,
                width,
                height
            ];
            this._underlyingViewport.call(this._gl, x, y, width, height);
        };
    }
    static get(gl) {
        let existing = managers.get(gl);
        if (!existing) {
            existing = new GLStateManager(gl);
            managers.set(gl, existing);
        }
        return existing;
    }
    push() {
        this._viewports.push(this._viewports[this._viewports.length - 1]);
    }
    pop() {
        const current = this._viewports.pop();
        const prev = this._viewports[this._viewports.length - 1];
        if (!current || current[0] !== prev[0] || current[1] !== prev[1] || current[2] !== prev[2] || current[3] !== prev[3]) this._underlyingViewport.call(this._gl, prev[0], prev[1], prev[2], prev[3]);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"ly8v4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmbeddedVideoImplementation", ()=>EmbeddedVideoImplementation);
parcelHelpers.export(exports, "profile", ()=>profile);
var _uaParserJs = require("ua-parser-js");
var EmbeddedVideoImplementation;
(function(EmbeddedVideoImplementation) {
    EmbeddedVideoImplementation[EmbeddedVideoImplementation["OBJECT_URL"] = 0] = "OBJECT_URL";
    EmbeddedVideoImplementation[EmbeddedVideoImplementation["SRC_OBJECT"] = 1] = "SRC_OBJECT";
})(EmbeddedVideoImplementation || (EmbeddedVideoImplementation = {}));
let profile = {
    deviceMotionMutliplier: -1,
    blacklisted: false,
    showGyroPermissionsWarningIfNecessary: false,
    showSafariPermissionsResetIfNecessary: false,
    requestHighFrameRate: false,
    videoWidth: 640,
    videoHeight: 480,
    dataWidth: 320,
    dataHeight: 240,
    videoElementInDOM: false,
    preferMediaStreamTrackProcessorCamera: false,
    preferImageBitmapCamera: false,
    ios164CameraSelection: false
};
if (typeof window !== "undefined") {
    window["zeeProfile"] = profile;
    if (window.location.href.indexOf("_mstppipeline") >= 0) {
        console.log("Configuring for MSTP camera pipeline (if supported)");
        profile.preferMediaStreamTrackProcessorCamera = true;
    }
    if (window.location.href.indexOf("_imagebitmappipeline") >= 0) {
        console.log("Configuring for ImageBitmap camera pipeline (if supported)");
        profile.preferImageBitmapCamera = true;
    }
}
let agent = new _uaParserJs.UAParser();
let os = (agent.getOS().name || "unknown").toLowerCase();
let engine = (agent.getEngine().name || "unknown").toLowerCase();
if (engine === "webkit" && os !== "ios") {
    profile.deviceMotionMutliplier = 1.0;
    if (typeof window !== "undefined" && window.orientation !== undefined) // iPad
    iDevice("15.0");
}
if (engine === "webkit" && os === "ios") {
    profile.deviceMotionMutliplier = 1.0;
    const version = agent.getOS().version || "15.0";
    iDevice(version);
}
function iDevice(version) {
    let versionParts = version.split(".");
    if (versionParts.length >= 2) {
        const majorVersion = parseInt(versionParts[0]);
        const minorVersion = parseInt(versionParts[1]);
        if (majorVersion < 11 || majorVersion === 11 && minorVersion < 3) profile.blacklisted = true;
        if (majorVersion < 12 || majorVersion === 12 && minorVersion < 2) profile.videoElementInDOM = true;
        if (majorVersion === 12 && minorVersion >= 2 || majorVersion >= 13) profile.showGyroPermissionsWarningIfNecessary = true;
        if (majorVersion >= 13) profile.showSafariPermissionsResetIfNecessary = true;
        if ((majorVersion >= 12 && minorVersion > 1 || majorVersion >= 13) && navigator.mediaDevices && navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().frameRate) {
            profile.requestHighFrameRate = true;
            if (majorVersion < 14) {
                // Avoid bug where iOS letterboxes 16:9 into 4:3 for high fps
                // Doesn't seem needed with newer versions of iOS, tested on 14.8.1 and 15.2
                profile.videoHeight = 360;
                profile.dataHeight = 180;
            }
        }
        if (majorVersion === 16 && minorVersion >= 4 || majorVersion > 16) profile.ios164CameraSelection = true;
    }
}

},{"ua-parser-js":"g7uPQ","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"g7uPQ":[function(require,module,exports) {
/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.33
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */ /*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */ /////////////////////////////////////////////////////////////////////////////////
(function(window1, undefined) {
    "use strict";
    //////////////
    // Constants
    /////////////
    var LIBVERSION = "1.0.33", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 350;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook";
    ///////////
    // Helper
    //////////
    var extend = function(regexes, extensions) {
        var mergedRegexes = {};
        for(var i in regexes)if (extensions[i] && extensions[i].length % 2 === 0) mergedRegexes[i] = extensions[i].concat(regexes[i]);
        else mergedRegexes[i] = regexes[i];
        return mergedRegexes;
    }, enumerize = function(arr) {
        var enums = {};
        for(var i = 0; i < arr.length; i++)enums[arr[i].toUpperCase()] = arr[i];
        return enums;
    }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
        return str.toLowerCase();
    }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined;
    }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };
    ///////////////
    // Map helper
    //////////////
    var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        // loop through all regexes maps
        while(i < arrays.length && !matches){
            var regex = arrays[i], props = arrays[i + 1]; // odd sequence (1,3,5,..)
            j = k = 0;
            // try matching uastring with regexes
            while(j < regex.length && !matches){
                matches = regex[j++].exec(ua);
                if (!!matches) for(p = 0; p < props.length; p++){
                    match = matches[++k];
                    q = props[p];
                    // check if given property is actually array
                    if (typeof q === OBJ_TYPE && q.length > 0) {
                        if (q.length === 2) {
                            if (typeof q[1] == FUNC_TYPE) // assign modified match
                            this[q[0]] = q[1].call(this, match);
                            else // assign given value, ignore regex match
                            this[q[0]] = q[1];
                        } else if (q.length === 3) {
                            // check whether function or regex
                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) // call function (usually string mapper)
                            this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                            else // sanitize match using given regex
                            this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                        } else if (q.length === 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                    } else this[q] = match ? match : undefined;
                }
            }
            i += 2;
        }
    }, strMapper = function(str, map) {
        for(var i in map){
            // check if current value is array
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) for(var j = 0; j < map[i].length; j++){
                if (has(map[i][j], str)) return i === UNKNOWN ? undefined : i;
            }
            else if (has(map[i], str)) return i === UNKNOWN ? undefined : i;
        }
        return str;
    };
    ///////////////
    // String map
    //////////////
    // Safari < 3.0
    var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
    }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": [
            "NT 5.1",
            "NT 5.2"
        ],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": [
            "NT 6.4",
            "NT 10.0"
        ],
        "RT": "ARM"
    };
    //////////////
    // Regex map
    /////////////
    var regexes = {
        browser: [
            [
                /\b(?:crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "Chrome"
                ]
            ],
            [
                /edg(?:e|ios|a)?\/([\w\.]+)/i // Microsoft Edge
            ],
            [
                VERSION,
                [
                    NAME,
                    "Edge"
                ]
            ],
            [
                // Presto based
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i // Opera
            ],
            [
                NAME,
                VERSION
            ],
            [
                /opios[\/ ]+([\w\.]+)/i // Opera mini on iphone >= 8.0
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Mini"
                ]
            ],
            [
                /\bopr\/([\w\.]+)/i // Opera Webkit
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA
                ]
            ],
            [
                // Mixed
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                // Trident based
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
                /(weibo)__([\d\.]+)/i // Weibo
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i // UCBrowser
            ],
            [
                VERSION,
                [
                    NAME,
                    "UC" + BROWSER
                ]
            ],
            [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat(Win) Desktop"
                ]
            ],
            [
                /micromessenger\/([\w\.]+)/i // WeChat
            ],
            [
                VERSION,
                [
                    NAME,
                    "WeChat"
                ]
            ],
            [
                /konqueror\/([\w\.]+)/i // Konqueror
            ],
            [
                VERSION,
                [
                    NAME,
                    "Konqueror"
                ]
            ],
            [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i // IE11
            ],
            [
                VERSION,
                [
                    NAME,
                    "IE"
                ]
            ],
            [
                /yabrowser\/([\w\.]+)/i // Yandex
            ],
            [
                VERSION,
                [
                    NAME,
                    "Yandex"
                ]
            ],
            [
                /(avast|avg)\/([\w\.]+)/i // Avast/AVG Secure Browser
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 Secure " + BROWSER
                ],
                VERSION
            ],
            [
                /\bfocus\/([\w\.]+)/i // Firefox Focus
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Focus"
                ]
            ],
            [
                /\bopt\/([\w\.]+)/i // Opera Touch
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Touch"
                ]
            ],
            [
                /coc_coc\w+\/([\w\.]+)/i // Coc Coc Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Coc Coc"
                ]
            ],
            [
                /dolfin\/([\w\.]+)/i // Dolphin
            ],
            [
                VERSION,
                [
                    NAME,
                    "Dolphin"
                ]
            ],
            [
                /coast\/([\w\.]+)/i // Opera Coast
            ],
            [
                VERSION,
                [
                    NAME,
                    OPERA + " Coast"
                ]
            ],
            [
                /miuibrowser\/([\w\.]+)/i // MIUI Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "MIUI " + BROWSER
                ]
            ],
            [
                /fxios\/([-\w\.]+)/i // Firefox for iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX
                ]
            ],
            [
                /\bqihu|(qi?ho?o?|360)browser/i // 360
            ],
            [
                [
                    NAME,
                    "360 " + BROWSER
                ]
            ],
            [
                /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ],
            [
                [
                    NAME,
                    /(.+)/,
                    "$1 " + BROWSER
                ],
                VERSION
            ],
            [
                /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
            ],
            [
                [
                    NAME,
                    /_/g,
                    " "
                ],
                VERSION
            ],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i // QQBrowser/Baidu App/2345 Browser
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i // LinkedIn App for iOS & Android
            ],
            [
                NAME
            ],
            [
                // WebView
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i // Facebook App for iOS & Android
            ],
            [
                [
                    NAME,
                    FACEBOOK
                ],
                VERSION
            ],
            [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i // Chromium/Instagram
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\bgsa\/([\w\.]+) .*safari\//i // Google Search Appliance on iOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "GSA"
                ]
            ],
            [
                /headlesschrome(?:\/([\w\.]+)| )/i // Chrome Headless
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + " Headless"
                ]
            ],
            [
                / wv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
            ],
            [
                [
                    NAME,
                    CHROME + " WebView"
                ],
                VERSION
            ],
            [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i // Android Browser
            ],
            [
                VERSION,
                [
                    NAME,
                    "Android " + BROWSER
                ]
            ],
            [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i // Chrome/OmniWeb/Arora/Tizen/Nokia
            ],
            [
                NAME,
                VERSION
            ],
            [
                /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i // Mobile Safari
            ],
            [
                VERSION,
                [
                    NAME,
                    "Mobile Safari"
                ]
            ],
            [
                /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i // Safari & Safari Mobile
            ],
            [
                VERSION,
                NAME
            ],
            [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    oldSafariMap
                ]
            ],
            [
                /(webkit|khtml)\/([\w\.]+)/i
            ],
            [
                NAME,
                VERSION
            ],
            [
                // Gecko based
                /(navigator|netscape\d?)\/([-\w\.]+)/i // Netscape
            ],
            [
                [
                    NAME,
                    "Netscape"
                ],
                VERSION
            ],
            [
                /mobile vr; rv:([\w\.]+)\).+firefox/i // Firefox Reality
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " Reality"
                ]
            ],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                // Other
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
                /(links) \(([\w\.]+)/i // Links
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(cobalt)\/([\w\.]+)/i // Cobalt
            ],
            [
                NAME,
                [
                    VERSION,
                    /master.|lts./,
                    ""
                ]
            ]
        ],
        cpu: [
            [
                /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i // AMD64 (x64)
            ],
            [
                [
                    ARCHITECTURE,
                    "amd64"
                ]
            ],
            [
                /(ia32(?=;))/i // IA32 (quicktime)
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ],
            [
                /((?:i[346]|x)86)[;\)]/i // IA32 (x86)
            ],
            [
                [
                    ARCHITECTURE,
                    "ia32"
                ]
            ],
            [
                /\b(aarch64|arm(v?8e?l?|_?64))\b/i // ARM64
            ],
            [
                [
                    ARCHITECTURE,
                    "arm64"
                ]
            ],
            [
                /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i // ARMHF
            ],
            [
                [
                    ARCHITECTURE,
                    "armhf"
                ]
            ],
            [
                // PocketPC mistakenly identified as PowerPC
                /windows (ce|mobile); ppc;/i
            ],
            [
                [
                    ARCHITECTURE,
                    "arm"
                ]
            ],
            [
                /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i // PowerPC
            ],
            [
                [
                    ARCHITECTURE,
                    /ower/,
                    EMPTY,
                    lowerize
                ]
            ],
            [
                /(sun4\w)[;\)]/i // SPARC
            ],
            [
                [
                    ARCHITECTURE,
                    "sparc"
                ]
            ],
            [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [
                [
                    ARCHITECTURE,
                    lowerize
                ]
            ]
        ],
        device: [
            [
                //////////////////////////
                // MOBILES & TABLETS
                // Ordered by popularity
                /////////////////////////
                // Samsung
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Apple
                /\((ip(?:hone|od)[\w ]*);/i // iPod/iPhone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(macintosh);/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    APPLE
                ]
            ],
            [
                // Huawei
                /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    HUAWEI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Xiaomi
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i // Mi Pad tablets
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OPPO
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OPPO"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Vivo
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Vivo"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Realme
                /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Realme"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Motorola
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MOTOROLA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // LG
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Lenovo
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Lenovo"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Nokia
                /(?:maemo|nokia).*(n900|lumia \d+)/i,
                /nokia[-_ ]?([-\w\.]*)/i
            ],
            [
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    VENDOR,
                    "Nokia"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Google
                /(pixel c)\b/i // Google Pixel C
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i // Google Pixel
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sony
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [
                [
                    MODEL,
                    "Xperia Tablet"
                ],
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // OnePlus
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "OnePlus"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Amazon
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i // Kindle Fire HD
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i // Fire Phone
            ],
            [
                [
                    MODEL,
                    /(.+)/g,
                    "Fire Phone $1"
                ],
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // BlackBerry
                /(playbook);[-\w\),; ]+(rim)/i // BlackBerry PlayBook
            ],
            [
                MODEL,
                VENDOR,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i // BlackBerry 10
            ],
            [
                MODEL,
                [
                    VENDOR,
                    BLACKBERRY
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Asus
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ASUS
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // HTC
                /(nexus 9)/i // HTC Nexus 9
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "HTC"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                // ZTE
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ],
            [
                VENDOR,
                [
                    MODEL,
                    /_/g,
                    " "
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Acer
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Acer"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                // Meizu
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Meizu"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // Sharp
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                // MIXED
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i // OPPO
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i // Vodafone
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(surface duo)/i // Surface Duo
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i // Fairphone
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Fairphone"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(u304aa)/i // AT&T
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "AT&T"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\bsie-(\w*)/i // Siemens
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Siemens"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(rct\w+) b/i // RCA Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "RCA"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(venue[\d ]{2,7}) b/i // Dell Venue Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Dell"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(q(?:mv|ta)\w+) b/i // Verizon Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Verizon"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i // Barnes & Noble Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Barnes & Noble"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(tm\d{3}\w+) b/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NuVision"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(k88) b/i // ZTE K Series Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(nx\d{3}j) b/i // ZTE Nubia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "ZTE"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(gen\d{3}) b.+49h/i // Swiss GEN Mobile
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(zur\d{3}) b/i // Swiss ZUR Tablet
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Swiss"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((zeki)?tb.*\b) b/i // Zeki Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Zeki"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i // Dragon Touch Tablet
            ],
            [
                [
                    VENDOR,
                    "Dragon Touch"
                ],
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(ns-?\w{0,9}) b/i // Insignia Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Insignia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((nxa|next)-?\w{0,9}) b/i // NextBook Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "NextBook"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i // Voice Xtreme Phones
            ],
            [
                [
                    VENDOR,
                    "Voice"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(lvtel\-)?(v1[12]) b/i // LvTel Phones
            ],
            [
                [
                    VENDOR,
                    "LvTel"
                ],
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(ph-1) /i // Essential PH-1
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Essential"
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /\b(v(100md|700na|7011|917g).*\b) b/i // Envizen Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Envizen"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b(trio[-\w\. ]+) b/i // MachSpeed Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "MachSpeed"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\btu_(1491) b/i // Rotor Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Rotor"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(shield[\w ]+) b/i // Nvidia Shield Tablets
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(sprint) (\w+)/i // Sprint Phones
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(kin\.[onetw]{3})/i // Microsoft Kin
            ],
            [
                [
                    MODEL,
                    /\./g,
                    " "
                ],
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i // Zebra
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                ///////////////////
                // CONSOLES
                ///////////////////
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i // Nintendo
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /droid.+; (shield) bui/i // Nvidia
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Nvidia"
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /(playstation [345portablevi]+)/i // Playstation
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i // Microsoft Xbox
            ],
            [
                MODEL,
                [
                    VENDOR,
                    MICROSOFT
                ],
                [
                    TYPE,
                    CONSOLE
                ]
            ],
            [
                ///////////////////
                // SMARTTVS
                ///////////////////
                /smart-tv.+(samsung)/i // Samsung
            ],
            [
                VENDOR,
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /hbbtv.+maple;(\d+)/i
            ],
            [
                [
                    MODEL,
                    /^/,
                    "SmartTV"
                ],
                [
                    VENDOR,
                    SAMSUNG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i // LG SmartTV
            ],
            [
                [
                    VENDOR,
                    LG
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(apple) ?tv/i // Apple TV
            ],
            [
                VENDOR,
                [
                    MODEL,
                    APPLE + " TV"
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /crkey/i // Google Chromecast
            ],
            [
                [
                    MODEL,
                    CHROME + "cast"
                ],
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /droid.+aft(\w)( bui|\))/i // Fire TV
            ],
            [
                MODEL,
                [
                    VENDOR,
                    AMAZON
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\(dtv[\);].+(aquos)/i,
                /(aquos-tv[\w ]+)\)/i // Sharp
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SHARP
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(bravia[\w ]+)( bui|\))/i // Sony
            ],
            [
                MODEL,
                [
                    VENDOR,
                    SONY
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /(mitv-\w{5}) bui/i // Xiaomi
            ],
            [
                MODEL,
                [
                    VENDOR,
                    XIAOMI
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i // HbbTV devices
            ],
            [
                [
                    VENDOR,
                    trim
                ],
                [
                    MODEL,
                    trim
                ],
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i // SmartTV from Unidentified Vendors
            ],
            [
                [
                    TYPE,
                    SMARTTV
                ]
            ],
            [
                ///////////////////
                // WEARABLES
                ///////////////////
                /((pebble))app/i // Pebble
            ],
            [
                VENDOR,
                MODEL,
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (glass) \d/i // Google Glass
            ],
            [
                MODEL,
                [
                    VENDOR,
                    GOOGLE
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /droid.+; (wt63?0{2,3})\)/i
            ],
            [
                MODEL,
                [
                    VENDOR,
                    ZEBRA
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                /(quest( 2)?)/i // Oculus Quest
            ],
            [
                MODEL,
                [
                    VENDOR,
                    FACEBOOK
                ],
                [
                    TYPE,
                    WEARABLE
                ]
            ],
            [
                ///////////////////
                // EMBEDDED
                ///////////////////
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i // Tesla
            ],
            [
                VENDOR,
                [
                    TYPE,
                    EMBEDDED
                ]
            ],
            [
                ////////////////////
                // MIXED (GENERIC)
                ///////////////////
                /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i // Android Phones from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i // Android Tablets from Unidentified Vendors
            ],
            [
                MODEL,
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i // Unidentifiable Tablet
            ],
            [
                [
                    TYPE,
                    TABLET
                ]
            ],
            [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i // Unidentifiable Mobile
            ],
            [
                [
                    TYPE,
                    MOBILE
                ]
            ],
            [
                /(android[-\w\. ]{0,9});.+buil/i // Generic Android Device
            ],
            [
                MODEL,
                [
                    VENDOR,
                    "Generic"
                ]
            ]
        ],
        engine: [
            [
                /windows.+ edge\/([\w\.]+)/i // EdgeHTML
            ],
            [
                VERSION,
                [
                    NAME,
                    EDGE + "HTML"
                ]
            ],
            [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i // Blink
            ],
            [
                VERSION,
                [
                    NAME,
                    "Blink"
                ]
            ],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i // iCab
            ],
            [
                NAME,
                VERSION
            ],
            [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i // Gecko
            ],
            [
                VERSION,
                NAME
            ]
        ],
        os: [
            [
                // Windows
                /microsoft (windows) (vista|xp)/i // Windows (iTunes)
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ],
            [
                NAME,
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [
                [
                    NAME,
                    "Windows"
                ],
                [
                    VERSION,
                    strMapper,
                    windowsVersionMap
                ]
            ],
            [
                // iOS/macOS
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i
            ],
            [
                [
                    VERSION,
                    /_/g,
                    "."
                ],
                [
                    NAME,
                    "iOS"
                ]
            ],
            [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i // Mac OS
            ],
            [
                [
                    NAME,
                    "Mac OS"
                ],
                [
                    VERSION,
                    /_/g,
                    "."
                ]
            ],
            [
                // Mobile OSes
                /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i // Android-x86/HarmonyOS
            ],
            [
                VERSION,
                NAME
            ],
            [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i // Series 40
            ],
            [
                NAME,
                VERSION
            ],
            [
                /\(bb(10);/i // BlackBerry 10
            ],
            [
                VERSION,
                [
                    NAME,
                    BLACKBERRY
                ]
            ],
            [
                /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i // Symbian
            ],
            [
                VERSION,
                [
                    NAME,
                    "Symbian"
                ]
            ],
            [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ],
            [
                VERSION,
                [
                    NAME,
                    FIREFOX + " OS"
                ]
            ],
            [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i // WebOS
            ],
            [
                VERSION,
                [
                    NAME,
                    "webOS"
                ]
            ],
            [
                // Google Chromecast
                /crkey\/([\d\.]+)/i // Google Chromecast
            ],
            [
                VERSION,
                [
                    NAME,
                    CHROME + "cast"
                ]
            ],
            [
                /(cros) [\w]+ ([\w\.]+\w)/i // Chromium OS
            ],
            [
                [
                    NAME,
                    "Chromium OS"
                ],
                VERSION
            ],
            [
                // Console
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                // Other
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i // Haiku
            ],
            [
                NAME,
                VERSION
            ],
            [
                /(sunos) ?([\w\.\d]*)/i // Solaris
            ],
            [
                [
                    NAME,
                    "Solaris"
                ],
                VERSION
            ],
            [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i // UNIX
            ],
            [
                NAME,
                VERSION
            ]
        ]
    };
    /////////////////
    // Constructor
    ////////////////
    var UAParser = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }
        if (!(this instanceof UAParser)) return new UAParser(ua, extensions).getResult();
        var _ua = ua || (typeof window1 !== UNDEF_TYPE && window1.navigator && window1.navigator.userAgent ? window1.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function() {
            return _ua;
        };
        this.setUA = function(ua) {
            _ua = typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = enumerize([
        NAME,
        VERSION,
        MAJOR
    ]);
    UAParser.CPU = enumerize([
        ARCHITECTURE
    ]);
    UAParser.DEVICE = enumerize([
        MODEL,
        VENDOR,
        TYPE,
        CONSOLE,
        MOBILE,
        SMARTTV,
        TABLET,
        WEARABLE,
        EMBEDDED
    ]);
    UAParser.ENGINE = UAParser.OS = enumerize([
        NAME,
        VERSION
    ]);
    ///////////
    // Export
    //////////
    // check js environment
    if (typeof exports !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) exports = module.exports = UAParser;
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof define === FUNC_TYPE && define.amd) define(function() {
            return UAParser;
        });
        else if (typeof window1 !== UNDEF_TYPE) // browser env
        window1.UAParser = UAParser;
    }
    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window1 !== UNDEF_TYPE && (window1.jQuery || window1.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function() {
            return parser.getUA();
        };
        $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for(var prop in result)$.ua[prop] = result[prop];
        };
    }
})(typeof window === "object" ? window : this);

},{}],"4YrVe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compileShader", ()=>compileShader);
parcelHelpers.export(exports, "linkProgram", ()=>linkProgram);
function compileShader(gl, type, src) {
    let ret = gl.createShader(type);
    if (!ret) throw new Error("Unable to create shader");
    gl.shaderSource(ret, src);
    gl.compileShader(ret);
    let msg = gl.getShaderInfoLog(ret);
    if (msg && msg.trim().length > 0) throw new Error("Shader compile error: " + msg);
    return ret;
}
function linkProgram(gl, prog) {
    gl.linkProgram(prog);
    let msg = gl.getProgramInfoLog(prog);
    if (msg && msg.trim().length > 0) throw new Error("Unable to link: " + msg);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"1YY4N":[function(require,module,exports) {
module.exports = require("bd82c5d0002f712f").getBundleURL("cTb27") + "zappar-cv.c9f72874.wasm" + "?" + Date.now();

},{"bd82c5d0002f712f":"acFkO"}],"acFkO":[function(require,module,exports) {
"use strict";
var bundleURL = {};
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
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["lA1v7","evoMS"], "evoMS", "parcelRequire3a24")

//# sourceMappingURL=worker.28e6c374.js.map
