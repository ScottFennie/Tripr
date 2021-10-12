import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TrackedTripService {
  async getTripByJkey(jkey) {
    const trip = await dbContext.Trip.findOne({ jkey: jkey })
    if (!trip) {
      throw new BadRequest('invalid trip')
    }
    return trip
  }

  async createTrackedTrip(jkey, userId) {
    const trip = await this.getTripByJkey(jkey)
    // TODO can anyone just join???
    // TODO check if the user is already going on the trip
    const found = await dbContext.TrackedTrip.findOne({ accountId: userId, tripId: trip.id })
    if (found) {
      throw new BadRequest('you tracked this trip already')
    }
    const trackedtrip = await dbContext.TrackedTrip.create({ accountId: userId, tripId: trip.id })
    // await this.getTripById(trackedtrip.id)
    await trackedtrip.populate('traveler')
    await trackedtrip.populate('trip')
    return trackedtrip
  }
}

export const trackedTripService = new TrackedTripService()
