import Vue from 'vue'
import VueRouter from 'vue-router'
import listArticle from '../views/listArticle.vue'
import createArticle from '../views/createArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    name: 'listArticle',
    component: listArticle
  },
  {
    path: '/articles/create',
    name: 'createArticle',
    component: createArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
