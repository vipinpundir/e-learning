import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/LoginSlice"
import adminReducer from "./slices/AdminSlice";
export const store = configureStore({
    reducer: {
        login: loginReducer,
        admin: adminReducer
    }
}) 
