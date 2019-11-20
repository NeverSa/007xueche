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
  {
    path: '/practicetest',//模拟考试
    name: 'practicetest',
    component: () => import('@/views/practicetest.vue'),

  },
  {
    path: '/answer',//答题
    name: 'answer',
    component: () => import('@/views/answer.vue'),

  },
  {
    path: '/specialpractice',//专项练习
    name: 'specialpractice',
    component: () => import('@/views/specialpractice.vue'),

  },
  {
    path: '/notesapplication',
    name: 'notesapplication',
    redirect: '/notesapplication/index',
    component: () => import('@/views/notesapplication.vue'),
    children: [
      {
        path: "index",//报名条件
        component: () => import('@/views/appconditions.vue'),
      },
      {
        path: "material",//准备材料
        component: () => import('@/views/material.vue'),
      },
      {
        path: "agreement",//协议
        component: () => import('@/views/agreement.vue'),
      }
    ],

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
