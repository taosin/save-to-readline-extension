import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import binding from '@/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/binding',
      name: 'binding',
      component: binding
    }
  ]
})
