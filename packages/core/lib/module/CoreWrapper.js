import React from 'react';
import { StyleSheet, View } from 'react-native';

const CoreWrapper = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.wrapper
  }, children);
};

export default CoreWrapper;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f00'
  }
});
//# sourceMappingURL=CoreWrapper.js.map