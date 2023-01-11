import { UrlService } from "./classes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilter {
  name?: string;
  sex?: string;
  country?: string;
  page?: number;
}

export const FiltersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: UrlService.readFromLocation(),
  },
  reducers: {
    setFilter: (s, action: PayloadAction<IFilter>) => {
      s.filter = {
        ...s.filter,
        ...action.payload,
      };
    },
    currentPage: (s, action) => {
      s.filter.page = action.payload;
    },
  },
});

export const { setFilter, currentPage } = FiltersSlice.actions;
