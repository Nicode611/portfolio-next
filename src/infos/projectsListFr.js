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
        catchLine: "Utilisation de Google Maps API",
        description: "Cette fonctionnalité permet aux utilisateurs de localiser et contacter facilement les voisins proches grâce à une carte interactive intégrée via Google Maps API. Il m'a suffit, avec leur consentement, de récupérer la position de chaque utilisateur afin de calculer leur distance via la formule de Haversine."},
      {title: "Serveur websocket",
        catchLine: "Utilisation de Ratchet",
        description: "Grâce à l’intégration de Ratchet, un serveur websocket en PHP, j’ai pu mettre en place une communication en temps réel entre les utilisateurs. Cette technologie permet d'envoyer et recevoir des messages instantanément sans recharger la page."
      },
      {title: "Création de groupes",
        catchLine: "Gestion de la base de donnée",
        description: "Les utilisateurs peuvent créer et rejoindre des groupes de discussion. Cela implique une gestion dynamique des données côté base de données (création, jointure, suppression), avec un affichage personnalisé des contenus selon l'appartenance à un ou plusieurs groupes."
      },
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
        catchLine: "Gestion du state via Redux",
        description: "Grâce à Redux, j’ai centralisé l’état global de l’application pour permettre une gestion fluide et organisée des différentes tâches réparties dans chaque liste. Cela facilite la modification, l’ajout ou la suppression tout en assurant la cohérence de l’interface utilisateur."
      },
      {title: "Etat persistant",
        catchLine: "Persistant state",
        description: "J’ai intégré Redux Persist afin de conserver l’état de l’application entre les sessions. Cela signifie que les tâches restent visibles même après un rechargement ou une fermeture du navigateur, améliorant ainsi l’expérience utilisateur et la fiabilité de l’outil au quotidien."
      },
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
      {
        title: "Mise en cache",
        catchLine: "Optimisation des performances",
        description: "Pour améliorer les performances globales des sites, j’ai mis en place des systèmes de cache adaptés. Cela a permis de réduire significativement les temps de chargement, d’optimiser l’expérience utilisateur et de soulager les serveurs."
      },
      {
        title: "Extensions",
        catchLine: "Choix des diffférentes extensions",
        description: "J’ai sélectionné, installé et configuré des extensions spécifiques aux besoins de chaque projet : sécurité renforcée, formulaires de contact, optimisation du design ou encore sauvegardes automatiques. Cette approche m’a permis de personnaliser chaque site sans alourdir inutilement l’interface."
      },
      {
        title: "Adapter un projet",
        catchLine: "Adapter le choix du client",
        description: "J’ai travaillé en étroite collaboration avec les clients pour adapter le design, le contenu et les fonctionnalités de chaque site à leur activité. Cela passe par l’écoute active, la proposition de solutions adaptées et une personnalisation poussée à l’aide d’Elementor et autres outils."
      },
      {
        title: "Responsive",
        catchLine: "S'adapter aux différentes taille d'écrans",
        description: "Grâce à Elementor, j’ai veillé à ce que chaque site soit parfaitement responsive, avec un rendu cohérent sur mobile, tablette et ordinateur. Cela permet une navigation optimale, quel que soit le support utilisé par les visiteurs."
      },
      {
        title: "Sécurité",
        catchLine: "Défenses mise en place",
        description: "Sécuriser un site WordPress est essentiel. Ayant déja subit des attaques de masses j’ai du mettre en place des plugins comme WordFence, activer la double authentification et appliquer des bonnes pratiques (mises à jour régulières, limitation des tentatives de connexion, etc.)."
      },
      {
        title: "SEO",
        catchLine: "Optimisation du référencement",
        description: "J’ai optimisé le référencement naturel des sites en configurant des extensions comme Yoast SEO, en structurant correctement les balises, titres, mots-clés et en générant des sitemaps. Ces actions ont permis d’améliorer leur visibilité sur Google."
      },
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
        catchLine: "L'organisation",
        description: "J’ai appris à planifier et structurer mes projets en utilisant des outils comme Trello ou Notion. De la définition des besoins au suivi de l’avancement, j’ai développé une méthode de travail rigoureuse qui me permet de mieux organiser mes idées et de livrer un travail plus cadré."
      },
      {title: "Maquettage",
        catchLine: "Du wireframing à la maquette",
        description: "Du wireframing initial (papier ou Figma) jusqu’à la réalisation de maquettes fonctionnelles, je suis capable de transformer une idée en interface visuelle claire. Cette étape me permet d’aligner rapidement la vision client avec le design final."
      },
      {title: "Diagrammes",
        catchLine: "Différents diagrammes",
        description: "Création de différents types de diagrammes (cas d’usage, diagrammes de classe, séquence, etc.) pour mieux comprendre, représenter et communiquer la logique d’un projet ou d’une application."
      },
      {title: "Utilisation d'API",
        catchLine: "Google, Tiktok, Instagram ...",
        description: "Intégration d’API variées (Google Maps, TikTok, Instagram, etc.) pour enrichir les fonctionnalités des applications. Cela implique la gestion des clés d’API, des appels sécurisés, du parsing de données et de la documentation."
      },
      {title: "Utilisation de librairies",
        catchLine: "Librairies npm, composer",
        description: "Utilisation et intégration de nombreuses librairies issues de npm ou Composer afin de gagner du temps sur des fonctionnalités spécifiques (animations, gestion de formulaires, sécurité, etc.). Cela m’a permis de mieux comprendre leur fonctionnement et d’adapter leur utilisation aux besoins précis de chaque projet."
      },
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