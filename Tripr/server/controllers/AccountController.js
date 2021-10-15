import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { trackedTripService } from '../services/TrackedTripService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/trackedtrips', this.getMyTrackedTrips)
      .delete('/trackedtrips/:trackedTripID', this.deleteTrackedTrip)
      .put('', this.editProfile)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async editProfile(req, res, next) {
    try {
      const profile = await accountService.editProfile(req.userInfo.id, req.body)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getMyTrackedTrips(req, res, next) {
    try {
      const trips = await trackedTripService.getMyTrackedTrips(req.userInfo.id)
      res.send(trips)
    } catch (error) {
      next(error)
    }
  }

  async deleteTrackedTrip(req, res, next) {
    try {
      const trip = await trackedTripService.deleteTrackedTrip(req.params.trackedTripID, req.userInfo.id)
      res.send(trip)
    } catch (error) {
      next(error)
    }
  }
}
