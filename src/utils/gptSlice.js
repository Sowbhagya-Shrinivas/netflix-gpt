import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames : null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
    clearGptMovieResult: (state) => {
      state.movieResults = 0;
      state.movieNames = 0;
    }
  },
});

export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
