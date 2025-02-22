import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:'gpt',
    initialState:{
        showGptPage:false,
        searchMoviesArray:null,
        tmdbMoviesArray:null
    },
    reducers:{
       toggleGPT:(state,action)=>{
        state.showGptPage=!state.showGptPage
       },

       addSearchMovies:(state,action)=>{
        const {searchNames,tmdbData}=action.payload;
        state.searchMoviesArray=searchNames;
        state.tmdbMoviesArray=tmdbData;
       }
    }
})

export const {toggleGPT,addSearchMovies}=gptslice.actions
export default gptslice.reducer