import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

const initialState = {
  teamList: [
    {
      name: "Тьма",
      avatar: "avocado.png",
      people: [],
      color: ['Red', "rgb(251, 56, 34)"],
      score: 0,
      isWinner: false,
      id: uuidv4(),
    },
    {
      name: "Свет",
      avatar: "broccoli.png",
      people: [],
      color: ['Blue', "rgb(25, 132, 246)"],
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
      state.teamList.push(action.payload);
    },

    addResultFieldToTeam: (state, action) => {
      state.teamList[action.payload.index]["result"] = action.payload.result;
    },

    removeTeam: (state, action) => {
      state.teamList.splice(action.payload, 1);
    },

    changeFields : (state, action) => {
      state.teamList[action.payload.index].name = action.payload.newName
      state.teamList[action.payload.index].color = action.payload.color
      state.teamList[action.payload.index].avatar = action.payload.avatar
    },

    addPerson: (state, action) => {
      state.teamList[action.payload.index].people.push({memberName: action.payload.person})
    },

    deletePerson: (state, action) => {
      state.teamList[action.payload.index].people.splice(action.payload.personId, 1)
    },

    changeResult : (state, action) => {
      state.teamList[action.payload.index].result = action.payload.newResult
      const amountOfTrue = action.payload.newResult.filter((el => el.result === true)).length
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
export const { addTeam, removeTeam, addResultFieldToTeam, changeFields, addPerson, deletePerson, changeResult, pickWinner } = teamSlice.actions;
