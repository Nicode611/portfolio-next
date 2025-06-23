import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  images: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    openGallery: (state, action) => {
      state.isOpen = true;
      state.images = action.payload;
    },
    closeGallery: (state) => {
      state.isOpen = false;
      state.images = [];
    },
  },
});

export const { openGallery, closeGallery } = gallerySlice.actions;
export default gallerySlice.reducer; 