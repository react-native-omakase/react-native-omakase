import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CoreWrapper: React.FC = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
};

type Props = {
  children: React.ReactNode;
};

export default CoreWrapper;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f00'
  }
})
