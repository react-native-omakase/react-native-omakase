import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CoreWrapper } from '@react-native-omakase/core';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CoreWrapper>
        <Text>Open up App.tsx to start working on your app!</Text>
      </CoreWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
