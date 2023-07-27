import { configureStore } from "@reduxjs/toolkit";
import coursePreviewReducer from "./slices/CoursePreviewSlice";
import cartReducer from "./slices/CartSlice";
import loginReducer from "./slices/LoginSlice"
import adminReducer from "./slices/AdminSlice";
export const store = configureStore({
    reducer: {
        coursePreview: coursePreviewReducer,
        cart: cartReducer,
        login: loginReducer,
        admin: adminReducer
    }
}) 
