import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'

class TripsService {
  updatePins(body) {
    throw new Error('Method not implemented.')
  }

  async getTrips(query) {
    const trips = await dbContext.Trip.find(query).populate('creator')
    return trips
  }

  async getTripByJKey(jkey) {
    const trip = await dbContext.Trip.find({ jkey }).populate('creator')
    if (!trip) {
      throw new BadRequest('Invalid Trip Id')
    }
    return trip
  }

  async getTripById(id) {
    const trip = await dbContext.Trip.find(id).populate('creator')
    if (!trip) {
      throw new BadRequest('Invalid Trip Id')
    }
    return trip
  }

  async createTrip(tripData) {
    const trip = await dbContext.Trip.create(tripData)
    await trip.populate('creator')
    return trip
  }

  async editTrip(tripId, userId, tripData) {
    const trip = await this.getTripById(tripId)
    trip.title = tripData.title || trip.title
    trip.description = tripData.description || trip.description
    trip.geo = tripData.geo || trip.geo
    trip.travelType = tripData.travelType || trip.travelType
    trip.travelerId = tripData.travelerId || trip.travelerId
    trip.creatorId = tripData.creatorId || trip.creatorId
    await trip.save()
    return trip
  }

  async removeTrip(tripId, userId) {
    const trip = await this.getTripById(tripId)
    if (userId !== trip.creatorId.toString()) {
      throw new Forbidden('you cant do that')
    }
    await trip.delete()
    return trip
  }
}
export const tripsService = new TripsService()
