import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/musiclist',
    name: 'musiclist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "musiclist" */ '../views/MusicListView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    // 路由守卫
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin) {
        next()
      } else {
        next('/login')
      }
    },
    component: () => import(/* webpackChunkName: "userinfo" */ '../views/UserInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// 全局路由守卫
router.beforeEach((to, from) => {
  if (to.path == '/login') {
    store.state.isFooterPlayShow = false
  } else {
    store.state.isFooterPlayShow = true
  }
})

export default router
