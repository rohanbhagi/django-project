"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/components/homepage.js\");\n/* harmony import */ var _RoomJoinPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoomJoinPage */ \"./src/components/RoomJoinPage.js\");\n/* harmony import */ var _CreateRoomPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateRoomPage */ \"./src/components/CreateRoomPage.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/node_modules/react-router/dist/development/chunk-GNGMS2XR.mjs\");\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n      exact: true,\n      path: \"/\"\n    }, \"This is the home page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n      path: \"/join\",\n      Component: _RoomJoinPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n      path: \"/create\",\n      Component: _CreateRoomPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    })));\n  }\n}\nconst appDiv = document.getElementById(\"app\");\nif (appDiv) {\n  const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appDiv);\n  root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));\n} else {\n  console.log(\"Element not found\");\n}\n\n//# sourceURL=webpack://frontend/./src/components/app.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18672e815ba3ac16efec")
/******/ })();
/******/ 
/******/ }
);