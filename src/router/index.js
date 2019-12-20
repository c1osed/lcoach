import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',//解决#问题
  routes: [
    {
      path: '/',
      // redirect: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }

  ]
})
