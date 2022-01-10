module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/catchErrors */ "./utils/catchErrors.js");


var _jsxFileName = "/mnt/c/Users/mesba/Desktop/MERN_Store/MERN-Store/pages/create.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const INITIAL_PRODUCT = {
  name: "",
  price: "",
  media: "",
  description: ""
};

function CreateProduct() {
  const [product, setProduct] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("");
  const [success, setSuccess] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("");
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {
    const isProduct = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(product).every(el => Boolean(el));

    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  function handleChange(event) {
    const {
      name,
      value,
      files
    } = event.target;

    if (name === "media") {
      setProduct(prevState => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
        media: files[0]
      }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(prevState => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState, {
        [name]: value
      }));
    }
  }

  async function handleImageUpload() {
    const data = new FormData();
    data.append("file", product.media);
    data.append("upload_preset", "reactreserve");
    data.append("cloud_name", "reedbargercodes");
    const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(" https://api.cloudinary.com/v1_1/abcdefdsf/image/upload", data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setLoading(true);
      setError("");
      const mediaUrl = await handleImageUpload();
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__["default"]}/api/product`;
      const {
        name,
        price,
        description
      } = product;
      const payload = {
        name,
        price,
        description,
        mediaUrl
      };
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, payload);
      setProduct(INITIAL_PRODUCT);
      setSuccess(true);
    } catch (error) {
      Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_6__["default"])(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    as: "h2",
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "add",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), "Create New Product"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    loading: loading,
    error: Boolean(error),
    success: success,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
    error: true,
    header: "Oops!",
    content: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
    success: true,
    icon: "check",
    header: "Success!",
    content: "Your product has been posted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"],
    name: "name",
    label: "Name",
    placeholder: "Name",
    value: product.name,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"],
    name: "price",
    label: "Price",
    placeholder: "Price",
    min: "0.00",
    step: "0.01",
    type: "number",
    value: product.price,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"],
    name: "media",
    type: "file",
    label: "Media",
    accept: "image/*",
    content: "Select Image",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: mediaPreview,
    rounded: true,
    centered: true,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["TextArea"],
    name: "description",
    label: "Description",
    placeholder: "Description",
    onChange: handleChange,
    value: product.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"],
    disabled: disabled || loading,
    color: "blue",
    icon: "pencil alternate",
    content: "Submit",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateProduct);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl =  false ? undefined : "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function catchErrors(error, displayError) {
  let errorMsg;

  if (error.response) {
    // The request was made and the server responsed with a status code that is not in the range of 2XX
    errorMsg = error.response.data;
    console.error("Error response", errorMsg); // For Cloudinary image uploads

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // The request was made, but no response was received
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    // Something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error("Error message", errorMsg);
  }

  displayError(errorMsg);
}

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ 8:
/*!*******************************!*\
  !*** multi ./pages/create.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/mesba/Desktop/MERN_Store/MERN-Store/pages/create.js */"./pages/create.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=create.js.map