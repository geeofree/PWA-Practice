(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{15:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(13);\n\nvar _serviceWorker = __webpack_require__(5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'Hello World!'\n  );\n};\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));\n(0, _serviceWorker.registerSW)();\n\n//# sourceURL=webpack:///./src/index.js?")},5:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction registerSW() {\n  var _navigator = navigator,\n      serviceWorker = _navigator.serviceWorker;\n\n  if (serviceWorker) {\n    self.addEventListener('load', function () {\n      console.log('testing');\n    });\n  }\n}\n\nexports.default = registerSW;\n\n//# sourceURL=webpack:///./src/service-worker.js?")}},[[15,0,1]]]);