import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from '../utils/api';

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'loading', // loading | success | error
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = 'loading';
      state.articles = [];
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.status = 'success';
      state.articles = action.payload;
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.status = 'error';
      state.articles = [];
    });
  },
});

export const { setArticles } = articleSlice.actions;

export default articleSlice.reducer;
