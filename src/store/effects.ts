import { RootState } from "./index";
import { IFilter, setFilter } from "./slices/FiltersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UrlService } from "./services";

export const filtersChanged = createAsyncThunk<
  void,
  IFilter,
  { state: RootState }
>("users/filters", async (f: IFilter, thunkAPI) => {
  thunkAPI.dispatch(setFilter(f));
  UrlService.recordLocation(thunkAPI.getState().filters.filter);
});
