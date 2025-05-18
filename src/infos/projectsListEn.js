const projectsListEn = [
  {
    id: 1,
    title: "Hello Voisins",
    catchline: "Social network application that facilitates communication between neighbors",
    description: "Hello Voisins was developed as my final year project. It’s a data management application designed to facilitate connections between neighbors through geolocation. While the project was completed in a basic yet functional version, it allowed me to explore various technologies and strengthen my skills in both application development and project management.",
    image: [
        {name: "mb2", src: "/images/projets/hello-voisins/hello.png"},
        {name: "sellerie2", src: "/images/projets/wordpress/sellerie2.png"},
        {name: "sellerie1", src: "/images/projets/wordpress/sellerie1.png"},
    ],
    highlightFeatures: [
      {title: "Communication through geolocation",
        catchLine: "Using Google Maps API",
        description: "This feature allows users to easily locate and contact nearby neighbors through an interactive map integrated via Google Maps API. With their consent, I simply needed to retrieve each user's position to calculate their distance using the Haversine formula."},
      {title: "Websocket server",
        catchLine: "Using Ratchet",
        description: "By integrating Ratchet, a PHP websocket server, I was able to implement real-time communication between users. This technology allows sending and receiving messages instantly without reloading the page."
      },
      {title: "Group creation",
        catchLine: "Database management",
        description: "Users can create and join discussion groups. This involves dynamic data management on the database side (creation, joining, deletion), with personalized content display based on membership to one or more groups."
      },
    ],
    technos: [
      { name: "HTML / CSS", icon: "/images/logos/html.svg" },
      { name: "JS", icon: "/images/logos/js.svg" },
      { name: "PHP", icon: "/images/logos/php.svg" },
      { name: "SQL", icon: "/images/logos/sql.svg" },
    ],
    link: "https://github.com/Nicode611/Hello-voisins-WebApp",
    
  },
  {
    id: 2,
    title: "PlantCare",
    catchline: "Next.JS application to manage the health of your plants",
    description: "This project was created to deepen my knowledge of Next.js. It gave me the opportunity to explore several core features such as API routes, client-side and server-side rendering (CSR/SSR). I also integrated OAuth authentication using Auth.js and its provider system, along with a REST API connected to a database through the Prisma ORM.",
    image: [
        {name: "image1", src: "/images/projets/plantcare/plantcare.png"},
        {name: "image2", src: "/images/gar.webp"},
        {name: "image2", src: "/images/gar.webp"},
    ],
    highlightFeatures: [
      {
        title: "OAuth",
        catchLine: "Using Auth.JS",
        description: "Advanced integration of Auth.js to secure access to the application through connections with Google or GitHub. This OAuth authentication system ensures centralized, reliable, and secure session management, while significantly simplifying the login experience for users."
      },
      {
        title: "CRON jobs",
        catchLine: "Using CRON Jobs",
        description: "Implementation of automated tasks through CRON jobs to manage recurring actions such as regular updates of plants' water levels or automatic generation of watering reminders. This automation allows for intelligent and autonomous monitoring of plant status without manual intervention."
      },
      {
        title: "REST API",
        catchLine: "Express API",
        description: "Development of a structured REST API with Express.js to organize server-side business logic. I then used Next.js API Routes to allow smooth interaction between the front-end and the API, particularly for managing users, plants, and diseases, covering all CRUD operations."
      },
      {
        title: "SSR / CSR",
        catchLine: "Performance optimization",
        description: "Combined use of Server Side Rendering (SSR) and Client Side Rendering (CSR) with Next.js to optimize loading times and provide an optimal user experience depending on the context. For example, critical pages benefit from immediate server-side loading, while dynamic interactions are handled client-side for greater responsiveness."
      },
      {
        title: "State Management",
        catchLine: "State management via Redux",
        description: "Centralization and structuring of the application's global state via Redux, allowing efficient data synchronization between different components (plants, tasks, connected user, etc.). This approach optimizes performance by limiting redundant calls and ensures consistency of displayed information."
      },
      {
        title: "Prisma ORM",
        catchLine: "Prisma schemas",
        description: "Using Prisma as an ORM to design a clear, typed, and scalable relational database. I defined complex schemas allowing easy linking between users, plants, and diseases, while taking advantage of TypeScript's auto-completion and static checks for greater reliability."
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
  {
    id: 3,
    title: "TO DO list",
    catchline: "Small project creating a to-do list.",
    description: "This project allowed me to practice building applications using create-react-app. I also implemented global state management with Redux, which helped me strengthen my understanding of the library.",
    image: [
        {name: "image1", src: "/images/projets/to-do-list/todo.png"},
        {name: "image2", src: "/images/mb.webp"},
        {name: "image2", src: "/images/mb.webp"},
    ],
    highlightFeatures: [
      {title: "State Management",
        catchLine: "State management via Redux",
        description: "Thanks to Redux, I centralized the global state of the application to allow smooth and organized management of different tasks across each list. This facilitates modification, addition, or deletion while ensuring user interface consistency."
      },
      {title: "Persistent State",
        catchLine: "Persistent state",
        description: "I integrated Redux Persist to maintain the application state between sessions. This means tasks remain visible even after a reload or browser closure, improving user experience and the reliability of the tool for daily use."
      },
    ],
    technos: [
      { name: "React", icon: "/images/logos/react.svg" },
      { name: "HTML / CSS", icon: "/images/logos/html.svg" },
      { name: "Redux", icon: "/images/logos/redux.svg" },
      
    ],
    link: "https://github.com/Nicode611/to-do-list-react",
  },
  {
    id: 4,
    title: "WordPress Projects",
    catchline: "Various websites created via WordPress for professionals.",
    description: "As a freelance developer, I worked with several clients, including Minute Beauté and EM Sellerie. While building websites with WordPress and Elementor doesn’t require advanced technical skills, the experience helped me improve key aspects such as design, client communication, and project management in a professional context.",
    image: [
        {name: "mb2", src: "/images/projets/wordpress/mb.png"},
        {name: "sellerie2", src: "/images/projets/wordpress/sellerie2.png"},
        {name: "sellerie1", src: "/images/projets/wordpress/sellerie1.png"},
    ],
    highlightFeatures: [
      {
        title: "Caching",
        catchLine: "Performance optimization",
        description: "To improve the overall performance of sites, I set up adapted caching systems. This significantly reduced loading times, optimized user experience, and relieved the servers."
      },
      {
        title: "Extensions",
        catchLine: "Choosing different extensions",
        description: "I selected, installed, and configured specific extensions for each project's needs: enhanced security, contact forms, design optimization, or automatic backups. This approach allowed me to customize each site without unnecessarily weighing down the interface."
      },
      {
        title: "Adapting a project",
        catchLine: "Adapting to client's choices",
        description: "I worked closely with clients to adapt the design, content, and functionality of each site to their activity. This involves active listening, proposing suitable solutions, and in-depth customization using Elementor and other tools."
      },
      {
        title: "Responsive",
        catchLine: "Adapting to different screen sizes",
        description: "Thanks to Elementor, I ensured each site was perfectly responsive, with consistent rendering on mobile, tablet, and computer. This allows for optimal navigation, regardless of the device used by visitors."
      },
      {
        title: "Security",
        catchLine: "Implemented defenses",
        description: "Securing a WordPress site is essential. Having already experienced mass attacks, I had to implement plugins like WordFence, activate two-factor authentication, and apply best practices (regular updates, limiting login attempts, etc.)."
      },
      {
        title: "SEO",
        catchLine: "Search engine optimization",
        description: "I optimized the natural referencing of sites by configuring extensions like Yoast SEO, properly structuring tags, titles, keywords, and generating sitemaps. These actions improved their visibility on Google."
      },
    ],
    technos: [
      { name: "Wordpress", icon: "/images/logos/wordpress.svg" },
      { name: "Trello", icon: "/images/logos/trello.svg" },
      { name: "Figma", icon: "/images/logos/figma.svg" },
      
    ],
    link: [
      {name: "Minute Beauté", src: "https://minutebeaute.fr/"},
      {name: "EM Sellerie", src: "https://em-sellerie.fr"},
    ]
  },
  {
    id: 5,
    title: "Various Projects",
    catchline: "Various projects, API, React Native, Shopify, ongoing projects.",
        description: "I’ve had the opportunity to work on a variety of projects, ranging from React Native app development to Shopify integrations. I’ve also contributed to open source projects on GitHub, which allowed me to explore different aspects of web and mobile development while strengthening my technical skills and my ability to adapt to various work environments.",
    image: [
        {name: "Various", src: "/images/projets/divers/divers.png"},
        {name: "sellerie2", src: "/images/projets/wordpress/sellerie2.png"},
        {name: "sellerie1", src: "/images/projets/wordpress/sellerie1.png"},
    ],
    highlightFeatures: [
      {title: "Project Management",
        catchLine: "Organization",
        description: "I learned to plan and structure my projects using tools like Trello or Notion. From defining needs to tracking progress, I've developed a rigorous working method that allows me to better organize my ideas and deliver more structured work."
      },
      {title: "Prototyping",
        catchLine: "From wireframing to mockup",
        description: "From initial wireframing (paper or Figma) to creating functional mockups, I can transform an idea into a clear visual interface. This step allows me to quickly align client vision with the final design."
      },
      {title: "Diagrams",
        catchLine: "Different diagrams",
        description: "Creation of different types of diagrams (use cases, class diagrams, sequence, etc.) to better understand, represent, and communicate the logic of a project or application."
      },
      {title: "API Usage",
        catchLine: "Google, TikTok, Instagram...",
        description: "Integration of various APIs (Google Maps, TikTok, Instagram, etc.) to enrich application functionalities. This involves managing API keys, secure calls, data parsing, and documentation."
      },
      {title: "Library Usage",
        catchLine: "npm, composer libraries",
        description: "Use and integration of numerous libraries from npm or Composer to save time on specific functionalities (animations, form management, security, etc.). This allowed me to better understand their operation and adapt their use to the specific needs of each project."
      },
    ],
    technos: [
      { name: "SQL", icon: "/images/logos/sql.svg" },
      { name: "Node.JS", icon: "/images/logos/node.svg" },
      { name: "React Native", icon: "/images/logos/react.svg" },
      { name: "Shopify", icon: "/images/logos/shopify.svg" },
      
    ],
    link: "",
  }
  
]

export default projectsListEn;
