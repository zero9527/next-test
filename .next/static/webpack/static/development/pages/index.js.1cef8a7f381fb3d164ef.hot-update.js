webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/next-server/dist/lib/amp.js":
false,

/***/ "./node_modules/next-server/dist/lib/amphtml-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/head-manager-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/head.js":
false,

/***/ "./node_modules/next-server/dist/lib/side-effect.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);






var IndexPage = function IndexPage(props) {
  console.log('index');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('load'); // 路由拦截

    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.beforePopState(function (_ref) {
      var url = _ref.url,
          as = _ref.as,
          options = _ref.options;
      console.log('url: ', url);
      console.log('as: ', as);
      console.log('options: ', options);

      if (as === '/about') {
        console.log('about');
      }

      return false;
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3427637539"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/4k-wallpaper-alps-cold-2283757.jpg",
    className: "jsx-3427637539"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3427637539" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    source: "\n  This is our blog post.\n  Yes. We can have a [link](/link).\n  And we can have a title as well.\n\n  ### This is a title\n\n  And here's the content.\n      "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3427637539"
  }, "img{width:100%;}.markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFxuZXh0LXRlc3RcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3lCLEFBR29CLEFBR1MsQUFJQyxBQUtULEFBSUgsU0FDQyxFQWhCWixDQVlBLE9BSzJCLENBZDNCLHdCQWVBLE1BWGEsV0FDYiIsImZpbGUiOiJEOlxcY29kZVxcbmV4dC10ZXN0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdpbmRleCcpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQnKTtcclxuICAgIC8vIOi3r+eUseaLpuaIqlxyXG4gICAgUm91dGVyLmJlZm9yZVBvcFN0YXRlKCh7IHVybCwgYXMsIG9wdGlvbnMgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygndXJsOiAnLCB1cmwpO1xyXG4gICAgICBjb25zb2xlLmxvZygnYXM6ICcsIGFzKTtcclxuICAgICAgY29uc29sZS5sb2coJ29wdGlvbnM6ICcsIG9wdGlvbnMpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGFzID09PSAnL2Fib3V0Jykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhYm91dCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxPntwcm9wcy5yb3V0ZXIucXVlcnkudGl0bGV9PC9oMT5cclxuICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy80ay13YWxscGFwZXItYWxwcy1jb2xkLTIyODM3NTcuanBnXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxyXG4gICAgICAgIDxNYXJrZG93blxyXG4gICAgICAgICAgc291cmNlPXtgXHJcbiAgVGhpcyBpcyBvdXIgYmxvZyBwb3N0LlxyXG4gIFllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxyXG4gIEFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXHJcblxyXG4gICMjIyBUaGlzIGlzIGEgdGl0bGVcclxuXHJcbiAgQW5kIGhlcmUncyB0aGUgY29udGVudC5cclxuICAgICAgYH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAubWFya2Rvd24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFya2Rvd24gYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFya2Rvd24gYTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFya2Rvd24gaDMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4UGFnZSk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\code\\next-test\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.1cef8a7f381fb3d164ef.hot-update.js.map