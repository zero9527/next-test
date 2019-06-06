exports.ids = [0];
exports.modules = {

/***/ "./components/Hello.js":
/*!*****************************!*\
  !*** ./components/Hello.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



var Hello = function Hello() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Hello Next.js");
}; // 路由拦截


next_router__WEBPACK_IMPORTED_MODULE_1___default.a.beforePopState(function (_ref) {
  var url = _ref.url,
      as = _ref.as,
      options = _ref.options;
  console.log('url: ', url);
  console.log('as: ', as);
  console.log('options: ', options);

  if (as === '/about') {
    console.log('about');
  }

  return true;
});
/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ })

};;
//# sourceMappingURL=0.js.map