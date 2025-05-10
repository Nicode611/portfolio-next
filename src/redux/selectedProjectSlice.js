
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Slice for storing the selected project
const selectedProjectSlice = createSlice({
  name: 'selectedProject',
  initialState: {
    title: '',
    description: '',
    highlightFeatures: [],
    technos: [],
    images: [],
  },
  reducers: {
    setSelectedProject: (state, action) => {
      return action.payload;
    },
    clearSelectedProject: () => ({
      title: '',
      description: '',
      highlightFeatures: [],
      technos: [],
      images: [],
    }),
  },
});

export const { setSelectedProject, clearSelectedProject } = selectedProjectSlice.actions;
const selectedProjectReducer = selectedProjectSlice.reducer;
export default selectedProjectReducer;
