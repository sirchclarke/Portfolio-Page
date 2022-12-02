import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/HomePage'
import Projects from './pages/ProjectsPage'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/Projects', component: Projects, name: 'Projects' }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
