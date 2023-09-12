import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    memes: [],
    images: []
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addImage(state,action){
        state.images.push(action.payload);
    },
    loadImagesFromArg(state,action) {
        /** Empty the current images value without updating its reference */
        state.images.splice(0);
        state.images.push(action.payload);
    }
  }
});

export const {addImage,loadImagesFromArg} = ressources.actions

export default ressources.reducer