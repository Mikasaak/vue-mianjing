import Vue from 'vue'
import VueRouter from 'vue-router'

import LayOut from '@/views/LayOut.vue'
import Detail from '@/views/Detail.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LayOut,
    redirect: '/article',
    children: [
      {
        path: '/article',
        component: Article
      },
      {
        path: '/collect',
        component: Collect
      },
      {
        path: '/like',
        component: Like
      },
      {
        path: '/user',
        component: User
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({ routes })

export default router
