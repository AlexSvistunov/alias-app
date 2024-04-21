import {configureStore, combineReducers} from '@reduxjs/toolkit'

import teamReducer from './slices/teamSlice' 
import turnReducer from './slices/indexTurnSlice'
import settingsReducer from './slices/settingsSlice'
import flagReducer from './slices/flagSlice'

import storage from 'redux-persist/lib/storage'


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const rootReducer = combineReducers({
  team: teamReducer,
  turn: turnReducer,
  settings: settingsReducer,
  flag: flagReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['team', 'settings']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer
})


export const persistor = persistStore(store)

