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
    const supply = await dbContext.Supplies.find(query).populate('creator', 'name picture').populate('assigned')
    return supply
  }

  async createSupplies(suppliesData) {
    suppliesData.assignedId = undefined
    const supply = await dbContext.Supplies.create(suppliesData)
    await supply.populate('creator', 'name picture')
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
    supply.description = suppliesData.description || supply.description
    supply.isBringing = suppliesData.isBringing == null ? supply.isBringing : suppliesData.isBringing
    supply.quantity = suppliesData.quantity || supply.quantity
    supply.assignedId = suppliesData.assignedId == null ? supply.assignedId : suppliesData.assignedId
    await supply.save()
    await supply.populate('assigned', 'name picture')
    return supply
  }
}
export const suppliesService = new SuppliesService()
