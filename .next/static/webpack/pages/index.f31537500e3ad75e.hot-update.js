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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortfolioSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portfolio */ \"./components/Portfolio/index.jsx\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\nfunction PortfolioSlider() {\n    const portfolioData = [\n        {\n            title: \"Home Exterior\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/arch1.jpg\"\n        },\n        {\n            title: \"Colorful Art Work\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/portfolio_2.jpeg\"\n        },\n        {\n            title: \"Colorful Art Work\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/portfolio_0.jpg\"\n        },\n        {\n            title: \"Colorful Art Work\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/portfolio_3.jpeg\"\n        }\n    ];\n    /** Slider Settings **/ const settings = {\n        className: \"center\",\n        centerMode: true,\n        infinite: true,\n        centerPadding: \"0\",\n        slidesToShow: 3,\n        speed: 500,\n        dots: true,\n        arrows: false,\n        responsive: [\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ...settings,\n        className: \"cs-slider cs-style3 cs-gap-24\",\n        children: portfolioData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Portfolio__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: item.title,\n                    subtitle: item.subtitle,\n                    href: item.href,\n                    src: item.src\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c = PortfolioSlider;\nvar _c;\n$RefreshReg$(_c, \"PortfolioSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9Qb3J0Zm9saW9TbGlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNXO0FBQ1o7QUFDUztBQUVsQixTQUFTSTtJQUN0QixNQUFNQyxnQkFBZ0I7UUFDcEI7WUFDRUMsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO0tBQ0Q7SUFFRCxxQkFBcUIsR0FDckIsTUFBTUMsV0FBVztRQUNmQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxlQUFlO1FBQ2ZDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFFBQU87UUFDUEMsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaVixVQUFVO29CQUNSSyxjQUFjO2dCQUNoQjtZQUNGO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDWixtREFBTUE7UUFBRSxHQUFHTyxRQUFRO1FBQUVDLFdBQVU7a0JBQzdCTixjQUFjZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN4Qiw4REFBQ3JCLDRDQUFHQTswQkFDRiw0RUFBQ0Qsa0RBQVNBO29CQUNSSyxPQUFPZ0IsS0FBS2hCLEtBQUs7b0JBQ2pCQyxVQUFVZSxLQUFLZixRQUFRO29CQUN2QkMsTUFBTWMsS0FBS2QsSUFBSTtvQkFDZkMsS0FBS2EsS0FBS2IsR0FBRzs7Ozs7O2VBTFBjOzs7Ozs7Ozs7O0FBV2xCO0tBOUR3Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2xpZGVyL1BvcnRmb2xpb1NsaWRlci5qc3g/ZTc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gJy4uL1BvcnRmb2xpbydcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2J1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb1NsaWRlcigpIHtcbiAgY29uc3QgcG9ydGZvbGlvRGF0YSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTonSG9tZSBFeHRlcmlvcicsXG4gICAgICBzdWJ0aXRsZTonU2VlIERldGFpbHMnLFxuICAgICAgaHJlZjonL3BvcnRmb2xpby9wb3J0Zm9saW8tZGV0YWlscycsXG4gICAgICBzcmM6Jy9pbWFnZXMvYXJjaDEuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6J0NvbG9yZnVsIEFydCBXb3JrJyxcbiAgICAgIHN1YnRpdGxlOidTZWUgRGV0YWlscycsXG4gICAgICBocmVmOicvcG9ydGZvbGlvL3BvcnRmb2xpby1kZXRhaWxzJyxcbiAgICAgIHNyYzonL2ltYWdlcy9wb3J0Zm9saW9fMi5qcGVnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6J0NvbG9yZnVsIEFydCBXb3JrJyxcbiAgICAgIHN1YnRpdGxlOidTZWUgRGV0YWlscycsXG4gICAgICBocmVmOicvcG9ydGZvbGlvL3BvcnRmb2xpby1kZXRhaWxzJyxcbiAgICAgIHNyYzonL2ltYWdlcy9wb3J0Zm9saW9fMC5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTonQ29sb3JmdWwgQXJ0IFdvcmsnLFxuICAgICAgc3VidGl0bGU6J1NlZSBEZXRhaWxzJyxcbiAgICAgIGhyZWY6Jy9wb3J0Zm9saW8vcG9ydGZvbGlvLWRldGFpbHMnLFxuICAgICAgc3JjOicvaW1hZ2VzL3BvcnRmb2xpb18zLmpwZWcnXG4gICAgfVxuICBdXG4gIFxuICAvKiogU2xpZGVyIFNldHRpbmdzICoqL1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBjZW50ZXJQYWRkaW5nOiBcIjBcIixcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBkb3RzOiB0cnVlLFxuICAgIGFycm93czpmYWxzZSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IGNsYXNzTmFtZT0nY3Mtc2xpZGVyIGNzLXN0eWxlMyBjcy1nYXAtMjQnPlxuICAgICAge3BvcnRmb2xpb0RhdGEubWFwKChpdGVtLCBpbmRleCk9PiAoXG4gICAgICAgIDxEaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPFBvcnRmb2xpbyBcbiAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfSBcbiAgICAgICAgICAgIHN1YnRpdGxlPXtpdGVtLnN1YnRpdGxlfVxuICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgc3JjPXtpdGVtLnNyY31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Rpdj5cbiAgICAgICkpfVxuICAgIDwvU2xpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3J0Zm9saW8iLCJEaXYiLCJTbGlkZXIiLCJQb3J0Zm9saW9TbGlkZXIiLCJwb3J0Zm9saW9EYXRhIiwidGl0bGUiLCJzdWJ0aXRsZSIsImhyZWYiLCJzcmMiLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImNlbnRlck1vZGUiLCJpbmZpbml0ZSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsImRvdHMiLCJhcnJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/PortfolioSlider.jsx\n"));

/***/ })

});