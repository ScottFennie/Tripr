export class Supplies {
  constructor(supplyData = {}) {
    this.description = supplyData.description
    this.quantity = supplyData.quantity
    this.isBringing = supplyData.isBringing
    this.tripId = supplyData.tripId
    this.id = supplyData.id
  }
}
