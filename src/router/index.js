import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IntroView,
    },
    {
      path: '/services',
      name: 'services',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServicesView.vue'),
    },

    {
      path: '/enter-your-details',
      name: 'enter-your-details',
      component: () => import('../views/EnterDetailsView.vue'),
    },

    {
      path: '/your-estimate',
      name: 'your-estimate',
      component: () => import('../views/EstimateDisplayView.vue'),
    },
  ],
})

export default router
