"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ user1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction user1() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (router.isFallback) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\user\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 16\n            },\n            __self: this,\n            children: \"Cargando....\"\n        }));\n    }\n    console.log(router);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\user\\\\[id].js\",\n            lineNumber: 14,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\user\\\\[id].js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"user details\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\user\\\\[id].js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    \"user ID: \",\n                    router.query.id\n                ]\n            })\n        ]\n    }));\n};\n_s(user1, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNLO0FBQ0Y7OztBQUUzQixRQUFRLENBQUNHLEtBQUssR0FBRSxDQUFDOztJQUU1QixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFFeEIsRUFBRSxFQUFFSSxNQUFNLENBQUNDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sc0VBQUVDLENBQUc7Ozs7Ozs7c0JBQUMsQ0FBWTs7SUFDNUIsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTTtJQUNsQixNQUFNLHVFQUNESCwwREFBTTs7Ozs7Ozs7aUZBQ0ZDLHlEQUFLOzs7Ozs7OzBCQUFDLENBQVk7O2tGQUNsQk8sQ0FBQzs7Ozs7Ozs7b0JBQUMsQ0FBUztvQkFBQ0wsTUFBTSxDQUFDTSxLQUFLLENBQUNDLEVBQUU7Ozs7O0FBR3hDLENBQUM7R0FkdUJSLEtBQUs7O1FBRVZILGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvW2lkXS5qcz9jMmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90aXRsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcjEoKXtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLi48L2Rpdj5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHJvdXRlcik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxUaXRsZT51c2VyIGRldGFpbHM8L1RpdGxlPlxyXG4gICAgICAgICAgICA8cD51c2VyIElEOiB7cm91dGVyLnF1ZXJ5LmlkfTwvcD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGF0aHMgPSBbXHJcbiAgICAgICAgeyBwYXJhbXM6IHsgaWQ6ICcxJyB9IH0sXHJcbiAgICAgICAgeyBwYXJhbXM6IHsgaWQ6ICcyJyB9IH1cclxuICAgIF07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygge3BhcmFtc30gKXtcclxuICAgIC8vIGNvbnRleHQucGFyYW1zXHJcbiAgICAvLyBjb250ZXh0LnBhcmFtcy5pZFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpOyBcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGF5b3V0IiwiVGl0bGUiLCJ1c2VyMSIsInJvdXRlciIsImlzRmFsbGJhY2siLCJkaXYiLCJjb25zb2xlIiwibG9nIiwicCIsInF1ZXJ5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[id].js\n");

/***/ })

});