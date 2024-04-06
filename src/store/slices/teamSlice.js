import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  teamList: [
    { name: "Красные", avatar: "cat.png", people: [], color: "#ff6347" },
    { name: "Синие", avatar: "chick.png", people: [], color: "#0096ff" },
  ]
}


const teamSlice = createSlice({
  name: 'team',
  initialState,

  reducers: {
    addTeam: (state, action) => {
      console.log(action.payload);
      state.teamList.push(action.payload)
    },
    
    removeTeam: (state, action) => {
      state.teamList.splice(0, action.payload.index)
    }


  }

})

export default teamSlice.reducer
export const {addTeam, removeTeam} = teamSlice.actions

