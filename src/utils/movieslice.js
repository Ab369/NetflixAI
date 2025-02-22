import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        currentTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addCurrentTrailer:(state,action)=>{
            state.currentTrailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        }
    }
})

export const{addNowPlayingMovies,addCurrentTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions

export default movieSlice.reducer