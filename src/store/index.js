import {configureStore} from '@reduxjs/toolkit'

import teamReducer from './slices/teamSlice' 
import turnReducer from './slices/indexTurnSlice'

export const store = configureStore({
  reducer: {
    team: teamReducer,
    turn: turnReducer,
  }
})