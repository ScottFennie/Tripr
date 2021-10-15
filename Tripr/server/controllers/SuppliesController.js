import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { suppliesService } from '../services/SuppliesService'

export class SuppliesController extends BaseController {
  constructor() {
    super('api/trips/:tripId/supplies')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:suppliesId', this.getSupply)
      .get('', this.getSupplies)
      .post('', this.createSupplies)
      .delete('/:suppliesId', this.removeSupplies)
      .put('/:suppliesId', this.editSupplies)
  }

  async getSupplies(req, res, next) {
    try {
      const supply = await suppliesService.getSupplies(req.query)
      res.send(supply)
    } catch (error) {
      next(error)
    }
  }

  async getSupply(req, res, next) {
    try {
      const supply = await suppliesService.getSupplyById(req.params.suppliesId)
      res.send(supply)
    } catch (error) {
      next(error)
    }
  }

  async createSupplies(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.tripId = req.params.tripId
      const supply = await suppliesService.createSupplies(req.body)
      res.send(supply)
    } catch (error) {
      next(error)
    }
  }

  async removeSupplies(req, res, next) {
    try {
      const supply = await suppliesService.removeSupplies(req.params.suppliesId, req.userInfo.id)
      res.send(supply)
    } catch (error) {
      next(error)
    }
  }

  async editSupplies(req, res, next) {
    try {
      // NOTE setting assignedId on server side?
      if (req.body.isBringing) {
        req.body.assignedId = req.userInfo.id
      } else { req.body.assignedId = undefined }
      const supply = await suppliesService.editSupplies(req.params.suppliesId, req.userInfo.id, req.body)
      res.send(supply)
    } catch (error) {
      next(error)
    }
  }
}
