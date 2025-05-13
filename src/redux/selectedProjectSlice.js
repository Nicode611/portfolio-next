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
      {
        title: "Oauth",
        catchLine: "Utilisation de Auth.JS",
        description: "Intégration avancée de Auth.js pour sécuriser l’accès à l’application à travers des connexions avec Google ou GitHub. Ce système d’authentification OAuth assure une gestion centralisée, fiable et sécurisée des sessions, tout en simplifiant considérablement l’expérience de connexion pour l’utilisateur."
      },
      {
        title: "CRON jobs",
        catchLine: "Utilisation des CRON Jobs",
        description: "Mise en place de tâches automatisées grâce à des CRON jobs pour gérer des actions récurrentes telles que la mise à jour régulière du niveau d’eau des plantes ou la génération automatique de rappels d’arrosage. Cette automatisation permet de simuler un suivi intelligent et autonome de l’état des plantes, sans intervention manuelle."
      },
      {
        title: "API REST",
        catchLine: "Express API",
        description: "Développement d’une API REST structurée avec Express.js pour organiser la logique métier côté serveur. J’ai ensuite utilisé les API Routes de Next.js pour permettre une interaction fluide entre le front-end et l’API, notamment pour la gestion des utilisateurs, des plantes et des maladies, couvrant l’ensemble des opérations CRUD."
      },
      {
        title: "SSR / CSR",
        catchLine: "Optimisation des performances",
        description: "Exploitation combinée du Server Side Rendering (SSR) et du Client Side Rendering (CSR) avec Next.js, afin d’optimiser les temps de chargement et d’offrir une expérience utilisateur optimale selon le contexte. Par exemple, les pages critiques bénéficient d’un chargement immédiat côté serveur, tandis que les interactions dynamiques sont gérées côté client pour plus de réactivité."
      },
      {
        title: "Gestion de l'état",
        catchLine: "Gestion du state via Redux",
        description: "Centralisation et structuration de l’état global de l’application via Redux, permettant une synchronisation efficace des données entre les différents composants (plantes, tâches, utilisateur connecté, etc.). Cette approche optimise les performances en limitant les appels redondants et garantit la cohérence des informations affichées."
      },
      {
        title: "ORM Prisma",
        catchLine: "Les schémas prisma",
        description: "Utilisation de Prisma comme ORM pour concevoir une base de données relationnelle claire, typée et évolutive. J’ai défini des schémas complexes permettant de lier facilement utilisateurs, plantes et maladies, tout en profitant de l’autocomplétion et des vérifications statiques de TypeScript pour une plus grande fiabilité."
      },
    ],
    technos: [
      { name: "Next.JS", icon: "/images/logos/next.svg" },
      { name: "Auth.JS", icon: "/images/logos/next.svg" },
      { name: "Prisma", icon: "/images/logos/prisma.svg" },
      { name: "Tailwind", icon: "/images/logos/tailwind.svg" },
      { name: "ShadCN", icon: "/images/logos/shadcn.svg" },
    ],
    link: "https://github.com/Nicode611/PlantCare-WebApp",
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
