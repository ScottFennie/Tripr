<template>
  <div>
    <button @click="save()">
      save
    </button>
    <div id="map">
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core'
import { MapService } from '../services/MapService'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'

export default {
  setup() {
    let map = null
    const mapSource = computed(() => AppState.tripMapSource)
    onMounted(() => {
      map = new MapService()
      setTimeout(() => {
        AppState.tripMapSource = {
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
      }, 2000)
      // go load TripMapSourceByTripId
    })

    watchEffect(() => {
      if (mapSource.value.id && map) {
        map.loadMapSource(mapSource.value)
        Pop.toast('map loaded')
      }
    })

    return {
      async save() {
        map.saveMap()
      }

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
.mapboxgl-ctrl-geocoder {
   width: 300px!important;
}
</style>
