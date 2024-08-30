import { useState } from 'react'
import counterDummy from '@data/counter-dummy.data.json'

interface useCounterParams {
  initialValue: number
}

export function useCounter(params?: useCounterParams) {
  const { initialValue } = params || {
    initialValue: 0
  }

  const [count, setCount] = useState(initialValue)

  const onIncrementHandler = () => setCount(prevState => prevState + counterDummy.incrementValue)

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
