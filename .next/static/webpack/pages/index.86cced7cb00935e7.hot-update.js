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

/***/ "./components/Slider/TimelineSlider.jsx":
/*!**********************************************!*\
  !*** ./components/Slider/TimelineSlider.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TimelineSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Timeline */ \"./components/Timeline/index.jsx\");\n\n\n\n\n\nfunction TimelineSlider() {\n    const timelineData = [\n        [\n            {\n                year: \"Resin Impregnation\",\n                name: \"Kraft paper layers are infused with melamine and phenolic resins, ensuring durability and wear resistance.\"\n            },\n            {\n                year: \"Compression\",\n                name: \"  Layers undergo intense compression, applying high pressure and temperature to cure resins, creating a durable composite.\"\n            }\n        ],\n        [\n            {\n                year: \"Curing\",\n                name: \"Compressed sheets are cured, using heat to harden resins, bonding layers for a robust material.\"\n            },\n            {\n                year: \"Compression\",\n                name: \"  Layers undergo intense compression, applying high pressure and temperature to cure resins, creating a durable composite.\"\n            }\n        ]\n    ];\n    /** Slider Settings **/ const SlickArrowLeft = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-prev slick-arrow\" + (currentSlide === 0 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === 0 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-left\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 38,\n            columnNumber: 5\n        }, this);\n    };\n    const SlickArrowRight = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-next slick-arrow\" + (currentSlide === slideCount - 1 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === slideCount - 1 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-right\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 50,\n            columnNumber: 5\n        }, this);\n    };\n    const settings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowLeft, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 68,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowRight, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 69,\n            columnNumber: 16\n        }, this),\n        arrows: false,\n        responsive: [\n            {\n                breakpoint: 470,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        className: \"cs-arrow_style3\",\n        children: timelineData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    columnData: item\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_c = TimelineSlider;\nvar _c;\n$RefreshReg$(_c, \"TimelineSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9UaW1lbGluZVNsaWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFFTDtBQUNSO0FBQ1U7QUFFcEIsU0FBU0k7SUFDdEIsTUFBTUMsZUFBZTtRQUNuQjtZQUNFO2dCQUNFQyxNQUFNO2dCQUNOQyxNQUFNO1lBRVI7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsTUFBTTtZQUdSO1NBQ0Q7UUFDRDtZQUNFO2dCQUNFRCxNQUFNO2dCQUNOQyxNQUFNO1lBRVI7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1NBQ0Q7S0FFRjtJQUVELHFCQUFxQixHQUNyQixNQUFNQyxpQkFBaUI7WUFBQyxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxPQUFPO2VBQzVELDhEQUFDQztZQUNFLEdBQUdELEtBQUs7WUFDVEUsV0FDRSwyQkFBNEJKLENBQUFBLGlCQUFpQixJQUFJLG9CQUFvQixFQUFDO1lBRXhFSyxlQUFZO1lBQ1pDLGlCQUFlTixpQkFBaUIsSUFBSSxPQUFPO3NCQUUzQyw0RUFBQ1QsZ0RBQUlBO2dCQUFDZ0IsTUFBSzs7Ozs7Ozs7Ozs7SUFDUjtJQUVQLE1BQU1DLGtCQUFrQjtZQUFDLEVBQUVSLFlBQVksRUFBRUMsVUFBVSxFQUFFLEdBQUdDLE9BQU87ZUFDN0QsOERBQUNDO1lBQ0UsR0FBR0QsS0FBSztZQUNURSxXQUNFLDJCQUNDSixDQUFBQSxpQkFBaUJDLGFBQWEsSUFBSSxvQkFBb0IsRUFBQztZQUUxREksZUFBWTtZQUNaQyxpQkFBZU4saUJBQWlCQyxhQUFhLElBQUksT0FBTztzQkFFeEQsNEVBQUNWLGdEQUFJQTtnQkFBQ2dCLE1BQUs7Ozs7Ozs7Ozs7O0lBQ1I7SUFFUCxNQUFNRSxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyx5QkFBVyw4REFBQ2hCOzs7OztRQUNaaUIseUJBQVcsOERBQUNSOzs7OztRQUNaUyxRQUFRO1FBQ1JDLFlBQVk7WUFDVjtnQkFDRUMsWUFBWTtnQkFDWlYsVUFBVTtvQkFDUkksY0FBYztnQkFDaEI7WUFDRjtTQUNEO0lBQ0g7SUFDQSxxQkFDRSw4REFBQ3JCLG1EQUFNQTtRQUFFLEdBQUdpQixRQUFRO1FBQUVMLFdBQVU7a0JBQzdCUixhQUFhd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2Qiw4REFBQzdCLDRDQUFHQTswQkFDRiw0RUFBQ0MsaURBQVFBO29CQUFDNkIsWUFBWUY7Ozs7OztlQURkQzs7Ozs7Ozs7OztBQU1sQjtLQWxGd0IzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci9UaW1lbGluZVNsaWRlci5qc3g/NjM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2JztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVsaW5lU2xpZGVyKCkge1xuICBjb25zdCB0aW1lbGluZURhdGEgPSBbXG4gICAgW1xuICAgICAge1xuICAgICAgICB5ZWFyOiAnUmVzaW4gSW1wcmVnbmF0aW9uJyxcbiAgICAgICAgbmFtZTogJ0tyYWZ0IHBhcGVyIGxheWVycyBhcmUgaW5mdXNlZCB3aXRoIG1lbGFtaW5lIGFuZCBwaGVub2xpYyByZXNpbnMsIGVuc3VyaW5nIGR1cmFiaWxpdHkgYW5kIHdlYXIgcmVzaXN0YW5jZS4nLFxuICAgICAgIFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeWVhcjogJ0NvbXByZXNzaW9uJyxcbiAgICAgICAgbmFtZTogJyAgTGF5ZXJzIHVuZGVyZ28gaW50ZW5zZSBjb21wcmVzc2lvbiwgYXBwbHlpbmcgaGlnaCBwcmVzc3VyZSBhbmQgdGVtcGVyYXR1cmUgdG8gY3VyZSByZXNpbnMsIGNyZWF0aW5nIGEgZHVyYWJsZSBjb21wb3NpdGUuJyxcbiAgICAgICBcbiAgICAgICBcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHllYXI6ICdDdXJpbmcnLFxuICAgICAgICBuYW1lOiAnQ29tcHJlc3NlZCBzaGVldHMgYXJlIGN1cmVkLCB1c2luZyBoZWF0IHRvIGhhcmRlbiByZXNpbnMsIGJvbmRpbmcgbGF5ZXJzIGZvciBhIHJvYnVzdCBtYXRlcmlhbC4nLFxuICAgICAgICBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHllYXI6ICdDb21wcmVzc2lvbicsXG4gICAgICAgIG5hbWU6ICcgIExheWVycyB1bmRlcmdvIGludGVuc2UgY29tcHJlc3Npb24sIGFwcGx5aW5nIGhpZ2ggcHJlc3N1cmUgYW5kIHRlbXBlcmF0dXJlIHRvIGN1cmUgcmVzaW5zLCBjcmVhdGluZyBhIGR1cmFibGUgY29tcG9zaXRlLicsXG4gICAgICB9LFxuICAgIF0sXG4gIFxuICBdO1xuXG4gIC8qKiBTbGlkZXIgU2V0dGluZ3MgKiovXG4gIGNvbnN0IFNsaWNrQXJyb3dMZWZ0ID0gKHsgY3VycmVudFNsaWRlLCBzbGlkZUNvdW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPGRpdlxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgJ3NsaWNrLXByZXYgc2xpY2stYXJyb3cnICsgKGN1cnJlbnRTbGlkZSA9PT0gMCA/ICcgc2xpY2stZGlzYWJsZWQnIDogJycpXG4gICAgICB9XG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgYXJpYS1kaXNhYmxlZD17Y3VycmVudFNsaWRlID09PSAwID8gdHJ1ZSA6IGZhbHNlfVxuICAgID5cbiAgICAgIDxJY29uIGljb249XCJiaTphcnJvdy1sZWZ0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgY29uc3QgU2xpY2tBcnJvd1JpZ2h0ID0gKHsgY3VycmVudFNsaWRlLCBzbGlkZUNvdW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPGRpdlxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgJ3NsaWNrLW5leHQgc2xpY2stYXJyb3cnICtcbiAgICAgICAgKGN1cnJlbnRTbGlkZSA9PT0gc2xpZGVDb3VudCAtIDEgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxuICAgICAgfVxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gc2xpZGVDb3VudCAtIDEgPyB0cnVlIDogZmFsc2V9XG4gICAgPlxuICAgICAgPEljb24gaWNvbj1cImJpOmFycm93LXJpZ2h0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcHJldkFycm93OiA8U2xpY2tBcnJvd0xlZnQgLz4sXG4gICAgbmV4dEFycm93OiA8U2xpY2tBcnJvd1JpZ2h0IC8+LFxuICAgIGFycm93czogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA0NzAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBjbGFzc05hbWU9XCJjcy1hcnJvd19zdHlsZTNcIj5cbiAgICAgIHt0aW1lbGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8RGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxUaW1lbGluZSBjb2x1bW5EYXRhPXtpdGVtfSAvPlxuICAgICAgICA8L0Rpdj5cbiAgICAgICkpfVxuICAgIDwvU2xpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkljb24iLCJTbGlkZXIiLCJEaXYiLCJUaW1lbGluZSIsIlRpbWVsaW5lU2xpZGVyIiwidGltZWxpbmVEYXRhIiwieWVhciIsIm5hbWUiLCJTbGlja0Fycm93TGVmdCIsImN1cnJlbnRTbGlkZSIsInNsaWRlQ291bnQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImFyaWEtaGlkZGVuIiwiYXJpYS1kaXNhYmxlZCIsImljb24iLCJTbGlja0Fycm93UmlnaHQiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhcnJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNvbHVtbkRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider/TimelineSlider.jsx\n"));

/***/ })

});