import { Auth0Provider } from '@bcwdev/auth0provider'
import { application } from 'express'
import { travelersService } from '../services/TravelersService'
import BaseController from '../utils/BaseController'

export class TravelersController extends BaseController {
  constructor() {
    super('api/trips/:tripId/travelers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getTravelers)
      .get('/:id', this.getTravelerById)
      .post('', this.addTraveler)
      .delete('/:id', this.removeTraveler)
  }

  async getTravelerById(req, res, next) {
    try {
      const traveler = await travelersService.getTravelerById(req.params.id)
      res.send(traveler)
    } catch (error) {
      next(error)
    }
  }

  async getTravelers(req, res, next) {
    try {
      const traveler = await travelersService.getTravelers()
      res.send(traveler)
    } catch (error) {
      next(error)
    }
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
