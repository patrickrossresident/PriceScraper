webpackHotUpdate_N_E("pages/prices",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvc3RhdGUuanMiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInByaWNlcyIsInNldFByaWNlcyIsInVwZGF0ZVByaWNlIiwiaWQiLCJ0aXRsZSIsInVybCIsInBhdGgiLCJuZXdQcmljZSIsImlkeCIsImZpbmRJbmRleCIsInByaWNlIiwibmV3UHJpY2VzIiwiZmlsdGVyIiwiYWRkUHJpY2UiLCJEYXRlIiwibm93IiwicmVtb3ZlUHJpY2UiLCJnZXRBbGxQcmljZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidXBkYXRlQWxsUHJpY2VzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaGFyZWRTdGF0ZSIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUVPLFNBQVNDLFVBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsRUFBRCxDQURHO0FBQUEsTUFDaENDLE1BRGdDO0FBQUEsTUFDeEJDLFNBRHdCOztBQUd2QyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsRUFBMEI7QUFDNUMsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZKLFFBQUUsRUFBRkEsRUFEZTtBQUVmRSxTQUFHLEVBQUhBLEdBRmU7QUFHZkMsVUFBSSxFQUFKQSxJQUhlO0FBSWZGLFdBQUssRUFBTEE7QUFKZSxLQUFqQjtBQU1BLFFBQU1JLEdBQUcsR0FBR1IsTUFBTSxDQUFDUyxTQUFQLENBQWlCLFVBQUFDLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNQLEVBQU4sR0FBV0EsRUFBZjtBQUFBLEtBQXRCLENBQVo7QUFDQSxRQUFNUSxTQUFTLEdBQUdYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjLFVBQUFGLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNQLEVBQU4sSUFBWUEsRUFBaEI7QUFBQSxLQUFuQixDQUFsQjtBQUNELEdBVEQ7O0FBV0EsTUFBTVUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1QsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBc0I7QUFDckMsUUFBTUgsRUFBRSxHQUFHVyxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUNBLFFBQU1SLFFBQVEsR0FBRztBQUNmSixRQUFFLEVBQUZBLEVBRGU7QUFFZkUsU0FBRyxFQUFIQSxHQUZlO0FBR2ZDLFVBQUksRUFBSkEsSUFIZTtBQUlmRixXQUFLLEVBQUxBO0FBSmUsS0FBakI7QUFPQUgsYUFBUyx3R0FDSkQsTUFESSxJQUVQTyxRQUZPLEdBQVQ7QUFJRCxHQWJEOztBQWVBLE1BQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNiLEVBQUQsRUFBUTtBQUMxQixRQUFNUSxTQUFTLEdBQUdYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjLFVBQUFGLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNQLEVBQU4sSUFBWUEsRUFBaEI7QUFBQSxLQUFuQixDQUFsQjtBQUVBRixhQUFTLENBQUNVLFNBQUQsQ0FBVDtBQUNELEdBSkQ7O0FBTUEsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2QsRUFBRCxFQUFRO0FBQzNCLFdBQU9lLEtBQUssQ0FBQyxpQkFBRCxDQUFMLENBQ0pDLElBREksQ0FDQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURULEVBRUpGLElBRkksQ0FFQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnJCLGVBQVMsQ0FBQ3FCLElBQUQsQ0FBVDtBQUNELEtBSkksQ0FBUDtBQUtELEdBTkQ7O0FBVUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQU9MLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNCTSxZQUFNLEVBQUUsTUFEbUI7QUFFM0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWUzQixNQUFmO0FBRnFCLEtBQWpCLENBQUwsQ0FJSm1CLElBSkksQ0FJQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUpULEVBS0pGLElBTEksQ0FLQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnJCLGVBQVMsQ0FBQ3FCLElBQUQsQ0FBVDtBQUVELEtBUkksQ0FBUDtBQVNELEdBVkQ7O0FBWUEsTUFBSU0sV0FBVyxHQUFHO0FBQUM1QixVQUFNLEVBQU5BLE1BQUQ7QUFBU0UsZUFBVyxFQUFYQSxXQUFUO0FBQXNCVyxZQUFRLEVBQVJBLFFBQXRCO0FBQWdDRyxlQUFXLEVBQVhBLFdBQWhDO0FBQTZDTyxtQkFBZSxFQUFmQSxlQUE3QztBQUE4RE4sZ0JBQVksRUFBWkE7QUFBOUQsR0FBbEI7QUFFQSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUVXLFdBQTVCO0FBQUEsY0FDRzlCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBaEVlRCxVOztLQUFBQSxVO0FBa0VULFNBQVNnQyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLHdEQUFVLENBQUNuQyxVQUFELENBQWpCO0FBQ0Q7O0lBRmVrQyxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByaWNlcy43NDA5YmEyYWI2YTc0ZTNlYjg1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByaWNlID0gKGlkLCB0aXRsZSwgdXJsLCBwYXRoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcmljZSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHVybCxcclxuICAgICAgcGF0aCxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICAgIGNvbnN0IGlkeCA9IHByaWNlcy5maW5kSW5kZXgocHJpY2UgPT4gcHJpY2UuaWQgPSBpZClcclxuICAgIGNvbnN0IG5ld1ByaWNlcyA9IHByaWNlcy5maWx0ZXIocHJpY2UgPT4gcHJpY2UuaWQgIT0gaWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRQcmljZSA9ICh0aXRsZSwgdXJsLCBwYXRoKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCBuZXdQcmljZSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHVybCxcclxuICAgICAgcGF0aCxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0UHJpY2VzKFtcclxuICAgICAgLi4ucHJpY2VzLFxyXG4gICAgICBuZXdQcmljZVxyXG4gICAgXSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByaWNlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcmljZXMgPSBwcmljZXMuZmlsdGVyKHByaWNlID0+IHByaWNlLmlkICE9IGlkKVxyXG4gICAgXHJcbiAgICBzZXRQcmljZXMobmV3UHJpY2VzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QWxsUHJpY2VzID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9tZXRhZmllbGRzL2dldCcpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2VzKGRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IHVwZGF0ZUFsbFByaWNlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmZXRjaCgnL21ldGFmaWVsZHMvJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJpY2VzKVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBzZXRQcmljZXMoZGF0YSlcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGxldCBzaGFyZWRTdGF0ZSA9IHtwcmljZXMsIHVwZGF0ZVByaWNlLCBhZGRQcmljZSwgcmVtb3ZlUHJpY2UsIHVwZGF0ZUFsbFByaWNlcywgZ2V0QWxsUHJpY2VzfTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NoYXJlZFN0YXRlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==