<template>
  <div class="container-fluid bg-primary">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <router-link :to="{ name: 'Account' }" class="">
            <i class="mdi mdi-close selectable f-26 close-btn"></i>
          </router-link>
        </div>
        <div class="d-flex justify-content-center my-0">
          <div class="trip-patch d-flex justify-content-center align-items-center">
            <h1 class="trip-border">
              Trips
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <TripCard :trip="t" v-for="t in trips" :key="t.id" />
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
.trip-patch {
  box-shadow: 3px 3px 5px #A28558;
  margin: .25rem;
  padding: .25vh .5vw;
  border-radius: 10px;
  background-color: #e7debe;
}
.trip-border {
  border: 2px dashed #fff5d3;
  padding: .5vh 20vw;
  margin-bottom: 0;
  border-radius: 10px;
  font-family: museo-slab,serif;
  font-weight: bold;
  color: #A28558;
}
.text-shadow2 {
  border-radius: 10px;
  padding: 1rem 1rem;
  border: 2px dashed rgb(226, 188, 127);
  color: rgb(204, 163, 99);
  background-color: #E7DEBE;
    text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
    width: 50vw;
    height: 7vh;
}
.trip-card {
  font-family: museo-slab,serif;
  border-radius: 10px;
  padding: .5rem 1rem;
  color: #6e5a3c;
  background-color: #CCA363;
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
.close-btn {
  color: #A28558;
}
</style>
