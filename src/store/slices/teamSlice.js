import {createSlice} from '@reduxjs/toolkit'

const initialState = [
  { name: "Красные", avatar: "cat.png", people: [], color: "#ff6347" },
  { name: "Синие", avatar: "chick.png", people: [], color: "#0096ff" },
]


const teamSlice = createSlice({
  name: 'team',
  initialState,

  reducers: {
    addTeam: (state, action) => {
      state.push(action.payload)
    },
    
    removeTeam: (state, action) => {
      state.splice(0, action.payload.index)
    }


  }

})

export default teamSlice.reducer

