import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'

class TripsService {
  async getTrips(query) {
    const trips = await dbContext.Trip.find(query).populate('creator')
    return trips
  }

  async getTripById(tripId) {
    const trip = await dbContext.Trip.findById(tripId).populate('creator')
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
    if (userId !== trip.creatorId.toString()) {
      throw new Forbidden('You are Not Authorized')
    }
    trip.title = tripData.title || trip.title
    trip.description = tripData.description || trip.description
    trip.location = tripData.location || trip.location
    trip.travelType = tripData.travelType || trip.travelType
    trip.travelerId = tripData.travelerId || trip.travelerId
    trip.creatorId = tripData.creatorId || trip.creatorId
    await trip.save()
    return trip
  }

  // async removeTrip(tripId, userId) {
  //   const trip = await this.getTripById(tripId)
  //   if (userId !== trip.creatorId.toString()) {
  //     throw new Forbidden('you cant do that')
  //   }
  //   await trip.delete()
  //   return trip
  // }
  async removeTrip(id) {
    const trip = await dbContext.Trip.findByIdAndDelete({ id })
    if (!trip) {
      throw new BadRequest('Not the trip Id')
    }
    return trip
  }
}
export const tripsService = new TripsService()
