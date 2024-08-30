import './global.css'

import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import RootNavigation from '@routes/RootNavigation.route'
import ReduxProvider from '@components/provider/ReduxProvider.component'
import BaseStatusBar from '@components/status-bar/BaseStatusBar'
import { verifyInstallation } from 'nativewind'

function App(): React.JSX.Element {
  verifyInstallation()
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <BaseStatusBar />
        <RootNavigation />
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

export default App
