<template>
  <div class="container-fluid">
    <div class="row d-flex">
      <div class="col-4">
        <img class="logo pt-2 ps-2"
             src="../assets/img/circle-logo.png"
             alt="Tripr Logo"
             @click="toTripPage()"
        >
      </div>
      <div class="col-8 text text-center pt-4">
        <h1>
          Travelers
        </h1>
      </div>
    </div>
    <div>
      <Traveler v-for="t in travelers" :key="t.id" :traveler="t" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { travelersService } from '../services/TravelersService'
import { useRoute } from 'vue-router'
import { suppliesService } from '../services/SuppliesService'
import Pop from '../utils/Pop'
export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      AppState.currentTripId = route.params.tripId
      await travelersService.getAllTravelers(route.params.tripId)
    })
    const travelers = computed(() => AppState.currTravelers)
    const TripId = computed(() => AppState.currentTripId)
    return {
      travelers,
      TripId,
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
.logo {
  width: 64px;
  filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.25));
}
.text{
  font-family: Museo Slab;
  font-style: normal;
  font-weight: normal;
  color: #654e2a;
}
</style>
