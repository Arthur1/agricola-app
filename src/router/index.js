import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import EastIndiaCompany from '@/components/EastIndiaCompany'
import Contortionist from '@/components/Contortionist'
import FieldMessenger from '@/components/FieldMessenger'
import Veterinarian from '@/components/Veterinarian'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Randomizer for Agricola',
      component: Index,
    },
    {
      path: '/east_india_company',
      name: '東インド会社[NL074]',
      component: EastIndiaCompany,
    },
    {
      path: '/contortionist',
      name: 'ヘビ女[P05]',
      component: Contortionist,
    },
    {
      path: '/field_messenger',
      name: '畑の使者[NL074]',
      component: FieldMessenger,
    },
    {
      path: '/veterinarian',
      name: '獣医[304]',
      component: Veterinarian,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition ? savedPosition : {x: 0, y: 0}
  },
})
