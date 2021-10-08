<template>
  <form @submit.prevent="joinTrip()">
    <div class="form-group">
      <label for="tripCode"></label>
      <input name="tripCode" type="text" v-model="trip.tripcode">
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const trip = ref({})
    return {
      trip,
      joinTrip() {

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
