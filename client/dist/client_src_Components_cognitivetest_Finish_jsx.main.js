"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcognitive_app"] = self["webpackChunkcognitive_app"] || []).push([["client_src_Components_cognitivetest_Finish_jsx"],{

/***/ "./client/src/Components/cognitivetest/Finish.jsx":
/*!********************************************************!*\
  !*** ./client/src/Components/cognitivetest/Finish.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Providers_MainProvider_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Providers/MainProvider.jsx */ \"./client/src/Components/Providers/MainProvider.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _Layout_WithNavigation_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/WithNavigation.jsx */ \"./client/src/Components/Layout/WithNavigation.jsx\");\n/* harmony import */ var _Styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles.scss */ \"./client/src/Components/Styles.scss\");\n\n\n\n\n\n\n\n\n\n\n\nvar centerScreen = {\n  width: '70vw',\n  height: '50vh',\n  background: '#000000',\n  color: '#f5f5f5',\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center',\n  marginLeft: '10%',\n  marginRight: '10%',\n  paddingTop: '15%',\n  paddingBottom: '10%',\n  flexDirection: 'column'\n};\nvar button = {\n  width: '80px',\n  backgroundColor: '#5f7182',\n  color: '#fafafa',\n  height: '50px',\n  marginLeft: '45%'\n};\nvar Finish = function Finish() {\n  var token = window.localStorage.getItem('token');\n  var _useMainContext = (0,_Providers_MainProvider_jsx__WEBPACK_IMPORTED_MODULE_3__.useMainContext)(),\n    userProfile = _useMainContext.userProfile,\n    cognitiveTest = _useMainContext.cognitiveTest,\n    setCognitiveTest = _useMainContext.setCognitiveTest;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    userAuth = _useState2[0],\n    setUserAuth = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n    firstPage = _useState4[0],\n    setFirstPage = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n    keyClicked = _useState6[0],\n    SetKeyClicked = _useState6[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n    isMounted = _useState8[0],\n    setIsMounted = _useState8[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setIsMounted(true);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return function () {\n      setIsMounted(false);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (userProfile && token) {\n      setUserAuth(true);\n    } else {\n      navigate('/login');\n    }\n  }, [userProfile]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, userAuth ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Layout_WithNavigation_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      flexDirection: 'column',\n      alignItems: 'center',\n      height: '100vh',\n      maxWidth: '100vw',\n      background: '#000',\n      color: '#fff',\n      top: 0,\n      bottom: 0\n    }\n  }, firstPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    style: centerScreen\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", {\n    style: {\n      color: '#e67373',\n      fontSize: 50\n    }\n  }, \"TEST END - LOG OUT\"))) : null)) : null);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finish);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvY29nbml0aXZldGVzdC9GaW5pc2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZ25pdGl2ZS1hcHAvLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvY29nbml0aXZldGVzdC9GaW5pc2guanN4PzFhMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZU1haW5Db250ZXh0IH0gZnJvbSAnLi4vUHJvdmlkZXJzL01haW5Qcm92aWRlci5qc3gnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi9MYXlvdXQvV2l0aE5hdmlnYXRpb24uanN4JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0ICcuLi9TdHlsZXMuc2Nzcyc7XG52YXIgY2VudGVyU2NyZWVuID0ge1xuICB3aWR0aDogJzcwdncnLFxuICBoZWlnaHQ6ICc1MHZoJyxcbiAgYmFja2dyb3VuZDogJyMwMDAwMDAnLFxuICBjb2xvcjogJyNmNWY1ZjUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIG1hcmdpbkxlZnQ6ICcxMCUnLFxuICBtYXJnaW5SaWdodDogJzEwJScsXG4gIHBhZGRpbmdUb3A6ICcxNSUnLFxuICBwYWRkaW5nQm90dG9tOiAnMTAlJyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbn07XG52YXIgYnV0dG9uID0ge1xuICB3aWR0aDogJzgwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjNWY3MTgyJyxcbiAgY29sb3I6ICcjZmFmYWZhJyxcbiAgaGVpZ2h0OiAnNTBweCcsXG4gIG1hcmdpbkxlZnQ6ICc0NSUnXG59O1xudmFyIEZpbmlzaCA9IGZ1bmN0aW9uIEZpbmlzaCgpIHtcbiAgdmFyIHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICB2YXIgX3VzZU1haW5Db250ZXh0ID0gdXNlTWFpbkNvbnRleHQoKSxcbiAgICB1c2VyUHJvZmlsZSA9IF91c2VNYWluQ29udGV4dC51c2VyUHJvZmlsZSxcbiAgICBjb2duaXRpdmVUZXN0ID0gX3VzZU1haW5Db250ZXh0LmNvZ25pdGl2ZVRlc3QsXG4gICAgc2V0Q29nbml0aXZlVGVzdCA9IF91c2VNYWluQ29udGV4dC5zZXRDb2duaXRpdmVUZXN0O1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgIHVzZXJBdXRoID0gX3VzZVN0YXRlMlswXSxcbiAgICBzZXRVc2VyQXV0aCA9IF91c2VTdGF0ZTJbMV07XG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUodHJ1ZSksXG4gICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgIGZpcnN0UGFnZSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgc2V0Rmlyc3RQYWdlID0gX3VzZVN0YXRlNFsxXTtcbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZSgnJyksXG4gICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgIGtleUNsaWNrZWQgPSBfdXNlU3RhdGU2WzBdLFxuICAgIFNldEtleUNsaWNrZWQgPSBfdXNlU3RhdGU2WzFdO1xuICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICB2YXIgX3VzZVN0YXRlNyA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgaXNNb3VudGVkID0gX3VzZVN0YXRlOFswXSxcbiAgICBzZXRJc01vdW50ZWQgPSBfdXNlU3RhdGU4WzFdO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldElzTW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJc01vdW50ZWQoZmFsc2UpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodXNlclByb2ZpbGUgJiYgdG9rZW4pIHtcbiAgICAgIHNldFVzZXJBdXRoKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZpZ2F0ZSgnL2xvZ2luJyk7XG4gICAgfVxuICB9LCBbdXNlclByb2ZpbGVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB1c2VyQXV0aCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uQmFyLCBudWxsKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgbWF4V2lkdGg6ICcxMDB2dycsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiAwXG4gICAgfVxuICB9LCBmaXJzdFBhZ2UgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiBjZW50ZXJTY3JlZW5cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGNvbG9yOiAnI2U2NzM3MycsXG4gICAgICBmb250U2l6ZTogNTBcbiAgICB9XG4gIH0sIFwiVEVTVCBFTkQgLSBMT0cgT1VUXCIpKSkgOiBudWxsKSkgOiBudWxsKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaW5pc2g7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/Components/cognitivetest/Finish.jsx\n");

/***/ })

}]);