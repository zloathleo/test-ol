/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"index": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"3":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor-index-vue","vendor-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Loading = __webpack_require__(/*! ./components/framework/Loading.vue */ \"./src/components/framework/Loading.vue\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  components: { Loading: _Loading2.default },\n\n  beforeMount: function beforeMount() {}\n}; //\n//\n//\n//\n//\n//\n//\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Loading.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n    data: function data() {\n        return {\n            conf: {\n                animationTime: 40, //动画速度\n                apiMaxTime: 6000, //api调用时长限制\n                apiEndAnimationTime: 500 //api调用完成后动画时长\n            },\n            isAppLoading: false, //是否loading状态 \n            loadingPercent: 0,\n            _isApiEnd: false, //api调用是否完成,通讯完成后，进度条直接推进到底\n            _apiEndStep: 0 //通讯完成后，进度条步伐长度\n        };\n    },\n    beforeMount: function beforeMount() {\n        var _this = this;\n        this.$globalEventHub.$on(\"appLoading\", function (value) {\n            console.log(\"appLoading:\", value);\n            if (value === true) {\n                _this.reset();\n                _this.isAppLoading = true;\n\n                clearInterval(this._intervalCallback);\n                _this._intervalCallback = setInterval(_this.refreshBar, _this.conf.animationTime);\n            } else {\n                _this._isApiEnd = true;\n                _this._apiEndStep = (100 - _this.loadingPercent) / (_this.conf.apiEndAnimationTime / _this.conf.animationTime);\n                setTimeout(_this.endApiAnimation, _this.conf.apiEndAnimationTime);\n            }\n        });\n    },\n\n\n    methods: {\n        reset: function reset() {\n            this.loadingPercent = 0;\n            this._isApiEnd = false;\n            this._apiEndStep = 0;\n        },\n        endApiAnimation: function endApiAnimation() {\n            clearInterval(this._intervalCallback);\n            this.isAppLoading = false;\n            this.loadingPercent = 0;\n\n            this._isApiEnd = false;\n            this._apiEndStep = 0;\n        },\n        refreshBar: function refreshBar() {\n            //一共80 6s  300次 一定结束   \n            if (this.isAppLoading === true && this.loadingPercent < 100) {\n                if (this._isApiEnd) {\n                    //api调用完成动画\n                    this.loadingPercent = this.loadingPercent + this._apiEndStep;\n                } else {\n                    //普通API调用动画\n                    var _p = 100 / (this.conf.apiMaxTime / this.conf.animationTime);\n                    this.loadingPercent = this.loadingPercent + _p;\n                }\n            }\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.pregressbar[data-v-c9c90f04] {\\n  height: 0.2rem;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=04c2046b":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=04c2046b ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { height: \"100%\", \"background-color\": \"#fafafa\" } },\n    [_c(\"Loading\"), _vm._v(\" \"), _c(\"router-view\")],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=template&id=c9c90f04&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Loading.vue?vue&type=template&id=c9c90f04&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"w3-overlay\",\n      class: { \"w3-show\": _vm.isAppLoading },\n      staticStyle: { \"z-index\": \"5\" }\n    },\n    [\n      _c(\"div\", {\n        staticClass: \"w3-progressbar w3-blue pregressbar\",\n        style: { width: _vm.loadingPercent + \"%\" }\n      })\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_04c2046b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=04c2046b */ \"./src/App.vue?vue&type=template&id=04c2046b\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_04c2046b__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_04c2046b__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--1!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=04c2046b":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=04c2046b ***!
  \***************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_04c2046b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=04c2046b */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=04c2046b\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_04c2046b__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_04c2046b__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/css/font-awesome.min.css":
/*!*********************************************!*\
  !*** ./src/assets/css/font-awesome.min.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/font-awesome.min.css?");

/***/ }),

/***/ "./src/assets/css/global.css":
/*!***********************************!*\
  !*** ./src/assets/css/global.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/global.css?");

/***/ }),

/***/ "./src/assets/css/w3.css":
/*!*******************************!*\
  !*** ./src/assets/css/w3.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/w3.css?");

/***/ }),

