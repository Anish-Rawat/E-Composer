import { configureStore } from "@reduxjs/toolkit";
import furnitureReducer from "../features/furnitureSlice"; 

const store = configureStore({
  reducer: {
    furniture: furnitureReducer, 
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
