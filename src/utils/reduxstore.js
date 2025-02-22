import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieslice'
import gptReducer from './gptslice'
import configReducer from './configslice'

const store= configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer,
    }
})

export default store;