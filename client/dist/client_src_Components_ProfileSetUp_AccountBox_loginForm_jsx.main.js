"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcognitive_app"] = self["webpackChunkcognitive_app"] || []).push([["client_src_Components_ProfileSetUp_AccountBox_loginForm_jsx"],{

/***/ "./client/src/Components/ProfileSetUp/AccountBox/common.jsx":
/*!******************************************************************!*\
  !*** ./client/src/Components/ProfileSetUp/AccountBox/common.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoldLink\": () => (/* binding */ BoldLink),\n/* harmony export */   \"BoxContainer\": () => (/* binding */ BoxContainer),\n/* harmony export */   \"FormContainer\": () => (/* binding */ FormContainer),\n/* harmony export */   \"Input\": () => (/* binding */ Input),\n/* harmony export */   \"MutedLink\": () => (/* binding */ MutedLink),\n/* harmony export */   \"SliderContainer\": () => (/* binding */ SliderContainer),\n/* harmony export */   \"SubmitButton\": () => (/* binding */ SubmitButton),\n/* harmony export */   \"TextContainer\": () => (/* binding */ TextContainer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;\n\n\nvar BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 10px;\\n  padding-left: 19px;\\n\"])));\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  padding: 1px;\\n\"])));\nvar SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  display: flex;\\n  border: none;\\n  flex-direction: column;\\n  padding: 10px;\\n\"])));\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: 0px 0px 9.5px rgba(15, 15, 15, 0.89);\\n\"])));\nvar MutedLink = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 11px;\\n  color: rgba(200, 200, 200, 0.8);\\n  font-weight: 500;\\n  text-decoration: none;\\n\"])));\nvar BoldLink = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].a(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 11px;\\n  color: rgb(241, 196, 15);\\n  font-weight: 500;\\n  text-decoration: none;\\n  margin: 0 4px;\\n\"])));\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  height: 42px;\\n  outline: none;\\n  border: 1px solid rgba(200, 200, 200, 0.8);\\n  padding: 0px 10px;\\n  border-bottom: 1.4px solid transparent;\\n  transition: all 200ms ease-in-out;\\n  font-size: 15px;\\n  &::placeholder {\\n    color: rgba(200, 200, 200, 1);\\n  }\\n  &:not(:last-of-type) {\\n    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);\\n  }\\n  &:focus {\\n    outline: none;\\n    border-bottom: 2px solid #dae6df;\\n  }\\n\"])));\nvar SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  padding: 11px 40%;\\n  color: #fff;\\n  font-size: 15px;\\n  font-weight: 600;\\n  border: none;\\n  border-radius: 100px 100px 100px 100px;\\n  cursor: pointer;\\n  transition: all, 240ms ease-in-out;\\n  background-color: #dae6df;\\n  background: linear-gradient(0deg, #dae6df 3%, #346611 0%);\\n\\n  &:hover {\\n    filter: brightness(1.03);\\n  }\\n\"])));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvUHJvZmlsZVNldFVwL0FjY291bnRCb3gvY29tbW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2duaXRpdmUtYXBwLy4vY2xpZW50L3NyYy9Db21wb25lbnRzL1Byb2ZpbGVTZXRVcC9BY2NvdW50Qm94L2NvbW1vbi5qc3g/MDlmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIjtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCwgX3RlbXBsYXRlT2JqZWN0MiwgX3RlbXBsYXRlT2JqZWN0MywgX3RlbXBsYXRlT2JqZWN0NCwgX3RlbXBsYXRlT2JqZWN0NSwgX3RlbXBsYXRlT2JqZWN0NiwgX3RlbXBsYXRlT2JqZWN0NywgX3RlbXBsYXRlT2JqZWN0ODtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmV4cG9ydCB2YXIgQm94Q29udGFpbmVyID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QgfHwgKF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE5cHg7XFxuXCJdKSkpO1xuZXhwb3J0IHZhciBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3QyIHx8IChfdGVtcGxhdGVPYmplY3QyID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAxcHg7XFxuXCJdKSkpO1xuZXhwb3J0IHZhciBTbGlkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2KF90ZW1wbGF0ZU9iamVjdDMgfHwgKF90ZW1wbGF0ZU9iamVjdDMgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuXCJdKSkpO1xuZXhwb3J0IHZhciBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmRpdihfdGVtcGxhdGVPYmplY3Q0IHx8IChfdGVtcGxhdGVPYmplY3Q0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDkuNXB4IHJnYmEoMTUsIDE1LCAxNSwgMC44OSk7XFxuXCJdKSkpO1xuZXhwb3J0IHZhciBNdXRlZExpbmsgPSBzdHlsZWQuYShfdGVtcGxhdGVPYmplY3Q1IHx8IChfdGVtcGxhdGVPYmplY3Q1ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuOCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblwiXSkpKTtcbmV4cG9ydCB2YXIgQm9sZExpbmsgPSBzdHlsZWQuYShfdGVtcGxhdGVPYmplY3Q2IHx8IChfdGVtcGxhdGVPYmplY3Q2ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGNvbG9yOiByZ2IoMjQxLCAxOTYsIDE1KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDAgNHB4O1xcblwiXSkpKTtcbmV4cG9ydCB2YXIgSW5wdXQgPSBzdHlsZWQuaW5wdXQoX3RlbXBsYXRlT2JqZWN0NyB8fCAoX3RlbXBsYXRlT2JqZWN0NyA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuOCk7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDEuNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAxKTtcXG4gIH1cXG4gICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjQpO1xcbiAgfVxcbiAgJjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGFlNmRmO1xcbiAgfVxcblwiXSkpKTtcbmV4cG9ydCB2YXIgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbihfdGVtcGxhdGVPYmplY3Q4IHx8IChfdGVtcGxhdGVPYmplY3Q4ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTFweCA0MCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCwgMjQwbXMgZWFzZS1pbi1vdXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlNmRmO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNkYWU2ZGYgMyUsICMzNDY2MTEgMCUpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjAzKTtcXG4gIH1cXG5cIl0pKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/Components/ProfileSetUp/AccountBox/common.jsx\n");

/***/ }),

