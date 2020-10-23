import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// CUSTOM PAGES
import Principal from '../views/Principal'
import Libros from '../views/Libros'
Vue.use(VueRouter)

const routes = [
  {
    path: '/principal',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/libros',
    name: 'Libros',
    component: Libros
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router