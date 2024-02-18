"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/candidate",{

/***/ "./pages/candidate.js":
/*!****************************!*\
  !*** ./pages/candidate.js ***!
  \****************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_forms_ImageCreateForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/ImageCreateForm.js */ \"./components/forms/ImageCreateForm.js\");\n/* harmony import */ var _components_routes_CreatorRoute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/routes/CreatorRoute.js */ \"./components/routes/CreatorRoute.js\");\n/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-file-resizer */ \"./node_modules/react-image-file-resizer/build/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ImageCreate = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        description: \"\",\n        email: \"\",\n        phone: \"\",\n        expectedSalary: \"\",\n        currentStatus: \"\",\n        nodejsExperience: \"\",\n        reactjsExperience: \"\",\n        uploading: false,\n        loading: false\n    });\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [uploadButtonText, setUploadButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Upload Image\");\n    const [opencandidate, setOpencandidate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleImage = (e)=>{\n        let file = e.target.files[0];\n        setPreview(window.URL.createObjectURL(file));\n        setUploadButtonText(file.name);\n        setValues({\n            ...values,\n            loading: true\n        });\n        // Resize\n        react_image_file_resizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].imageFileResizer(file, 720, 500, \"JPEG\", 100, 0, async (uri)=>{\n            try {\n                console.log(\"image uploader reached here\");\n                let { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/api/image/upload-image\", {\n                    image: uri\n                });\n                console.log(\"IMAGE UPLOADED\", data);\n                // Set image in state\n                setImage(data);\n                setValues({\n                    ...values,\n                    loading: false\n                });\n            } catch (err) {\n                console.log(err);\n                setValues({\n                    ...values,\n                    loading: false\n                });\n                (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(\"Candidate upload failed. Try later.\");\n            }\n        });\n    };\n    const handleChange = (e)=>{\n        setValues({\n            ...values,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            console.log(\"yes i reached here\");\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/api/imagecandidate\", {\n                ...values,\n                image\n            });\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)(\"Great Candidate is created\");\n            router.push(\"/creator\");\n        } catch (err) {\n            console.log(\"Error:\", err);\n        // Handle error and show appropriate message\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"0 20px\"\n        },\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    textAlign: \"center\",\n                    background: \"#000000\",\n                    color: \"#fff\",\n                    padding: \"20px\"\n                },\n                children: \"Candidate Information\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\candidate.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-3 pb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_ImageCreateForm_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    handleChange: handleChange,\n                    handleImage: handleImage,\n                    handleSubmit: handleSubmit,\n                    values: values,\n                    setValues: setValues,\n                    preview: preview,\n                    uploadButtonText: uploadButtonText,\n                    opencandidate: opencandidate\n                }, void 0, false, {\n                    fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\candidate.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\candidate.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Taskphin-Recruitment-Assistant\\\\client\\\\pages\\\\candidate.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCreate, \"AqP6cDhrxQdQGskcgzb2KfLCrVQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ImageCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCreate);\nvar _c;\n$RefreshReg$(_c, \"ImageCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQ1JDLFdBQVdBO29CQUNYYSxTQUFTQTtvQkFDVEUsa0JBQWtCQTtvQkFDbEJFLGVBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7R0FyRk1wQjs7UUFDV1Isa0RBQVNBOzs7S0FEcEJRO0FBdUZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbmRpZGF0ZS5qcz81MzVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2VDcmVhdGVGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1zL0ltYWdlQ3JlYXRlRm9ybS5qc1wiXG5pbXBvcnQgQ3JlYXRvclJvdXRlIGZyb20gXCIuLi9jb21wb25lbnRzL3JvdXRlcy9DcmVhdG9yUm91dGUuanNcIjtcbmltcG9ydCBSZXNpemVyIGZyb20gJ3JlYWN0LWltYWdlLWZpbGUtcmVzaXplcic7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5jb25zdCBJbWFnZUNyZWF0ZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBob25lOiBcIlwiLFxuICAgIGV4cGVjdGVkU2FsYXJ5OiBcIlwiLFxuICAgIGN1cnJlbnRTdGF0dXM6IFwiXCIsXG4gICAgbm9kZWpzRXhwZXJpZW5jZTogXCJcIixcbiAgICByZWFjdGpzRXhwZXJpZW5jZTogXCJcIixcbiAgICB1cGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9KTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXBsb2FkQnV0dG9uVGV4dCwgc2V0VXBsb2FkQnV0dG9uVGV4dF0gPSB1c2VTdGF0ZShcIlVwbG9hZCBJbWFnZVwiKTtcbiAgY29uc3QgW29wZW5jYW5kaWRhdGUsIHNldE9wZW5jYW5kaWRhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgXG4gIFxuICBjb25zdCBoYW5kbGVJbWFnZSA9IChlKSA9PiB7XG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBzZXRQcmV2aWV3KHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcbiAgICBzZXRVcGxvYWRCdXR0b25UZXh0KGZpbGUubmFtZSk7XG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xuXG4gICAgLy8gUmVzaXplXG4gICAgUmVzaXplci5kZWZhdWx0LmltYWdlRmlsZVJlc2l6ZXIoZmlsZSwgNzIwLCA1MDAsIFwiSlBFR1wiLCAxMDAsIDAsIGFzeW5jICh1cmkpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkZXIgcmVhY2hlZCBoZXJlXCIpXG4gICAgICAgIGxldCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2ltYWdlL3VwbG9hZC1pbWFnZVwiLCB7XG4gICAgICAgICAgaW1hZ2U6IHVyaSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU1BR0UgVVBMT0FERURcIiwgZGF0YSk7XG4gICAgICAgIC8vIFNldCBpbWFnZSBpbiBzdGF0ZVxuICAgICAgICBzZXRJbWFnZShkYXRhKTtcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICB0b2FzdChcIkNhbmRpZGF0ZSB1cGxvYWQgZmFpbGVkLiBUcnkgbGF0ZXIuXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcInllcyBpIHJlYWNoZWQgaGVyZVwiKVxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9pbWFnZWNhbmRpZGF0ZVwiLCB7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgaW1hZ2UsXG4gICAgICB9KTtcblxuICAgICAgdG9hc3QoXCJHcmVhdCBDYW5kaWRhdGUgaXMgY3JlYXRlZFwiKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2NyZWF0b3JcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnIpO1xuICAgICAgLy8gSGFuZGxlIGVycm9yIGFuZCBzaG93IGFwcHJvcHJpYXRlIG1lc3NhZ2VcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMCAyMHB4XCIgfX0+IHsvKiBBZGQgcGFkZGluZyBvbiB0aGUgc2lkZXMgKi99XG4gICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIiwgY29sb3I6IFwiI2ZmZlwiLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5DYW5kaWRhdGUgSW5mb3JtYXRpb248L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cbiAgICAgICAgPEltYWdlQ3JlYXRlRm9ybVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGhhbmRsZUltYWdlPXtoYW5kbGVJbWFnZX1cbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICBzZXRWYWx1ZXM9e3NldFZhbHVlc31cbiAgICAgICAgICBwcmV2aWV3PXtwcmV2aWV3fVxuICAgICAgICAgIHVwbG9hZEJ1dHRvblRleHQ9e3VwbG9hZEJ1dHRvblRleHR9XG4gICAgICAgICAgb3BlbmNhbmRpZGF0ZSA9IHtvcGVuY2FuZGlkYXRlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNyZWF0ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9ybSIsIkJ1dHRvbiIsImF4aW9zIiwiSW1hZ2VDcmVhdGVGb3JtIiwiQ3JlYXRvclJvdXRlIiwiUmVzaXplciIsInRvYXN0IiwiSW1hZ2VDcmVhdGUiLCJyb3V0ZXIiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJlbWFpbCIsInBob25lIiwiZXhwZWN0ZWRTYWxhcnkiLCJjdXJyZW50U3RhdHVzIiwibm9kZWpzRXhwZXJpZW5jZSIsInJlYWN0anNFeHBlcmllbmNlIiwidXBsb2FkaW5nIiwibG9hZGluZyIsImltYWdlIiwic2V0SW1hZ2UiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsInVwbG9hZEJ1dHRvblRleHQiLCJzZXRVcGxvYWRCdXR0b25UZXh0Iiwib3BlbmNhbmRpZGF0ZSIsInNldE9wZW5jYW5kaWRhdGUiLCJoYW5kbGVJbWFnZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkZWZhdWx0IiwiaW1hZ2VGaWxlUmVzaXplciIsInVyaSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicG9zdCIsImVyciIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiaDEiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/candidate.js\n"));

/***/ })

});