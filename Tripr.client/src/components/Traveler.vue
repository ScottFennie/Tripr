<template>
  <div class="component py-2 my-2 ">
    <div class="row justify-content-center">
      <div class="col-10 card p-1">
        <div class="tripr_border p-2">
          <div class="row">
            <div class="col-3 ">
              <img :src="traveler.creator.picture" class="icon rounded-circle">
            </div>
            <div class="col-8 text">
              <p>{{ traveler.creator.name }}</p>
            </div>
            <!-- v-if needed on this col-1 -->
            <div class="col-1 p-0 pe-1">
              <i class="mdi mdi-close text-danger selectable f-16" @click="removeTraveler(traveler.id)"></i>
            </div>
          </div>
          <div class="row pt-1">
            <div class="col-12">
              <div class="ps-1 text">
                <p>
                  Supplies:
                  {{ travSupp }}
                </p>
              </div>
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
      travSupp: computed(() => AppState.currentSupplies.filter(s => s.assignedId === props.traveler.accountId).length),
      account: computed(() => AppState.account),
      async removeTraveler(travelerId) {
        try {
          const yes = await Pop.confirm('are you sure <b>you</b> want to remove this <em>Traveler</em>?')
          if (!yes) { return }
          await travelersService.removeTraveler(props.traveler.id, travelerId)
          Pop.toast('Traveler has been removed')
        } catch (error) {
          Pop.toast(error.message, 'error')
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

.card{
  background-color: #cca363;
}

.tripr_border{
  border: 3px dashed #C5C5C5;
  border-radius: 10px;
}

.text{
   color: #654e2a;
   font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
}
</style>
