(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/common/state-persisted.js":
/*!***************************************!*\
  !*** ./src/common/state-persisted.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _vuexPersistedstate = __webpack_require__(/*! vuex-persistedstate */ \"./node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js\");\n\nvar _vuexPersistedstate2 = _interopRequireDefault(_vuexPersistedstate);\n\nvar _vuex = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = new _vuex2.default.Store({\n    state: {\n        user: undefined\n    },\n    mutations: {\n        setUser: function setUser(state, value) {\n            state.user = value;\n        }\n    },\n    plugins: [(0, _vuexPersistedstate2.default)()]\n});\n\nexports.default = store;\n\n//# sourceURL=webpack:///./src/common/state-persisted.js?");

/***/ })

}]);