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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var _components_cards_ImageCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cards/ImageCard */ \"./components/cards/ImageCard.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Index = (param)=>{\n    let { images } = param;\n    var _this;\n    _s();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.Context);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchedImages, setSearchedImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // useEffect(() => {\n    //   if (!user) {\n    //     router.push(\"/login\"); // Redirect to login page if user is not logged in\n    //   }\n    // }, []);\n    const handleSearchChange = (e)=>{\n        const text = e.target.value;\n        setSearchText(text);\n        const filteredImages = images.filter((image)=>image.description.toLowerCase().includes(text.toLowerCase()));\n        setSearchedImages(filteredImages);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    background: \"#000000\",\n                    color: \"#fff\",\n                    padding: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Global Candidate Showcase\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row pt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-12\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                fullWidth: true,\n                                id: \"search\",\n                                label: \"Search descriptions...\",\n                                variant: \"outlined\",\n                                value: searchText,\n                                onChange: handleSearchChange\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row pt-2\",\n                        children: (_this = searchText ? searchedImages : images) === null || _this === void 0 ? void 0 : _this.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_ImageCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    image: image\n                                }, image.id, false, {\n                                    fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, image.id, false, {\n                                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    searchText && searchedImages.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"No candidate meets required skills\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"kV16ENRk25F103dCJvrc1VgzTX8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7QUFFaEI7QUFDYztBQUNqQjtBQUNXO0FBRWhELE1BQU1PLFFBQVE7UUFBQyxFQUFFQyxNQUFNLEVBQUU7UUF5Q2JDOztJQXhDVixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0csNkNBQU9BO0lBQ25DLE1BQU1NLFNBQVNSLHNEQUFTQTtJQUV4QixNQUFNLENBQUNNLFlBQVlHLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXZELG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0ZBQWdGO0lBQ2hGLE1BQU07SUFDTixVQUFVO0lBRVYsTUFBTWUscUJBQXFCLENBQUNDO1FBQzFCLE1BQU1DLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUMzQlAsY0FBY0s7UUFDZCxNQUFNRyxpQkFBaUJaLE9BQU9hLE1BQU0sQ0FBQ0MsQ0FBQUEsUUFDbkNBLE1BQU1DLFdBQVcsQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNSLEtBQUtPLFdBQVc7UUFFM0RWLGtCQUFrQk07SUFDcEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNNO2dCQUFJQyxPQUFPO29CQUFFQyxXQUFXO29CQUFVQyxZQUFZO29CQUFXQyxPQUFPO29CQUFRQyxTQUFTO2dCQUFPOzBCQUN2Riw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDTjtnQkFBSU8sV0FBVTs7a0NBQ2IsOERBQUNQO3dCQUFJTyxXQUFVO2tDQUNiLDRFQUFDUDs0QkFBSU8sV0FBVTtzQ0FDYiw0RUFBQzNCLCtEQUFTQTtnQ0FDUjRCLFNBQVM7Z0NBQ1RDLElBQUc7Z0NBQ0hDLE9BQU07Z0NBQ05DLFNBQVE7Z0NBQ1JsQixPQUFPVjtnQ0FDUDZCLFVBQVV2Qjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJaEIsOERBQUNXO3dCQUFJTyxXQUFVO21DQUNYeEIsUUFBQUEsYUFBYUksaUJBQWlCTCxvQkFBOUJDLDRCQUFELE1BQXdDOEIsR0FBRyxDQUFDLENBQUNqQixzQkFDNUMsOERBQUNJO2dDQUFtQk8sV0FBVTswQ0FDNUIsNEVBQUM3QixtRUFBU0E7b0NBQWdCa0IsT0FBT0E7bUNBQWpCQSxNQUFNYSxFQUFFOzs7OzsrQkFEaEJiLE1BQU1hLEVBQUU7Ozs7Ozs7Ozs7b0JBS3JCMUIsY0FBY0ksZUFBZTJCLE1BQU0sS0FBSyxtQkFDdkMsOERBQUNkO2tDQUFJOzs7Ozs7Ozs7Ozs7OztBQUtmO0dBckRNbkI7O1FBRVdKLGtEQUFTQTs7O0tBRnBCSTs7QUF5RU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBJbWFnZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvSW1hZ2VDYXJkXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuXG5jb25zdCBJbmRleCA9ICh7IGltYWdlcyB9KSA9PiB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoZWRJbWFnZXMsIHNldFNlYXJjaGVkSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghdXNlcikge1xuICAvLyAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgaWYgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gIC8vICAgfVxuICAvLyB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0U2VhcmNoVGV4dCh0ZXh0KTtcbiAgICBjb25zdCBmaWx0ZXJlZEltYWdlcyA9IGltYWdlcy5maWx0ZXIoaW1hZ2UgPT5cbiAgICAgIGltYWdlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgc2V0U2VhcmNoZWRJbWFnZXMoZmlsdGVyZWRJbWFnZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIiwgY29sb3I6IFwiI2ZmZlwiLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgPGgxPkdsb2JhbCBDYW5kaWRhdGUgU2hvd2Nhc2U8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggZGVzY3JpcHRpb25zLi4uXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHQtMlwiPlxuICAgICAgICAgIHsoc2VhcmNoVGV4dCA/IHNlYXJjaGVkSW1hZ2VzIDogaW1hZ2VzKT8ubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlLmlkfSBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VDYXJkIGtleT17aW1hZ2UuaWR9IGltYWdlPXtpbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlYXJjaFRleHQgJiYgc2VhcmNoZWRJbWFnZXMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICA8ZGl2Pk5vIGNhbmRpZGF0ZSBtZWV0cyByZXF1aXJlZCBza2lsbHM8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9pbWFnZXMnKTtcbiAgICByZXR1cm4geyBcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGltYWdlczogZGF0YSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW1hZ2VzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgXG4gICAgICBwcm9wczoge1xuICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIkltYWdlQ2FyZCIsIkNvbnRleHQiLCJUZXh0RmllbGQiLCJJbmRleCIsImltYWdlcyIsInNlYXJjaFRleHQiLCJ1c2VyIiwicm91dGVyIiwic2V0U2VhcmNoVGV4dCIsInNlYXJjaGVkSW1hZ2VzIiwic2V0U2VhcmNoZWRJbWFnZXMiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJlIiwidGV4dCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWRJbWFnZXMiLCJmaWx0ZXIiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImgxIiwiY2xhc3NOYW1lIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbCIsInZhcmlhbnQiLCJvbkNoYW5nZSIsIm1hcCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});