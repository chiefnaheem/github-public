// searchPageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Pagination,
  Repository,
  SearchPageState,
} from "../interfaces/app.interface";

const initialState: SearchPageState = {
  searchString: "",
  sortCriteria: "stars",
  resultsPerPage: 10,
  repositories: [],
  pagination: {
    currentPage: 1,
    resultsPerPage: 10,
    totalPages: 0,
  },
};

const searchPageSlice = createSlice({
  name: "searchPage",
  initialState,
  reducers: {
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    setSortCriteria: (state, action: PayloadAction<string>) => {
      state.sortCriteria = action.payload;
    },
    setResultsPerPage: (state, action: PayloadAction<number>) => {
      state.resultsPerPage = action.payload;
    },
    setRepositories: (state, action: PayloadAction<Repository[]>) => {
      state.repositories = action.payload;
    },
    setPagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload;
    },
  },
});

export const {
  setSearchString,
  setSortCriteria,
  setResultsPerPage,
  setRepositories,
  setPagination,
} = searchPageSlice.actions;

export default searchPageSlice.reducer;
