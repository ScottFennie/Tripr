import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: loadPage('LoginPage')
  },
  {
    path: '/trips',
    name: 'Trips',
    component: loadPage('TripsPage')
  },
  {
    path: '/trips/:tripId',
    name: 'Trip',
    component: loadPage('TripPage'),
    children: [
      {
        path: 'members',
        name: 'Trip.Members',
        component: loadPage('TripMembersPage')

      },
      {
        path: 'supplies',
        name: 'Trip.Supplies',
        component: loadPage('TripSuppliesPage')
      },
      {
        path: 'routes',
        name: 'Trip.Routes',
        component: loadPage('TripRoutesPage')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard,
    children: [{
      path: 'trips',
      name: 'Account.Trips',
      component: loadPage('AccountTripsPage')
    }]
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
