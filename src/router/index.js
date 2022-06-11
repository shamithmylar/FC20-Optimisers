import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Navigation from '../views/Navigation.vue'
import Chat from '../views/Chat.vue'
import Funding from '../views/Funding.vue'
import Welcome from '../views/Welcome.vue'
import { projectAuth } from '../firebase//config.js'
import Blogs from '../views/Blogs.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
import RealTime from '../views/RealTime.vue'


//auth guard
const requireAuth = (to, from, next ) => {
let user = projectAuth.currentUser
console.log('current user in Auth guard: ',user)
if(!user){
  next({name: 'welcome'})
  }  else{
       next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: Navigation,
    beforeEnter: requireAuth
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    beforeEnter: requireAuth
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs,
    beforeEnter: requireAuth
  },
  {
    path: '/funding',
    name: 'funding',
    component: Funding,
    beforeEnter: requireAuth
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/blogs/create',
    name: 'Create',
    component: Create,
    beforeEnter: requireAuth
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag,
    beforeEnter: requireAuth
  },
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime,
    beforeEnter: requireAuth
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
