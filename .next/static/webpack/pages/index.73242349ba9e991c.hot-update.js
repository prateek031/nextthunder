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

/***/ "./components/Slider/PortfolioSlider.jsx":
/*!***********************************************!*\
  !*** ./components/Slider/PortfolioSlider.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortfolioSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portfolio */ \"./components/Portfolio/index.jsx\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\nfunction PortfolioSlider() {\n    const portfolioData = [\n        {\n            title: \" Home Exteriors\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/arch.jpg\"\n        },\n        {\n            title: \"Colorful Art Work\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/portfolio_2.jpeg\"\n        },\n        {\n            title: \"Colorful Art Work\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/portfolio_0.jpg\"\n        },\n        {\n            title: \"Colorful Art Work\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/portfolio_3.jpeg\"\n        }\n    ];\n    /** Slider Settings **/ const settings = {\n        className: \"center\",\n        centerMode: true,\n        infinite: true,\n        centerPadding: \"0\",\n        slidesToShow: 3,\n        speed: 500,\n        dots: true,\n        arrows: false,\n        responsive: [\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ...settings,\n        className: \"cs-slider cs-style3 cs-gap-24\",\n        children: portfolioData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Portfolio__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: item.title,\n                    subtitle: item.subtitle,\n                    href: item.href,\n                    src: item.src\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c = PortfolioSlider;\nvar _c;\n$RefreshReg$(_c, \"PortfolioSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9Qb3J0Zm9saW9TbGlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNXO0FBQ1o7QUFDUztBQUVsQixTQUFTSTtJQUN0QixNQUFNQyxnQkFBZ0I7UUFDcEI7WUFDRUMsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO0tBQ0Q7SUFFRCxxQkFBcUIsR0FDckIsTUFBTUMsV0FBVztRQUNmQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxlQUFlO1FBQ2ZDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFFBQU87UUFDUEMsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaVixVQUFVO29CQUNSSyxjQUFjO2dCQUNoQjtZQUNGO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDWixtREFBTUE7UUFBRSxHQUFHTyxRQUFRO1FBQUVDLFdBQVU7a0JBQzdCTixjQUFjZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN4Qiw4REFBQ3JCLDRDQUFHQTswQkFDRiw0RUFBQ0Qsa0RBQVNBO29CQUNSSyxPQUFPZ0IsS0FBS2hCLEtBQUs7b0JBQ2pCQyxVQUFVZSxLQUFLZixRQUFRO29CQUN2QkMsTUFBTWMsS0FBS2QsSUFBSTtvQkFDZkMsS0FBS2EsS0FBS2IsR0FBRzs7Ozs7O2VBTFBjOzs7Ozs7Ozs7O0FBV2xCO0tBOUR3Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2xpZGVyL1BvcnRmb2xpb1NsaWRlci5qc3g/ZTc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gJy4uL1BvcnRmb2xpbydcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2J1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb1NsaWRlcigpIHtcbiAgY29uc3QgcG9ydGZvbGlvRGF0YSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTonIEhvbWUgRXh0ZXJpb3JzJyxcbiAgICAgIHN1YnRpdGxlOidTZWUgRGV0YWlscycsXG4gICAgICBocmVmOicvcG9ydGZvbGlvL3BvcnRmb2xpby1kZXRhaWxzJyxcbiAgICAgIHNyYzonL2ltYWdlcy9hcmNoLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOidDb2xvcmZ1bCBBcnQgV29yaycsXG4gICAgICBzdWJ0aXRsZTonU2VlIERldGFpbHMnLFxuICAgICAgaHJlZjonL3BvcnRmb2xpby9wb3J0Zm9saW8tZGV0YWlscycsXG4gICAgICBzcmM6Jy9pbWFnZXMvcG9ydGZvbGlvXzIuanBlZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOidDb2xvcmZ1bCBBcnQgV29yaycsXG4gICAgICBzdWJ0aXRsZTonU2VlIERldGFpbHMnLFxuICAgICAgaHJlZjonL3BvcnRmb2xpby9wb3J0Zm9saW8tZGV0YWlscycsXG4gICAgICBzcmM6Jy9pbWFnZXMvcG9ydGZvbGlvXzAuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6J0NvbG9yZnVsIEFydCBXb3JrJyxcbiAgICAgIHN1YnRpdGxlOidTZWUgRGV0YWlscycsXG4gICAgICBocmVmOicvcG9ydGZvbGlvL3BvcnRmb2xpby1kZXRhaWxzJyxcbiAgICAgIHNyYzonL2ltYWdlcy9wb3J0Zm9saW9fMy5qcGVnJ1xuICAgIH1cbiAgXVxuICBcbiAgLyoqIFNsaWRlciBTZXR0aW5ncyAqKi9cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNlbnRlclwiLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgY2VudGVyUGFkZGluZzogXCIwXCIsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvd3M6ZmFsc2UsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBjbGFzc05hbWU9J2NzLXNsaWRlciBjcy1zdHlsZTMgY3MtZ2FwLTI0Jz5cbiAgICAgIHtwb3J0Zm9saW9EYXRhLm1hcCgoaXRlbSwgaW5kZXgpPT4gKFxuICAgICAgICA8RGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxQb3J0Zm9saW8gXG4gICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX0gXG4gICAgICAgICAgICBzdWJ0aXRsZT17aXRlbS5zdWJ0aXRsZX1cbiAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EaXY+XG4gICAgICApKX1cbiAgICA8L1NsaWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUG9ydGZvbGlvIiwiRGl2IiwiU2xpZGVyIiwiUG9ydGZvbGlvU2xpZGVyIiwicG9ydGZvbGlvRGF0YSIsInRpdGxlIiwic3VidGl0bGUiLCJocmVmIiwic3JjIiwic2V0dGluZ3MiLCJjbGFzc05hbWUiLCJjZW50ZXJNb2RlIiwiaW5maW5pdGUiLCJjZW50ZXJQYWRkaW5nIiwic2xpZGVzVG9TaG93Iiwic3BlZWQiLCJkb3RzIiwiYXJyb3dzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider/PortfolioSlider.jsx\n"));

/***/ })

});