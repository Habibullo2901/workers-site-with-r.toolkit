import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "./workersSlice";

export const store = configureStore({
    reducer: {
        workersData: workerReducer
    }
})