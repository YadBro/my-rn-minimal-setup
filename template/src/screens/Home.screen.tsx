import React from 'react'

import { Button, Text, View } from 'react-native'

import { useCounter } from 'src/hooks/useCounter.hook'

import type { RootStackParamList } from 'src/routes/RootNavigation.route'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen(_: HomeScreenProps): React.JSX.Element {
  const { data, handler } = useCounter({ initialValue: 0 })

  return (
    <View>
      <Text>{data.count}</Text>
      <Button title="Increment" onPress={handler.onIncrementHandler} />
    </View>
  )
}
