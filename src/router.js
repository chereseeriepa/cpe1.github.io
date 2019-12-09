import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '*', redirect: '/'}
  ]
})