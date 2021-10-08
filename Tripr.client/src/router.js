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
    component: loadPage('TripPage')
  },
  {
    path: '/trips/:tripId/travelers',
    name: 'Trip.Travelers',
    component: loadPage('TripTravelersPage')

  },
  {
    path: '/trips/:tripId/supplies',
    name: 'Trip.Supplies',
    component: loadPage('TripSuppliesPage')
  },
  {
    path: '/trips/:tripId/routes',
    name: 'Trip.Routes',
    component: loadPage('TripRoutesPage')
  },
  {
    path: '/trips/:tripId/routes/:routeId',
    name: 'Trip.RouteDetails',
    component: loadPage('TripRouteDetailsPage')
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
    beforeEnter: authGuard
  },
  {
    path: '/account/trips',
    name: 'YourTrips',
    component: loadPage('YourTripsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/account/createtrip',
    name: 'CreateTrip',
    component: loadPage('CreateTripPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
