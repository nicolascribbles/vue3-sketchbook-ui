import { createRoute } from '@kitbag/router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'

export const routes = [
  createRoute({ name: 'home', path: '/', component: HomePage }),
  createRoute({ name: 'path', path: '/about', component: AboutPage }),
]