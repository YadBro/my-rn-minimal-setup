import React from 'react'

import { useTheme } from '@theme/hooks/useTheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAppSelector } from 'src/store';

import { NavigationContainer, type NavigationProp } from '@react-navigation/native'
import LoginScreen from '@screens/login/Login.screen'
import HomeScreen from '@screens/Home.screen';

export type RootStackParamList = {
  Home: { userId: number };
  Login: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigation() {
  const { data } = useTheme()
  const isSigned = useAppSelector(state => state.auth.isSigned)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: data.backgroundColorScheme
          }
        }}
        initialRouteName={isSigned ? 'Home' : 'Login'}
      >
        {
          isSigned
          ?
          <>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
            />
          </>
          :
          <>
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
              options={{
                animationTypeForReplace: !isSigned ? 'pop' : 'push'
              }}
            />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
