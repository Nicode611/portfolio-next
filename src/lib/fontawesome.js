// lib/fontawesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false  // on prévoit manuellement le CSS

// Ajoute ici toutes les icônes que tu utilises
library.add(faCoffee, faHome, fab, faGithub)