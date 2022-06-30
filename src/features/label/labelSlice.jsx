import {createSlice} from "@reduxjs/toolkit";

export const labelSlice = createSlice({
    name:'label',
    initialState:{
        value:[],
    },
    reducers:{
        addLabel:(state,action) => {
          state.value.push(action.payload)
        },
    },
})

export const {addLabel} = labelSlice.actions

export const selectLabel = (state) => state.label.value

export default labelSlice.reducer