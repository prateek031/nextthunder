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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortfolioSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portfolio */ \"./components/Portfolio/index.jsx\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\nfunction PortfolioSlider() {\n    const portfolioData = [\n        {\n            title: \" Home Exteriors\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/arch.webp\"\n        },\n        {\n            title: \"Exteriors Cladding\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/arch2.webp\"\n        },\n        {\n            title: \"Commercial  Space\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/arch3.webp\"\n        },\n        {\n            title: \" educational institution\",\n            subtitle: \"See Details\",\n            href: \"/portfolio/portfolio-details\",\n            src: \"/images/arch5.webp\"\n        }\n    ];\n    /** Slider Settings **/ const settings = {\n        className: \"center\",\n        centerMode: true,\n        infinite: true,\n        centerPadding: \"0\",\n        slidesToShow: 3,\n        speed: 500,\n        dots: true,\n        arrows: false,\n        responsive: [\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ...settings,\n        className: \"cs-slider cs-style3 cs-gap-24\",\n        children: portfolioData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Portfolio__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: item.title,\n                    subtitle: item.subtitle,\n                    href: item.href,\n                    src: item.src\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PortfolioSlider.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c = PortfolioSlider;\nvar _c;\n$RefreshReg$(_c, \"PortfolioSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9Qb3J0Zm9saW9TbGlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNXO0FBQ1o7QUFDUztBQUVsQixTQUFTSTtJQUN0QixNQUFNQyxnQkFBZ0I7UUFDcEI7WUFDRUMsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO1FBQ0E7WUFDRUgsT0FBTTtZQUNOQyxVQUFTO1lBQ1RDLE1BQUs7WUFDTEMsS0FBSTtRQUNOO0tBQ0Q7SUFFRCxxQkFBcUIsR0FDckIsTUFBTUMsV0FBVztRQUNmQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxlQUFlO1FBQ2ZDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFFBQU87UUFDUEMsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaVixVQUFVO29CQUNSSyxjQUFjO2dCQUNoQjtZQUNGO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDWixtREFBTUE7UUFBRSxHQUFHTyxRQUFRO1FBQUVDLFdBQVU7a0JBQzdCTixjQUFjZ0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN4Qiw4REFBQ3JCLDRDQUFHQTswQkFDRiw0RUFBQ0Qsa0RBQVNBO29CQUNSSyxPQUFPZ0IsS0FBS2hCLEtBQUs7b0JBQ2pCQyxVQUFVZSxLQUFLZixRQUFRO29CQUN2QkMsTUFBTWMsS0FBS2QsSUFBSTtvQkFDZkMsS0FBS2EsS0FBS2IsR0FBRzs7Ozs7O2VBTFBjOzs7Ozs7Ozs7O0FBV2xCO0tBOUR3Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2xpZGVyL1BvcnRmb2xpb1NsaWRlci5qc3g/ZTc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gJy4uL1BvcnRmb2xpbydcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2J1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb1NsaWRlcigpIHtcbiAgY29uc3QgcG9ydGZvbGlvRGF0YSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTonIEhvbWUgRXh0ZXJpb3JzJyxcbiAgICAgIHN1YnRpdGxlOidTZWUgRGV0YWlscycsXG4gICAgICBocmVmOicvcG9ydGZvbGlvL3BvcnRmb2xpby1kZXRhaWxzJyxcbiAgICAgIHNyYzonL2ltYWdlcy9hcmNoLndlYnAnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTonRXh0ZXJpb3JzIENsYWRkaW5nJyxcbiAgICAgIHN1YnRpdGxlOidTZWUgRGV0YWlscycsXG4gICAgICBocmVmOicvcG9ydGZvbGlvL3BvcnRmb2xpby1kZXRhaWxzJyxcbiAgICAgIHNyYzonL2ltYWdlcy9hcmNoMi53ZWJwJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6J0NvbW1lcmNpYWwgIFNwYWNlJyxcbiAgICAgIHN1YnRpdGxlOidTZWUgRGV0YWlscycsXG4gICAgICBocmVmOicvcG9ydGZvbGlvL3BvcnRmb2xpby1kZXRhaWxzJyxcbiAgICAgIHNyYzonL2ltYWdlcy9hcmNoMy53ZWJwJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6JyBlZHVjYXRpb25hbCBpbnN0aXR1dGlvbicsXG4gICAgICBzdWJ0aXRsZTonU2VlIERldGFpbHMnLFxuICAgICAgaHJlZjonL3BvcnRmb2xpby9wb3J0Zm9saW8tZGV0YWlscycsXG4gICAgICBzcmM6Jy9pbWFnZXMvYXJjaDUud2VicCdcbiAgICB9XG4gIF1cbiAgXG4gIC8qKiBTbGlkZXIgU2V0dGluZ3MgKiovXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGNlbnRlclBhZGRpbmc6IFwiMFwiLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzcGVlZDogNTAwLFxuICAgIGRvdHM6IHRydWUsXG4gICAgYXJyb3dzOmZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuICBcbiAgcmV0dXJuIChcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPSdjcy1zbGlkZXIgY3Mtc3R5bGUzIGNzLWdhcC0yNCc+XG4gICAgICB7cG9ydGZvbGlvRGF0YS5tYXAoKGl0ZW0sIGluZGV4KT0+IChcbiAgICAgICAgPERpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8UG9ydGZvbGlvIFxuICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9IFxuICAgICAgICAgICAgc3VidGl0bGU9e2l0ZW0uc3VidGl0bGV9XG4gICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGl2PlxuICAgICAgKSl9XG4gICAgPC9TbGlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvcnRmb2xpbyIsIkRpdiIsIlNsaWRlciIsIlBvcnRmb2xpb1NsaWRlciIsInBvcnRmb2xpb0RhdGEiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaHJlZiIsInNyYyIsInNldHRpbmdzIiwiY2xhc3NOYW1lIiwiY2VudGVyTW9kZSIsImluZmluaXRlIiwiY2VudGVyUGFkZGluZyIsInNsaWRlc1RvU2hvdyIsInNwZWVkIiwiZG90cyIsImFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Slider/PortfolioSlider.jsx\n"));

/***/ })

});