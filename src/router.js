import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'blank'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '*',
      name: 'notfound',
      meta: { layout: 'blank'},
      component: () => import('./views/404.vue')
    },
  ]
})
