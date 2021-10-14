import { AppState } from '../AppState'
import { TrackedTrip } from '../Models/TrackedTrip'
import { Trip } from '../Models/Trip'
import { router } from '../router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { api } from './AxiosService'
import { travelersService } from './TravelersService'

class TripsService {
  async createTrip(newTrip) {
    const res = await api.post('api/trips', newTrip)
    logger.log('new trip', res.data)
    AppState.trips.push(new Trip(res.data))
    const TravData = {}
    AppState.currentTripId = res.data.id.toString()
    router.push({ name: 'Trip', params: { tripId: res.data.id } })
    travelersService.createTraveler(res.data.id, TravData)
    this.checkIfTrip(res.data.jkey)
  }

  async checkIfTrip(jkey) {
    // FIXME get trip by jkey async
    const res = await api.get('api/trips?jkey=' + jkey.toUpperCase())
    // not a client side concern
    if (!res.data) {
      return Pop.toast('not a valid trip')
    }
    // we have a trip
    const trip = res.data
    if (trip) {
      const res = await api.post('api/trackedtrips', { jkey })
      AppState.trackedtrips.push(new TrackedTrip(res.data))
      const traveler = await travelersService.getTravelerById(res.data.tripId, res.data.accountId)
      if (!traveler) {
        const travData = {}
        travelersService.createTraveler(res.data.tripId, travData)
      } else {
        throw Error('Traveler already exists for this trip!')
      }
      logger.log('new trackedtrip', res)
      Pop.toast('You joined a trip!', 'success')
    } else {
      Pop.toast('Sorry no trip found', 'error')
    }
  }

  async setCurrentTrip(tripID) {
    const res = await api.get('api/trips')
    AppState.trips = res.data.map(t => new Trip(t))
    const trip = AppState.trips.find(t => t.id === tripID)
    AppState.currentTrip = trip
    logger.log('myID', trip)
  }

  async getAllTrips() {
    const res = await api.get('api/trips')
    AppState.trips = res.data.map(t => new Trip(t))
    logger.log('all trips', AppState.trips)
  }

  async getAllMyTrackedTrips() {
    const res = await api.get('account/trackedtrips')
    AppState.mytrips = res.data.map(t => new TrackedTrip(t))
    logger.log(AppState.mytrips)
  }

  async copyText(tripID) {
    try {
      const found = AppState.trips.find(t => t.id === tripID)
      // adds a value to the clipboard
      navigator.clipboard.writeText(found.jkey)
      Pop.toast('Code Copied', 'success')
    } catch (error) {
      Pop.toast('Cannot Copy', 'error')
    }
  }
}
export const tripsService = new TripsService()
