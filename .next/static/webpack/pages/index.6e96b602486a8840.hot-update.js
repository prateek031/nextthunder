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

/***/ "./components/Slider/TeamSlider.jsx":
/*!******************************************!*\
  !*** ./components/Slider/TeamSlider.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TeamSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Team */ \"./components/Team/index.jsx\");\n\n\n\n\n\nfunction TeamSlider() {\n    /** Team Member Data **/ const teamData = [\n        {\n            memberImage: \"/images/member_1.jpeg\",\n            memberName: \"Melon Bulgery\",\n            memberDesignation: \"Product Designer\",\n            memberSocial: {\n                linkedin: \"/\",\n                twitter: \"/\",\n                youtube: \"/\",\n                facebook: \"/\"\n            }\n        },\n        {\n            memberImage: \"/images/member_2.jpeg\",\n            memberName: \"Olinaz Fushi\",\n            memberDesignation: \"Product Designer\",\n            memberSocial: {\n                linkedin: \"/\",\n                twitter: \"/\",\n                youtube: \"/\",\n                facebook: \"/\"\n            }\n        }\n    ];\n    /** Slider Settings **/ const SlickArrowLeft = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-prev slick-arrow\" + (currentSlide === 0 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === 0 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-left\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, this);\n    };\n    const SlickArrowRight = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-next slick-arrow\" + (currentSlide === slideCount - 1 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === slideCount - 1 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                icon: \"bi:arrow-right\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, this);\n    };\n    const settings = {\n        dots: false,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 4,\n        slidesToScroll: 1,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowLeft, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 65,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowRight, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n            lineNumber: 66,\n            columnNumber: 16\n        }, this),\n        responsive: [\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 3\n                }\n            },\n            {\n                breakpoint: 991,\n                settings: {\n                    slidesToShow: 2,\n                    dots: true,\n                    arrows: false\n                }\n            },\n            {\n                breakpoint: 500,\n                settings: {\n                    slidesToShow: 1,\n                    dots: true,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        className: \"cs-gap-24 cs-arrow_style2\",\n        children: teamData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Team__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    memberImage: item.memberImage,\n                    memberName: item.memberName,\n                    memberDesignation: item.memberDesignation,\n                    memberSocial: item.memberSocial\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\thunderx\\\\nextthunder\\\\components\\\\Slider\\\\TeamSlider.jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c = TeamSlider;\nvar _c;\n$RefreshReg$(_c, \"TeamSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9UZWFtU2xpZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUVMO0FBQ1I7QUFDRTtBQUVaLFNBQVNJO0lBQ3RCLHNCQUFzQixHQUN0QixNQUFNQyxXQUFXO1FBQ2Y7WUFDRUMsYUFBYTtZQUNiQyxZQUFZO1lBQ1pDLG1CQUFtQjtZQUNuQkMsY0FBYztnQkFDWkMsVUFBVTtnQkFDVkMsU0FBUztnQkFDVEMsU0FBUztnQkFDVEMsVUFBVTtZQUNaO1FBQ0Y7UUFDQTtZQUNFUCxhQUFhO1lBQ2JDLFlBQVk7WUFDWkMsbUJBQW1CO1lBQ25CQyxjQUFjO2dCQUNaQyxVQUFVO2dCQUNWQyxTQUFTO2dCQUNUQyxTQUFTO2dCQUNUQyxVQUFVO1lBQ1o7UUFDRjtLQUNEO0lBQ0QscUJBQXFCLEdBQ3JCLE1BQU1DLGlCQUFpQjtZQUFDLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFLEdBQUdDLE9BQU87ZUFDNUQsOERBQUNDO1lBQ0UsR0FBR0QsS0FBSztZQUNURSxXQUNFLDJCQUE0QkosQ0FBQUEsaUJBQWlCLElBQUksb0JBQW9CLEVBQUM7WUFFeEVLLGVBQVk7WUFDWkMsaUJBQWVOLGlCQUFpQixJQUFJLE9BQU87c0JBRTNDLDRFQUFDZixnREFBSUE7Z0JBQUNzQixNQUFLOzs7Ozs7Ozs7OztJQUNSO0lBRVAsTUFBTUMsa0JBQWtCO1lBQUMsRUFBRVIsWUFBWSxFQUFFQyxVQUFVLEVBQUUsR0FBR0MsT0FBTztlQUM3RCw4REFBQ0M7WUFDRSxHQUFHRCxLQUFLO1lBQ1RFLFdBQ0UsMkJBQ0NKLENBQUFBLGlCQUFpQkMsYUFBYSxJQUFJLG9CQUFvQixFQUFDO1lBRTFESSxlQUFZO1lBQ1pDLGlCQUFlTixpQkFBaUJDLGFBQWEsSUFBSSxPQUFPO3NCQUV4RCw0RUFBQ2hCLGdEQUFJQTtnQkFBQ3NCLE1BQUs7Ozs7Ozs7Ozs7O0lBQ1I7SUFFUCxNQUFNRSxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyx5QkFBVyw4REFBQ2hCOzs7OztRQUNaaUIseUJBQVcsOERBQUNSOzs7OztRQUNaUyxZQUFZO1lBQ1Y7Z0JBQ0VDLFlBQVk7Z0JBQ1pULFVBQVU7b0JBQ1JJLGNBQWM7Z0JBQ2hCO1lBQ0Y7WUFDQTtnQkFDRUssWUFBWTtnQkFDWlQsVUFBVTtvQkFDUkksY0FBYztvQkFDZEgsTUFBTTtvQkFDTlMsUUFBUTtnQkFDVjtZQUNGO1lBQ0E7Z0JBQ0VELFlBQVk7Z0JBQ1pULFVBQVU7b0JBQ1JJLGNBQWM7b0JBQ2RILE1BQU07b0JBQ05TLFFBQVE7Z0JBQ1Y7WUFDRjtTQUNEO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ2pDLG1EQUFNQTtRQUFFLEdBQUd1QixRQUFRO1FBQUVMLFdBQVU7a0JBQzdCZCxTQUFTOEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ25DLDRDQUFHQTswQkFDRiw0RUFBQ0MsNkNBQUlBO29CQUNIRyxhQUFhOEIsS0FBSzlCLFdBQVc7b0JBQzdCQyxZQUFZNkIsS0FBSzdCLFVBQVU7b0JBQzNCQyxtQkFBbUI0QixLQUFLNUIsaUJBQWlCO29CQUN6Q0MsY0FBYzJCLEtBQUszQixZQUFZOzs7Ozs7ZUFMekI0Qjs7Ozs7Ozs7OztBQVdsQjtLQXBHd0JqQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci9UZWFtU2xpZGVyLmpzeD9kZGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XHJcblxyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IERpdiBmcm9tICcuLi9EaXYnO1xyXG5pbXBvcnQgVGVhbSBmcm9tICcuLi9UZWFtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1TbGlkZXIoKSB7XHJcbiAgLyoqIFRlYW0gTWVtYmVyIERhdGEgKiovXHJcbiAgY29uc3QgdGVhbURhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG1lbWJlckltYWdlOiAnL2ltYWdlcy9tZW1iZXJfMS5qcGVnJyxcclxuICAgICAgbWVtYmVyTmFtZTogJ01lbG9uIEJ1bGdlcnknLFxyXG4gICAgICBtZW1iZXJEZXNpZ25hdGlvbjogJ1Byb2R1Y3QgRGVzaWduZXInLFxyXG4gICAgICBtZW1iZXJTb2NpYWw6IHtcclxuICAgICAgICBsaW5rZWRpbjogJy8nLFxyXG4gICAgICAgIHR3aXR0ZXI6ICcvJyxcclxuICAgICAgICB5b3V0dWJlOiAnLycsXHJcbiAgICAgICAgZmFjZWJvb2s6ICcvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1lbWJlckltYWdlOiAnL2ltYWdlcy9tZW1iZXJfMi5qcGVnJyxcclxuICAgICAgbWVtYmVyTmFtZTogJ09saW5heiBGdXNoaScsXHJcbiAgICAgIG1lbWJlckRlc2lnbmF0aW9uOiAnUHJvZHVjdCBEZXNpZ25lcicsXHJcbiAgICAgIG1lbWJlclNvY2lhbDoge1xyXG4gICAgICAgIGxpbmtlZGluOiAnLycsXHJcbiAgICAgICAgdHdpdHRlcjogJy8nLFxyXG4gICAgICAgIHlvdXR1YmU6ICcvJyxcclxuICAgICAgICBmYWNlYm9vazogJy8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdO1xyXG4gIC8qKiBTbGlkZXIgU2V0dGluZ3MgKiovXHJcbiAgY29uc3QgU2xpY2tBcnJvd0xlZnQgPSAoeyBjdXJyZW50U2xpZGUsIHNsaWRlQ291bnQsIC4uLnByb3BzIH0pID0+IChcclxuICAgIDxkaXZcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICdzbGljay1wcmV2IHNsaWNrLWFycm93JyArIChjdXJyZW50U2xpZGUgPT09IDAgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gMCA/IHRydWUgOiBmYWxzZX1cclxuICAgID5cclxuICAgICAgPEljb24gaWNvbj1cImJpOmFycm93LWxlZnRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICBjb25zdCBTbGlja0Fycm93UmlnaHQgPSAoeyBjdXJyZW50U2xpZGUsIHNsaWRlQ291bnQsIC4uLnByb3BzIH0pID0+IChcclxuICAgIDxkaXZcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICdzbGljay1uZXh0IHNsaWNrLWFycm93JyArXHJcbiAgICAgICAgKGN1cnJlbnRTbGlkZSA9PT0gc2xpZGVDb3VudCAtIDEgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxyXG4gICAgICB9XHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gc2xpZGVDb3VudCAtIDEgPyB0cnVlIDogZmFsc2V9XHJcbiAgICA+XHJcbiAgICAgIDxJY29uIGljb249XCJiaTphcnJvdy1yaWdodFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHByZXZBcnJvdzogPFNsaWNrQXJyb3dMZWZ0IC8+LFxyXG4gICAgbmV4dEFycm93OiA8U2xpY2tBcnJvd1JpZ2h0IC8+LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA1MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPVwiY3MtZ2FwLTI0IGNzLWFycm93X3N0eWxlMlwiPlxyXG4gICAgICB7dGVhbURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxEaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8VGVhbVxyXG4gICAgICAgICAgICBtZW1iZXJJbWFnZT17aXRlbS5tZW1iZXJJbWFnZX1cclxuICAgICAgICAgICAgbWVtYmVyTmFtZT17aXRlbS5tZW1iZXJOYW1lfVxyXG4gICAgICAgICAgICBtZW1iZXJEZXNpZ25hdGlvbj17aXRlbS5tZW1iZXJEZXNpZ25hdGlvbn1cclxuICAgICAgICAgICAgbWVtYmVyU29jaWFsPXtpdGVtLm1lbWJlclNvY2lhbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSWNvbiIsIlNsaWRlciIsIkRpdiIsIlRlYW0iLCJUZWFtU2xpZGVyIiwidGVhbURhdGEiLCJtZW1iZXJJbWFnZSIsIm1lbWJlck5hbWUiLCJtZW1iZXJEZXNpZ25hdGlvbiIsIm1lbWJlclNvY2lhbCIsImxpbmtlZGluIiwidHdpdHRlciIsInlvdXR1YmUiLCJmYWNlYm9vayIsIlNsaWNrQXJyb3dMZWZ0IiwiY3VycmVudFNsaWRlIiwic2xpZGVDb3VudCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXJpYS1oaWRkZW4iLCJhcmlhLWRpc2FibGVkIiwiaWNvbiIsIlNsaWNrQXJyb3dSaWdodCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiYXJyb3dzIiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Slider/TeamSlider.jsx\n"));

/***/ })

});