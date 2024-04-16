import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

const initialState = {
  teamList: [
    {
      name: "Тьма",
      avatar: "avocado.png",
      people: [],
      color: "#ff6347",
      score: 0,
      isWinner: false,
      id: uuidv4(),
    },
    {
      name: "Свет",
      avatar: "tomato.png",
      people: [],
      color: "#0096ff",
      score: 0,
      isWinner: false,
      id: uuidv4(),
    },
  ],
};

const teamSlice = createSlice({
  name: "team",
  initialState,

  reducers: {
    addTeam: (state, action) => {
      console.log(action.payload);
      state.teamList.push(action.payload);
    },

    addResultFieldToTeam: (state, action) => {
      console.log(action.payload);
      state.teamList[action.payload.index]["result"] = action.payload.result;
    },

    removeTeam: (state, action) => {
      state.teamList.splice(action.payload, 1);
    },

    changeName : (state, action) => {
      state.teamList[action.payload.index].name = action.payload.nameValue
    },

    addPerson: (state, action) => {
      state.teamList[action.payload.index].people.push({memberName: action.payload.person})
    },

    deletePerson: (state, action) => {
      state.teamList[action.payload.index].people.splice(action.payload.personId, 1)
    },

    changeResult : (state, action) => {
      state.teamList[action.payload.index].result = action.payload.newResult
      const amountOfTrue = action.payload.newResult.filter((el => el)).length
      state.teamList[action.payload.index].score += amountOfTrue
    },

    pickWinner : (state, action) => {
      const name = action.payload.name

      const index = state.teamList.findIndex(team => team.name === name)
      state.teamList[index].isWinner = true
    }
  },
});

export default teamSlice.reducer;
export const { addTeam, removeTeam, addResultFieldToTeam, changeName, addPerson, deletePerson, changeResult, pickWinner } = teamSlice.actions;
