import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamList: [
    {
      name: "Красные",
      avatar: "cat.png",
      people: [],
      color: "#ff6347",
      score: 0,
    },
    {
      name: "Синие",
      avatar: "chick.png",
      people: [],
      color: "#0096ff",
      score: 0,
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
      const amountOfTrue = action.payload.result.filter((el => el))

      state.teamList[action.payload.index]['score'] += amountOfTrue.length
    },

    removeTeam: (state, action) => {
      state.teamList.splice(action.payload, 1);
    },

    changeName : (state, action) => {
      state.teamList[action.payload.index].name = action.payload.nameValue
    },

    addPerson: (state, action) => {
      state.teamList[action.payload.index].people.push({memberName: action.payload.person})
    }
  },
});

export default teamSlice.reducer;
export const { addTeam, removeTeam, addResultFieldToTeam, changeName, addPerson } = teamSlice.actions;
