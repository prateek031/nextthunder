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

/***/ "./components/LogoList/index.jsx":
/*!***************************************!*\
  !*** ./components/LogoList/index.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n\n\n\nfunction LogoList() {\n    const partnerLogos = [\n        {\n            src: \"/images/wl.pm\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/partner_2.svg\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/partner_3.svg\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/partner_4.svg\",\n            alt: \"Partner\"\n        },\n        {\n            src: \"/images/partner_5.svg\",\n            alt: \"Partner\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"cs-partner_logo_wrap\",\n        children: partnerLogos.map((partnerLogo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cs-partner_logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: partnerLogo.src,\n                    alt: partnerLogo.alt\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\LogoList\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\LogoList\\\\index.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\LogoList\\\\index.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = LogoList;\nvar _c;\n$RefreshReg$(_c, \"LogoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ29MaXN0L2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0Q7QUFFVixTQUFTRTtJQUN0QixNQUFNQyxlQUFlO1FBQ25CO1lBQ0VDLEtBQUs7WUFDTEMsS0FBSztRQUNQO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRCxLQUFLO1lBQ0xDLEtBQUs7UUFDUDtRQUNBO1lBQ0VELEtBQUs7WUFDTEMsS0FBSztRQUNQO1FBQ0E7WUFDRUQsS0FBSztZQUNMQyxLQUFLO1FBQ1A7S0FDRDtJQUNELHFCQUNFLDhEQUFDSiw0Q0FBR0E7UUFBQ0ssV0FBVTtrQkFDWkgsYUFBYUksR0FBRyxDQUFDLENBQUNDLGFBQWFDLHNCQUM5Qiw4REFBQ0M7Z0JBQUlKLFdBQVU7MEJBQ2IsNEVBQUNLO29CQUFJUCxLQUFLSSxZQUFZSixHQUFHO29CQUFFQyxLQUFLRyxZQUFZSCxHQUFHOzs7Ozs7ZUFEWEk7Ozs7Ozs7Ozs7QUFNOUM7S0FoQ3dCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ29MaXN0L2luZGV4LmpzeD8zOTBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ29MaXN0KCkge1xyXG4gIGNvbnN0IHBhcnRuZXJMb2dvcyA9IFtcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltYWdlcy93bC5wbScsXHJcbiAgICAgIGFsdDogJ1BhcnRuZXInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltYWdlcy9wYXJ0bmVyXzIuc3ZnJyxcclxuICAgICAgYWx0OiAnUGFydG5lcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICcvaW1hZ2VzL3BhcnRuZXJfMy5zdmcnLFxyXG4gICAgICBhbHQ6ICdQYXJ0bmVyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJy9pbWFnZXMvcGFydG5lcl80LnN2ZycsXHJcbiAgICAgIGFsdDogJ1BhcnRuZXInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltYWdlcy9wYXJ0bmVyXzUuc3ZnJyxcclxuICAgICAgYWx0OiAnUGFydG5lcicsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaXYgY2xhc3NOYW1lPVwiY3MtcGFydG5lcl9sb2dvX3dyYXBcIj5cclxuICAgICAge3BhcnRuZXJMb2dvcy5tYXAoKHBhcnRuZXJMb2dvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3MtcGFydG5lcl9sb2dvXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cGFydG5lckxvZ28uc3JjfSBhbHQ9e3BhcnRuZXJMb2dvLmFsdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L0Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRpdiIsIkxvZ29MaXN0IiwicGFydG5lckxvZ29zIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwibWFwIiwicGFydG5lckxvZ28iLCJpbmRleCIsImRpdiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LogoList/index.jsx\n"));

/***/ })

});