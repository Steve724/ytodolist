import {createSlice} from "@reduxjs/toolkit";

export const priority5Slice = createSlice({
    name:'priority5',
    initialState:{
        value:[],
    },
    reducers:{
        addP5:(state,action)=>{
            state.value.push(action.payload);
        },
        deleteP5:(state,action)=>{
            let arr = state.value;
            const arr1 = arr.filter(name=>name.title!==action.payload.title);
            state.value=arr1;
        },
        initP5:(state)=>{
            state.value=[];
        }
    }
})

export const {addP5,deleteP5,initP5} = priority5Slice.actions

export const selectPriority5 = (state) => state.priority5.value

export default priority5Slice.reducer