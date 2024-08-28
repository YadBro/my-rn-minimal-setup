import React from 'react'

import { useCounter } from '@hooks/useCounter.hook'
import { useGetPostsQuery } from '@store/services/post.service'

import { Button, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@routes/RootNavigation.route'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function HomeScreen(_: HomeScreenProps): React.JSX.Element {
  const { data, handler } = useCounter({ initialValue: 0 })
  const { data: postsData, isSuccess } = useGetPostsQuery('')

  return (
    <SafeAreaView>
      <Text>{data.count}</Text>
      <Button title="Increment" onPress={handler.onIncrementHandler} />

      {isSuccess
      ?
      <FlatList
        data={postsData}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id.toString()}
      />
      :null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});