import colors from "@theme/colors.theme";
import { useAppSelector } from "src/store";
import { VariantTheme } from "src/types/Variant";

export type useThemeParams = {
  name: VariantTheme
}

export function useTheme(params?: useThemeParams) {
  const { name } = params || {
    name: 'default'
  }

  const theme = useAppSelector(state => state.theme)

  if (!theme) {
    throw new Error("Theme is not defined in the Redux state.");
  }

  const isDarkMode = theme.mode === 'dark'
  const backgroundColorScheme = theme.mode === 'dark' ? 'black' : '#ffffff'

  return {
    data: {
      isDarkMode,
      mode: theme.mode,
      color: colors[name][theme.mode],
      backgroundColorScheme,
    },
  }
}