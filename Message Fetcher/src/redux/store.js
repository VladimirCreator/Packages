import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./slices/applicationSlice";

const store = configureStore(
    {
        reducer: {
            application: applicationSlice.reducer,
        }
    }
);

export default store;