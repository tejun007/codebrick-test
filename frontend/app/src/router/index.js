import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/inventory',
      name: 'Inventory',
      component: () => import('@/components/Inventory')
    },
    {
      path: '/commission',
      name: 'Commission',
      component: () => import('@/components/Commission')
    }
  ]
})
