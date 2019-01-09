import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppRDR2 from '@/components/AppRDR2'
import AppNBA from '@/components/AppNBA'
import AppSpiderman from '@/components/AppSpiderman'
import AppMario from '@/components/AppMario'
import AppGOW from '@/components/AppGOW'
import AppClassement from '@/components/AppClassement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
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
  },
  { path: '/Mario',
    name: 'AppMario',
    component: AppMario
  },
  { path: '/GOW',
    name: 'AppGOW',
    component: AppGOW
  },
  { path: '/Classement',
    name: 'AppClassement',
    component: AppClassement
  }

  ]
})
