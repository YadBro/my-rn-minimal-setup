import React, { 
  PropsWithChildren,
  type JSX
} from 'react'

import { 
  TouchableOpacity,
  type TouchableOpacityProps,
  type GestureResponderEvent,
 } from "react-native";
import BaseText, { 
  type BaseTextProps
} from '@components/text/BaseText.component';

import type { VariantColor } from 'src/types/Variant';

export type BaseButtonProps = PropsWithChildren<{
  text: string
  variant?: VariantColor
  baseTextProps?: BaseTextProps
  onPressHandler: (event: GestureResponderEvent) => void
} & TouchableOpacityProps>

export default function BaseButton({
  text,
  variant = 'primary',
  baseTextProps,
  onPressHandler,
  children,
  ...props
}: BaseButtonProps) {

  let variantText: VariantColor

  switch (variant) {
    case 'primary':
      variantText = 'light'
      break;
    case 'secondary':
      variantText = 'primary'
      break;
    default:
      variantText = 'dark-light'
      break;
  }

  return (
    <TouchableOpacity 
    onPress={onPressHandler}
    {...props}
    className={`bg-${variant} py-3 px-3 rounded-md ${props.className}`}
    >
      {
        children
      ||
        <BaseText
          variant={'light'}
          {...baseTextProps}
        >
          {text}
        </BaseText>
      }
    </TouchableOpacity>
  )
}