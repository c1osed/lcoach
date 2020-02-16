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
import LoginBack from '../components/LoginBack'
import HomeBack from '../components/HomeBack'
import TeacherPlan from '../components/teacherplan/TeacherPlan'
import '@fullcalendar/core/main.css';
import StudentsList from '../components/back/StudentsList'
import AppMain from '../components/common/AppMain'
// Vue.use(Wdkb)
// Vue.use(Wdxs)
// Vue.use(Index)
Vue.use(Router)

export default new Router({
  mode: 'history',//解决#问题
  routes: [
    {
      path: '/loginback',
      name: 'LoginBack',
      component: LoginBack
    },
    {
      path: '/homeback',
      name: '首页',
      meta: { title: '首页' },
      component: HomeBack,
      children:[
        {
          path: '/studentsmanager',
          name: '学生管理',
          meta: { title: '学生管理' },
          component: ()=> import('../components/common/AppMain.vue'),
          children :[
            {
              path: '/studentslist',
              name: '学生列表',
              meta: { title: '学生列表' },
              component: ()=> import('../components/back/StudentsList.vue')
              // component: ()=> import('../components/common/AppMain.vue')
            }

          ]
        },
        {
          path: '/teachersmanager',
          name: '老师管理',
          meta: { title: '老师管理' },
          component: ()=> import('../components/common/AppMain.vue'),
          children:[{
            path: '/teacherslist',
            name: '老师列表',
            meta: { title: '老师列表' },
            component: ()=> import('../components/back/TeachersList.vue')
          }]
        }

      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        requireAuth: true
      },
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
        },{
          path: '/teacherplan',
          name: 'TeacherPlan',
          component: TeacherPlan,
        }
      ]
    }

  ]
})
