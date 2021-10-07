import { dbContext } from '../db/DbContext'

class RouteDetailsService {
  async getRouteDetails(id) {
    const res = await dbContext.RouteDetail.find({ id }).populate('creator')
    return res
  }

  async editRouteDetails(routeId, body) {
    const res = await dbContext.RouteDetail.findByIdAndUpdate(routeId, body)
    return res.populate('creator')
  }

  async createRouteDeatils(body) {
    const res = await dbContext.RouteDetail.create(body)
    return res.populate('creator')
  }

  async removeRouteDetails(id) {
    const res = await dbContext.RouteDetail.findByIdAndDelete({ id })
    return res
  }
}

export const routeDetailsService = new RouteDetailsService()
