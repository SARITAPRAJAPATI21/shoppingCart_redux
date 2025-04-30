import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../assets/assets'


const initialState = {
  list: [],
}

export const counterSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

  todoAdded: (state, action) => {
    // console.log('todo fuction',action.payload,...state.list)
    console.log('cart add fuction',action.payload)
      //state.push()
      // state.list=[...state.list,action.payload]
      state.list.push(action.payload)
    },
    removeItem: (state, action) => {
      console.log('remove',action)
      state.list = state.list.filter((item, index) => item.id!== action.payload); // Use filter to remove
    },
  },
})

// Action creators are generated for each case reducer function
export const { todoAdded,removeItem} = counterSlice.actions

export default counterSlice.reducer