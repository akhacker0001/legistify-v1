import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "@reduxjs/toolkit";
import layersReducer from "./LayerDataSlice";

const reducer = {
  layersReducer: layersReducer,
};

export const store = configureStore({ reducer: reducer });
