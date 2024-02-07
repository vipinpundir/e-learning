import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
=======
import coursePreviewReducer from "./slices/CoursePreviewSlice";
import cartReducer from "./slices/CartSlice";
>>>>>>> origin/master
import loginReducer from "./slices/LoginSlice"
import adminReducer from "./slices/AdminSlice";
export const store = configureStore({
    reducer: {
<<<<<<< HEAD
=======
        coursePreview: coursePreviewReducer,
        cart: cartReducer,
>>>>>>> origin/master
        login: loginReducer,
        admin: adminReducer
    }
}) 
