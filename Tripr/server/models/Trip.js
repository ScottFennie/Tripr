import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TripSchema = new Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 15 },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    description: { type: String },
    geo: { type: Object },
    travelType: { type: String, enum: ['Camping', 'Travel', 'Party', 'Other'] },
    startDate: { type: Date },
    jkey: { type: String, required: true },
    tripImgUrl: { type: String },
    tripLine: { type: Array }
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
