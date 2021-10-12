import { AppState } from '../AppState'
import { Trip } from '../Models/Trip'
import { router } from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { travelersService } from './TravelersService'

class TripsService {
  async createTrip(newTrip) {
    const res = await api.post('api/trips', newTrip)
    logger.log('new Trip', res)
    AppState.trips.push(new Trip(res.data))
    const TravData = {}
    travelersService.createTraveler(res.data.id, TravData)
    AppState.currentTripId = res.data.id
    router.push({ name: 'Trip', params: { tripId: res.data.id } })
  }
}
export const tripsService = new TripsService()
