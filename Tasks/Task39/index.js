import { configureStore } from "@reduxjs/toolkit";
import setTextReducer from "./setText";

export const store = configureStore({
    reducer: {
        setText: setTextReducer,
    },
});
