<template>
  <div class="supplies container-fluid">
    <div class="row my-3 p-0">
      <div class="">
        <img class="logo selectable" src="../assets/img/circle-logo.png" alt="Tripr Logo" @click="toTripPage()">
      </div>
      <div class="d-flex align-items-start justify-content-end">
        <h1>Supplies</h1>
        <button title="Add Supplies" class="btn" data-bs-toggle="modal" data-bs-target="#supply-modal">
          <i class="mdi mdi-plus f-20"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <h1>Needed:</h1>
      <SuppliesList :key="s.id" v-for="s in supplies" :supply="s" />
    </div>
    <div class="row my-2">
      <h1>Assigned:</h1>
      <!-- inject Assigned list here -->
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
      required: true
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
      supplies: computed(() => AppState.supplies),
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
</style>
