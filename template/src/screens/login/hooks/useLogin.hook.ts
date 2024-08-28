import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import type { StackNavigation } from '@routes/RootNavigation.route'
import { zodResolver } from '@hookform/resolvers/zod'

export type LoginInputs = {
  username: string
  password: string
}

const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
})

export function useLogin() {
  const { handleSubmit, control, formState, reset } = useForm<LoginInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(schema),
  })
  const navigation = useNavigation<StackNavigation>()

  const onProcessSubmitHandler = (_: LoginInputs) => {
    reset()
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
