import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: {
    roundDuration: 3,
    scoreForWin: 4,
  }
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {
    changeRoundDuration: (state, action) => {
      state.settings.roundDuration = action.payload
    },

    changeScoreForWin: (state, action) => {
      state.settings.scoreForWin = action.payload
    }
  }
})


export default settingsSlice.reducer
export const {changeRoundDuration, changeScoreForWin} = settingsSlice.actions