/***/ "./src/common/globalvar.js":
/*!*********************************!*\
  !*** ./src/common/globalvar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    appName: \"后台管理\",\n    GlobalEventHub: undefined,\n\n    // fetchServerHostURL: \"\",\n    fetchServerHostURL: \"http://116.62.150.38:8080/ggmanager/\",\n\n    adminMenuItems: [{\n        key: \"group\",\n        display: \"分组管理\",\n        icon: \"account-group\",\n        desc: \"\"\n    }, {\n        key: \"account\",\n        display: \"用户管理\",\n        icon: \"account\",\n        desc: \"\"\n    }],\n\n    operatorMenuItems: [{\n        key: \"device\",\n        display: \"Device\",\n        icon: \"account-group\",\n        desc: \"\"\n    }, {\n        key: \"page\",\n        display: \"Page\",\n        icon: \"account\",\n        desc: \"\"\n    }, {\n        key: \"resource\",\n        display: \"Resource\",\n        icon: \"account\",\n        desc: \"\"\n    }, {\n        key: \"qr\",\n        display: \"Qr\",\n        icon: \"account\",\n        desc: \"\"\n    }, {\n        key: \"message\",\n        display: \"Message\",\n        icon: \"account\",\n        desc: \"\"\n    }, {\n        key: \"live\",\n        display: \"Live\",\n        icon: \"account\",\n        desc: \"\"\n    }, {\n        key: \"publish\",\n        display: \"Publish\",\n        icon: \"account\",\n        desc: \"\"\n    }],\n\n    parseDateTime: function parseDateTime(_long) {\n        if (_long) {\n            return new Date(_long).Format(\"yyyy-MM-dd HH:mm:ss\");\n        } else {\n            return \"-\";\n        }\n    },\n\n    parseMsgState: function parseMsgState(_state) {\n        if (_state === 1) {\n            return \"正在播放\";\n        } else if (_state === -1) {\n            return \"已播放\";\n        } else {\n            return \"准备播放\";\n        }\n    },\n\n    toastSuccess: function toastSuccess(_vue, _message) {\n        // _vue.$toast.open({\n        //     queue: false,\n        //     message: _message,\n        //     position: 'is-bottom',\n        //     type: 'is-success'\n        // });\n        console.info(_message);\n    },\n\n    toastError: function toastError(_vue, errdesc, error) {\n        var _message = errdesc;\n        if (error !== undefined) {\n            console.error(error);\n            _message += \" - \" + this.parseError(error);\n        }\n        console.error(_message);\n        // _vue.$toast.open({\n        //     queue: false,\n        //     message: _message,\n        //     position: 'is-bottom',\n        //     type: 'is-danger'\n        // });\n    },\n\n    parseError: function parseError(error) {\n        if (error && error.response && error.response.data) {\n            return error.response.data.message;\n        } else {\n            return error;\n        }\n    }\n\n};\n\n//# sourceURL=webpack:///./src/common/globalvar.js?");

/***/ }),

/***/ "./src/common/initjs.js":
/*!******************************!*\
  !*** ./src/common/initjs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//prototype\nDate.prototype.Format = function (formatStr) {\n    var str = formatStr;\n    var Week = ['日', '一', '二', '三', '四', '五', '六'];\n\n    console.log();\n\n    str = str.replace(/yyyy|YYYY/, this.getFullYear());\n    str = str.replace(/yy|YY/, this.getYear() % 100 > 9 ? (this.getYear() % 100).toString() : '0' + this.getYear() % 100);\n\n    str = str.replace(/MM/, this.getMonth() > 8 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));\n    str = str.replace(/M/g, this.getMonth() + 1);\n\n    str = str.replace(/w|W/g, Week[this.getDay()]);\n\n    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());\n    str = str.replace(/d|D/g, this.getDate());\n\n    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());\n    str = str.replace(/h|H/g, this.getHours());\n    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());\n    str = str.replace(/m/g, this.getMinutes());\n\n    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());\n    str = str.replace(/s|S/g, this.getSeconds());\n\n    return str;\n};\n\n//# sourceURL=webpack:///./src/common/initjs.js?");

/***/ }),

