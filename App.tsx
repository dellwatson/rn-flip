/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
// import DataProvider from './DataProvider'
// import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  const Stack = createStackNavigator();

  const navigationRef = React.useRef()
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        mode='modal'
        screenOptions={{
          gestureEnabled: true,
          cardOverlayEnabled: true,
        }}
      >
        <Stack.Screen name="Transaction List" component={HomeScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
            gestureEnabled: true,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: 'white' },
            ...TransitionPresets.ModalPresentationIOS,
          }}
          name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

