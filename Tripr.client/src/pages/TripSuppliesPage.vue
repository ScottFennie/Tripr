<template>
  <div class="supplies container-fluid px-0">
    <div class="row">
      <div>
        <img class="logo selectable m-2" src="../assets/img/circle-logo.png" alt="Tripr Logo" @click="toTripPage()">
      </div>
      <div class="d-flex align-items-start justify-content-end text-center">
        <h1>Supplies:</h1>
        <button title="Add Supplies" class="btn" data-bs-toggle="modal" data-bs-target="#supply-modal">
          <i class="mdi mdi-plus f-20"></i>
        </button>
      </div>
    </div>
    <div>
      <h1 class="text-center border-top m-0">
        Need:
      </h1>
      <div v-for="s in currentSupplies" :key="s.id" :supply="s" class="row p-1">
        <SuppliesList v-if="!s.isBringing" :key="s.id" :supply="s" />
      </div>
      <h1 class="mt-3 text-center border-top">
        Assigned:
      </h1>
      <div v-for="s in currentSupplies" :key="s.id" :supply="s" class="row p-3">
        <SuppliesList v-if="s.isBringing" :key="s.id" :supply="s" />
      </div>
    </div>
  </div>

  <Modal id="supply-modal">
    <template #modal-title>
      <h3>Supplies</h3>
    </template>
    <template #modal-body>
      <SuppliesForm />
    </template>
  </Modal>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { suppliesService } from '../services/SuppliesService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { Supplies } from '../Models/Supplies'
export default {
  props: {
    supply: {
      type: Supplies,
      default: () => new Supplies()
      // required: true
    }
  },
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await suppliesService.getSupplies(route.params.tripId)
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      currentSupplies: computed(() => AppState.currentSupplies),
      async toTripPage() {
        try {
          await suppliesService.gotoTripPage()
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 64px;
  filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.25));
}

.text-center{
   font-family: Museo Slab;
font-style: normal;
font-weight: normal;
font-size: 30px;
}

.supplies{
  background-color: #6d7746;
  height: 100vh;
  color: #cca363;
}

.border-top{
  border-color: #b5af98;
  width: vw100;
}
</style>
