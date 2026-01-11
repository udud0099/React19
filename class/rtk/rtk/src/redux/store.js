import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './featurs/searchSlice'

export const store = configureStore({
    reducer:{
        search: searchReducer
    }
})