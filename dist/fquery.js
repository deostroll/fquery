(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function makeWindow() {
  return typeof window === 'object' ? window : this
}

/* harmony default export */ __webpack_exports__["a"] = (makeWindow());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Selector;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_window__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_html_regex__ = __webpack_require__(4);



let document = __WEBPACK_IMPORTED_MODULE_0_core_window__["a" /* default */].document

// let elementRegexes = {
//   singleTag: /<(.*)\/>/m,
//   doubleTag: /<(.*)></(.*)>/m,
//   isSingle: (str) => {
//     single
//   }
// }

function Selector(selector, context) {
  this.nodes = []

  if (typeof selector === 'string' && selector[0] === '<') {
    let node = createNode(__WEBPACK_IMPORTED_MODULE_1_core_util_html_regex__["extract"](selector))
    this.nodes = [node]
  }
  else if (typeof selector === 'object' && selector instanceof Selector) {
    this.nodes = selector.nodes
  }
  else if (typeof selector === 'string' && typeof context === 'string') {
    let ctx = new Selector(context)
    this.nodes = ctx.nodes.reduce((n, el) => fQuery.merge(n, el.querySelectorAll(selector)), this.nodes)
  }
  else if (typeof selector === 'string') {
    let query = document.querySelectorAll(selector)
    this.nodes = Array.prototype.slice.call(query)
  }
  else {
    throw 'Unknown argument'
  }

  this.length = this.nodes.length

  this.nodes.forEach((n, idx) => this[idx] = n)
}

function createNode(nodeStr) {
  return document.createElement(nodeStr)
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["fQuery"] = fQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_window__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_domready__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_standard_plugins__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_util_static_helpers_merge_array__ = __webpack_require__(9);








function fQuery(selector, context) {

  if (typeof selector === 'function') {
    __WEBPACK_IMPORTED_MODULE_1_core_domready__["a" /* default */](selector)
  }
  else {
    return new __WEBPACK_IMPORTED_MODULE_2_core_selector__["a" /* default */](selector, context)
  }

}

fQuery.fn = __WEBPACK_IMPORTED_MODULE_2_core_selector__["a" /* default */].prototype
fQuery.merge = __WEBPACK_IMPORTED_MODULE_4_core_util_static_helpers_merge_array__["a" /* default */]


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = domReady;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(0);


let handlers = []
let document = __WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */].document
let runOnce = false

function domReady(fn) {
  if (runOnce) {
    fn.call(document)
  }
  else {

    document.addEventListener('DOMContentLoaded', function onReady(){
      runOnce = true

      document.removeEventListener('DOMContentLoaded', onReady)

      while(handlers.length) {
        handlers.shift().call(document)
      }
    })

    handlers.push(fn)
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

let regex = {
  single: /<(.*)\/>/m,
  double: /<(.*)><\/(.*)>/m
}

let isSingleType = (str) => regex.single.test(str)
let isDoubleType = (str) => regex.double.test(str)

let isValidDoubleType = (str) => {
  res = regex.double.exec(str)
  return {
    valid: res[1] === res[2],
    regexResult: res
  }
}

const extract = function(str) {
  if (isSingleType(str)) {
    return regex.single.exec(str)[1]
  }
  else {
    let { valid, regexResult } = isValidDoubleType(str)
    return valid ? regexResult[1] : null
  }
}

let obj = { extract }

/* unused harmony default export */ var _unused_webpack_default_export = (obj);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attr__ = __webpack_require__(6);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each__ = __webpack_require__(8);
/* unused harmony reexport namespace */




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_selector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_util_strings__ = __webpack_require__(7);



function addSingleAttribute(attribute, value) {
  return this.each((idx, el) => {
    el.setAttribute(attribute, value)
  });
}

function attr() {
  let selector = this
  if (arguments.length === 1 && typeof arguments[0] === 'object') {
    let attributeObject = arguments[0]
    let keys = Object.keys(attributeObject)

    keys.forEach(key => {
      let value = attributeObject[key]
      let actualKey = __WEBPACK_IMPORTED_MODULE_1_core_util_strings__["camelCase"](key)

      addSingleAttribute.call(this, actualKey, value)
    });

    return this;
  }

  // let key = camelCase(arguments[0]), value = arguments[1]
  let key = arguments[0], value = arguments[1]

  return addSingleAttribute.call(this, key, value)
}

__WEBPACK_IMPORTED_MODULE_0_core_selector__["a" /* default */].prototype.attr = attr


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function camelCasing(input) {
  let chars = Array.prototype.slice.call(input)

  chars[0] = chars[0].toLowerCase()

  let indexHyphen = chars.indexOf('-')

  if (indexHyphen > -1) {
    chars[indexHyphen + 1] = chars[indexHyphen + 1].toUpperCase()
  }

  return chars.join()
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  camesCase: camelCasing
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_selector__ = __webpack_require__(1);


function each(fn) {
  let nodes = this.nodes
  nodes.forEach((n, idx) => fn.call(n, idx, n))
  return this
}

__WEBPACK_IMPORTED_MODULE_0_core_selector__["a" /* default */].prototype.each = each


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeArray;
function mergeArray(dest, src) {
  let a = dest.length, b = 0, c = src.length

  for(;b < c; b++, a++) {
    dest[a] = src[b]
  }

  return dest
}


/***/ })
/******/ ])));