"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useSpeakerFilter.js":
/*!***************************************!*\
  !*** ./src/hooks/useSpeakerFilter.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\nvar useSpeakerFilter = function useSpeakerFilter(startingShowSessions, startingYear) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowSessions),\n      showSessions = _useState[0],\n      setShowSessions = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingYear),\n      eventYear = _useState2[0],\n      setEventYear = _useState2[1];\n\n  return {\n    showSessions: showSessions,\n    setShowSessions: setShowSessions\n  };\n};\n\n_s(useSpeakerFilter, \"8nrmsOR3IoTcENPsQ7ooHf8Jb8c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSpeakerFilter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU3BlYWtlckZpbHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUVDLG9CQUFGLEVBQXdCQyxZQUF4QixFQUEwQztBQUFBOztBQUNqRSxrQkFBd0NILCtDQUFRLENBQUNFLG9CQUFELENBQWhEO0FBQUEsTUFBT0UsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBa0NMLCtDQUFRLENBQUNHLFlBQUQsQ0FBMUM7QUFBQSxNQUFPRyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLFNBQU87QUFDTEgsSUFBQUEsWUFBWSxFQUFaQSxZQURLO0FBRUxDLElBQUFBLGVBQWUsRUFBZkE7QUFGSyxHQUFQO0FBSUQsQ0FSRDs7R0FBTUo7O0FBVU4sK0RBQWVBLGdCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VTcGVha2VyRmlsdGVyLmpzPzA4NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlU3BlYWtlckZpbHRlciA9ICggc3RhcnRpbmdTaG93U2Vzc2lvbnMsIHN0YXJ0aW5nWWVhciApID0+IHtcbiAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHN0YXJ0aW5nU2hvd1Nlc3Npb25zKTtcbiAgY29uc3QgW2V2ZW50WWVhciwgc2V0RXZlbnRZZWFyXSA9IHVzZVN0YXRlKHN0YXJ0aW5nWWVhcik7XG5cbiAgcmV0dXJuIHtcbiAgICBzaG93U2Vzc2lvbnMsXG4gICAgc2V0U2hvd1Nlc3Npb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJGaWx0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU3BlYWtlckZpbHRlciIsInN0YXJ0aW5nU2hvd1Nlc3Npb25zIiwic3RhcnRpbmdZZWFyIiwic2hvd1Nlc3Npb25zIiwic2V0U2hvd1Nlc3Npb25zIiwiZXZlbnRZZWFyIiwic2V0RXZlbnRZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useSpeakerFilter.js\n");

/***/ })

});