import {createSlice} from "@reduxjs/toolkit";

export const labelForAddTaskSlice = createSlice({
    name:'labelForAddTask',
    initialState:{
        value:[],
    },
    reducers:{
        addLabelForAddTask:(state,action) => {
          state.value.push(action.payload)
        },
    },
})

export const {addLabelForAddTask} = labelForAddTaskSlice.actions

export const selectLabelForAddTask = (state) => state.labelForAddTask.value

export default labelForAddTaskSlice.reducer