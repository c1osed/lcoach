import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Home from '../components/Home'
import Wdkb from '../components/wdkb/Wdkb'
import Wdxs from '../components/wdxs/Wdxs'
import Index from '../components/home/Index'
import Lskc from '../components/lskc/Lskc'
import WdxsqbMenu from '../components/wdxs/WdxsqbMenu'
import WdxsstMenu from '../components/wdxs/WdxsstMenu'
import WdxszsMenu from '../components/wdxs/WdxszsMenu'
// Vue.use(Wdkb)
// Vue.use(Wdxs)
// Vue.use(Index)
Vue.use(Router)

export default new Router({
  mode: 'history',//解决#问题
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      redirect:"/wdxs",
      component: Home,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index,
        },
        {
          path: '/wdkb',
          name: 'Wdkb',
          component: Wdkb,
        },
        {
          path: '/wdxs',
          name: 'Wdxs',
          component: Wdxs,
          children:[
            {
              path: '/wdxsqb',
              name: 'Wdxsqb',
              component: WdxsqbMenu,
            },
            {
              path: '/wdxsst',
              name: 'Wdxsst',
              component: WdxsstMenu,
            },
            {
              path: '/wdxszs',
              name: 'Wdxszs',
              component: WdxszsMenu,
            }
          ]
        },
        {
          path: '/lskc',
          name: 'Lskc',
          component: Lskc,
        }
      ]
    }

  ]
})
