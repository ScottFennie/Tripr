// new schema

import { Schema } from 'mongoose'

export const TripMapSource = new Schema({
  type: { type: String, default: 'geojson' },
  data: { type: Object },
  tripId: { type: Schema.Types.ObjectId, ref: 'Trip' }
})
