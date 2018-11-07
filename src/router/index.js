import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppContact from '@/components/AppContact'
import AppAbout from '@/components/AppAbout'
import AppRDR2 from '@/components/AppRDR2'
import AppNBA from '@/components/AppNBA'
import AppSpiderman from '@/components/AppSpiderman'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/contact',
      name: 'AppContact',
      component: AppContact
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout
    },
    { path: '/RDR2',
      name: 'AppRDR2',
      component: AppRDR2
  },
  { path: '/NBA',
    name: 'AppNBA',
    component: AppNBA
  },
  { path: '/Spiderman',
    name: 'AppSpiderman',
    component: AppSpiderman
  }

  ]
})
