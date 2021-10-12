<template>
  <!-- <button @click="createMap">
    Create Map
  </button> -->
  <div id="map">
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
// import { onMounted } from '@vue/runtime-core'
// import { loadModules } from 'esri-loader'

let Map = {}
let MapView = {}
let CoordinateConversion = []
require(['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/widgets/CoordinateConversion'], function(esriConfig, MapSRC, MapViewSRC, CoordinateConversionSRC) {
  esriConfig.apiKey = 'AAPKa4bb649adabd41ecb17f3b4614ec7de7fuFnN6h7T8A3zAcPcAcHaegzQPO-vZsAP6BBQxC3xkINSgaNvUlnI_ZmhHz3yTlU'
  Map = MapSRC
  MapView = MapViewSRC
  CoordinateConversion = CoordinateConversionSRC
})

export default {
  // props: {
  //   trip: {
  //     type: Trip,
  //     required: true
  //   }
  // },
  setup() {
    onMounted(async() => {
      // createMap() {
      const map = new Map({
        basemap: 'arcgis-topographic' // Basemap layer service
      })

      const view = new MapView({
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
        container: 'map' // Div element
      })
      const coordinates = new CoordinateConversion({
        view: view
      })

      view.ui.add(coordinates, 'top-right')
      // }
    })
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  #map {
    padding: 0;
    min-height: 50vh;
    min-width: 50vw;
  }
</style>
