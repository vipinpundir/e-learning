import { createSlice } from "@reduxjs/toolkit";

const coursePreviewSlice = createSlice({
    name: "coursePreview",
    initialState: null,
    reducers: {
        addItem: (state,action) =>{
            return action.payload;
        },
    },
});

export const {addItem} = coursePreviewSlice.actions;
export default coursePreviewSlice.reducer;