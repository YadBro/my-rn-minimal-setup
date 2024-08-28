import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NavigationContainer, type NavigationProp } from '@react-navigation/native'
import HomeScreen from '@screens/Home.screen'
import LoginScreen from '@screens/login/Login.screen'

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
