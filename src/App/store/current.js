import { createSlice } from '@reduxjs/toolkit';
import { DummyMeme } from '../interfaces/common';

const initialState = DummyMeme;
const current = createSlice({
    name: 'current',
    initialState,
    reducers: {
        changeCurrent(state,action){
            state.current.push(action.payload);
        },
        clearCurrent(state,action){
            state.current.push(DummyMeme);
        }
    }
});

export const{clearCurrent, changeCurrent} = current.actions;

export default current.reducer;