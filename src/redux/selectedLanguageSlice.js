import { createSlice } from '@reduxjs/toolkit';
import { Languages } from 'lucide-react';

// Slice for storing the selected feature
const selectedLanguageSlice = createSlice({
  name: 'selectedLanguage',
  initialState: {
    language: "fr"
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
