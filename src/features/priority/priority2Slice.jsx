import {createSlice} from "@reduxjs/toolkit";

export const priority2Slice = createSlice({
    name:'priority2',
    initialState:{
        value:[],
    },
    reducers:{
        addP2:(state,action)=>{
            state.value.push(action.payload);
        },
        deleteP2:(state,action)=>{
            let arr = state.value;
            const arr1 = arr.filter(name=>name.title!==action.payload.title);
            state.value=arr1;
        },
        initP2:(state)=>{
            state.value=[];
        }
    }
})

export const {addP2,deleteP2,initP2} = priority2Slice.actions

export const selectPriority2 = (state) => state.priority2.value

export default priority2Slice.reducer