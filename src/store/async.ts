import { RootState } from "./index";
import { IFilter, setFilter } from "./FiltersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UrlService } from "./classes";

export const filtersChanged = createAsyncThunk<
  void,
  IFilter,
  { state: RootState }
>("users/filters", async (f: IFilter, thunkAPI) => {
  thunkAPI.dispatch(setFilter(f));
  UrlService.recordLocation(thunkAPI.getState().filters.filter);
});
