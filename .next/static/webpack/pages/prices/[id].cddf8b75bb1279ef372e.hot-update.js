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
    console.log();
    newPrices.push(newPrice);
    console.log(newPrices);
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
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvc3RhdGUuanMiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInByaWNlcyIsInNldFByaWNlcyIsInVwZGF0ZVByaWNlIiwiaWQiLCJ0aXRsZSIsInVybCIsInBhdGgiLCJuZXdQcmljZSIsImlkeCIsImZpbmRJbmRleCIsInByaWNlIiwibmV3UHJpY2VzIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJhZGRQcmljZSIsIkRhdGUiLCJub3ciLCJyZW1vdmVQcmljZSIsImdldEFsbFByaWNlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ1cGRhdGVBbGxQcmljZXMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNoYXJlZFN0YXRlIiwidXNlQXBwQ29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLEVBQWhDO0FBRU8sU0FBU0MsVUFBVCxPQUFrQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUNoQ0MsTUFEZ0M7QUFBQSxNQUN4QkMsU0FEd0I7O0FBR3ZDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUEwQjtBQUM1QyxRQUFNQyxRQUFRLEdBQUc7QUFDZkosUUFBRSxFQUFGQSxFQURlO0FBRWZFLFNBQUcsRUFBSEEsR0FGZTtBQUdmQyxVQUFJLEVBQUpBLElBSGU7QUFJZkYsV0FBSyxFQUFMQTtBQUplLEtBQWpCO0FBTUEsUUFBTUksR0FBRyxHQUFHUixNQUFNLENBQUNTLFNBQVAsQ0FBaUIsVUFBQUMsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ1AsRUFBTixHQUFXQSxFQUFmO0FBQUEsS0FBdEIsQ0FBWjtBQUNBLFFBQU1RLFNBQVMsR0FBR1gsTUFBTSxDQUFDWSxNQUFQLENBQWMsVUFBQUYsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ1AsRUFBTixJQUFZQSxFQUFoQjtBQUFBLEtBQW5CLENBQWxCO0FBQ0FVLFdBQU8sQ0FBQ0MsR0FBUjtBQUNBSCxhQUFTLENBQUNJLElBQVYsQ0FBZVIsUUFBZjtBQUNBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUNELEdBWkQ7O0FBY0EsTUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1osS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBc0I7QUFDckMsUUFBTUgsRUFBRSxHQUFHYyxJQUFJLENBQUNDLEdBQUwsRUFBWDtBQUNBLFFBQU1YLFFBQVEsR0FBRztBQUNmSixRQUFFLEVBQUZBLEVBRGU7QUFFZkUsU0FBRyxFQUFIQSxHQUZlO0FBR2ZDLFVBQUksRUFBSkEsSUFIZTtBQUlmRixXQUFLLEVBQUxBO0FBSmUsS0FBakI7QUFPQUgsYUFBUyx3R0FDSkQsTUFESSxJQUVQTyxRQUZPLEdBQVQ7QUFJRCxHQWJEOztBQWVBLE1BQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNoQixFQUFELEVBQVE7QUFDMUIsUUFBTVEsU0FBUyxHQUFHWCxNQUFNLENBQUNZLE1BQVAsQ0FBYyxVQUFBRixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDUCxFQUFOLElBQVlBLEVBQWhCO0FBQUEsS0FBbkIsQ0FBbEI7QUFFQUYsYUFBUyxDQUFDVSxTQUFELENBQVQ7QUFDRCxHQUpEOztBQU1BLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNqQixFQUFELEVBQVE7QUFDM0IsV0FBT2tCLEtBQUssQ0FBQyxpQkFBRCxDQUFMLENBQ0pDLElBREksQ0FDQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQURULEVBRUpGLElBRkksQ0FFQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnhCLGVBQVMsQ0FBQ3dCLElBQUQsQ0FBVDtBQUNELEtBSkksQ0FBUDtBQUtELEdBTkQ7O0FBVUEsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQU9MLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNCTSxZQUFNLEVBQUUsTUFEbUI7QUFFM0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU5QixNQUFmO0FBRnFCLEtBQWpCLENBQUwsQ0FJSnNCLElBSkksQ0FJQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxLQUpULEVBS0pGLElBTEksQ0FLQyxVQUFBRyxJQUFJLEVBQUk7QUFDWnhCLGVBQVMsQ0FBQ3dCLElBQUQsQ0FBVDtBQUVELEtBUkksQ0FBUDtBQVNELEdBVkQ7O0FBWUEsTUFBSU0sV0FBVyxHQUFHO0FBQUMvQixVQUFNLEVBQU5BLE1BQUQ7QUFBU0UsZUFBVyxFQUFYQSxXQUFUO0FBQXNCYyxZQUFRLEVBQVJBLFFBQXRCO0FBQWdDRyxlQUFXLEVBQVhBLFdBQWhDO0FBQTZDTyxtQkFBZSxFQUFmQSxlQUE3QztBQUE4RE4sZ0JBQVksRUFBWkE7QUFBOUQsR0FBbEI7QUFFQSxzQkFDRSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUVXLFdBQTVCO0FBQUEsY0FDR2pDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBbkVlRCxVOztLQUFBQSxVO0FBcUVULFNBQVNtQyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLHdEQUFVLENBQUN0QyxVQUFELENBQWpCO0FBQ0Q7O0lBRmVxQyxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByaWNlcy9baWRdLmNkZGY4Yjc1YmIxMjc5ZWYzNzJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUHJpY2UgPSAoaWQsIHRpdGxlLCB1cmwsIHBhdGgpID0+IHtcclxuICAgIGNvbnN0IG5ld1ByaWNlID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdXJsLFxyXG4gICAgICBwYXRoLFxyXG4gICAgICB0aXRsZVxyXG4gICAgfVxyXG4gICAgY29uc3QgaWR4ID0gcHJpY2VzLmZpbmRJbmRleChwcmljZSA9PiBwcmljZS5pZCA9IGlkKVxyXG4gICAgY29uc3QgbmV3UHJpY2VzID0gcHJpY2VzLmZpbHRlcihwcmljZSA9PiBwcmljZS5pZCAhPSBpZCk7XHJcbiAgICBjb25zb2xlLmxvZygpXHJcbiAgICBuZXdQcmljZXMucHVzaChuZXdQcmljZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdQcmljZXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkUHJpY2UgPSAodGl0bGUsIHVybCwgcGF0aCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgbmV3UHJpY2UgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHRpdGxlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFByaWNlcyhbXHJcbiAgICAgIC4uLnByaWNlcyxcclxuICAgICAgbmV3UHJpY2VcclxuICAgIF0pXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVQcmljZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJpY2VzID0gcHJpY2VzLmZpbHRlcihwcmljZSA9PiBwcmljZS5pZCAhPSBpZClcclxuICAgIFxyXG4gICAgc2V0UHJpY2VzKG5ld1ByaWNlcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFsbFByaWNlcyA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvbWV0YWZpZWxkcy9nZXQnKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIHNldFByaWNlcyhkYXRhKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBjb25zdCB1cGRhdGVBbGxQcmljZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9tZXRhZmllbGRzLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByaWNlcylcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgc2V0UHJpY2VzKGRhdGEpXHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgc2hhcmVkU3RhdGUgPSB7cHJpY2VzLCB1cGRhdGVQcmljZSwgYWRkUHJpY2UsIHJlbW92ZVByaWNlLCB1cGRhdGVBbGxQcmljZXMsIGdldEFsbFByaWNlc307XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzaGFyZWRTdGF0ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=