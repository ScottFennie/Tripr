export class Trip {
  constructor(tripData) {
    this.jkey = tripData.jkey
    this.id = tripData.id
    this.title = tripData.title
    this.creatorId = tripData.creatorId
    this.description = tripData.description
    this.location = tripData.location
    this.travelType = tripData.travelType
    this.startDate = tripData.startDate
    this.creator = tripData.creator
    this.travelers = tripData.travelers
  }
}
