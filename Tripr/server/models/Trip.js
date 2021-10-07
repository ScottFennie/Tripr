import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TripSchema = new Schema(
  {
    title: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    description: { type: String, required: true },
    location: { type: Array, required: true },
    travelType: { type: String, enum: ['Foot', 'Road', 'Camping'], required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
TripSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
TripSchema.virtual('travelers', {
  localField: 'travelerId',
  foreignField: '_id',
  ref: 'Travelers',
  justOne: true
})
