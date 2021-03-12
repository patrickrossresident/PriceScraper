module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/prices/[id]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/context/state.js":
/*!******************************!*\
  !*** ./src/context/state.js ***!
  \******************************/
/*! exports provided: AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\WEB\\Grandz\\apps\\sample-embedded-app\\src\\context\\state.js";

const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function AppWrapper({
  children
}) {
  const {
    0: prices,
    1: setPrices
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const updatePrice = (id, title, url, path) => {
    const newPrice = {
      id,
      url,
      path,
      title
    };
    const newPrices = prices.filter(price => price.id != id);
    console.log(newPrices);
    newPrices.push(newPrice);
    setPrices(newPrices);
  };

  const addPrice = (title, url, path) => {
    const id = Date.now();
    const newPrice = {
      id,
      url,
      path,
      title
    };
    setPrices([...prices, newPrice]);
  };

  const removePrice = id => {
    const newPrices = prices.filter(price => price.id != id);
    setPrices(newPrices);
  };

  const getAllPrices = id => {
    return fetch('/metafields/get').then(response => response.json()).then(data => {
      setPrices(data);
    });
  };

  const updateAllPrices = () => {
    return fetch('/metafields/', {
      method: 'POST',
      body: JSON.stringify(prices)
    }).then(response => response.json()).then(data => {
      setPrices(data);
    });
  };

  let sharedState = {
    prices,
    updatePrice,
    addPrice,
    removePrice,
    updateAllPrices,
    getAllPrices
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: sharedState,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
function useAppContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
}

/***/ }),

/***/ "./src/pages/prices/[id]/index.js":
/*!****************************************!*\
  !*** ./src/pages/prices/[id]/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/state */ "./src/context/state.js");

var _jsxFileName = "D:\\WEB\\Grandz\\apps\\sample-embedded-app\\src\\pages\\prices\\[id]\\index.js";




