const projectsList = [
  {
    id: 1,
    title: "Easy Apply",
    catchline: "Une application qui centralise les offres d'emploi pour postuler facilement au même endroit.",
    description: "J'ai développé cette application avec Next.js pour le front-end, connectée à un scraper Puppeteer via une API Node/Express, afin de centraliser automatiquement des offres d'emploi provenant de multiples sources et faciliter la candidature.",
    image: [
        {name: "easy-apply-find-job", src: "/images/projets/easy-apply/easy-apply-find-job.webp"},
        {name: "easy-apply-saved", src: "/images/projets/easy-apply/easy-apply-saved.webp"},
        {name: "easy-apply-landing", src: "/images/projets/easy-apply/easy-apply-landing.webp"},
    ],
    highlightFeatures: [
      {
        title: "Scraping multi-sites",
        catchLine: "HelloWork, Indeed, WTTJ...",
        description: "Développement d'un système de scraping automatisé utilisant Puppeteer et JobSpy (projet open source) pour extraire les offres d'emploi depuis plusieurs sites (HelloWork, Welcome to the Jungle, Indeed, LinkedIn ...). Gestion de la pagination, extraction des données structurées et résilience face aux changements d'interface."
      },
      {
        title: "Architecture monorepo",
        catchLine: "3 services interconnectés",
        description: "Conception d'une architecture distribuée avec trois services : frontend Next.js (port 3000), API Express avec Puppeteer (port 3001), et API Python FastAPI avec JobSpy (port 8000). Orchestration via scripts shell et Makefile pour un développement et déploiement simplifiés."
      },
      {
        title: "Gestion d'état avancée",
        catchLine: "Sauvegarde, candidature, notes",
        description: "Système complet de gestion des emplois avec états multiples (sauvegardé/postulé), dates de suivi, et notes personnalisées. Interface utilisateur intuitive pour basculer entre les états et historique complet des actions utilisateur avec Prisma ORM."
      },
      {
        title: "Authentification sécurisée",
        catchLine: "Auth.js, Google OAuth",
        description: "Implémentation d'un système d'authentification robuste avec Auth.js, support des connexions Google OAuth et credentials, middleware de protection des routes, et intégration complète avec Prisma pour la persistance des données."
      },
      {
        title: "Interface moderne",
        catchLine: "Tailwind, Redux, TypeScript",
        description: "Développement d'une interface utilisateur moderne avec Tailwind CSS, gestion d'état globale avec Redux Toolkit, composants réutilisables, animations fluides, et typage strict TypeScript. Design responsive et expérience utilisateur optimisée pour la recherche et gestion d'emplois."
      },
      /* {
        title: "Déploiement simplifié avec Docker",
        catchLine: "Gestion centralisée des services",
        description: "Mise en place de Docker Compose pour orchestrer facilement les trois services de l'application (Next.js, API Express, API Python). Cette approche permet de lancer l'ensemble de l'écosystème via une seule commande, garantissant un environnement cohérent en local comme en production."
      } */
    ],
    technos: [
      { name: "Next.JS", icon: "/images/logos/next.svg" },
      { name: "Node.JS", icon: "/images/logos/node.svg" },
      { name: "Tailwind", icon: "/images/logos/tailwind.svg" },
      { name: "Puppeteer", icon: "/images/logos/puppeteer.svg" },
      { name: "Express", icon: "/images/logos/node.svg" },
      
    ],
    link: "https://github.com/Nicode611/easy-apply-app.git",
    type: "github"
  },
  {
    id: 2,
    title: "Xpert-Immo",
    catchline: "Site web Next.js pour une société immobilière",
    description: "Dans le cadre d’un projet pour un bureau d’expert immobilier basé en Belgique, j’ai conçu et développé un site web sur mesure avec Next.js. Ce projet complet inclut un back panel dédié, offrant au client une gestion simple et efficace de son contenu.",
    image: [
        {name: "xi-landing", src: "/images/projets/xpert-immo/xi-landing.webp"},
        {name: "xi-contact", src: "/images/projets/xpert-immo/xi-contact.webp"},
        {name: "xi-presta", src: "/images/projets/xpert-immo/xi-presta.webp"},
        {name: "xi-modal", src: "/images/projets/xpert-immo/xi-modal.webp"},
        {name: "xi-downloads", src: "/images/projets/xpert-immo/xi-downloads.webp"},
        {name: "xi-back-panel", src: "/images/projets/xpert-immo/xi-back-panel.webp"},
        {name: "xi-footer", src: "/images/projets/xpert-immo/xi-footer.webp"},
    ],
    highlightFeatures: [
      {
        title: "Back panel",
        catchLine: "Gestion du contenu",
        description: "J’ai conçu un back panel qui permet de modifier le contenu des pages via du code stocké dans des fichiers JSON, importés directement dans les composants du site."
      },
      {
        title: "Système d'authentification",
        catchLine: "Authentification via token JWT",
        description: "L’accès au back panel est sécurisé par un système d’authentification basé sur des tokens JWT. Les identifiants sont définis et stockés dans les variables d’environnement, ce qui évite la gestion d’une base de données et garantit un fonctionnement simple et sécurisé."
      },
      {
        title: "Interface moderne",
        catchLine: "Respect des consignes du client",
        description: "J’ai développé une interface moderne et responsive en accord avec les consignes du client. Il m'a soumis quelques idées de design, j'ai pu m'inspirer de celles-ci pour créer une interface qui respecte les standards du design moderne."
      },
      {
        title: "Formulaire de contact",
        catchLine: "Gestion de l'envoi de mail",
        description: "J’ai développé un formulaire de contact qui permet d'envoyer un mail au client. J'ai pour cela utilisé Resend qui m'a permis grâce aux enregistrements DNS du domaine de mon client de pouvoir envoyer des mails via son adresse mail personnelle."
      },
    ],
    technos: [
      { name: "Next.JS", icon: "/images/logos/next.svg" },
      { name: "Tailwind", icon: "/images/logos/tailwind.svg" },
      { name: "Figma", icon: "/images/logos/figma.svg" },
      { name: "Resend", icon: "/images/logos/resend.svg" },
    ],
    link: "https://xpert.immo",
    type: "website"
  },
  {
    id: 3,
    title: "PlantCare",
    catchline: "Application Next.JS pour gerer l'état de ses plantes",
    description: "Ce projet a été réalisé dans le but de perfectionner ma maîtrise de Next.js. Il m'a permis d'explorer en profondeur plusieurs de ses fonctionnalités, telles que les routes API, le rendu côté client (CSR) et serveur (SSR). J'y ai également intégré un système d'authentification OAuth via Auth.js et ses providers, ainsi qu'une API REST connectée à une base de données grâce à l'ORM Prisma.",
    image: [
        {name: "landing", src: "/images/projets/plantcare/landing.webp"},
        {name: "dashboard-dark", src: "/images/projets/plantcare/dashboard-dark.webp"},
        {name: "dashboard-light", src: "/images/projets/plantcare/dashboard-light.webp"},
        {name: "my-plants-dark", src: "/images/projets/plantcare/my-plants-dark.webp"},
        {name: "my-plants-light", src: "/images/projets/plantcare/my-plants-light.webp"},
        {name: "settings-dark", src: "/images/projets/plantcare/settings-dark.webp"},
        {name: "settings-light", src: "/images/projets/plantcare/settings-light.webp"},
    ],
    highlightFeatures: [
      {
        title: "Oauth",
        catchLine: "Utilisation de Auth.JS",
        description: "Intégration avancée de Auth.js pour sécuriser l'accès à l'application à travers des connexions avec Google ou GitHub. Ce système d'authentification OAuth assure une gestion centralisée, fiable et sécurisée des sessions, tout en simplifiant considérablement l'expérience de connexion pour l'utilisateur."
      },
      {
        title: "CRON jobs",
        catchLine: "Utilisation des CRON Jobs",
        description: "Mise en place de tâches automatisées grâce à des CRON jobs pour gérer des actions récurrentes telles que la mise à jour régulière du niveau d'eau des plantes ou la génération automatique de rappels d'arrosage. Cette automatisation permet de simuler un suivi intelligent et autonome de l'état des plantes, sans intervention manuelle."
      },
      {
        title: "API REST",
        catchLine: "Express API",
        description: "Développement d'une API REST structurée avec Express.js pour organiser la logique métier côté serveur. J'ai ensuite utilisé les API Routes de Next.js pour permettre une interaction fluide entre le front-end et l'API, notamment pour la gestion des utilisateurs, des plantes et des maladies, couvrant l'ensemble des opérations CRUD."
      },
      {
        title: "SSR / CSR",
        catchLine: "Optimisation des performances",
        description: "Exploitation combinée du Server Side Rendering (SSR) et du Client Side Rendering (CSR) avec Next.js, afin d'optimiser les temps de chargement et d'offrir une expérience utilisateur optimale selon le contexte. Par exemple, les pages critiques bénéficient d'un chargement immédiat côté serveur, tandis que les interactions dynamiques sont gérées côté client pour plus de réactivité."
      },
      {
        title: "Gestion de l'état",
        catchLine: "Gestion du state via Redux",
        description: "Centralisation et structuration de l'état global de l'application via Redux, permettant une synchronisation efficace des données entre les différents composants (plantes, tâches, utilisateur connecté, etc.). Cette approche optimise les performances en limitant les appels redondants et garantit la cohérence des informations affichées."
      },
      {
        title: "ORM Prisma",
        catchLine: "Les schémas prisma",
        description: "Utilisation de Prisma comme ORM pour concevoir une base de données relationnelle claire, typée et évolutive. J'ai défini des schémas complexes permettant de lier facilement utilisateurs, plantes et maladies, tout en profitant de l'autocomplétion et des vérifications statiques de TypeScript pour une plus grande fiabilité."
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
    type: "github"
  },
  {
    id: 4,
    title: "Minute Beauté",
    catchline: "Site web WordPress pour une coiffeuse a domicile",
    description: "J'ai conçu et développé un site web pour Wendy, une coiffeuse a domicile dans le pays basque, dans le cadre de mon activitée freelance. Il s'agit d'un site web sur mesure crée avec WordPress, permettant à la coiffeuse de présenter ses services.",
    image: [
        {name: "mb-landing", src: "/images/projets/minute-beaute/mb-landing.webp"},
        {name: "mb-contact", src: "/images/projets/minute-beaute/mb-contact.webp"},
        {name: "mb-tarifs", src: "/images/projets/minute-beaute/mb-tarifs.webp"},
    ],
    highlightFeatures: [
      {
        title: "Mise en cache",
        catchLine: "Optimisation des performances",
        description: "Pour améliorer les performances globales du sites, j’ai mis en place un systèmes de cache adapté. Cela a permis de réduire significativement les temps de chargement, d’optimiser l’expérience utilisateur et de soulager les serveurs."
      },
      {
        title: "Extensions",
        catchLine: "Choix des différentes extensions",
        description: "J’ai sélectionné, installé et configuré des extensions spécifiques aux besoins du projet : sécurité renforcée, formulaires de contact, optimisation du design ou encore sauvegardes automatiques. Cette approche m’a permis de personnaliser le site sans alourdir inutilement l’interface."
      },
      {
        title: "SEO",
        catchLine: "Optimisation pour les moteurs de recherche",
        description: "J’ai optimisé le référencement naturel du site en configurant des extensions comme Yoast SEO, en structurant correctement les balises, titres, mots-clés et en générant des sitemaps. Ces actions ont permis d’améliorer sa visibilité sur Google."
      },
    ],
    technos: [
      { name: "Wordpress", icon: "/images/logos/wordpress.svg" },
      { name: "Trello", icon: "/images/logos/trello.svg" },
      { name: "Figma", icon: "/images/logos/figma.svg" },
    ],
    link: "https://minutebeaute.fr/",
    type: "website"
  },
  {
    id: 5,
    title: "Hello Voisins",
    catchline: "Application de type reseaux sociaux, facilitant la communication entre voisins",
    description: "Le projet Hello Voisins a été réalisé dans le cadre de mon projet de fin d'études. Il s'agit d'une application de gestion de données visant à faciliter les échanges entre voisins grâce à la géolocalisation. Le projet a été mené à terme dans une version fonctionnelle mais encore sommaire. Il m'a permis d'explorer différentes technologies et de renforcer mes compétences en gestion de projet et en développement d'application.",
    image: [
        {name: "landing", src: "/images/projets/hello-voisins/hello.png"},
        {name: "proximity-chat-desktop", src: "/images/projets/hello-voisins/proximity-chat-desktop.webp"},
        {name: "notifs-mobile", src: "/images/projets/hello-voisins/notifs-mobile.webp"},
        {name: "map-mobile", src: "/images/projets/hello-voisins/map-mobile.webp"},
        {name: "groups-mobile", src: "/images/projets/hello-voisins/groups-mobile.webp"},
    ],
    highlightFeatures: [
      {title: "Communication grâce a la géolocalisation",
        catchLine: "Utilisation de Google Maps API",
        description: "Cette fonctionnalité permet aux utilisateurs de localiser et contacter facilement les voisins proches grâce à une carte interactive intégrée via Google Maps API. Il m'a suffit, avec leur consentement, de récupérer la position de chaque utilisateur afin de calculer leur distance via la formule de Haversine."},
      {title: "Serveur websocket",
        catchLine: "Utilisation de Ratchet",
        description: "Grâce à l'intégration de Ratchet, un serveur websocket en PHP, j'ai pu mettre en place une communication en temps réel entre les utilisateurs. Cette technologie permet d'envoyer et recevoir des messages instantanément sans recharger la page."
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
    link: "https://github.com/Nicode611/Hello-voisins-WebApp",
    file: "/dossier-projet-hello-voisins.pdf",
    type: "github"
  },
  {
    id: 6,
    title: "EM Sellerie",
    catchline: "Site web WordPress pour une entreprise de sellerie",
    description: "Dans le cadre de mon activitée freelance, j'ai eu l'occasion de concevoir un petit site web vitrine afin d'exposer le travail de l'entreprise.",
    image: [
        {name: "em-real", src: "/images/projets/em-sellerie/em-real.webp"},
        {name: "em-renov", src: "/images/projets/em-sellerie/em-renov.webp"},
    ],
    highlightFeatures: [
      {
        title: "Adapter le projet",
        catchLine: "Adapter le choix du client",
        description: "J’ai travaillé en étroite collaboration avec les clients pour adapter le design, le contenu et les fonctionnalités du site à leur activité. Cela passe par l’écoute active, la proposition de solutions adaptées et une personnalisation poussée à l’aide d’Elementor et autres outils."
      },
      {
        title: "Responsive",
        catchLine: "Adapter aux différentes tailles d'écran",
        description: "Grâce à Elementor, j’ai veillé à ce que le site soit parfaitement responsive, avec un rendu cohérent sur mobile, tablette et ordinateur. Cela permet une navigation optimale, quel que soit le support utilisé par les visiteurs."
      },
      {
        title: "Sécurité",
        catchLine: "Sécurité mise en place",
        description: "Sécuriser un site WordPress est essentiel. Ayant déja subit des attaques de masses j’ai du mettre en place des plugins comme WordFence, activer la double authentification et appliquer des bonnes pratiques (mises à jour régulières, limitation des tentatives de connexion, etc.)."
      },
    ],
    technos: [
      { name: "Wordpress", icon: "/images/logos/wordpress.svg" },
      { name: "Trello", icon: "/images/logos/trello.svg" },
      { name: "Figma", icon: "/images/logos/figma.svg" },
    ],
    link: "https://em-sellerie.fr",
    type: "website"
  },
  {
    id: 7,
    title: "Meilleure Agence",
    catchline: "Site web de comparatif d'agences immobilières en Belgique",
    description: "Dans le cadre de mon activitée freelance, j'ai concu ce site web qui permet aux utilisateurs de comparer les agences immobilières pour leurs projets immobiliers.",
    image: [
        {name: "ma-landing", src: "/images/projets/meilleure-agence/ma-landing.webp"},
    ],
    highlightFeatures: [
      {
        title: "Template de mails",
        catchLine: "Design des mails",
        description: "J'ai conçu un template de mail qui permet de recevoir de facon stylisé les demandes de contact des utilisateurs."
      },
      {
        title: "Formulaire de contact avancé",
        catchLine: "La modularité",
        description: "Afin de rendre le formulaire de contact plus flexible, j'ai utilisé la modularité qu'apporte un fichier JSON pour stocker le contenu du formulaire."
      },
      {
        title: "SEO",
        catchLine: "Optimisation pour les moteurs de recherche",
        description: "J'ai optimisé le référencement naturel du site en configurant des meta tags, des titres, des descriptions et des mots-clés. J'ai également utilisé google analytics pour suivre les performances du site."
      },
    ],
    technos: [
      { name: "Next.js", icon: "/images/logos/wordpress.svg" },
      { name: "Trello", icon: "/images/logos/trello.svg" },
      { name: "Figma", icon: "/images/logos/figma.svg" },
      { name: "Resend", icon: "/images/logos/resend.svg" },
    ],
    link: "https://www.meilleure-agence.be/",
    type: "website"
  },
  {
    id: 8,
    title: "TO DO list",
    catchline: "Petit projet de création d'une to do list.",
    description: "Ce projet m'a permis de m'exercer à la création d'applications avec create-react-app. J'en ai profité pour mettre en place une gestion d'état globale à l'aide de Redux, consolidant ainsi mes bases sur cette bibliothèque.",
    image: [
        {name: "image1", src: "/images/projets/to-do-list/todo.png"},
    ],
    highlightFeatures: [
      {title: "Gestion de l'état",
        catchLine: "Gestion du state via Redux",
        description: "Grâce à Redux, j'ai centralisé l'état global de l'application pour permettre une gestion fluide et organisée des différentes tâches réparties dans chaque liste. Cela facilite la modification, l'ajout ou la suppression tout en assurant la cohérence de l'interface utilisateur."
      },
      {title: "Etat persistant",
        catchLine: "Persistant state",
        description: "J'ai intégré Redux Persist afin de conserver l'état de l'application entre les sessions. Cela signifie que les tâches restent visibles même après un rechargement ou une fermeture du navigateur, améliorant ainsi l'expérience utilisateur et la fiabilité de l'outil au quotidien."
      },
    ],
    technos: [
      { name: "React", icon: "/images/logos/react.svg" },
      { name: "HTML / CSS", icon: "/images/logos/html.svg" },
      { name: "Redux", icon: "/images/logos/redux.svg" },
      
    ],
    link: "https://github.com/Nicode611/to-do-list-react",
    type: "github"
  },
  {
    id: 9,
    title: "Divers projets",
    catchline: "Divers projets, API, React Native, Shopify, projets en cours, .",
    description: "J'ai eu l'occasion de travailler sur plusieurs projets variés, allant de la création d'applications React Native à l'intégration de Shopify. J'ai également collaboré sur des projets open source sur GitHub, ce qui m'a permis d'explorer différentes facettes du développement web et mobile, tout en renforçant mes compétences techniques et ma capacité à m'adapter à divers environnements de travail.",
    image: [
        {name: "Divers", src: "/images/projets/divers/divers.png"},
    ],
    highlightFeatures: [
      {title: "Gestion de projet",
        catchLine: "L'organisation",
        description: "J'ai appris à planifier et structurer mes projets en utilisant des outils comme Trello ou Notion. De la définition des besoins au suivi de l'avancement, j'ai développé une méthode de travail rigoureuse qui me permet de mieux organiser mes idées et de livrer un travail plus cadré."
      },
      {title: "Maquettage",
        catchLine: "Du wireframing à la maquette",
        description: "Du wireframing initial (papier ou Figma) jusqu'à la réalisation de maquettes fonctionnelles, je suis capable de transformer une idée en interface visuelle claire. Cette étape me permet d'aligner rapidement la vision client avec le design final."
      },
      {title: "Diagrammes",
        catchLine: "Différents diagrammes",
        description: "Création de différents types de diagrammes (cas d'usage, diagrammes de classe, séquence, etc.) pour mieux comprendre, représenter et communiquer la logique d'un projet ou d'une application."
      },
      {title: "Utilisation d'API",
        catchLine: "Google, Tiktok, Instagram ...",
        description: "Intégration d'API variées (Google Maps, TikTok, Instagram, etc.) pour enrichir les fonctionnalités des applications. Cela implique la gestion des clés d'API, des appels sécurisés, du parsing de données et de la documentation."
      },
      {title: "Utilisation de librairies",
        catchLine: "Librairies npm, composer",
        description: "Utilisation et intégration de nombreuses librairies issues de npm ou Composer afin de gagner du temps sur des fonctionnalités spécifiques (animations, gestion de formulaires, sécurité, etc.). Cela m'a permis de mieux comprendre leur fonctionnement et d'adapter leur utilisation aux besoins précis de chaque projet."
      },
    ],
    technos: [
      { name: "SQL", icon: "/images/logos/sql.svg" },
      { name: "Node.JS", icon: "/images/logos/node.svg" },
      { name: "React Native", icon: "/images/logos/react.svg" },
      { name: "Shopify", icon: "/images/logos/shopify.svg" },
      
    ],
    link: "",
    type: ""
  },
]

export default projectsList;
