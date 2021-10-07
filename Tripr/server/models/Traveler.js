import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TravlerSchema = new Schema(
  {
    tripId: { type: Schema.Types.ObjectId, ref: 'Trip', required: true },
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    athorization: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

TravlerSchema.virtual('creator', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
TravlerSchema.virtual('trip', {
  localField: 'tripId',
  foreignField: '_id',
  justOne: true,
  ref: 'Trip'
})
