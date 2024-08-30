import React, { useState } from 'react'

import { useCounter } from '@hooks/useCounter.hook'
import { useAddPostMutation, useGetPostsQuery } from '@store/services/post.service'
import { useDispatch } from 'react-redux'
import { useTheme } from '@theme/hooks/useTheme'
import { themeActions } from '@store/slices/theme.slice'

import { Button, FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BaseText from '@components/text/BaseText.component'
import BaseTheme from '@components/theme/BaseTheme.component'
import BaseButton from '@components/button/BaseButton'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@routes/RootNavigation.route'
import { authActions } from 'src/store/slices/auth.slice'

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function HomeScreen({ route: { params }}: HomeScreenProps): React.JSX.Element {
  const dispatch = useDispatch()
  const { data: themeData} = useTheme()
  
  const { data, handler } = useCounter()
  const [post, setPost] = useState({
    title: '',
    body: 'new body',
    userId: params?.userId || 1,
  })
  const { data: postsData, isSuccess, isLoading } = useGetPostsQuery('')
  const [AddPost] = useAddPostMutation()

  return (
    <SafeAreaView>
      <BaseTheme>
        <BaseText className={`text-center mt-5`}>{data.count}, MODE: {themeData.mode}</BaseText>
        <Button title="Increment" onPress={handler.onIncrementHandler} />

        <View className='mx-auto mt-8'>
          <TextInput
            className='px-4 border-dark-light border-[2px] py-2 rounded-full mb-3'
            focusable
            placeholder='Buat Post baru disini'
            onChangeText={e => setPost(prevState => ({...prevState, title: e}))}
            value={post.title}
          />
          <BaseButton 
            text='Create Post'
            onPressHandler={() => AddPost(post)}
          />
        </View>
        <BaseButton 
          className='mx-auto'
          text='Light Mode'
          variant='secondary'
          onPressHandler={() => dispatch(themeActions.setTheme('light'))}
        />
        <BaseButton 
          className='mx-auto'
          text='Dark Mode'
          variant='primary'
          onPressHandler={() => dispatch(themeActions.setTheme('dark'))}
        />

        <BaseButton 
          className='mt-5 mx-auto'
          text='Logout'
          variant='primary'
          onPressHandler={() => dispatch(authActions.setAuth(false))}
        />

        <BaseText type='Bold' className='text-3xl my-5 text-center'>List Post ada</BaseText>

        {isLoading
        ?
          <BaseText type='SemiBold' className={`text-center mt-5`}>
            Loading...
          </BaseText>
        : isSuccess
        ?
        <FlatList
          data={postsData}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id.toString()}
        />
        :null}
      </BaseTheme>
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