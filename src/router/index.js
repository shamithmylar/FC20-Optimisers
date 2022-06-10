import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Navigation from '../views/Navigation.vue'
import Chat from '../views/Chat.vue'
import Blogs from '../views/Blogs.vue'
import Funding from '../views/Funding.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: Navigation
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/funding',
    name: 'funding',
    component: Funding
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
