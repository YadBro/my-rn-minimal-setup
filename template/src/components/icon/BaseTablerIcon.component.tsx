import React from 'react'

import type { IconProps } from '@tabler/icons-react-native'

import * as TablerIcon from '@tabler/icons-react-native'

export type ListIconsType = keyof typeof TablerIcon

export interface BaseTablerIconProps extends IconProps {
  icon: ListIconsType
}

export default function BaseTablerIcon(props: BaseTablerIconProps) {
  const { icon, ...iconProps } = props

  const IconComponent = TablerIcon[icon] as React.ComponentType<IconProps>

  return <IconComponent size={18} {...iconProps} />
}
