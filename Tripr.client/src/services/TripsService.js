import { AppState } from '../AppState'
import { router } from '../router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { api } from './AxiosService'

class TripService {
  async createTrip(newTrip) {
    const res = await api.post('api/trips', newTrip)
    logger.log('new Trip', res)
    AppState.trips.push(res.data)
    router.push({ name: 'Trip', params: { tripId: res.data.id } })
  }
}
export const tripService = new TripService()
