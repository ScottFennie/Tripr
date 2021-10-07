import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SuppliesSchema = new Schema({
  description: { type: String, required: true },
  isBringing: { type: Boolean, default: false },
  tripId: { type: Schema.Types.ObjectId, required: true, ref: 'Trip' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  travlerId: { type: Schema.Types.ObjectId, required: true, ref: 'Travler' }
}, { timestamps: true, toJSON: { virtuals: true } })

SuppliesSchema.virtual('trip', {
  localField: 'tripId',
  foreignField: '_id',
  ref: 'Trip',
  justOne: true
})
SuppliesSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
SuppliesSchema.virtual('traveler', {
  localField: 'travelerId',
  foreignField: '_id',
  ref: 'Traveler',
  justOne: true
})
