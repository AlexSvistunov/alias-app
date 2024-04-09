import { createSlice } from "@reduxjs/toolkit";
import useGetTeam from "../../hooks/useGetTeam";



const initialState = {
  turn: 0,
};

const turnSlice = createSlice({
  name: "turn",
  initialState,

  reducers: {
    nextTurn: (state) => {
      state.turn += 1
    },

    newCircleTurn: state => {
      state.turn = 0
    }
  },
});

export default turnSlice.reducer;
export const { nextTurn, newCircleTurn } = turnSlice.actions;
