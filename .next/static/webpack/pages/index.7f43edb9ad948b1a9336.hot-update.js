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

/***/ "./src/contexts/SpeakerFilterContext.js":
/*!**********************************************!*\
  !*** ./src/contexts/SpeakerFilterContext.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpeakerFilterContext\": function() { return /* binding */ SpeakerFilterContext; },\n/* harmony export */   \"SpeakerFilterProvider\": function() { return /* binding */ SpeakerFilterProvider; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useSpeakerFilter */ \"./src/hooks/useSpeakerFilter.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samuel/Develop/react-speakers-app/src/contexts/SpeakerFilterContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar SpeakerFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n\nvar SpeakerFilterProvider = function SpeakerFilterProvider(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$startingShowSess = _ref.startingShowSessions,\n      startingShowSessions = _ref$startingShowSess === void 0 ? false : _ref$startingShowSess,\n      _ref$startingEventYea = _ref.startingEventYear,\n      startingEventYear = _ref$startingEventYea === void 0 ? '2019' : _ref$startingEventYea;\n\n  var _useSpeakerFilter = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_1__.default)(startingShowSessions, startingEventYear),\n      showSessions = _useSpeakerFilter.showSessions,\n      setShowSessions = _useSpeakerFilter.setShowSessions,\n      eventYear = _useSpeakerFilter.eventYear,\n      setEventYear = _useSpeakerFilter.setEventYear,\n      searchQuery = _useSpeakerFilter.searchQuery,\n      setSearchQuery = _useSpeakerFilter.setSearchQuery,\n      EVENT_YEARS = _useSpeakerFilter.EVENT_YEARS;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(SpeakerFilterContext.Provider, {\n    value: {\n      showSessions: showSessions,\n      setShowSessions: setShowSessions,\n      eventYear: eventYear,\n      setEventYear: setEventYear,\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery,\n      EVENT_YEARS: EVENT_YEARS\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SpeakerFilterProvider, \"z+UAAQGsyngjTmRDCkLWqO9sq1A=\", false, function () {\n  return [_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n_c = SpeakerFilterProvider;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakerFilterProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRyxvQkFBb0IsZ0JBQUdGLG9EQUFhLEVBQTFDOztBQUVBLElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FJeEI7QUFBQTs7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxtQ0FGSkMsb0JBRUk7QUFBQSxNQUZKQSxvQkFFSSxzQ0FGbUIsS0FFbkI7QUFBQSxtQ0FESkMsaUJBQ0k7QUFBQSxNQURKQSxpQkFDSSxzQ0FEZ0IsTUFDaEI7O0FBQ0osMEJBUUlMLGdFQUFnQixDQUFDSSxvQkFBRCxFQUF1QkMsaUJBQXZCLENBUnBCO0FBQUEsTUFDRUMsWUFERixxQkFDRUEsWUFERjtBQUFBLE1BRUVDLGVBRkYscUJBRUVBLGVBRkY7QUFBQSxNQUdFQyxTQUhGLHFCQUdFQSxTQUhGO0FBQUEsTUFJRUMsWUFKRixxQkFJRUEsWUFKRjtBQUFBLE1BS0VDLFdBTEYscUJBS0VBLFdBTEY7QUFBQSxNQU1FQyxjQU5GLHFCQU1FQSxjQU5GO0FBQUEsTUFPRUMsV0FQRixxQkFPRUEsV0FQRjs7QUFVQSxzQkFDRSw4REFBQyxvQkFBRCxDQUFzQixRQUF0QjtBQUNFLFNBQUssRUFDSDtBQUNFTixNQUFBQSxZQUFZLEVBQVpBLFlBREY7QUFFRUMsTUFBQUEsZUFBZSxFQUFmQSxlQUZGO0FBR0VDLE1BQUFBLFNBQVMsRUFBVEEsU0FIRjtBQUlFQyxNQUFBQSxZQUFZLEVBQVpBLFlBSkY7QUFLRUMsTUFBQUEsV0FBVyxFQUFYQSxXQUxGO0FBTUVDLE1BQUFBLGNBQWMsRUFBZEEsY0FORjtBQU9FQyxNQUFBQSxXQUFXLEVBQVhBO0FBUEYsS0FGSjtBQUFBLGNBYUlUO0FBYko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBaENEOztHQUFNRDtVQWFBRjs7O0tBYkFFO0FBa0NOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dC5qcz9mNTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSAnLi4vaG9va3MvdXNlU3BlYWtlckZpbHRlcic7XG5cbmNvbnN0IFNwZWFrZXJGaWx0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBTcGVha2VyRmlsdGVyUHJvdmlkZXIgPSAoeyBcbiAgY2hpbGRyZW4sXG4gIHN0YXJ0aW5nU2hvd1Nlc3Npb25zID0gZmFsc2UsXG4gIHN0YXJ0aW5nRXZlbnRZZWFyID0gJzIwMTknXG59KSA9PiB7XG4gIGNvbnN0IHsgXG4gICAgc2hvd1Nlc3Npb25zLCBcbiAgICBzZXRTaG93U2Vzc2lvbnMsIFxuICAgIGV2ZW50WWVhcixcbiAgICBzZXRFdmVudFllYXIsXG4gICAgc2VhcmNoUXVlcnksXG4gICAgc2V0U2VhcmNoUXVlcnksXG4gICAgRVZFTlRfWUVBUlMsXG4gIH0gPSB1c2VTcGVha2VyRmlsdGVyKHN0YXJ0aW5nU2hvd1Nlc3Npb25zLCBzdGFydGluZ0V2ZW50WWVhcik7XG5cbiAgcmV0dXJuIChcbiAgICA8U3BlYWtlckZpbHRlckNvbnRleHQuUHJvdmlkZXIgXG4gICAgICB2YWx1ZT17XG4gICAgICAgIHsgXG4gICAgICAgICAgc2hvd1Nlc3Npb25zLCBcbiAgICAgICAgICBzZXRTaG93U2Vzc2lvbnMsXG4gICAgICAgICAgZXZlbnRZZWFyLFxuICAgICAgICAgIHNldEV2ZW50WWVhcixcbiAgICAgICAgICBzZWFyY2hRdWVyeSxcbiAgICAgICAgICBzZXRTZWFyY2hRdWVyeSxcbiAgICAgICAgICBFVkVOVF9ZRUFSUyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgID5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvU3BlYWtlckZpbHRlckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IHsgXG4gIFNwZWFrZXJGaWx0ZXJDb250ZXh0LCBcbiAgU3BlYWtlckZpbHRlclByb3ZpZGVyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNwZWFrZXJGaWx0ZXIiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRpbmdTaG93U2Vzc2lvbnMiLCJzdGFydGluZ0V2ZW50WWVhciIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsImV2ZW50WWVhciIsInNldEV2ZW50WWVhciIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJFVkVOVF9ZRUFSUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SpeakerFilterContext.js\n");

/***/ })

});