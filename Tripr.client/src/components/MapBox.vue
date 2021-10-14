<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import mapboxGl from 'mapbox-gl'
import { onMounted } from '@vue/runtime-core'
import { mapboxToken } from '../env'
export default {
  setup() {
    onMounted(() => {
      mapboxGl.accessToken = mapboxToken
      const map = new mapboxGl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-96, 37.8],
        zoom: 1
      })

      map.on('load', () => {
        const geocoder = new MapboxGeocoder({
          // Initialize the geocoder
          accessToken: mapboxGl.accessToken, // Set the access token
          mapboxgl: mapboxGl, // Set the mapbox-gl instance
          marker: false, // Do not use the default marker style
          placeholder: 'Search for a starting point', // Placeholder text for the search bar
          position: 'bottom-left'
        })
        map.addControl(geocoder, 'bottom-left')

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
            map.addSource('single-point', {
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: []
              }
            })
            map.addLayer({
              id: 'point',
              type: 'symbol',
              source: 'single-point',
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

            // Listen for the `result` event from the Geocoder
            // `result` event is triggered when a user makes a selection
            //  Add a marker at the result's coordinates
            geocoder.on('result', ({ result }) => {
              map.getSource('single-point').setData(result.geometry)
            })
          }
        )
      })
    })
    return {

    }
  }

}
</script>

<style lang="scss">
#map {
  height: 40vh;
}
.mapboxgl-ctrl-attrib-inner {
    display: none;
}
.mapboxgl-ctrl.mapboxgl-ctrl-attrib{
    display: none;
}

.mapboxgl-ctrl-geocoder--input{

}
</style>
