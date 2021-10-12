import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { RouteDetailSchema } from '../models/RouteDetail'
import { SuppliesSchema } from '../models/Supplies'
import { TrackedTripSchema } from '../models/TrackedTrip'
import { TravelerSchema } from '../models/Traveler'
import { TripSchema } from '../models/Trip'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
Traveler = mongoose.model('Traveler', TravelerSchema);
Trip = mongoose.model('Trip', TripSchema);
Supplies = mongoose.model('Supplies', SuppliesSchema);

RouteDetail = mongoose.model('RouteDetail', RouteDetailSchema);

TrackedTrip = mongoose.model('TrackedTrip', TrackedTripSchema)
}

export const dbContext = new DbContext()
