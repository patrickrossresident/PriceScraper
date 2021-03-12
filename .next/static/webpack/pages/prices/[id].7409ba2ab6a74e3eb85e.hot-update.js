webpackHotUpdate_N_E("pages/prices/[id]",{

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
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvc3RhdGUuanMiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInByaWNlcyIsInNldFByaWNlcyIsInVwZGF0ZVByaWNlIiwiaWQiLCJ0aXRsZSIsInVybCIsInBhdGgiLCJuZXdQcmljZSIsImlkeCIsImZpbmRJbmRleCIsInByaWNlIiwibmV3UHJpY2VzIiwiZmlsdGVyIiwiYWRkUHJpY2UiLCJEYXRlIiwibm93IiwicmVtb3ZlUHJpY2UiLCJnZXRBbGxQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXBkYXRlQWxsUHJpY2VzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaGFyZWRTdGF0ZSIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUVPLFNBQVNDLFVBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsRUFBRCxDQURHO0FBQUEsTUFDaENDLE1BRGdDO0FBQUEsTUFDeEJDLFNBRHdCOztBQUd2QyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBMEI7QUFDNUMsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZKLFFBQUUsRUFBRkEsRUFEZTtBQUVmRSxTQUFHLEVBQUhBLEdBRmU7QUFHZkMsVUFBSSxFQUFKQSxJQUhlO0FBSWZGLFdBQUssRUFBTEE7QUFKZSxLQUFqQjtBQU1BLFFBQU1JLEdBQUcsR0FBR1IsTUFBTSxDQUFDUyxTQUFQLENBQWlCLFVBQUFDLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNQLEVBQU4sR0FBV0EsRUFBZjtBQUFBLEtBQXRCLENBQVo7QUFDQSxRQUFNUSxTQUFTLEdBQUdYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjLFVBQUFGLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNQLEVBQU4sSUFBWUEsRUFBaEI7QUFBQSxLQUFuQixDQUFsQjtBQUNELEdBVEQ7O0FBV0EsTUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1QsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBc0I7QUFDckMsUUFBTUgsRUFBRSxHQUFHVyxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUNBLFFBQU1SLFFBQVEsR0FBRztBQUNmSixRQUFFLEVBQUZBLEVBRGU7QUFFZkUsU0FBRyxFQUFIQSxHQUZlO0FBR2ZDLFVBQUksRUFBSkEsSUFIZTtBQUlmRixXQUFLLEVBQUxBO0FBSmUsS0FBakI7QUFPQUgsYUFBUyx3R0FDSkQsTUFESSxJQUVQTyxRQUZPLEdBQVQ7QUFJRCxHQWJEOztBQWVBLE1BQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNiLEVBQUQsRUFBUTtBQUMxQixRQUFNUSxTQUFTLEdBQUdYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjLFVBQUFGLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNQLEVBQU4sSUFBWUEsRUFBaEI7QUFBQSxLQUFuQixDQUFsQjtBQUVBRixhQUFTLENBQUNVLFNBQUQsQ0FBVDtBQUNELEdBSkQ7O0FBTUEsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsRUFBRCxFQUFRO0FBQzNCLFdBQU9lLEtBQUssQ0FBQyxpQkFBRCxDQUFMLENBQ0pDLElBREksQ0FDQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURULEVBRUpGLElBRkksQ0FFQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnJCLGVBQVMsQ0FBQ3FCLElBQUQsQ0FBVDtBQUNELEtBSkksQ0FBUDtBQUtELEdBTkQ7O0FBVUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQU9MLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNCTSxZQUFNLEVBQUUsTUFEbUI7QUFFM0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUzQixNQUFmO0FBRnFCLEtBQWpCLENBQUwsQ0FJSm1CLElBSkksQ0FJQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUpULEVBS0pGLElBTEksQ0FLQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnJCLGVBQVMsQ0FBQ3FCLElBQUQsQ0FBVDtBQUVELEtBUkksQ0FBUDtBQVNELEdBVkQ7O0FBWUEsTUFBSU0sV0FBVyxHQUFHO0FBQUM1QixVQUFNLEVBQU5BLE1BQUQ7QUFBU0UsZUFBVyxFQUFYQSxXQUFUO0FBQXNCVyxZQUFRLEVBQVJBLFFBQXRCO0FBQWdDRyxlQUFXLEVBQVhBLFdBQWhDO0FBQTZDTyxtQkFBZSxFQUFmQSxlQUE3QztBQUE4RE4sZ0JBQVksRUFBWkE7QUFBOUQsR0FBbEI7QUFFQSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUVXLFdBQTVCO0FBQUEsY0FDRzlCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBaEVlRCxVOztLQUFBQSxVO0FBa0VULFNBQVNnQyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLHdEQUFVLENBQUNuQyxVQUFELENBQWpCO0FBQ0Q7O0lBRmVrQyxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByaWNlcy9baWRdLjc0MDliYTJhYjZhNzRlM2ViODVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUHJpY2UgPSAoaWQsIHRpdGxlLCB1cmwsIHBhdGgpID0+IHtcclxuICAgIGNvbnN0IG5ld1ByaWNlID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdXJsLFxyXG4gICAgICBwYXRoLFxyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gICAgY29uc3QgaWR4ID0gcHJpY2VzLmZpbmRJbmRleChwcmljZSA9PiBwcmljZS5pZCA9IGlkKVxyXG4gICAgY29uc3QgbmV3UHJpY2VzID0gcHJpY2VzLmZpbHRlcihwcmljZSA9PiBwcmljZS5pZCAhPSBpZClcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFByaWNlID0gKHRpdGxlLCB1cmwsIHBhdGgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IG5ld1ByaWNlID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdXJsLFxyXG4gICAgICBwYXRoLFxyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQcmljZXMoW1xyXG4gICAgICAuLi5wcmljZXMsXHJcbiAgICAgIG5ld1ByaWNlXHJcbiAgICBdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJpY2UgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld1ByaWNlcyA9IHByaWNlcy5maWx0ZXIocHJpY2UgPT4gcHJpY2UuaWQgIT0gaWQpXHJcbiAgICBcclxuICAgIHNldFByaWNlcyhuZXdQcmljZXMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBbGxQcmljZXMgPSAoaWQpID0+IHtcclxuICAgIHJldHVybiBmZXRjaCgnL21ldGFmaWVsZHMvZ2V0JylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXRQcmljZXMoZGF0YSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG5cclxuXHJcbiAgY29uc3QgdXBkYXRlQWxsUHJpY2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvbWV0YWZpZWxkcy8nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcmljZXMpXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldFByaWNlcyhkYXRhKVxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHNoYXJlZFN0YXRlID0ge3ByaWNlcywgdXBkYXRlUHJpY2UsIGFkZFByaWNlLCByZW1vdmVQcmljZSwgdXBkYXRlQWxsUHJpY2VzLCBnZXRBbGxQcmljZXN9O1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2hhcmVkU3RhdGV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9