import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

import Chats from '../components/Chats.vue';
import Friends from '../components/Friends.vue';
import Find from '../components/Find.vue';
import More from '../components/More.vue';

import Profile from '../components/Profile.vue';
import Chating from '../components/Chating.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  { path: '/friends', component: Friends, name: 'friends' },
  { path: '/chats', component: Chats, name: 'chats' },
  { path: '/find', component: Find, name: 'find' },
  { path: '/more', component: More, name: 'more' },
  { path: '/profile', component: Profile, name: 'profile' },
  { path: '/chating', component: Chating, name: 'chating' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'tab-bar_tab--selected',
  linkExactActiveClass: 'tab-bar_tab' 
})

export default router