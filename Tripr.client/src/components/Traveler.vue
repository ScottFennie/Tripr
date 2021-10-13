<template>
  <div class="component py-2 my-2 ">
    <div class="row justify-content-center">
      <div class="col-10 card py-2">
        <div class="row">
          <div class="col-3 ps-2">
            <img :src="traveler.creator.picture" class="icon rounded">
          </div>
          <div class="col-8">
            {{ traveler.creator.name }}
          </div>
          <!-- v-if needed on this col-1 -->
          <div class="col-1">
            <i class="mdi mdi-delete text-danger selectable" @click="removeTraveler(traveler.id)"></i>
          </div>
        </div>
        <div class="row pt-1">
          <div class="col-6">
            <div class="ps-1">
              Supplies: <br>
              {{ travSupp }}
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              Places: <br> N/Y/A
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { Traveler } from '../Models/Traveler'
import { travelersService } from '../services/TravelersService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  props: {
    traveler: {
      type: Traveler,
      required: true
    }
  },
  // tarvPlace: computed(()),
  setup(props) {
    return {
      // NOTE Not Sure if array is currentSupplies or just supplies
      travSupp: computed(() => AppState.currentSupplies.filter(s => s.assignedId === AppState.account.id).length),
      account: computed(() => AppState.account),
      async removeTraveler(travelerId) {
        if (Pop.confirm()) {
          await travelersService.removeTraveler(props.traveler.tripId, travelerId)
        }
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.icon{
  height: 40px;
}
</style>
