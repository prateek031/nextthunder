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

/***/ "./components/Slider/PostSlider.jsx":
/*!******************************************!*\
  !*** ./components/Slider/PostSlider.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Div */ \"./components/Div/index.jsx\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Post */ \"./components/Post/index.jsx\");\n\n\n\n\n\nfunction PostSlider() {\n    const postData = [\n        {\n            url: \"https://www.youtube.com/watch?v=EJJbx1eFsrY\",\n            src: \"/images/post_1.jpeg\",\n            alt: \"Post\",\n            date: \"07 Mar 2022\",\n            title: \"This content richs video\"\n        },\n        {\n            url: \"https://www.youtube.com/watch?v=PX64i0Wqooo&t=128s\",\n            src: \"/images/post_2.jpeg\",\n            alt: \"Post\",\n            date: \"10 Feb 2022\",\n            title: \"anjli maam video youtube\"\n        },\n        {\n            url: \"https://www.youtube.com/watch?v=o3XZ-9O4CE4\",\n            src: \"/images/post_3.jpeg\",\n            alt: \"Post\",\n            date: \"05 Mar 2022\",\n            title: \"water proof video\"\n        },\n        {\n            url: \"/blog/blog-details\",\n            src: \"/images/post_1.jpeg\",\n            alt: \"Post\",\n            date: \"07 Mar 2022\",\n            title: \"How to keep fear from ruining your art business with confident\"\n        },\n        {\n            url: \"/blog/blog-details\",\n            src: \"/images/post_2.jpeg\",\n            alt: \"Post\",\n            date: \"10 Feb 2022\",\n            title: \"Artistic mind will be great for creation anything\"\n        },\n        {\n            url: \"/blog/blog-details\",\n            src: \"/images/post_3.jpeg\",\n            alt: \"Post\",\n            date: \"05 Mar 2022\",\n            title: \"A.I will take over all job for human within next year\"\n        }\n    ];\n    /** Slider Settings **/ const settings = {\n        dots: false,\n        arrows: false,\n        infinite: true,\n        autoplay: true,\n        autoplaySpeed: 4000,\n        speed: 1000,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        responsive: [\n            {\n                breakpoint: 1600,\n                settings: {\n                    slidesToShow: 3\n                }\n            },\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 2\n                }\n            },\n            {\n                breakpoint: 992,\n                settings: {\n                    slidesToShow: 2\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        className: \"cs-gap-24\",\n        children: postData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Div__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    url: item.url,\n                    src: item.src,\n                    alt: item.alt,\n                    date: item.date,\n                    title: item.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PostSlider.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PostSlider.jsx\",\n                lineNumber: 93,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ashish\\\\Desktop\\\\arino-nextjs\\\\components\\\\Slider\\\\PostSlider.jsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_c = PostSlider;\nvar _c;\n$RefreshReg$(_c, \"PostSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9Qb3N0U2xpZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUTtBQUNSO0FBQ0U7QUFFWixTQUFTSTtJQUN0QixNQUFNQyxXQUFXO1FBQ2Y7WUFDRUMsS0FBSTtZQUNKQyxLQUFJO1lBQ0pDLEtBQUk7WUFDSkMsTUFBSztZQUNMQyxPQUFNO1FBQ1I7UUFDQTtZQUNFSixLQUFJO1lBQ0pDLEtBQUk7WUFDSkMsS0FBSTtZQUNKQyxNQUFLO1lBQ0xDLE9BQU07UUFDUjtRQUNBO1lBQ0VKLEtBQUk7WUFDSkMsS0FBSTtZQUNKQyxLQUFJO1lBQ0pDLE1BQUs7WUFDTEMsT0FBTTtRQUNSO1FBQ0E7WUFDRUosS0FBSTtZQUNKQyxLQUFJO1lBQ0pDLEtBQUk7WUFDSkMsTUFBSztZQUNMQyxPQUFNO1FBQ1I7UUFDQTtZQUNFSixLQUFJO1lBQ0pDLEtBQUk7WUFDSkMsS0FBSTtZQUNKQyxNQUFLO1lBQ0xDLE9BQU07UUFDUjtRQUNBO1lBQ0VKLEtBQUk7WUFDSkMsS0FBSTtZQUNKQyxLQUFJO1lBQ0pDLE1BQUs7WUFDTEMsT0FBTTtRQUNSO0tBQ0Q7SUFFRCxxQkFBcUIsR0FDckIsTUFBTUMsV0FBVztRQUNmQyxNQUFNO1FBQ05DLFFBQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLGVBQWU7UUFDZkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLGdCQUFnQjtRQUNoQkMsWUFBWTtZQUNWO2dCQUNFQyxZQUFZO2dCQUNaVixVQUFVO29CQUNSTyxjQUFjO2dCQUNoQjtZQUNGO1lBQ0E7Z0JBQ0VHLFlBQVk7Z0JBQ1pWLFVBQVU7b0JBQ1JPLGNBQWM7Z0JBQ2hCO1lBQ0Y7WUFDQTtnQkFDRUcsWUFBWTtnQkFDWlYsVUFBVTtvQkFDUk8sY0FBYztnQkFDaEI7WUFDRjtZQUNBO2dCQUNFRyxZQUFZO2dCQUNaVixVQUFVO29CQUNSTyxjQUFjO2dCQUNoQjtZQUNGO1NBQ0Q7SUFDSDtJQUVBLHFCQUNFLDhEQUFDakIsbURBQU1BO1FBQUUsR0FBR1UsUUFBUTtRQUFFVyxXQUFVO2tCQUM3QmpCLFNBQVNrQixHQUFHLENBQUMsQ0FBQ0MsTUFBS0Msc0JBQ2hCLDhEQUFDdkIsNENBQUdBOzBCQUNGLDRFQUFDQyw2Q0FBSUE7b0JBQ0hHLEtBQUtrQixLQUFLbEIsR0FBRztvQkFDYkMsS0FBS2lCLEtBQUtqQixHQUFHO29CQUNiQyxLQUFLZ0IsS0FBS2hCLEdBQUc7b0JBQ2JDLE1BQU1lLEtBQUtmLElBQUk7b0JBQ2ZDLE9BQU9jLEtBQUtkLEtBQUs7Ozs7OztlQU5YZTs7Ozs7Ozs7OztBQVlwQjtLQW5Hd0JyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlci9Qb3N0U2xpZGVyLmpzeD80OWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgRGl2IGZyb20gJy4uL0Rpdic7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9Qb3N0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNsaWRlcigpIHtcbiAgY29uc3QgcG9zdERhdGEgPSBbXG4gICAge1xuICAgICAgdXJsOidodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUVKSmJ4MWVGc3JZJywgXG4gICAgICBzcmM6Jy9pbWFnZXMvcG9zdF8xLmpwZWcnLCBcbiAgICAgIGFsdDonUG9zdCcsIFxuICAgICAgZGF0ZTonMDcgTWFyIDIwMjInLCBcbiAgICAgIHRpdGxlOidUaGlzIGNvbnRlbnQgcmljaHMgdmlkZW8nXG4gICAgfSxcbiAgICB7XG4gICAgICB1cmw6J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UFg2NGkwV3Fvb28mdD0xMjhzJywgXG4gICAgICBzcmM6Jy9pbWFnZXMvcG9zdF8yLmpwZWcnLCBcbiAgICAgIGFsdDonUG9zdCcsIFxuICAgICAgZGF0ZTonMTAgRmViIDIwMjInLFxuICAgICAgdGl0bGU6J2FuamxpIG1hYW0gdmlkZW8geW91dHViZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHVybDonaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1vM1haLTlPNENFNCcsIFxuICAgICAgc3JjOicvaW1hZ2VzL3Bvc3RfMy5qcGVnJywgXG4gICAgICBhbHQ6J1Bvc3QnLCBcbiAgICAgIGRhdGU6JzA1IE1hciAyMDIyJyxcbiAgICAgIHRpdGxlOid3YXRlciBwcm9vZiB2aWRlbydcbiAgICB9LFxuICAgIHtcbiAgICAgIHVybDonL2Jsb2cvYmxvZy1kZXRhaWxzJywgXG4gICAgICBzcmM6Jy9pbWFnZXMvcG9zdF8xLmpwZWcnLCBcbiAgICAgIGFsdDonUG9zdCcsIFxuICAgICAgZGF0ZTonMDcgTWFyIDIwMjInLCBcbiAgICAgIHRpdGxlOidIb3cgdG8ga2VlcCBmZWFyIGZyb20gcnVpbmluZyB5b3VyIGFydCBidXNpbmVzcyB3aXRoIGNvbmZpZGVudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHVybDonL2Jsb2cvYmxvZy1kZXRhaWxzJywgXG4gICAgICBzcmM6Jy9pbWFnZXMvcG9zdF8yLmpwZWcnLCBcbiAgICAgIGFsdDonUG9zdCcsIFxuICAgICAgZGF0ZTonMTAgRmViIDIwMjInLFxuICAgICAgdGl0bGU6J0FydGlzdGljIG1pbmQgd2lsbCBiZSBncmVhdCBmb3IgY3JlYXRpb24gYW55dGhpbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICB1cmw6Jy9ibG9nL2Jsb2ctZGV0YWlscycsIFxuICAgICAgc3JjOicvaW1hZ2VzL3Bvc3RfMy5qcGVnJywgXG4gICAgICBhbHQ6J1Bvc3QnLCBcbiAgICAgIGRhdGU6JzA1IE1hciAyMDIyJyxcbiAgICAgIHRpdGxlOidBLkkgd2lsbCB0YWtlIG92ZXIgYWxsIGpvYiBmb3IgaHVtYW4gd2l0aGluIG5leHQgeWVhcidcbiAgICB9XG4gIF1cbiAgXG4gIC8qKiBTbGlkZXIgU2V0dGluZ3MgKiovXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGFycm93czpmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiA0MDAwLFxuICAgIHNwZWVkOiAxMDAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDE2MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gY2xhc3NOYW1lPSdjcy1nYXAtMjQnPlxuICAgICAge3Bvc3REYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcbiAgICAgICAgICA8RGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPFBvc3QgXG4gICAgICAgICAgICAgIHVybD17aXRlbS51cmx9XG4gICAgICAgICAgICAgIHNyYz17aXRlbS5zcmN9IFxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9EaXY+XG4gICAgICAgICkpfVxuICAgIDwvU2xpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJEaXYiLCJQb3N0IiwiUG9zdFNsaWRlciIsInBvc3REYXRhIiwidXJsIiwic3JjIiwiYWx0IiwiZGF0ZSIsInRpdGxlIiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider/PostSlider.jsx\n"));

/***/ })

});