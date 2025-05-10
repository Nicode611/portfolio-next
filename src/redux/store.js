// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedProjectReducer from './selectedProjectSlice';

const store = configureStore({
  reducer: {
    selectedProject: selectedProjectReducer,
  },
  // tu peux ajouter du middleware ou des devTools ici si besoin
});

export default store;