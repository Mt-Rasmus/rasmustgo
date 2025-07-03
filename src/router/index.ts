import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import VideoEntry from '../components/VideoEntry.vue'
import ReelPage from '../components/ReelPage.vue'

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
      component: ReelPage,
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
