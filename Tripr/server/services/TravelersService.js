import { dbContext } from '../db/DbContext'

class TravelersService {
  async addTraveler(body) {
    const res = await dbContext.Travler.create(body)
    return res.populate('creator').populate('trip')
  }

  async removeTraveler(id) {
    const res = await dbContext.Travler.findByIdAndDelete(id)
    return res
  }
}

export const travelersService = new TravelersService()
