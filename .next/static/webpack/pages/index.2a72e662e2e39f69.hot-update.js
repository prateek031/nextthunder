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

/***/ "./components/Slider/TestimonialSlider.jsx":
/*!*************************************************!*\
  !*** ./components/Slider/TestimonialSlider.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TestimonialSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var _Testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Testimonial */ \"./components/Testimonial/index.jsx\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Spacing */ \"./components/Spacing/index.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TestimonialSlider() {\n    _s();\n    const [nav1, setNav1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [nav2, setNav2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const testimonialData = [\n        {\n            testimonialThumb: \"/images/testimonial_1.jpeg\",\n            testimonialText: \"I recently used Thunder X High-Pressure Laminate Sheets for a kitchen renovation project, and I'm thrilled with the results! The quality is outstanding, and the wide range of colors and patterns allowed me to achieve a truly customized look. My client couldn't be happier!\",\n            avatarName: \"Tarun Wasnik\",\n            avatarDesignation: \"Interior Designer\",\n            ratings: \"4\"\n        },\n        {\n            testimonialThumb: \"/images/testimonial_2.jpeg\",\n            testimonialText: \"Choosing Thunder X for our countertops was a game-changer. The durability and resistance to high pressure make it perfect for our busy kitchen. The sleek design options added a modern touch to our home. Highly recommend!\",\n            avatarName: \"Anurag Gutpa\",\n            avatarDesignation: \"Home Owner\",\n            ratings: \"5\"\n        },\n        {\n            testimonialThumb: \"/images/testimonial_3.jpeg\",\n            testimonialText: \"Working with Thunder X laminate sheets made my job a breeze. The sheets are easy to cut and install, saving me valuable time on the project. The high-pressure resistance ensures longevity, making it a top choice for my clients.\",\n            avatarName: \"Sanjay Yadav\",\n            avatarDesignation: \"Contractor\",\n            ratings: \"4.5\"\n        },\n        {\n            testimonialThumb: \"/images/testimonial_1.jpeg\",\n            testimonialText: \"We used Thunder X laminate for our store's display counters, and the impact on the overall aesthetics was amazing. The variety of textures and finishes allowed us to create a unique and inviting shopping environment. Our customers often inquire about the sleek design.\",\n            avatarName: \"Ahon Monsery\",\n            avatarDesignation: \"Restaurant Owner\",\n            ratings: \"3.5\"\n        }\n    ];\n    const SlickArrowLeft = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-prev slick-arrow\" + (currentSlide === 0 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === 0 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                icon: \"bi:arrow-left\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, this);\n    };\n    const SlickArrowRight = (param)=>/*#__PURE__*/ {\n        let { currentSlide, slideCount, ...props } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ...props,\n            className: \"slick-next slick-arrow\" + (currentSlide === slideCount - 1 ? \" slick-disabled\" : \"\"),\n            \"aria-hidden\": \"true\",\n            \"aria-disabled\": currentSlide === slideCount - 1 ? true : false,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                icon: \"bi:arrow-right\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n            lineNumber: 57,\n            columnNumber: 5\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spacing__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    lg: \"130\",\n                    md: \"80\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"cs-shape_3 cs-to_up\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/shape_1.svg\",\n                        alt: \"Shape\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"cs-testimonial_slider\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"cs-testimonial_slider_left\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    asNavFor: nav1,\n                                    ref: (slider2)=>setNav2(slider2),\n                                    slidesToShow: 3,\n                                    swipeToSlide: true,\n                                    focusOnSelect: true,\n                                    centerMode: true,\n                                    centerPadding: \"0px\",\n                                    arrows: false,\n                                    children: testimonialData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"slider-nav_item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                className: \"cs-rotate_img\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    className: \"cs-rotate_img_in\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: item.testimonialThumb,\n                                                        alt: \"Thumb\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"cs-testimonial_slider_right\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    asNavFor: nav2,\n                                    ref: (slider1)=>setNav1(slider1),\n                                    prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowLeft, {}, void 0, false, void 0, void 0),\n                                    nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SlickArrowRight, {}, void 0, false, void 0, void 0),\n                                    className: \"cs-arrow_style1\",\n                                    children: testimonialData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Testimonial__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                testimonialText: item.testimonialText,\n                                                avatarName: item.avatarName,\n                                                avatarDesignation: item.avatarDesignation,\n                                                ratings: item.ratings\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spacing__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    lg: \"130\",\n                    md: \"80\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\TestimonialSlider.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(TestimonialSlider, \"x7LsVl+TStan9KbXuZduk4GvrJ0=\");\n_c = TestimonialSlider;\nvar _c;\n$RefreshReg$(_c, \"TestimonialSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9UZXN0aW1vbmlhbFNsaWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1A7QUFDSztBQUNHO0FBQ2hCO0FBQ1E7QUFDbEIsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQTtJQUNoQyxNQUFNVyxrQkFBa0I7UUFDdEI7WUFDRUMsa0JBQWtCO1lBQ2xCQyxpQkFDRTtZQUNGQyxZQUFZO1lBQ1pDLG1CQUFtQjtZQUNuQkMsU0FBUztRQUNYO1FBQ0E7WUFDRUosa0JBQWtCO1lBQ2xCQyxpQkFDRTtZQUNGQyxZQUFZO1lBQ1pDLG1CQUFtQjtZQUNuQkMsU0FBUztRQUNYO1FBQ0E7WUFDRUosa0JBQWtCO1lBQ2xCQyxpQkFDRTtZQUNGQyxZQUFZO1lBQ1pDLG1CQUFtQjtZQUNuQkMsU0FBUztRQUNYO1FBQ0E7WUFDRUosa0JBQWtCO1lBQ2xCQyxpQkFDRTtZQUNGQyxZQUFZO1lBQ1pDLG1CQUFtQjtZQUNuQkMsU0FBUztRQUNYO0tBQ0Q7SUFDRCxNQUFNQyxpQkFBaUI7WUFBQyxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxPQUFPO2VBQzVELDhEQUFDQztZQUNFLEdBQUdELEtBQUs7WUFDVEUsV0FDRSwyQkFBNEJKLENBQUFBLGlCQUFpQixJQUFJLG9CQUFvQixFQUFDO1lBRXhFSyxlQUFZO1lBQ1pDLGlCQUFlTixpQkFBaUIsSUFBSSxPQUFPO3NCQUUzQyw0RUFBQ2hCLGdEQUFJQTtnQkFBQ3VCLE1BQUs7Ozs7Ozs7Ozs7O0lBQ1I7SUFFUCxNQUFNQyxrQkFBa0I7WUFBQyxFQUFFUixZQUFZLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxPQUFPO2VBQzdELDhEQUFDQztZQUNFLEdBQUdELEtBQUs7WUFDVEUsV0FDRSwyQkFDQ0osQ0FBQUEsaUJBQWlCQyxhQUFhLElBQUksb0JBQW9CLEVBQUM7WUFFMURJLGVBQVk7WUFDWkMsaUJBQWVOLGlCQUFpQkMsYUFBYSxJQUFJLE9BQU87c0JBRXhELDRFQUFDakIsZ0RBQUlBO2dCQUFDdUIsTUFBSzs7Ozs7Ozs7Ozs7SUFDUjtJQUVQLHFCQUNFO2tCQUNFLDRFQUFDckIsNENBQUdBO1lBQUNrQixXQUFVOzs4QkFDYiw4REFBQ2pCLGdEQUFPQTtvQkFBQ3NCLElBQUc7b0JBQU1DLElBQUc7Ozs7Ozs4QkFDckIsOERBQUN4Qiw0Q0FBR0E7b0JBQUNrQixXQUFVOzhCQUNiLDRFQUFDTzt3QkFBSUMsS0FBSTt3QkFBc0JDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUVyQyw4REFBQzNCLDRDQUFHQTtvQkFBQ2tCLFdBQVU7OEJBQ2IsNEVBQUNsQiw0Q0FBR0E7d0JBQUNrQixXQUFVOzswQ0FDYiw4REFBQ2xCLDRDQUFHQTtnQ0FBQ2tCLFdBQVU7MENBQ2IsNEVBQUNyQixtREFBTUE7b0NBQ0wrQixVQUFVekI7b0NBQ1YwQixLQUFLQyxDQUFBQSxVQUFXeEIsUUFBUXdCO29DQUN4QkMsY0FBYztvQ0FDZEMsY0FBYztvQ0FDZEMsZUFBZTtvQ0FDZkMsWUFBWTtvQ0FDWkMsZUFBYztvQ0FDZEMsUUFBUTs4Q0FFUDdCLGdCQUFnQjhCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDMUIsOERBQUN2Qyw0Q0FBR0E7NENBQUNrQixXQUFVO3NEQUNiLDRFQUFDbEIsNENBQUdBO2dEQUFDa0IsV0FBVTswREFDYiw0RUFBQ2xCLDRDQUFHQTtvREFBQ2tCLFdBQVU7OERBQ2IsNEVBQUNPO3dEQUFJQyxLQUFLWSxLQUFLOUIsZ0JBQWdCO3dEQUFFbUIsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FITFk7Ozs7Ozs7Ozs7Ozs7OzswQ0FVNUMsOERBQUN2Qyw0Q0FBR0E7Z0NBQUNrQixXQUFVOzBDQUNiLDRFQUFDckIsbURBQU1BO29DQUNMK0IsVUFBVXZCO29DQUNWd0IsS0FBS1csQ0FBQUEsVUFBV3BDLFFBQVFvQztvQ0FDeEJDLHlCQUFXLDhEQUFDNUI7b0NBQ1o2Qix5QkFBVyw4REFBQ3BCO29DQUNaSixXQUFVOzhDQUVUWCxnQkFBZ0I4QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzFCLDhEQUFDdkMsNENBQUdBO3NEQUNGLDRFQUFDRCxvREFBV0E7Z0RBQ1ZVLGlCQUFpQjZCLEtBQUs3QixlQUFlO2dEQUNyQ0MsWUFBWTRCLEtBQUs1QixVQUFVO2dEQUMzQkMsbUJBQW1CMkIsS0FBSzNCLGlCQUFpQjtnREFDekNDLFNBQVMwQixLQUFLMUIsT0FBTzs7Ozs7OzJDQUxmMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWFwQiw4REFBQ3RDLGdEQUFPQTtvQkFBQ3NCLElBQUc7b0JBQU1DLElBQUc7Ozs7Ozs7Ozs7Ozs7QUFJN0I7R0F2SHdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIvVGVzdGltb25pYWxTbGlkZXIuanN4PzYzMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gJy4uL1Rlc3RpbW9uaWFsJztcbmltcG9ydCBEaXYgZnJvbSAnLi4vRGl2JztcbmltcG9ydCBTcGFjaW5nIGZyb20gJy4uL1NwYWNpbmcnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxTbGlkZXIoKSB7XG4gIGNvbnN0IFtuYXYxLCBzZXROYXYxXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuYXYyLCBzZXROYXYyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHRlc3RpbW9uaWFsRGF0YSA9IFtcbiAgICB7XG4gICAgICB0ZXN0aW1vbmlhbFRodW1iOiAnL2ltYWdlcy90ZXN0aW1vbmlhbF8xLmpwZWcnLFxuICAgICAgdGVzdGltb25pYWxUZXh0OlxuICAgICAgICBcIkkgcmVjZW50bHkgdXNlZCBUaHVuZGVyIFggSGlnaC1QcmVzc3VyZSBMYW1pbmF0ZSBTaGVldHMgZm9yIGEga2l0Y2hlbiByZW5vdmF0aW9uIHByb2plY3QsIGFuZCBJJ20gdGhyaWxsZWQgd2l0aCB0aGUgcmVzdWx0cyEgVGhlIHF1YWxpdHkgaXMgb3V0c3RhbmRpbmcsIGFuZCB0aGUgd2lkZSByYW5nZSBvZiBjb2xvcnMgYW5kIHBhdHRlcm5zIGFsbG93ZWQgbWUgdG8gYWNoaWV2ZSBhIHRydWx5IGN1c3RvbWl6ZWQgbG9vay4gTXkgY2xpZW50IGNvdWxkbid0IGJlIGhhcHBpZXIhXCIsXG4gICAgICBhdmF0YXJOYW1lOiAnVGFydW4gV2FzbmlrJyxcbiAgICAgIGF2YXRhckRlc2lnbmF0aW9uOiAnSW50ZXJpb3IgRGVzaWduZXInLFxuICAgICAgcmF0aW5nczogJzQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdGltb25pYWxUaHVtYjogJy9pbWFnZXMvdGVzdGltb25pYWxfMi5qcGVnJyxcbiAgICAgIHRlc3RpbW9uaWFsVGV4dDpcbiAgICAgICAgJ0Nob29zaW5nIFRodW5kZXIgWCBmb3Igb3VyIGNvdW50ZXJ0b3BzIHdhcyBhIGdhbWUtY2hhbmdlci4gVGhlIGR1cmFiaWxpdHkgYW5kIHJlc2lzdGFuY2UgdG8gaGlnaCBwcmVzc3VyZSBtYWtlIGl0IHBlcmZlY3QgZm9yIG91ciBidXN5IGtpdGNoZW4uIFRoZSBzbGVlayBkZXNpZ24gb3B0aW9ucyBhZGRlZCBhIG1vZGVybiB0b3VjaCB0byBvdXIgaG9tZS4gSGlnaGx5IHJlY29tbWVuZCEnLFxuICAgICAgYXZhdGFyTmFtZTogJ0FudXJhZyBHdXRwYScsXG4gICAgICBhdmF0YXJEZXNpZ25hdGlvbjogJ0hvbWUgT3duZXInLFxuICAgICAgcmF0aW5nczogJzUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdGltb25pYWxUaHVtYjogJy9pbWFnZXMvdGVzdGltb25pYWxfMy5qcGVnJyxcbiAgICAgIHRlc3RpbW9uaWFsVGV4dDpcbiAgICAgICAgJ1dvcmtpbmcgd2l0aCBUaHVuZGVyIFggbGFtaW5hdGUgc2hlZXRzIG1hZGUgbXkgam9iIGEgYnJlZXplLiBUaGUgc2hlZXRzIGFyZSBlYXN5IHRvIGN1dCBhbmQgaW5zdGFsbCwgc2F2aW5nIG1lIHZhbHVhYmxlIHRpbWUgb24gdGhlIHByb2plY3QuIFRoZSBoaWdoLXByZXNzdXJlIHJlc2lzdGFuY2UgZW5zdXJlcyBsb25nZXZpdHksIG1ha2luZyBpdCBhIHRvcCBjaG9pY2UgZm9yIG15IGNsaWVudHMuJyxcbiAgICAgIGF2YXRhck5hbWU6ICdTYW5qYXkgWWFkYXYnLFxuICAgICAgYXZhdGFyRGVzaWduYXRpb246ICdDb250cmFjdG9yJyxcbiAgICAgIHJhdGluZ3M6ICc0LjUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGVzdGltb25pYWxUaHVtYjogJy9pbWFnZXMvdGVzdGltb25pYWxfMS5qcGVnJyxcbiAgICAgIHRlc3RpbW9uaWFsVGV4dDpcbiAgICAgICAgXCJXZSB1c2VkIFRodW5kZXIgWCBsYW1pbmF0ZSBmb3Igb3VyIHN0b3JlJ3MgZGlzcGxheSBjb3VudGVycywgYW5kIHRoZSBpbXBhY3Qgb24gdGhlIG92ZXJhbGwgYWVzdGhldGljcyB3YXMgYW1hemluZy4gVGhlIHZhcmlldHkgb2YgdGV4dHVyZXMgYW5kIGZpbmlzaGVzIGFsbG93ZWQgdXMgdG8gY3JlYXRlIGEgdW5pcXVlIGFuZCBpbnZpdGluZyBzaG9wcGluZyBlbnZpcm9ubWVudC4gT3VyIGN1c3RvbWVycyBvZnRlbiBpbnF1aXJlIGFib3V0IHRoZSBzbGVlayBkZXNpZ24uXCIsXG4gICAgICBhdmF0YXJOYW1lOiAnQWhvbiBNb25zZXJ5JyxcbiAgICAgIGF2YXRhckRlc2lnbmF0aW9uOiAnUmVzdGF1cmFudCBPd25lcicsXG4gICAgICByYXRpbmdzOiAnMy41JyxcbiAgICB9LFxuICBdO1xuICBjb25zdCBTbGlja0Fycm93TGVmdCA9ICh7IGN1cnJlbnRTbGlkZSwgc2xpZGVDb3VudCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICdzbGljay1wcmV2IHNsaWNrLWFycm93JyArIChjdXJyZW50U2xpZGUgPT09IDAgPyAnIHNsaWNrLWRpc2FibGVkJyA6ICcnKVxuICAgICAgfVxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRTbGlkZSA9PT0gMCA/IHRydWUgOiBmYWxzZX1cbiAgICA+XG4gICAgICA8SWNvbiBpY29uPVwiYmk6YXJyb3ctbGVmdFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIGNvbnN0IFNsaWNrQXJyb3dSaWdodCA9ICh7IGN1cnJlbnRTbGlkZSwgc2xpZGVDb3VudCwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICdzbGljay1uZXh0IHNsaWNrLWFycm93JyArXG4gICAgICAgIChjdXJyZW50U2xpZGUgPT09IHNsaWRlQ291bnQgLSAxID8gJyBzbGljay1kaXNhYmxlZCcgOiAnJylcbiAgICAgIH1cbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICBhcmlhLWRpc2FibGVkPXtjdXJyZW50U2xpZGUgPT09IHNsaWRlQ291bnQgLSAxID8gdHJ1ZSA6IGZhbHNlfVxuICAgID5cbiAgICAgIDxJY29uIGljb249XCJiaTphcnJvdy1yaWdodFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEaXYgY2xhc3NOYW1lPVwiY3MtZ3JhZGllbnRfYmdfMSBjcy1zaGFwZV93cmFwXzMgY3MtcGFyYWxsYXhcIj5cbiAgICAgICAgPFNwYWNpbmcgbGc9XCIxMzBcIiBtZD1cIjgwXCIgLz5cbiAgICAgICAgPERpdiBjbGFzc05hbWU9XCJjcy1zaGFwZV8zIGNzLXRvX3VwXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlXzEuc3ZnXCIgYWx0PVwiU2hhcGVcIiAvPlxuICAgICAgICA8L0Rpdj5cbiAgICAgICAgPERpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8RGl2IGNsYXNzTmFtZT1cImNzLXRlc3RpbW9uaWFsX3NsaWRlclwiPlxuICAgICAgICAgICAgPERpdiBjbGFzc05hbWU9XCJjcy10ZXN0aW1vbmlhbF9zbGlkZXJfbGVmdFwiPlxuICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I9e25hdjF9XG4gICAgICAgICAgICAgICAgcmVmPXtzbGlkZXIyID0+IHNldE5hdjIoc2xpZGVyMil9XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93PXszfVxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0PXt0cnVlfVxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU9e3RydWV9XG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZz1cIjBweFwiXG4gICAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPERpdiBjbGFzc05hbWU9XCJzbGlkZXItbmF2X2l0ZW1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPERpdiBjbGFzc05hbWU9XCJjcy1yb3RhdGVfaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPERpdiBjbGFzc05hbWU9XCJjcy1yb3RhdGVfaW1nX2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS50ZXN0aW1vbmlhbFRodW1ifSBhbHQ9XCJUaHVtYlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgICAgPC9EaXY+XG4gICAgICAgICAgICA8RGl2IGNsYXNzTmFtZT1cImNzLXRlc3RpbW9uaWFsX3NsaWRlcl9yaWdodFwiPlxuICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I9e25hdjJ9XG4gICAgICAgICAgICAgICAgcmVmPXtzbGlkZXIxID0+IHNldE5hdjEoc2xpZGVyMSl9XG4gICAgICAgICAgICAgICAgcHJldkFycm93PXs8U2xpY2tBcnJvd0xlZnQgLz59XG4gICAgICAgICAgICAgICAgbmV4dEFycm93PXs8U2xpY2tBcnJvd1JpZ2h0IC8+fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNzLWFycm93X3N0eWxlMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVzdGltb25pYWxEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxEaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXN0aW1vbmlhbFxuICAgICAgICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFsVGV4dD17aXRlbS50ZXN0aW1vbmlhbFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgYXZhdGFyTmFtZT17aXRlbS5hdmF0YXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGF2YXRhckRlc2lnbmF0aW9uPXtpdGVtLmF2YXRhckRlc2lnbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHJhdGluZ3M9e2l0ZW0ucmF0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgICAgIDwvRGl2PlxuICAgICAgICAgIDwvRGl2PlxuICAgICAgICA8L0Rpdj5cbiAgICAgICAgPFNwYWNpbmcgbGc9XCIxMzBcIiBtZD1cIjgwXCIgLz5cbiAgICAgIDwvRGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJJY29uIiwiVGVzdGltb25pYWwiLCJEaXYiLCJTcGFjaW5nIiwiVGVzdGltb25pYWxTbGlkZXIiLCJuYXYxIiwic2V0TmF2MSIsIm5hdjIiLCJzZXROYXYyIiwidGVzdGltb25pYWxEYXRhIiwidGVzdGltb25pYWxUaHVtYiIsInRlc3RpbW9uaWFsVGV4dCIsImF2YXRhck5hbWUiLCJhdmF0YXJEZXNpZ25hdGlvbiIsInJhdGluZ3MiLCJTbGlja0Fycm93TGVmdCIsImN1cnJlbnRTbGlkZSIsInNsaWRlQ291bnQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImFyaWEtaGlkZGVuIiwiYXJpYS1kaXNhYmxlZCIsImljb24iLCJTbGlja0Fycm93UmlnaHQiLCJsZyIsIm1kIiwiaW1nIiwic3JjIiwiYWx0IiwiYXNOYXZGb3IiLCJyZWYiLCJzbGlkZXIyIiwic2xpZGVzVG9TaG93Iiwic3dpcGVUb1NsaWRlIiwiZm9jdXNPblNlbGVjdCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiYXJyb3dzIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2xpZGVyMSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/TestimonialSlider.jsx\n"));

/***/ })

});