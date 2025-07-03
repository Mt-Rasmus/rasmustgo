import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import VideoEntry from '../components/VideoEntry.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work',
      component: HomeView,
    },
    {
      path: '/reel',
      name: 'reel',
      component: AboutView,
    },
    {
      path: '/:id',
      component: VideoEntry,
    },
    {
      path: '/info',
      name: 'info',
      component: AboutView,
    },
  ],
})

export default router
