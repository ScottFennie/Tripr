import { AppState } from '../AppState'
import { Trip } from '../Models/Trip'
import { router } from '../router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { api } from './AxiosService'
import { travelersService } from './TravelersService'

class TripsService {
  async createTrip(newTrip) {
    const res = await api.post('api/trips', newTrip)
    logger.log('new Trip', res)
    AppState.trips.push(res.data)
    logger.log('new trip', res.data)
    AppState.trips.push(new Trip(res.data))
    const TravData = {}
    AppState.currentTripId = res.data.id
    await travelersService.createTraveler(res.data.id, TravData)
    await router.push({ name: 'Trip', params: { tripId: res.data.id } })
  }

  async checkIfTrip(jkey) {
    // FIXME get trip by jkey async
    const res = await api.get('api/trips?jkey=' + jkey)
    // not a client side concern
    if (!res.data) {
      return Pop.toast('not a valid trip')
    }
    // we have a trip
    const trip = res.data
    if (trip) {
      const res = await api.post('api/trackedtrips', { jkey })
      AppState.trackedtrips.push(res.data)
      logger.log('new trackedtrip', res)
    }
    throw new Error('No trips found')
  }

  async getAllTrips() {
    const res = await api.get('api/trips')
    AppState.trips = res.data.map(t => new Trip(t))
    logger.log('all trips', AppState.trips)
  }
}
export const tripsService = new TripsService()
