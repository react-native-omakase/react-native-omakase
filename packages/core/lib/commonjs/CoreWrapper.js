"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CoreWrapper = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.wrapper
  }, children);
};

var _default = CoreWrapper;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  wrapper: {
    backgroundColor: '#f00'
  }
});
//# sourceMappingURL=CoreWrapper.js.map