import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flag: false
}

const flagSlice = createSlice({
  name: 'flag',
  initialState,

  reducers: {
    makeFlagTrue: (state) => {
      state.flag = true
    },

    makeFlagFalse: (state) => {
      state.flag = false
    }
  }
})

export default flagSlice.reducer

export const {makeFlagTrue, makeFlagFalse} = flagSlice.actions