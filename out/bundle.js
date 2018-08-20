/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/main.js":
/*!*************************!*\
  !*** ./modules/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root/script.js */ \"./modules/root/script.js\");\n/* harmony import */ var _root_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_root_script_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _standardBtns_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standardBtns/script.js */ \"./modules/standardBtns/script.js\");\n/* harmony import */ var _standardBtns_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_standardBtns_script_js__WEBPACK_IMPORTED_MODULE_1__);\nlet req;\r\ntry {\r\n    req = __webpack_require__(\"./modules/projectShare/fonts sync recursive \\\\.(?:eot|svg|ttf|woff)$/i\");\r\n    req.keys().forEach((key) => req(key)); \r\n} catch(ex) {} \r\n\r\n\r\n\r\n\r\n\r\nlet pugTemplate = __webpack_require__(/*! ./root/index.pug */ \"./modules/root/index.pug\");\r\ndocument.querySelector(\"#pugTemplate\").innerHTML = pugTemplate;\r\n\r\nconsole.log(\"Javascript entry point log\");\n\n//# sourceURL=webpack:///./modules/main.js?");

/***/ }),

/***/ "./modules/projectShare/fonts sync recursive \\.(?:eot|svg|ttf|woff)$/i":
/*!*******************************************************************!*\
  !*** ./modules/projectShare/fonts sync \.(?:eot|svg|ttf|woff)$/i ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./modules/projectShare/fonts sync recursive \\\\.(?:eot|svg|ttf|woff)$/i\";\n\n//# sourceURL=webpack:///./modules/projectShare/fonts_sync_\\.(?");

/***/ }),

/***/ "./modules/root sync recursive \\.less$/i":
/*!*************************************!*\
  !*** ./modules/root sync \.less$/i ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./style.less\": \"./modules/root/style.less\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules/root sync recursive \\\\.less$/i\";\n\n//# sourceURL=webpack:///./modules/root_sync_\\.less$/i?");

/***/ }),

/***/ "./modules/root/index.pug":
/*!********************************!*\
  !*** ./modules/root/index.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"content\\\"><div class=\\\"content__section\\\"><div class=\\\"content__title\\\">Standard Buttons</div><div class=\\\"standardButtons\\\"><div class=\\\"standardButtons__container\\\"><div class=\\\"standardButtons__button standardButtons__button-small standardButtons__button-full1 standardButtons__button-success\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-small standardButtons__button-full standardButtons__button-success\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-small standardButtons__button-empty standardButtons__button-success\\\">Button</div></div><div class=\\\"standardButtons__container\\\"><div class=\\\"standardButtons__button standardButtons__button-big standardButtons__button-full2 standardButtons__button-success\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-big standardButtons__button-full standardButtons__button-success\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-big standardButtons__button-empty standardButtons__button-success\\\">Button</div></div><div class=\\\"standardButtons__container\\\"><div class=\\\"standardButtons__button standardButtons__button-big standardButtons__button-full3 standardButtons__button-warning\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-big standardButtons__button-full standardButtons__button-warning\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-big standardButtons__button-empty standardButtons__button-warning\\\">Button</div></div><div class=\\\"standardButtons__container\\\"><div class=\\\"standardButtons__button standardButtons__button-small standardButtons__button-full4small standardButtons__button-warning\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-small standardButtons__button-full standardButtons__button-warning\\\">Button</div><div class=\\\"standardButtons__button standardButtons__button-small standardButtons__button-empty standardButtons__button-warning\\\">Button</div></div></div></div><div class=\\\"content__section\\\"></div><div class=\\\"content__section\\\"></div><div class=\\\"content__section\\\"></div><div class=\\\"content__section\\\"></div><div class=\\\"content__twoSections\\\"><div class=\\\"content__leftSection\\\"></div><div class=\\\"content__rightSection\\\"></div></div><div class=\\\"content__twoSections\\\"><div class=\\\"content__leftSection\\\"></div><div class=\\\"content__rightSection\\\"></div></div><div class=\\\"content__twoSections\\\"><div class=\\\"content__leftSection\\\"></div><div class=\\\"content__rightSection\\\"></div></div><div class=\\\"content__section\\\"></div><div class=\\\"content__twoSections\\\"><div class=\\\"content__leftSection\\\"></div><div class=\\\"content__rightSection\\\"></div></div><div class=\\\"content__section\\\"></div></div>\"\n\n//# sourceURL=webpack:///./modules/root/index.pug?");

/***/ }),

/***/ "./modules/root/script.js":
/*!********************************!*\
  !*** ./modules/root/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let req;\r\ntry {\r\n    req = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n    req.keys().forEach((key) => req(key)); \r\n} catch(ex) {} // no img in this module\r\n\r\nreq = __webpack_require__(\"./modules/root sync recursive \\\\.less$/i\");\r\nreq.keys().forEach((key) => req(key));\n\n//# sourceURL=webpack:///./modules/root/script.js?");

/***/ }),

/***/ "./modules/root/style.less":
/*!*********************************!*\
  !*** ./modules/root/style.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/root/style.less?");

/***/ }),

/***/ "./modules/standardBtns sync recursive \\.less$/i":
/*!*********************************************!*\
  !*** ./modules/standardBtns sync \.less$/i ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./style.less\": \"./modules/standardBtns/style.less\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules/standardBtns sync recursive \\\\.less$/i\";\n\n//# sourceURL=webpack:///./modules/standardBtns_sync_\\.less$/i?");

/***/ }),

/***/ "./modules/standardBtns/script.js":
/*!****************************************!*\
  !*** ./modules/standardBtns/script.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let req;\r\ntry {\r\n    req = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'undefined'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n    req.keys().forEach((key) => req(key)); \r\n} catch(ex) {} // no img in this module\r\n\r\nreq = __webpack_require__(\"./modules/standardBtns sync recursive \\\\.less$/i\");\r\nreq.keys().forEach((key) => req(key));\n\n//# sourceURL=webpack:///./modules/standardBtns/script.js?");

/***/ }),

/***/ "./modules/standardBtns/style.less":
/*!*****************************************!*\
  !*** ./modules/standardBtns/style.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./modules/standardBtns/style.less?");

/***/ })

/******/ });