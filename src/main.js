import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './stores/index.js'
import '@/style.css'
// import './assets/main.css'
// import './assets/css/tailwind.css'
// import './assets/css/carousel.css'

import ApiService from './services/api.services'
ApiService.init('http://127.0.0.1:8000') // Veuillez vous assurez que sur cette ligne vous récuperer bien l'adresse du service bon host bon port
createApp(App).use(store).use(router).mount('#app')
