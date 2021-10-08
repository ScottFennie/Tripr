<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group">
      <label for="descrtipion" class="sr-only">Item Needed: </label>
      <input type="text"
             class="form-control bg-secondary"
             name="description"
             placeholder="Item Needed"
             v-model="editable.description"
      >
      <label for="quantity" class="sr-only">Amount of Items Needed: </label>
      <input type="number"
             class="form-control bg-secondary"
             name="quantity"
             placeholder="1"
             v-model="editable.quantity"
      >
    </div>
    <div class="button-group">
      <button type="submit" class="btn">
        <i class="mdi mdi-plus" />
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { suppliesService } from '../services/SuppliesService'
import { useRoute } from 'vue-router'
// import { watchEffect } from '@vue/runtime-core'
export default {
//   props: {
//     supplies: { type: Supplies }
//   },
  setup() {
    const route = useRoute()
    const editable = ref({})
    // watchEffect(() => {
    //   editable.value = { ...props.supplies }
    // })
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await suppliesService.editSupplies(editable.value, route.params.tripId)
            Pop.toast('item has been edited', 'success')
          } else {
            await suppliesService.createSupplies(editable.value, route.params.tripId)
            editable.value = {}
            Pop.toast('Supply item Added', 'success')
          }
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
