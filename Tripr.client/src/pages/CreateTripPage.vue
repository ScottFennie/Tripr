<template>
  <div class="container-fluid">
    <div class="row bg-body create-trip-title">
      <h2>Create Trip</h2>
    </div>
    <div class="row justify-content-center">
      <CreateTripForm />
    </div>
    <div class="row justify-content-center">
      <div class="col-12"></div>
      <Map />
    </div>
  </div>
</template>

<script>
import leaflet from 'leaflet'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    let mymap
    onMounted(() => {
      mymap = leaflet.map('mapid').setView([51.505, -0.09], 13)

      leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Zlbm5pZSIsImEiOiJja3VvOW4wMTcyZGFlMnBteGtiM28za2RwIn0.NprbvWfSrFeKAZg6P_i8rA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic2Zlbm5pZSIsImEiOiJja3VvOW4wMTcyZGFlMnBteGtiM28za2RwIn0.NprbvWfSrFeKAZg6P_i8rA'
      }).addTo(mymap)
    })
  }
}
</script>

<style lang="scss" scoped>
#mapid { height: 180px; }

.create-trip-title {
  clip-path: polygon(100% 45%, 100% 75%, 50% 100%, 0 75%, 0 45%);
}
</style>
