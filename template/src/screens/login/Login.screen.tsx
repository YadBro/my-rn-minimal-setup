import React from 'react'

import { useLogin } from '@screens/login/hooks/useLogin.hook'

import BaseError from '@components/error/BaseError.component'
import { Controller } from 'react-hook-form'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from 'src/routes/RootNavigation.route'

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function LoginScreen({ navigation }: LoginScreenProps): React.JSX.Element {
  const { data: { control, formState }, handler } = useLogin({ navigation })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
      <Controller
        name="username"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            style={styles.input}
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
            style={styles.input}
          />
        )}
      />
      <BaseError error={formState.errors?.password} />
      <Button title="Masuk" onPress={handler.onSubmitHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
})
