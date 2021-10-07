import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const RouteDetailsSchema = new Schema(
  {
    description: { type: String, required: true },
    location: { type: Number, required: true },
    tripId: { type: Schema.Types.ObjectId, ref: 'Trip', required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

RouteDetailsSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
