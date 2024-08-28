import React from 'react'
import { FieldError } from 'react-hook-form'

import { StyleSheet, Text, View } from 'react-native'

type BaseErrorProps = {
  error?: FieldError | undefined
}

export default function BaseError({ error }: BaseErrorProps): React.JSX.Element | null {
  if (!error?.message) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error.message}</Text>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  text: {
    color: 'red',
    fontSize: 14,
  },
});
