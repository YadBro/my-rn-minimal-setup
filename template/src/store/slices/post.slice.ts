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

const postSlice = createSlice({
  name: 'post',
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

export const postActions = postSlice.actions

export default postSlice.reducer
