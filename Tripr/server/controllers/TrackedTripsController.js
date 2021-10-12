import { Auth0Provider } from '@bcwdev/auth0provider'
import { trackedTripService } from '../services/TrackedTripService'
import BaseController from '../utils/BaseController'

export class TrackedTripsController extends BaseController {
  constructor() {
    super('api/trackedtrips')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTrackedTrip)
  }

  async createTrackedTrip(req, res, next) {
    try {
      const trackedtrip = await trackedTripService.createTrackedTrip(req.body.jkey, req.userInfo.id)
      res.send(trackedtrip)
    } catch (error) {
      next(error)
    }
  }
}
