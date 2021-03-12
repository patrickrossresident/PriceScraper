webpackHotUpdate_N_E("pages/prices",{

/***/ "./src/components/PriceList.js":
/*!*************************************!*\
  !*** ./src/components/PriceList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/state */ "./src/context/state.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\WEB\\Grandz\\apps\\sample-embedded-app\\src\\components\\PriceList.js",
    _this = undefined,
    _s = $RefreshSig$();





var PriceList = function PriceList() {
  _s();

  var _useAppContext = Object(_context_state__WEBPACK_IMPORTED_MODULE_2__["useAppContext"])(),
      prices = _useAppContext.prices,
      removePrice = _useAppContext.removePrice,
      getAllPrices = _useAppContext.getAllPrices;

  console.log();

  var renderFunc = function renderFunc() {
    var pricesList = prices.map(function (_ref) {
      var id = _ref.id,
          title = _ref.title,
          value = _ref.value;
      var text = value == 0 ? 'Can\'t Scripe Price From This Resource' : value;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/prices/".concat(id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "price-val",
              children: text || 'Not scraped yet'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-danger",
              onClick: function onClick(e) {
                e.preventDefault();
                removePrice(id);
              },
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this)
      }, id, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this);
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "price-list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: pricesList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!prices.length) {
      getAllPrices();
    } else {
      renderFunc();
    }
  }, [prices]);
  return renderFunc();
};

_s(PriceList, "tPDoFpQBijoVwyRZNr4vyrhh4RQ=", false, function () {
  return [_context_state__WEBPACK_IMPORTED_MODULE_2__["useAppContext"]];
});

_c = PriceList;
/* harmony default export */ __webpack_exports__["default"] = (PriceList);

var _c;

$RefreshReg$(_c, "PriceList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpY2VMaXN0LmpzIl0sIm5hbWVzIjpbIlByaWNlTGlzdCIsInVzZUFwcENvbnRleHQiLCJwcmljZXMiLCJyZW1vdmVQcmljZSIsImdldEFsbFByaWNlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJGdW5jIiwicHJpY2VzTGlzdCIsIm1hcCIsImlkIiwidGl0bGUiLCJ2YWx1ZSIsInRleHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsdUJBQ3NCQyxvRUFBYSxFQURuQztBQUFBLE1BQ2ZDLE1BRGUsa0JBQ2ZBLE1BRGU7QUFBQSxNQUNQQyxXQURPLGtCQUNQQSxXQURPO0FBQUEsTUFDTUMsWUFETixrQkFDTUEsWUFETjs7QUFFdEJDLFNBQU8sQ0FBQ0MsR0FBUjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQU1DLFVBQVUsR0FBR04sTUFBTSxDQUFDTyxHQUFQLENBQVcsZ0JBQXdCO0FBQUEsVUFBdEJDLEVBQXNCLFFBQXRCQSxFQUFzQjtBQUFBLFVBQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxVQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDcEQsVUFBTUMsSUFBSSxHQUFHRCxLQUFLLElBQUksQ0FBVCxHQUFhLHdDQUFiLEdBQXdEQSxLQUFyRTtBQUNBLDBCQUNFO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLG9CQUFhRixFQUFiLENBQVY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFO0FBQUEsd0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUdFO0FBQUcsdUJBQVMsRUFBQyxXQUFiO0FBQUEsd0JBQTBCRSxJQUFJLElBQUk7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQ0UsdUJBQVMsRUFBQyxnQkFEWjtBQUVFLHFCQUFPLEVBQUUsaUJBQUNDLENBQUQsRUFBTztBQUNkQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ0FaLDJCQUFXLENBQUNPLEVBQUQsQ0FBWDtBQUNELGVBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVNBLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELEtBcEJrQixDQUFuQjtBQXNCQSx3QkFDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0U7QUFBQSxrQkFDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0QsR0E5QkQ7O0FBZ0NBUSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFHLENBQUNkLE1BQU0sQ0FBQ2UsTUFBWCxFQUFrQjtBQUNkYixrQkFBWTtBQUNmLEtBRkQsTUFFTTtBQUNIRyxnQkFBVTtBQUNaO0FBQ0YsR0FOUSxFQU1QLENBQUNMLE1BQUQsQ0FOTyxDQUFUO0FBUUEsU0FBT0ssVUFBVSxFQUFqQjtBQUNELENBNUNEOztHQUFNUCxTO1VBQ3dDQyw0RDs7O0tBRHhDRCxTO0FBOENTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcmljZXMuZGUyNTQ4NGYwYTNiYWI0ODJkYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5cclxuY29uc3QgUHJpY2VMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtwcmljZXMsIHJlbW92ZVByaWNlLCBnZXRBbGxQcmljZXN9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gIGNvbnNvbGUubG9nKClcclxuICBjb25zdCByZW5kZXJGdW5jID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJpY2VzTGlzdCA9IHByaWNlcy5tYXAoKHtpZCwgdGl0bGUsIHZhbHVlfSkgPT4ge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdmFsdWUgPT0gMCA/ICdDYW5cXCd0IFNjcmlwZSBQcmljZSBGcm9tIFRoaXMgUmVzb3VyY2UnIDogdmFsdWU7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3ByaWNlcy8ke2lkfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlLXZhbFwiPnt0ZXh0IHx8ICdOb3Qgc2NyYXBlZCB5ZXQnIH08L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJpY2UoaWQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+w5c8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSBcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxpc3RcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7cHJpY2VzTGlzdH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFwcmljZXMubGVuZ3RoKXtcclxuICAgICAgICBnZXRBbGxQcmljZXMoKVxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgcmVuZGVyRnVuYygpXHJcbiAgICB9XHJcbiAgfSxbcHJpY2VzXSlcclxuXHJcbiAgcmV0dXJuIHJlbmRlckZ1bmMoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZUxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==