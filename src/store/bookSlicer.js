import { createSlice } from "@reduxjs/toolkit";
const initialState = { bookingDetails: [] };

const BookingSlicer = createSlice({
  name: "bookingData",
  initialState,
  reducers: {
    addBooking(state, action) {
        state.bookingDetails.push(action.payload)
    },
  }, // here I'm updating redux state 
});

export const { addBooking } = BookingSlicer.actions;
export default BookingSlicer.reducer;
