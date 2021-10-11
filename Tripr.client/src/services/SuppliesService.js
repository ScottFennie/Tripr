import { AppState } from '../AppState'
import { Supplies } from '../Models/Supplies'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SuppliesService {
  async getSupplies(tripId) {
    const res = await api.get(`api/trips/${tripId}/supplies`)
    logger.log('supplies list', res.data)
    AppState.supplies = res.data.map(s => new Supplies(s))
    logger.log(AppState.supplies)
  }

  async createSupplies(newSupply, tripId) {
    const res = await api.post(`api/trips/${tripId}/supplies`, newSupply)
    logger.log('created supply', res)
    AppState.supplies.push(new Supplies(res.data))
  }

  async editSupplies(supplyData, tripId, suppliesId) {
    const res = await api.put(`api/trips/${tripId}/supplies/${suppliesId}`, supplyData)
    logger.log('edit supply', res)
  }
}

export const suppliesService = new SuppliesService()
