webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/context/state.js":
/*!******************************!*\
  !*** ./src/context/state.js ***!
  \******************************/
/*! exports provided: AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "D:\\WEB\\Grandz\\apps\\sample-embedded-app\\src\\context\\state.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
function AppWrapper(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      prices = _useState[0],
      setPrices = _useState[1];

  var updatePrice = function updatePrice(id, title, url, path) {
    var newPrice = {
      id: id,
      url: url,
      path: path,
      title: title
    };
    var idx = prices.findIndex(function (price) {
      return price.id = id;
    });
    var newPrices = prices.filter(function (price) {
      return price.id != id;
    });
    newPrices.push();
  };

  var addPrice = function addPrice(title, url, path) {
    var id = Date.now();
    var newPrice = {
      id: id,
      url: url,
      path: path,
      title: title
    };
    setPrices([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prices), [newPrice]));
  };

  var removePrice = function removePrice(id) {
    var newPrices = prices.filter(function (price) {
      return price.id != id;
    });
    setPrices(newPrices);
  };

  var getAllPrices = function getAllPrices(id) {
    return fetch('/metafields/get').then(function (response) {
      return response.json();
    }).then(function (data) {
      setPrices(data);
    });
  };

  var updateAllPrices = function updateAllPrices() {
    return fetch('/metafields/', {
      method: 'POST',
      body: JSON.stringify(prices)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setPrices(data);
    });
  };

  var sharedState = {
    prices: prices,
    updatePrice: updatePrice,
    addPrice: addPrice,
    removePrice: removePrice,
    updateAllPrices: updateAllPrices,
    getAllPrices: getAllPrices
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: sharedState,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

_s(AppWrapper, "5ExkfnXxxfzMKYdtizv/SBGAoWY=");

_c = AppWrapper;
function useAppContext() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(AppContext);
}

_s2(useAppContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "AppWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvc3RhdGUuanMiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInByaWNlcyIsInNldFByaWNlcyIsInVwZGF0ZVByaWNlIiwiaWQiLCJ0aXRsZSIsInVybCIsInBhdGgiLCJuZXdQcmljZSIsImlkeCIsImZpbmRJbmRleCIsInByaWNlIiwibmV3UHJpY2VzIiwiZmlsdGVyIiwicHVzaCIsImFkZFByaWNlIiwiRGF0ZSIsIm5vdyIsInJlbW92ZVByaWNlIiwiZ2V0QWxsUHJpY2VzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInVwZGF0ZUFsbFByaWNlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hhcmVkU3RhdGUiLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsVUFBVSxnQkFBR0MsMkRBQWEsRUFBaEM7QUFFTyxTQUFTQyxVQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDLEVBQUQsQ0FERztBQUFBLE1BQ2hDQyxNQURnQztBQUFBLE1BQ3hCQyxTQUR3Qjs7QUFHdkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQTBCO0FBQzVDLFFBQU1DLFFBQVEsR0FBRztBQUNmSixRQUFFLEVBQUZBLEVBRGU7QUFFZkUsU0FBRyxFQUFIQSxHQUZlO0FBR2ZDLFVBQUksRUFBSkEsSUFIZTtBQUlmRixXQUFLLEVBQUxBO0FBSmUsS0FBakI7QUFNQSxRQUFNSSxHQUFHLEdBQUdSLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQixVQUFBQyxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDUCxFQUFOLEdBQVdBLEVBQWY7QUFBQSxLQUF0QixDQUFaO0FBQ0EsUUFBTVEsU0FBUyxHQUFHWCxNQUFNLENBQUNZLE1BQVAsQ0FBYyxVQUFBRixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDUCxFQUFOLElBQVlBLEVBQWhCO0FBQUEsS0FBbkIsQ0FBbEI7QUFDQVEsYUFBUyxDQUFDRSxJQUFWO0FBQ0QsR0FWRDs7QUFZQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDVixLQUFELEVBQVFDLEdBQVIsRUFBYUMsSUFBYixFQUFzQjtBQUNyQyxRQUFNSCxFQUFFLEdBQUdZLElBQUksQ0FBQ0MsR0FBTCxFQUFYO0FBQ0EsUUFBTVQsUUFBUSxHQUFHO0FBQ2ZKLFFBQUUsRUFBRkEsRUFEZTtBQUVmRSxTQUFHLEVBQUhBLEdBRmU7QUFHZkMsVUFBSSxFQUFKQSxJQUhlO0FBSWZGLFdBQUssRUFBTEE7QUFKZSxLQUFqQjtBQU9BSCxhQUFTLHdHQUNKRCxNQURJLElBRVBPLFFBRk8sR0FBVDtBQUlELEdBYkQ7O0FBZUEsTUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2QsRUFBRCxFQUFRO0FBQzFCLFFBQU1RLFNBQVMsR0FBR1gsTUFBTSxDQUFDWSxNQUFQLENBQWMsVUFBQUYsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ1AsRUFBTixJQUFZQSxFQUFoQjtBQUFBLEtBQW5CLENBQWxCO0FBRUFGLGFBQVMsQ0FBQ1UsU0FBRCxDQUFUO0FBQ0QsR0FKRDs7QUFNQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDZixFQUFELEVBQVE7QUFDM0IsV0FBT2dCLEtBQUssQ0FBQyxpQkFBRCxDQUFMLENBQ0pDLElBREksQ0FDQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURULEVBRUpGLElBRkksQ0FFQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnRCLGVBQVMsQ0FBQ3NCLElBQUQsQ0FBVDtBQUNELEtBSkksQ0FBUDtBQUtELEdBTkQ7O0FBVUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQU9MLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNCTSxZQUFNLEVBQUUsTUFEbUI7QUFFM0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU1QixNQUFmO0FBRnFCLEtBQWpCLENBQUwsQ0FJSm9CLElBSkksQ0FJQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUpULEVBS0pGLElBTEksQ0FLQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnRCLGVBQVMsQ0FBQ3NCLElBQUQsQ0FBVDtBQUVELEtBUkksQ0FBUDtBQVNELEdBVkQ7O0FBWUEsTUFBSU0sV0FBVyxHQUFHO0FBQUM3QixVQUFNLEVBQU5BLE1BQUQ7QUFBU0UsZUFBVyxFQUFYQSxXQUFUO0FBQXNCWSxZQUFRLEVBQVJBLFFBQXRCO0FBQWdDRyxlQUFXLEVBQVhBLFdBQWhDO0FBQTZDTyxtQkFBZSxFQUFmQSxlQUE3QztBQUE4RE4sZ0JBQVksRUFBWkE7QUFBOUQsR0FBbEI7QUFFQSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUVXLFdBQTVCO0FBQUEsY0FDRy9CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBakVlRCxVOztLQUFBQSxVO0FBbUVULFNBQVNpQyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLHdEQUFVLENBQUNwQyxVQUFELENBQWpCO0FBQ0Q7O0lBRmVtQyxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDhlOWRhNDI0YWEyMDg2YWI1ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVQcmljZSA9IChpZCwgdGl0bGUsIHVybCwgcGF0aCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJpY2UgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgICBjb25zdCBpZHggPSBwcmljZXMuZmluZEluZGV4KHByaWNlID0+IHByaWNlLmlkID0gaWQpXHJcbiAgICBjb25zdCBuZXdQcmljZXMgPSBwcmljZXMuZmlsdGVyKHByaWNlID0+IHByaWNlLmlkICE9IGlkKVxyXG4gICAgbmV3UHJpY2VzLnB1c2goKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUHJpY2UgPSAodGl0bGUsIHVybCwgcGF0aCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgbmV3UHJpY2UgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFByaWNlcyhbXHJcbiAgICAgIC4uLnByaWNlcyxcclxuICAgICAgbmV3UHJpY2VcclxuICAgIF0pXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVQcmljZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJpY2VzID0gcHJpY2VzLmZpbHRlcihwcmljZSA9PiBwcmljZS5pZCAhPSBpZClcclxuICAgIFxyXG4gICAgc2V0UHJpY2VzKG5ld1ByaWNlcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFsbFByaWNlcyA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvbWV0YWZpZWxkcy9nZXQnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldFByaWNlcyhkYXRhKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdCB1cGRhdGVBbGxQcmljZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9tZXRhZmllbGRzLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByaWNlcylcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2VzKGRhdGEpXHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgc2hhcmVkU3RhdGUgPSB7cHJpY2VzLCB1cGRhdGVQcmljZSwgYWRkUHJpY2UsIHJlbW92ZVByaWNlLCB1cGRhdGVBbGxQcmljZXMsIGdldEFsbFByaWNlc307XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzaGFyZWRTdGF0ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=