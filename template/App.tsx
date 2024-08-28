import React from 'react'
import {
  StatusBar,
  useColorScheme,
} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'
import RootNavigation from '@routes/RootNavigation.route'


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootNavigation />
    </SafeAreaProvider>
  )
}

export default App
