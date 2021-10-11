import { AppState } from '../AppState'
import { Trip } from '../Models/Trip'
import { router } from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TripsService {
  async createTrip(newTrip) {
    const res = await api.post('api/trips', newTrip)
    logger.log('new Trip', res)
    AppState.trips.push(new Trip(res.data))
    router.push({ name: 'Trip', params: { tripId: res.data.id } })
  }
}
export const tripsService = new TripsService()
