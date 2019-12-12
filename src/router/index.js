import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/regist',
    name: 'regist',
    component: () => import('@/views/regist.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/layout.vue'),
    redirect: "/index",
    children: [
      {
        path: '/personalcenter',
        name: 'personalcenter',
        component: () => import('@/views/personalcenter.vue'),
        redirect: '/personalcenter/index',
        children: [
          {
            path: "index",//个人中心首页
            component: () => import('@/views/personalcenter/index.vue'),
          },
          {
            path: "invitation",//邀请
            component: () => import('@/views/personalcenter/invitation.vue'),
          },
          {
            path: "accountbinding",//账号绑定
            component: () => import('@/views/personalcenter/accountbinding.vue'),
          },
          {
            path: "recordslist",//体现记录
            component: () => import('@/views/personalcenter/recordslist.vue'),
          },
          {
            path: "setpassword",//设置密码
            component: () => import('@/views/personalcenter/setpassword.vue'),
          },
        ]

      },
      {
        path: 'index',
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
        path: '/examine',//模拟考试
        name: 'examine',
        component: () => import('@/views/examine.vue'),

      },
      {
        path: '/examineresult',//考试结果
        name: 'examineresult',
        component: () => import('@/views/examineresult.vue'),

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
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
