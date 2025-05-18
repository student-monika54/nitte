import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/(tabs)/index'; // Make sure filename matches
import ConnectScreen from './app/(tabs)/connect';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" component={LoginScreen} />
        <Stack.Screen name="Connect" component={ConnectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
