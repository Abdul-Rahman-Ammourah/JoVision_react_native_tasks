import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "",
};

export const setTextSlice = createSlice({
    name: "setText",
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { setText } = setTextSlice.actions;
export default setTextSlice.reducer;
