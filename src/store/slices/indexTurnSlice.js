import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  turn: 0,
};

const turnSlice = createSlice({
  name: "turn",
  initialState,

  reducers: {
    nextTurn: (state) => {
      state.turn += 1;
    },
  },
});

export default turnSlice.reducer;
export const { nextTurn } = turnSlice.actions;
