import React, { StatusBar } from "react-native";
import { useTheme } from "@theme/hooks/useTheme";
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'

export default function BaseStatusBar() {
  const { data } = useTheme()

  const backgroundStyle = {
    backgroundColor: data.isDarkMode ? Colors.darker : Colors.lighter,
  }
  return (
    <StatusBar
      barStyle={data.isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
  )
}