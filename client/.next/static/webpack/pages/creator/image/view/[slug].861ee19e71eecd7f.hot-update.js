"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/creator/image/view/[slug]",{

/***/ "./pages/creator/image/view/[slug].js":
/*!********************************************!*\
  !*** ./pages/creator/image/view/[slug].js ***!
  \********************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var _components_routes_CreatorRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/routes/CreatorRoute */ \"./components/routes/CreatorRoute.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _barrel_optimize_names_FaEdit_FaToggleOn_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaEdit,FaToggleOn,FaTrash!=!react-icons/fa */ \"__barrel_optimize__?names=FaEdit,FaToggleOn,FaTrash!=!./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // Import the delete icon\n\nconst ImageView = ()=>{\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadImage();\n    }, [\n        slug\n    ]);\n    const loadImage = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/image/\".concat(slug));\n            setImage(data);\n        } catch (error) {\n            console.error(\"Error loading image:\", error);\n        }\n    };\n    const handlePublish = async (e, imageId)=>{\n        try {\n            let answer = window.confirm(\"Are you sure you want to publish? It will be live.\");\n            if (!answer) return;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"/api/image/publish/\".concat(imageId));\n            setImage(data);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Congratulations! Your image is live.\");\n        } catch (err) {\n            console.error(\"Error publishing image:\", err);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Image publish failed. Try again.\");\n        }\n    };\n    const handleUnpublish = async (e, imageId)=>{\n        try {\n            let answer = window.confirm(\"Are you sure you want to unpublish?\");\n            if (!answer) return;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"/api/image/unpublish/\".concat(imageId));\n            setImage(data);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Candidate i\");\n        } catch (err) {\n            console.error(\"Error unpublishing image:\", err);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Image unpublish failed. Try again.\");\n        }\n    };\n    const handleDelete = async (imageId)=>{\n        try {\n            let answer = window.confirm(\"Are you sure you want to delete this image?\");\n            if (!answer) return;\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"delete\"](\"/api/image/\".concat(imageId));\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Image deleted successfully.\");\n            router.push(\"/\"); // Redirect to homepage after deletion\n        } catch (err) {\n            console.error(\"Error deleting image:\", err);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Image deletion failed. Try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_CreatorRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid pt-3\",\n            children: image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid pt-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d align-items-center pt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image.image ? image.image.Location : \"/1-8.jpg\",\n                                alt: \"Image Thumbnail\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"ml-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"text-primary\",\n                                            children: image.name\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: {\n                                                fontSize: \"10px\"\n                                            },\n                                            children: image.category\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"align-items-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEdit_FaToggleOn_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaEdit, {\n                                        style: {\n                                            cursor: \"pointer\",\n                                            marginRight: \"10px\",\n                                            color: \"#007bff\",\n                                            fontSize: \"20px\"\n                                        },\n                                        onClick: ()=>{\n                                            router.push(\"/creator/image/edit/\".concat(slug));\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEdit_FaToggleOn_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaToggleOn, {\n                                        style: {\n                                            cursor: \"pointer\",\n                                            color: image.published ? \"#4caf50\" : \"#d9534f\",\n                                            fontSize: \"20px\"\n                                        },\n                                        onClick: (e)=>image.published ? handleUnpublish(e, image.id) : handlePublish(e, image.id)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                        lineNumber: 97,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaEdit_FaToggleOn_FaTrash_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrash, {\n                                        style: {\n                                            cursor: \"pointer\",\n                                            color: \"#d9534f\",\n                                            fontSize: \"20px\"\n                                        },\n                                        onClick: ()=>handleDelete(image.id)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: image.description\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                                lineNumber: 118,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                            lineNumber: 117,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                        lineNumber: 116,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                        lineNumber: 121,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n                lineNumber: 73,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\creator\\\\image\\\\view\\\\[slug].js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageView, \"ZtVgktirIkdzlnjKvJSKACTzr4w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ImageView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageView);\nvar _c;\n$RefreshReg$(_c, \"ImageView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkMsT0FBT21CLElBQUksQ0FBQyx1QkFBNEIsT0FBTGxCO3dDQUNyQzs7Ozs7O2tEQUVGLDhEQUFDUCx1R0FBVUE7d0NBQ1RtQyxPQUFPOzRDQUNMRyxRQUFROzRDQUNSRSxPQUFPcEMsTUFBTXNDLFNBQVMsR0FBRyxZQUFZOzRDQUNyQ04sVUFBVTt3Q0FDWjt3Q0FDQUssU0FBUyxDQUFDMUIsSUFBT1gsTUFBTXNDLFNBQVMsR0FBR3BCLGdCQUFnQlAsR0FBR1gsTUFBTXVDLEVBQUUsSUFBSTdCLGNBQWNDLEdBQUdYLE1BQU11QyxFQUFFOzs7Ozs7a0RBRTdGLDhEQUFDMUMsb0dBQU9BO3dDQUNOa0MsT0FBTzs0Q0FDTEcsUUFBUTs0Q0FDUkUsT0FBTzs0Q0FDUEosVUFBVTt3Q0FDWjt3Q0FDQUssU0FBUyxJQUFNbEIsYUFBYW5CLE1BQU11QyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTFDLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNsQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUM3QixzREFBYUE7MENBQUVNLE1BQU15QyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUdyQyw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBdEhNM0M7O1FBRVdSLGtEQUFTQTs7O0tBRnBCUTtBQXdITiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdG9yL2ltYWdlL3ZpZXcvW3NsdWddLmpzPzhiMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDcmVhdG9yUm91dGUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvQ3JlYXRvclJvdXRlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgeyBGYUVkaXQsIEZhVG9nZ2xlT24sIEZhVHJhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7IC8vIEltcG9ydCB0aGUgZGVsZXRlIGljb25cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5jb25zdCBJbWFnZVZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkSW1hZ2UoKTtcbiAgfSwgW3NsdWddKTtcblxuICBjb25zdCBsb2FkSW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2ltYWdlLyR7c2x1Z31gKTtcbiAgICAgIHNldEltYWdlKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGltYWdlOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHVibGlzaCA9IGFzeW5jIChlLCBpbWFnZUlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHB1Ymxpc2g/IEl0IHdpbGwgYmUgbGl2ZS4nKTtcbiAgICAgIGlmICghYW5zd2VyKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KGAvYXBpL2ltYWdlL3B1Ymxpc2gvJHtpbWFnZUlkfWApO1xuICAgICAgc2V0SW1hZ2UoZGF0YSk7XG4gICAgICB0b2FzdCgnQ29uZ3JhdHVsYXRpb25zISBZb3VyIGltYWdlIGlzIGxpdmUuJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwdWJsaXNoaW5nIGltYWdlOicsIGVycik7XG4gICAgICB0b2FzdCgnSW1hZ2UgcHVibGlzaCBmYWlsZWQuIFRyeSBhZ2Fpbi4nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVW5wdWJsaXNoID0gYXN5bmMgKGUsIGltYWdlSWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdW5wdWJsaXNoPycpO1xuICAgICAgaWYgKCFhbnN3ZXIpIHJldHVybjtcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvaW1hZ2UvdW5wdWJsaXNoLyR7aW1hZ2VJZH1gKTtcbiAgICAgIHNldEltYWdlKGRhdGEpO1xuICAgICAgdG9hc3QoJ0NhbmRpZGF0ZSBpJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1bnB1Ymxpc2hpbmcgaW1hZ2U6JywgZXJyKTtcbiAgICAgIHRvYXN0KCdJbWFnZSB1bnB1Ymxpc2ggZmFpbGVkLiBUcnkgYWdhaW4uJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpbWFnZUlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGltYWdlPycpO1xuICAgICAgaWYgKCFhbnN3ZXIpIHJldHVybjtcblxuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL2ltYWdlLyR7aW1hZ2VJZH1gKTtcbiAgICAgIHRvYXN0KCdJbWFnZSBkZWxldGVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyZWN0IHRvIGhvbWVwYWdlIGFmdGVyIGRlbGV0aW9uXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBpbWFnZTonLCBlcnIpO1xuICAgICAgdG9hc3QoJ0ltYWdlIGRlbGV0aW9uIGZhaWxlZC4gVHJ5IGFnYWluLicpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDcmVhdG9yUm91dGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwdC0zXCI+XG4gICAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHQtMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkIGFsaWduLWl0ZW1zLWNlbnRlciBwdC0yXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLmltYWdlID8gaW1hZ2UuaW1hZ2UuTG9jYXRpb24gOiAnLzEtOC5qcGcnfVxuICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlIFRodW1ibmFpbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtM1wiPlxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPntpbWFnZS5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEwcHgnIH19PntpbWFnZS5jYXRlZ29yeX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPEZhRWRpdFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2NyZWF0b3IvaW1hZ2UvZWRpdC8ke3NsdWd9YCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZhVG9nZ2xlT25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW1hZ2UucHVibGlzaGVkID8gJyM0Y2FmNTAnIDogJyNkOTUzNGYnLCAvLyBHcmVlbiBpZiBwdWJsaXNoZWQsIFJlZCBpZiBub3RcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gKGltYWdlLnB1Ymxpc2hlZCA/IGhhbmRsZVVucHVibGlzaChlLCBpbWFnZS5pZCkgOiBoYW5kbGVQdWJsaXNoKGUsIGltYWdlLmlkKSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RmFUcmFzaFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicsIC8vIFJlZCBjb2xvciBmb3IgZGVsZXRlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpbWFnZS5pZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93bj57aW1hZ2UuZGVzY3JpcHRpb259PC9SZWFjdE1hcmtkb3duPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0NyZWF0b3JSb3V0ZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVmlldztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkNyZWF0b3JSb3V0ZSIsImF4aW9zIiwiUmVhY3RNYXJrZG93biIsIkZhRWRpdCIsIkZhVG9nZ2xlT24iLCJGYVRyYXNoIiwidG9hc3QiLCJJbWFnZVZpZXciLCJpbWFnZSIsInNldEltYWdlIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwibG9hZEltYWdlIiwiZGF0YSIsImdldCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVB1Ymxpc2giLCJlIiwiaW1hZ2VJZCIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJwdXQiLCJlcnIiLCJoYW5kbGVVbnB1Ymxpc2giLCJoYW5kbGVEZWxldGUiLCJkZWxldGUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiTG9jYXRpb24iLCJhbHQiLCJoNSIsIm5hbWUiLCJwIiwic3R5bGUiLCJmb250U2l6ZSIsImNhdGVnb3J5IiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm9uQ2xpY2siLCJwdWJsaXNoZWQiLCJpZCIsImhyIiwiZGVzY3JpcHRpb24iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/creator/image/view/[slug].js\n"));

/***/ })

});