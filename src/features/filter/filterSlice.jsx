import {createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name:'filter',
    initialState:{
        value:[],
    },
    reducers:{
        addFilter:(state,action)=>{
            state.value.push(action.payload);
        },
        initFilter:(state)=>{
            state.value=[];
        }
    }
})

export const {addFilter,initFilter} = filterSlice.actions

export const selectFilter = (state) => state.filter.value

export default filterSlice.reducer