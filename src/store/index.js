import {configureStore} from '@reduxjs/toolkit'

import teamReducer from './slices/teamSlice' 
import turnReducer from './slices/indexTurnSlice'
import settingsReducer from './slices/settingsSlice'

export const store = configureStore({
  reducer: {
    team: teamReducer,
    turn: turnReducer,
    settings: settingsReducer
  }
})