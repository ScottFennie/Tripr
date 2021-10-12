<template>
  <div class="Supplies container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card text-center rounded shadow p-0 mt-2">
          <div class="card-body">
            <span class="d-flex justify-content-between p-0 m-0">
              <label for="isBringing" class="sr-only">Who wants to bring:</label>
              <input type="checkbox"
                     name="isBringing"
                     id="isBringing"
                     class="mt-2"
              >
              <p class="card-text">
                {{ supply.description }}
              </p>
              <p class="card-text">
                QTY: {{ supply.quantity }}
              </p>
            </span>
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
      currentSupplies: computed(() => AppState.currentSupplies)

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
