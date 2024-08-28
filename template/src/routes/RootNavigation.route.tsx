import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NavigationContainer, type NavigationProp } from '@react-navigation/native'
import HomeScreen from '@screens/Home.screen'
import LoginScreen from '@screens/login/Login.screen'

export type ScreenNames = ['Login', 'Home'] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
