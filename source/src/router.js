import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import CustomersHome from '@/views/CustomersHome'
import CustomerPage from '@/views/CustomerPage'
import FAQ from '@/views/FAQ'
import BlogHome from '@/views/BlogHome'
import BlogPost from '@/views/BlogPost'
import RssAtomSitemap from '@/views/RssAtomSitemap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/customers/',
      name: 'customers-home',
      component: CustomersHome
    },
    {
      path: '/customers/:uid',
      name: 'customer-page',
      component: CustomerPage
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: BlogHome
    },
    {
      path: '/blog/:uid',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/rss',
      name: 'rss',
      component: RssAtomSitemap
    }
  ]
})
