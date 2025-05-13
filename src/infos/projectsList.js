const projectsList = [
  {
    id: 1,
    title: "Hello Voisins",
    catchline: "Application de type reseaux sociaux, facilitant la communication entre voisins",
    description: "Le projet Hello Voisins etait mon projet de fin d'etudes. Le but : créer une application de gestion de données. Ce projet bien que non abouti m'a permis de découvrir différentes technologie et m'a apporté une nouvelle facon de travailler, notamment sur la gestion de projet.",
    image: [
        {name: "mb2", src: "/images/projets/hello-voisins/hellovoisins.png"},
        {name: "sellerie2", src: "/images/projets/wordpress/sellerie2.png"},
        {name: "sellerie1", src: "/images/projets/wordpress/sellerie1.png"},
    ],
    highlightFeatures: [
        {title: "Communication grâce a la géolocalisation",
      description: "Description of Highlight Feature 1"},
        {title: "Serveur websocket",
      description: "Description of Highlight Feature 2"},
      {title: "Création de groupes",
      description: "Description of Highlight Feature 2"},
    ],
    technos: [
      { name: "HTML / CSS", icon: "/images/logos/html.svg" },
      { name: "JS", icon: "/images/logos/js.svg" },
      { name: "PHP", icon: "/images/logos/php.svg" },
      { name: "SQL", icon: "/images/logos/sql.svg" },
    ],
    link: "https://example.com/project1",
  },
  {
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
        {title: "Oauth",
      description: "Description of Highlight Feature 1"},
        {title: "CRON jobs",
      description: "Description of Highlight Feature 2"},
      {title: "API REST",
      description: "Description of Highlight Feature 2"},
      {title: "SSR / CSR",
      description: "Description of Highlight Feature 2"},
      {title: "Gestion de l'état",
      description: "Description of Highlight Feature 2"},
      {title: "ORM Prisma",
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
  {
    id: 3,
    title: "TO DO list",
    catchline: "Petit projet de création d'une to do list.",
    description: "Ce petit projet m'as permis de m'entrainer à la création d'app sous react-create-app. J'ai également pu utiliser l'outil de gestion de state global redux.",
    image: [
        {name: "image1", src: "/images/projets/to-do-list/todo.png"},
        {name: "image2", src: "/images/mb.webp"},
        {name: "image2", src: "/images/mb.webp"},
    ],
    highlightFeatures: [
        {title: "Gestion de l'état",
      description: "Description of Highlight Feature 1"},
        {title: "Etat persistant",
      description: "Description of Highlight Feature 2"},
    ],
    technos: [
      { name: "React", icon: "/images/logos/react.svg" },
      { name: "HTML / CSS", icon: "/images/logos/html.svg" },
      { name: "Redux", icon: "/images/logos/redux.svg" },
      
    ],
    link: "https://example.com/project1",
  },
  {
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
      description: "Description of Highlight Feature 1"},
        {title: "Extensions",
      description: "Description of Highlight Feature 2"},
      {title: "Adapter un projet",
      description: "Description of Highlight Feature 1"},
        {title: "Responsive",
      description: "Description of Highlight Feature 2"},
      {title: "Sécurité",
      description: "Description of Highlight Feature 1"},
    ],
    technos: [
      { name: "Wordpress", icon: "/images/logos/wordpress.svg" },
      { name: "Trello", icon: "/images/logos/trello.svg" },
      { name: "Figma", icon: "/images/logos/figma.svg" },
      
    ],
    link: "https://example.com/project1",
  },
  {
    id: 5,
    title: "Divers projets",
    catchline: "Divers projets, API, React Native, Shopify, projets en cours, .",
    description: "J'ai eu l'occasion de travailler en tant que freelance et d'avoir certains clients dont Minute Beauté et EM Sellerie. Bien que la création de site Wordpress via Elementor ne requiert pas d'incroyables compétences, le fait de travailler de manière professionnelle m'a permis de m'améliorer sur l'aspect conception et gestion d'un projet. ",
    image: [
        {name: "Omnipost", src: "/images/projets/divers/omnipost.png"},
        {name: "sellerie2", src: "/images/projets/wordpress/sellerie2.png"},
        {name: "sellerie1", src: "/images/projets/wordpress/sellerie1.png"},
    ],
    highlightFeatures: [
        {title: "Gestion de projet",
      description: "Description of Highlight Feature 1"},
        {title: "Maquettage",
      description: "Description of Highlight Feature 2"},
      {title: "Diagrammes",
      description: "Description of Highlight Feature 1"},
        {title: "Utilisation d'APIS",
      description: "Description of Highlight Feature 2"},
      {title: "Utilisation de librairies",
      description: "Description of Highlight Feature 1"},
    ],
    technos: [
      { name: "SQL", icon: "/images/logos/sql.svg" },
      { name: "Node.JS", icon: "/images/logos/node.svg" },
      { name: "React Native", icon: "/images/logos/react.svg" },
      { name: "Shopify", icon: "/images/logos/shopify.svg" },
      
    ],
    link: "https://example.com/project1",
  }
  
]

export default projectsList;