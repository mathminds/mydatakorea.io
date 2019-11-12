webpackHotUpdate("commons",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _assets_images_mydata_declaratio_badge_500x500_300x300_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/mydata/declaratio-badge-500x500-300x300.png */ "./src/assets/images/mydata/declaratio-badge-500x500-300x300.png");
/* harmony import */ var _assets_images_mydata_declaratio_badge_500x500_300x300_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mydata_declaratio_badge_500x500_300x300_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_mydata_whitepaper_img_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/mydata/whitepaper_img.png */ "./src/assets/images/mydata/whitepaper_img.png");
/* harmony import */ var _assets_images_mydata_whitepaper_img_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mydata_whitepaper_img_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_mydata_mydatakorea_colour_down_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/mydata/mydatakorea-colour-down.png */ "./src/assets/images/mydata/mydatakorea-colour-down.png");
/* harmony import */ var _assets_images_mydata_mydatakorea_colour_down_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mydata_mydatakorea_colour_down_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_mydata_mydata_journal_logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/mydata/mydata_journal_logo.png */ "./src/assets/images/mydata/mydata_journal_logo.png");
/* harmony import */ var _assets_images_mydata_mydata_journal_logo_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_mydata_mydata_journal_logo_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_SubscribeToMailingList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SubscribeToMailingList */ "./src/components/SubscribeToMailingList.js");

var _jsxFileName = "/Users/mathmind/MyDataKorea/src/pages/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};














