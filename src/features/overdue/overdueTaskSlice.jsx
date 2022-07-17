import {createSlice} from "@reduxjs/toolkit";

export const overdueTaskSlice = createSlice({
    name:'overdueTask',
    initialState:{
        value:[],
    },
    reducers:{
        addOverdueTask:(state,action) => {
          state.value.push(action.payload)
        },
        initOverdueTask:(state)=>{
            state.value=[];
        }
    },
})

export const {addOverdueTask,initOverdueTask} = overdueTaskSlice.actions

export const selectOverdueTask = (state) => state.overdueTask.value

export default overdueTaskSlice.reducer