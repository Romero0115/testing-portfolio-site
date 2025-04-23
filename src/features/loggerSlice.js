import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: localStorage.getItem("username") != null,
  username: localStorage.getItem("username") || null,
};

export const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {
    SetLoggedTrue: (state, action) => {
      state.isLogged = true;
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    SetLoggedFalse: (state) => {
      state.isLogged = false;
      state.username = null;
      localStorage.removeItem("username");
    },
  },
});

export const { SetLoggedTrue, SetLoggedFalse } = loggerSlice.actions;
export default loggerSlice.reducer;