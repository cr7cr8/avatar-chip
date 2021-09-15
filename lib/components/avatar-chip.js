"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarChip = exports.AvatarLogo = exports.TwoLineLabel = exports.TwoLineLabelWithStyled = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

var _createBreakpoints = _interopRequireDefault(require("@material-ui/core/styles/createBreakpoints"));

var _multiavatar = _interopRequireDefault(require("@multiavatar/multiavatar"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var _excluded = ["lgTextSizeArr", "textSizeArr"],
    _excluded2 = ["size", "personName"],
    _excluded3 = ["size", "personName", "label", "bgColor", "lift", "logoOn", "labelOn", "labelSize", "onDelete"],
    _excluded4 = ["lineTop", "lineDown", "className", "theme"],
    _excluded5 = ["size", "labelSize"],
    _excluded6 = ["classes", "personName", "src"],
    _excluded7 = ["classes", "theme", "size", "personName", "avatarProps", "logoOn", "labelOn", "children"],
    _excluded8 = ["src"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//const size = ["5.2rem", "3.9rem", "2.6rem", "1.8rem"]
//const labelSize = ["4rem", "3rem", "2rem", "1.5rem"]
var breakpoints = (0, _createBreakpoints["default"])({});

function breakpointsAttribute() {
  var _ref;

  var xs = {},
      sm = {},
      md = {},
      lg = {},
      xl = {};

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (item_) {
    var item = flatten(item_);
    xs = _objectSpread(_objectSpread({}, xs), {}, _defineProperty({}, item[0], item[1]));
    sm = _objectSpread(_objectSpread({}, sm), {}, _defineProperty({}, item[0], item[2] || item[1]));
    md = _objectSpread(_objectSpread({}, md), {}, _defineProperty({}, item[0], item[3] || item[2] || item[1]));
    lg = _objectSpread(_objectSpread({}, lg), {}, _defineProperty({}, item[0], item[4] || item[3] || item[2] || item[1]));
    xl = _objectSpread(_objectSpread({}, xl), {}, _defineProperty({}, item[0], item[5] || item[4] || item[3] || item[2] || item[1]));
  });
  return _ref = {}, _defineProperty(_ref, breakpoints.only('xs'), _objectSpread({}, xs)), _defineProperty(_ref, breakpoints.only('sm'), _objectSpread({}, sm)), _defineProperty(_ref, breakpoints.only('md'), _objectSpread({}, md)), _defineProperty(_ref, breakpoints.only('lg'), _objectSpread({}, lg)), _defineProperty(_ref, breakpoints.only('xl'), _objectSpread({}, xl)), _ref;
}

function multiplyArr(arr, factor) {
  return arr.map(function (item) {
    var num = Number(item.replace(/[^\d\.]/g, ''));
    var unit = String(item.replace(/[\d\.]/g, ''));
    return String(num * factor + unit);
  });
}

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function styleObj(_ref2) {
  var lgTextSizeArr = _ref2.lgTextSizeArr,
      textSizeArr = _ref2.textSizeArr,
      theme = _objectWithoutProperties(_ref2, _excluded);

  return {
    avatarCss: function avatarCss(_ref3) {
      var size = _ref3.size,
          personName = _ref3.personName,
          props = _objectWithoutProperties(_ref3, _excluded2);

      var size_ = Array.isArray(size) ? size : typeof size === "string" ? [size] : lgTextSizeArr;
      return _objectSpread({}, breakpointsAttribute(["width", size_], ["height", size_]));
    },
    chipCss: function chipCss(_ref4) {
      var _ref4$size = _ref4.size,
          size = _ref4$size === void 0 ? ["1.3rem", "2.6rem", "3.9rem", "5.2rem"] : _ref4$size,
          personName = _ref4.personName,
          label = _ref4.label,
          bgColor = _ref4.bgColor,
          _ref4$lift = _ref4.lift,
          lift = _ref4$lift === void 0 ? 3 : _ref4$lift,
          _ref4$logoOn = _ref4.logoOn,
          logoOn = _ref4$logoOn === void 0 ? true : _ref4$logoOn,
          _ref4$labelOn = _ref4.labelOn,
          labelOn = _ref4$labelOn === void 0 ? true : _ref4$labelOn,
          _ref4$labelSize = _ref4.labelSize,
          labelSize = _ref4$labelSize === void 0 ? ["1rem", "2rem", "3rem", "4rem"] : _ref4$labelSize,
          onDelete = _ref4.onDelete,
          props = _objectWithoutProperties(_ref4, _excluded3);

      var size_ = Array.isArray(size) ? size : typeof size === "string" ? [size] : lgTextSizeArr;
      var labelSize_ = Array.isArray(labelSize) ? labelSize : typeof labelSize === "string" ? [labelSize] : textSizeArr;
      return _objectSpread(_objectSpread({
        height: "auto",
        backgroundColor: bgColor,
        padding: 0,
        margin: 0,
        // boxShadow: theme.shadows[lift],
        overflow: "hidden"
      }, breakpointsAttribute(["borderRadius", "999999px"])), {}, {
        "& .MuiChip-avatar": _objectSpread(_objectSpread(_objectSpread({}, logoOn && !labelOn && {
          transform: "scale(0.95)"
        }), logoOn && labelOn && {
          transform: "scale(0.95)"
        }), breakpointsAttribute(["width", size_], ["height", size_], ["margin", 0])),
        "& .MuiChip-label": _objectSpread({
          // fontWeight: "bold",
          userSelect: "text",
          //    backgroundColor: "#a2c3b2",
          lineHeight: "100%",
          margin: 0,
          padding: 0
        }, breakpointsAttribute(["fontSize", labelSize_ || []], ["paddingLeft", labelOn ? multiplyArr(labelSize_ || [], logoOn ? 0.15 : 0.5) : [0]], ["paddingRight", labelOn ? multiplyArr(labelSize_ || [], onDelete ? 0.15 : 0.5) : [0]])),
        "& .MuiChip-deleteIcon": _objectSpread({
          margin: 0
        }, breakpointsAttribute(["width", multiplyArr(labelSize_, 0.8)], ["height", multiplyArr(labelSize_, 0.8)]))
      });
    },
    typoUpCss: function typoUpCss(_ref5) {
      var size = _ref5.size,
          logoOn = _ref5.logoOn,
          labelOn = _ref5.labelOn;
      // const size_ = Array.isArray(size)
      //   ? size
      //   : typeof (size) === "string"
      //     ? [size]
      //     : textSizeArr
      return {// lineHeight: "115%",
        // // backgroundColor:"pink",
        // margin: 0,
        // padding: 0,
        // ...breakpointsAttribute(
        //   ["fontSize", multiplyArr(size_, 65 / 100)],
        // ),
      };
    },
    typoDownCss: function typoDownCss(_ref6) {
      var size = _ref6.size,
          logoOn = _ref6.logoOn,
          labelOn = _ref6.labelOn;
      // const size_ = Array.isArray(size)
      //   ? size
      //   : typeof (size) === "string"
      //     ? [size]
      //     : textSizeArr
      return {// lineHeight: "115%",
        // //  backgroundColor:"lightblue",
        // margin: 0,
        // padding: 0,
        // ...breakpointsAttribute(
        //   ["fontSize", multiplyArr(size_, 35 / 100)],
        //),
      };
    },
    popover: function popover() {
      return {
        pointerEvents: 'none'
      };
    },
    paper: function paper() {
      return {
        pointerEvents: "auto",
        padding: "8px"
      };
    }
  };
}

var TwoLineLabel_ = /*#__PURE__*/function (_Component) {
  _inherits(TwoLineLabel_, _Component);

  var _super = _createSuper(TwoLineLabel_);

  function TwoLineLabel_(props, ctx) {
    _classCallCheck(this, TwoLineLabel_);

    return _super.call(this, props, ctx); //   console.log(props)
  }

  _createClass(TwoLineLabel_, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          lineTop = _this$props.lineTop,
          lineDown = _this$props.lineDown,
          className = _this$props.className,
          theme = _this$props.theme,
          props = _objectWithoutProperties(_this$props, _excluded4);

      var _this$props$classes = this.props.classes,
          typoUpCss = _this$props$classes.typoUpCss,
          typoDownCss = _this$props$classes.typoDownCss;
      var allClassNamesTop = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, typoUpCss, false), _defineProperty(_classNames, className, true), _classNames));
      var allClassNamesDown = (0, _classnames["default"])((_classNames2 = {}, _defineProperty(_classNames2, typoDownCss, false), _defineProperty(_classNames2, className, true), _classNames2));
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        color: "textPrimary",
        className: allClassNamesTop
      }, lineTop), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        color: "textSecondary",
        className: allClassNamesDown
      }, lineDown));
    }
  }]);

  return TwoLineLabel_;
}(_react.Component);

