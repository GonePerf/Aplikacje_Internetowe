import { createRouter, createWebHistory } from 'vue-router'
import WorkersList from '../views/WorkersList.vue'

const routes = [
  {
    path: '/',
    name: 'WorkersList',
    component: WorkersList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
