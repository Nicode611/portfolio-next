import { createSlice } from '@reduxjs/toolkit';
import { Languages } from 'lucide-react';

// Slice for storing the selected feature
const selectedLanguageSlice = createSlice({
  name: 'selectedLanguage',
  initialState: {
    language: "French"
  },
  reducers: {
    setSelectedLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
