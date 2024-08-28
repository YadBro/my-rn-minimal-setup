import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type PostInitialState = {
  list: {
    loading: false,
    data: [],
  }
};

const initialState: PostInitialState = {
  list: {
    loading: false,
    data: [],
  },
};

const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    postListPatch(state, action: PayloadAction<Partial<PostInitialState['list']>>) {
      if (action.payload?.loading) {
        state.list.loading = action.payload.loading
      } else if (action.payload?.data) {
        state.list.data = action.payload.data
      }
    },
  },
});

export const taskActions = tasksSlice.actions

export default tasksSlice.reducer
