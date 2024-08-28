import React from 'react'
import {
  StatusBar,
  useColorScheme,
} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ReduxProvider from '@components/provider/ReduxProvider.component'
import RootNavigation from '@routes/RootNavigation.route'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'


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
      <ReduxProvider>
        <RootNavigation />
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

export default App
