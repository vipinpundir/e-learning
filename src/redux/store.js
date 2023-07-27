import { configureStore } from "@reduxjs/toolkit";
import coursePreviewReducer from "./slices/CoursePreviewSlice";
import cartReducer from "./slices/CartSlice";
import loginReducer from "./slices/LoginSlice"

export const store = configureStore({
    reducer: {
        coursePreview: coursePreviewReducer,
        cart: cartReducer,
        login: loginReducer
    }
}) 
