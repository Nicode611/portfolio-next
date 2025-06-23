// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedProjectReducer from './selectedProjectSlice';
import selectedFeatureReducer from './selectedFeatureSlice';
import selectedLanguageReducer from './selectedLanguageSlice';
import galleryReducer from './gallerySlice';


const store = configureStore({
  reducer: {
    selectedProject: selectedProjectReducer,
    selectedFeature: selectedFeatureReducer,
    selectedLanguage: selectedLanguageReducer,
    gallery: galleryReducer,
  },
});

export default store;