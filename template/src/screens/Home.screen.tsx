import React, { useState } from 'react'

import { useCounter } from '@hooks/useCounter.hook'
import { useAddPostMutation, useGetPostsQuery } from '@store/services/post.service'

import { Button, FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
  const [post, setPost] = useState({
    title: '',
    body: 'new body',
    userId: 1,
  })
  const { data: postsData, isSuccess, isLoading } = useGetPostsQuery('')
  const [AddPost] = useAddPostMutation()

  return (
    <SafeAreaView>
      <Text className='text-center mt-5'>{data.count}</Text>
      <Button title="Increment" onPress={handler.onIncrementHandler} />

      <View className='mx-auto mt-8'>
        <TextInput
          className='px-4 border-black border-[2px] py-2 rounded-full mb-3'
          focusable
          placeholder='Buat Post baru disini'
          onChangeText={e => setPost(prevState => ({...prevState, title: e}))}
          value={post.title}
        />
        <TouchableOpacity className='bg-green-600 mx-auto py-3 px-3 rounded-md' onPress={() => AddPost(post)}>
          <Text className='text-white text-1xl'>Create Post</Text>
        </TouchableOpacity>
      </View>

      <Text className='text-3xl font-bold my-5 text-center'>List Post</Text>
      {isLoading
      ?
      <Text className='text-center text-lg'>Loading....</Text>
      : isSuccess
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