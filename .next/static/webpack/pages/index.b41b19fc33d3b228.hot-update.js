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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TimelineSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Timeline */ \"./components/Timeline/index.jsx\");\n\n\n\n\n\nfunction TimelineSlider() {\n    const timelineData = [\n        [\n            {\n                year: \"Resin Impregnation\",\n                position: \"Kraft paper layers are infused with melamine and phenolic resins, ensuring durability and wear resistance.\"\n            },\n            {\n                year: \"Layering\",\n                position: \"Impregnated sheets are stacked, with decorative layers for visual appeal—printed designs, textures, or solid colors.\"\n            }\n        ],\n        [\n            {\n                year: \" Compression\",\n                position: \"Layers undergo intense compression, applying high pressure and temperature to cure resins, creating a durable composite.\"\n            },\n            {\n                year: \"Curing\",\n                position: \" Compressed sheets are cured, using heat to harden resins, bonding layers for a robust material.\"\n            }\n        ]\n    ];\n    /** Slider Settings **/ const SlickArrowLeft = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-prev slick-arrow\" + (currentSlide === 0 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === 0 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-left\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, this);\n    };\n    const SlickArrowRight = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-next slick-arrow\" + (currentSlide === slideCount - 1 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === slideCount - 1 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-right\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, this);\n    };\n    const settings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowLeft, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 64,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowRight, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 65,\n            columnNumber: 16\n        }, this),\n        arrows: false,\n        responsive: [\n            {\n                breakpoint: 470,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        className: \"cs-arrow_style3\",\n        children: timelineData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    columnData: item\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_c = TimelineSlider;\nvar _c;\n$RefreshReg$(_c, \"TimelineSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9UaW1lbGluZVNsaWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFFTDtBQUNSO0FBQ1U7QUFFcEIsU0FBU0k7SUFDdEIsTUFBTUMsZUFBZTtRQUNuQjtZQUNFO2dCQUNFQyxNQUFNO2dCQUNOQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsVUFBVTtZQUNaO1NBQ0Q7UUFDRDtZQUNFO2dCQUNFRCxNQUFNO2dCQUNOQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsVUFBVTtZQUNaO1NBQ0Q7S0FFRjtJQUVELHFCQUFxQixHQUNyQixNQUFNQyxpQkFBaUI7WUFBQyxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxPQUFPO2VBQzVELDhEQUFDQztZQUNFLEdBQUdELEtBQUs7WUFDVEUsV0FDRSwyQkFBNEJKLENBQUFBLGlCQUFpQixJQUFJLG9CQUFvQixFQUFDO1lBRXhFSyxlQUFZO1lBQ1pDLGlCQUFlTixpQkFBaUIsSUFBSSxPQUFPO3NCQUUzQyw0RUFBQ1QsZ0RBQUlBO2dCQUFDZ0IsTUFBSzs7Ozs7Ozs7Ozs7SUFDUjtJQUVQLE1BQU1DLGtCQUFrQjtZQUFDLEVBQUVSLFlBQVksRUFBRUMsVUFBVSxFQUFFLEdBQUdDLE9BQU87ZUFDN0QsOERBQUNDO1lBQ0UsR0FBR0QsS0FBSztZQUNURSxXQUNFLDJCQUNDSixDQUFBQSxpQkFBaUJDLGFBQWEsSUFBSSxvQkFBb0IsRUFBQztZQUUxREksZUFBWTtZQUNaQyxpQkFBZU4saUJBQWlCQyxhQUFhLElBQUksT0FBTztzQkFFeEQsNEVBQUNWLGdEQUFJQTtnQkFBQ2dCLE1BQUs7Ozs7Ozs7Ozs7O0lBQ1I7SUFFUCxNQUFNRSxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyx5QkFBVyw4REFBQ2hCOzs7OztRQUNaaUIseUJBQVcsOERBQUNSOzs7OztRQUNaUyxRQUFRO1FBQ1JDLFlBQVk7WUFDVjtnQkFDRUMsWUFBWTtnQkFDWlYsVUFBVTtvQkFDUkksY0FBYztnQkFDaEI7WUFDRjtTQUNEO0lBQ0g7SUFDQSxxQkFDRSw4REFBQ3JCLG1EQUFNQTtRQUFFLEdBQUdpQixRQUFRO1FBQUVMLFdBQVU7a0JBQzdCUixhQUFhd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2Qiw4REFBQzdCLDRDQUFHQTswQkFDRiw0RUFBQ0MsaURBQVFBO29CQUFDNkIsWUFBWUY7Ozs7OztlQURkQzs7Ozs7Ozs7OztBQU1sQjtLQTlFd0IzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci9UaW1lbGluZVNsaWRlci5qc3g/NjM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2JztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVsaW5lU2xpZGVyKCkge1xuICBjb25zdCB0aW1lbGluZURhdGEgPSBbXG4gICAgW1xuICAgICAge1xuICAgICAgICB5ZWFyOiAnUmVzaW4gSW1wcmVnbmF0aW9uJyxcbiAgICAgICAgcG9zaXRpb246IFwiS3JhZnQgcGFwZXIgbGF5ZXJzIGFyZSBpbmZ1c2VkIHdpdGggbWVsYW1pbmUgYW5kIHBoZW5vbGljIHJlc2lucywgZW5zdXJpbmcgZHVyYWJpbGl0eSBhbmQgd2VhciByZXNpc3RhbmNlLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeWVhcjogJ0xheWVyaW5nJyxcbiAgICAgICAgcG9zaXRpb246ICdJbXByZWduYXRlZCBzaGVldHMgYXJlIHN0YWNrZWQsIHdpdGggZGVjb3JhdGl2ZSBsYXllcnMgZm9yIHZpc3VhbCBhcHBlYWzigJRwcmludGVkIGRlc2lnbnMsIHRleHR1cmVzLCBvciBzb2xpZCBjb2xvcnMuJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHllYXI6ICcgQ29tcHJlc3Npb24nLFxuICAgICAgICBwb3NpdGlvbjogJ0xheWVycyB1bmRlcmdvIGludGVuc2UgY29tcHJlc3Npb24sIGFwcGx5aW5nIGhpZ2ggcHJlc3N1cmUgYW5kIHRlbXBlcmF0dXJlIHRvIGN1cmUgcmVzaW5zLCBjcmVhdGluZyBhIGR1cmFibGUgY29tcG9zaXRlLicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB5ZWFyOiAnQ3VyaW5nJyxcbiAgICAgICAgcG9zaXRpb246ICcgQ29tcHJlc3NlZCBzaGVldHMgYXJlIGN1cmVkLCB1c2luZyBoZWF0IHRvIGhhcmRlbiByZXNpbnMsIGJvbmRpbmcgbGF5ZXJzIGZvciBhIHJvYnVzdCBtYXRlcmlhbC4nLFxuICAgICAgfSxcbiAgICBdLFxuICBcbiAgXTtcblxuICAvKiogU2xpZGVyIFNldHRpbmdzICoqL1xuICBjb25zdCBTbGlja0Fycm93TGVmdCA9ICh7IGN1cnJlbnRTbGlkZSwgc2xpZGVDb3VudCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICdzbGljay1wcmV2IHNsaWNrLWFycm93JyArIChjdXJyZW50U2xpZGUgPT09IDAgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxuICAgICAgfVxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gMCA/IHRydWUgOiBmYWxzZX1cbiAgICA+XG4gICAgICA8SWNvbiBpY29uPVwiYmk6YXJyb3ctbGVmdFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIGNvbnN0IFNsaWNrQXJyb3dSaWdodCA9ICh7IGN1cnJlbnRTbGlkZSwgc2xpZGVDb3VudCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICdzbGljay1uZXh0IHNsaWNrLWFycm93JyArXG4gICAgICAgIChjdXJyZW50U2xpZGUgPT09IHNsaWRlQ291bnQgLSAxID8gJyBzbGljay1kaXNhYmxlZCcgOiAnJylcbiAgICAgIH1cbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICBhcmlhLWRpc2FibGVkPXtjdXJyZW50U2xpZGUgPT09IHNsaWRlQ291bnQgLSAxID8gdHJ1ZSA6IGZhbHNlfVxuICAgID5cbiAgICAgIDxJY29uIGljb249XCJiaTphcnJvdy1yaWdodFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAyLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHByZXZBcnJvdzogPFNsaWNrQXJyb3dMZWZ0IC8+LFxuICAgIG5leHRBcnJvdzogPFNsaWNrQXJyb3dSaWdodCAvPixcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDcwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPVwiY3MtYXJyb3dfc3R5bGUzXCI+XG4gICAgICB7dGltZWxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPERpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8VGltZWxpbmUgY29sdW1uRGF0YT17aXRlbX0gLz5cbiAgICAgICAgPC9EaXY+XG4gICAgICApKX1cbiAgICA8L1NsaWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJY29uIiwiU2xpZGVyIiwiRGl2IiwiVGltZWxpbmUiLCJUaW1lbGluZVNsaWRlciIsInRpbWVsaW5lRGF0YSIsInllYXIiLCJwb3NpdGlvbiIsIlNsaWNrQXJyb3dMZWZ0IiwiY3VycmVudFNsaWRlIiwic2xpZGVDb3VudCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXJpYS1oaWRkZW4iLCJhcmlhLWRpc2FibGVkIiwiaWNvbiIsIlNsaWNrQXJyb3dSaWdodCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29sdW1uRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/TimelineSlider.jsx\n"));

/***/ })

});