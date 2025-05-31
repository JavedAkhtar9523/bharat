import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  language: 'en' | 'hi';
}

const initialState: LanguageState = { language: 'hi' };

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<'en' | 'hi'>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;