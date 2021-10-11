import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  currentTrip: {
    title: "The Boi's Trip",
    travelType: 'Camping',
    id: 1,
    locations: [
      { name: 'Discovery State Park', creator: 'Scott', center: [43.525421, -116.065550] },
      { name: 'Foothills Trail', creator: 'Drew', center: [43.53757473082576, -116.0656981015533] },
      { name: 'Barclay Bay', creator: 'Nathan', center: [43.5203215958237, -116.05359597446557] }
    ]
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
      id: 2,
      startDate: '11/30/2020'
    },
    {
      title: 'The Dudes Trip',
      travelType: 'Camping',
      id: 3,
      startDate: '11/30/2020'
    }
  ],
  supplies: [],
  routeDetails: [],
  travelers: []
})
