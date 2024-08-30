import React from 'react'

import { useLogin } from '@screens/login/hooks/useLogin.hook'

import { Controller } from 'react-hook-form'
import { Button, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BaseError from '@components/error/BaseError.component'
import BaseTablerIcon from '@components/icon/BaseTablerIcon.component'
import BaseTheme from '@components/theme/BaseTheme.component'
import BaseText from '@components/text/BaseText.component'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@routes/RootNavigation.route'

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function LoginScreen({ navigation }: LoginScreenProps): React.JSX.Element {
  const { data: { control, formState }, handler } = useLogin({ navigation })

  return (
    <SafeAreaView>
      <BaseTheme className='m-auto mt-64'>
        <BaseText 
          variant='primary'
          type='Bold'
          className='text-3xl my-5 text-center'
        >
          Selamat Datang
        </BaseText>
        <View className='m-auto'>
          <BaseTablerIcon icon='IconLogin' size={50} className='mb-5' />
        </View>
        <BaseTheme name='default2'>
          <View className='mb-3'>
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  className='px-4 border-dark-light text-primary border-[2px] py-2 rounded-full'
                  focusable
                />
              )}
            />
            <BaseError error={formState.errors?.username} />
          </View>
          <View className='mb-3'>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  className='px-4 border-dark-light text-primary border-[2px] py-2 rounded-full'
                />
              )}
            />
            <BaseError error={formState.errors?.password} />
          </View>
          <Button title="Masuk" onPress={handler.onSubmitHandler} />
        </BaseTheme>
      </BaseTheme>
    </SafeAreaView>
  )
}
