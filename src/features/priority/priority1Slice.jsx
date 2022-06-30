import {createSlice} from "@reduxjs/toolkit";

export const priority1Slice = createSlice({
    name:'priority1',
    initialState:{
        value:[],
    },
    reducers:{
        addP1:(state,action)=>{
            state.value.push(action.payload);
        },
        deleteP1:(state,action)=>{
            let arr = state.value;
            const arr1 = arr.filter(name=>name.title!==action.payload.title);
            state.value=arr1;
        },
        initP1:(state)=>{
            state.value=[];
        }
    }
})

export const {addP1,deleteP1,initP1} = priority1Slice.actions

export const selectPriority1 = (state) => state.priority1.value

export default priority1Slice.reducer