<template>
  <div class="container">
    <div class="row">
      <div class="d-flex mt-3 justify-content-between top-bar overlay">
        <div class="profile">
          <img class="profile-bg" src="../assets/img/user-bg.png" alt="">
          <img class="profile-picture" :src="account.picture" alt="">
        </div>
        <h2 class="trip-title">
          {{ trip.title }}
        </h2>
      </div>
      <Map class="map" />
    </div>
    <div class="row">
      <div class="bottom travelers bg-body">
      </div>
      <div class="bottom travelers-shadow">
      </div>
      <div class="bottom supplies bg-secondary">
        <h2 class="supplies-text">
          Supplies
          <svg style="width:36px;height:36px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14.3 21.7C13.6 21.9 12.8 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C13.3 2 14.6 2.3 15.8 2.7L14.2 4.3C13.5 4.1 12.8 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C12.4 20 12.9 20 13.3 19.9C13.5 20.6 13.9 21.2 14.3 21.7M7.9 10.1L6.5 11.5L11 16L21 6L19.6 4.6L11 13.2L7.9 10.1M18 14V17H15V19H18V22H20V19H23V17H20V14H18Z" />
          </svg>
        </h2>
        <div class="join-code">
          <h3 class="text-light">
            Join Code:
          </h3>
          <h2 class="text-secondary darken-30">
            <!-- {{ trip.tripCode }} -->
            H5FRP
          </h2>
        </div>
      </div>
      <div class="bottom supplies-shadow">
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
      trip: computed(() => AppState.currentTrip),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped lang='scss'>
.map {
  z-index: 0;
  height: 90vh;
  width: 100vw;
  position: absolute;
}
.profile-bg {
  width: 25vw;
  filter: drop-shadow(4px 0 4px rgba(0, 0, 0, 0.25));
}
.overlay {
  z-index: 1;
}
.trip-title {
  font-family: museo-slab, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #6d7746;
   -webkit-text-stroke: 1px #4A502F;
}
.supplies {
  z-index: 5;
  clip-path: polygon(0 80%, 100% 45%, 100% 100%, 0% 100%);
  height: 50vh;
  width: 100vw;
}
.supplies-shadow {
  z-index: 4;
  content: "";
  background: rgba(0, 0, 0, .25);
  height: 52vh;
  width: 100vw;
  clip-path: polygon(0 80%, 100% 45%, 100% 100%, 0% 100%)
}
.supplies-text {
    position: absolute;
    bottom: 50px;
    right: 45px;
    color: #cca363;
    font-family: 'museo-slab',serif;
    font-size: 2.1rem;
}
.join-code {
  position: absolute;
  bottom: 10px;
  left: 25px;
  font-family: 'Roboto';
}
h2 {

}
.travelers {
  z-index: 3;
  clip-path: polygon(0 45%, 100% 80%, 100% 100%, 0% 100%);
  height: 50vh;
  width: 100vw;
}
.travelers-shadow {
  z-index: 2;
  content: "";
  background: rgba(0, 0, 0, .25);
  height: 52vh;
  width: 100vw;
  clip-path: polygon(0 45%, 100% 80%, 100% 100%, 0% 100%)
}
.bottom {
  position: absolute;
  bottom: 0;

}
</style>
