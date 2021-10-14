<template>
  <div class="container-fluid component py-2 my-2">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 card p-1">
        <div class="tripr_border p-1">
          <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
              <img :src="traveler.creator.picture" class="icon rounded-circle">
              <p class="ps-2 name-text">
                {{ traveler.creator.name }}
              </p>
              <i class="mdi mdi-close text-danger selectable f-16" @click="removeTraveler(traveler.id)" />
              <div class="row text">
                <div class="col-12 p-0 text-end pe-2">
                  <span>
                    <p class="m-0 mb-3 p-0">
                      Supplies:
                      {{ travSupp }}
                    </p>
                    <p class="m-0 p-0">
                      locations: 0
                    <!-- locations value goes here -->
                    </p>
                  </span>
                </div>
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
  height: 64px;
  width: 64px;
}

.card{
  background-color: #cca363;
  border-radius: 10px;
}

.tripr_border{
  border: 3px dashed #C5C5C5;
  border-radius: 10px;
}

.name-text{
  color: #654e2a;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}

.text{
  color: #654e2a;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
</style>
