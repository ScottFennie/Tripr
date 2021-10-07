import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RouteDetailsService {
  async getRouteById(id) {
    const res = await dbContext.RouteDetail.findById(id)
    if (!res) {
      throw new BadRequest('No route by that Id')
    }
    return res
  }

  async getRouteDetails() {
    const res = await dbContext.RouteDetail.find().populate('creator')
    if (!res) {
      throw new BadRequest('No route by that Id')
    }
    return res
  }

  async editRouteDetails(routeId, body) {
    const res = await dbContext.RouteDetail.findByIdAndUpdate(routeId, body)
    if (!res) {
      throw new BadRequest('No route by that Id')
    }
    return res.populate('creator')
  }

  async createRouteDeatils(body) {
    const res = await dbContext.RouteDetail.create(body)
    return res.populate('creator')
  }

  async removeRouteDetails(id) {
    const res = await dbContext.RouteDetail.findByIdAndDelete(id)
    if (!res) {
      throw new BadRequest('No route by that Id')
    }
    return res
  }
}

export const routeDetailsService = new RouteDetailsService()
