import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});

export default store;
