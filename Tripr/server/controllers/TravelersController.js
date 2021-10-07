import { Auth0Provider } from '@bcwdev/auth0provider'
import { travelersService } from '../services/TravelersService'
import BaseController from '../utils/BaseController'

export class TravelersController extends BaseController {
  constructor() {
    super('api/trips/:tripId/travelers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.addTraveler)
      .delete('/:id', this.removeTraveler)
  }

  async removeTraveler(req, res, next) {
    try {
      const traveler = await travelersService.removeTraveler(req.params.id)
      res.send(traveler)
    } catch (error) {
      next(error)
    }
  }

  async addTraveler(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      req.body.tripId = req.params.tripId
      const traveler = await travelersService.addTraveler(req.body)
      res.send(traveler)
    } catch (error) {
      next(error)
    }
  }
}
