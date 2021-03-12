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

  console.log(prices);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpY2VMaXN0LmpzIl0sIm5hbWVzIjpbIlByaWNlTGlzdCIsInVzZUFwcENvbnRleHQiLCJwcmljZXMiLCJyZW1vdmVQcmljZSIsImdldEFsbFByaWNlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJGdW5jIiwicHJpY2VzTGlzdCIsIm1hcCIsImlkIiwidGl0bGUiLCJ2YWx1ZSIsInRleHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsdUJBQ3NCQyxvRUFBYSxFQURuQztBQUFBLE1BQ2ZDLE1BRGUsa0JBQ2ZBLE1BRGU7QUFBQSxNQUNQQyxXQURPLGtCQUNQQSxXQURPO0FBQUEsTUFDTUMsWUFETixrQkFDTUEsWUFETjs7QUFFdEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaOztBQUNBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBTUMsVUFBVSxHQUFHTixNQUFNLENBQUNPLEdBQVAsQ0FBVyxnQkFBd0I7QUFBQSxVQUF0QkMsRUFBc0IsUUFBdEJBLEVBQXNCO0FBQUEsVUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLFVBQVhDLEtBQVcsUUFBWEEsS0FBVztBQUNwRCxVQUFNQyxJQUFJLEdBQUdELEtBQUssSUFBSSxDQUFULEdBQWEsd0NBQWIsR0FBd0RBLEtBQXJFO0FBQ0EsMEJBQ0U7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksb0JBQWFGLEVBQWIsQ0FBVjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBR0U7QUFBRyx1QkFBUyxFQUFDLFdBQWI7QUFBQSx3QkFBMEJFLElBQUksSUFBSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFDRSx1QkFBUyxFQUFDLGdCQURaO0FBRUUscUJBQU8sRUFBRSxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ2RBLGlCQUFDLENBQUNDLGNBQUY7QUFDQVosMkJBQVcsQ0FBQ08sRUFBRCxDQUFYO0FBQ0QsZUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBU0EsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsS0FwQmtCLENBQW5CO0FBc0JBLHdCQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBLGtCQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQTlCRDs7QUFnQ0FRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUcsQ0FBQ2QsTUFBTSxDQUFDZSxNQUFYLEVBQWtCO0FBQ2RiLGtCQUFZO0FBQ2YsS0FGRCxNQUVNO0FBQ0hHLGdCQUFVO0FBQ1o7QUFDRixHQU5RLEVBTVAsQ0FBQ0wsTUFBRCxDQU5PLENBQVQ7QUFRQSxTQUFPSyxVQUFVLEVBQWpCO0FBQ0QsQ0E1Q0Q7O0dBQU1QLFM7VUFDd0NDLDREOzs7S0FEeENELFM7QUE4Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByaWNlcy43ZDgzODlhN2Q0MDZmYmMyNDhjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcblxyXG5jb25zdCBQcmljZUxpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3ByaWNlcywgcmVtb3ZlUHJpY2UsIGdldEFsbFByaWNlc30gPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgY29uc29sZS5sb2cocHJpY2VzKVxyXG4gIGNvbnN0IHJlbmRlckZ1bmMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmljZXNMaXN0ID0gcHJpY2VzLm1hcCgoe2lkLCB0aXRsZSwgdmFsdWV9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRleHQgPSB2YWx1ZSA9PSAwID8gJ0NhblxcJ3QgU2NyaXBlIFByaWNlIEZyb20gVGhpcyBSZXNvdXJjZScgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxsaSBrZXk9e2lkfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJpY2VzLyR7aWR9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UtdmFsXCI+e3RleHQgfHwgJ05vdCBzY3JhcGVkIHlldCcgfTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICByZW1vdmVQcmljZShpZCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApIFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGlzdFwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtwcmljZXNMaXN0fVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIXByaWNlcy5sZW5ndGgpe1xyXG4gICAgICAgIGdldEFsbFByaWNlcygpXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICByZW5kZXJGdW5jKClcclxuICAgIH1cclxuICB9LFtwcmljZXNdKVxyXG5cclxuICByZXR1cm4gcmVuZGVyRnVuYygpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9