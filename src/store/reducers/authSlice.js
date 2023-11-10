import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: null,
  isLoggedin: false,
  isloading: false,
};

const BackendUrl = "";

export const login = createAsyncThunk("auth", async (body) => {
  try {
    const response = await axios.post(`${BackendUrl}`, body);
    console.log("res", response.data);
    return response.data;
  } catch (error) {
    console.log("Error", error.message);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        console.log("pending");
        state.isloading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("full payload", action.type);
        state.token = action.payload.title;
        state.isloading = false;
        state.isLoggedin = true;
      })
      .addCase(login.rejected, (state) => {
        state.isloading = false;
      });
  },
});

export const { extraReducers } = authSlice.actions;
export default authSlice.reducer;
