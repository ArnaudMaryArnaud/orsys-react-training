import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {REST_ADR} from "../constantes/constantes";

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
        state.images.push(...action.payload);
      }
    );
  },
});

export const fetchAllRessources = createAsyncThunk(
  "ressources/fetchAllRessources",
  async () => {
    const pimages = await fetch(REST_ADR + "/images");
    const images = await pimages.json();
    return images;
  }
);

export const { addImage, loadImagesFromArg } = ressources.actions;

export default ressources.reducer;
