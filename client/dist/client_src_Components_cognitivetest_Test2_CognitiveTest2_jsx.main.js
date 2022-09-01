"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcognitive_app"] = self["webpackChunkcognitive_app"] || []).push([["client_src_Components_cognitivetest_Test2_CognitiveTest2_jsx"],{

/***/ "./client/src/Components/cognitivetest/Test2/CognitiveTest2.jsx":
/*!**********************************************************************!*\
  !*** ./client/src/Components/cognitivetest/Test2/CognitiveTest2.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/DialogActions/DialogActions.js\");\n/* harmony import */ var _Providers_MainProvider_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Providers/MainProvider.jsx */ \"./client/src/Components/Providers/MainProvider.jsx\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/Dialog/Dialog.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ \"./node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar swipeStyle = {\n  position: \"absolute\",\n  display: \"inline-block\",\n  zIndex: 9998\n};\nvar cardStyle = {\n  position: \"absolute\",\n  backgroundColor: \"#ff9800\",\n  width: 330,\n  maxWidth: \"85vw\",\n  height: \"60vh\",\n  borderRadius: '10px',\n  'backgroundSize': \"cover\",\n  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.05)',\n  'backgroundPosition': \"center\"\n};\nvar cardContainer = {\n  textAlign: 'center',\n  width: '90vw',\n  maxWidth: '330px',\n  height: '70vh',\n  marginTop: '5vh',\n  marginBottom: '3vh'\n};\nvar fontStyle = {\n  position: \"absolute\",\n  color: \"#fff\",\n  fontSize: \"20px\",\n  fontWeight: 700,\n  margin: \"5px\",\n  marginLeft: \"20px\"\n};\nvar smallFontStyle = {\n  color: \"#fff\",\n  textAlign: \"right\",\n  fontSize: \"13px\",\n  fontWeight: 300,\n  marginRight: \"20px\",\n  margin: \"10px\"\n};\nvar cardWrapper = {\n  display: 'flex',\n  flexDirection: 'column',\n  justifyContent: 'center',\n  alignItems: 'center'\n};\nvar modalStyle = {\n  position: 'absolute',\n  display: 'flex',\n  top: '50%',\n  left: '50%',\n  width: '70vw',\n  maxWidth: 330,\n  height: \"60vh\",\n  transform: 'translate(-50%, -50%)',\n  borderRadius: 3,\n  bgcolor: 'background.paper',\n  boxShadow: 24,\n  alignItems: 'center',\n  flexDirection: 'column'\n};\nvar centerScreen = {\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center',\n  textAlign: 'center',\n  minHeight: '100vh'\n};\nvar button = {\n  width: '80px',\n  backgroundColor: '#5f7182',\n  color: '#fafafa',\n  height: '50px',\n  margin: '30px 0 0 30px'\n};\nvar formTitle = {\n  height: '30px',\n  width: '426px',\n  border: 'none',\n  margin: '15px 25px 15px 15px',\n  textAlign: 'center'\n};\nvar formInput = {\n  boxSizing: 'border-box',\n  height: '39px',\n  width: '426px',\n  border: '1px solid #E6E6E6',\n  borderRadius: '10px',\n  margin: '15px 15px 15px 15px',\n  textIndent: '20px'\n};\nvar useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n  root: {\n    borderWidth: \"20px\",\n    borderColor: \"rgba(0,0,0,0.2)\",\n    borderStyle: \"solid\"\n  }\n});\n\nfunction Cognitivetest() {\n  var classes = useStyles();\n\n  var _useMainContext = (0,_Providers_MainProvider_jsx__WEBPACK_IMPORTED_MODULE_4__.useMainContext)(),\n      userProfile = _useMainContext.userProfile,\n      cognitiveTest = _useMainContext.cognitiveTest,\n      setCognitiveTest = _useMainContext.setCognitiveTest;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      testListATrials = _useState2[0],\n      setTestListATrials = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n      firstPage = _useState4[0],\n      setFirstPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState5, 2),\n      startTest = _useState6[0],\n      setStartTest = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState7, 2),\n      tests = _useState8[0],\n      setTests = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(['Asia', 'Sun', 'Key', 'Cat', 'Travel', 'Winter', '']),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState9, 2),\n      wordsArr = _useState10[0],\n      setWordsArr = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState11, 2),\n      word = _useState12[0],\n      setWord = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState13, 2),\n      nav = _useState14[0],\n      setNav = _useState14[1];\n\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState15, 2),\n      formState = _useState16[0],\n      setFormState = _useState16[1];\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      reset = _useForm.reset;\n\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState17, 2),\n      data = _useState18[0],\n      setData = _useState18[1];\n\n  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState19, 2),\n      val = _useState20[0],\n      setVal = _useState20[1];\n\n  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      _useState22 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState21, 2),\n      countModal = _useState22[0],\n      setCountModal = _useState22[1];\n\n  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState24 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState23, 2),\n      finalComm = _useState24[0],\n      setFinalComm = _useState24[1];\n\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();\n\n  var handleRegistration = function handleRegistration(data) {\n    setData(data);\n    handleWordEnter();\n    reset();\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (startTest) {\n      for (var i = 0; i < wordsArr.length; i++) {\n        (function (ind) {\n          setTimeout(function () {\n            setWord(wordsArr[ind]);\n          }, 1000 + 2000 * ind);\n        })(i);\n      }\n    }\n  }, [startTest]); // console.log('We are in stage 2 ...')\n\n  if (word === wordsArr[wordsArr.length - 1]) {\n    setNav(true);\n    setWord();\n  }\n\n  var handleStartTest = function handleStartTest(e) {};\n\n  var handleButtonClick = function handleButtonClick(e) {\n    e.preventDefault();\n    setFormState(true);\n    setNav(false);\n  };\n\n  var toggleFormState = function toggleFormState() {\n    setFormState(true);\n  };\n\n  var handleWordEnter = function handleWordEnter() {\n    setVal();\n    var count = countModal + 1;\n    setCountModal(count);\n    setFormState(false);\n\n    if (count < wordsArr.length - 1) {\n      setTimeout(toggleFormState, 300);\n    }\n  }; // useEffect(() => {\n  //   console.log('Axios post data :', data)\n  //   const param = {id: userProfile._id, word: data};\n  //   axios.post('/api/cognitivetest', param)\n  //   .then(() => {\n  //     console.log(res.data)\n  //   })\n  // }, [data])\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (countModal === wordsArr.length - 1) {\n      var trialTimes = testListATrials - 1;\n      setTestListATrials(trialTimes);\n    }\n  }, [countModal]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (testListATrials > 0 && testListATrials < 5) {\n      console.log('How many tests left after test 2? : :', testListATrials);\n      setFinalComm(true);\n    }\n  }, [testListATrials]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (countModal === wordsArr.length - 1) {\n      var modalCountdown = testListATrials - 1;\n      console.log('testListATrials before end :', testListATrials);\n      modalCountdown > 0 ? setTestListATrials(modalCountdown) : null;\n    }\n  }, [countModal]);\n  var buttonEntry = countModal < wordsArr.length - 2 ? 'Enter' : 'Submit';\n  var wordCount = countModal + 1;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: \"centerScreen\",\n    style: centerScreen\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    style: {\n      marginBottom: '350px',\n      display: 'inline-block'\n    }\n  }, firstPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      fontSize: 60,\n      marginBottom: 20,\n      fontWeight: 700,\n      display: 'inline-block'\n    }\n  }, \"Test 2: Finger Tapping Task.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      fontSize: 40,\n      marginBottom: 20,\n      color: '#be8484',\n      fontWeight: 700,\n      display: 'inline-block'\n    }\n  }, \"You will be shown a sequence of numbers on the screen. Using your dominant hand (i.e. the hand you use to write with), type the sequence as fast and accurately as possible. Keep typing the sequence over and over until the numbers disappear. [Press enter or click start to continue]\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    variant: \"outlined\",\n    style: button,\n    onClick: handleStartTest,\n    type: \"submit\"\n  }, \"Start\")) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      fontSize: 40,\n      fontWeight: 700,\n      marginBottom: '300px',\n      textAlign: 'center',\n      fontFamily: 'Courgette'\n    }\n  }, word), nav ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    style: {\n      display: 'inline-block',\n      marginBottom: '300px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    style: {\n      fontSize: 40,\n      fontWeight: 700\n    }\n  }, \"Click on button to enter as many words as you can remember...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    variant: \"outlined\",\n    style: button,\n    onClick: handleButtonClick,\n    type: \"submit\"\n  }, \"Go..\"))) : null, formState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    style: {\n      fontSize: 40,\n      fontWeight: 700\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    open: true,\n    PaperProps: {\n      classes: {\n        root: classes.root\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    style: {\n      display: 'inline-block'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"form\", {\n    onSubmit: handleSubmit(handleRegistration)\n  }, countModal < wordsArr.length - 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    style: formTitle\n  }, \"Enter word \", wordCount, \"..\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"input\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    name: \"name\"\n  }, register(\"word\"), {\n    placeholder: \"Word..\",\n    style: formInput\n  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    variant: \"outlined\",\n    style: button,\n    onClick: handleSubmit,\n    type: \"submit\"\n  }, buttonEntry)))))))) : null, finalComm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    style: {\n      fontSize: 40,\n      fontWeight: 700,\n      fontFamily: 'Courgette'\n    }\n  }, \"Thank you \\u2764\\uFE0F!\") : null));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cognitivetest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvY29nbml0aXZldGVzdC9UZXN0Mi9Db2duaXRpdmVUZXN0Mi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZ25pdGl2ZS1hcHAvLi9jbGllbnQvc3JjL0NvbXBvbmVudHMvY29nbml0aXZldGVzdC9UZXN0Mi9Db2duaXRpdmVUZXN0Mi5qc3g/NzZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWxlcnQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Nb2RhbCc7XG5pbXBvcnQgUGVyc29uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbic7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2snO1xuaW1wb3J0IHsgdXNlTWFpbkNvbnRleHQgfSBmcm9tICcuLi8uLi9Qcm92aWRlcnMvTWFpblByb3ZpZGVyLmpzeCc7XG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xudmFyIHN3aXBlU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gIHpJbmRleDogOTk5OFxufTtcbnZhciBjYXJkU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZmY5ODAwXCIsXG4gIHdpZHRoOiAzMzAsXG4gIG1heFdpZHRoOiBcIjg1dndcIixcbiAgaGVpZ2h0OiBcIjYwdmhcIixcbiAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICdiYWNrZ3JvdW5kU2l6ZSc6IFwiY292ZXJcIixcbiAgYm94U2hhZG93OiAnMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4wNSknLFxuICAnYmFja2dyb3VuZFBvc2l0aW9uJzogXCJjZW50ZXJcIlxufTtcbnZhciBjYXJkQ29udGFpbmVyID0ge1xuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB3aWR0aDogJzkwdncnLFxuICBtYXhXaWR0aDogJzMzMHB4JyxcbiAgaGVpZ2h0OiAnNzB2aCcsXG4gIG1hcmdpblRvcDogJzV2aCcsXG4gIG1hcmdpbkJvdHRvbTogJzN2aCdcbn07XG52YXIgZm9udFN0eWxlID0ge1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBjb2xvcjogXCIjZmZmXCIsXG4gIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgZm9udFdlaWdodDogNzAwLFxuICBtYXJnaW46IFwiNXB4XCIsXG4gIG1hcmdpbkxlZnQ6IFwiMjBweFwiXG59O1xudmFyIHNtYWxsRm9udFN0eWxlID0ge1xuICBjb2xvcjogXCIjZmZmXCIsXG4gIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICBmb250U2l6ZTogXCIxM3B4XCIsXG4gIGZvbnRXZWlnaHQ6IDMwMCxcbiAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxuICBtYXJnaW46IFwiMTBweFwiXG59O1xudmFyIGNhcmRXcmFwcGVyID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59O1xudmFyIG1vZGFsU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRvcDogJzUwJScsXG4gIGxlZnQ6ICc1MCUnLFxuICB3aWR0aDogJzcwdncnLFxuICBtYXhXaWR0aDogMzMwLFxuICBoZWlnaHQ6IFwiNjB2aFwiLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICBib3JkZXJSYWRpdXM6IDMsXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcbiAgYm94U2hhZG93OiAyNCxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG59O1xudmFyIGNlbnRlclNjcmVlbiA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBtaW5IZWlnaHQ6ICcxMDB2aCdcbn07XG52YXIgYnV0dG9uID0ge1xuICB3aWR0aDogJzgwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjNWY3MTgyJyxcbiAgY29sb3I6ICcjZmFmYWZhJyxcbiAgaGVpZ2h0OiAnNTBweCcsXG4gIG1hcmdpbjogJzMwcHggMCAwIDMwcHgnXG59O1xudmFyIGZvcm1UaXRsZSA9IHtcbiAgaGVpZ2h0OiAnMzBweCcsXG4gIHdpZHRoOiAnNDI2cHgnLFxuICBib3JkZXI6ICdub25lJyxcbiAgbWFyZ2luOiAnMTVweCAyNXB4IDE1cHggMTVweCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcidcbn07XG52YXIgZm9ybUlucHV0ID0ge1xuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgaGVpZ2h0OiAnMzlweCcsXG4gIHdpZHRoOiAnNDI2cHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgI0U2RTZFNicsXG4gIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICBtYXJnaW46ICcxNXB4IDE1cHggMTVweCAxNXB4JyxcbiAgdGV4dEluZGVudDogJzIwcHgnXG59O1xudmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgYm9yZGVyV2lkdGg6IFwiMjBweFwiLFxuICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMCwwLDAsMC4yKVwiLFxuICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCJcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIENvZ25pdGl2ZXRlc3QoKSB7XG4gIHZhciBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgdmFyIF91c2VNYWluQ29udGV4dCA9IHVzZU1haW5Db250ZXh0KCksXG4gICAgICB1c2VyUHJvZmlsZSA9IF91c2VNYWluQ29udGV4dC51c2VyUHJvZmlsZSxcbiAgICAgIGNvZ25pdGl2ZVRlc3QgPSBfdXNlTWFpbkNvbnRleHQuY29nbml0aXZlVGVzdCxcbiAgICAgIHNldENvZ25pdGl2ZVRlc3QgPSBfdXNlTWFpbkNvbnRleHQuc2V0Q29nbml0aXZlVGVzdDtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoNSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHRlc3RMaXN0QVRyaWFscyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRUZXN0TGlzdEFUcmlhbHMgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUodHJ1ZSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBmaXJzdFBhZ2UgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0Rmlyc3RQYWdlID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICAgIHN0YXJ0VGVzdCA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICBzZXRTdGFydFRlc3QgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU3ID0gdXNlU3RhdGUoe30pLFxuICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgdGVzdHMgPSBfdXNlU3RhdGU4WzBdLFxuICAgICAgc2V0VGVzdHMgPSBfdXNlU3RhdGU4WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU5ID0gdXNlU3RhdGUoWydBc2lhJywgJ1N1bicsICdLZXknLCAnQ2F0JywgJ1RyYXZlbCcsICdXaW50ZXInLCAnJ10pLFxuICAgICAgX3VzZVN0YXRlMTAgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU5LCAyKSxcbiAgICAgIHdvcmRzQXJyID0gX3VzZVN0YXRlMTBbMF0sXG4gICAgICBzZXRXb3Jkc0FyciA9IF91c2VTdGF0ZTEwWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUxMSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUxMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTExLCAyKSxcbiAgICAgIHdvcmQgPSBfdXNlU3RhdGUxMlswXSxcbiAgICAgIHNldFdvcmQgPSBfdXNlU3RhdGUxMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMTMgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGUxNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTEzLCAyKSxcbiAgICAgIG5hdiA9IF91c2VTdGF0ZTE0WzBdLFxuICAgICAgc2V0TmF2ID0gX3VzZVN0YXRlMTRbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTE1ID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlMTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUxNSwgMiksXG4gICAgICBmb3JtU3RhdGUgPSBfdXNlU3RhdGUxNlswXSxcbiAgICAgIHNldEZvcm1TdGF0ZSA9IF91c2VTdGF0ZTE2WzFdO1xuXG4gIHZhciBfdXNlRm9ybSA9IHVzZUZvcm0oKSxcbiAgICAgIHJlZ2lzdGVyID0gX3VzZUZvcm0ucmVnaXN0ZXIsXG4gICAgICBoYW5kbGVTdWJtaXQgPSBfdXNlRm9ybS5oYW5kbGVTdWJtaXQsXG4gICAgICByZXNldCA9IF91c2VGb3JtLnJlc2V0O1xuXG4gIHZhciBfdXNlU3RhdGUxNyA9IHVzZVN0YXRlKFtdKSxcbiAgICAgIF91c2VTdGF0ZTE4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMTcsIDIpLFxuICAgICAgZGF0YSA9IF91c2VTdGF0ZTE4WzBdLFxuICAgICAgc2V0RGF0YSA9IF91c2VTdGF0ZTE4WzFdO1xuXG4gIHZhciBfdXNlU3RhdGUxOSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUyMCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTE5LCAyKSxcbiAgICAgIHZhbCA9IF91c2VTdGF0ZTIwWzBdLFxuICAgICAgc2V0VmFsID0gX3VzZVN0YXRlMjBbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTIxID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGUyMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTIxLCAyKSxcbiAgICAgIGNvdW50TW9kYWwgPSBfdXNlU3RhdGUyMlswXSxcbiAgICAgIHNldENvdW50TW9kYWwgPSBfdXNlU3RhdGUyMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMjMgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGUyNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTIzLCAyKSxcbiAgICAgIGZpbmFsQ29tbSA9IF91c2VTdGF0ZTI0WzBdLFxuICAgICAgc2V0RmluYWxDb21tID0gX3VzZVN0YXRlMjRbMV07XG5cbiAgdmFyIG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcblxuICB2YXIgaGFuZGxlUmVnaXN0cmF0aW9uID0gZnVuY3Rpb24gaGFuZGxlUmVnaXN0cmF0aW9uKGRhdGEpIHtcbiAgICBzZXREYXRhKGRhdGEpO1xuICAgIGhhbmRsZVdvcmRFbnRlcigpO1xuICAgIHJlc2V0KCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhcnRUZXN0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIChmdW5jdGlvbiAoaW5kKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRXb3JkKHdvcmRzQXJyW2luZF0pO1xuICAgICAgICAgIH0sIDEwMDAgKyAyMDAwICogaW5kKTtcbiAgICAgICAgfSkoaSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhcnRUZXN0XSk7IC8vIGNvbnNvbGUubG9nKCdXZSBhcmUgaW4gc3RhZ2UgMiAuLi4nKVxuXG4gIGlmICh3b3JkID09PSB3b3Jkc0Fyclt3b3Jkc0Fyci5sZW5ndGggLSAxXSkge1xuICAgIHNldE5hdih0cnVlKTtcbiAgICBzZXRXb3JkKCk7XG4gIH1cblxuICB2YXIgaGFuZGxlU3RhcnRUZXN0ID0gZnVuY3Rpb24gaGFuZGxlU3RhcnRUZXN0KGUpIHt9O1xuXG4gIHZhciBoYW5kbGVCdXR0b25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0Rm9ybVN0YXRlKHRydWUpO1xuICAgIHNldE5hdihmYWxzZSk7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZUZvcm1TdGF0ZSA9IGZ1bmN0aW9uIHRvZ2dsZUZvcm1TdGF0ZSgpIHtcbiAgICBzZXRGb3JtU3RhdGUodHJ1ZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVdvcmRFbnRlciA9IGZ1bmN0aW9uIGhhbmRsZVdvcmRFbnRlcigpIHtcbiAgICBzZXRWYWwoKTtcbiAgICB2YXIgY291bnQgPSBjb3VudE1vZGFsICsgMTtcbiAgICBzZXRDb3VudE1vZGFsKGNvdW50KTtcbiAgICBzZXRGb3JtU3RhdGUoZmFsc2UpO1xuXG4gICAgaWYgKGNvdW50IDwgd29yZHNBcnIubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0VGltZW91dCh0b2dnbGVGb3JtU3RhdGUsIDMwMCk7XG4gICAgfVxuICB9OyAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdBeGlvcyBwb3N0IGRhdGEgOicsIGRhdGEpXG4gIC8vICAgY29uc3QgcGFyYW0gPSB7aWQ6IHVzZXJQcm9maWxlLl9pZCwgd29yZDogZGF0YX07XG4gIC8vICAgYXhpb3MucG9zdCgnL2FwaS9jb2duaXRpdmV0ZXN0JywgcGFyYW0pXG4gIC8vICAgLnRoZW4oKCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gIC8vICAgfSlcbiAgLy8gfSwgW2RhdGFdKVxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY291bnRNb2RhbCA9PT0gd29yZHNBcnIubGVuZ3RoIC0gMSkge1xuICAgICAgdmFyIHRyaWFsVGltZXMgPSB0ZXN0TGlzdEFUcmlhbHMgLSAxO1xuICAgICAgc2V0VGVzdExpc3RBVHJpYWxzKHRyaWFsVGltZXMpO1xuICAgIH1cbiAgfSwgW2NvdW50TW9kYWxdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGVzdExpc3RBVHJpYWxzID4gMCAmJiB0ZXN0TGlzdEFUcmlhbHMgPCA1KSB7XG4gICAgICBjb25zb2xlLmxvZygnSG93IG1hbnkgdGVzdHMgbGVmdCBhZnRlciB0ZXN0IDI/IDogOicsIHRlc3RMaXN0QVRyaWFscyk7XG4gICAgICBzZXRGaW5hbENvbW0odHJ1ZSk7XG4gICAgfVxuICB9LCBbdGVzdExpc3RBVHJpYWxzXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNvdW50TW9kYWwgPT09IHdvcmRzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHZhciBtb2RhbENvdW50ZG93biA9IHRlc3RMaXN0QVRyaWFscyAtIDE7XG4gICAgICBjb25zb2xlLmxvZygndGVzdExpc3RBVHJpYWxzIGJlZm9yZSBlbmQgOicsIHRlc3RMaXN0QVRyaWFscyk7XG4gICAgICBtb2RhbENvdW50ZG93biA+IDAgPyBzZXRUZXN0TGlzdEFUcmlhbHMobW9kYWxDb3VudGRvd24pIDogbnVsbDtcbiAgICB9XG4gIH0sIFtjb3VudE1vZGFsXSk7XG4gIHZhciBidXR0b25FbnRyeSA9IGNvdW50TW9kYWwgPCB3b3Jkc0Fyci5sZW5ndGggLSAyID8gJ0VudGVyJyA6ICdTdWJtaXQnO1xuICB2YXIgd29yZENvdW50ID0gY291bnRNb2RhbCArIDE7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJTY3JlZW5cIixcbiAgICBzdHlsZTogY2VudGVyU2NyZWVuXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMzUwcHgnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9XG4gIH0sIGZpcnN0UGFnZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGZvbnRTaXplOiA2MCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH1cbiAgfSwgXCJUZXN0IDI6IEZpbmdlciBUYXBwaW5nIFRhc2suXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBvZ3JhcGh5LCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICBjb2xvcjogJyNiZTg0ODQnLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9XG4gIH0sIFwiWW91IHdpbGwgYmUgc2hvd24gYSBzZXF1ZW5jZSBvZiBudW1iZXJzIG9uIHRoZSBzY3JlZW4uIFVzaW5nIHlvdXIgZG9taW5hbnQgaGFuZCAoaS5lLiB0aGUgaGFuZCB5b3UgdXNlIHRvIHdyaXRlIHdpdGgpLCB0eXBlIHRoZSBzZXF1ZW5jZSBhcyBmYXN0IGFuZCBhY2N1cmF0ZWx5IGFzIHBvc3NpYmxlLiBLZWVwIHR5cGluZyB0aGUgc2VxdWVuY2Ugb3ZlciBhbmQgb3ZlciB1bnRpbCB0aGUgbnVtYmVycyBkaXNhcHBlYXIuIFtQcmVzcyBlbnRlciBvciBjbGljayBzdGFydCB0byBjb250aW51ZV1cIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcbiAgICBzdHlsZTogYnV0dG9uLFxuICAgIG9uQ2xpY2s6IGhhbmRsZVN0YXJ0VGVzdCxcbiAgICB0eXBlOiBcInN1Ym1pdFwiXG4gIH0sIFwiU3RhcnRcIikpIDogbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICBzdHlsZToge1xuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMzAwcHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdDb3VyZ2V0dGUnXG4gICAgfVxuICB9LCB3b3JkKSwgbmF2ID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5Cb3R0b206ICczMDBweCdcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgZm9udFdlaWdodDogNzAwXG4gICAgfVxuICB9LCBcIkNsaWNrIG9uIGJ1dHRvbiB0byBlbnRlciBhcyBtYW55IHdvcmRzIGFzIHlvdSBjYW4gcmVtZW1iZXIuLi5cIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgIHZhcmlhbnQ6IFwib3V0bGluZWRcIixcbiAgICBzdHlsZTogYnV0dG9uLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUJ1dHRvbkNsaWNrLFxuICAgIHR5cGU6IFwic3VibWl0XCJcbiAgfSwgXCJHby4uXCIpKSkgOiBudWxsLCBmb3JtU3RhdGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U2l6ZTogNDAsXG4gICAgICBmb250V2VpZ2h0OiA3MDBcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZywge1xuICAgIG9wZW46IHRydWUsXG4gICAgUGFwZXJQcm9wczoge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICByb290OiBjbGFzc2VzLnJvb3RcbiAgICAgIH1cbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZ0NvbnRlbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7XG4gICAgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdChoYW5kbGVSZWdpc3RyYXRpb24pXG4gIH0sIGNvdW50TW9kYWwgPCB3b3Jkc0Fyci5sZW5ndGggLSAyID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogZm9ybVRpdGxlXG4gIH0sIFwiRW50ZXIgd29yZCBcIiwgd29yZENvdW50LCBcIi4uXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICBuYW1lOiBcIm5hbWVcIlxuICB9LCByZWdpc3RlcihcIndvcmRcIiksIHtcbiAgICBwbGFjZWhvbGRlcjogXCJXb3JkLi5cIixcbiAgICBzdHlsZTogZm9ybUlucHV0XG4gIH0pKSkgOiBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2dBY3Rpb25zLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICB2YXJpYW50OiBcIm91dGxpbmVkXCIsXG4gICAgc3R5bGU6IGJ1dHRvbixcbiAgICBvbkNsaWNrOiBoYW5kbGVTdWJtaXQsXG4gICAgdHlwZTogXCJzdWJtaXRcIlxuICB9LCBidXR0b25FbnRyeSkpKSkpKSkpIDogbnVsbCwgZmluYWxDb21tID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U2l6ZTogNDAsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250RmFtaWx5OiAnQ291cmdldHRlJ1xuICAgIH1cbiAgfSwgXCJUaGFuayB5b3UgXFx1Mjc2NFxcdUZFMEYhXCIpIDogbnVsbCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2duaXRpdmV0ZXN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/Components/cognitivetest/Test2/CognitiveTest2.jsx\n");

/***/ })

}]);