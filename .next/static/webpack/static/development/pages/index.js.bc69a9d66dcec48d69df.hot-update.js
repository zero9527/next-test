webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);







var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Next.js test"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }));
};

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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3427637539"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/images/4k-wallpaper-alps-cold-2283757.jpg",
    className: "jsx-3427637539"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3427637539" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: "\n  This is our blog post.\n  Yes. We can have a [link](/link).\n  And we can have a title as well.\n\n  ### This is a title\n\n  And here's the content.\n      "
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3427637539"
  }, "img{width:100%;}.markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFxuZXh0LXRlc3RcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHlCLEFBR29CLEFBR1MsQUFJQyxBQUtULEFBSUgsU0FDQyxFQWhCWixDQVlBLE9BSzJCLENBZDNCLHdCQWVBLE1BWGEsV0FDYiIsImZpbGUiOiJEOlxcY29kZVxcbmV4dC10ZXN0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxIZWFkPlxyXG4gICAgPHRpdGxlPk5leHQuanMgdGVzdDwvdGl0bGU+XHJcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgPC9IZWFkPlxyXG4pO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gcHJvcHMgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdpbmRleCcpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWQnKTtcclxuICAgIC8vIOi3r+eUseaLpuaIqlxyXG4gICAgUm91dGVyLmJlZm9yZVBvcFN0YXRlKCh7IHVybCwgYXMsIG9wdGlvbnMgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygndXJsOiAnLCB1cmwpO1xyXG4gICAgICBjb25zb2xlLmxvZygnYXM6ICcsIGFzKTtcclxuICAgICAgY29uc29sZS5sb2coJ29wdGlvbnM6ICcsIG9wdGlvbnMpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGFzID09PSAnL2Fib3V0Jykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhYm91dCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aDE+e3Byb3BzLnJvdXRlci5xdWVyeS50aXRsZX08L2gxPlxyXG4gICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzRrLXdhbGxwYXBlci1hbHBzLWNvbGQtMjI4Mzc1Ny5qcGdcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XHJcbiAgICAgICAgPE1hcmtkb3duXHJcbiAgICAgICAgICBzb3VyY2U9e2BcclxuICBUaGlzIGlzIG91ciBibG9nIHBvc3QuXHJcbiAgWWVzLiBXZSBjYW4gaGF2ZSBhIFtsaW5rXSgvbGluaykuXHJcbiAgQW5kIHdlIGNhbiBoYXZlIGEgdGl0bGUgYXMgd2VsbC5cclxuXHJcbiAgIyMjIFRoaXMgaXMgYSB0aXRsZVxyXG5cclxuICBBbmQgaGVyZSdzIHRoZSBjb250ZW50LlxyXG4gICAgICBgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5tYXJrZG93biB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXJrZG93biBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXJrZG93biBhOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXJrZG93biBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXhQYWdlKTtcclxuIl19 */\n/*@ sourceURL=D:\\code\\next-test\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(IndexPage));

/***/ })

})
//# sourceMappingURL=index.js.bc69a9d66dcec48d69df.hot-update.js.map