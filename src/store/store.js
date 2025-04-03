import { configureStore } from "@reduxjs/toolkit";
import loggerReducer from "../features/loggerSlice"
export const store = configureStore({
    reducer:{
        logger:loggerReducer,
    }
});

