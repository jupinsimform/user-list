import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import hoverdataReducer from "../features/hoverdataSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    hoverdata: hoverdataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
