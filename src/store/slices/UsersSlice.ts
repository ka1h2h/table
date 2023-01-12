import { UsersAPI } from "../api";
import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: UsersAPI.getUsersList(),
  },
  reducers: {},
});
