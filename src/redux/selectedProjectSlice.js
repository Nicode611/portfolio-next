import { createSlice } from '@reduxjs/toolkit';

// Slice for storing the selected project
const selectedProjectSlice = createSlice({
  name: 'selectedProject',
  initialState: {
    id: 2,
    title: "PlantCare",
    catchline: "Application Next.JS pour gerer l'état de ses plantes",
    description: "Ce projet à été réalisé dans le but de perfectionner ma maitrise de Next.js. Grâce à ce projet j'ai pu explorer plus en détail les fonctionalités de Next.JS : API route, CSR / SSR, ... J'ai également eu l'occasion d'utiliser le systeme authentification OAuth grace à Auth.JS et son systeme de providers. Ainsi qu'une API REST intégrée à l'app utilisant la puissance de l'ORM Prisma.",
    image: [
        {name: "image1", src: "/images/projets/plantcare/plantcare.png"},
        {name: "image2", src: "/images/gar.webp"},
        {name: "image2", src: "/images/gar.webp"},
    ],
    highlightFeatures: [
        {title: "Highlight Feature 1",
      description: "Description of Highlight Feature 1"},
        {title: "Highlight Feature 2",
      description: "Description of Highlight Feature 2"},
    ],
    technos: [
      { name: "Next.JS", icon: "/images/logos/next.svg" },
      { name: "Auth.JS", icon: "/images/logos/next.svg" },
      { name: "Prisma", icon: "/images/logos/prisma.svg" },
      { name: "Tailwind", icon: "/images/logos/tailwind.svg" },
      { name: "ShadCN", icon: "/images/logos/shadcn.svg" },
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
