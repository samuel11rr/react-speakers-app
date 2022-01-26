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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-placeholder/lib */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/samuel/Develop/react-speakers-app/src/components/SpeakersList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar SpeakersList = function SpeakersList(_ref) {\n  _s();\n\n  var showSessions = _ref.showSessions;\n\n  var _useRequestSpeakers = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.default)(2000),\n      speakersData = _useRequestSpeakers.speakersData,\n      requestStatus = _useRequestSpeakers.requestStatus,\n      error = _useRequestSpeakers.error,\n      _onFavoriteToggle = _useRequestSpeakers.onFavoriteToggle;\n\n  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.FAILURE) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"text-danger\",\n      children: [\"ERROR: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"b\", {\n        children: [\" loading speaker data failed \", error, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 16\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"container speakers-list\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_1__.default, {\n      type: \"media\",\n      rows: 15,\n      className: \"speakerslist-placeholder\",\n      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.SUCCESS,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: speakersData.map(function (speaker) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_0__.default, {\n            speaker: speaker,\n            showSessions: showSessions,\n            onFavoriteToggle: function onFavoriteToggle() {\n              return _onFavoriteToggle(speaker.id);\n            }\n          }, speaker.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SpeakersList, \"ekdcnqZUg4OGVTnEEkbODZcqSZc=\", false, function () {\n  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.default];\n});\n\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\n\nvar _c;\n\n$RefreshReg$(_c, \"SpeakersList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFFekMsNEJBS0lILCtEQUFrQixDQUFDLElBQUQsQ0FMdEI7QUFBQSxNQUNFSSxZQURGLHVCQUNFQSxZQURGO0FBQUEsTUFFRUMsYUFGRix1QkFFRUEsYUFGRjtBQUFBLE1BR0VDLEtBSEYsdUJBR0VBLEtBSEY7QUFBQSxNQUlFQyxpQkFKRix1QkFJRUEsZ0JBSkY7O0FBUUEsTUFBS0YsYUFBYSxLQUFLSiwwRUFBdkIsRUFBZ0Q7QUFDOUMsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNTO0FBQUEsb0RBQWtDSyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRyxFQUZUO0FBR0UsZUFBUyxFQUFDLDBCQUhaO0FBSUUsV0FBSyxFQUFHRCxhQUFhLEtBQUtKLDBFQUo1QjtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBRUlHLFlBQVksQ0FBQ00sR0FBYixDQUFrQixVQUFBQyxPQUFPO0FBQUEsOEJBQ3ZCLDhEQUFDLDZDQUFEO0FBRUUsbUJBQU8sRUFBR0EsT0FGWjtBQUdFLHdCQUFZLEVBQUdSLFlBSGpCO0FBSUUsNEJBQWdCLEVBQUc7QUFBQSxxQkFBTUksaUJBQWdCLENBQUNJLE9BQU8sQ0FBQ0MsRUFBVCxDQUF0QjtBQUFBO0FBSnJCLGFBQ1FELE9BQU8sQ0FBQ0MsRUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEdUI7QUFBQSxTQUF6QjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBekNEOztHQUFNVjtVQU9BRjs7O0tBUEFFO0FBMkNOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz9jYTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIlxuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyL2xpYlwiO1xuaW1wb3J0IHVzZVJlcXVlc3RTcGVha2VycywgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcblxuXG5jb25zdCBTcGVha2Vyc0xpc3QgPSAoeyBzaG93U2Vzc2lvbnMgfSkgPT4ge1xuXG4gIGNvbnN0IHtcbiAgICBzcGVha2Vyc0RhdGEsXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICBvbkZhdm9yaXRlVG9nZ2xlXG4gIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMClcbiAgXG5cbiAgaWYgKCByZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFICkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIEVSUk9SOiA8Yj4gbG9hZGluZyBzcGVha2VyIGRhdGEgZmFpbGVkIHsgZXJyb3IgfSA8L2I+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXG4gICAgICAgIHJvd3M9eyAxNSB9XG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgIHJlYWR5PXsgcmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3BlYWtlcnNEYXRhLm1hcCggc3BlYWtlciA9PiAoXG4gICAgICAgICAgICAgIDxTcGVha2VyIFxuICAgICAgICAgICAgICAgIGtleT17IHNwZWFrZXIuaWQgfVxuICAgICAgICAgICAgICAgIHNwZWFrZXI9eyBzcGVha2VyIH1cbiAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9eyBzaG93U2Vzc2lvbnMgfVxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eyAoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJSZWFjdFBsYWNlaG9sZGVyIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwiUkVRVUVTVF9TVEFUVVMiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiRkFJTFVSRSIsIlNVQ0NFU1MiLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ }),

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var _Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar REQUEST_STATUS = {\n  LOADING: 'loading',\n  SUCCESS: 'success',\n  FAILURE: 'failure'\n};\n\nvar useRequestSpeakers = function useRequestSpeakers() {\n  _s();\n\n  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      speakersData = _useState[0],\n      setSpeakersData = _useState[1]; // const [isLoading, setIsLoading] = useState(true);\n  // const [hasError, setHasError] = useState(false);\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),\n      requestStatus = _useState2[0],\n      setRequestStatus = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  var delay = function delay(ms) {\n    return new Promise(function (resolve) {\n      return setTimeout(resolve, ms);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var delayFunc = /*#__PURE__*/function () {\n      var _ref = (0,_Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n        return _Users_samuel_Develop_react_speakers_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return delay(delayTime);\n\n              case 3:\n                // throw 'had error!';\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data);\n                _context.next = 11;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(_context.t0);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      return function delayFunc() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    delayFunc();\n  }, []);\n\n  var onFavoriteToggle = function onFavoriteToggle(id) {\n    var speakerRecPrevious = speakersData.find(function (rec) {\n      return rec.id === id;\n    });\n\n    var speakerRecUpdated = _objectSpread(_objectSpread({}, speakerRecPrevious), {}, {\n      favorite: !speakerRecPrevious.favorite\n    });\n\n    var speakersDataNew = speakersData.map(function (rec) {\n      return rec.id === id ? speakerRecUpdated : rec;\n    });\n    setSpeakersData(speakersDataNew);\n  };\n\n  return {\n    speakersData: speakersData,\n    requestStatus: requestStatus,\n    error: error,\n    onFavoriteToggle: onFavoriteToggle\n  };\n};\n\n_s(useRequestSpeakers, \"+CCve3cwykeL2ux13l+olR/GAE8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestSpeakers);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUcsY0FBYyxHQUFHO0FBQzVCQyxFQUFBQSxPQUFPLEVBQUUsU0FEbUI7QUFFNUJDLEVBQUFBLE9BQU8sRUFBRSxTQUZtQjtBQUc1QkMsRUFBQUEsT0FBTyxFQUFFO0FBSG1CLENBQXZCOztBQU9QLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBd0I7QUFBQTs7QUFBQSxNQUF0QkMsU0FBc0IsdUVBQVYsSUFBVTs7QUFFakQsa0JBQXdDUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQSxNQUFPUSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCLGdCQUZpRCxDQUdqRDtBQUNBOzs7QUFDQSxtQkFBMENULCtDQUFRLENBQUNFLGNBQWMsQ0FBQ0MsT0FBaEIsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEJYLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9ZLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEVBQUQ7QUFBQSxXQUFRLElBQUlDLE9BQUosQ0FBYSxVQUFBQyxPQUFPO0FBQUEsYUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBZDtBQUFBLEtBQXBCLENBQVI7QUFBQSxHQUFkOztBQUVBaEIsRUFBQUEsZ0RBQVMsQ0FBRSxZQUFNO0FBQ2YsUUFBTW9CLFNBQVM7QUFBQSxxU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVSTCxLQUFLLENBQUNQLFNBQUQsQ0FGRzs7QUFBQTtBQUdkO0FBQ0FJLGdCQUFBQSxnQkFBZ0IsQ0FBQ1QsY0FBYyxDQUFDRSxPQUFoQixDQUFoQjtBQUNBSyxnQkFBQUEsZUFBZSxDQUFFUiw4Q0FBRixDQUFmO0FBTGM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRZFUsZ0JBQUFBLGdCQUFnQixDQUFDVCxjQUFjLENBQUNHLE9BQWhCLENBQWhCO0FBQ0FRLGdCQUFBQSxRQUFRLGFBQVI7O0FBVGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVE0sU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQWFBQSxJQUFBQSxTQUFTO0FBQ1YsR0FmUSxFQWVOLEVBZk0sQ0FBVDs7QUFpQkEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxFQUFELEVBQVE7QUFDL0IsUUFBTUMsa0JBQWtCLEdBQUdkLFlBQVksQ0FBQ2UsSUFBYixDQUFtQixVQUFBQyxHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDSCxFQUFKLEtBQVdBLEVBQWY7QUFBQSxLQUF0QixDQUEzQjs7QUFFQSxRQUFNSSxpQkFBaUIsbUNBQ2xCSCxrQkFEa0I7QUFFckJJLE1BQUFBLFFBQVEsRUFBRSxDQUFDSixrQkFBa0IsQ0FBQ0k7QUFGVCxNQUF2Qjs7QUFLQSxRQUFNQyxlQUFlLEdBQUduQixZQUFZLENBQUNvQixHQUFiLENBQWtCLFVBQUFKLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNILEVBQUosS0FBV0EsRUFBWCxHQUFnQkksaUJBQWhCLEdBQW9DRCxHQUF4QztBQUFBLEtBQXJCLENBQXhCO0FBRUFmLElBQUFBLGVBQWUsQ0FBRWtCLGVBQUYsQ0FBZjtBQUNELEdBWEQ7O0FBY0EsU0FBTztBQUNMbkIsSUFBQUEsWUFBWSxFQUFaQSxZQURLO0FBRUxFLElBQUFBLGFBQWEsRUFBYkEsYUFGSztBQUdMRSxJQUFBQSxLQUFLLEVBQUxBLEtBSEs7QUFJTFEsSUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUpLLEdBQVA7QUFPRCxDQWhERDs7R0FBTWQ7O0FBbUROLCtEQUFlQSxrQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzPzZkZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi9TcGVha2VyRGF0YSc7XG5cblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICBMT0FESU5HOiAnbG9hZGluZycsXG4gIFNVQ0NFU1M6ICdzdWNjZXNzJyxcbiAgRkFJTFVSRTogJ2ZhaWx1cmUnXG59XG5cblxuY29uc3QgdXNlUmVxdWVzdFNwZWFrZXJzID0gKCBkZWxheVRpbWUgPSAxMDAwICkgPT4ge1xuXG4gIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgLy8gY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSApO1xuICBcbiAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgY29uc3QgZGVsYXlGdW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgLy8gdGhyb3cgJ2hhZCBlcnJvciEnO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoIGRhdGEgKTtcbiAgICAgICAgXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xuICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBkZWxheUZ1bmMoKTtcbiAgfSwgW10pXG4gIFxuICBjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgc3BlYWtlclJlY1ByZXZpb3VzID0gc3BlYWtlcnNEYXRhLmZpbmQoIHJlYyA9PiByZWMuaWQgPT09IGlkICk7XG4gIFxuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgLi4uc3BlYWtlclJlY1ByZXZpb3VzLFxuICAgICAgZmF2b3JpdGU6ICFzcGVha2VyUmVjUHJldmlvdXMuZmF2b3JpdGVcbiAgICB9XG4gIFxuICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoIHJlYyA9PiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWMgKTtcbiAgXG4gICAgc2V0U3BlYWtlcnNEYXRhKCBzcGVha2Vyc0RhdGFOZXcgKTtcbiAgfVxuIFxuICBcbiAgcmV0dXJuIHtcbiAgICBzcGVha2Vyc0RhdGEsXG4gICAgcmVxdWVzdFN0YXR1cyxcbiAgICBlcnJvcixcbiAgICBvbkZhdm9yaXRlVG9nZ2xlXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VyczsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYXRhIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJkZWxheVRpbWUiLCJzcGVha2Vyc0RhdGEiLCJzZXRTcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlclJlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n");

/***/ })

});