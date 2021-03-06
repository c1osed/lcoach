// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/Login.css'
import './assets/css/Home.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
// import axios from 'axios'
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081/api'
//全局注册，之后可在其它组件中通过this.$axios发送数据
Vue.prototype.$axios=axios
Vue.config.productionTip = false
import store from './store'
Vue.filter('dataFormat',function (originVal) {
  const  dt = new Date(originVal)
  const y = dt.getFullYear();
  const  m = (dt.getMonth()+1+'').padStart(2,'0')
  const  d= (dt.getDate()+'').padStart(2,'0');
  const hh = (dt.getHours()+'').padStart(2,'0');
  const mm = (dt.getMinutes()+'').padStart(2,'0');
  const ss = (dt.getSeconds()+'').padStart(2,'0');
  // return 'yyyy-mm-dd';
  // return '${y}-${m}-${d}'
  return `${y}-${m}-${d}`
})


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username) {
        next()
      } else {
        next({
          path: '/',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
