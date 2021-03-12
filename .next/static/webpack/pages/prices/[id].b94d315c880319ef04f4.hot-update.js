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
    newPrices.push(newPrice);
    set;
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
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvc3RhdGUuanMiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInByaWNlcyIsInNldFByaWNlcyIsInVwZGF0ZVByaWNlIiwiaWQiLCJ0aXRsZSIsInVybCIsInBhdGgiLCJuZXdQcmljZSIsImlkeCIsImZpbmRJbmRleCIsInByaWNlIiwibmV3UHJpY2VzIiwiZmlsdGVyIiwicHVzaCIsInNldCIsImFkZFByaWNlIiwiRGF0ZSIsIm5vdyIsInJlbW92ZVByaWNlIiwiZ2V0QWxsUHJpY2VzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInVwZGF0ZUFsbFByaWNlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hhcmVkU3RhdGUiLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsVUFBVSxnQkFBR0MsMkRBQWEsRUFBaEM7QUFFTyxTQUFTQyxVQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDLEVBQUQsQ0FERztBQUFBLE1BQ2hDQyxNQURnQztBQUFBLE1BQ3hCQyxTQUR3Qjs7QUFHdkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQTBCO0FBQzVDLFFBQU1DLFFBQVEsR0FBRztBQUNmSixRQUFFLEVBQUZBLEVBRGU7QUFFZkUsU0FBRyxFQUFIQSxHQUZlO0FBR2ZDLFVBQUksRUFBSkEsSUFIZTtBQUlmRixXQUFLLEVBQUxBO0FBSmUsS0FBakI7QUFNQSxRQUFNSSxHQUFHLEdBQUdSLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQixVQUFBQyxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDUCxFQUFOLEdBQVdBLEVBQWY7QUFBQSxLQUF0QixDQUFaO0FBQ0EsUUFBTVEsU0FBUyxHQUFHWCxNQUFNLENBQUNZLE1BQVAsQ0FBYyxVQUFBRixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDUCxFQUFOLElBQVlBLEVBQWhCO0FBQUEsS0FBbkIsQ0FBbEI7QUFDQVEsYUFBUyxDQUFDRSxJQUFWLENBQWVOLFFBQWY7QUFDQU8sT0FBRztBQUNKLEdBWEQ7O0FBYUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1gsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBc0I7QUFDckMsUUFBTUgsRUFBRSxHQUFHYSxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUNBLFFBQU1WLFFBQVEsR0FBRztBQUNmSixRQUFFLEVBQUZBLEVBRGU7QUFFZkUsU0FBRyxFQUFIQSxHQUZlO0FBR2ZDLFVBQUksRUFBSkEsSUFIZTtBQUlmRixXQUFLLEVBQUxBO0FBSmUsS0FBakI7QUFPQUgsYUFBUyx3R0FDSkQsTUFESSxJQUVQTyxRQUZPLEdBQVQ7QUFJRCxHQWJEOztBQWVBLE1BQU1XLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNmLEVBQUQsRUFBUTtBQUMxQixRQUFNUSxTQUFTLEdBQUdYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjLFVBQUFGLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNQLEVBQU4sSUFBWUEsRUFBaEI7QUFBQSxLQUFuQixDQUFsQjtBQUVBRixhQUFTLENBQUNVLFNBQUQsQ0FBVDtBQUNELEdBSkQ7O0FBTUEsTUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2hCLEVBQUQsRUFBUTtBQUMzQixXQUFPaUIsS0FBSyxDQUFDLGlCQUFELENBQUwsQ0FDSkMsSUFESSxDQUNDLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBRFQsRUFFSkYsSUFGSSxDQUVDLFVBQUFHLElBQUksRUFBSTtBQUNadkIsZUFBUyxDQUFDdUIsSUFBRCxDQUFUO0FBQ0QsS0FKSSxDQUFQO0FBS0QsR0FORDs7QUFVQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsV0FBT0wsS0FBSyxDQUFDLGNBQUQsRUFBaUI7QUFDM0JNLFlBQU0sRUFBRSxNQURtQjtBQUUzQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTdCLE1BQWY7QUFGcUIsS0FBakIsQ0FBTCxDQUlKcUIsSUFKSSxDQUlDLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEtBSlQsRUFLSkYsSUFMSSxDQUtDLFVBQUFHLElBQUksRUFBSTtBQUNadkIsZUFBUyxDQUFDdUIsSUFBRCxDQUFUO0FBRUQsS0FSSSxDQUFQO0FBU0QsR0FWRDs7QUFZQSxNQUFJTSxXQUFXLEdBQUc7QUFBQzlCLFVBQU0sRUFBTkEsTUFBRDtBQUFTRSxlQUFXLEVBQVhBLFdBQVQ7QUFBc0JhLFlBQVEsRUFBUkEsUUFBdEI7QUFBZ0NHLGVBQVcsRUFBWEEsV0FBaEM7QUFBNkNPLG1CQUFlLEVBQWZBLGVBQTdDO0FBQThETixnQkFBWSxFQUFaQTtBQUE5RCxHQUFsQjtBQUVBLHNCQUNFLHFFQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRVcsV0FBNUI7QUFBQSxjQUNHaEM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FsRWVELFU7O0tBQUFBLFU7QUFvRVQsU0FBU2tDLGFBQVQsR0FBeUI7QUFBQTs7QUFDOUIsU0FBT0Msd0RBQVUsQ0FBQ3JDLFVBQUQsQ0FBakI7QUFDRDs7SUFGZW9DLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpY2VzL1tpZF0uYjk0ZDMxNWM4ODAzMTllZjA0ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVQcmljZSA9IChpZCwgdGl0bGUsIHVybCwgcGF0aCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJpY2UgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgICBjb25zdCBpZHggPSBwcmljZXMuZmluZEluZGV4KHByaWNlID0+IHByaWNlLmlkID0gaWQpXHJcbiAgICBjb25zdCBuZXdQcmljZXMgPSBwcmljZXMuZmlsdGVyKHByaWNlID0+IHByaWNlLmlkICE9IGlkKVxyXG4gICAgbmV3UHJpY2VzLnB1c2gobmV3UHJpY2UpO1xyXG4gICAgc2V0XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRQcmljZSA9ICh0aXRsZSwgdXJsLCBwYXRoKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCBuZXdQcmljZSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHVybCxcclxuICAgICAgcGF0aCxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0UHJpY2VzKFtcclxuICAgICAgLi4ucHJpY2VzLFxyXG4gICAgICBuZXdQcmljZVxyXG4gICAgXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByaWNlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcmljZXMgPSBwcmljZXMuZmlsdGVyKHByaWNlID0+IHByaWNlLmlkICE9IGlkKVxyXG4gICAgXHJcbiAgICBzZXRQcmljZXMobmV3UHJpY2VzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QWxsUHJpY2VzID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9tZXRhZmllbGRzL2dldCcpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2VzKGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IHVwZGF0ZUFsbFByaWNlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmZXRjaCgnL21ldGFmaWVsZHMvJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJpY2VzKVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXRQcmljZXMoZGF0YSlcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBzaGFyZWRTdGF0ZSA9IHtwcmljZXMsIHVwZGF0ZVByaWNlLCBhZGRQcmljZSwgcmVtb3ZlUHJpY2UsIHVwZGF0ZUFsbFByaWNlcywgZ2V0QWxsUHJpY2VzfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NoYXJlZFN0YXRlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==