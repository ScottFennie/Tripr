import { Auth0Provider } from '@bcwdev/auth0provider'
import { routeDetailsService } from '../services/RouteDetailsService'
import BaseController from '../utils/BaseController'

export class RouteDetailsController extends BaseController {
  constructor() {
    super('api/trips/:tripId/routes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getRouteDetails)
      .put('/id', this.editRouteDetails)
      .post('', this.createRouteDeatils)
      .delete('/id', this.removeRouteDetails)
  }

  async removeRouteDetails(req, res, next) {
    try {
      const route = await routeDetailsService.removeRouteDetails(req.params.id)
      res.send(route)
    } catch (error) {
      next(error)
    }
  }

  async createRouteDeatils(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.tripId = req.params.tripId
      const route = await routeDetailsService.createRouteDeatils(req.body)
      res.send(route)
    } catch (error) {
      next(error)
    }
  }

  async editRouteDetails(req, res, next) {
    try {
      const route = await routeDetailsService.editRouteDetails(req.params.id, req.body)
      res.send(route)
    } catch (error) {
      next(error)
    }
  }

  async getRouteDetails(req, res, next) {
    try {
      const route = await routeDetailsService.getRouteDetails(req.params.id)
      res.send(route)
    } catch (error) {
      next(error)
    }
  }
}
