import React, { type PropsWithChildren } from "react"
import { View, type ViewProps } from "react-native"

import type { VariantTheme } from "src/types/Variant"
import { useTheme } from "src/theme/hooks/useTheme"

export type BaseThemeProps = PropsWithChildren<{
  name?: VariantTheme
} & ViewProps>

export default function BaseTheme({children, name = 'default', ...props}: BaseThemeProps) {
  const { data } = useTheme({ name })

  return (
    <View style={data.color} {...props}>
      {children}
    </View>
  )
}