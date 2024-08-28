import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import rootReducer from '@store/rootReducer'
import { reduxStorage } from '@store/storage'
import { useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore, type PersistConfig } from 'redux-persist'
import { postApi } from './services/post.service'


const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage: reduxStorage,
  whitelist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const serviceMiddlewares = [
  postApi.middleware,
]

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(serviceMiddlewares),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


setupListeners(store.dispatch)

export default store