const Item = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    prices,
    updatePrice
  } = Object(_context_state__WEBPACK_IMPORTED_MODULE_3__["useAppContext"])();
  const curPrice = prices.filter(price => price.id == id);
  console.log(curPrice);
  if (curPrice.length == 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Item is removed"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 36
  }, undefined);
  const {
    title,
    url,
    path
  } = curPrice[0];
  const {
    0: newTitle,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(title);
  const {
    0: newUrl,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(url);
  const {
    0: newPath,
    1: setPath
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(path);

  const onSubmit = e => {
    e.preventDefault();
    updatePrice(id, newTitle, newUrl, newPath);
    router.push('/prices');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "single-price-item-page",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            value: newTitle,
            onChange: e => setTitle(e.target.value),
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "URL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            value: newUrl,
            onChange: e => setUrl(e.target.value),
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Path"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            value: newPath,
            onChange: e => setPath(e.target.value),
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          type: "submit",
          children: "Save"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHQvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3ByaWNlcy8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXBwV3JhcHBlciIsImNoaWxkcmVuIiwicHJpY2VzIiwic2V0UHJpY2VzIiwidXNlU3RhdGUiLCJ1cGRhdGVQcmljZSIsImlkIiwidGl0bGUiLCJ1cmwiLCJwYXRoIiwibmV3UHJpY2UiLCJuZXdQcmljZXMiLCJmaWx0ZXIiLCJwcmljZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiYWRkUHJpY2UiLCJEYXRlIiwibm93IiwicmVtb3ZlUHJpY2UiLCJnZXRBbGxQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXBkYXRlQWxsUHJpY2VzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaGFyZWRTdGF0ZSIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiSXRlbSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiY3VyUHJpY2UiLCJsZW5ndGgiLCJuZXdUaXRsZSIsInNldFRpdGxlIiwibmV3VXJsIiwic2V0VXJsIiwibmV3UGF0aCIsInNldFBhdGgiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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RixDQUFTQyxLQUFWLENBQWxGO0FBQXFHLG9CQUFRO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBV0U7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFTLEVBQUMsY0FBN0I7QUFBNEMsaUJBQUssRUFBRU4sT0FBbkQ7QUFBNEQsb0JBQVEsRUFBR0csQ0FBRCxJQUFPRixPQUFPLENBQUNFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQXBGO0FBQXVHLG9CQUFRO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLGVBZUU7QUFBUSxtQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxjQUFJLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdCRCxDQTVDRDs7QUE4Q2VoQixtRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcmljZXMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3ByaWNlcy9baWRdL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByaWNlID0gKGlkLCB0aXRsZSwgdXJsLCBwYXRoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcmljZSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHVybCxcclxuICAgICAgcGF0aCxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1ByaWNlcyA9IHByaWNlcy5maWx0ZXIocHJpY2UgPT4gcHJpY2UuaWQgIT0gaWQpO1xyXG4gICAgY29uc29sZS5sb2cobmV3UHJpY2VzKTtcclxuICAgIG5ld1ByaWNlcy5wdXNoKG5ld1ByaWNlKTtcclxuICAgIHNldFByaWNlcyhuZXdQcmljZXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUHJpY2UgPSAodGl0bGUsIHVybCwgcGF0aCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgbmV3UHJpY2UgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFByaWNlcyhbXHJcbiAgICAgIC4uLnByaWNlcyxcclxuICAgICAgbmV3UHJpY2VcclxuICAgIF0pXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVQcmljZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJpY2VzID0gcHJpY2VzLmZpbHRlcihwcmljZSA9PiBwcmljZS5pZCAhPSBpZClcclxuICAgIFxyXG4gICAgc2V0UHJpY2VzKG5ld1ByaWNlcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFsbFByaWNlcyA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvbWV0YWZpZWxkcy9nZXQnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldFByaWNlcyhkYXRhKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdCB1cGRhdGVBbGxQcmljZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9tZXRhZmllbGRzLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByaWNlcylcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2VzKGRhdGEpXHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgc2hhcmVkU3RhdGUgPSB7cHJpY2VzLCB1cGRhdGVQcmljZSwgYWRkUHJpY2UsIHJlbW92ZVByaWNlLCB1cGRhdGVBbGxQcmljZXMsIGdldEFsbFByaWNlc307XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzaGFyZWRTdGF0ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvc3RhdGUnO1xyXG5cclxuY29uc3QgSXRlbSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7cHJpY2VzLCB1cGRhdGVQcmljZX0gPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgXHJcbiAgY29uc3QgY3VyUHJpY2UgPSBwcmljZXMuZmlsdGVyKHByaWNlID0+IHByaWNlLmlkID09IGlkKTtcclxuICBjb25zb2xlLmxvZyhjdXJQcmljZSlcclxuICBpZihjdXJQcmljZS5sZW5ndGggPT0gMCkgcmV0dXJuKCA8cD5JdGVtIGlzIHJlbW92ZWQ8L3A+KVxyXG4gIGNvbnN0IHt0aXRsZSwgdXJsLCBwYXRofSA9IGN1clByaWNlWzBdOyBcclxuICBjb25zdCBbbmV3VGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcclxuICBjb25zdCBbbmV3VXJsLCBzZXRVcmxdID0gdXNlU3RhdGUodXJsKTtcclxuICBjb25zdCBbbmV3UGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZShwYXRoKTtcclxuXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHVwZGF0ZVByaWNlKGlkLCBuZXdUaXRsZSwgbmV3VXJsLCBuZXdQYXRoKTtcclxuICAgIHJvdXRlci5wdXNoKCcvcHJpY2VzJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wcmljZS1pdGVtLXBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDI+VGl0bGU8L2gyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e25ld1RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSB9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlVSTDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuZXdVcmx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXJsKGUudGFyZ2V0LnZhbHVlKSB9IHJlcXVpcmVkLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGF0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtuZXdQYXRofSBvbkNoYW5nZT17KGUpID0+IHNldFBhdGgoZS50YXJnZXQudmFsdWUpIH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPiAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9