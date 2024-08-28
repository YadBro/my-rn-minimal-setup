import React from 'react'

import { useLogin } from '@screens/login/hooks/useLogin.hook'

import BaseError from '@components/error/BaseError.component'
import { Controller } from 'react-hook-form'
import { Button, Text, TextInput } from 'react-native'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@routes/RootNavigation.route'
import { SafeAreaView } from 'react-native-safe-area-context'

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function LoginScreen({ navigation }: LoginScreenProps): React.JSX.Element {
  const { data: { control, formState }, handler } = useLogin({ navigation })

  return (
    <SafeAreaView className='m-auto'>
      <Text className='text-3xl font-bold my-5'>Selamat Datang</Text>
      <Controller
        name="username"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            className='px-4 border-black border-[2px] py-2 rounded-full mb-3'
            focusable
          />
        )}
      />
      <BaseError error={formState.errors?.username} />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            className='px-4 border-black border-[2px] py-2 rounded-full mb-3'
          />
        )}
      />
      <BaseError error={formState.errors?.password} />
      <Button title="Masuk" onPress={handler.onSubmitHandler} />
    </SafeAreaView>
  )
}
