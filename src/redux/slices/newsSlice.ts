import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface NewsItem {
  _id: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  contentEn: string;
  contentHi: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
}

interface NewsState {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get('http://localhost:5000/api/news');
  return response.data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export default newsSlice.reducer;