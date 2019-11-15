import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/index',
    name: 'home',
    component: () => import('@/views/index.vue'),

  },
  {
    path: '/coach',
    name: 'coach',
    component: () => import('@/views/coach.vue'),

  },
  {
    path: '/practicecar',
    name: 'practicecar',
    component: () => import('@/views/practicecar.vue'),

  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
