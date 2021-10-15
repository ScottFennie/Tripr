<template>
  <header class="bg-light">
    <div class="d-flex justify-content-between">
      <img class="m-3 selectable" src="../assets/img/circle-logo.png" alt="Tripr Logo" style="width:20vw;filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.25));" @click="toTripPage()">
      <div class="d-flex flex-column align-items-end me-3 mt-3">
        <h2 class="trip-title">
          {{ trip.title }}
        </h2>
        <p>
          <!-- locations: {{ trip.features.length }} -->
        </p>
      </div>
    </div>
  </header>
  <div>
    <TripMapBox class="map" />
  </div>
  <footer class="bg-light">
    <ul class="list-group">
      <li class="selectable list-group-item d-flex justify-content-between" v-for="l in trip.features" :key="l.id">
        <div class="d-flex align-items-center">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#E26363" d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
          </svg>
          <h3 class="text-grey">
            {{ (trip.features.indexOf(l) +1) }}
          </h3>
        </div>
        <h4 class="text-primary">
          {{ l.text }}
        </h4>
      </li>
    </ul>
  </footer>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { suppliesService } from '../services/SuppliesService'
import Pop from '../utils/Pop'
export default {
  setup() {
    return {
      trip: computed(() => AppState.currentTrip),
      async toTripPage() {
        try {
          await suppliesService.gotoTripPage()
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
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
  height: 85vh;
  width: 100vw;
  position: absolute;
}
footer {
  z-index: 2;
  position: absolute;
  bottom: 0;
  width: 100vw;
  max-height: 25vh;
  overflow-y: scroll;
}
li {
  filter: drop-shadow(4px 0 4px rgba(0, 0, 0, 0.25));
}
</style>
