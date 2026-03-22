import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' // Импортируем инструменты роутера
import App from './App.vue'

// Импорт стилей
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/style.css'

// Импорт твоих страниц (Views)
import Home from './views/Home.vue'
import Catalog from './views/Catalog.vue'
import FAQ from './views/FAQ.vue'
import Contacts from './views/Contacts.vue'

// Настройка маршрутов
const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/faq', component: FAQ },
  { path: '/contacts', component: Contacts }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router) // Подключаем роутер к приложению
app.mount('#app')