/***/ "./src/common/mock.js":
/*!****************************!*\
  !*** ./src/common/mock.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _axiosMockAdapter = __webpack_require__(/*! axios-mock-adapter */ \"./node_modules/axios-mock-adapter/src/index.js\");\n\nvar _axiosMockAdapter2 = _interopRequireDefault(_axiosMockAdapter);\n\nvar _mockjs = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n\nvar _mockjs2 = _interopRequireDefault(_mockjs);\n\nvar _myaxios = __webpack_require__(/*! ./myaxios */ \"./src/common/myaxios.js\");\n\nvar _myaxios2 = _interopRequireDefault(_myaxios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mock = new _axiosMockAdapter2.default(_myaxios2.default, {\n    delayResponse: 100\n});\n\nmock.onPost('/account/login').reply(200, _mockjs2.default.mock({\n    'token': \"test-token\",\n    'type': \"operator\"\n}));\n\nmock.onGet('/messages').reply(200, _mockjs2.default.mock({\n    \"rows|45\": [{\n        'type': 'audio',\n        'name|+1': 1,\n        'endTime': 0,\n        'startTime': 1,\n        'status': 0\n    }],\n    \"total\": 50\n}));\n\n//# sourceURL=webpack:///./src/common/mock.js?");

/***/ }),

/***/ "./src/common/myaxios.js":
/*!*******************************!*\
  !*** ./src/common/myaxios.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _qs = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n\nvar _qs2 = _interopRequireDefault(_qs);\n\nvar _globalvar = __webpack_require__(/*! ./globalvar */ \"./src/common/globalvar.js\");\n\nvar _globalvar2 = _interopRequireDefault(_globalvar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(\"初始化axios,\", _globalvar2.default.fetchServerHostURL);\n_axios2.default.defaults.baseURL = _globalvar2.default.fetchServerHostURL;\n//设置默认请求头\n_axios2.default.defaults.headers = {\n    'Content-Type': 'application/x-www-form-urlencoded',\n    'Cache-Control': 'no-cache,no-store'\n};\n\n_axios2.default.defaults.timeout = 6000;\n\n//不使用URLSearchParams  \n_axios2.default.defaults.transformRequest = [function (data) {\n    if (data === undefined) {\n        return data;\n    } else {\n        var _type = data.constructor;\n        if (\"FormData\" === _type.name) {\n            return data;\n        } else {\n            data = _qs2.default.stringify(data);\n            return data;\n        }\n    }\n}];\n\n//请求拦截器\n_axios2.default.interceptors.request.use(function (config) {\n    console.log(\"request use:\", config);\n    _globalvar2.default.GlobalEventHub.$emit('appLoading', true);\n    return config;\n}, function (error) {\n    _globalvar2.default.GlobalEventHub.$emit('appLoading', true);\n    return Promise.reject(error);\n});\n\n// 添加响应拦截器\n_axios2.default.interceptors.response.use(function (response) {\n    console.log(\"response use:\", response);\n    _globalvar2.default.GlobalEventHub.$emit('appLoading', false);\n    return response;\n}, function (error) {\n    _globalvar2.default.GlobalEventHub.$emit('appLoading', false);\n    return Promise.reject(error);\n});\n\n//响应拦截器即异常处理\n_axios2.default.interceptors.response.use(function (response) {\n    return response;\n}, function (err) {\n    if (err && err.response) {\n        switch (err.response.status) {\n            case 400:\n                err.message = '错误请求';\n                break;\n            case 401:\n                err.message = '未授权，请重新登录';\n                break;\n            case 403:\n                err.message = '拒绝访问';\n                break;\n            case 404:\n                err.message = '请求错误,未找到该资源';\n                break;\n            case 405:\n                err.message = '请求方法未允许';\n                break;\n            case 408:\n                err.message = '请求超时';\n                break;\n            case 500:\n                err.message = '服务器端出错';\n                break;\n            case 501:\n                err.message = '网络未实现';\n                break;\n            case 502:\n                err.message = '网络错误';\n                break;\n            case 503:\n                err.message = '服务不可用';\n                break;\n            case 504:\n                err.message = '网络超时';\n                break;\n            case 505:\n                err.message = 'http版本不支持该请求';\n                break;\n            default:\n                err.message = '连接错误err.response.status';\n        }\n    } else {\n        err.message = \"连接到服务器失败\";\n    }\n    return Promise.reject(err);\n});\n\nexports.default = _axios2.default;\n\n//# sourceURL=webpack:///./src/common/myaxios.js?");

/***/ }),

