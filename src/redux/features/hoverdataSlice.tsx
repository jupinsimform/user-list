import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, HoverdataState } from "../../types/Types";

const initialState: HoverdataState = {
  hoverdata: null,
};

export const hoverdataSlice = createSlice({
  name: "hoverdata",
  initialState,
  reducers: {
    setHoverdata: (state, action: PayloadAction<User | null>) => {
      state.hoverdata = action.payload;
    },
  },
});

export const { setHoverdata } = hoverdataSlice.actions;

export default hoverdataSlice.reducer;
