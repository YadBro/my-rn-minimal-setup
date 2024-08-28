import { useState } from 'react'
import counterDummy from '@data/counter-dummy.data.json'

interface useCounterParams {
  value: number
}

export function useCounter(params: useCounterParams) {
  const [count, setCount] = useState(params.value)

  const onIncrementHandler = () => setCount(prevState => prevState + counterDummy.value)

  return {
    data: {
      count,
    },
    set: {
      setCount,
    },
    handler: {
      onIncrementHandler,
    },
  }
}
