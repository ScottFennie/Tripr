import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TravelersService {
  async getTravelers() {
    const res = await dbContext.Travler.find()
    if (!res) {
      throw new BadRequest('No travelers')
    }
    return res
  }

  async addTraveler(body) {
    const res = await dbContext.Travler.create(body)
    res.populate('creator')
    res.populate('trip')
    return res
  }

  async removeTraveler(id) {
    const res = await dbContext.Travler.findByIdAndDelete(id)
    if (!res) {
      throw new BadRequest('No Traveler by that Id')
    }
    return res
  }
}

export const travelersService = new TravelersService()
