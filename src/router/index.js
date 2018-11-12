import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import EastIndiaCompany from '@/components/EastIndiaCompany'
import Contortionist from '@/components/Contortionist'
import FieldMessenger from '@/components/FieldMessenger'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/east_india_company',
      name: 'EastIndiaCompany',
      component: EastIndiaCompany,
    },
    {
      path: '/contortionist',
      name: 'Contortionist',
      component: Contortionist,
    },
    {
      path: '/field_messenger',
      name: 'FieldMessenger',
      component: FieldMessenger,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition ? savedPosition : {x: 0, y: 0}
  },
})
