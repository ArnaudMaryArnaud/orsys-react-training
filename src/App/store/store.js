import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources.js";

export const store = configureStore({
  reducer: ressourcesReducer,
  devTools: true,
});
