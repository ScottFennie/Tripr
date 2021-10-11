<template>
  <header class="bg-light">
    <div class="d-flex justify-content-between">
      <img class="m-3" src="../assets/img/circle-logo.png" alt="Tripr Logo" style="width:20vw;filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.25));">
      <div class="d-flex flex-column align-items-end me-3 mt-3">
        <h2 class="trip-title">
          {{ trip.title }}
        </h2>
        <p>
          locations: {{ trip.locations }}
        </p>
      </div>
    </div>
  </header>
  <Map class="map" />
  <footer class="bg-light">
    <div v-for="r in routes">
    </div>
  </footer>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      trip: computed(() => AppState.currentTrip)
    }
  }
}
</script>

<style lang="scss" scoped>
.trip-title {
  font-family: museo-slab, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #6d7746;
   -webkit-text-stroke: 1px #4A502F;
}
.map {
  z-index: 0;
  height: 90vh;
  width: 100vw;
  position: absolute;
}
</style>
