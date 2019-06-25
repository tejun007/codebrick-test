import Vue from 'vue'
import Router from 'vue-router'
import Inventory from '@/components/Inventory'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    }
  ]
})
