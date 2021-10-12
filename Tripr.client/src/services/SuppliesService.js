import { AppState } from '../AppState'
import { Supplies } from '../Models/Supplies'
import { router } from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SuppliesService {
  async getSupplies(tripId) {
    AppState.currentSupplies = []
    const res = await api.get(`api/trips/${tripId}/supplies`)
    logger.log('supplies list', res.data)
    AppState.supplies = res.data.map(s => new Supplies(s))
    AppState.currentSupplies = AppState.supplies.filter(s => s.tripId === tripId)
    logger.log('current supplies', AppState.currentSupplies)
  }

  async gotoTripPage() {
    await router.push({ name: 'Trip' })
  }

  async createSupplies(newSupply, tripId) {
    const res = await api.post(`api/trips/${tripId}/supplies`, newSupply)
    logger.log('created supply', res)
    AppState.supplies.push(new Supplies(res.data))
    this.getSupplies(tripId)
  }

  async editSupplies(supplyData, tripId, suppliesId) {
    const res = await api.put(`api/trips/${tripId}/supplies/${suppliesId}`, supplyData)
    logger.log('edit supply', res.data)
    this.getSupplies(tripId)
  }
}

export const suppliesService = new SuppliesService()
