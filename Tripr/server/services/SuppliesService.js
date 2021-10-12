import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SuppliesService {
  async getSupplyById(suppliesId) {
    const supply = await dbContext.Supplies.findById(suppliesId).populate('creator')
    if (!supply) {
      throw new BadRequest('invalid Id')
    }
    return supply
  }

  async getSupplies(query) {
    const supply = await dbContext.Supplies.find(query).populate('creator')
    return supply
  }

  async createSupplies(suppliesData) {
    const supply = await dbContext.Supplies.create(suppliesData)
    await supply.populate('creator')
    return supply
  }

  async removeSupplies(suppliesId, userId) {
    const supply = await this.getSupplyById(suppliesId)
    if (userId !== supply.creatorId.toString()) {
      throw new Forbidden('you cant do that')
    }
    await supply.remove()
    return supply
  }

  async editSupplies(suppliesId, userId, suppliesData) {
    const supply = await this.getSupplyById(suppliesId)
    if (userId !== supply.creatorId.toString()) {
      throw new Forbidden('you cant do that')
    }
    supply.description = suppliesData.description || supply.description
    supply.isBringing = suppliesData.isBringing == null ? supply.isBringing : suppliesData.isBringing
    supply.quantity = suppliesData.quantity || supply.quantity
    await supply.save()
    return supply
  }
}
export const suppliesService = new SuppliesService()
