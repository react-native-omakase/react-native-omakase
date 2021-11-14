import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

const CoreWrapper: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaProvider>
      {/*<OmakaseProvider>*/}
        <NavigationContainer>
          <Host>
            {children}
          </Host>
        </NavigationContainer>
      {/*</OmakaseProvider>*/}
    </SafeAreaProvider>
  );
};

type Props = {
  children: React.ReactNode;
};

export default CoreWrapper;

const styles = StyleSheet.create({
  wrapper: {

  }
});

