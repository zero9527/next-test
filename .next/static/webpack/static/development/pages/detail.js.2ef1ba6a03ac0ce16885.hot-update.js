webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");








var Content = function Content() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "This is the detail page");
};

function Detail(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log('detail mount!'); // console.log('router: ', props.router);
    // 正常路由跳转，在about页面获取路由信息的时候，id为a11，
    // 刷新页面则id为asss，所以尽量二者一致，避免不必要的问题
    // setTimeout(() => props.router.push('/about?id=a11', '/about/asss'), 1000);

    return function () {
      console.log('detail unmount!');
    };
  }, []); // const [count, setCount] = useState(0);
  // const [num, setNum] = useState(0);
  // 依赖项 num 不变化的话 会执行，但是不会 return一个新的 count，即使 count 变化了
  // const memorized1 = useCallback(() => {
  //   console.log('memorized1: ', count);
  //   return count;
  // }, [count])();
  // 依赖项 num 不变化的话 不执行
  // const memorized2 = useMemo(() => {
  //   console.log('memorized2: ', count);
  //   return count;
  // }, [num]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "Detail")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", null));
}

Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /**
             * 在当前路由刷新的话，context.req 为真，服务端才有 req/res，在命令行打印 'title: server'；
             * 如果是其他路由跳转过来没有刷新页面的话，context.req 为假，在浏览器控制台打印 'title: "跳转之前的页面title"'；
             */
            console.log('title: ', context.req ? 'server' : document.title); // console.log('context: ', context);

            return _context.abrupt("return", {});

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Detail));

/***/ })

})
//# sourceMappingURL=detail.js.2ef1ba6a03ac0ce16885.hot-update.js.map