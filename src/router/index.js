import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/form'
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  }
]

const router = new VueRouter({
  routes
})

export default router
