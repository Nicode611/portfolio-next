import { createSlice } from '@reduxjs/toolkit';

// Slice for storing the selected project
const selectedProjectSlice = createSlice({
  name: 'selectedProject',
  initialState: {
    id: 4,
    title: "Projets wordpress",
    catchline: "Divers sites web crées via Wordpress a l'intention de professionels.",
    description: "J'ai eu l'occasion de travailler en tant que freelance et d'avoir certains clients dont Minute Beauté et EM Sellerie. Bien que la création de site Wordpress via Elementor ne requiert pas d'incroyables compétences, le fait de travailler de manière professionnelle m'a permis de m'améliorer sur l'aspect conception et gestion d'un projet. ",
    image: [
        {name: "mb2", src: "/images/projets/wordpress/mb2.png"},
        {name: "sellerie2", src: "/images/projets/wordpress/sellerie2.png"},
        {name: "sellerie1", src: "/images/projets/wordpress/sellerie1.png"},
    ],
    highlightFeatures: [
      {title: "Mise en cache",
        catchLine: "Description of Highlight Feature 1",
        description: "Description of Highlight Feature 1"},
      {title: "Extensions",
        catchLine: "Description of Highlight Feature 1",
        description: "Description of Highlight Feature 2"},
      {title: "Adapter un projet",
        catchLine: "Description of Highlight Feature 1",
        description: "Description of Highlight Feature 1"},
      {title: "Responsive",
        catchLine: "Description of Highlight Feature 1",
        description: "Description of Highlight Feature 2"},
      {title: "Sécurité",
        catchLine: "Description of Highlight Feature 1",
        description: "Description of Highlight Feature 1"},
    ],
    technos: [
      { name: "Wordpress", icon: "/images/logos/wordpress.svg" },
      { name: "Trello", icon: "/images/logos/trello.svg" },
      { name: "Figma", icon: "/images/logos/figma.svg" },
      
    ],
    link: "https://example.com/project1",
  },
  reducers: {
    setSelectedProject: (state, action) => {
      return action.payload;
    },
    clearSelectedProject: () => ({
      title: '',
      catchline: '',
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
