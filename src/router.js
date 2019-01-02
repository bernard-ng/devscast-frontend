import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
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
      path: '/podcasts',
      name: 'podcasts.index',
      component: () => import(/* webpackChunkName: "pod.index" */ './views/Podcasts/Index.vue')
    },
    {
      path: '/podcasts/:slug-:id',
      name: 'podcasts.show',
      component: () => import(/* webpackChunkName: "pod.show" */ './views/Podcasts/Show.vue')
    },
    {
      path: '/categories',
      name: 'categories.index',
      component: Home
    },
    {
      path: '/categories/:id',
      name: 'categories.show',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkname: "contact" */ './views/Contact.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
