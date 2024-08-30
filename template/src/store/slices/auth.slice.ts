import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AuthInitialState = {
  isSigned: boolean
};

const initialState: AuthInitialState = {
  isSigned: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<Partial<AuthInitialState['isSigned']>>) {
      state.isSigned = action.payload
    },
  },
});

export const authActions = authSlice.actions

export default authSlice.reducer
