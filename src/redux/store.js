import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from '../features/favorite/favoriteSlice'
import labelReducer from '../features/label/labelSlice'
import priority1Reducer from '../features/priority/priority1Slice'
import priority2Reducer from '../features/priority/priority2Slice'
import priority3Reducer from '../features/priority/priority3Slice'
import priority4Reducer from '../features/priority/priority4Slice'
import priority5Reducer from '../features/priority/priority5Slice'
import labelForAddTaskReducer from "../features/label/labelForAddTaskSlice";
import setPriorityForAddTaskReducer from "../features/priority/setPriorityForAddTaskSlice"
import dropdownSetForPriorityReducer from "../features/dropdown/dropdownSetForPrioritySlice"
import todayTaskReducer from "../features/today/todayTaskSlice"
import filterReducer from "../features/filter/filterSlice"
import overdueTaskReducer from "../features/overdue/overdueTaskSlice"
export default configureStore({
    reducer:{
        favorite:favoriteReducer,
        label:labelReducer,
        priority1:priority1Reducer,
        priority2:priority2Reducer,
        priority3:priority3Reducer,
        priority4:priority4Reducer,
        priority5:priority5Reducer,
        labelForAddTask:labelForAddTaskReducer,
        setPriorityForAddTask:setPriorityForAddTaskReducer,
        dropdownSetForPriority:dropdownSetForPriorityReducer,
        todayTask:todayTaskReducer,
        filter:filterReducer,
        overdueTask:overdueTaskReducer
    }
})