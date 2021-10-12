<template>
  <div class="component py-2 my-2 ">
    <div class="row justify-content-center">
      <div class="col-10 card py-1">
        <div class="row">
          <div class="col-2 ps-2">
            <img :src="traveler.creator.picture" class="icon rounded">
          </div>
          <div class="col-6">
            {{ traveler.creator.name }}
          </div>
          <div class="col-4">
            {{ traveler.trip.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Traveler } from '../Models/Traveler'
export default {
  props: {
    traveler: {
      type: Traveler,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.icon{
  height: 40px;
}
</style>