/***/ "./src/common/state-mem.js":
/*!*********************************!*\
  !*** ./src/common/state-mem.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _globalvar = __webpack_require__(/*! ./globalvar */ \"./src/common/globalvar.js\");\n\nvar _globalvar2 = _interopRequireDefault(_globalvar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = new _vuex2.default.Store({\n    state: {\n        user: undefined,\n        dashboardRouteName: undefined,\n        currentRouteName: undefined,\n        menuItems: undefined\n    },\n    mutations: {\n        initUserUI: function initUserUI(state, value) {\n            state.user = value;\n            if (value === undefined) {\n                state.dashboardRouteName = undefined;\n                state.menuItems = undefined;\n            } else {\n                if (value.type == \"admin\") {\n                    state.dashboardRouteName = \"adminDashboard\";\n                    state.currentRouteName = \"adminDashboard\";\n                    state.menuItems = _globalvar2.default.adminMenuItems;\n                } else if (value.type == \"operator\") {\n                    state.dashboardRouteName = \"operatorDashboard\";\n                    state.currentRouteName = \"operatorDashboard\";\n                    state.menuItems = _globalvar2.default.operatorMenuItems;\n                }\n            }\n        },\n        refreshUserUI: function refreshUserUI(state, value) {\n            this.commit(\"initUserUI\", value.user);\n            state.currentRouteName = value.routeName;\n        }\n    }\n});\n\nexports.default = store;\n\n//# sourceURL=webpack:///./src/common/state-mem.js?");

/***/ }),

/***/ "./src/common/state-persisted.js":
/*!***************************************!*\
  !*** ./src/common/state-persisted.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _vuexPersistedstate = __webpack_require__(/*! vuex-persistedstate */ \"./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js\");\n\nvar _vuexPersistedstate2 = _interopRequireDefault(_vuexPersistedstate);\n\nvar _store = __webpack_require__(/*! store */ \"./node_modules/store/dist/store.legacy.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vuex2.default);\n\nvar vuexStore = new _vuex2.default.Store({\n    state: {\n        user: undefined\n    },\n    mutations: {\n        setUser: function setUser(state, value) {\n            state.user = value;\n        }\n    },\n    plugins: [(0, _vuexPersistedstate2.default)({\n        storage: {\n            getItem: function getItem(key) {\n                return _store2.default.get(key);\n            },\n            setItem: function setItem(key, value) {\n                _store2.default.set(key, value);\n            },\n            removeItem: function removeItem(key) {\n                _store2.default.remove(key);\n            }\n        }\n    })]\n});\n\nexports.default = vuexStore;\n\n//# sourceURL=webpack:///./src/common/state-persisted.js?");

/***/ }),

/***/ "./src/components/framework/Loading.vue":
/*!**********************************************!*\
  !*** ./src/components/framework/Loading.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Loading_vue_vue_type_template_id_c9c90f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.vue?vue&type=template&id=c9c90f04&scoped=true */ \"./src/components/framework/Loading.vue?vue&type=template&id=c9c90f04&scoped=true\");\n/* harmony import */ var _Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.vue?vue&type=script&lang=js */ \"./src/components/framework/Loading.vue?vue&type=script&lang=js\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Loading_vue_vue_type_style_index_0_id_c9c90f04_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less */ \"./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Loading_vue_vue_type_template_id_c9c90f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Loading_vue_vue_type_template_id_c9c90f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c9c90f04\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\components\\\\framework\\\\Loading.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?");

/***/ }),

/***/ "./src/components/framework/Loading.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/framework/Loading.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?");

/***/ }),

/***/ "./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less":
/*!*******************************************************************************************************!*\
  !*** ./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_c9c90f04_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=style&index=0&id=c9c90f04&scoped=true&lang=less\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_c9c90f04_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_c9c90f04_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_c9c90f04_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_c9c90f04_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_c9c90f04_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?");

/***/ }),