var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this._handleWaypointEnter = function () {
      _this.setState(function () {
        return {
          stickyNav: false
        };
      });
    };

    _this._handleWaypointLeave = function () {
      _this.setState(function () {
        return {
          stickyNav: true
        };
      });
    };

    _this.state = {
      stickyNav: false
    };
    return _this;
  }

  var _proto = Index.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: "MyData Korea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onEnter: this._handleWaypointEnter,
      onLeave: this._handleWaypointLeave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sticky: this.state.stickyNav,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "declaration",
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "spotlight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "MyData \uC120\uC5B8\uBB38")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\uC0AC\uD68C\uC5D0\uC11C \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC911\uC694\uC131\uC774 \uACC4\uC18D \uCEE4\uC9D0\uC5D0 \uB530\uB77C \uAC1C\uC778\uC774 \uC790\uC2E0\uC758 \uAC1C\uC778\uB370\uC774\uD130\uB97C \uC798 \uC54C\uACE0 \uD1B5\uC81C\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uC790\uC2E0\uC5D0 \uB300\uD55C \uC778\uC0AC\uC774\uD2B8\uC640 \uC5EC\uB7EC \uC720\uC775\uC744 \uC5BB\uC744 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC83\uC774 \uB354 \uC2DC\uAE09\uD574\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "MyData \uC120\uC5B8\uBB38\uC740 \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC778\uAC04\uC911\uC2EC\uC801 \uBE44\uC804\uACFC \uACF5\uC815\uD558\uACE0, \uC9C0\uC18D \uAC00\uB2A5\uD558\uBA70, \uBC88\uC601\uD558\uB294 \uB514\uC9C0\uD138 \uC0AC\uD68C\uB97C \uC870\uC131\uD558\uAE30 \uC704\uD55C \uC6B0\uB9AC\uC758 \uB2E4\uC9D0\uC744 \uC120\uC5B8\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://mydata.org/declaration/korean/",
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "\uC120\uC5B8\uBB38 \uC77D\uC5B4\uBCF4\uAE30")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _assets_images_mydata_declaratio_badge_500x500_300x300_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "whitepaper",
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "spotlight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "MyData \uBC31\uC11C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "\uC0AC\uD68C\uC5D0\uC11C \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC911\uC694\uC131\uC774 \uACC4\uC18D \uCEE4\uC9D0\uC5D0 \uB530\uB77C \uAC1C\uC778\uC774 \uC790\uC2E0\uC758 \uAC1C\uC778\uB370\uC774\uD130\uB97C \uC798 \uC54C\uACE0 \uD1B5\uC81C\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uC790\uC2E0\uC5D0 \uB300\uD55C \uC778\uC0AC\uC774\uD2B8\uC640 \uC5EC\uB7EC \uC720\uC775\uC744 \uC5BB\uC744 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC83\uC774 \uB354 \uC2DC\uAE09\uD574\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "MyData \uC120\uC5B8\uBB38\uC740 \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC778\uAC04\uC911\uC2EC\uC801 \uBE44\uC804\uACFC \uACF5\uC815\uD558\uACE0, \uC9C0\uC18D \uAC00\uB2A5\uD558\uBA70, \uBC88\uC601\uD558\uB294 \uB514\uC9C0\uD138 \uC0AC\uD68C\uB97C \uC870\uC131\uD558\uAE30 \uC704\uD55C \uC6B0\uB9AC\uC758 \uB2E4\uC9D0\uC744 \uC120\uC5B8\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/whitepaper",
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "MyData \uBC31\uC11C \uC77D\uC5B4\uBCF4\uAE30")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _assets_images_mydata_whitepaper_img_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "koreahub",
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "spotlight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "MyData Korea \uD5C8\uBE0C")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "\uC0AC\uD68C\uC5D0\uC11C \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC911\uC694\uC131\uC774 \uACC4\uC18D \uCEE4\uC9D0\uC5D0 \uB530\uB77C \uAC1C\uC778\uC774 \uC790\uC2E0\uC758 \uAC1C\uC778\uB370\uC774\uD130\uB97C \uC798 \uC54C\uACE0 \uD1B5\uC81C\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uC790\uC2E0\uC5D0 \uB300\uD55C \uC778\uC0AC\uC774\uD2B8\uC640 \uC5EC\uB7EC \uC720\uC775\uC744 \uC5BB\uC744 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC83\uC774 \uB354 \uC2DC\uAE09\uD574\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "MyData \uC120\uC5B8\uBB38\uC740 \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC778\uAC04\uC911\uC2EC\uC801 \uBE44\uC804\uACFC \uACF5\uC815\uD558\uACE0, \uC9C0\uC18D \uAC00\uB2A5\uD558\uBA70, \uBC88\uC601\uD558\uB294 \uB514\uC9C0\uD138 \uC0AC\uD68C\uB97C \uC870\uC131\uD558\uAE30 \uC704\uD55C \uC6B0\uB9AC\uC758 \uB2E4\uC9D0\uC744 \uC120\uC5B8\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/korea-hub",
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "\uB354 \uC54C\uC544\uBCF4\uAE30")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _assets_images_mydata_mydatakorea_colour_down_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "resources",
      className: "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "spotlight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "MyData \uC790\uB8CC\uC2E4")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "\uC0AC\uD68C\uC5D0\uC11C \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC911\uC694\uC131\uC774 \uACC4\uC18D \uCEE4\uC9D0\uC5D0 \uB530\uB77C \uAC1C\uC778\uC774 \uC790\uC2E0\uC758 \uAC1C\uC778\uB370\uC774\uD130\uB97C \uC798 \uC54C\uACE0 \uD1B5\uC81C\uD560 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uC790\uC2E0\uC5D0 \uB300\uD55C \uC778\uC0AC\uC774\uD2B8\uC640 \uC5EC\uB7EC \uC720\uC775\uC744 \uC5BB\uC744 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC83\uC774 \uB354 \uC2DC\uAE09\uD574\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "MyData \uC120\uC5B8\uBB38\uC740 \uAC1C\uC778\uB370\uC774\uD130\uC5D0 \uB300\uD55C \uC778\uAC04\uC911\uC2EC\uC801 \uBE44\uC804\uACFC \uACF5\uC815\uD558\uACE0, \uC9C0\uC18D \uAC00\uB2A5\uD558\uBA70, \uBC88\uC601\uD558\uB294 \uB514\uC9C0\uD138 \uC0AC\uD68C\uB97C \uC870\uC131\uD558\uAE30 \uC704\uD55C \uC6B0\uB9AC\uC758 \uB2E4\uC9D0\uC744 \uC120\uC5B8\uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/resources",
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "\uC790\uB8CC\uBCF4\uAE30")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _assets_images_mydata_mydata_journal_logo_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      id: "signup",
      className: "main special",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "major",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "MyData \uD68C\uC6D0\uAC00\uC785 \uC2E0\uCCAD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "MyData Korea \uD5C8\uBE0C\uB294 \uD604\uC7AC \uCC3D\uB9BD\uD68C\uC6D0\uC744 \uBAA8\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }), "\uAD00\uC2EC\uC774 \uC788\uC73C\uC2E0 \uBD84\uAED8\uC11C\uB294 MyData \uC120\uC5B8\uBB38\uC5D0 \uC11C\uBA85\uD55C \uD6C4 \uC5F0\uB77D\uBC14\uB78D\uB2C8\uB2E4.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
      className: "major",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/generic",
      className: "button special",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "\uAC00\uC785\uC2E0\uCCAD")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/korea-hub",
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "\uB354 \uC54C\uC544\uBCF4\uAE30")))))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/mathmind/MyDataKorea/src/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/mathmind/MyDataKorea/src/pages/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=commons.ccfaa10591cb49680299.hot-update.js.map