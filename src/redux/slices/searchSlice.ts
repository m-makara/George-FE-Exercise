import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { SEARCH_PARAM_NAME } from "../constants";

const DEFAULT_QUERY = "";

type SearchState = {
  query?: string;
};

export const searchSlice = createSlice({
  name: "search",
  initialState: (): SearchState => {
    try {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get(SEARCH_PARAM_NAME);
      return { query: searchParam ?? DEFAULT_QUERY };
    } catch (e) {
      return { query: DEFAULT_QUERY };
    }
  },
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export const selectSearchQuery = (state: RootState) => state.search.query;

export default searchSlice.reducer;