/***/ "./src/components/framework/Loading.vue?vue&type=template&id=c9c90f04&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/components/framework/Loading.vue?vue&type=template&id=c9c90f04&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_c9c90f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Loading.vue?vue&type=template&id=c9c90f04&scoped=true */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Loading.vue?vue&type=template&id=c9c90f04&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_c9c90f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_template_id_c9c90f04_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/framework/Loading.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! promise-polyfill/src/polyfill */ \"./node_modules/promise-polyfill/src/polyfill.js\");\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\n__webpack_require__(/*! ./common/initjs */ \"./src/common/initjs.js\");\n\nvar _globalvar = __webpack_require__(/*! ./common/globalvar */ \"./src/common/globalvar.js\");\n\nvar _globalvar2 = _interopRequireDefault(_globalvar);\n\nvar _statePersisted = __webpack_require__(/*! ./common/state-persisted */ \"./src/common/state-persisted.js\");\n\nvar _statePersisted2 = _interopRequireDefault(_statePersisted);\n\nvar _stateMem = __webpack_require__(/*! ./common/state-mem */ \"./src/common/state-mem.js\");\n\nvar _stateMem2 = _interopRequireDefault(_stateMem);\n\nvar _myaxios = __webpack_require__(/*! ./common/myaxios */ \"./src/common/myaxios.js\");\n\nvar _myaxios2 = _interopRequireDefault(_myaxios);\n\nvar _router = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.vue\");\n\nvar _App2 = _interopRequireDefault(_App);\n\n__webpack_require__(/*! ./common/mock */ \"./src/common/mock.js\");\n\n__webpack_require__(/*! ./assets/css/font-awesome.min.css */ \"./src/assets/css/font-awesome.min.css\");\n\n__webpack_require__(/*! ./assets/css/w3.css */ \"./src/assets/css/w3.css\");\n\n__webpack_require__(/*! ./assets/css/global.css */ \"./src/assets/css/global.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//vue内部常用\n\n\n//是否模拟数据\nvar globalEventHub = new _vue2.default();\n_globalvar2.default.GlobalEventHub = globalEventHub;\n_vue2.default.prototype.$myaxios = _myaxios2.default;\n_vue2.default.prototype.$globalEventHub = globalEventHub;\n_vue2.default.prototype.$globalvar = _globalvar2.default;\n\n//缓存验证跳转逻辑\n_router2.default.beforeEach(function (to, from, next) {\n  if (to.name === 'login') {\n    _statePersisted2.default.commit(\"setUser\", undefined);\n    _stateMem2.default.commit(\"initUserUI\", undefined);\n    _myaxios2.default.defaults.headers.accessToken = undefined;\n    next();\n  } else {\n    var _currentUser = _statePersisted2.default.state.user;\n    if (_currentUser === undefined) {\n      next({ name: 'login' });\n    } else {\n      var mu = _stateMem2.default.state.user;\n      if (mu === undefined) {\n        _myaxios2.default.defaults.headers.accessToken = _currentUser.token;\n        _stateMem2.default.commit(\"refreshUserUI\", {\n          user: _currentUser,\n          routeName: to.name\n        });\n      }\n      next();\n    }\n  }\n});\n\nnew _vue2.default({\n  el: '#app',\n  router: _router2.default,\n  render: function render(h) {\n    return h(_App2.default);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vueRouter = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n\nvar _vueRouter2 = _interopRequireDefault(_vueRouter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_vue2.default.use(_vueRouter2.default);\n\nexports.default = new _vueRouter2.default({\n  routes: [{\n    name: 'index',\n    path: '/',\n    redirect: { name: 'login' }\n  }, {\n    name: 'login',\n    path: '/login',\n    component: function component(resolve) {\n      return Promise.all(/*! AMD require */[__webpack_require__.e(4), __webpack_require__.e(0)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../components/login/Content.vue */ \"./src/components/login/Content.vue\")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);\n    },\n    meta: { title: 'login' }\n  }, {\n    path: '/operator',\n    component: function component(resolve) {\n      return __webpack_require__.e(/*! AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../components/framework/Root.vue */ \"./src/components/framework/Root.vue\")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);\n    },\n    meta: { title: 'operator' },\n    children: [\n    //operator\n    {\n      name: 'operatorDashboard',\n      path: '/operatorDashboard',\n      component: function component(resolve) {\n        return __webpack_require__.e(/*! AMD require */ 2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../components/operator-dashboard/Content.vue */ \"./src/components/operator-dashboard/Content.vue\")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);\n      },\n      meta: { title: 'operatorDashboard' }\n    }]\n  }, {\n    path: '/admin',\n    component: function component(resolve) {\n      return __webpack_require__.e(/*! AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../components/framework/Root.vue */ \"./src/components/framework/Root.vue\")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);\n    },\n    meta: { title: 'admin' },\n    children: [\n    //admin\n    {\n      name: 'group',\n      path: '/group',\n      component: function component(resolve) {\n        return __webpack_require__.e(/*! AMD require */ 3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../components/group/Content.vue */ \"./src/components/group/Content.vue\")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);\n      },\n      meta: { title: 'group' }\n    }]\n  }]\n});\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ })

/******/ });