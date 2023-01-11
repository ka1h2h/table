import { configureStore } from "@reduxjs/toolkit";
import { FiltersSlice } from "./FiltersSlice";
import { UsersSlice } from "./UsersSlice";

export const store = configureStore({
  reducer: {
    users: UsersSlice.reducer,
    filters: FiltersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
