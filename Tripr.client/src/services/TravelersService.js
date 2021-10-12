import { AppState } from '../AppState'
import { Traveler } from '../Models/Traveler'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TravelersService {
  async getAllTravelers(tripId) {
    try {
      const res = await api.get(`api/trips/${tripId}/travelers`)
      AppState.travelers = []
      AppState.travelers = res.data.map(t => new Traveler(t))
    } catch (error) {
      logger.log('What Happened?', error)
    }
  }

  async createTraveler(tripId, travelerData) {
    try {
      const res = await api.post(`api/trips/${tripId}/travelers`, travelerData)
      AppState.travelers.push(new Traveler(res.data))
    } catch (error) {
      logger.log('What Happened?', error)
    }
  }

  async removeTraveler(tripId, travelerId) {
    try {
      const res = await api.delete(`api/trips/${tripId}/travelers/${travelerId}`)
      const foundIndex = AppState.travelers.findIndex({ travelerId })
      if (!foundIndex) {
        throw new Error("Can't find Traveler")
      }
      AppState.travelers.splice(foundIndex, 1)
      logger.log('what is the deleted res?', res.data)
    } catch (error) {
      logger.log('What Happened?', error)
    }
  }
}

export const travelersService = new TravelersService()
