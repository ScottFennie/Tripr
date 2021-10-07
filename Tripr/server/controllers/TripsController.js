import { Auth0Provider } from '@bcwdev/auth0provider'
import { tripsService } from '../services/TripsService.js'
import BaseController from '../utils/BaseController.js'

export class TripsController extends BaseController {
  constructor() {
    super('api/trips')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getTrips)
      .get('/tripId', this.getTripById)
      .post('', this.createTrip)
      .put('/tripId', this.editTrip)
      .delete('/tripId', this.removeTrip)
  }

  async getTrips(req, res, next) {
    try {
      const trips = await tripsService.getTrips(req.query)
      res.send(trips)
    } catch (error) {
      next(error)
    }
  }

  async getTripById(req, res, next) {
    try {
      const trip = await tripsService.getTripById(req.params.tripId)
      res.send(trip)
    } catch (error) {
      next(error)
    }
  }

  async createTrip(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const trip = await tripsService.createTrip(req.body)
      res.send(trip)
    } catch (error) {
      next(error)
    }
  }

  async editTrip(req, res, next) {
    try {
      const trip = await tripsService.editTrip(req.params.tripId, req.userInfo.id, req.body)
      res.send(trip)
    } catch (error) {
      next(error)
    }
  }

  async removeTrip(req, res, next) {
    try {
      const trip = await tripsService.removeTrip(req.params.tripId, req.userInfo.id)
      res.send(trip)
    } catch (error) {
      next(error)
    }
  }
}
