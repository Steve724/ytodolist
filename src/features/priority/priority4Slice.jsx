import {createSlice} from "@reduxjs/toolkit";

export const priority4Slice = createSlice({
    name:'priority4',
    initialState:{
        value:[],
    },
    reducers:{
        addP4:(state,action)=>{
            state.value.push(action.payload);
        },
        deleteP4:(state,action)=>{
            let arr = state.value;
            const arr1 = arr.filter(name=>name.title!==action.payload.title);
            state.value=arr1;
        },
        initP4:(state)=>{
            state.value=[];
        }
    }
})

export const {addP4,deleteP4,initP4} = priority4Slice.actions

export const selectPriority4 = (state) => state.priority4.value

export default priority4Slice.reducer