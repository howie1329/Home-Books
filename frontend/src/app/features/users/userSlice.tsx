import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { currentUserID: {}, role: "", loggedIn: false };

export const roleDirection = (newrole:string, newloggedIn:boolean) => {
  if (newrole === "admin" && newloggedIn === true) {
    return "/admin";
  } else if (newrole === "reg" && newloggedIn === true) {
    return "/reguser";
  } else {
    alert("Wrong Info");
    return "/signin";
  }
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const { currentUserID, role, loggedIn } = action.payload;
      state.currentUserID = currentUserID;
      state.role = role;
      state.loggedIn = loggedIn;
    },
    signOut: (state) => {
      state.currentUserID = {};
      state.role = "";
      state.loggedIn = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
