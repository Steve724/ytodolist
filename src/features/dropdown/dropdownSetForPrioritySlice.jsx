import {createSlice} from "@reduxjs/toolkit";

export const dropdownSetForPrioritySlice = createSlice({
    name:'dropdownSetForPriority',
    initialState:{
        value:false
    },
    reducers:{
        change:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export const {change} = dropdownSetForPrioritySlice.actions

export const selectDropdownSetForPriority = (state) => state.dropdownSetForPriority.value

export default dropdownSetForPrioritySlice.reducer