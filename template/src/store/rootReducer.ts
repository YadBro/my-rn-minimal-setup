import { combineReducers } from '@reduxjs/toolkit'

import { postApi } from './services/post.service'

import postSlice from '@store/slices/post.slice'
import themeSlice from '@store/slices/theme.slice'
import authSlice from './slices/auth.slice'

export default combineReducers({
  [postApi.reducerPath]: postApi.reducer,
  auth: authSlice,
  post: postSlice,
  theme: themeSlice,
})