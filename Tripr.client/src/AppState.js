import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  currentTrip: {
    title: "The Boi's Trip",
    travelType: 'Camping',
    id: 1
  },
  trips: [
    {
      title: "The Boi's Trip",
      travelType: 'Camping',
      id: 1,
      startDate: '11/20/2020'
    },
    {
      title: 'The Dudes Trip',
      travelType: 'Camping',
      id: 1,
      startDate: '11/30/2020'
    },
    {
      title: 'The Dudes Trip',
      travelType: 'Camping',
      id: 1,
      startDate: '11/30/2020'
    }
  ],
  supplies: [],
  routeDetails: [],
  travelers: []
})
