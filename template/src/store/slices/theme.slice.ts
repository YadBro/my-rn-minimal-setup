import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { VariantMode } from 'src/types/Variant';

export type ThemeInitialState = {
  mode: VariantMode
};

const initialState: ThemeInitialState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Partial<ThemeInitialState['mode']>>) {
      state.mode = action.payload
    },
  },
});

export const themeActions = themeSlice.actions

export default themeSlice.reducer
