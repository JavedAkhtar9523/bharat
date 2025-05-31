import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Channel {
  _id: string;
  nameEn: string;
  nameHi: string;
  logo: string;
  color: string;
  schedule: { time: string; titleEn: string; titleHi: string; live: boolean }[];
}

interface ChannelsState {
  channels: Channel[];
  loading: boolean;
  error: string | null;
}

const initialState: ChannelsState = {
  channels: [],
  loading: false,
  error: null,
};

export const fetchChannels = createAsyncThunk('channels/fetchChannels', async () => {
  const response = await axios.get('http://localhost:5000/api/channels');
  return response.data;
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChannels.fulfilled, (state, action) => {
        state.loading = false;
        state.channels = action.payload;
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch channels';
      });
  },
});

export default channelsSlice.reducer;