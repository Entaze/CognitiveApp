"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcognitive_app"] = self["webpackChunkcognitive_app"] || []).push([["client_src_Components_Welcome_jsx"],{

/***/ "./client/src/Components/Welcome.jsx":
/*!*******************************************!*\
  !*** ./client/src/Components/Welcome.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Providers/MainProvider.jsx'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Layout/WithNavigation.jsx'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Styles.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\n\n\n\nvar centerScreen = {\n  width: '70vw',\n  height: '50vh',\n  background: '#000000',\n  color: '#f5f5f5',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center',\n  marginLeft: '10%',\n  marginRight: '10%',\n  paddingTop: '15%',\n  paddingBottom: '10%',\n  flexDirection: 'column'\n};\nvar button = {\n  width: '80px',\n  backgroundColor: '#5f7182',\n  color: '#fafafa',\n  height: '50px',\n  marginLeft: '45%'\n};\n\nvar Welcome = function Welcome() {\n  var _useMainContext = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Providers/MainProvider.jsx'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\n      userProfile = _useMainContext.userProfile,\n      cognitiveTest = _useMainContext.cognitiveTest,\n      setCognitiveTest = _useMainContext.setCognitiveTest;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      userAuth = _useState2[0],\n      setUserAuth = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      firstPage = _useState4[0],\n      setFirstPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      keyClicked = _useState6[0],\n      SetKeyClicked = _useState6[1];\n\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n      isMounted = _useState8[0],\n      setIsMounted = _useState8[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setIsMounted(true);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return function () {\n      setIsMounted(false);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (userProfile) {\n      setUserAuth(true);\n    } else {\n      navigate('/login');\n    }\n  }, [userProfile]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, userAuth ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Layout/WithNavigation.jsx'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      flexDirection: 'column',\n      alignItems: 'center',\n      height: '100vh',\n      maxWidth: '100vw',\n      background: '#000',\n      color: '#fff',\n      top: 0,\n      bottom: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    style: centerScreen\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", {\n    style: {\n      color: '#e67373',\n      fontSize: 50\n    }\n  }, \"TEST END\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", null, \"Start\")))))) : null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome); // import React from 'react'\n// import './Styles.scss'\n// const Welcome = () => {\n//   return (\n//     <h1 className=\"WelcomeTitle\">Welcome to Cognitive App</h1>\n//   )\n// }\n// export default Welcome//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvV2VsY29tZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZ25pdGl2ZS1hcHAvLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvV2VsY29tZS5qc3g/OTFmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlTWFpbkNvbnRleHQgfSBmcm9tICcuLi9Qcm92aWRlcnMvTWFpblByb3ZpZGVyLmpzeCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL0xheW91dC9XaXRoTmF2aWdhdGlvbi5qc3gnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgJy4uL1N0eWxlcy5zY3NzJztcbnZhciBjZW50ZXJTY3JlZW4gPSB7XG4gIHdpZHRoOiAnNzB2dycsXG4gIGhlaWdodDogJzUwdmgnLFxuICBiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsXG4gIGNvbG9yOiAnI2Y1ZjVmNScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgbWFyZ2luTGVmdDogJzEwJScsXG4gIG1hcmdpblJpZ2h0OiAnMTAlJyxcbiAgcGFkZGluZ1RvcDogJzE1JScsXG4gIHBhZGRpbmdCb3R0b206ICcxMCUnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xufTtcbnZhciBidXR0b24gPSB7XG4gIHdpZHRoOiAnODBweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyM1ZjcxODInLFxuICBjb2xvcjogJyNmYWZhZmEnLFxuICBoZWlnaHQ6ICc1MHB4JyxcbiAgbWFyZ2luTGVmdDogJzQ1JSdcbn07XG5cbnZhciBXZWxjb21lID0gZnVuY3Rpb24gV2VsY29tZSgpIHtcbiAgdmFyIF91c2VNYWluQ29udGV4dCA9IHVzZU1haW5Db250ZXh0KCksXG4gICAgICB1c2VyUHJvZmlsZSA9IF91c2VNYWluQ29udGV4dC51c2VyUHJvZmlsZSxcbiAgICAgIGNvZ25pdGl2ZVRlc3QgPSBfdXNlTWFpbkNvbnRleHQuY29nbml0aXZlVGVzdCxcbiAgICAgIHNldENvZ25pdGl2ZVRlc3QgPSBfdXNlTWFpbkNvbnRleHQuc2V0Q29nbml0aXZlVGVzdDtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB1c2VyQXV0aCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRVc2VyQXV0aCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSh0cnVlKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIGZpcnN0UGFnZSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRGaXJzdFBhZ2UgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoJycpLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAga2V5Q2xpY2tlZCA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICBTZXRLZXlDbGlja2VkID0gX3VzZVN0YXRlNlsxXTtcblxuICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gIHZhciBfdXNlU3RhdGU3ID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgaXNNb3VudGVkID0gX3VzZVN0YXRlOFswXSxcbiAgICAgIHNldElzTW91bnRlZCA9IF91c2VTdGF0ZThbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0SXNNb3VudGVkKGZhbHNlKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHVzZXJQcm9maWxlKSB7XG4gICAgICBzZXRVc2VyQXV0aCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmF2aWdhdGUoJy9sb2dpbicpO1xuICAgIH1cbiAgfSwgW3VzZXJQcm9maWxlXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdXNlckF1dGggPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkJhciwgbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMFxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogY2VudGVyU2NyZWVuXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogJyNlNjczNzMnLFxuICAgICAgZm9udFNpemU6IDUwXG4gICAgfVxuICB9LCBcIlRFU1QgRU5EXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBudWxsLCBcIlN0YXJ0XCIpKSkpKSkgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWU7IC8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCAnLi9TdHlsZXMuc2Nzcydcbi8vIGNvbnN0IFdlbGNvbWUgPSAoKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGgxIGNsYXNzTmFtZT1cIldlbGNvbWVUaXRsZVwiPldlbGNvbWUgdG8gQ29nbml0aXZlIEFwcDwvaDE+XG4vLyAgIClcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IFdlbGNvbWUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/Components/Welcome.jsx\n");

/***/ })

}]);