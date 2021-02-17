import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import StudyCircle from "@/views/StudyCircle";
import Time from "@/views/Time";
import My from "@/views/My";
import NormalCount from "@/views/NormalCount";
import TomatoCount from "@/views/TomatoCount";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/studying',
    name: 'StudyCircle',
    component: StudyCircle
  },
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/normalcount',
    name: 'NormalCount',
    component: NormalCount
  },
  {
    path: '/tomatocount',
    name: 'TomatoCount',
    component: TomatoCount
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
