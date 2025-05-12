// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedProjectReducer from './selectedProjectSlice';
import selectedFeatureReducer from './selectedFeatureSlice';

const store = configureStore({
  reducer: {
    selectedProject: selectedProjectReducer,
    selectedFeature: selectedFeatureReducer,
  },
  // tu peux ajouter du middleware ou des devTools ici si besoin
});

export default store;