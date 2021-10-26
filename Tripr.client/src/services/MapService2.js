
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { AppState } from '../AppState'
import { mapboxToken } from '../env'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { tripsService } from './TripsService'

const DrawPlugin = null

export class MapService2 {
  constructor(container, config = { style: 'mapbox://styles/mapbox/outdoors-v11' }) {
    mapboxgl.accessToken = mapboxToken
    const map = new mapboxgl.Map({
      container: 'map',
      center: [-96, 37.8],
      zoom: 1,
      preserveDrawingBuffer: true,
      ...config
    })
    window.mapboxgl = mapboxgl
    window.map = map

    // after map is "mounted" load the plugins
    map.on('load', () => {
      // adds geocoder plugin to map
      try {
        // eslint-disable-next-line no-undef
        const geocoder = new MapboxGeocoder({
          // Initialize the geocoder
          accessToken: mapboxgl.accessToken, // Set the access token
          mapboxgl: mapboxgl, // Set the mapbox-gl instance
          marker: false, // Do not use the default marker style
          placeholder: 'Search for a starting point' // Placeholder text for the search bar
        })
        map.addControl(geocoder, 'top-left')
        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        //  Add a marker at the result's coordinates
        geocoder.on('result', ({ result }) => {
          console.log('the result', result)

          const source = map.getSource('my-data').serialize()
          // TODO pair down the result object to keep only the data you need... ie name geo

          source.data.features.push({
            id: result.id,
            type: result.type,
            text: result.text,
            geometry: result.geometry
          })
          setTimeout(() => {
            const img = map.getCanvas().toDataURL()
            const tripData = {}
            tripData.tripImgUrl = img
            tripsService.updateScreenShot(AppState.currentTrip.id, tripData)
          }, 3000)
          AppState.tripMapSource = source
          tripsService.editTrip(AppState.currentTrip.id, source)
          logger.log('disit', AppState.tripMapSource)

          map.getSource('my-data').setData(source.data)
        })
      } catch (e) {
        logger.error('[GEOCODER_ERROR]', e)
      }
      // setup layers
      try {
        map.loadImage(
          'https://i.postimg.cc/HWPXn5VJ/pin-small.png',
          (error, image) => {
            if (error) throw error
            map.addImage('custom-marker', image)
            // Add a GeoJSON source with 2 points
            // map.addSource('points', {
            //   type: 'geojson',
            //   data: {
            //     type: 'FeatureCollection',
            //     features: [
            //       {
            //         // feature for Mapbox DC
            //         type: 'Feature',
            //         geometry: {
            //           type: 'Point',
            //           coordinates: [
            //             -77.03238901390978, 38.913188059745586
            //           ]
            //         },
            //         properties: {
            //           title: 'Mapbox DC'
            //         }
            //       },
            //       {
            //         // feature for Mapbox SF
            //         type: 'Feature',
            //         geometry: {
            //           type: 'Point',
            //           coordinates: [-122.414, 37.776]
            //         },
            //         properties: {
            //           title: 'Tripr SF'
            //         }
            //       }
            //     ]
            //   }
            // })
            map.addSource('my-data', {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: []
              }
            })
            map.addLayer({
              id: 'point',
              type: 'symbol',
              source: 'my-data',
              layout: {
                'icon-image': 'custom-marker',
                // get the title name from the source's "title" property
                'text-field': ['get', 'title'],
                'text-font': [
                  'Open Sans Semibold',
                  'Arial Unicode MS Bold'
                ],
                'text-offset': [0, 1.25],
                'text-anchor': 'top'
              }
            })
          }
        )
      } catch (error) {
        logger.error('[Layers Error]', error)
      }

      try {
        // loadPlugins(map)
      } catch (error) {
        logger.error('error loading plugin', error)
      }
    })
    this.map = map
    this.source = map.getSource('my-data')
    window.banana = this
  }

  addPin(pinData) {
    // TODO
  }

  saveMap() {
    const data = this.map.getSource('my-data').serialize()
    logger.log('saving', data)
  }

  loadMapSource(dataSource) {
    const source = this.map.getSource('my-data')
    if (!source) { return setTimeout(() => this.loadMapSource(dataSource), 100) }
    source.data = dataSource
    this.map.getSource('my-data').setData(source.data)
  }
}

// function loadPlugins(map) {
//   const s = document.createElement('script')
//   s.src = 'https://bl.ocks.org/danswick/raw/36796153bd86ce982a59043cbe0ac8f7/mapbox-gl-draw.js'
//   document.body.appendChild(s)
//   s.onload = () => {
//     try {
//       tryLoadDraw(map)
//     } catch (error) {
//       logger.error('unable to add control draw', error)
//     }
//   }
// }

// function tryLoadDraw(map) {
//   setTimeout(() => {
//     if (!mapboxgl.Draw) {
//       return tryLoadDraw(map)
//     }
//     logger.log('there must be abetter way for plugins', 'draw loaded')
//     map.addControl(mapboxgl.Draw())
//   }, 1000)
// }