_defineProperty(TwoLineLabel_, "defaultProps", {
  size: ["2.6rem", "2.6rem", "2.6rem", "2.6rem", "2.6rem"],
  labelSize: ["2rem", "2rem", "2rem", "2rem", "2rem"]
});

var TwoLineLabelWithStyled = (0, _styledComponents["default"])(TwoLineLabel_).withConfig({
  shouldForwardProp: function shouldForwardProp(propName, defaultValidatorFn) {
    return true;
  }
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", " \n"])), function (props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? ["2.6rem", "2.6rem", "2.6rem", "2.6rem", "2.6rem"] : _props$size,
      _props$labelSize = props.labelSize,
      labelSize = _props$labelSize === void 0 ? ["2rem", "2rem", "2rem", "2rem", "2rem"] : _props$labelSize,
      rest = _objectWithoutProperties(props, _excluded5);

  var size_ = Array.isArray(size) ? size : typeof size === "string" ? [size] : size;
  return {
    "&:first-of-type": _objectSpread({
      lineHeight: "115%",
      // backgroundColor:"pink",
      margin: 0,
      padding: 0
    }, breakpointsAttribute(["fontSize", multiplyArr(size_, 65 / 100)] //   ((!logoOn) && labelOn) ? ["marginLeft", multiplyArr(size_, 40 / 100)] : []// not updating with props updating logoOn labelOn
    )),
    "&:first-of-type ~ &": _objectSpread({
      lineHeight: "115%",
      // backgroundColor:"pink",
      margin: 0,
      padding: 0
    }, breakpointsAttribute(["fontSize", multiplyArr(size_, 35 / 100)] //   ((!logoOn) && labelOn) ? ["marginLeft", multiplyArr(size_, 40 / 100)] : []// not updating with props updating logoOn labelOn
    ))
  };
});
exports.TwoLineLabelWithStyled = TwoLineLabelWithStyled;
var TwoLineLabel = (0, _styles.withStyles)(styleObj, {
  withTheme: true
})(TwoLineLabelWithStyled);
exports.TwoLineLabel = TwoLineLabel;

