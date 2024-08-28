import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'


import type { StackNavigation } from '@routes/RootNavigation.route'

export type LoginInputs = {
  username: string
  password: string
}

export function useLogin() {
  const { handleSubmit, control, formState } = useForm<LoginInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const navigation = useNavigation<StackNavigation>()

  const onProcessSubmitHandler = (data: LoginInputs) => {
    console.log(data)
    navigation.navigate('Home')
  }

  const onSubmitHandler = handleSubmit(onProcessSubmitHandler)

  return {
    data: {
      control,
      formState,
    },
    handler: {
      onSubmitHandler,
    },
  }
}
