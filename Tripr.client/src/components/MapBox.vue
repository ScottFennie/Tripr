<template>
  <div>
    <div class="map" id="map">
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core'
import { MapService } from '../services/MapService'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { useRoute } from 'vue-router'
import { tripsService } from '../services/TripsService'

export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    let map = null
    const mapSource = computed(() => AppState.tripStartSource)
    onMounted(() => {
      map = new MapService()
      setTimeout(() => {
      }, 2000)
      // go load TripMapSourceByTripId
    })

    watchEffect(() => {
      if (mapSource.value.id && map) {
        map.loadMapSource(mapSource.value)
        const img = map.getCanvas().toDataURL()
        editable.value.tripImgUrl = img
        tripsService.updateScreenShot(route.params.tripId, editable.value)

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
.map {
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
