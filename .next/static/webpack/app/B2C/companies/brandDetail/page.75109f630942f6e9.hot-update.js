"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/B2C/companies/brandDetail/page",{

/***/ "(app-pages-browser)/./src/app/B2C/companies/brandDetail/_components/MerchantCard.js":
/*!***********************************************************************!*\
  !*** ./src/app/B2C/companies/brandDetail/_components/MerchantCard.js ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MerchantCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardContent */ \"(app-pages-browser)/./node_modules/@mui/material/CardContent/CardContent.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardMedia */ \"(app-pages-browser)/./node_modules/@mui/material/CardMedia/CardMedia.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Button_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,createTheme,useMediaQuery!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n/* harmony import */ var _barrel_optimize_names_Button_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,createTheme,useMediaQuery!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _mui_icons_material_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ArrowRightAlt */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ArrowRightAlt.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MerchantCard(param) {\n    let { loading, data } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleMerchant = (data)=>{\n        router.push(\"/B2C/merchant?data=\".concat(encodeURIComponent(JSON.stringify(data))));\n    };\n    const theme = (0,_barrel_optimize_names_Button_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const isMobile = (0,_barrel_optimize_names_Button_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(theme.breakpoints.down(\"sm\"));\n    const headingName = \"Merchants\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: data.merchants.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: isMobile ? \"column\" : \"row\",\n                        maxWidth: \"90%\",\n                        borderRadius: \"10px\",\n                        border: \"1px solid #fff\",\n                        backgroundColor: \"#222\",\n                        boxShadow: \"0px 5px 15px rgba(0, 0, 0, 0.3)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            sx: {\n                                width: isMobile ? \"100%\" : \"35%\",\n                                height: isMobile ? 150 : \"auto\"\n                            },\n                            image: item.image\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                width: isMobile ? \"100%\" : \"65%\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    fontWeight: 600,\n                                    gutterBottom: true,\n                                    variant: \"h5\",\n                                    component: \"div\",\n                                    color: \"#fff\",\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    gutterBottom: true,\n                                    variant: \"body1\",\n                                    component: \"div\",\n                                    color: \"#fff\",\n                                    textAlign: \"justify\",\n                                    pr: 4,\n                                    children: \"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    textAlign: \"end\",\n                                    mr: 3,\n                                    display: \"flex\",\n                                    justifyContent: isMobile ? \"center\" : \"flex-end\",\n                                    alignItems: \"center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        sx: {\n                                            cursor: \"pointer\",\n                                            width: isMobile ? \"45%\" : \"40%\",\n                                            display: \"flex\",\n                                            alignItems: \"center\",\n                                            justifyContent: \"space-around\",\n                                            mt: 2,\n                                            backgroundColor: \"#BA9775\",\n                                            px: 1,\n                                            \"&:hover\": {\n                                                backgroundColor: \"#a28664\"\n                                            }\n                                        },\n                                        onClick: ()=>handleDistillery(item.brands),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                fontWeight: 500,\n                                                color: \"#fff\",\n                                                textTransform: \"Capitalize\",\n                                                padding: \"0px\",\n                                                sx: {\n                                                    display: \"flex\",\n                                                    alignItems: \"center\",\n                                                    border: 0\n                                                },\n                                                children: \"Explore more\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                sx: {\n                                                    color: \"#fff\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                                                lineNumber: 111,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n                    lineNumber: 30,\n                    columnNumber: 15\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/ Global Guide v1/src/app/B2C/companies/brandDetail/_components/MerchantCard.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(MerchantCard, \"38prQLYb9SE1e7kPU3UJgDW4zjc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _barrel_optimize_names_Button_createTheme_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = MerchantCard;\nvar _c;\n$RefreshReg$(_c, \"MerchantCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQjJDL2NvbXBhbmllcy9icmFuZERldGFpbC9fY29tcG9uZW50cy9NZXJjaGFudENhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDRTtBQUNjO0FBQ0o7QUFDRTtBQUNpQjtBQUN2QjtBQUNzQjtBQUVuRCxTQUFTYSxhQUFhLEtBQWlCO1FBQWpCLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQWpCOztJQUNuQyxNQUFNQyxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTU0saUJBQWlCLENBQUNGO1FBQ3RCQyxPQUFPRSxJQUFJLENBQ1Qsc0JBQStELE9BQXpDQyxtQkFBbUJDLEtBQUtDLFNBQVMsQ0FBQ047SUFFNUQ7SUFFQSxNQUFNTyxRQUFRYixnSEFBV0E7SUFDekIsTUFBTWMsV0FBV2IsZ0hBQWFBLENBQUNZLE1BQU1FLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3RELE1BQU1DLGNBQWM7SUFDcEIscUJBQ0UsOERBQUN2Qix5REFBR0E7a0JBQ0RXLHdCQUNDLDhEQUFDUCxnRUFBVUE7c0JBQUM7Ozs7O2lDQUVaLDhEQUFDSix5REFBR0E7c0JBQ0RZLEtBQUtZLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO2dCQUNuQixxQkFDRSw4REFBQ3pCLDBEQUFJQTtvQkFFSDBCLElBQUk7d0JBQ0ZDLFNBQVM7d0JBQ1RDLGVBQWVULFdBQVcsV0FBVzt3QkFDckNVLFVBQVU7d0JBQ1ZDLGNBQWM7d0JBQ2RDLFFBQVE7d0JBQ1JDLGlCQUFpQjt3QkFDakJDLFdBQVc7b0JBQ2I7O3NDQUVBLDhEQUFDL0IsK0RBQVNBOzRCQUNSd0IsSUFBSTtnQ0FDRlEsT0FBT2YsV0FBVyxTQUFTO2dDQUMzQmdCLFFBQVFoQixXQUFXLE1BQU07NEJBQzNCOzRCQUNBaUIsT0FBT1gsS0FBS1csS0FBSzs7Ozs7O3NDQUVuQiw4REFBQ25DLGlFQUFXQTs0QkFBQ3lCLElBQUk7Z0NBQUVRLE9BQU9mLFdBQVcsU0FBUzs0QkFBTTs7OENBRWxELDhEQUFDaEIsZ0VBQVVBO29DQUNUa0MsWUFBWTtvQ0FDWkMsWUFBWTtvQ0FDWkMsU0FBUTtvQ0FDUkMsV0FBVTtvQ0FDVkMsT0FBTTs4Q0FFTGhCLEtBQUtpQixJQUFJOzs7Ozs7OENBR1osOERBQUN2QyxnRUFBVUE7b0NBQ1RtQyxZQUFZO29DQUNaQyxTQUFRO29DQUNSQyxXQUFVO29DQUNWQyxPQUFNO29DQUNORSxXQUFXO29DQUNYQyxJQUFJOzhDQUNMOzs7Ozs7OENBT0QsOERBQUM3Qyx5REFBR0E7b0NBQ0Y0QyxXQUFVO29DQUNWRSxJQUFJO29DQUNKbEIsU0FBUztvQ0FDVG1CLGdCQUFnQjNCLFdBQVcsV0FBVztvQ0FDdEM0QixZQUFXOzhDQUVYLDRFQUFDaEQseURBQUdBO3dDQUNGMkIsSUFBSTs0Q0FDRnNCLFFBQVE7NENBQ1JkLE9BQU9mLFdBQVcsUUFBUTs0Q0FDMUJRLFNBQVM7NENBQ1RvQixZQUFZOzRDQUNaRCxnQkFBZ0I7NENBQ2hCRyxJQUFJOzRDQUNKakIsaUJBQWlCOzRDQUNqQmtCLElBQUk7NENBQ0osV0FBVztnREFDVGxCLGlCQUFpQjs0Q0FDbkI7d0NBQ0Y7d0NBQ0FtQixTQUFTLElBQU1DLGlCQUFpQjNCLEtBQUs0QixNQUFNOzswREFFM0MsOERBQUNsRCxnRUFBVUE7Z0RBQ1RrQyxZQUFZO2dEQUNaSSxPQUFNO2dEQUNOYSxlQUFjO2dEQUNkQyxTQUFRO2dEQUNSN0IsSUFBSTtvREFDRkMsU0FBUztvREFDVG9CLFlBQVk7b0RBQ1poQixRQUFRO2dEQUNWOzBEQUNEOzs7Ozs7MERBR0QsOERBQUN2QiwwRUFBaUJBO2dEQUFDa0IsSUFBSTtvREFBRWUsT0FBTztnREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWhGeENlOzs7OztZQXNGWDs7Ozs7Ozs7Ozs7QUFLVjtHQS9Hd0IvQzs7UUFDUEYsc0RBQVNBO1FBUVBELDRHQUFhQTs7O0tBVFJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQjJDL2NvbXBhbmllcy9icmFuZERldGFpbC9fY29tcG9uZW50cy9NZXJjaGFudENhcmQuanM/M2M4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7IEJ1dHRvbiwgY3JlYXRlVGhlbWUsIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IEFycm93UmlnaHRBbHRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93UmlnaHRBbHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVyY2hhbnRDYXJkKHsgbG9hZGluZywgZGF0YSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVNZXJjaGFudCA9IChkYXRhKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXG4gICAgICBgL0IyQy9tZXJjaGFudD9kYXRhPSR7ZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGRhdGEpKX1gXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuICBjb25zdCBoZWFkaW5nTmFtZSA9IFwiTWVyY2hhbnRzXCI7XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8VHlwb2dyYXBoeT5sb2FkaW5nPC9UeXBvZ3JhcGh5PlxuICAgICAgKSA6IChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICB7ZGF0YS5tZXJjaGFudHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogaXNNb2JpbGUgPyBcImNvbHVtblwiIDogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjkwJVwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMjJcIixcbiAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwcHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc01vYmlsZSA/IFwiMTAwJVwiIDogXCIzNSVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpc01vYmlsZSA/IDE1MCA6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN4PXt7IHdpZHRoOiBpc01vYmlsZSA/IFwiMTAwJVwiIDogXCI2NSVcIiB9fT5cbiAgICAgICAgICAgICAgICAgIHsvKiBEaXN0aWxsZXJ5IE5hbWUgKi99XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs2MDB9XG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgey8qIENvdW50cnkgTmFtZSAqL31cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e1wianVzdGlmeVwifVxuICAgICAgICAgICAgICAgICAgICBwcj17NH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gaXMgcGxhY2Vob2xkZXIgdGV4dCBjb21tb25seSB1c2VkIGluIHRoZVxuICAgICAgICAgICAgICAgICAgICBncmFwaGljLCBwcmludCwgYW5kIHB1Ymxpc2hpbmcgaW5kdXN0cmllcyBmb3IgcHJldmlld2luZ1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXRzIGFuZCB2aXN1YWwgbW9ja3Vwcy5cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgey8qIEV4cGxvcmUgTW9yZSBCdXR0b24gKi99XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgIG1yPXszfVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e2lzTW9iaWxlID8gXCJjZW50ZXJcIiA6IFwiZmxleC1lbmRcIn1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpc01vYmlsZSA/IFwiNDUlXCIgOiBcIjQwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYXJvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQkE5Nzc1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBweDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjYTI4NjY0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGlzdGlsbGVyeShpdGVtLmJyYW5kcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJDYXBpdGFsaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwbG9yZSBtb3JlXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0QWx0SWNvbiBzeD17eyBjb2xvcjogXCIjZmZmXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJjcmVhdGVUaGVtZSIsInVzZU1lZGlhUXVlcnkiLCJ1c2VSb3V0ZXIiLCJBcnJvd1JpZ2h0QWx0SWNvbiIsIk1lcmNoYW50Q2FyZCIsImxvYWRpbmciLCJkYXRhIiwicm91dGVyIiwiaGFuZGxlTWVyY2hhbnQiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJoZWFkaW5nTmFtZSIsIm1lcmNoYW50cyIsIm1hcCIsIml0ZW0iLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwiZm9udFdlaWdodCIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJjb2xvciIsIm5hbWUiLCJ0ZXh0QWxpZ24iLCJwciIsIm1yIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY3Vyc29yIiwibXQiLCJweCIsIm9uQ2xpY2siLCJoYW5kbGVEaXN0aWxsZXJ5IiwiYnJhbmRzIiwidGV4dFRyYW5zZm9ybSIsInBhZGRpbmciLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/B2C/companies/brandDetail/_components/MerchantCard.js\n"));

/***/ })

});