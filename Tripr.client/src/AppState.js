import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  currentTrip: {
    title: "The Boi's Trip",
    travelType: 'Camping',
    id: 1,
    geo: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            id: 'neighborhood.9617859997698260',
            type: 'Feature',
            text: 'Zimbabwe',
            geometry: {
              type: 'Point',
              coordinates: [
                30.976555,
                -29.691168
              ]
            }
          }
        ]
      }
    }
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
  tripStartSource: {},
  trial: {
    id: 'my-fake-id',
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          id: 'place.15042767980230180',
          type: 'Feature',
          text: 'Boise',
          geometry: {
            type: 'Point',
            coordinates: [
              -116.2044,
              43.615
            ]
          }
        },
        {
          id: 'place.9607189446701850',
          type: 'Feature',
          text: 'Chicago',
          geometry: {
            type: 'Point',
            coordinates: [
              -87.6244,
              41.8756
            ]
          }
        }
      ]
    }
  }

})
