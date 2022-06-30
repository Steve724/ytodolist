import {createSlice} from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
        value:[]
    },
    reducers:{
        add:(state,action) => {
            state.value.push(action.payload)
        },
        deleteFavorite:(state,action)=>{
            let arr = state.value;
            const arr1 = arr.filter(name=>name!==action.payload);
            state.value=arr1;

            // state.value.filter((item)=>
            //     item!==action.payload
            // )
        }
    }
})

export const {add,deleteFavorite} = favoriteSlice.actions

export const selectFavorite = (state) => state.favorite.value

export default favoriteSlice.reducer