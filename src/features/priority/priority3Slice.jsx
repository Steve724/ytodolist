import {createSlice} from "@reduxjs/toolkit";

export const priority3Slice = createSlice({
    name:'priority3',
    initialState:{
        value:[],
    },
    reducers:{
        addP3:(state,action)=>{
            state.value.push(action.payload);
        },
        deleteP3:(state,action)=>{
            let arr = state.value;
            const arr1 = arr.filter(name=>name.title!==action.payload.title);
            state.value=arr1;
        },
        initP3:(state)=>{
            state.value=[];
        }
    }
})

export const {addP3,deleteP3,initP3} = priority3Slice.actions

export const selectPriority3 = (state) => state.priority3.value

export default priority3Slice.reducer