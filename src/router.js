import VueRouter from 'vue-router'
import Home from './views/PageHome.vue'
import About from './views/PageAbout.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router
