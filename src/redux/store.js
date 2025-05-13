// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedProjectReducer from './selectedProjectSlice';
import selectedFeatureReducer from './selectedFeatureSlice';
import selectedLanguageReducer from './selectedLanguageSlice';


const store = configureStore({
  reducer: {
    selectedProject: selectedProjectReducer,
    selectedFeature: selectedFeatureReducer,
    selectedLanguage: selectedLanguageReducer,
  },
});

export default store;