import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/views/Home'
import About from '@/views/About'
import BlogHome from '@/views/BlogHome'
import BlogPost from '@/views/BlogPost'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: BlogHome,
    },
    {
      path: '/blog/:uid',
      name: 'blog-post',
      component: BlogPost
    },
  ]
})
