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
import { onMounted } from '@vue/runtime-core'
import { MapService } from '../services/MapService'

export default {
  setup() {
    let map = null
    onMounted(() => {
      map = new MapService()
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
