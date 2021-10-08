<template>
  <div class="container-fluid bg-primary">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <router-link :to="{ name: 'Account' }" class="">
            <h2 class="selectable t-shad3">
              x
            </h2>
          </router-link>
        </div>
        <div class="d-flex justify-content-center my-0">
          <div class="text-shadow2 t-shad2 d-flex justify-content-center align-items-center">
            <h1 class="py-0">
              Trips
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center row-h">
      <TripCard :trip="t" v-for="t in trips" :key="t.id" />
    </div>
    <div class="row bg-primary">
      <div class="col-12 d-flex justify-content-center box-bottom-shadow rounded p-0" v-if="trips.length >= 2">
        <i class=" t-shad3 mdi mdi-menu-down f-30 "></i>
      </div>
      <div class="col-12 d-flex flex-column">
        <div class="text-center">
          <p class="mt-2 mb-0 t-shad3">
            Past trips
          </p>
        </div>
        <div class="text-center t-shad3">
          <h2>Summer Trip</h2>
        </div>
        <div class="text-center body-color">
          <h5>June 6, 2021</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <Map />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      trips: computed(() => AppState.trips)

    }
  }

}
</script>

<style lang="scss">
.text-shadow2 {
  border-radius: 10px;
  padding: 1rem 1rem;
  border: 3px dashed rgba(255,255,255,0.5);
  color: #CCA363;
  background-color: #E7DEBE;
    text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
    width: 50vw;
    height: 7vh;
}
.trip-card {
  border-radius: 10px;
  padding: .5rem 1rem;
  border: 3px dashed rgba(255,255,255,0.5);
  color: #A28558;
  background-color: #CCA363;
    text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
    width: 85vw;
    height: 6vh;
}

.head-height{
    height: 3vh;
}
.body-color{
    color: #E7DEBE;
}

.t-shad2{

  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
}
.bg-color{
background-color: #CCA363;
height: 100%;
}
.t-shad3{
color: #A28558;
text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
}
.box-bottom-shadow {
-webkit-box-shadow: 0 8px 6px -6px black;
-moz-box-shadow: 0 8px 6px -6px black;
 box-shadow: 0 4px 6px -6px black;
}
.row-h{
    max-height: 20vh;
    overflow: auto;
}
</style>
