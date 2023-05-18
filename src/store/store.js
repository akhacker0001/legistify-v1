import { configureStore } from "@reduxjs/toolkit";
import lawyersReducer from "./LawyerDataSlice";
import BookingReducer from "./bookSlicer"

const reducer = {
  lawyersReducer: lawyersReducer,
  BookingReducer:BookingReducer
};

export const store = configureStore({ reducer: reducer });
