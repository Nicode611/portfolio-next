import { createSlice } from '@reduxjs/toolkit';

// Slice for storing the selected feature
const selectedFeatureSlice = createSlice({
  name: 'selectedFeature',
  initialState: {
    title: "Mise en cache",
    catchLine: "Description of Highlight Feature 1",
    description: "Description of Highlight Feature 1",
  },
  reducers: {
    setSelectedFeature: (state, action) => {
      return action.payload;
    },
    clearSelectedFeature: () => ({
      title: "",
      catchLine: "",
      description: "",
    }),
  },
});

export const { setSelectedFeature, clearSelectedFeature } = selectedFeatureSlice.actions;
export default selectedFeatureSlice.reducer;
