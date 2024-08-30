import React, { type PropsWithChildren } from "react";
import { Text, type TextProps, StyleSheet } from "react-native";
import type { VariantColor } from "src/types/Variant";

export type BaseTextProps = PropsWithChildren<TextProps & {
  variant?: VariantColor;
  type?: 'Regular' | 'Medium' | 'Bold' | 'ExtraBold' | 'ExtraLight' | 'Light' | 'SemiBold' | 'Thin';
}>;

export default function BaseText({ children, variant = 'primary', type = 'Regular', ...props }: BaseTextProps) {

  return (
    <Text 
      {...props}
      className={`text-${variant} ${props.className}`}
      style={[
        props.style,
        { fontFamily: `Inter-${type}` }
      ]}
    >
      {children}
    </Text>
  )
}
