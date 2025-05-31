import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import languageReducer from './slices/languageSlice';
import languageReducer from '../redux/slices/languageSlice';
import newsReducer from '../redux/slices/newsSlice';
import channelsReducer from '../redux/slices/channelsSlice';
import authReducer from '../redux/slices/authSlice';
// import userReducer from '../redux/slices/userSlice';

const rootReducer = combineReducers({
  language: languageReducer,
  news: newsReducer,
  channels: channelsReducer,
  auth:authReducer,
  
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;