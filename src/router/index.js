import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/localStorage'

const LayOut = () => import('@/views/LayOut.vue')
const Detail = () => import('@/views/Detail.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
const Article = () => import('@/views/Article.vue')
const Collect = () => import('@/views/Collect.vue')
const Like = () => import('@/views/Like.vue')
const User = () => import('@/views/User.vue')

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
router.beforeEach((to, from, next) => {
  const whiteList = ['/login', '/register']
  console.log(to, from)
  console.log(getToken())
  if (getToken()) {
    next()
  } else {
    console.log(whiteList.includes(to.path))
    if (whiteList.includes(to.path)) {
      next()
    } else if (!whiteList.includes(from.path)) {
      next('/login')
    }
  }
})
export default router
