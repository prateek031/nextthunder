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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TimelineSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Timeline */ \"./components/Timeline/index.jsx\");\n\n\n\n\n\nfunction TimelineSlider() {\n    const timelineData = [\n        [\n            {\n                year: \"Highly UV Resistant\",\n                position: \"A highly UV resistant laminate sheet is a protective material designed to withstand prolonged exposure to ultraviolet (UV) radiation from the sun. It is commonly used to prevent fading, discoloration, and degradation of surfaces, making it ideal for outdoor applications such as signage, outdoor furniture, and architectural elements.\"\n            },\n            {\n                year: \"Fire Retardant\",\n                position: \"Fire-retardant laminate sheets are designed to inhibit the spread of flames and slow down the combustion process. These sheets are treated with fire-resistant additives during manufacturing, enhancing their ability to resist ignition and reduce the potential for fire to spread. These Hpl sheets gives the best example of Fire Retardant\"\n            }\n        ],\n        [\n            {\n                year: \"Scratch Proof\",\n                position: \"Scratch-proof laminate sheets are durable and resilient surface materials commonly used in furniture and flooring applications. These sheets are designed to resist scratches, scuffs, and abrasions, maintaining their appearance and functionality over time. They are a popular choice for their protective properties and aesthetic appeal.\"\n            },\n            {\n                year: \"Termite Resistant\",\n                position: \"Termite-resistant laminate sheets are specialized surface materials that offer protection against termite infestations. These sheets are engineered to deter termites from damaging furniture, flooring, or other applications. Their unique composition and treatment make them a reliable choice for environments prone to termite activity.\"\n            }\n        ],\n        [\n            {\n                year: \"Solvent Resistant\",\n                position: \"Solvent-resistant laminate sheets are designed to withstand exposure to various solvents and chemicals without losing their integrity. These sheets are commonly used in industrial and commercial settings where there's a need for surfaces that can handle frequent contact with substances like oils, cleaning agents, and other solvents.\"\n            },\n            {\n                year: \"Eco Friendly\",\n                position: \"Eco-friendly laminate sheets are sustainable surface materials crafted with consideration for the environment. These sheets are made from renewable materials and utilize low-impact manufacturing processes. They offer a balance between aesthetics and eco-consciousness, making them a responsible choice.\"\n            }\n        ]\n    ];\n    /** Slider Settings **/ const SlickArrowLeft = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-prev slick-arrow\" + (currentSlide === 0 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === 0 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-left\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        }, this);\n    };\n    const SlickArrowRight = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-next slick-arrow\" + (currentSlide === slideCount - 1 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === slideCount - 1 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-right\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 58,\n            columnNumber: 5\n        }, this);\n    };\n    const settings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 2,\n        slidesToScroll: 1,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowLeft, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 76,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowRight, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n            lineNumber: 77,\n            columnNumber: 16\n        }, this),\n        arrows: false,\n        responsive: [\n            {\n                breakpoint: 470,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        className: \"cs-arrow_style3\",\n        children: timelineData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Timeline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    columnData: item\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TimelineSlider.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_c = TimelineSlider;\nvar _c;\n$RefreshReg$(_c, \"TimelineSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9UaW1lbGluZVNsaWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFFTDtBQUNSO0FBQ1U7QUFFcEIsU0FBU0k7SUFDdEIsTUFBTUMsZUFBZTtRQUNuQjtZQUNFO2dCQUNFQyxNQUFNO2dCQUNOQyxVQUFVO1lBRVo7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsVUFBVTtZQUVaO1NBQ0Q7UUFDRDtZQUNFO2dCQUNFRCxNQUFNO2dCQUNOQyxVQUFTO1lBRVg7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsVUFBVTtZQUNaO1NBQ0Q7UUFDRDtZQUNFO2dCQUNFRCxNQUFNO2dCQUNOQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsVUFBVTtZQUNkO1NBQU07S0FFUDtJQUVELHFCQUFxQixHQUNyQixNQUFNQyxpQkFBaUI7WUFBQyxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxPQUFPO2VBQzVELDhEQUFDQztZQUNFLEdBQUdELEtBQUs7WUFDVEUsV0FDRSwyQkFBNEJKLENBQUFBLGlCQUFpQixJQUFJLG9CQUFvQixFQUFDO1lBRXhFSyxlQUFZO1lBQ1pDLGlCQUFlTixpQkFBaUIsSUFBSSxPQUFPO3NCQUUzQyw0RUFBQ1QsZ0RBQUlBO2dCQUFDZ0IsTUFBSzs7Ozs7Ozs7Ozs7SUFDUjtJQUVQLE1BQU1DLGtCQUFrQjtZQUFDLEVBQUVSLFlBQVksRUFBRUMsVUFBVSxFQUFFLEdBQUdDLE9BQU87ZUFDN0QsOERBQUNDO1lBQ0UsR0FBR0QsS0FBSztZQUNURSxXQUNFLDJCQUNDSixDQUFBQSxpQkFBaUJDLGFBQWEsSUFBSSxvQkFBb0IsRUFBQztZQUUxREksZUFBWTtZQUNaQyxpQkFBZU4saUJBQWlCQyxhQUFhLElBQUksT0FBTztzQkFFeEQsNEVBQUNWLGdEQUFJQTtnQkFBQ2dCLE1BQUs7Ozs7Ozs7Ozs7O0lBQ1I7SUFFUCxNQUFNRSxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyx5QkFBVyw4REFBQ2hCOzs7OztRQUNaaUIseUJBQVcsOERBQUNSOzs7OztRQUNaUyxRQUFRO1FBQ1JDLFlBQVk7WUFDVjtnQkFDRUMsWUFBWTtnQkFDWlYsVUFBVTtvQkFDUkksY0FBYztnQkFDaEI7WUFDRjtTQUNEO0lBQ0g7SUFDQSxxQkFDRSw4REFBQ3JCLG1EQUFNQTtRQUFFLEdBQUdpQixRQUFRO1FBQUVMLFdBQVU7a0JBQzdCUixhQUFhd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2Qiw4REFBQzdCLDRDQUFHQTswQkFDRiw0RUFBQ0MsaURBQVFBO29CQUFDNkIsWUFBWUY7Ozs7OztlQURkQzs7Ozs7Ozs7OztBQU1sQjtLQTFGd0IzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci9UaW1lbGluZVNsaWRlci5qc3g/NjM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2JztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVsaW5lU2xpZGVyKCkge1xuICBjb25zdCB0aW1lbGluZURhdGEgPSBbXG4gICAgW1xuICAgICAge1xuICAgICAgICB5ZWFyOiAnSGlnaGx5IFVWIFJlc2lzdGFudCcsXG4gICAgICAgIHBvc2l0aW9uOiAnQSBoaWdobHkgVVYgcmVzaXN0YW50IGxhbWluYXRlIHNoZWV0IGlzIGEgcHJvdGVjdGl2ZSBtYXRlcmlhbCBkZXNpZ25lZCB0byB3aXRoc3RhbmQgcHJvbG9uZ2VkIGV4cG9zdXJlIHRvIHVsdHJhdmlvbGV0IChVVikgcmFkaWF0aW9uIGZyb20gdGhlIHN1bi4gSXQgaXMgY29tbW9ubHkgdXNlZCB0byBwcmV2ZW50IGZhZGluZywgZGlzY29sb3JhdGlvbiwgYW5kIGRlZ3JhZGF0aW9uIG9mIHN1cmZhY2VzLCBtYWtpbmcgaXQgaWRlYWwgZm9yIG91dGRvb3IgYXBwbGljYXRpb25zIHN1Y2ggYXMgc2lnbmFnZSwgb3V0ZG9vciBmdXJuaXR1cmUsIGFuZCBhcmNoaXRlY3R1cmFsIGVsZW1lbnRzLicsXG4gICAgICAgXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB5ZWFyOiAnRmlyZSBSZXRhcmRhbnQnLFxuICAgICAgICBwb3NpdGlvbjogJ0ZpcmUtcmV0YXJkYW50IGxhbWluYXRlIHNoZWV0cyBhcmUgZGVzaWduZWQgdG8gaW5oaWJpdCB0aGUgc3ByZWFkIG9mIGZsYW1lcyBhbmQgc2xvdyBkb3duIHRoZSBjb21idXN0aW9uIHByb2Nlc3MuIFRoZXNlIHNoZWV0cyBhcmUgdHJlYXRlZCB3aXRoIGZpcmUtcmVzaXN0YW50IGFkZGl0aXZlcyBkdXJpbmcgbWFudWZhY3R1cmluZywgZW5oYW5jaW5nIHRoZWlyIGFiaWxpdHkgdG8gcmVzaXN0IGlnbml0aW9uIGFuZCByZWR1Y2UgdGhlIHBvdGVudGlhbCBmb3IgZmlyZSB0byBzcHJlYWQuIFRoZXNlIEhwbCBzaGVldHMgZ2l2ZXMgdGhlIGJlc3QgZXhhbXBsZSBvZiBGaXJlIFJldGFyZGFudCcsXG4gICAgICAgXG4gICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAge1xuICAgICAgICB5ZWFyOiAnU2NyYXRjaCBQcm9vZicsXG4gICAgICAgIHBvc2l0aW9uOidTY3JhdGNoLXByb29mIGxhbWluYXRlIHNoZWV0cyBhcmUgZHVyYWJsZSBhbmQgcmVzaWxpZW50IHN1cmZhY2UgbWF0ZXJpYWxzIGNvbW1vbmx5IHVzZWQgaW4gZnVybml0dXJlIGFuZCBmbG9vcmluZyBhcHBsaWNhdGlvbnMuIFRoZXNlIHNoZWV0cyBhcmUgZGVzaWduZWQgdG8gcmVzaXN0IHNjcmF0Y2hlcywgc2N1ZmZzLCBhbmQgYWJyYXNpb25zLCBtYWludGFpbmluZyB0aGVpciBhcHBlYXJhbmNlIGFuZCBmdW5jdGlvbmFsaXR5IG92ZXIgdGltZS4gVGhleSBhcmUgYSBwb3B1bGFyIGNob2ljZSBmb3IgdGhlaXIgcHJvdGVjdGl2ZSBwcm9wZXJ0aWVzIGFuZCBhZXN0aGV0aWMgYXBwZWFsLicsXG4gICAgICAgXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB5ZWFyOiAnVGVybWl0ZSBSZXNpc3RhbnQnLFxuICAgICAgICBwb3NpdGlvbjogJ1Rlcm1pdGUtcmVzaXN0YW50IGxhbWluYXRlIHNoZWV0cyBhcmUgc3BlY2lhbGl6ZWQgc3VyZmFjZSBtYXRlcmlhbHMgdGhhdCBvZmZlciBwcm90ZWN0aW9uIGFnYWluc3QgdGVybWl0ZSBpbmZlc3RhdGlvbnMuIFRoZXNlIHNoZWV0cyBhcmUgZW5naW5lZXJlZCB0byBkZXRlciB0ZXJtaXRlcyBmcm9tIGRhbWFnaW5nIGZ1cm5pdHVyZSwgZmxvb3JpbmcsIG9yIG90aGVyIGFwcGxpY2F0aW9ucy4gVGhlaXIgdW5pcXVlIGNvbXBvc2l0aW9uIGFuZCB0cmVhdG1lbnQgbWFrZSB0aGVtIGEgcmVsaWFibGUgY2hvaWNlIGZvciBlbnZpcm9ubWVudHMgcHJvbmUgdG8gdGVybWl0ZSBhY3Rpdml0eS4nLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgeWVhcjogJ1NvbHZlbnQgUmVzaXN0YW50JyxcbiAgICAgICAgcG9zaXRpb246IFwiU29sdmVudC1yZXNpc3RhbnQgbGFtaW5hdGUgc2hlZXRzIGFyZSBkZXNpZ25lZCB0byB3aXRoc3RhbmQgZXhwb3N1cmUgdG8gdmFyaW91cyBzb2x2ZW50cyBhbmQgY2hlbWljYWxzIHdpdGhvdXQgbG9zaW5nIHRoZWlyIGludGVncml0eS4gVGhlc2Ugc2hlZXRzIGFyZSBjb21tb25seSB1c2VkIGluIGluZHVzdHJpYWwgYW5kIGNvbW1lcmNpYWwgc2V0dGluZ3Mgd2hlcmUgdGhlcmUncyBhIG5lZWQgZm9yIHN1cmZhY2VzIHRoYXQgY2FuIGhhbmRsZSBmcmVxdWVudCBjb250YWN0IHdpdGggc3Vic3RhbmNlcyBsaWtlIG9pbHMsIGNsZWFuaW5nIGFnZW50cywgYW5kIG90aGVyIHNvbHZlbnRzLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeWVhcjogJ0VjbyBGcmllbmRseScsXG4gICAgICAgIHBvc2l0aW9uOiBcIkVjby1mcmllbmRseSBsYW1pbmF0ZSBzaGVldHMgYXJlIHN1c3RhaW5hYmxlIHN1cmZhY2UgbWF0ZXJpYWxzIGNyYWZ0ZWQgd2l0aCBjb25zaWRlcmF0aW9uIGZvciB0aGUgZW52aXJvbm1lbnQuIFRoZXNlIHNoZWV0cyBhcmUgbWFkZSBmcm9tIHJlbmV3YWJsZSBtYXRlcmlhbHMgYW5kIHV0aWxpemUgbG93LWltcGFjdCBtYW51ZmFjdHVyaW5nIHByb2Nlc3Nlcy4gVGhleSBvZmZlciBhIGJhbGFuY2UgYmV0d2VlbiBhZXN0aGV0aWNzIGFuZCBlY28tY29uc2Npb3VzbmVzcywgbWFraW5nIHRoZW0gYSByZXNwb25zaWJsZSBjaG9pY2UuXCIsXG4gICAgfSAgICBdLFxuICBcbiAgXTtcblxuICAvKiogU2xpZGVyIFNldHRpbmdzICoqL1xuICBjb25zdCBTbGlja0Fycm93TGVmdCA9ICh7IGN1cnJlbnRTbGlkZSwgc2xpZGVDb3VudCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICdzbGljay1wcmV2IHNsaWNrLWFycm93JyArIChjdXJyZW50U2xpZGUgPT09IDAgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxuICAgICAgfVxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gMCA/IHRydWUgOiBmYWxzZX1cbiAgICA+XG4gICAgICA8SWNvbiBpY29uPVwiYmk6YXJyb3ctbGVmdFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIGNvbnN0IFNsaWNrQXJyb3dSaWdodCA9ICh7IGN1cnJlbnRTbGlkZSwgc2xpZGVDb3VudCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICdzbGljay1uZXh0IHNsaWNrLWFycm93JyArXG4gICAgICAgIChjdXJyZW50U2xpZGUgPT09IHNsaWRlQ291bnQgLSAxID8gJyBzbGljay1kaXNhYmxlZCcgOiAnJylcbiAgICAgIH1cbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICBhcmlhLWRpc2FibGVkPXtjdXJyZW50U2xpZGUgPT09IHNsaWRlQ291bnQgLSAxID8gdHJ1ZSA6IGZhbHNlfVxuICAgID5cbiAgICAgIDxJY29uIGljb249XCJiaTphcnJvdy1yaWdodFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAyLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHByZXZBcnJvdzogPFNsaWNrQXJyb3dMZWZ0IC8+LFxuICAgIG5leHRBcnJvdzogPFNsaWNrQXJyb3dSaWdodCAvPixcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDcwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPVwiY3MtYXJyb3dfc3R5bGUzXCI+XG4gICAgICB7dGltZWxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPERpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8VGltZWxpbmUgY29sdW1uRGF0YT17aXRlbX0gLz5cbiAgICAgICAgPC9EaXY+XG4gICAgICApKX1cbiAgICA8L1NsaWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJY29uIiwiU2xpZGVyIiwiRGl2IiwiVGltZWxpbmUiLCJUaW1lbGluZVNsaWRlciIsInRpbWVsaW5lRGF0YSIsInllYXIiLCJwb3NpdGlvbiIsIlNsaWNrQXJyb3dMZWZ0IiwiY3VycmVudFNsaWRlIiwic2xpZGVDb3VudCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXJpYS1oaWRkZW4iLCJhcmlhLWRpc2FibGVkIiwiaWNvbiIsIlNsaWNrQXJyb3dSaWdodCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFycm93cyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY29sdW1uRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/TimelineSlider.jsx\n"));

/***/ })

});