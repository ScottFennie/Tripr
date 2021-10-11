<template>
  <div class="Supplies container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card text-center rounded shadow">
          <div class="card-body">
            <p class="card-text">
              {{ supply.description }}
            </p>
            <p class="card-text">
              {{ supply.quantity }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
// import Pop from '../utils/Pop'
// import { suppliesService } from '../services/SuppliesService'
import { Supplies } from '../Models/Supplies'
// import { useRoute } from 'vue-router'
export default {
  props: {
    supply: {
      type: Supplies,
      required: true
    }
  },
  setup(props) {
    // const route = useRoute()
    return {
      supplies: computed(() => AppState.supplies)

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
