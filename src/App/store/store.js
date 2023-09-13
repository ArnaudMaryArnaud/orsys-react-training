import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { addImage, fetchAllRessources} from "./ressources.js";
import currentReduceur from "./current.js";

export const store = configureStore({
  reducer: combineReducers({ressources: ressourcesReducer, current: currentReduceur}),
  devTools: true,
});

store.dispatch(fetchAllRessources());