import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  currentTrip: {
    title: "The Boi's Trip",
    travelType: 'Camping',
    id: 1,
    features: [
      {
        id: 'place.9454360526012190',
        type: 'Feature',
        text: 'Boston',
        geometry: {
          type: 'Point',
          coordinates: [
            -71.0596,
            42.3605
          ]
        }
      },
      {
        id: 'place.9454360526012190',
        type: 'Feature',
        text: 'Who Knows',
        geometry: {
          type: 'Point',
          coordinates: [
            -95.0596,
            50.3605
          ]
        }
      }
    ]
  },
  trips: [],
  currenttrip: [],
  currentTripId: null,
  assignSupplies: [],
  currentSupplies: [],
  supplies: [],
  supply: null,
  routeDetails: [],
  travelers: [],
  currTravelers: [],
  trackedtrips: [],
  profile: null,
  mytrips: [],
  tripMapSource: {},
  tripStartSource: {}

})
