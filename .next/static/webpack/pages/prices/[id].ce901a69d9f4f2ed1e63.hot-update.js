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
    var newArr = prices.fi;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvc3RhdGUuanMiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInByaWNlcyIsInNldFByaWNlcyIsInVwZGF0ZVByaWNlIiwiaWQiLCJ0aXRsZSIsInVybCIsInBhdGgiLCJuZXdQcmljZSIsImlkeCIsImZpbmRJbmRleCIsInByaWNlIiwibmV3QXJyIiwiZmkiLCJhZGRQcmljZSIsIkRhdGUiLCJub3ciLCJyZW1vdmVQcmljZSIsIm5ld1ByaWNlcyIsImZpbHRlciIsImdldEFsbFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ1cGRhdGVBbGxQcmljZXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNoYXJlZFN0YXRlIiwidXNlQXBwQ29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLEVBQWhDO0FBRU8sU0FBU0MsVUFBVCxPQUFrQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUNoQ0MsTUFEZ0M7QUFBQSxNQUN4QkMsU0FEd0I7O0FBR3ZDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUEwQjtBQUM1QyxRQUFNQyxRQUFRLEdBQUc7QUFDZkosUUFBRSxFQUFGQSxFQURlO0FBRWZFLFNBQUcsRUFBSEEsR0FGZTtBQUdmQyxVQUFJLEVBQUpBLElBSGU7QUFJZkYsV0FBSyxFQUFMQTtBQUplLEtBQWpCO0FBTUEsUUFBTUksR0FBRyxHQUFHUixNQUFNLENBQUNTLFNBQVAsQ0FBaUIsVUFBQUMsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ1AsRUFBTixHQUFXQSxFQUFmO0FBQUEsS0FBdEIsQ0FBWjtBQUNBLFFBQU1RLE1BQU0sR0FBR1gsTUFBTSxDQUFDWSxFQUF0QjtBQUNELEdBVEQ7O0FBV0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1QsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBc0I7QUFDckMsUUFBTUgsRUFBRSxHQUFHVyxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUNBLFFBQU1SLFFBQVEsR0FBRztBQUNmSixRQUFFLEVBQUZBLEVBRGU7QUFFZkUsU0FBRyxFQUFIQSxHQUZlO0FBR2ZDLFVBQUksRUFBSkEsSUFIZTtBQUlmRixXQUFLLEVBQUxBO0FBSmUsS0FBakI7QUFPQUgsYUFBUyx3R0FDSkQsTUFESSxJQUVQTyxRQUZPLEdBQVQ7QUFJRCxHQWJEOztBQWVBLE1BQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNiLEVBQUQsRUFBUTtBQUMxQixRQUFNYyxTQUFTLEdBQUdqQixNQUFNLENBQUNrQixNQUFQLENBQWMsVUFBQVIsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ1AsRUFBTixJQUFZQSxFQUFoQjtBQUFBLEtBQW5CLENBQWxCO0FBRUFGLGFBQVMsQ0FBQ2dCLFNBQUQsQ0FBVDtBQUNELEdBSkQ7O0FBTUEsTUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2hCLEVBQUQsRUFBUTtBQUMzQixXQUFPaUIsS0FBSyxDQUFDLGlCQUFELENBQUwsQ0FDSkMsSUFESSxDQUNDLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRFQsRUFFSkYsSUFGSSxDQUVDLFVBQUFHLElBQUksRUFBSTtBQUNadkIsZUFBUyxDQUFDdUIsSUFBRCxDQUFUO0FBQ0QsS0FKSSxDQUFQO0FBS0QsR0FORDs7QUFVQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsV0FBT0wsS0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDM0JNLFlBQU0sRUFBRSxNQURtQjtBQUUzQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTdCLE1BQWY7QUFGcUIsS0FBakIsQ0FBTCxDQUlKcUIsSUFKSSxDQUlDLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBSlQsRUFLSkYsSUFMSSxDQUtDLFVBQUFHLElBQUksRUFBSTtBQUNadkIsZUFBUyxDQUFDdUIsSUFBRCxDQUFUO0FBRUQsS0FSSSxDQUFQO0FBU0QsR0FWRDs7QUFZQSxNQUFJTSxXQUFXLEdBQUc7QUFBQzlCLFVBQU0sRUFBTkEsTUFBRDtBQUFTRSxlQUFXLEVBQVhBLFdBQVQ7QUFBc0JXLFlBQVEsRUFBUkEsUUFBdEI7QUFBZ0NHLGVBQVcsRUFBWEEsV0FBaEM7QUFBNkNTLG1CQUFlLEVBQWZBLGVBQTdDO0FBQThETixnQkFBWSxFQUFaQTtBQUE5RCxHQUFsQjtBQUVBLHNCQUNFLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRVcsV0FBNUI7QUFBQSxjQUNHaEM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FoRWVELFU7O0tBQUFBLFU7QUFrRVQsU0FBU2tDLGFBQVQsR0FBeUI7QUFBQTs7QUFDOUIsU0FBT0Msd0RBQVUsQ0FBQ3JDLFVBQUQsQ0FBakI7QUFDRDs7SUFGZW9DLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpY2VzL1tpZF0uY2U5MDFhNjlkOWY0ZjJlZDFlNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVQcmljZSA9IChpZCwgdGl0bGUsIHVybCwgcGF0aCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJpY2UgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgICBjb25zdCBpZHggPSBwcmljZXMuZmluZEluZGV4KHByaWNlID0+IHByaWNlLmlkID0gaWQpXHJcbiAgICBjb25zdCBuZXdBcnIgPSBwcmljZXMuZmlcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFByaWNlID0gKHRpdGxlLCB1cmwsIHBhdGgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IG5ld1ByaWNlID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdXJsLFxyXG4gICAgICBwYXRoLFxyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQcmljZXMoW1xyXG4gICAgICAuLi5wcmljZXMsXHJcbiAgICAgIG5ld1ByaWNlXHJcbiAgICBdKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJpY2UgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld1ByaWNlcyA9IHByaWNlcy5maWx0ZXIocHJpY2UgPT4gcHJpY2UuaWQgIT0gaWQpXHJcbiAgICBcclxuICAgIHNldFByaWNlcyhuZXdQcmljZXMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBbGxQcmljZXMgPSAoaWQpID0+IHtcclxuICAgIHJldHVybiBmZXRjaCgnL21ldGFmaWVsZHMvZ2V0JylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXRQcmljZXMoZGF0YSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG5cclxuXHJcbiAgY29uc3QgdXBkYXRlQWxsUHJpY2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvbWV0YWZpZWxkcy8nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcmljZXMpXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldFByaWNlcyhkYXRhKVxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgbGV0IHNoYXJlZFN0YXRlID0ge3ByaWNlcywgdXBkYXRlUHJpY2UsIGFkZFByaWNlLCByZW1vdmVQcmljZSwgdXBkYXRlQWxsUHJpY2VzLCBnZXRBbGxQcmljZXN9O1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2hhcmVkU3RhdGV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9