/***/ "./client/src/Components/ProfileSetUp/AccountBox/loginForm.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/Components/ProfileSetUp/AccountBox/loginForm.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _Providers_MainProvider_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Providers/MainProvider.jsx */ \"./client/src/Components/Providers/MainProvider.jsx\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ \"./client/src/Components/ProfileSetUp/AccountBox/common.jsx\");\n/* harmony import */ var _Marginer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Marginer */ \"./client/src/Components/ProfileSetUp/Marginer/index.jsx\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Slider/Slider.js\");\n/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Person */ \"./node_modules/@mui/icons-material/Person.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction loginForm(props) {\n  var _useMainContext = (0,_Providers_MainProvider_jsx__WEBPACK_IMPORTED_MODULE_3__.useMainContext)(),\n      userProfile = _useMainContext.userProfile,\n      setUserProfile = _useMainContext.setUserProfile;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    age: '',\n    gender: '',\n    name: '',\n    imgUrl: ''\n  }),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      info = _useState2[0],\n      setInfo = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      formErrors = _useState4[0],\n      SetFormErrors = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      isSubmit = _useState6[0],\n      setIsSubmit = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n      userReg = _useState8[0],\n      setUserReg = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState9, 2),\n      name = _useState10[0],\n      SetName = _useState10[1];\n\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),\n      username = _useParams.username;\n\n  var validate = function validate(values) {\n    var errors = {};\n\n    if (!values.name) {\n      errors.name = \"Name is required!\";\n    }\n\n    return errors;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (name !== '') {\n      SetFormErrors({});\n    }\n  }, [name]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (userProfile._id) {\n      var config = {\n        params: {\n          _id: userProfile._id\n        }\n      };\n      axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/profile', config).then(function (res) {\n        setInfo({\n          age: res.data.age,\n          gender: res.data.gender,\n          name: res.data.name,\n          imgUrl: res.data.imgUrl\n        });\n      });\n    }\n  }, []);\n  var genderMarks = [{\n    value: 0,\n    label: 'Female'\n  }, {\n    value: 1,\n    label: 'Male'\n  }, {\n    value: 2,\n    label: 'Other'\n  }];\n  var ageMarks = [{\n    value: 0,\n    label: 'Youth'\n  }, {\n    value: 1,\n    label: 'Adult'\n  }, {\n    value: 2,\n    label: 'Senior'\n  }];\n\n  function genderFormatVal(value) {\n    for (var i = 0; i < genderMarks.length; i++) {\n      if (genderMarks[i].value === value) {\n        return genderMarks[i].label;\n      }\n    }\n  }\n\n  function ageFormatVal(value) {\n    for (var i = 0; i < ageMarks.length; i++) {\n      if (ageMarks[i].value === value) {\n        return ageMarks[i].label;\n      }\n    }\n  }\n\n  var handleName = function handleName(e) {\n    e.preventDefault();\n    SetName(e.target.value);\n  };\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    e.persist();\n    var date = new Date();\n    var serverPackage = {\n      name: e.target.name.value,\n      age: ageFormatVal(Number(e.target.age.value)),\n      gender: genderFormatVal(Number(e.target.gender.value)),\n      uid: userProfile.uid,\n      userCreated: date,\n      imgUrl: userProfile.imgUrl || 'https://res.cloudinary.com/davidmo/image/upload/v1649809933/avatar-1577909_1280_ijj1cp.png'\n    };\n    SetFormErrors(validate(serverPackage));\n    setIsSubmit(true);\n    setUserReg(serverPackage);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (isSubmit && userReg) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/profile', userReg).then(function (result) {\n        setUserProfile(result.data);\n        localStorage.setItem('userProfile', JSON.stringify(result.data));\n        localStorage.setItem('uid', result.data.uid);\n        navigate(\"/cognitivetest1\");\n      })[\"catch\"](function (err) {\n        return console.log(\"Profile post error:\", err);\n      });\n    }\n  }, [isSubmit, userReg]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.submitLabel === \"Register\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.BoxContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.TextContainer, {\n    value: name\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    right: \"40%\",\n    sx: {\n      color: \"#6F8363\",\n      scale: '1.8',\n      position: \"relative\",\n      bottom: '15px',\n      mr: 2,\n      my: 3\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.Input, {\n    id: \"name\",\n    placeholder: \"Name\",\n    defaultValue: userProfile && userProfile.name,\n    autoFocus: true,\n    onChange: handleName\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    color: \"red\",\n    marginTop: \"-20px\"\n  }, formErrors.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.SliderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      textAlign: \"center\",\n      marginTop: \"10px\"\n    }\n  }, \"Gender\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    name: \"gender\",\n    step: 1,\n    min: 0,\n    max: 2,\n    marks: genderMarks,\n    valueLabelFormat: genderFormatVal,\n    \"aria-label\": \"Default\",\n    valueLabelDisplay: \"auto\",\n    style: {\n      color: \"#dae6df\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.SliderContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"Age\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    name: \"age\",\n    step: 1,\n    min: 0,\n    max: 2,\n    marks: ageMarks,\n    valueLabelFormat: ageFormatVal,\n    \"aria-label\": \"Default\",\n    valueLabelDisplay: \"auto\",\n    style: {\n      color: \"#dae6df\"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Marginer__WEBPACK_IMPORTED_MODULE_5__.Marginer, {\n    direction: \"vertical\",\n    margin: 10\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Marginer__WEBPACK_IMPORTED_MODULE_5__.Marginer, {\n    direction: \"vertical\",\n    margin: \"1.6em\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_common__WEBPACK_IMPORTED_MODULE_4__.SubmitButton, {\n    type: \"submit\"\n  }, props.submitLabel, \" Sign up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Marginer__WEBPACK_IMPORTED_MODULE_5__.Marginer, {\n    direction: \"vertical\",\n    margin: \"1em\"\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvUHJvZmlsZVNldFVwL0FjY291bnRCb3gvbG9naW5Gb3JtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29nbml0aXZlLWFwcC8uL2NsaWVudC9zcmMvQ29tcG9uZW50cy9Qcm9maWxlU2V0VXAvQWNjb3VudEJveC9sb2dpbkZvcm0uanN4PzdmNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlTWFpbkNvbnRleHQgfSBmcm9tICcuLi8uLi9Qcm92aWRlcnMvTWFpblByb3ZpZGVyLmpzeCc7XG5pbXBvcnQgeyBCb2xkTGluaywgQm94Q29udGFpbmVyLCBGb3JtQ29udGFpbmVyLCBTbGlkZXJDb250YWluZXIsIFRleHRDb250YWluZXIsIElucHV0LCBNdXRlZExpbmssIFN1Ym1pdEJ1dHRvbiB9IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0IHsgTWFyZ2luZXIgfSBmcm9tIFwiLi4vTWFyZ2luZXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBMb2FkaW5nQnV0dG9uIH0gZnJvbSAnQG11aS9sYWInO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBCdXR0b24sIFNsaWRlciwgVGV4dEZpZWxkLCBUZXh0YXJlYUF1dG9zaXplIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xuaW1wb3J0IFBlcnNvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXJzb24nO1xuXG5mdW5jdGlvbiBsb2dpbkZvcm0ocHJvcHMpIHtcbiAgdmFyIF91c2VNYWluQ29udGV4dCA9IHVzZU1haW5Db250ZXh0KCksXG4gICAgICB1c2VyUHJvZmlsZSA9IF91c2VNYWluQ29udGV4dC51c2VyUHJvZmlsZSxcbiAgICAgIHNldFVzZXJQcm9maWxlID0gX3VzZU1haW5Db250ZXh0LnNldFVzZXJQcm9maWxlO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh7XG4gICAgYWdlOiAnJyxcbiAgICBnZW5kZXI6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGltZ1VybDogJydcbiAgfSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGluZm8gPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW5mbyA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSh7fSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBmb3JtRXJyb3JzID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIFNldEZvcm1FcnJvcnMgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgaXNTdWJtaXQgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0SXNTdWJtaXQgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU3ID0gdXNlU3RhdGUoe30pLFxuICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgdXNlclJlZyA9IF91c2VTdGF0ZThbMF0sXG4gICAgICBzZXRVc2VyUmVnID0gX3VzZVN0YXRlOFsxXTtcblxuICB2YXIgX3VzZVN0YXRlOSA9IHVzZVN0YXRlKCcnKSxcbiAgICAgIF91c2VTdGF0ZTEwID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlOSwgMiksXG4gICAgICBuYW1lID0gX3VzZVN0YXRlMTBbMF0sXG4gICAgICBTZXROYW1lID0gX3VzZVN0YXRlMTBbMV07XG5cbiAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICB2YXIgX3VzZVBhcmFtcyA9IHVzZVBhcmFtcygpLFxuICAgICAgdXNlcm5hbWUgPSBfdXNlUGFyYW1zLnVzZXJuYW1lO1xuXG4gIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlcykge1xuICAgIHZhciBlcnJvcnMgPSB7fTtcblxuICAgIGlmICghdmFsdWVzLm5hbWUpIHtcbiAgICAgIGVycm9ycy5uYW1lID0gXCJOYW1lIGlzIHJlcXVpcmVkIVwiO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmFtZSAhPT0gJycpIHtcbiAgICAgIFNldEZvcm1FcnJvcnMoe30pO1xuICAgIH1cbiAgfSwgW25hbWVdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodXNlclByb2ZpbGUuX2lkKSB7XG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBfaWQ6IHVzZXJQcm9maWxlLl9pZFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXhpb3MuZ2V0KCcvYXBpL3Byb2ZpbGUnLCBjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZXRJbmZvKHtcbiAgICAgICAgICBhZ2U6IHJlcy5kYXRhLmFnZSxcbiAgICAgICAgICBnZW5kZXI6IHJlcy5kYXRhLmdlbmRlcixcbiAgICAgICAgICBuYW1lOiByZXMuZGF0YS5uYW1lLFxuICAgICAgICAgIGltZ1VybDogcmVzLmRhdGEuaW1nVXJsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciBnZW5kZXJNYXJrcyA9IFt7XG4gICAgdmFsdWU6IDAsXG4gICAgbGFiZWw6ICdGZW1hbGUnXG4gIH0sIHtcbiAgICB2YWx1ZTogMSxcbiAgICBsYWJlbDogJ01hbGUnXG4gIH0sIHtcbiAgICB2YWx1ZTogMixcbiAgICBsYWJlbDogJ090aGVyJ1xuICB9XTtcbiAgdmFyIGFnZU1hcmtzID0gW3tcbiAgICB2YWx1ZTogMCxcbiAgICBsYWJlbDogJ1lvdXRoJ1xuICB9LCB7XG4gICAgdmFsdWU6IDEsXG4gICAgbGFiZWw6ICdBZHVsdCdcbiAgfSwge1xuICAgIHZhbHVlOiAyLFxuICAgIGxhYmVsOiAnU2VuaW9yJ1xuICB9XTtcblxuICBmdW5jdGlvbiBnZW5kZXJGb3JtYXRWYWwodmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdlbmRlck1hcmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZ2VuZGVyTWFya3NbaV0udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZW5kZXJNYXJrc1tpXS5sYWJlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZ2VGb3JtYXRWYWwodmFsdWUpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFnZU1hcmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWdlTWFya3NbaV0udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhZ2VNYXJrc1tpXS5sYWJlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGFuZGxlTmFtZSA9IGZ1bmN0aW9uIGhhbmRsZU5hbWUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBTZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnBlcnNpc3QoKTtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIHNlcnZlclBhY2thZ2UgPSB7XG4gICAgICBuYW1lOiBlLnRhcmdldC5uYW1lLnZhbHVlLFxuICAgICAgYWdlOiBhZ2VGb3JtYXRWYWwoTnVtYmVyKGUudGFyZ2V0LmFnZS52YWx1ZSkpLFxuICAgICAgZ2VuZGVyOiBnZW5kZXJGb3JtYXRWYWwoTnVtYmVyKGUudGFyZ2V0LmdlbmRlci52YWx1ZSkpLFxuICAgICAgdWlkOiB1c2VyUHJvZmlsZS51aWQsXG4gICAgICB1c2VyQ3JlYXRlZDogZGF0ZSxcbiAgICAgIGltZ1VybDogdXNlclByb2ZpbGUuaW1nVXJsIHx8ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kYXZpZG1vL2ltYWdlL3VwbG9hZC92MTY0OTgwOTkzMy9hdmF0YXItMTU3NzkwOV8xMjgwX2lqajFjcC5wbmcnXG4gICAgfTtcbiAgICBTZXRGb3JtRXJyb3JzKHZhbGlkYXRlKHNlcnZlclBhY2thZ2UpKTtcbiAgICBzZXRJc1N1Ym1pdCh0cnVlKTtcbiAgICBzZXRVc2VyUmVnKHNlcnZlclBhY2thZ2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNTdWJtaXQgJiYgdXNlclJlZykge1xuICAgICAgYXhpb3MucG9zdCgnL2FwaS9wcm9maWxlJywgdXNlclJlZykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHNldFVzZXJQcm9maWxlKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJQcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VpZCcsIHJlc3VsdC5kYXRhLnVpZCk7XG4gICAgICAgIG5hdmlnYXRlKFwiL2NvZ25pdGl2ZXRlc3QxXCIpO1xuICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlByb2ZpbGUgcG9zdCBlcnJvcjpcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2lzU3VibWl0LCB1c2VyUmVnXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcHJvcHMuc3VibWl0TGFiZWwgPT09IFwiUmVnaXN0ZXJcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtcbiAgICBvblN1Ym1pdDogaGFuZGxlU3VibWl0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveENvbnRhaW5lciwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRhaW5lciwge1xuICAgIHZhbHVlOiBuYW1lXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBlcnNvbkljb24sIHtcbiAgICByaWdodDogXCI0MCVcIixcbiAgICBzeDoge1xuICAgICAgY29sb3I6IFwiIzZGODM2M1wiLFxuICAgICAgc2NhbGU6ICcxLjgnLFxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIGJvdHRvbTogJzE1cHgnLFxuICAgICAgbXI6IDIsXG4gICAgICBteTogM1xuICAgIH1cbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgaWQ6IFwibmFtZVwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIk5hbWVcIixcbiAgICBkZWZhdWx0VmFsdWU6IHVzZXJQcm9maWxlICYmIHVzZXJQcm9maWxlLm5hbWUsXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVOYW1lXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIG1hcmdpblRvcDogXCItMjBweFwiXG4gIH0sIGZvcm1FcnJvcnMubmFtZSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNsaWRlckNvbnRhaW5lciwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIHN0eWxlOiB7XG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiXG4gICAgfVxuICB9LCBcIkdlbmRlclwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2xpZGVyLCB7XG4gICAgbmFtZTogXCJnZW5kZXJcIixcbiAgICBzdGVwOiAxLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDIsXG4gICAgbWFya3M6IGdlbmRlck1hcmtzLFxuICAgIHZhbHVlTGFiZWxGb3JtYXQ6IGdlbmRlckZvcm1hdFZhbCxcbiAgICBcImFyaWEtbGFiZWxcIjogXCJEZWZhdWx0XCIsXG4gICAgdmFsdWVMYWJlbERpc3BsYXk6IFwiYXV0b1wiLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjZGFlNmRmXCJcbiAgICB9XG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2xpZGVyQ29udGFpbmVyLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSwgXCJBZ2VcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNsaWRlciwge1xuICAgIG5hbWU6IFwiYWdlXCIsXG4gICAgc3RlcDogMSxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyLFxuICAgIG1hcmtzOiBhZ2VNYXJrcyxcbiAgICB2YWx1ZUxhYmVsRm9ybWF0OiBhZ2VGb3JtYXRWYWwsXG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiRGVmYXVsdFwiLFxuICAgIHZhbHVlTGFiZWxEaXNwbGF5OiBcImF1dG9cIixcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwiI2RhZTZkZlwiXG4gICAgfVxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1hcmdpbmVyLCB7XG4gICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgbWFyZ2luOiAxMFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWFyZ2luZXIsIHtcbiAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICBtYXJnaW46IFwiMS42ZW1cIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3VibWl0QnV0dG9uLCB7XG4gICAgdHlwZTogXCJzdWJtaXRcIlxuICB9LCBwcm9wcy5zdWJtaXRMYWJlbCwgXCIgU2lnbiB1cFwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWFyZ2luZXIsIHtcbiAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICBtYXJnaW46IFwiMWVtXCJcbiAgfSkpKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luRm9ybTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/Components/ProfileSetUp/AccountBox/loginForm.jsx\n");

