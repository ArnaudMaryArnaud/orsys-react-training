import { createSlice } from '@reduxjs/toolkit';
import { DummyMeme } from '../interfaces/common';

const initialState = DummyMeme;
const current = createSlice({
    name: 'current',
    initialState,
    reducers: {
        changeCurrent(state,action){

        },
        clearCurrent(state,action){

        }
    }
});

export const{clearCurrent, changeCurrent} = current.actions;

export default current.reducer;