import { createSlice } from "@reduxjs/toolkit";
import { DummyMeme } from "../interfaces/common";

const initialState = DummyMeme;
const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    changeCurrent(state, action) {
      Object.assign(state, action.payload);
    },
    clear(state) {
      delete state.id;
      Object.assign(state, DummyMeme);
    },
  },
});

export const { clear, changeCurrent } = current.actions;

export default current.reducer;
