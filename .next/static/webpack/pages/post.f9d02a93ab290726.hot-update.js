"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post/index.js":
/*!*****************************!*\
  !*** ./pages/post/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Post(param) {\n    var posts = param.posts;\n    var _this = this;\n    //CLIENT SIDE RENDERING\n    // const [posts, setPosts] = React.useState([]);\n    // React.useEffect(() => {\n    //     const fetchPosts = async () => {\n    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');\n    //         const newPost = await res.json();\n    //         setPosts(newPost);\n    //     }\n    //     fetchPosts();\n    // }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        className: \"jsx-b767615643b275cf\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        /*#__PURE__*/ children: \"Landing page de Post\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"desciption\",\n                        content: \"curso de nextJs de Webtutoriales\",\n                        className: \"jsx-b767615643b275cf\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_title__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"post Page\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"jsx-b767615643b275cf\" + \" \" + \"api-res\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: posts.map(function(item) {\n                    var id = item.id, title = item.title, body = item.body;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/post/[id]\",\n                        as: \"/post/\".concat(id),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"jsx-b767615643b275cf\" + \" \" + \"card\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                className: \"jsx-b767615643b275cf\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 33\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        className: \"jsx-b767615643b275cf\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this,\n                                        children: title\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"jsx-b767615643b275cf\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this,\n                                        children: body\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"jsx-b767615643b275cf\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Jean\\\\Desktop\\\\next-js\\\\pages\\\\post\\\\index.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 37\n                                        },\n                                        __self: _this,\n                                        children: id\n                                    })\n                                ]\n                            })\n                        })\n                    }, id.toString()));\n                })\n            }),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"b767615643b275cf\",\n                __self: this,\n                children: \".api-res.jsx-b767615643b275cf {display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nflex-wrap:wrap;\\nwidth:85vw;\\n-webkit-justify-content:center;\\njustify-content:center;\\ngap:20px 50px;\\nmargin:50px 0;\\ncursor:pointer}\\n.card.jsx-b767615643b275cf {width:350px;\\nheight:400px;\\npadding:0 20px;\\nborder:2px inset #00cffe;\\nborder-radius:10px;\\ntransition-duration:500ms}\\n.card.jsx-b767615643b275cf:hover {background-color:black;\\ncolor:white;\\nborder:2px solid #6200fe}\"\n            })\n        ]\n    }));\n};\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0E7QUFDSDtBQUNtQjtBQUNGOztBQUczQixRQUFRLENBQUNLLElBQUksQ0FBQyxLQUFPLEVBQUMsQ0FBQztRQUFSQyxLQUFLLEdBQU4sS0FBTyxDQUFOQSxLQUFLOztJQUMvQixFQUF1QjtJQUN2QixFQUFnRDtJQUVoRCxFQUEwQjtJQUMxQixFQUF1QztJQUN2QyxFQUFpRjtJQUNqRixFQUE0QztJQUM1QyxFQUE2QjtJQUM3QixFQUFRO0lBQ1IsRUFBb0I7SUFDcEIsRUFBVTtJQUNWLE1BQU0sdUVBQ0RILDBEQUFNOzs7Ozs7OztrRkFDRkgsa0RBQUk7Ozs7Ozs7O3lGQUNBTyxDQUFLOzs7Ozs7OztnREFBQyxDQUFvQjs7eUZBQzFCQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBWTt3QkFBQ0MsT0FBTyxFQUFDLENBQWtDOzs7Ozs7Ozs7OztpRkFFckVOLHlEQUFLOzs7Ozs7OzBCQUFDLENBQVM7O2lGQUNmTyxDQUFHOzBEQUFXLENBQVM7Ozs7Ozs7MEJBQ25CTCxLQUFLLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO29CQUNsQixHQUFLLENBQUVDLEVBQUUsR0FBaUJELElBQUksQ0FBdkJDLEVBQUUsRUFBRVAsS0FBSyxHQUFVTSxJQUFJLENBQW5CTixLQUFLLEVBQUVRLElBQUksR0FBSUYsSUFBSSxDQUFaRSxJQUFJO29CQUN0QixNQUFNLHNFQUNEZCxrREFBSTt3QkFBQ2UsSUFBSSxFQUFDLENBQVk7d0JBQUNDLEVBQUUsRUFBRyxDQUFNLFFBQUssT0FBSEgsRUFBRTs7Ozs7Ozt1R0FDbENILENBQUc7c0VBQVcsQ0FBTTs7Ozs7Ozs0R0FDaEJPLENBQUM7Ozs7Ozs7Ozt5R0FDR0MsQ0FBRTs7Ozs7Ozs7a0RBQUVaLEtBQUs7O3lHQUNUYSxDQUFDOzs7Ozs7OztrREFBRUwsSUFBSTs7eUdBQ1BNLENBQUk7Ozs7Ozs7O2tEQUFFUCxFQUFFOzs7Ozt1QkFMMkJBLEVBQUUsQ0FBQ1EsUUFBUTtnQkFVbkUsQ0FBQzs7Ozs7Ozs7O0FBOEJqQixDQUFDO0tBL0R1QmpCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9pbmRleC5qcz9lYzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RpdGxlXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0c30pe1xyXG4gICAgLy9DTElFTlQgU0lERSBSRU5ERVJJTkdcclxuICAgIC8vIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBuZXdQb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8vICAgICAgICAgc2V0UG9zdHMobmV3UG9zdCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGZldGNoUG9zdHMoKTtcclxuICAgIC8vIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TGFuZGluZyBwYWdlIGRlIFBvc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NpcHRpb25cIiBjb250ZW50PVwiY3Vyc28gZGUgbmV4dEpzIGRlIFdlYnR1dG9yaWFsZXNcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxUaXRsZT5wb3N0IFBhZ2U8L1RpdGxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwaS1yZXNcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aWQsIHRpdGxlLCBib2R5fSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF1cIiBhcz17YC9wb3N0LyR7aWR9YH0ga2V5PXtpZC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2lkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwaS1yZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOjIwcHggNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggaW5zZXQgIzAwY2ZmZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXMgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM2MjAwZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpO1xyXG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBwb3N0c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlJlYWN0IiwiTGF5b3V0IiwiVGl0bGUiLCJQb3N0IiwicG9zdHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsIm1hcCIsIml0ZW0iLCJpZCIsImJvZHkiLCJocmVmIiwiYXMiLCJhIiwiaDMiLCJwIiwic3BhbiIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/index.js\n");

/***/ })

});