/***/ }),

/***/ "./client/src/Components/ProfileSetUp/Marginer/index.jsx":
/*!***************************************************************!*\
  !*** ./client/src/Components/ProfileSetUp/Marginer/index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Marginer\": () => (/* binding */ Marginer)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2;\n\n\n\nvar HorizontalMargin = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  width: \", \";\\n\"])), function (_ref) {\n  var margin = _ref.margin;\n  return typeof margin === \"string\" ? margin : \"\".concat(margin, \"px\");\n});\nvar VerticalMargin = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  height: \", \";\\n\"])), function (_ref2) {\n  var margin = _ref2.margin;\n  return typeof margin === \"string\" ? margin : \"\".concat(margin, \"px\");\n});\n\nfunction Marginer(props) {\n  var direction = props.direction;\n  if (direction === \"horizontal\") return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(HorizontalMargin, props);else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(VerticalMargin, props);\n  }\n}\n\nMarginer.defaultProps = {\n  direction: \"horizontal\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvUHJvZmlsZVNldFVwL01hcmdpbmVyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2duaXRpdmUtYXBwLy4vY2xpZW50L3NyYy9Db21wb25lbnRzL1Byb2ZpbGVTZXRVcC9NYXJnaW5lci9pbmRleC5qc3g/M2FlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWxcIjtcblxudmFyIF90ZW1wbGF0ZU9iamVjdCwgX3RlbXBsYXRlT2JqZWN0MjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbnZhciBIb3Jpem9udGFsTWFyZ2luID0gc3R5bGVkLnNwYW4oX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiBcIiwgXCI7XFxuXCJdKSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBtYXJnaW4gPSBfcmVmLm1hcmdpbjtcbiAgcmV0dXJuIHR5cGVvZiBtYXJnaW4gPT09IFwic3RyaW5nXCIgPyBtYXJnaW4gOiBcIlwiLmNvbmNhdChtYXJnaW4sIFwicHhcIik7XG59KTtcbnZhciBWZXJ0aWNhbE1hcmdpbiA9IHN0eWxlZC5zcGFuKF90ZW1wbGF0ZU9iamVjdDIgfHwgKF90ZW1wbGF0ZU9iamVjdDIgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogXCIsIFwiO1xcblwiXSkpLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIG1hcmdpbiA9IF9yZWYyLm1hcmdpbjtcbiAgcmV0dXJuIHR5cGVvZiBtYXJnaW4gPT09IFwic3RyaW5nXCIgPyBtYXJnaW4gOiBcIlwiLmNvbmNhdChtYXJnaW4sIFwicHhcIik7XG59KTtcblxuZnVuY3Rpb24gTWFyZ2luZXIocHJvcHMpIHtcbiAgdmFyIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbjtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIb3Jpem9udGFsTWFyZ2luLCBwcm9wcyk7ZWxzZSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZlcnRpY2FsTWFyZ2luLCBwcm9wcyk7XG4gIH1cbn1cblxuTWFyZ2luZXIuZGVmYXVsdFByb3BzID0ge1xuICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiXG59O1xuZXhwb3J0IHsgTWFyZ2luZXIgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/Components/ProfileSetUp/Marginer/index.jsx\n");

/***/ })

}]);