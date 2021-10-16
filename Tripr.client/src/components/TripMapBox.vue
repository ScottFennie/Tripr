<template>
  <div>
    <!-- <button @click="save()">
      save
    </button> -->
    <div id="map">
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core'
import { MapService2 } from '../services/MapService2'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'

export default {
  setup() {
    let map = null
    const mapSource = computed(() => AppState.trial)
    onMounted(() => {
      map = new MapService2()
      setTimeout(() => {
        AppState.trial = { ...AppState.trial }
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
 height: 75vh;
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
