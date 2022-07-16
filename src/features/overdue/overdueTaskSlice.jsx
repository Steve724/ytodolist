import {createSlice} from "@reduxjs/toolkit";

export const todayTaskSlice = createSlice({
    name:'todayTask',
    initialState:{
        value:[],
    },
    reducers:{
        addTodayTask:(state,action) => {
          state.value.push(action.payload)
        },
        initTodayTask:(state)=>{
            state.value=[];
        }
    },
})

export const {addTodayTask,initTodayTask} = todayTaskSlice.actions

export const selectTodayTask = (state) => state.todayTask.value

export default todayTaskSlice.reducer