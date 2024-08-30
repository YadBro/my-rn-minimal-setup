import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { authActions } from '@store/slices/auth.slice'

import { type NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from '@routes/RootNavigation.route'

export type LoginInputs = {
  username: string
  password: string
}

const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
})

type useLoginParams = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login", undefined>
}
export function useLogin(params: useLoginParams) {
  const dispatch = useDispatch()
  const { handleSubmit, control, formState, reset } = useForm<LoginInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(schema),
  })

  const onProcessSubmitHandler = (_: LoginInputs) => {
    reset()
    dispatch(authActions.setAuth(true))
    params.navigation.replace('Home', {
      userId: 1,
    })
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
