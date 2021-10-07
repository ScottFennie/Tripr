import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TravelersService {
  async addTraveler(body) {
    const res = await dbContext.Travler.create(body)
    return res.populate('creator').populate('trip')
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
