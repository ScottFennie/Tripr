<template>
  <div class="component card py-2 my-2">
    <div class="row">
      <div class="col-2 ps-4">
        <img :src="traveler.creator.picture" class="icon">
      </div>
      <div class="col-6">
        {{ traveler.creator.name }}
      </div>
      <div class="col-4">
        {{ traveler.trip.title }}
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
