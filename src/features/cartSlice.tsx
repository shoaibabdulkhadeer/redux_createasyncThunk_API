import { createSlice } from "@reduxjs/toolkit";

type initialtype = any[]
const initialState:initialtype = []

export const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action) => {
            state.push(action.payload)
        },
        filterData:(state,action) => {
            return state.filter((user)=> user.id !== action.payload)
        },
        updateCart: (state, action) => {
            const { itemId, isItemInCart } = action.payload;
            const itemIndex = state.findIndex((item) => item.id === itemId);
            if (itemIndex !== -1) {
              state[itemIndex].isItemInCart = isItemInCart;
            }
          }
    }
})

export const {addItem,filterData,updateCart}:any = cartslice.actions
export default cartslice.reducer