var AvatarLogo_ = /*#__PURE__*/function (_Component2) {
  _inherits(AvatarLogo_, _Component2);

  var _super2 = _createSuper(AvatarLogo_);

  function AvatarLogo_() {
    _classCallCheck(this, AvatarLogo_);

    return _super2.apply(this, arguments);
  }

  _createClass(AvatarLogo_, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          personName = _this$props2.personName,
          src = _this$props2.src,
          rest = _objectWithoutProperties(_this$props2, _excluded6);

      var src_ = "data:image/svg+xml;base64," + btoa(personName && (0, _multiavatar["default"])(personName));
      return /*#__PURE__*/_react["default"].createElement(_core.Avatar, _extends({
        classes: {
          root: classes.avatarCss
        },
        src: this.props.src || src_
      }, rest));
    }
  }]);

  return AvatarLogo_;
}(_react.Component);

var AvatarChip_ = /*#__PURE__*/function (_Component3) {
  _inherits(AvatarChip_, _Component3);

  var _super3 = _createSuper(AvatarChip_);

  function AvatarChip_(props) {
    var _this;

    _classCallCheck(this, AvatarChip_);

    _this = _super3.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handlePopoverOpen", function (event) {
      var _this$anchorRef$getBo = _this.anchorRef.getBoundingClientRect(),
          left = _this$anchorRef$getBo.left,
          right = _this$anchorRef$getBo.right,
          width = _this$anchorRef$getBo.width,
          top = _this$anchorRef$getBo.top,
          bottom = _this$anchorRef$getBo.bottom,
          height = _this$anchorRef$getBo.height; //this.anchorRef.current.getBoundingClientRect()


      var centerX = left + width / 2;
      var centerY = top + height / 2;

      _this.setState(function (pre) {
        return {
          open: true,
          transOriginH: centerX <= window.innerWidth / 2 ? "left" : "right",
          transOriginV: centerY <= window.innerHeight / 2 ? "top" : "bottom",
          anchorPos: {
            "left": centerX <= window.innerWidth / 2 ? Math.round(left) : Math.round(left + width),
            "top": centerY <= window.innerHeight / 2 ? Math.round(top + height) + 8 : Math.round(top) - 8
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePopoverClose", function () {
      _this.setState(function (pre) {
        return _objectSpread(_objectSpread({}, pre), {}, {
          open: false
        });
      });
    });

    _this.state = {
      open: false,
      transOriginH: "left",
      transOriginV: "top",
      anchorPos: {
        "top": 0,
        "left": 0
      }
    };
    _this.anchorRef = null; //  React.createRef();

    return _this;
  }

  _createClass(AvatarChip_, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          classes = _this$props3.classes,
          theme = _this$props3.theme,
          size = _this$props3.size,
          personName = _this$props3.personName,
          avatarProps = _this$props3.avatarProps,
          _this$props3$logoOn = _this$props3.logoOn,
          logoOn = _this$props3$logoOn === void 0 ? true : _this$props3$logoOn,
          _this$props3$labelOn = _this$props3.labelOn,
          labelOn = _this$props3$labelOn === void 0 ? true : _this$props3$labelOn,
          children = _this$props3.children,
          rest = _objectWithoutProperties(_this$props3, _excluded7);

      var _ref7 = this.props.avatarProps || {},
          src = _ref7.src,
          avatarRest = _objectWithoutProperties(_ref7, _excluded8);

      console.log(theme);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: "fit-content",
          display: "inline-block"
        }
      }, /*#__PURE__*/_react["default"].createElement(_core.Chip, _extends({
        classes: {
          root: classes.chipCss
        }
      }, logoOn && {
        avatar: /*#__PURE__*/_react["default"].createElement(AvatarLogo, _extends({
          size: size,
          personName: personName,
          src: this.props.src
        }, avatarRest))
      }, {
        label: personName
      }, rest, this.props && this.props.label && this.props.label.type && this.props.label.type.Naked && this.props.label.type.Naked.render.displayName === "Styled(TwoLineLabel_)" && labelOn && {
        label: /*#__PURE__*/_react["default"].createElement(TwoLineLabel, _extends({}, this.props.label.props, {
          logoOn: this.props.logoOn,
          labelOn: this.props.labelOn
        }, (Array.isArray(this.props.labelSize) || typeof this.props.labelSize === "string") && {
          size: this.props.labelSize
        }))
      }, this.props.children && {
        label: this.props.children
      }, this.props && this.props.children && this.props.children.type && this.props.children.type.Naked && this.props.children.type.Naked.render.displayName === "Styled(TwoLineLabel_)" && labelOn && {
        label: /*#__PURE__*/_react["default"].createElement(TwoLineLabel, _extends({}, this.props.children.props, {
          logoOn: this.props.logoOn,
          labelOn: this.props.labelOn
        }, (Array.isArray(this.props.labelSize) || typeof this.props.labelSize === "string") && {
          size: this.props.labelSize
        }))
      }, !labelOn && {
        label: null
      }, this.props.hoverContent && {
        onMouseEnter: this.handlePopoverOpen
      }, this.props.hoverContent && {
        onMouseLeave: this.handlePopoverClose
      }, {
        ref: function ref(element) {
          _this2.anchorRef = element;
        }
      })), this.props.hoverContent && /*#__PURE__*/_react["default"].createElement(_core.Popover, {
        marginThreshold: 0,
        className: classes.popover,
        classes: {
          paper: classes.paper
        },
        open: this.state.open,
        anchorReference: "anchorPosition",
        anchorEl: this.anchorRef,
        anchorOrigin: {
          horizontal: "left",
          vertical: "bottom"
        },
        anchorPosition: _objectSpread({}, this.state.anchorPos),
        transformOrigin: {
          horizontal: this.state.transOriginH,
          vertical: this.state.transOriginV
        } //   onClose={this.handlePopoverClose}
        ,
        disableRestoreFocus: true,
        PaperProps: {
          onMouseEnter: this.handlePopoverOpen,
          onMouseLeave: this.handlePopoverClose,
          elevation: 2
        }
      }, this.props.hoverContent));
    }
  }]);

  return AvatarChip_;
}(_react.Component);

_defineProperty(AvatarChip_, "defaultProps", {
  multiplyArr: multiplyArr,
  factor: 1.3,
  breakpointsAttribute: breakpointsAttribute,
  size: ["2.6rem", "2.6rem", "2.6rem", "2.6rem", "2.6rem"],
  labelSize: ["2rem", "2rem", "2rem", "2rem", "2rem"],
  logoOn: true,
  labelOn: true
});

var AvatarLogo = (0, _styles.withStyles)(styleObj, {
  withTheme: true
})(AvatarLogo_);
exports.AvatarLogo = AvatarLogo;
var AvatarChip = (0, _styles.withStyles)(styleObj, {
  withTheme: true
})(AvatarChip_);
exports.AvatarChip = AvatarChip;