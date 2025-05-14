import { createSlice } from '@reduxjs/toolkit';
import projectsListFr from '../infos/projectsListFr';
import projectsListEn from '../infos/projectsListEn';
import { setLanguage } from './selectedLanguageSlice';

// Slice for storing the selected project
const selectedProjectSlice = createSlice({
  name: 'selectedProject',
  // on récupère par défaut le projet avec id=2 depuis la liste FR
  initialState: projectsListFr.find(p => p.id === 2),
  reducers: {
    setSelectedProject: (state, action) => action.payload,
    clearSelectedProject: () => ({
      title: '',
      catchline: '',
      description: '',
      highlightFeatures: [],
      technos: [],
      images: [],
      link: '',
    }),
  },
  extraReducers: builder => {
    // lorsque la langue change, on recherche et remplace le projet sélectionné par celui de la nouvelle langue
    builder.addCase(setLanguage, (state, action) => {
      const lang = action.payload;
      const id = state.id;
      const list = lang === 'fr' ? projectsListFr : projectsListEn;
      const counterpart = list.find(p => p.id === id);
      return counterpart || state;
    });
  }
});

export const { setSelectedProject, clearSelectedProject } = selectedProjectSlice.actions;
const selectedProjectReducer = selectedProjectSlice.reducer;
export default selectedProjectReducer;
