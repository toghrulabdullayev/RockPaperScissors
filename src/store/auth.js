import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null };

export const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const authActions = authStore.actions;
