<template>
  <form @submit.prevent="joinTrip()">
    <div class="form-group">
      <label for="tripCode"></label>
      <input name="tripCode" type="text" v-model="editable.jkey">
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { tripsService } from '../services/TripsService'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async joinTrip() {
        try {
          await tripsService.checkIfTrip(editable.value.jkey)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
