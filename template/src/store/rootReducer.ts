import { combineReducers } from '@reduxjs/toolkit'

import postSlice from '@store/slices/post.slice'
import { postApi } from './services/post.service';

export default combineReducers({
  [postApi.reducerPath]: postApi.reducer,
  post: postSlice,
});