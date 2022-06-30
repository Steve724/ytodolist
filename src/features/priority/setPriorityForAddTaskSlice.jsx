import {createSlice} from "@reduxjs/toolkit";

export const setPriorityForAddTaskSlice = createSlice({
    name:'setPriorityForAddTask',
    initialState:{
        value:5,
    },
    reducers:{
        setPriority:(state,action)=>{
            state.value = action.payload;
        },
        setDefaultPriority:(state,action)=>{
            state.value = 5;
        }
    }
})

export const {setPriority,setDefaultPriority} = setPriorityForAddTaskSlice.actions

export const selectPriorityForAddTask = (state) => state.setPriorityForAddTask.value

export default setPriorityForAddTaskSlice.reducer