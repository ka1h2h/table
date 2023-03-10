import { UrlService } from "../services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilter {
  name?: string;
  sex?: string;
  country?: string;
  page?: number;
  sortBy?: string;
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
      if (!("page" in action.payload) && !("sortBy" in action.payload)) {
        s.filter.page = 1;
      }
    },
  },
});

export const { setFilter } = FiltersSlice.actions;
