import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SuppliesService {
  async createSupplies(newSupply, tripId) {
    const res = await api.post(`api/trips/${tripId}/supplies`, newSupply)
    logger.log('created supply', res)
  }

  async editSupplies(supplyData, tripId, suppliesId) {
    const res = await api.put(`api/trips/${tripId}/supplies/${suppliesId}`, supplyData)
    logger.log('edit supply', res)
  }
}

export const suppliesService = new SuppliesService()
