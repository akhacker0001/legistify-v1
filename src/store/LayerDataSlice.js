import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await userData();
  return response.data;
});

const initialState = { data: [], loading: false, error: "" };

const layeraData = createSlice({
  name: "layersData",
  initialState,
  reducers: {}, // Add any additional reducers if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const allUserData = (state) =>{
    // console.log(state,"state")
    
    return state.layersReducer.data}
export default layeraData.reducer;
