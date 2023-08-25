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
        fliterData:(state,action) => {
            return state.filter((user)=> user.id !== action.payload)
        }
    }
})

export const {addItem,filterData}:any = cartslice.actions
export default cartslice.reducer