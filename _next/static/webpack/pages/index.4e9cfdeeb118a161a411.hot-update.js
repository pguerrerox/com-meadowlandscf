webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/Index_about.js":
/*!*****************************************!*\
  !*** ./components/index/Index_about.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index_about; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/pgx/webdev/com-meadowlandscf/components/index/Index_about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// importing nextjs/api
 // importing modules

 // exporting component

function Index_about(props) {
  var _this = this;

  var data = props.data;
  var iconStyle = {
    width: '150px',
    height: 'auto',
    color: '#40a7ea'
  };
  return __jsx("section", {
    className: "Index_about py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "text-center text-secondary mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.header), __jsx("div", {
    className: "row justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-xl-5 d-flex flex-column justify-content-center align-items-center my-xl-0 mb-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, data.leftColumn.h2), __jsx("p", {
    className: "my-xl-5 my-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, data.leftColumn.p), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.leftColumn.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn btn-primary btn-lg w-50 text-uppercase font-weight-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, data.leftColumn.button))), __jsx("div", {
    className: "col-xl-5 my-xl-0 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, data.rightColumn.map(function (item, i) {
    return (// console.log(item.img);
      __jsx("div", {
        className: "d-flex flex-row  my-3",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 19
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: item.img,
        style: iconStyle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "flex-grow ml-4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, __jsx("h4", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 23
        }
      }, item.h4), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 23
        }
      }, item.p)))
    );
  })))));
}
_c = Index_about;

var _c;

$RefreshReg$(_c, "Index_about");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9JbmRleF9hYm91dC5qcyJdLCJuYW1lcyI6WyJJbmRleF9hYm91dCIsInByb3BzIiwiZGF0YSIsImljb25TdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJoZWFkZXIiLCJsZWZ0Q29sdW1uIiwiaDIiLCJwIiwibGluayIsImJ1dHRvbiIsInJpZ2h0Q29sdW1uIiwibWFwIiwiaXRlbSIsImkiLCJpbWciLCJoNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQUNlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQ3pDLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUVBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsU0FBSyxFQUFFLE9BRFM7QUFFaEJDLFVBQU0sRUFBRSxNQUZRO0FBR2hCQyxTQUFLLEVBQUU7QUFIUyxHQUFsQjtBQU1BLFNBQ0U7QUFBUyxhQUFTLEVBQUMsa0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxpQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlESixJQUFJLENBQUNLLE1BQXRELENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0wsSUFBSSxDQUFDTSxVQUFMLENBQWdCQyxFQUFyQixDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ1AsSUFBSSxDQUFDTSxVQUFMLENBQWdCRSxDQUFoRCxDQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRVIsSUFBSSxDQUFDTSxVQUFMLENBQWdCRyxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsNkRBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0RVQsSUFBSSxDQUFDTSxVQUFMLENBQWdCSSxNQUE1RixDQURGLENBSEYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSVYsSUFBSSxDQUFDVyxXQUFMLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNoQyxXQUNFO0FBQ0E7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQXVDLFdBQUcsRUFBRUEsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsOEVBQUQ7QUFBaUIsWUFBSSxFQUFFRCxJQUFJLENBQUNFLEdBQTVCO0FBQWlDLGFBQUssRUFBRWQsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtZLElBQUksQ0FBQ0csRUFBVixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJSCxJQUFJLENBQUNMLENBQVQsQ0FGRixDQUZGO0FBRkY7QUFVRCxHQVhELENBRkosQ0FSRixDQUZGLENBREYsQ0FERjtBQWdDRDtLQXpDdUJWLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU5Y2ZkZWViMTE4YTE2MWE0MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBuZXh0anMvYXBpXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vIGltcG9ydGluZyBtb2R1bGVzXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG4vLyBleHBvcnRpbmcgY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleF9hYm91dChwcm9wcykge1xuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcblxuICBjb25zdCBpY29uU3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxNTBweCcsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgY29sb3I6ICcjNDBhN2VhJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J0luZGV4X2Fib3V0IHB5LTUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IG1iLTQnPntkYXRhLmhlYWRlcn08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTUgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG15LXhsLTAgbWItbGctNCc+XG4gICAgICAgICAgICA8aDI+e2RhdGEubGVmdENvbHVtbi5oMn08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdteS14bC01IG15LWxnLTUnPntkYXRhLmxlZnRDb2x1bW4ucH08L3A+XG4gICAgICAgICAgICA8TGluayBocmVmPXtkYXRhLmxlZnRDb2x1bW4ubGlua30+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyB3LTUwIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWJvbGQnPntkYXRhLmxlZnRDb2x1bW4uYnV0dG9ufTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhsLTUgbXkteGwtMCBtdC00Jz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGF0YS5yaWdodENvbHVtbi5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5pbWcpO1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LXJvdyAgbXktMycga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpdGVtLmltZ30gc3R5bGU9e2ljb25TdHlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBtbC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0uaDR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5wfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==