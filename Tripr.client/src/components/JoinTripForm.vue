<template>
  <form @submit.prevent="joinTrip()">
    <div class="form-group">
      <label for="tripCode"></label>
      <input class="bg-primary w-100 p-4 bord" name="tripCode" type="text" v-model="editable.jkey">
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
.text-shadow {
  border-radius: 3px;
  padding: .15rem 1rem;
  border: 3px dashed rgba(255,255,255,0.5);
  color: #A28558;
  text-shadow: 0px 2px 2px rgba(255,255,255,0.5);
}

.bord{    border-color: #E62D90;    border-style: dashed; }
</style>
