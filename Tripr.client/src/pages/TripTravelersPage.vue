<template>
  <div class="component">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const travelers = computed(() => AppState.travelers)
    return {
      travelers
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
