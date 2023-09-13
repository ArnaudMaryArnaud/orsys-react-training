import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DummyMeme } from "../interfaces/common";
import { REST_ADR } from "../constantes/constantes";

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
  extraReducers(builder) {
    /** Important the first param of addCase has to be the same than the first param of the createAsynThunk it is observing */
    builder.addCase("current/save/fulfilled", (state, action) => {});
  },
});

export const saveCurrent = createAsyncThunk("current/save", async (current) => {
  const promise = await fetch(
    `${REST_ADR}/memes${undefined === current.id ? "" : "/" + current.id}`,
    {
      method: undefined === current.id ? "POST" : "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(current),
    }
  );
  return await promise.json();
});

export const { clear, changeCurrent } = current.actions;

export default current.reducer;
