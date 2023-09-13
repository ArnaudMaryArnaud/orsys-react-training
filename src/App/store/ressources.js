import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR } from "../constantes/constantes";

const initialState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addImage(state, action) {
      state.images.push(action.payload);
    },
    loadImagesFromArg(state, action) {
      /** Empty the current images value without updating its reference */
      state.images.splice(0);
      state.images.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      "ressources/fetchAllRessources/fulfilled",
      (state, action) => {
        state.images.splice(0);
        state.images.push(...action.payload.images);
        state.memes.splice(0);
        state.memes.push(...action.payload.memes);
      }
    );
  },
});

export const fetchAllRessources = createAsyncThunk(
  "ressources/fetchAllRessources",
  async () => {
    const pi = fetch(REST_ADR + "/images");
    const pm = fetch(REST_ADR + "/memes");
    const pall = await Promise.all([pi, pm]);
    const imgs = await pall[0].json();
    const mms = await pall[1].json();
    return { images: imgs, memes: mms };
  }
);

export const { addImage, loadImagesFromArg } = ressources.actions;

export default ressources.reducer;
